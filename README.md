# 황금키워드 자동 탐색 Make 시나리오

네이버 DataLab + 블로그 검색 API를 활용하여 황금키워드를 자동으로 발굴하는 Make(구 Integromat) 시나리오입니다.

---

## 황금키워드란?

| 조건 | 기준값 |
|------|--------|
| 네이버 트렌드 지수 (최근 3개월 평균) | **≥ 10** |
| 블로그 검색 결과 수 (경쟁도) | **≤ 30,000건** |
| 황금 점수 (트렌드/경쟁 × 10,000) | **≥ 0.3** |

세 조건을 모두 만족하면 `황금키워드 (YES)` 로 분류됩니다.

---

## 시나리오 구조 (9개 모듈)

```
[1] 웹훅 트리거
    ↓
[2] Google Sheets → 씨앗 키워드 목록 읽기
    ↓
[3] 배열 반복 (키워드별 처리)
    ↓
[4] Naver DataLab API → 검색 트렌드 조회 (POST)
[5] Naver Search API  → 블로그 결과 수 조회 (GET)  ← 병렬 실행
    ↓
[6] 변수 계산 (trend_avg, total_results, golden_score, is_golden)
    ↓
[7] 황금키워드 필터 (is_golden = YES)
    ↓
[8] Google Sheets → 황금키워드 시트에 저장
[9] Google Sheets → 전체 로그 시트에 저장 (필터 통과 여부 무관)
```

---

## 설정 방법

### 1단계: 네이버 API 키 발급

1. [네이버 개발자 센터](https://developers.naver.com) 접속
2. **Application 등록** → 서비스 URL 입력
3. 사용 API 선택:
   - `검색` (블로그 검색용)
   - `데이터랩(검색어트렌드)` (트렌드 분석용)
4. **Client ID** 와 **Client Secret** 복사

### 2단계: Google Sheets 준비

스프레드시트 하나를 만들고 아래 세 개 시트를 생성합니다:

**① 씨앗키워드 시트 (A열)**
```
A1: 키워드
A2: 다이어트
A3: 강아지 사료
A4: 재테크 방법
...
```

**② 황금키워드 시트 (헤더)**
```
A1: 분석일시
B1: 키워드
C1: 트렌드지수
D1: 블로그검색수
E1: 황금점수
F1: 황금키워드여부
G1: 네이버검색링크
```

**③ 전체로그 시트 (헤더)**
```
A1: 분석일시
B1: 키워드
C1: 트렌드지수
D1: 블로그검색수
E1: 황금점수
F1: 황금키워드여부
```

### 3단계: Make에 시나리오 가져오기

1. Make.com 로그인 → **Create a new scenario**
2. 우측 하단 `...` → **Import Blueprint**
3. `golden-keywords-scenario.json` 파일 업로드

### 4단계: 연결 정보 교체

시나리오 내 아래 값을 실제 값으로 변경합니다:

| 위치 | 교체할 값 | 실제 값 |
|------|-----------|---------|
| 모듈 1 | `WEBHOOK_ID` | Make 웹훅 URL |
| 모듈 2, 8, 9 | `SPREADSHEET_ID` | Google Sheets ID |
| 모듈 4, 5 | `NAVER_CLIENT_ID` | 네이버 Client ID |
| 모듈 4, 5 | `NAVER_CLIENT_SECRET` | 네이버 Client Secret |

> **Google Sheets ID 확인법:**
> 시트 URL에서 `/spreadsheets/d/` 다음에 오는 긴 문자열이 ID입니다.
> 예: `https://docs.google.com/spreadsheets/d/**1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms**/edit`

### 5단계: 자동 실행 스케줄 설정 (선택)

- Make 시나리오 설정 → **Scheduling** → 원하는 주기 선택
- 권장: 매일 오전 6시 또는 매주 월요일

---

## 황금점수 계산 공식

```
황금점수 = (트렌드 지수 평균 / 블로그 검색 결과 수) × 10,000
```

| 황금점수 | 등급 |
|---------|------|
| 1.0 이상 | 최상급 황금키워드 |
| 0.5 ~ 1.0 | 우수 황금키워드 |
| 0.3 ~ 0.5 | 일반 황금키워드 |
| 0.3 미만 | 제외 |

---

## 기준값 조정 방법

Make 시나리오의 **모듈 6 (Set Variables)** 에서 `is_golden` 공식을 수정합니다:

```
기본 기준:
  트렌드 지수  ≥ 10
  블로그 수    ≤ 30,000
  황금 점수    ≥ 0.3

경쟁이 심한 틈새 키워드 발굴 시 조정 예시:
  트렌드 지수  ≥ 5
  블로그 수    ≤ 10,000
  황금 점수    ≥ 0.5
```

---

## 주의사항

- 네이버 API 일일 호출 한도: 검색 API **25,000회**, DataLab **1,000회**
- 씨앗 키워드는 최대 **100개** 까지 한 번에 처리 (시트 A2:A100)
- 더 많은 키워드 처리 시 모듈 2의 range를 확장하거나 시나리오를 분리 실행

---

## 파일 구조

```
blogspot/
├── README.md                               # 이 파일
├── golden-keywords-scenario.json           # 시나리오 1: 황금키워드 탐색
└── blog-content-generation-scenario.json   # 시나리오 2: 블로그 글 자동생성
```

---

# 시나리오 2: 블로그 글 자동생성 (blog-content-generation-scenario.json)

황금키워드 시트에서 글이 없는 키워드를 가져와 Claude AI로 블로그 초안을 생성하고 Google Docs에 저장합니다.

> **네이버 블로그 직접 자동 포스팅은 불가합니다.**
> 네이버는 블로그 글 작성용 공식 API를 제공하지 않으며, 자동화 도구로 포스팅 시 계정 제재 위험이 있습니다.
> 대신 이 시나리오는 **초안을 Google Docs에 저장 → 작성자가 복붙** 방식으로 작업 시간을 대폭 줄여줍니다.

---

## 시나리오 2 구조 (7개 모듈)

```
[1] Google Sheets → 황금키워드 시트 읽기 (초안 없는 행만)
    ↓
[2] 배열 반복 (미작성 키워드별 처리)
    ↓
[3] Claude API → 블로그 글 초안 생성
    (제목 3개 + 본문 1,500자 + 태그 10개)
    ↓
[4] 변수 정리 (keyword, blog_content, doc_title)
    ↓
[5] Google Docs → 초안 문서 자동 생성
    ↓
[6] Google Sheets → 초안 링크 업데이트
[7] Slack → 완료 알림 발송
```

---

## 시나리오 2 설정 방법

### 1단계: Claude API 키 발급

1. [Anthropic Console](https://console.anthropic.com) 접속
2. **API Keys** → **Create Key**
3. 키 복사 후 안전하게 보관

### 2단계: Google Drive 폴더 ID 확인

1. Google Drive에서 초안 저장용 폴더 생성 (예: `블로그 초안`)
2. 폴더 열기 → URL 마지막 부분이 폴더 ID
   예: `https://drive.google.com/drive/folders/**1a2b3c4d5e...**`

### 3단계: 황금키워드 시트 헤더 확장

기존 시나리오 1에서 만든 황금키워드 시트에 열 추가:

```
H1: 초안링크
I1: 초안생성일시
```

### 4단계: 연결 정보 교체

| 위치 | 교체할 값 | 실제 값 |
|------|-----------|---------|
| 모듈 1, 6 | `SPREADSHEET_ID` | Google Sheets ID |
| 모듈 3 | `ANTHROPIC_API_KEY` | Claude API 키 |
| 모듈 5 | `GOOGLE_DRIVE_FOLDER_ID` | Google Drive 폴더 ID |
| 모듈 7 | `SLACK_CHANNEL_ID` | Slack 채널 ID (선택) |

> Slack 알림이 필요 없으면 모듈 7을 삭제하거나 Gmail/이메일 모듈로 교체하세요.

---

## 전체 자동화 흐름 (두 시나리오 연동)

```
[시나리오 1] 매일 자동 실행
씨앗 키워드 → 네이버 API 분석 → 황금키워드 필터 → Google Sheets 저장

          ↓ (황금키워드 행 생성됨)

[시나리오 2] 시나리오 1 완료 후 자동 실행 (웹훅 연결)
황금키워드 읽기 → Claude API 초안 작성 → Google Docs 저장 → Slack 알림

          ↓ (사람이 개입)

작성자: Google Docs에서 초안 확인 → 네이버 블로그에 복붙 → 발행
```

---

## Claude 프롬프트 커스터마이징

시나리오 2의 **모듈 3 (HTTP - Claude API)** 에서 프롬프트를 수정할 수 있습니다:

```
기본: 1,500자 이상, 소제목 3~5개, 이모지, 태그 10개

변형 예시:
- "인스타그램 캡션 스타일로 짧게 써줘"
- "전문가 논조로 레퍼런스를 포함해서 써줘"
- "초보자도 이해하기 쉬운 말투로 써줘"
- "리뷰 형식으로 장단점을 나눠서 써줘"
```
