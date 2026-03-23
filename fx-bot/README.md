# USD/KRW MA크로스 자동매매 봇

USD/KRW 환율 15분봉 차트를 분석하여 이동평균선 크로스오버(골든크로스/데드크로스) 기반으로 자동매매하는 트레이딩 봇입니다.

## 전략 개요

- **골든크로스 (매수)**: 단기 MA(5)가 장기 MA(20)를 상향돌파
- **데드크로스 (매도)**: 단기 MA(5)가 장기 MA(20)를 하향돌파
- **보조 필터**: RSI(과매수/과매도), 볼린저밴드, 시그널 MA(10)
- **리스크 관리**: 손절(0.3%), 익절(0.5%), 트레일링스탑(0.2%)

## 프로젝트 구조

```
fx-bot/
├── config.py       # 설정 (전략, 매매, 브로커, 알림, 로깅)
├── strategy.py     # MA크로스 전략 엔진
├── broker.py       # 브로커 인터페이스 (Mock/KIS/OANDA)
├── backtest.py     # 백테스트 엔진
├── notifier.py     # 텔레그램/슬랙 알림
├── main.py         # 메인 실행기
├── requirements.txt
└── .gitignore
```

## 설치

```bash
pip install pandas numpy requests
```

## 사용법

### 백테스트

```bash
# 14일 백테스트 (기본)
python main.py --backtest --days 14

# EMA 사용 백테스트
python main.py --backtest --days 30 --ma-type EMA
```

### 실전 매매

```bash
# 모의거래 (Mock)
python main.py

# 한국투자증권 OpenAPI
export KIS_APP_KEY="your_key"
export KIS_APP_SECRET="your_secret"
export KIS_ACCOUNT="your_account"
python main.py --broker kis

# OANDA
export OANDA_API_KEY="your_key"
export OANDA_ACCOUNT_ID="your_account"
python main.py --broker oanda
```

### 알림 설정 (선택)

```bash
# 텔레그램
export TELEGRAM_TOKEN="your_bot_token"
export TELEGRAM_CHAT_ID="your_chat_id"

# 슬랙
export SLACK_WEBHOOK_URL="https://hooks.slack.com/..."
```

## 지원 브로커

| 브로커 | 상태 | 설명 |
|--------|------|------|
| Mock | 사용 가능 | 모의거래/백테스트용 |
| 한국투자증권 (KIS) | API 연동 준비 | OpenAPI 기반 FX 거래 |
| OANDA | API 연동 준비 | REST API v20 기반 |

## 설정 커스터마이징

`config.py`에서 직접 수정하거나 환경변수로 설정할 수 있습니다:

- **전략**: MA 기간, MA 유형(SMA/EMA), RSI, 볼린저밴드
- **매매**: 거래금액, 최대 포지션, 손절/익절/트레일링스탑
- **브로커**: mock/kis/oanda 선택, API 키
- **알림**: 텔레그램, 슬랙
- **로깅**: 로그 레벨, 파일 경로

## 주의사항

- 이 봇은 교육/연구 목적으로 제작되었습니다
- 실제 투자에 사용 시 손실이 발생할 수 있습니다
- 실전 사용 전 반드시 충분한 백테스트와 모의거래를 수행하세요
- API 키 등 민감 정보는 환경변수로 관리하세요
