"""
USD/KRW 15분봉 MA크로스 자동매매 봇 - 설정 파일
"""

import os
from dataclasses import dataclass, field
from typing import Literal


@dataclass
class StrategyConfig:
    """전략 설정"""
    symbol: str = "USD/KRW"
    timeframe: str = "15m"
    fast_ma: int = 5          # 단기 이동평균
    slow_ma: int = 20         # 장기 이동평균
    signal_ma: int = 10       # 시그널 이동평균
    ma_type: Literal["SMA", "EMA"] = "SMA"
    rsi_period: int = 14
    rsi_overbought: float = 70.0
    rsi_oversold: float = 30.0
    bb_period: int = 20
    bb_std: float = 2.0
    # 고급 필터
    require_ma_alignment: bool = True     # 3중 MA 정렬 필수 (fast>signal>slow)
    min_ma_spread_pct: float = 0.02       # 최소 MA 스프레드 (%) - 노이즈 크로스 필터
    require_slope_confirm: bool = True    # 슬로우MA 기울기 방향 확인
    slope_lookback: int = 10             # 기울기 계산 룩백 기간
    rsi_momentum_confirm: bool = True    # RSI 모멘텀 방향 확인
    min_strength: float = 0.6            # 최소 신호 강도 커트라인
    cross_confirm_bars: int = 2          # 크로스 후 확인봉 수 (연속 유지 필요)
    atr_period: int = 14                 # ATR 기간
    min_atr_multiplier: float = 1.0       # 최소 ATR (평균 대비 배수) - 횡보 필터
    min_hold_bars: int = 15              # 반대크로스 청산 전 최소 보유 봉수
    cooldown_bars: int = 12              # 포지션 종료 후 재진입 대기 봉수
    min_slope_abs: float = 0.5           # 슬로우MA 기울기 최소 절대값


@dataclass
class TradeConfig:
    """매매 설정"""
    trade_amount: float = 1000.0      # 1회 거래금액 (USD)
    max_position: float = 5000.0      # 최대 포지션 (USD)
    stop_loss_pct: float = 1.0        # 손절 (%)
    take_profit_pct: float = 1.5      # 익절 (%)
    trailing_stop_pct: float = 0.5    # 트레일링스탑 (%)


@dataclass
class BrokerConfig:
    """브로커 설정"""
    broker_type: Literal["mock", "kis", "kiwoom", "oanda"] = "mock"

    # 한국투자증권 OpenAPI
    kis_app_key: str = field(default_factory=lambda: os.getenv("KIS_APP_KEY", ""))
    kis_app_secret: str = field(default_factory=lambda: os.getenv("KIS_APP_SECRET", ""))
    kis_account: str = field(default_factory=lambda: os.getenv("KIS_ACCOUNT", ""))
    kis_base_url: str = "https://openapi.koreainvestment.com:9443"

    # OANDA
    oanda_api_key: str = field(default_factory=lambda: os.getenv("OANDA_API_KEY", ""))
    oanda_account_id: str = field(default_factory=lambda: os.getenv("OANDA_ACCOUNT_ID", ""))
    oanda_base_url: str = "https://api-fxpractice.oanda.com"


@dataclass
class NotifierConfig:
    """알림 설정"""
    enabled: bool = False
    telegram_token: str = field(default_factory=lambda: os.getenv("TELEGRAM_TOKEN", ""))
    telegram_chat_id: str = field(default_factory=lambda: os.getenv("TELEGRAM_CHAT_ID", ""))
    slack_webhook_url: str = field(default_factory=lambda: os.getenv("SLACK_WEBHOOK_URL", ""))


@dataclass
class LogConfig:
    """로깅 설정"""
    level: str = "INFO"
    log_file: str = "logs/fx_bot.log"
    trade_log_csv: str = "logs/trades.csv"


@dataclass
class Config:
    """전체 설정"""
    strategy: StrategyConfig = field(default_factory=StrategyConfig)
    trade: TradeConfig = field(default_factory=TradeConfig)
    broker: BrokerConfig = field(default_factory=BrokerConfig)
    notifier: NotifierConfig = field(default_factory=NotifierConfig)
    log: LogConfig = field(default_factory=LogConfig)


# 기본 설정 인스턴스
DEFAULT_CONFIG = Config()
