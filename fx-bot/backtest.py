"""
USD/KRW 15분봉 MA크로스 자동매매 봇 - 백테스트 엔진
"""

import logging
from dataclasses import dataclass, field
from datetime import datetime, timedelta

import numpy as np
import pandas as pd

from config import Config
from strategy import MACrossStrategy, Signal

logger = logging.getLogger(__name__)


@dataclass
class BacktestResult:
    total_trades: int = 0
    winning_trades: int = 0
    losing_trades: int = 0
    win_rate: float = 0.0
    total_return_pct: float = 0.0
    max_drawdown_pct: float = 0.0
    sharpe_ratio: float = 0.0
    profit_factor: float = 0.0
    avg_profit_pct: float = 0.0
    avg_loss_pct: float = 0.0
    max_consecutive_wins: int = 0
    max_consecutive_losses: int = 0
    trades: pd.DataFrame = field(default_factory=pd.DataFrame)


def generate_sample_data(days: int = 14, base_price: float = 1492.0, seed: int = 42) -> pd.DataFrame:
    """차트 패턴 기반 샘플 데이터 생성 - 트렌드 구간 포함
    패턴: 횡보→상승트렌드→고점횡보→하락→V자반등→상승
    MA크로스 전략이 트렌드 구간에서 수익을 낼 수 있도록 설계
    """
    rng = np.random.RandomState(seed)
    candles_per_day = 24 * 4  # 15분봉 기준 하루 96개
    total = days * candles_per_day

    # 트렌드 세그먼트 정의 (시작가, 끝가, 캔들수)
    segments = [
        (1492.0, 1494.0, 80),   # 횡보 (약 20시간)
        (1494.0, 1510.0, 160),  # 상승 트렌드 (약 40시간) - 골든크로스 기대
        (1510.0, 1508.0, 60),   # 고점 횡보
        (1508.0, 1482.0, 120),  # 하락 트렌드 (약 30시간) - 데드크로스 기대
        (1482.0, 1484.0, 60),   # 바닥 횡보
        (1484.0, 1504.0, 140),  # V자 반등 상승 - 골든크로스 기대
        (1504.0, 1506.0, 80),   # 횡보
        (1506.0, 1520.0, 140),  # 추가 상승
        (1520.0, 1515.0, 80),   # 조정
        (1515.0, 1500.0, 120),  # 하락
        (1500.0, 1510.0, 100),  # 반등
    ]

    prices = []
    for start_p, end_p, n_candles in segments:
        for j in range(n_candles):
            t = j / max(n_candles - 1, 1)
            p = start_p + (end_p - start_p) * t + rng.normal(0, 0.4)
            prices.append(p)
            if len(prices) >= total:
                break
        if len(prices) >= total:
            break

    # 부족한 경우 마지막 가격 기준 횡보로 채움
    while len(prices) < total:
        prices.append(prices[-1] + rng.normal(0, 0.3))

    prices = prices[:total]

    now = datetime.now()
    start = now - timedelta(days=days)
    timestamps = [start + timedelta(minutes=15 * i) for i in range(total)]

    rows = []
    for ts, p in zip(timestamps, prices):
        h = p + abs(rng.normal(0, 0.8))
        l = p - abs(rng.normal(0, 0.8))
        o = p + rng.normal(0, 0.3)
        v = max(100, int(rng.normal(5000, 1500)))
        rows.append({"timestamp": ts, "open": o, "high": h, "low": l, "close": p, "volume": v})

    df = pd.DataFrame(rows)
    df.set_index("timestamp", inplace=True)
    return df


class Backtester:
    """백테스트 엔진"""

    def __init__(self, config: Config = None):
        self.config = config or Config()
        self.strategy = MACrossStrategy(self.config.strategy)

    def run(self, data: pd.DataFrame = None, days: int = 14) -> BacktestResult:
        """백테스트 실행"""
        if data is None:
            data = generate_sample_data(days=days)

        cfg = self.config.trade
        initial_balance = 100_000.0
        balance = initial_balance
        position = None  # {"side", "amount", "entry_price", "highest"}
        trades_log = []
        equity_curve = []
        min_bars = self.config.strategy.slow_ma + 2

        logger.info(f"백테스트 시작: {len(data)}개 캔들, {data.index[0]} ~ {data.index[-1]}")

        for i in range(min_bars, len(data)):
            window = data.iloc[:i + 1]
            signal = self.strategy.generate_signal(window)
            price = data["close"].iloc[i]
            ts = data.index[i]

            # 포지션 보유 시 종료 조건 체크
            if position is not None:
                position["highest"] = max(position["highest"], price)
                exit_sig = self.strategy.check_exit(
                    position["entry_price"], price, position["side"],
                    position["highest"],
                    cfg.stop_loss_pct, cfg.take_profit_pct, cfg.trailing_stop_pct,
                )
                if exit_sig is not None:
                    # 포지션 종료
                    if position["side"] == "long":
                        pnl = (price - position["entry_price"]) * position["amount"]
                    else:
                        pnl = (position["entry_price"] - price) * position["amount"]
                    balance += pnl
                    trades_log.append({
                        "entry_time": position["entry_time"],
                        "exit_time": ts,
                        "side": position["side"],
                        "entry_price": position["entry_price"],
                        "exit_price": price,
                        "amount": position["amount"],
                        "pnl": pnl,
                        "pnl_pct": pnl / (position["entry_price"] * position["amount"]) * 100,
                        "reason": exit_sig.reason,
                    })
                    position = None

            # 신규 진입
            if position is None:
                if signal.signal == Signal.BUY:
                    amount = min(cfg.trade_amount, cfg.max_position) / price
                    position = {
                        "side": "long", "amount": amount,
                        "entry_price": price, "highest": price,
                        "entry_time": ts,
                    }
                elif signal.signal == Signal.SELL:
                    amount = min(cfg.trade_amount, cfg.max_position) / price
                    position = {
                        "side": "short", "amount": amount,
                        "entry_price": price, "highest": price,
                        "entry_time": ts,
                    }

            # 평가 잔고
            if position:
                if position["side"] == "long":
                    unrealized = (price - position["entry_price"]) * position["amount"]
                else:
                    unrealized = (position["entry_price"] - price) * position["amount"]
                equity_curve.append(balance + unrealized)
            else:
                equity_curve.append(balance)

        # 미청산 포지션 강제 정리
        if position is not None:
            price = data["close"].iloc[-1]
            if position["side"] == "long":
                pnl = (price - position["entry_price"]) * position["amount"]
            else:
                pnl = (position["entry_price"] - price) * position["amount"]
            balance += pnl
            trades_log.append({
                "entry_time": position["entry_time"],
                "exit_time": data.index[-1],
                "side": position["side"],
                "entry_price": position["entry_price"],
                "exit_price": price,
                "amount": position["amount"],
                "pnl": pnl,
                "pnl_pct": pnl / (position["entry_price"] * position["amount"]) * 100,
                "reason": "백테스트 종료",
            })

        return self._calc_result(trades_log, equity_curve, initial_balance, balance)

    def _calc_result(
        self, trades_log: list, equity_curve: list,
        initial_balance: float, final_balance: float,
    ) -> BacktestResult:
        result = BacktestResult()
        if not trades_log:
            result.trades = pd.DataFrame()
            return result

        trades_df = pd.DataFrame(trades_log)
        result.trades = trades_df
        result.total_trades = len(trades_df)
        result.winning_trades = len(trades_df[trades_df["pnl"] > 0])
        result.losing_trades = len(trades_df[trades_df["pnl"] <= 0])
        result.win_rate = result.winning_trades / result.total_trades * 100

        result.total_return_pct = (final_balance - initial_balance) / initial_balance * 100

        # MDD
        if equity_curve:
            eq = np.array(equity_curve)
            peak = np.maximum.accumulate(eq)
            dd = (peak - eq) / peak * 100
            result.max_drawdown_pct = float(np.max(dd)) if len(dd) > 0 else 0.0

        # 샤프비율 (연환산, 무위험이자율 3%)
        if len(trades_df) > 1:
            returns = trades_df["pnl_pct"].values
            if np.std(returns) > 0:
                periods_per_year = 365 * 24 * 4  # 15분봉 기준
                result.sharpe_ratio = (np.mean(returns) - 3.0 / periods_per_year) / np.std(returns) * np.sqrt(periods_per_year)

        # Profit Factor
        gross_profit = trades_df[trades_df["pnl"] > 0]["pnl"].sum()
        gross_loss = abs(trades_df[trades_df["pnl"] <= 0]["pnl"].sum())
        result.profit_factor = gross_profit / gross_loss if gross_loss > 0 else float("inf")

        # 평균 수익/손실
        winners = trades_df[trades_df["pnl"] > 0]["pnl_pct"]
        losers = trades_df[trades_df["pnl"] <= 0]["pnl_pct"]
        result.avg_profit_pct = float(winners.mean()) if len(winners) > 0 else 0.0
        result.avg_loss_pct = float(losers.mean()) if len(losers) > 0 else 0.0

        # 연속 승/패
        streak_w, streak_l, max_w, max_l = 0, 0, 0, 0
        for pnl in trades_df["pnl"]:
            if pnl > 0:
                streak_w += 1
                streak_l = 0
                max_w = max(max_w, streak_w)
            else:
                streak_l += 1
                streak_w = 0
                max_l = max(max_l, streak_l)
        result.max_consecutive_wins = max_w
        result.max_consecutive_losses = max_l

        return result


def print_result(result: BacktestResult) -> None:
    """백테스트 결과 출력"""
    print("\n" + "=" * 60)
    print("  USD/KRW MA크로스 백테스트 결과")
    print("=" * 60)
    print(f"  총 거래 횟수     : {result.total_trades}")
    print(f"  승리             : {result.winning_trades}")
    print(f"  패배             : {result.losing_trades}")
    print(f"  승률             : {result.win_rate:.1f}%")
    print(f"  총 수익률        : {result.total_return_pct:.2f}%")
    print(f"  최대 낙폭 (MDD)  : {result.max_drawdown_pct:.2f}%")
    print(f"  샤프비율         : {result.sharpe_ratio:.2f}")
    print(f"  Profit Factor    : {result.profit_factor:.2f}")
    print(f"  평균 수익        : {result.avg_profit_pct:.2f}%")
    print(f"  평균 손실        : {result.avg_loss_pct:.2f}%")
    print(f"  최대 연속 승     : {result.max_consecutive_wins}")
    print(f"  최대 연속 패     : {result.max_consecutive_losses}")
    print("=" * 60)

    if not result.trades.empty:
        print("\n최근 거래 내역 (최대 10건):")
        print("-" * 60)
        for _, t in result.trades.tail(10).iterrows():
            side_kr = "매수" if t["side"] == "long" else "매도"
            print(f"  {side_kr} | 진입: {t['entry_price']:.2f} → 종료: {t['exit_price']:.2f} "
                  f"| PnL: {t['pnl']:.2f} ({t['pnl_pct']:.2f}%) | {t['reason']}")
    print()
