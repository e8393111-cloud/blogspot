# blogspot — 인스타 카드뉴스 자동화

블로그/RSS 글(또는 한 줄 주제)을 받아 **Claude로 카드뉴스 문구를 만들고 → 이미지로 렌더링하고 → 인스타그램 캐러셀로 자동 게시**하는 파이프라인입니다.

```
 ┌──────────┐   ┌─────────────────┐   ┌──────────────┐   ┌──────────────────────┐
 │ 블로그/RSS │ → │ Claude (Opus 4.7) │ → │ 렌더러(Pillow) │ → │ Instagram Graph API   │
 │  새 글     │   │ 카드뉴스 문구 생성 │   │ 슬라이드 PNG   │   │ 캐러셀 컨테이너 → 발행 │
 └──────────┘   └─────────────────┘   └──────────────┘   └──────────────────────┘
        └───────────────── Make.com 시나리오가 이 흐름을 오케스트레이션 ─────────────────┘
```

구성:

| 폴더 | 내용 |
|---|---|
| `prompts/cardnews_system.md` | Claude에게 주는 시스템 프롬프트 (글 → 카드뉴스 JSON 변환 규칙) |
| `renderer/` | 카드 슬라이드를 PNG로 그려서 공개 URL로 돌려주는 작은 웹서비스 (FastAPI + Pillow). Make에서 HTTP로 호출. |
| `pipeline/` | **로컬 테스트용** CLI — RSS/URL/주제 → Claude → 렌더 → `out/` 폴더에 PNG + 캡션 저장. Make/인스타 없이 흐름 점검용. |
| `make/` | Make.com 시나리오 설정 가이드(`SETUP.md`) + 가져오기용 블루프린트(`scenario.blueprint.json`) |
| `samples/` | 렌더러 테스트용 예시 카드 JSON |

---

## 빠른 시작 (5분, 로컬에서 흐름만 확인)

```bash
# 1) 의존성
python3 -m venv .venv && source .venv/bin/activate
pip install -r pipeline/requirements.txt

# 2) 한글 폰트 (둘 중 하나)
#    - Ubuntu/Debian:  sudo apt-get install -y fonts-noto-cjk
#    - 또는 Pretendard/Noto Sans KR을 받아 CARD_FONT_REGULAR / CARD_FONT_BOLD 환경변수로 지정

# 3) Claude 키
export ANTHROPIC_API_KEY=sk-ant-...

# 4) 실행 — 블로그 RSS의 최신 글 1개로 카드뉴스 만들기
python pipeline/run.py --feed https://YOURBLOG.blogspot.com/feeds/posts/default --limit 1 --handle @your_handle

#    또는 주제 한 줄로:
python pipeline/run.py --topic "2024 청년 월세 지원 정책 핵심 정리" --theme ivory
```

결과는 `out/<slug>/` 안에 `1.png ... N.png`, `caption.txt`, `meta.json` 으로 저장됩니다.
인스타에는 이 PNG들을 캐러셀로 올리고 `caption.txt` 내용을 붙여넣으면 됩니다(수동). 자동 발행은 아래 Make.com 단계 참고.

---

## 렌더러만 따로 테스트

Claude 없이 렌더링 품질만 보고 싶을 때:

```bash
pip install -r renderer/requirements.txt          # + 한글 폰트
cd renderer && uvicorn main:app --reload           # http://127.0.0.1:8000
# 다른 터미널에서:
curl -s -X POST http://127.0.0.1:8000/render \
  -H 'content-type: application/json' \
  -d @../samples/sample_cards.json | python3 -m json.tool
# 응답의 images[] URL을 브라우저로 열어 확인
```

`/render` 요청 형식:
```jsonc
{
  "theme": "ivory",          // ivory | ink | mint
  "handle": "@your_handle",  // (선택) 카드 마지막 장에 들어갈 핸들
  "slides": [                // Claude가 만든 slides 배열 그대로
    { "role": "cover", "tag": "청년정책", "headline": "...", "subhead": "..." },
    { "role": "body",  "headline": "...", "body": "..." },
    { "role": "cta",   "headline": "...", "body": "...", "handle": "@your_handle" }
  ],
  "caption": "...",          // (선택) 그대로 응답에 echo
  "hashtags": ["#...", ...]  // (선택) 그대로 응답에 echo
}
```
응답: `{ "token": "...", "count": 7, "images": ["https://host/img/<token>/1.png", ...], "caption": ..., "hashtags": ..., "expires_in": 7200 }`
이미지(`/img/...`)는 인증 없이 GET 가능 — Instagram이 가져갈 수 있어야 하므로 의도된 동작입니다. 토큰은 기본 2시간 후 만료.

---

## 렌더러 배포 (Make.com에서 쓰려면 필수)

렌더러는 인터넷에서 접근 가능한 곳에 떠 있어야 합니다(인스타가 이미지 URL을 가져가야 하므로). Docker만 있으면 어디든 됩니다.

### Render.com (가장 간단)
1. 이 저장소를 GitHub에 푸시.
2. Render → **New + → Blueprint** → 저장소 선택. `renderer/render.yaml`을 읽어 자동 구성됩니다.
3. 첫 배포 후 서비스 URL(예: `https://cardnews-renderer.onrender.com`)을 환경변수 `PUBLIC_BASE_URL`에 넣고 재배포.
4. `RENDER_API_KEY` 값(자동 생성됨)을 복사 — Make.com에서 씁니다.
5. `https://<URL>/health` 가 `{"ok": true, "fonts": true}` 면 OK.

### 또는 직접 Docker
```bash
docker build -t cardnews-renderer ./renderer
docker run -p 8000:8000 \
  -e PUBLIC_BASE_URL=https://your-public-host \
  -e RENDER_API_KEY=$(openssl rand -hex 24) \
  cardnews-renderer
```

| 렌더러 환경변수 | 설명 |
|---|---|
| `PUBLIC_BASE_URL` | 응답 `images[]`에 쓸 베이스 URL. 미설정 시 요청 호스트에서 추론. |
| `RENDER_API_KEY` | 설정하면 `/render` 요청은 `X-Api-Key: <값>` 헤더 필요. |
| `RENDER_TTL_SECONDS` | 렌더 이미지 메모리 보관 시간(초). 기본 7200. |
| `CARD_FONT_REGULAR` / `CARD_FONT_BOLD` | (Docker 외 환경에서) CJK 폰트 경로 직접 지정. Docker 이미지엔 `fonts-noto-cjk`가 들어있어 불필요. |

---

## Make.com 자동화 (블로그 새 글 → 인스타 자동 게시)

자세한 모듈별 설정·HTTP 요청 본문은 **[`make/SETUP.md`](make/SETUP.md)** 에 있습니다. 요약:

1. **사전 준비**: 렌더러 배포(위), Claude API 키, Instagram Graph API 토큰/사용자 ID(Meta 비즈니스 앱 + 페이지 연결 필요 — `make/SETUP.md` 0-3 참고).
2. **Make Custom variables** 등록: `ANTHROPIC_API_KEY`, `RENDERER_BASE_URL`, `RENDERER_API_KEY`, `IG_USER_ID`, `IG_ACCESS_TOKEN`, `IG_HANDLE`, `CARDNEWS_THEME`, `BLOG_FEED_URL`.
3. 시나리오: **RSS(새 글) → HTTP(Claude) → JSON 파싱 → HTTP(렌더러) → Iterator → HTTP(IG 미디어 컨테이너) → Array aggregator → HTTP(IG 캐러셀) → HTTP(IG 발행)**.
   - `make/scenario.blueprint.json`을 "Import Blueprint"로 가져오면 이 모듈 체인의 뼈대가 만들어집니다. 가져온 뒤 위 변수들을 채우고, Claude HTTP 모듈 body의 `system` 값을 `prompts/cardnews_system.md` 전체 내용으로 교체하세요(줄바꿈은 `\n` 이스케이프).
4. 처음엔 마지막 "발행" 모듈을 꺼 두고 컨테이너 생성까지만 테스트한 뒤 켜세요.

> Make에 **OpenAI/Anthropic 앱이나 Instagram 앱을 따로 설치할 필요 없습니다** — 전부 HTTP 모듈로 호출하도록 설계했어요. (원하면 Make의 네이티브 앱으로 바꿔도 동작은 동일합니다.)

---

## 카드뉴스 데이터 형식

Claude가 만드는(그리고 렌더러가 받는) JSON:

```jsonc
{
  "slug": "youth-rent-2024",          // 파일명/식별용
  "topic": "2024 청년 월세 한시 특별지원",
  "slides": [
    { "role": "cover", "tag": "청년정책", "headline": "메인 후킹 제목", "subhead": "한 줄 보조 설명" },
    { "role": "body",  "headline": "소제목", "body": "본문 2~4문장" },
    // ... body 슬라이드 여러 개 ...
    { "role": "cta",   "headline": "마무리 한마디", "body": "저장/공유/팔로우 유도", "handle": "@your_handle" }
  ],
  "caption": "인스타 캡션 (첫 줄 후킹 + 요약)",
  "hashtags": ["#청년월세지원", "#청년정책", "..."]   // 캡션과 별도. Make에서 합쳐서 게시.
}
```

- 슬라이드는 6~10장, 첫 장 `cover` / 마지막 장 `cta` / 중간 `body`.
- 규칙·문체는 `prompts/cardnews_system.md`에서 조정하세요.
- 테마는 `renderer/theme.py`에서 색/폰트 추가 가능(`ivory`, `ink`, `mint` 기본 제공).
- 디자인을 더 손보고 싶으면 `renderer/cards.py`의 레이아웃을 고치면 됩니다(캔버스 1080×1350, 4:5).

---

## 동작 원리 한눈에

- **Claude 호출**: `claude-opus-4-7`, adaptive thinking, `output_config.format`(JSON 스키마)로 항상 유효한 JSON을 받습니다. 시스템 프롬프트엔 prompt caching breakpoint를 달아 두었어요(프롬프트가 커지면 자동 적용).
- **렌더러**: Pillow로 텍스트를 박스에 맞춰 자동 줄바꿈·폰트 축소, 한글은 Noto Sans CJK(또는 지정 폰트)로 렌더. 결과 PNG는 토큰 기반 임시 URL로 서빙(메모리 보관, TTL).
- **Instagram**: Graph API의 캐러셀 발행은 (1) 슬라이드별 아이템 컨테이너 생성 → (2) 자식 ID들을 모아 캐러셀 컨테이너 생성 → (3) `media_publish` 순서입니다. Make의 Iterator/Array aggregator가 이걸 처리.
