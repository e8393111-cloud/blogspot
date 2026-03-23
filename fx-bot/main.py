#!/usr/bin/env python3
"""
USD/KRW 15분봉 MA크로스 자동매매 봇 - 메인 실행기
"""

import argparse
import csv
import logging
import os
import signal
import sys
import time
from datetime import datetime
from pathlib import Path

from config import Config
from strategy import MACrossStrategy, Signal
from broker import create_broker, Position
from backtest import Backtester, generate_sample_data, print_result
from notifier import Notifier


def setup_logging(config: Config) -> None:
    log_dir = Path(config.log.log_file).parent
    log_dir.mkdir(parents=True, exist_ok=True)

    logging.basicConfig(
        level=getattr(logging, config.log.level, logging.INFO),
        format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
        handlers=[
            logging.FileHandler(config.log.log_file, encoding="utf-8"),
            logging.StreamHandler(),
        ],
    )


class FXTradingBot:
    """15분봉 주기 메인 루프 트레이딩 봇"""

    def __init__(self, config: Config = None):
        self.config = config or Config()
        self.strategy = MACrossStrategy(self.config.strategy)
        self.broker = create_broker(self.config.broker)
        self.notifier = Notifier(self.config.notifier)
        self.logger = logging.getLogger("FXTradingBot")
        self._running = False
        self._position: dict | None = None  # 현재 포지션 추적

        # 거래 로그 CSV 초기화
        csv_path = Path(self.config.log.trade_log_csv)
        csv_path.parent.mkdir(parents=True, exist_ok=True)
        if not csv_path.exists():
            with open(csv_path, "w", newline="", encoding="utf-8") as f:
                writer = csv.writer(f)
                writer.writerow([
                    "timestamp", "signal", "side", "price", "amount",
                    "order_id", "balance", "reason",
                ])

    def _log_trade(self, signal_type: str, side: str, price: float,
                   amount: float, order_id: str, reason: str) -> None:
        csv_path = self.config.log.trade_log_csv
        with open(csv_path, "a", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow([
                datetime.now().isoformat(), signal_type, side,
                f"{price:.2f}", f"{amount:.4f}", order_id,
                f"{self.broker.get_balance():.2f}", reason,
            ])

    def _process_signal(self, signal_obj) -> None:
        """신호에 따른 매매 실행"""
        cfg = self.config.trade
        symbol = self.config.strategy.symbol

        if signal_obj.signal == Signal.BUY and self._position is None:
            amount = cfg.trade_amount
            self.logger.info(f"매수 신호! 가격={signal_obj.price:.2f}, 사유={signal_obj.reason}")
            self.notifier.notify_signal("BUY", signal_obj.price, signal_obj.reason)

            order = self.broker.place_order(symbol, "buy", amount)
            self._position = {
                "side": "long", "entry_price": order.price,
                "amount": amount, "highest": order.price,
            }
            self.notifier.notify_trade("buy", order.price, amount, order.order_id)
            self._log_trade("BUY", "buy", order.price, amount, order.order_id, signal_obj.reason)

        elif signal_obj.signal == Signal.SELL and self._position is None:
            amount = cfg.trade_amount
            self.logger.info(f"매도 신호! 가격={signal_obj.price:.2f}, 사유={signal_obj.reason}")
            self.notifier.notify_signal("SELL", signal_obj.price, signal_obj.reason)

            order = self.broker.place_order(symbol, "sell", amount)
            self._position = {
                "side": "short", "entry_price": order.price,
                "amount": amount, "highest": order.price,
            }
            self.notifier.notify_trade("sell", order.price, amount, order.order_id)
            self._log_trade("SELL", "sell", order.price, amount, order.order_id, signal_obj.reason)

    def _check_position_exit(self, current_price: float) -> None:
        """포지션 종료 조건 체크"""
        if self._position is None:
            return

        cfg = self.config.trade
        self._position["highest"] = max(self._position["highest"], current_price)

        exit_sig = self.strategy.check_exit(
            self._position["entry_price"], current_price,
            self._position["side"], self._position["highest"],
            cfg.stop_loss_pct, cfg.take_profit_pct, cfg.trailing_stop_pct,
        )

        if exit_sig is not None:
            symbol = self.config.strategy.symbol
            side = "sell" if self._position["side"] == "long" else "buy"
            amount = self._position["amount"]

            self.logger.info(f"포지션 종료! 사유={exit_sig.reason}")
            order = self.broker.place_order(symbol, side, amount)
            self.notifier.notify_trade(side, order.price, amount, order.order_id)
            self._log_trade("EXIT", side, order.price, amount, order.order_id, exit_sig.reason)
            self._position = None

    def run_once(self) -> None:
        """1회 주기 실행 (캔들 수집 → 신호 → 매매 → 알림)"""
        symbol = self.config.strategy.symbol
        timeframe = self.config.strategy.timeframe

        # 캔들 수집
        candle_count = self.config.strategy.slow_ma + 10
        candles = self.broker.get_candles(symbol, timeframe, candle_count)
        if candles.empty or len(candles) < self.config.strategy.slow_ma:
            self.logger.warning("캔들 데이터 부족")
            return

        current_price = float(candles["close"].iloc[-1])

        # 포지션 종료 조건 체크
        self._check_position_exit(current_price)

        # 신호 생성
        signal_obj = self.strategy.generate_signal(candles)
        self.logger.info(
            f"[{datetime.now().strftime('%H:%M:%S')}] "
            f"가격={current_price:.2f} | 신호={signal_obj.signal.value} | "
            f"강도={signal_obj.strength:.2f} | {signal_obj.reason}"
        )

        # 매매 실행
        self._process_signal(signal_obj)

    def run(self) -> None:
        """메인 루프 (15분 간격)"""
        self._running = True
        self.logger.info("=" * 50)
        self.logger.info("FX Trading Bot 시작")
        self.logger.info(f"전략: {self.config.strategy.symbol} {self.config.strategy.timeframe}")
        self.logger.info(f"MA: fast={self.config.strategy.fast_ma}, slow={self.config.strategy.slow_ma}")
        self.logger.info(f"브로커: {self.config.broker.broker_type}")
        self.logger.info("=" * 50)

        while self._running:
            try:
                self.run_once()
            except KeyboardInterrupt:
                break
            except Exception as e:
                self.logger.error(f"루프 에러: {e}", exc_info=True)

            if self._running:
                self.logger.info("다음 주기까지 15분 대기...")
                # 15분(900초) 대기, 1초 단위로 체크하여 종료 신호 반응
                for _ in range(900):
                    if not self._running:
                        break
                    time.sleep(1)

        self.logger.info("FX Trading Bot 종료")

    def stop(self) -> None:
        self._running = False


def main():
    parser = argparse.ArgumentParser(description="USD/KRW MA크로스 자동매매 봇")
    parser.add_argument("--backtest", action="store_true", help="백테스트 모드")
    parser.add_argument("--days", type=int, default=14, help="백테스트 기간 (일)")
    parser.add_argument("--broker", type=str, default="mock",
                        choices=["mock", "kis", "oanda"], help="브로커 선택")
    parser.add_argument("--ma-type", type=str, default="SMA",
                        choices=["SMA", "EMA"], help="이동평균 유형")
    args = parser.parse_args()

    config = Config()
    config.broker.broker_type = args.broker
    config.strategy.ma_type = args.ma_type

    setup_logging(config)

    if args.backtest:
        print(f"\nUSD/KRW MA크로스 백테스트 ({args.days}일)")
        print(f"전략: {config.strategy.ma_type} fast={config.strategy.fast_ma}, "
              f"slow={config.strategy.slow_ma}, signal={config.strategy.signal_ma}")

        bt = Backtester(config)
        data = generate_sample_data(days=args.days)
        result = bt.run(data, days=args.days)
        print_result(result)
        return

    # 실전 모드
    bot = FXTradingBot(config)

    def signal_handler(signum, frame):
        print("\n종료 신호 수신, 안전하게 종료합니다...")
        bot.stop()

    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    bot.run()


if __name__ == "__main__":
    main()
