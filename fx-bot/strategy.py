"""
USD/KRW 15분봉 MA크로스 자동매매 봇 - 전략 엔진
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
    """이동평균선 크로스오버 전략"""

    def __init__(self, config: StrategyConfig = None):
        self.config = config or StrategyConfig()
        self._prev_fast_above_slow: Optional[bool] = None

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
        return df

    def _calc_strength(self, df: pd.DataFrame, idx: int) -> float:
        """신호 강도 계산 (0~1)"""
        strength = 0.5  # 기본값

        # MA 스프레드 기울기 기반
        if idx >= 2:
            spread_now = abs(df["fast_ma"].iloc[idx] - df["slow_ma"].iloc[idx])
            spread_prev = abs(df["fast_ma"].iloc[idx - 1] - df["slow_ma"].iloc[idx - 1])
            if spread_now > spread_prev:
                strength += 0.15

        # 시그널MA 확인
        if not pd.isna(df["signal_ma"].iloc[idx]):
            fast = df["fast_ma"].iloc[idx]
            signal = df["signal_ma"].iloc[idx]
            slow = df["slow_ma"].iloc[idx]
            if fast > signal > slow or fast < signal < slow:
                strength += 0.15

        # RSI 필터
        rsi = df["rsi"].iloc[idx]
        if not pd.isna(rsi):
            if 40 <= rsi <= 60:
                strength += 0.1
            elif rsi < 30 or rsi > 70:
                strength -= 0.1

        # 볼린저밴드 위치
        close = df["close"].iloc[idx]
        bb_lower = df["bb_lower"].iloc[idx]
        bb_upper = df["bb_upper"].iloc[idx]
        if not pd.isna(bb_lower):
            if close <= bb_lower:
                strength += 0.1  # 하단 = 매수 강화
            elif close >= bb_upper:
                strength += 0.1  # 상단 = 매도 강화

        return max(0.0, min(1.0, strength))

    def generate_signal(self, df: pd.DataFrame) -> TradeSignal:
        """최신 캔들 기준 매매 신호 생성"""
        df = self.add_indicators(df)
        idx = len(df) - 1

        if idx < 1:
            return TradeSignal(Signal.HOLD, df["close"].iloc[idx], reason="데이터 부족")

        fast_now = df["fast_ma"].iloc[idx]
        slow_now = df["slow_ma"].iloc[idx]
        fast_prev = df["fast_ma"].iloc[idx - 1]
        slow_prev = df["slow_ma"].iloc[idx - 1]
        price = df["close"].iloc[idx]
        ts = df.index[idx] if isinstance(df.index, pd.DatetimeIndex) else None

        if pd.isna(fast_now) or pd.isna(slow_now) or pd.isna(fast_prev) or pd.isna(slow_prev):
            return TradeSignal(Signal.HOLD, price, reason="지표 계산 대기", timestamp=ts)

        fast_above_slow = fast_now > slow_now
        prev_fast_above_slow = fast_prev > slow_prev

        # RSI 필터
        rsi = df["rsi"].iloc[idx]
        rsi_filter_ok = True
        if not pd.isna(rsi):
            if rsi > self.config.rsi_overbought:
                rsi_filter_ok = False  # 과매수 → 매수 불가
            elif rsi < self.config.rsi_oversold:
                rsi_filter_ok = False  # 과매도 → 매도 불가

        strength = self._calc_strength(df, idx)

        # 골든크로스: 단기MA가 장기MA를 상향돌파
        if fast_above_slow and not prev_fast_above_slow:
            if rsi_filter_ok or (not pd.isna(rsi) and rsi < self.config.rsi_overbought):
                return TradeSignal(
                    Signal.BUY, price, strength,
                    f"골든크로스 (fast={fast_now:.2f} > slow={slow_now:.2f}, RSI={rsi:.1f})",
                    timestamp=ts,
                )

        # 데드크로스: 단기MA가 장기MA를 하향돌파
        if not fast_above_slow and prev_fast_above_slow:
            if rsi_filter_ok or (not pd.isna(rsi) and rsi > self.config.rsi_oversold):
                return TradeSignal(
                    Signal.SELL, price, strength,
                    f"데드크로스 (fast={fast_now:.2f} < slow={slow_now:.2f}, RSI={rsi:.1f})",
                    timestamp=ts,
                )

        return TradeSignal(Signal.HOLD, price, 0.0, "대기", timestamp=ts)

    def check_exit(
        self, entry_price: float, current_price: float, position_side: str,
        highest_since_entry: float = None, stop_loss_pct: float = 0.3,
        take_profit_pct: float = 0.5, trailing_stop_pct: float = 0.2,
    ) -> Optional[TradeSignal]:
        """손절/익절/트레일링스탑 종료 조건 체크"""
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

        return None
