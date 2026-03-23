"""
USD/KRW 15분봉 MA크로스 자동매매 봇 - 알림 모듈
"""

import logging
from datetime import datetime

from config import NotifierConfig

logger = logging.getLogger(__name__)


class Notifier:
    """텔레그램/슬랙 알림 전송"""

    def __init__(self, config: NotifierConfig = None):
        self.config = config or NotifierConfig()

    def send(self, message: str) -> None:
        if not self.config.enabled:
            logger.debug(f"[알림 비활성] {message}")
            return
        if self.config.telegram_token and self.config.telegram_chat_id:
            self._send_telegram(message)
        if self.config.slack_webhook_url:
            self._send_slack(message)

    def _send_telegram(self, message: str) -> None:
        try:
            import requests
            url = f"https://api.telegram.org/bot{self.config.telegram_token}/sendMessage"
            resp = requests.post(url, json={
                "chat_id": self.config.telegram_chat_id,
                "text": message,
                "parse_mode": "HTML",
            }, timeout=10)
            resp.raise_for_status()
            logger.info("텔레그램 알림 전송 완료")
        except Exception as e:
            logger.error(f"텔레그램 알림 실패: {e}")

    def _send_slack(self, message: str) -> None:
        try:
            import requests
            resp = requests.post(self.config.slack_webhook_url,
                                 json={"text": message}, timeout=10)
            resp.raise_for_status()
            logger.info("슬랙 알림 전송 완료")
        except Exception as e:
            logger.error(f"슬랙 알림 실패: {e}")

    def notify_signal(self, signal_type: str, price: float, reason: str) -> None:
        msg = (f"<b>[FX Bot 신호]</b>\n"
               f"신호: {signal_type}\n"
               f"가격: {price:,.2f} KRW\n"
               f"사유: {reason}\n"
               f"시각: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        self.send(msg)

    def notify_trade(self, side: str, price: float, amount: float, order_id: str) -> None:
        side_kr = "매수" if side == "buy" else "매도"
        msg = (f"<b>[FX Bot 체결]</b>\n"
               f"{side_kr} 체결\n"
               f"가격: {price:,.2f} KRW\n"
               f"수량: {amount:,.2f} USD\n"
               f"주문ID: {order_id}\n"
               f"시각: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        self.send(msg)

    def notify_daily_report(self, balance: float, pnl: float, trades_today: int) -> None:
        msg = (f"<b>[FX Bot 일일 리포트]</b>\n"
               f"잔고: {balance:,.2f} USD\n"
               f"오늘 손익: {pnl:,.2f} USD\n"
               f"오늘 거래: {trades_today}건\n"
               f"일자: {datetime.now().strftime('%Y-%m-%d')}")
        self.send(msg)
