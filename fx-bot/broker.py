"""
USD/KRW 15분봉 MA크로스 자동매매 봇 - 브로커 인터페이스
"""

import logging
import time
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from typing import Optional

import numpy as np
import pandas as pd

from config import BrokerConfig

logger = logging.getLogger(__name__)


@dataclass
class Order:
    order_id: str
    symbol: str
    side: str          # "buy" or "sell"
    amount: float
    price: float
    status: str = "filled"
    timestamp: datetime = field(default_factory=datetime.now)


@dataclass
class Position:
    symbol: str
    side: str          # "long" or "short"
    amount: float
    entry_price: float
    current_price: float = 0.0
    unrealized_pnl: float = 0.0
    highest_price: float = 0.0


class BaseBroker(ABC):
    """브로커 추상 클래스"""

    @abstractmethod
    def get_candles(self, symbol: str, timeframe: str, count: int) -> pd.DataFrame:
        """OHLCV 캔들 데이터 조회. 컬럼: open, high, low, close, volume"""
        ...

    @abstractmethod
    def get_current_price(self, symbol: str) -> float:
        """현재가 조회"""
        ...

    @abstractmethod
    def place_order(self, symbol: str, side: str, amount: float) -> Order:
        """주문 실행"""
        ...

    @abstractmethod
    def get_balance(self) -> float:
        """계좌 잔고 (USD)"""
        ...

    @abstractmethod
    def get_positions(self, symbol: str = None) -> list[Position]:
        """보유 포지션 조회"""
        ...


class MockBroker(BaseBroker):
    """모의거래 브로커 (백테스트/시뮬레이션)"""

    def __init__(self, initial_balance: float = 100_000.0, seed: int = 42):
        self.balance = initial_balance
        self.positions: list[Position] = []
        self.orders: list[Order] = []
        self._order_counter = 0
        self._rng = np.random.RandomState(seed)
        self._candle_cache: Optional[pd.DataFrame] = None

    def _generate_candles(self, count: int, base_price: float = 1492.0) -> pd.DataFrame:
        """실제 차트 패턴 기반 더미 캔들 생성 (1492→1498→1510→1482→1504)"""
        # 키 포인트 패턴 정의
        key_points = [1492.0, 1495.0, 1498.0, 1503.0, 1507.0, 1510.0,
                      1505.0, 1497.0, 1488.0, 1482.0, 1486.0, 1492.0,
                      1498.0, 1502.0, 1504.0]

        prices = []
        for i in range(count):
            # 패턴 반복
            pattern_idx = i % len(key_points)
            cycle = i // len(key_points)
            drift = cycle * 0.5  # 미세 상승 추세
            base = key_points[pattern_idx] + drift
            noise = self._rng.normal(0, 0.8)
            prices.append(base + noise)

        now = datetime.now()
        timestamps = [now - timedelta(minutes=15 * (count - i)) for i in range(count)]

        rows = []
        for i, (ts, close_price) in enumerate(zip(timestamps, prices)):
            high = close_price + abs(self._rng.normal(0, 1.2))
            low = close_price - abs(self._rng.normal(0, 1.2))
            o = close_price + self._rng.normal(0, 0.5)
            vol = max(100, int(self._rng.normal(5000, 2000)))
            rows.append({
                "timestamp": ts, "open": o, "high": high,
                "low": low, "close": close_price, "volume": vol,
            })

        df = pd.DataFrame(rows)
        df.set_index("timestamp", inplace=True)
        return df

    def get_candles(self, symbol: str, timeframe: str, count: int) -> pd.DataFrame:
        if self._candle_cache is None or len(self._candle_cache) < count:
            self._candle_cache = self._generate_candles(max(count, 200))
        return self._candle_cache.tail(count).copy()

    def get_current_price(self, symbol: str) -> float:
        candles = self.get_candles(symbol, "15m", 1)
        return float(candles["close"].iloc[-1])

    def place_order(self, symbol: str, side: str, amount: float) -> Order:
        price = self.get_current_price(symbol)
        self._order_counter += 1
        order = Order(
            order_id=f"MOCK-{self._order_counter:06d}",
            symbol=symbol, side=side, amount=amount, price=price,
        )
        self.orders.append(order)

        if side == "buy":
            self.balance -= amount * price
            # 기존 포지션에 추가 또는 새 포지션 생성
            existing = [p for p in self.positions if p.symbol == symbol and p.side == "long"]
            if existing:
                p = existing[0]
                p.amount += amount
                p.entry_price = (p.entry_price + price) / 2
            else:
                self.positions.append(Position(symbol, "long", amount, price, price, 0.0, price))
        elif side == "sell":
            self.balance += amount * price
            # 롱 포지션 축소
            existing = [p for p in self.positions if p.symbol == symbol and p.side == "long"]
            if existing:
                p = existing[0]
                p.amount -= amount
                if p.amount <= 0:
                    self.positions.remove(p)

        logger.info(f"[MockBroker] 주문 체결: {order}")
        return order

    def get_balance(self) -> float:
        return self.balance

    def get_positions(self, symbol: str = None) -> list[Position]:
        if symbol:
            return [p for p in self.positions if p.symbol == symbol]
        return self.positions


class KISBroker(BaseBroker):
    """한국투자증권 OpenAPI 브로커"""

    def __init__(self, config: BrokerConfig):
        self.config = config
        self._token: Optional[str] = None
        self._token_expires: float = 0

    def _get_token(self) -> str:
        if self._token and time.time() < self._token_expires:
            return self._token

        import requests
        url = f"{self.config.kis_base_url}/oauth2/tokenP"
        resp = requests.post(url, json={
            "grant_type": "client_credentials",
            "appkey": self.config.kis_app_key,
            "appsecret": self.config.kis_app_secret,
        }, timeout=10)
        resp.raise_for_status()
        data = resp.json()
        self._token = data["access_token"]
        self._token_expires = time.time() + data.get("expires_in", 86400) - 60
        return self._token

    def _headers(self) -> dict:
        return {
            "authorization": f"Bearer {self._get_token()}",
            "appkey": self.config.kis_app_key,
            "appsecret": self.config.kis_app_secret,
            "Content-Type": "application/json; charset=utf-8",
        }

    def get_candles(self, symbol: str, timeframe: str, count: int) -> pd.DataFrame:
        import requests
        url = f"{self.config.kis_base_url}/uapi/overseas-price/v1/quotations/inquire-time-itemchartprice"
        params = {
            "AUTH": "",
            "EXCD": "FX",
            "SYMB": "USDKRW",
            "NMIN": "15",
            "PINC": "1",
            "NREC": str(count),
        }
        headers = self._headers()
        headers["tr_id"] = "FHKST03030100"
        resp = requests.get(url, params=params, headers=headers, timeout=10)
        resp.raise_for_status()
        data = resp.json()

        rows = []
        for item in data.get("output2", []):
            rows.append({
                "timestamp": pd.to_datetime(item.get("xymd", "") + item.get("xhms", ""),
                                            format="%Y%m%d%H%M%S", errors="coerce"),
                "open": float(item.get("open", 0)),
                "high": float(item.get("high", 0)),
                "low": float(item.get("low", 0)),
                "close": float(item.get("clos", 0)),
                "volume": int(item.get("tvol", 0)),
            })

        df = pd.DataFrame(rows)
        if not df.empty:
            df.set_index("timestamp", inplace=True)
            df.sort_index(inplace=True)
        return df

    def get_current_price(self, symbol: str) -> float:
        import requests
        url = f"{self.config.kis_base_url}/uapi/overseas-price/v1/quotations/inquire-price"
        params = {"AUTH": "", "EXCD": "FX", "SYMB": "USDKRW"}
        headers = self._headers()
        headers["tr_id"] = "FHKST03010100"
        resp = requests.get(url, params=params, headers=headers, timeout=10)
        resp.raise_for_status()
        data = resp.json()
        return float(data["output"]["last"])

    def place_order(self, symbol: str, side: str, amount: float) -> Order:
        import requests
        url = f"{self.config.kis_base_url}/uapi/overseas-stock/v1/trading/order"
        headers = self._headers()
        headers["tr_id"] = "TTTS0308U" if side == "buy" else "TTTS0307U"
        body = {
            "CANO": self.config.kis_account[:8],
            "ACNT_PRDT_CD": self.config.kis_account[8:],
            "OVRS_EXCG_CD": "FX",
            "PDNO": "USDKRW",
            "ORD_QTY": str(int(amount)),
            "ORD_UNPR": "0",  # 시장가
            "SLL_TYPE": "00",
        }
        resp = requests.post(url, json=body, headers=headers, timeout=10)
        resp.raise_for_status()
        data = resp.json()
        return Order(
            order_id=data.get("output", {}).get("ODNO", ""),
            symbol=symbol, side=side, amount=amount,
            price=float(data.get("output", {}).get("ORD_UNPR", 0)),
        )

    def get_balance(self) -> float:
        import requests
        url = f"{self.config.kis_base_url}/uapi/overseas-stock/v1/trading/inquire-balance"
        headers = self._headers()
        headers["tr_id"] = "TTTS3012R"
        params = {
            "CANO": self.config.kis_account[:8],
            "ACNT_PRDT_CD": self.config.kis_account[8:],
            "OVRS_EXCG_CD": "FX",
        }
        resp = requests.get(url, params=params, headers=headers, timeout=10)
        resp.raise_for_status()
        data = resp.json()
        return float(data.get("output2", {}).get("tot_evlu_pfls_amt", 0))

    def get_positions(self, symbol: str = None) -> list[Position]:
        return []  # 구현 필요시 확장


class OANDABroker(BaseBroker):
    """OANDA REST API v20 브로커"""

    def __init__(self, config: BrokerConfig):
        self.config = config

    def _headers(self) -> dict:
        return {
            "Authorization": f"Bearer {self.config.oanda_api_key}",
            "Content-Type": "application/json",
        }

    def get_candles(self, symbol: str, timeframe: str, count: int) -> pd.DataFrame:
        import requests
        granularity_map = {"1m": "M1", "5m": "M5", "15m": "M15", "1h": "H1", "4h": "H4", "1d": "D"}
        gran = granularity_map.get(timeframe, "M15")

        url = (f"{self.config.oanda_base_url}/v3/instruments/USD_KRW/candles"
               f"?granularity={gran}&count={count}&price=M")
        resp = requests.get(url, headers=self._headers(), timeout=10)
        resp.raise_for_status()
        data = resp.json()

        rows = []
        for c in data.get("candles", []):
            mid = c["mid"]
            rows.append({
                "timestamp": pd.to_datetime(c["time"]),
                "open": float(mid["o"]),
                "high": float(mid["h"]),
                "low": float(mid["l"]),
                "close": float(mid["c"]),
                "volume": int(c.get("volume", 0)),
            })

        df = pd.DataFrame(rows)
        if not df.empty:
            df.set_index("timestamp", inplace=True)
        return df

    def get_current_price(self, symbol: str) -> float:
        import requests
        url = f"{self.config.oanda_base_url}/v3/instruments/USD_KRW/candles?granularity=M1&count=1&price=M"
        resp = requests.get(url, headers=self._headers(), timeout=10)
        resp.raise_for_status()
        data = resp.json()
        return float(data["candles"][-1]["mid"]["c"])

    def place_order(self, symbol: str, side: str, amount: float) -> Order:
        import requests
        units = int(amount) if side == "buy" else -int(amount)
        url = f"{self.config.oanda_base_url}/v3/accounts/{self.config.oanda_account_id}/orders"
        body = {"order": {"type": "MARKET", "instrument": "USD_KRW", "units": str(units)}}
        resp = requests.post(url, json=body, headers=self._headers(), timeout=10)
        resp.raise_for_status()
        data = resp.json()
        fill = data.get("orderFillTransaction", {})
        return Order(
            order_id=fill.get("id", ""),
            symbol=symbol, side=side, amount=amount,
            price=float(fill.get("price", 0)),
        )

    def get_balance(self) -> float:
        import requests
        url = f"{self.config.oanda_base_url}/v3/accounts/{self.config.oanda_account_id}/summary"
        resp = requests.get(url, headers=self._headers(), timeout=10)
        resp.raise_for_status()
        return float(resp.json()["account"]["balance"])

    def get_positions(self, symbol: str = None) -> list[Position]:
        import requests
        url = f"{self.config.oanda_base_url}/v3/accounts/{self.config.oanda_account_id}/positions"
        resp = requests.get(url, headers=self._headers(), timeout=10)
        resp.raise_for_status()
        positions = []
        for p in resp.json().get("positions", []):
            long_units = float(p["long"]["units"])
            short_units = float(p["short"]["units"])
            if long_units > 0:
                positions.append(Position(
                    symbol=p["instrument"], side="long", amount=long_units,
                    entry_price=float(p["long"].get("averagePrice", 0)),
                ))
            if short_units < 0:
                positions.append(Position(
                    symbol=p["instrument"], side="short", amount=abs(short_units),
                    entry_price=float(p["short"].get("averagePrice", 0)),
                ))
        return positions


def create_broker(config: BrokerConfig) -> BaseBroker:
    """브로커 팩토리 함수"""
    brokers = {
        "mock": lambda: MockBroker(),
        "kis": lambda: KISBroker(config),
        "oanda": lambda: OANDABroker(config),
    }
    factory = brokers.get(config.broker_type)
    if not factory:
        raise ValueError(f"지원하지 않는 브로커: {config.broker_type}")
    return factory()
