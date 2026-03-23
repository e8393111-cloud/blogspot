"""
USD/KRW 15분봉 MA크로스 자동매매 봇 - 전략 엔진 v3
고급 필터: MA정렬, 기울기확인, RSI모멘텀, ATR필터, 크로스확인봉, 반대크로스청산
"""

from dataclasses import dataclass
from enum import Enum
from typing import Optional

import numpy as np
import pandas as pd

from config import StrategyConfig


class Signal(Enum):
    BUY = "BUY"
    SELL = "SELL"
    HOLD = "HOLD"
    EXIT_LONG = "EXIT_LONG"
    EXIT_SHORT = "EXIT_SHORT"


@dataclass
class TradeSignal:
    signal: Signal
    price: float
    strength: float = 0.0  # 0~1 신호 강도
    reason: str = ""
    timestamp: Optional[pd.Timestamp] = None


class MACrossStrategy:
    """이동평균선 크로스오버 전략 (고급 필터 적용)"""

    def __init__(self, config: StrategyConfig = None):
        self.config = config or StrategyConfig()

    def calc_sma(self, series: pd.Series, period: int) -> pd.Series:
        return series.rolling(window=period, min_periods=period).mean()

    def calc_ema(self, series: pd.Series, period: int) -> pd.Series:
        return series.ewm(span=period, adjust=False).mean()

    def calc_ma(self, series: pd.Series, period: int) -> pd.Series:
        if self.config.ma_type == "EMA":
            return self.calc_ema(series, period)
        return self.calc_sma(series, period)

    def calc_rsi(self, series: pd.Series, period: int = None) -> pd.Series:
        period = period or self.config.rsi_period
        delta = series.diff()
        gain = delta.where(delta > 0, 0.0)
        loss = (-delta).where(delta < 0, 0.0)
        avg_gain = gain.rolling(window=period, min_periods=period).mean()
        avg_loss = loss.rolling(window=period, min_periods=period).mean()
        rs = avg_gain / avg_loss.replace(0, np.nan)
        return 100 - (100 / (1 + rs))

    def calc_atr(self, df: pd.DataFrame, period: int = None) -> pd.Series:
        """Average True Range 계산"""
        period = period or self.config.atr_period
        high = df["high"]
        low = df["low"]
        close = df["close"].shift(1)
        tr = pd.concat([
            high - low,
            (high - close).abs(),
            (low - close).abs(),
        ], axis=1).max(axis=1)
        return tr.rolling(window=period, min_periods=period).mean()

    def calc_bollinger(self, series: pd.Series) -> tuple[pd.Series, pd.Series, pd.Series]:
        mid = self.calc_sma(series, self.config.bb_period)
        std = series.rolling(window=self.config.bb_period, min_periods=self.config.bb_period).std()
        upper = mid + self.config.bb_std * std
        lower = mid - self.config.bb_std * std
        return upper, mid, lower

    def add_indicators(self, df: pd.DataFrame) -> pd.DataFrame:
        """데이터프레임에 기술적 지표 추가"""
        df = df.copy()
        close = df["close"]
        df["fast_ma"] = self.calc_ma(close, self.config.fast_ma)
        df["slow_ma"] = self.calc_ma(close, self.config.slow_ma)
        df["signal_ma"] = self.calc_ma(close, self.config.signal_ma)
        df["rsi"] = self.calc_rsi(close)
        df["bb_upper"], df["bb_mid"], df["bb_lower"] = self.calc_bollinger(close)

        # 슬로우MA 기울기
        lb = self.config.slope_lookback
        df["slow_ma_slope"] = df["slow_ma"] - df["slow_ma"].shift(lb)

        # RSI 변화 방향
        df["rsi_delta"] = df["rsi"] - df["rsi"].shift(3)

        # ATR
        df["atr"] = self.calc_atr(df)
        atr_lookback = self.config.atr_period * 3
        df["atr_avg"] = df["atr"].rolling(window=atr_lookback, min_periods=self.config.atr_period).mean()

        return df

    def _check_ma_alignment(self, df: pd.DataFrame, idx: int, direction: str) -> bool:
        """3중 MA 정렬 확인"""
        if not self.config.require_ma_alignment:
            return True
        fast = df["fast_ma"].iloc[idx]
        signal = df["signal_ma"].iloc[idx]
        slow = df["slow_ma"].iloc[idx]
        if any(pd.isna(v) for v in [fast, signal, slow]):
            return False
        if direction == "buy":
            return fast > signal > slow
        else:
            return fast < signal < slow

    def _check_slope_confirm(self, df: pd.DataFrame, idx: int, direction: str) -> bool:
        """슬로우MA 기울기가 매매 방향과 일치하고 최소 강도 이상인지"""
        if not self.config.require_slope_confirm:
            return True
        slope = df["slow_ma_slope"].iloc[idx]
        if pd.isna(slope):
            return False
        min_abs = self.config.min_slope_abs
        if direction == "buy":
            return slope > min_abs
        else:
            return slope < -min_abs

    def _check_min_spread(self, df: pd.DataFrame, idx: int) -> bool:
        """MA 스프레드가 최소 기준 이상인지"""
        fast = df["fast_ma"].iloc[idx]
        slow = df["slow_ma"].iloc[idx]
        if pd.isna(fast) or pd.isna(slow) or slow == 0:
            return False
        spread_pct = abs(fast - slow) / slow * 100
        return spread_pct >= self.config.min_ma_spread_pct

    def _check_rsi_momentum(self, df: pd.DataFrame, idx: int, direction: str) -> bool:
        """RSI 모멘텀이 매매 방향과 일치하는지"""
        if not self.config.rsi_momentum_confirm:
            return True
        rsi = df["rsi"].iloc[idx]
        rsi_delta = df["rsi_delta"].iloc[idx]
        if pd.isna(rsi) or pd.isna(rsi_delta):
            return True
        if direction == "buy":
            return rsi_delta > 0 and rsi < self.config.rsi_overbought
        else:
            return rsi_delta < 0 and rsi > self.config.rsi_oversold

    def _check_atr_filter(self, df: pd.DataFrame, idx: int) -> bool:
        """ATR이 충분한지 (횡보 필터)"""
        atr = df["atr"].iloc[idx]
        atr_avg = df["atr_avg"].iloc[idx]
        if pd.isna(atr) or pd.isna(atr_avg) or atr_avg == 0:
            return True  # 데이터 부족시 통과
        return atr >= atr_avg * self.config.min_atr_multiplier

    def _check_cross_confirmed(self, df: pd.DataFrame, idx: int, direction: str) -> bool:
        """크로스가 N봉 연속 유지되었는지 확인"""
        confirm = self.config.cross_confirm_bars
        if confirm <= 0:
            return True
        if idx < confirm:
            return False

        for k in range(confirm):
            check_idx = idx - k
            fast = df["fast_ma"].iloc[check_idx]
            slow = df["slow_ma"].iloc[check_idx]
            if pd.isna(fast) or pd.isna(slow):
                return False
            if direction == "buy" and fast <= slow:
                return False
            if direction == "sell" and fast >= slow:
                return False
        return True

    def _find_cross_bar(self, df: pd.DataFrame, idx: int, direction: str) -> Optional[int]:
        """최근 크로스가 발생한 봉 인덱스 찾기"""
        for i in range(idx, max(idx - 10, 0), -1):
            if i < 1:
                break
            fast_now = df["fast_ma"].iloc[i]
            slow_now = df["slow_ma"].iloc[i]
            fast_prev = df["fast_ma"].iloc[i - 1]
            slow_prev = df["slow_ma"].iloc[i - 1]
            if any(pd.isna(v) for v in [fast_now, slow_now, fast_prev, slow_prev]):
                continue
            if direction == "buy" and fast_now > slow_now and fast_prev <= slow_prev:
                return i
            if direction == "sell" and fast_now < slow_now and fast_prev >= slow_prev:
                return i
        return None

    def _calc_strength(self, df: pd.DataFrame, idx: int, direction: str) -> float:
        """신호 강도 계산 (0~1)"""
        strength = 0.25

        if self._check_ma_alignment(df, idx, direction):
            strength += 0.2
        if self._check_slope_confirm(df, idx, direction):
            strength += 0.15
        if self._check_min_spread(df, idx):
            strength += 0.1
        if self._check_rsi_momentum(df, idx, direction):
            strength += 0.15
        if self._check_atr_filter(df, idx):
            strength += 0.1

        # 볼린저밴드 위치 보너스
        close = df["close"].iloc[idx]
        bb_lower = df["bb_lower"].iloc[idx]
        bb_upper = df["bb_upper"].iloc[idx]
        if not pd.isna(bb_lower):
            if direction == "buy" and close <= bb_lower * 1.002:
                strength += 0.05
            elif direction == "sell" and close >= bb_upper * 0.998:
                strength += 0.05

        return max(0.0, min(1.0, strength))

    def generate_signal(self, df: pd.DataFrame) -> TradeSignal:
        """최신 캔들 기준 매매 신호 생성 (고급 필터 적용)"""
        df = self.add_indicators(df)
        idx = len(df) - 1

        if idx < 1:
            return TradeSignal(Signal.HOLD, df["close"].iloc[idx], reason="데이터 부족")

        fast_now = df["fast_ma"].iloc[idx]
        slow_now = df["slow_ma"].iloc[idx]
        price = df["close"].iloc[idx]
        ts = df.index[idx] if isinstance(df.index, pd.DatetimeIndex) else None

        if pd.isna(fast_now) or pd.isna(slow_now):
            return TradeSignal(Signal.HOLD, price, reason="지표 계산 대기", timestamp=ts)

        rsi = df["rsi"].iloc[idx]

        # 골든크로스 확인 (N봉 연속 fast > slow 유지)
        if self._check_cross_confirmed(df, idx, "buy"):
            cross_bar = self._find_cross_bar(df, idx, "buy")
            if cross_bar is not None and (idx - cross_bar) == self.config.cross_confirm_bars:
                # 정확히 확인봉 수만큼 지난 시점에서 진입 판단
                strength = self._calc_strength(df, idx, "buy")
                filters_failed = []
                if not self._check_ma_alignment(df, idx, "buy"):
                    filters_failed.append("MA정렬X")
                if not self._check_slope_confirm(df, idx, "buy"):
                    filters_failed.append("기울기X")
                if not self._check_rsi_momentum(df, idx, "buy"):
                    filters_failed.append("RSI모멘텀X")
                if not self._check_atr_filter(df, idx):
                    filters_failed.append("ATR부족")

                if strength >= self.config.min_strength:
                    rsi_str = f"{rsi:.1f}" if not pd.isna(rsi) else "N/A"
                    return TradeSignal(
                        Signal.BUY, price, strength,
                        f"골든크로스 확인 (fast={fast_now:.2f}>slow={slow_now:.2f}, "
                        f"RSI={rsi_str}, 강도={strength:.2f})",
                        timestamp=ts,
                    )
                else:
                    return TradeSignal(
                        Signal.HOLD, price, strength,
                        f"골든크로스 필터링 ({', '.join(filters_failed)}, 강도={strength:.2f})",
                        timestamp=ts,
                    )

        # 데드크로스 확인
        if self._check_cross_confirmed(df, idx, "sell"):
            cross_bar = self._find_cross_bar(df, idx, "sell")
            if cross_bar is not None and (idx - cross_bar) == self.config.cross_confirm_bars:
                strength = self._calc_strength(df, idx, "sell")
                filters_failed = []
                if not self._check_ma_alignment(df, idx, "sell"):
                    filters_failed.append("MA정렬X")
                if not self._check_slope_confirm(df, idx, "sell"):
                    filters_failed.append("기울기X")
                if not self._check_rsi_momentum(df, idx, "sell"):
                    filters_failed.append("RSI모멘텀X")
                if not self._check_atr_filter(df, idx):
                    filters_failed.append("ATR부족")

                if strength >= self.config.min_strength:
                    rsi_str = f"{rsi:.1f}" if not pd.isna(rsi) else "N/A"
                    return TradeSignal(
                        Signal.SELL, price, strength,
                        f"데드크로스 확인 (fast={fast_now:.2f}<slow={slow_now:.2f}, "
                        f"RSI={rsi_str}, 강도={strength:.2f})",
                        timestamp=ts,
                    )
                else:
                    return TradeSignal(
                        Signal.HOLD, price, strength,
                        f"데드크로스 필터링 ({', '.join(filters_failed)}, 강도={strength:.2f})",
                        timestamp=ts,
                    )

        return TradeSignal(Signal.HOLD, price, 0.0, "대기", timestamp=ts)

    def check_exit(
        self, entry_price: float, current_price: float, position_side: str,
        highest_since_entry: float = None, stop_loss_pct: float = 1.0,
        take_profit_pct: float = 1.5, trailing_stop_pct: float = 0.5,
        df: pd.DataFrame = None, bars_held: int = 0,
    ) -> Optional[TradeSignal]:
        """종료 조건: 손절/익절/트레일링스탑 + 반대크로스(최소보유 후)"""
        if position_side == "long":
            pnl_pct = (current_price - entry_price) / entry_price * 100
        else:
            pnl_pct = (entry_price - current_price) / entry_price * 100

        exit_signal = Signal.EXIT_LONG if position_side == "long" else Signal.EXIT_SHORT

        # 손절
        if pnl_pct <= -stop_loss_pct:
            return TradeSignal(exit_signal, current_price, 1.0,
                               f"손절 ({pnl_pct:.2f}%)")

        # 익절
        if pnl_pct >= take_profit_pct:
            return TradeSignal(exit_signal, current_price, 1.0,
                               f"익절 ({pnl_pct:.2f}%)")

        # 트레일링스탑
        if highest_since_entry is not None:
            if position_side == "long":
                drawdown = (highest_since_entry - current_price) / highest_since_entry * 100
            else:
                drawdown = (current_price - highest_since_entry) / highest_since_entry * 100
            if drawdown >= trailing_stop_pct and pnl_pct > 0:
                return TradeSignal(exit_signal, current_price, 0.8,
                                   f"트레일링스탑 (고점대비 -{drawdown:.2f}%)")

        # 반대 크로스 청산 (최소 보유기간 경과 후에만)
        if df is not None and len(df) >= 2 and bars_held >= self.config.min_hold_bars:
            df_ind = self.add_indicators(df)
            idx = len(df_ind) - 1

            # 반대 크로스가 확인봉만큼 유지되었는지 체크
            if position_side == "long":
                if self._check_cross_confirmed(df_ind, idx, "sell"):
                    return TradeSignal(exit_signal, current_price, 0.9,
                                       f"반대크로스 청산 ({pnl_pct:.2f}%)")
            else:
                if self._check_cross_confirmed(df_ind, idx, "buy"):
                    return TradeSignal(exit_signal, current_price, 0.9,
                                       f"반대크로스 청산 ({pnl_pct:.2f}%)")

        return None
