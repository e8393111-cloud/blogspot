# Make.com 시나리오 — 인스타 카드뉴스 자동 발행

이 폴더는 Make.com에서 **블로그/RSS 글 → Claude로 카드뉴스 문구 생성 → 렌더러로 이미지 생성 → Instagram Graph API로 캐러셀 자동 게시** 흐름을 만드는 가이드입니다.

> Make.com 시나리오는 두 가지로 만들 수 있어요.
> - **A. 블루프린트 가져오기** (`make/scenario.blueprint.json`) — 뼈대를 자동으로 만들고, 아래 "연결/변수 채우기"만 하면 됩니다.
> - **B. 직접 만들기** — 아래 "모듈별 설정"을 따라 모듈을 하나씩 추가합니다.
>
> 어느 쪽이든 **Make에 OpenAI/Anthropic 앱이나 Instagram 앱을 따로 설치할 필요 없이** HTTP 모듈로 호출하도록 설계했습니다.

---

## 0. 사전 준비 (한 번만)

### 0-1. 렌더러 배포
저장소 루트의 `renderer/`를 [Render.com](https://render.com) 같은 곳에 배포합니다. (`README.md`의 "렌더러 배포" 참고)
배포가 끝나면 두 가지를 확보하세요.
- `RENDERER_BASE_URL` — 예: `https://cardnews-renderer.onrender.com`
- `RENDERER_API_KEY` — 렌더러의 `RENDER_API_KEY` 환경변수 값

### 0-2. Anthropic API 키
[Claude Console](https://console.anthropic.com) → API Keys 에서 키를 발급합니다. → `ANTHROPIC_API_KEY`

### 0-3. Instagram 발행용 토큰 (Instagram Graph API)
인스타 자동 게시는 **Instagram 비즈니스/크리에이터 계정**이 **Facebook 페이지**에 연결되어 있어야 합니다.
1. [Meta for Developers](https://developers.facebook.com)에서 앱 생성 → "Instagram Graph API" 추가.
2. Graph API Explorer로 다음 권한의 토큰 발급: `instagram_basic`, `instagram_content_publish`, `pages_show_list`, `pages_read_engagement`.
3. 단기 토큰을 **장기 토큰(약 60일)** 으로 교환하고, 그걸 다시 페이지 액세스 토큰으로 사용합니다.
4. `GET /me/accounts` 로 페이지 ID를, `GET /{page-id}?fields=instagram_business_account` 로 **IG 사용자 ID(`IG_USER_ID`)** 를 알아냅니다.
5. 확보할 것: `IG_USER_ID`, `IG_ACCESS_TOKEN`.
   - 토큰은 만료되므로, Make에 별도 시나리오로 50일마다 토큰 갱신을 돌리거나 만료 시 수동 교체하세요.

### 0-4. Make 커스텀 변수 등록
Make 좌측 메뉴 → **Custom variables** (팀 또는 시나리오 범위)에 아래를 등록해 두면 모듈에서 `{{var}}`로 참조할 수 있어 깔끔합니다. (안 쓰고 모듈에 직접 입력해도 됩니다.)

| 이름 | 값 |
|---|---|
| `ANTHROPIC_API_KEY` | (0-2) |
| `RENDERER_BASE_URL` | (0-1) |
| `RENDERER_API_KEY` | (0-1) |
| `IG_USER_ID` | (0-3) |
| `IG_ACCESS_TOKEN` | (0-3) |
| `IG_HANDLE` | `@yourhandle` (카드 마지막 장에 들어갈 핸들) |
| `CARDNEWS_THEME` | `ivory` (또는 `ink` / `mint`) |
| `BLOG_FEED_URL` | 예: `https://YOURBLOG.blogspot.com/feeds/posts/default` |

---

## 1. 시나리오 흐름 개요

```
[1] RSS: Watch RSS feed items          ← 블로그에 새 글이 올라오면 트리거
        │   (title, link, content/summary)
[2] HTTP: Make a request → Anthropic   ← 글 본문을 Claude에 보내 카드뉴스 JSON 생성
        │   POST https://api.anthropic.com/v1/messages
[3] JSON: Parse JSON                    ← 응답에서 content[0].text(=카드뉴스 JSON) 파싱
        │   { slug, topic, slides[], caption, hashtags[] }
[4] HTTP: Make a request → Renderer     ← slides[]를 보내 PNG 이미지 렌더 + 공개 URL 반환
        │   POST {{RENDERER_BASE_URL}}/render
        │   → { images: ["...1.png", "...2.png", ...], caption, hashtags }
[5] Iterator                            ← images 배열을 한 장씩 순회
        │
[6] HTTP: Make a request → IG media     ← 슬라이드마다 캐러셀 아이템 컨테이너 생성
        │   POST graph.facebook.com/v21.0/{{IG_USER_ID}}/media
        │       ?image_url={{6.image}}&is_carousel_item=true&access_token=...
        │   → { id: "<container_id>" }
[7] Array aggregator                    ← 모든 container_id를 모음
        │
[8] HTTP: Make a request → IG carousel  ← 캐러셀 부모 컨테이너 생성
        │   POST graph.facebook.com/v21.0/{{IG_USER_ID}}/media
        │       ?media_type=CAROUSEL&children={{join(7.array;",")}}
        │       &caption=<caption + hashtags>&access_token=...
        │   → { id: "<creation_id>" }
[9] HTTP: Make a request → IG publish   ← 실제 게시
        │   POST graph.facebook.com/v21.0/{{IG_USER_ID}}/media_publish
        │       ?creation_id={{8.id}}&access_token=...
[10] (선택) Telegram / Slack 알림         ← "게시 완료" 메시지
```

> 처음에는 **[9]를 비활성화**하고 [8]까지만 돌려서 컨테이너가 잘 만들어지는지 확인한 뒤, 잘 되면 [9]를 켜세요. 또는 Instagram 앱의 "Create a Post"로 미리보기 후 수동 발행하는 방식도 가능합니다.

---

## 2. 모듈별 설정

### [1] RSS › Watch RSS feed items
- **URL**: `{{BLOG_FEED_URL}}` (Blogger면 `https://블로그주소/feeds/posts/default`, 워드프레스면 `/feed/`)
- **Maximum number of returned results**: `1` (테스트할 땐 1, 운영 시 1~2)
- 첫 실행 시 "어디서부터"는 "from now on"으로 설정하면 새 글만 잡습니다.

### [2] HTTP › Make a request — Claude로 카드뉴스 생성
- **URL**: `https://api.anthropic.com/v1/messages`
- **Method**: `POST`
- **Headers**:
  - `x-api-key`: `{{ANTHROPIC_API_KEY}}`
  - `anthropic-version`: `2023-06-01`
  - `content-type`: `application/json`
- **Body type**: `Raw` / `JSON (application/json)`
- **Request content** (아래 JSON. `system` 값에는 `prompts/cardnews_system.md` 전체 내용을 한 줄 문자열로 넣으세요. 줄바꿈은 `\n`으로 이스케이프):
  ```json
  {
    "model": "claude-opus-4-7",
    "max_tokens": 4000,
    "thinking": { "type": "adaptive" },
    "output_config": {
      "effort": "medium",
      "format": {
        "type": "json_schema",
        "schema": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "slug": { "type": "string" },
            "topic": { "type": "string" },
            "slides": { "type": "array", "items": {
              "type": "object", "additionalProperties": false,
              "properties": {
                "role": { "type": "string", "enum": ["cover","body","cta"] },
                "tag": { "type": "string" }, "headline": { "type": "string" },
                "subhead": { "type": "string" }, "body": { "type": "string" },
                "handle": { "type": "string" }
              },
              "required": ["role","headline"]
            }},
            "caption": { "type": "string" },
            "hashtags": { "type": "array", "items": { "type": "string" } }
          },
          "required": ["slug","topic","slides","caption","hashtags"]
        }
      }
    },
    "system": "여기에 prompts/cardnews_system.md 전체 내용을 \\n 이스케이프해서 넣으세요",
    "messages": [
      { "role": "user", "content": "HANDLE: {{IG_HANDLE}}\n\nSOURCE_URL: {{1.url}}\n\nARTICLE:\n{{1.content}}" }
    ]
  }
  ```
  - `{{1.url}}`, `{{1.content}}`는 [1] RSS 모듈의 출력 매핑입니다. 글 본문이 HTML이면 그대로 보내도 Claude가 처리합니다(원하면 `replace()`로 태그 제거).
  - "Parse response"는 켜 두세요(JSON으로 받기).

### [3] JSON › Parse JSON
- **JSON string**: `{{2.body.content[1].text}}`
  - Claude 응답은 `content` 배열입니다. `thinking`을 켰으므로 보통 `content[0]`이 thinking 블록, **마지막 텍스트 블록**이 우리가 원하는 JSON입니다. Make에서는 `2.body.content[]`를 살펴 `type = "text"`인 항목의 `.text`를 쓰세요. 간단히는 마지막 요소 `last(2.body.content).text`도 됩니다.
  - "Data structure"는 [3] 모듈에서 "Generate" 버튼으로 한 번 샘플 JSON(예: `samples/sample_cards.json`의 슬라이드 부분)을 붙여 만들면 이후 매핑이 편합니다.

### [4] HTTP › Make a request — 렌더러 호출
- **URL**: `{{RENDERER_BASE_URL}}/render`
- **Method**: `POST`
- **Headers**:
  - `X-Api-Key`: `{{RENDERER_API_KEY}}`
  - `content-type`: `application/json`
- **Body** (Raw / JSON):
  ```json
  {
    "theme": "{{CARDNEWS_THEME}}",
    "handle": "{{IG_HANDLE}}",
    "slides": {{3.slides}},
    "caption": "{{3.caption}}",
    "hashtags": {{3.hashtags}}
  }
  ```
  - `{{3.slides}}`, `{{3.hashtags}}`는 [3]에서 파싱한 **배열을 그대로** 매핑합니다(따옴표로 감싸지 마세요).
- "Parse response" 켜기 → 응답: `{ token, count, images: [...], caption, hashtags, expires_in }`

### [5] Iterator
- **Array**: `{{4.body.images}}`  → 한 장씩 `{{5.value}}`(또는 `{{5}}`)로 나옵니다. 슬라이드 인덱스는 `{{5.__IMTINDEX__}}` 또는 `{{bundlePosition}}`로 잡을 수 있어요(필요 시).

### [6] HTTP › Make a request — 캐러셀 아이템 컨테이너
- **URL**: `https://graph.facebook.com/v21.0/{{IG_USER_ID}}/media`
- **Method**: `POST`
- **Query string**(또는 form body):
  - `image_url` = `{{5.value}}`
  - `is_carousel_item` = `true`
  - `access_token` = `{{IG_ACCESS_TOKEN}}`
- "Parse response" 켜기 → 응답: `{ id: "<container_id>" }`

### [7] Tools › Array aggregator (또는 "Array aggregator" 모듈)
- **Source module**: [5] Iterator
- **Aggregated fields**: `{{6.body.id}}`  → 결과는 컨테이너 ID 배열

### [8] HTTP › Make a request — 캐러셀 부모 컨테이너
- **URL**: `https://graph.facebook.com/v21.0/{{IG_USER_ID}}/media`
- **Method**: `POST`
- **Query string**:
  - `media_type` = `CAROUSEL`
  - `children` = `{{join(7.array; ",")}}`  (Array aggregator 결과 배열을 콤마로 연결)
  - `caption` = `{{3.caption}}` + 줄바꿈 + `{{join(3.hashtags; " ")}}`  (캡션 + 해시태그)
  - `access_token` = `{{IG_ACCESS_TOKEN}}`
- "Parse response" 켜기 → 응답: `{ id: "<creation_id>" }`

### [9] HTTP › Make a request — 발행
- **URL**: `https://graph.facebook.com/v21.0/{{IG_USER_ID}}/media_publish`
- **Method**: `POST`
- **Query string**:
  - `creation_id` = `{{8.body.id}}`
  - `access_token` = `{{IG_ACCESS_TOKEN}}`

### [10] (선택) Telegram Bot › Send a Text Message / Slack 등
- 이미 가지고 계신 Telegram Bot 연결을 써서 "✅ 카드뉴스 발행 완료: {{1.title}}" 같은 알림.

---

## 3. 트리거 옵션
- **블로그 새 글 자동**: [1] RSS 모듈 + 시나리오 스케줄을 15분~1시간 간격으로.
- **수동 실행**: [1]을 빼고 시나리오 시작을 "Run once"로, 본문/주제는 [2]의 user content에 직접 입력.
- **뉴스/트렌드 자동**: 이미 운영 중인 뉴스 수집 시나리오의 출력을 이 시나리오의 입력으로 연결(웹훅 또는 Data store 경유).

## 4. 자주 막히는 부분
- **Instagram이 image_url을 못 가져옴**: 렌더러 URL이 공개(HTTPS, 인증 없이 접근 가능)인지 확인. `/img/...` 경로는 토큰이 있으면 누구나 GET 가능합니다. 렌더러를 사설망/로컬에 두면 인스타가 접근 못 합니다.
- **렌더 URL 만료**: 렌더러는 기본 2시간 후 이미지를 메모리에서 지웁니다(`RENDER_TTL_SECONDS`). [4]→[9]가 그 안에 끝나면 문제 없지만, 디버깅으로 오래 멈춰 두면 만료될 수 있어요. 늘리려면 렌더러 환경변수 조정.
- **Claude 응답이 JSON이 아님**: `output_config.format`을 넣었으면 항상 유효한 JSON 텍스트가 옵니다. 그래도 `content` 배열에서 `type:"text"` 블록을 골라야 합니다(thinking 블록이 앞에 올 수 있음).
- **캐러셀은 2~10장**: 슬라이드가 1장이면 캐러셀이 안 됩니다(단일 이미지로 게시). 프롬프트에서 6~10장을 만들게 했으니 보통 문제 없지만, 입력이 빈약하면 6장 미만이 될 수 있어요.
- **토큰 만료(401/190)**: `IG_ACCESS_TOKEN`은 약 60일. 갱신 시나리오를 따로 두세요.
