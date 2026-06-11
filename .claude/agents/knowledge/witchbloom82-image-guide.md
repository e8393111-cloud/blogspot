# witchbloom82 이미지 지침 (현실화 v2)

> 이 문서는 **글쓰기 지침(`tukbeoki-blog-writing-guide.md`)의 「영역2: 이미지 생성 프롬프트」**가
> 그대로 따르는 이미지 단일 기준(SSOT)입니다.
> 블로그: `blog.naver.com/witchbloom82` (모든 이미지 우하단 워터마크).
> 이미지 관련 에이전트(`travel-photographer`, `cardnews-image-md`, `veteran-designer`,
> `ai-prompt-engineer`)와 평가단(`reader-panel-evaluator`)은 이 규칙을 기준으로 쓴다.
>
> **v2 변경 핵심(현실화):** 이미지 생성 모델(DALL·E/gpt-image 등)이 한글로 **못 내는 것**
> (매거진 전용 서체·강한 서체 위계·엄격한 에디토리얼 그리드)을 요구에서 **뺀다.**
> 대신 모델이 실제로 잘하는 **깔끔·큼직·고대비·사진 주인공**으로 눈높이를 맞춘다.
> 진짜 프리미엄 타이포가 필요하면 그건 디자인 툴(Canva 등)에서 따로 얹는 별도 작업이다(이 지침의 범위 밖).

---

## ★ 이 이미지가 해내야 할 것 (목표)
독자는 시니어(40~60대 이상) 비중이 높다. 모든 이미지는 아래를 동시에 만족한다.
1. **시니어도 확대 없이 한눈에 읽힌다** — 큰 글씨·높은 대비·또렷한 위계. (1순위)
2. **깔끔하고 정돈돼 보인다** — 빽빽하지 않게, 여백 넉넉히, 한 카드에 메시지 하나. 무료 템플릿 티(원 안 픽토그램·둥근 스티커 말풍선·네온·파워포인트 SmartArt)는 금지.
3. **사진이 먼저 '진짜 그곳'처럼 느껴지고 가고 싶어진다** — 자연광, 그 장소의 실제 분위기. 사진=주인공, 정보=깔끔하게 얹힘.
4. **한 글의 카드들이 한 세트로 보인다** — 포인트색 1개를 글 단위로 통일(아래 색 규칙).

> ⚠️ 안 되는 걸 바라지 않는다: "Kinfolk·Cereal급 매거진 서체"는 모델이 한글로 못 만든다. 그걸로 점수 깎지 않는다. 대신 **크고 깔끔하고 잘 읽히면 합격.**

## ★ 가독성 (1순위)
- 시니어 기준 **큰 글씨.** 확대 없이 읽히는 크기. 작은 글씨로 욱여넣기 금지.
- 정보 많으면 글씨를 줄이지 말고 **이미지를 세로로 더 길게**(4:5→3:4·9:16).
- **동선·경로(예: 금촌역 → 마장호수 → 헤이리 → 합정·홍대)는 한 줄에 욱여넣지 말고, 길면 2줄로 나누고 글씨를 키운다.** (시니어 이탈 1순위 지점)
- 블록·항목 사이 여백·구분선 충분. 한 장에 표 통째로 X.
- 시선 착지점 1개(큰 헤드라인/숫자) + 작은 라벨+값. 다 같은 크기로 빼곡하게 X.

## ★ 타이포 (현실 기준 — 외워둘 것)
- **모델은 한글을 '기본 고딕'으로만 깔끔하게 낸다. 그걸 받아들인다.** 매거진 전용 서체·강한 서체 위계를 프롬프트로 강요하지 않는다(어차피 안 나오고, 억지로 시키면 글자가 뭉개진다).
- '프로처럼' 보이게 하는 진짜 레버는 서체가 아니라 이 4개다:
  1. 글씨를 **아주 크게**
  2. **제목은 굵게 / 라벨·부가설명은 가늘고 작게** — 굵기·크기 차이로만 위계
  3. **넉넉한 여백·자간**
  4. **색 절제** (포인트색은 작은 디테일에만)
- 깔끔·큼직·고대비 = "심플한데 프로" 느낌. 이게 목표지 잡지 흉내가 아니다.

## ★ 레이아웃 (사진 풀배경 + 비치는 글씨 패널)
- 사진은 카드를 꽉 채우는 풀배경(full-bleed). 사진을 잘라 단색(아이보리) 정보 면을 만들지 않는다.
- 글씨는 사진 위, **반투명 유리 패널(글래스모피즘, 불투명도 약 35~45%)** 에 얹는다. **뒤 사진이 또렷이 비칠 것.** "뽀얀 흰 카드"·꽉 찬 불투명 박스 금지(테스트에서 가장 자주 어긋난 지점).
- 농도는 시니어가 읽힐 만큼만: 밝은 사진 위엔 어두운 반투명 패널+밝은 글씨 / 어두운 사진 위엔 밝은 반투명 패널+어두운 글씨. **안 읽히면 글씨를 줄이지 말고 패널을 더 어둡게**(흰색으로 불투명하게 X).
- 패널은 한쪽 모서리(아래 또는 왼쪽)에 끝까지 붙이고 경계를 부드럽게 흐려 사진과 녹인다. 큰 라운드 코너로 스티커처럼 얹지 않는다. (더 나은 1순위: 패널 없이 사진 빈 공간에 글씨 직접 — 특히 썸네일)
- **정렬은 단순하고 일관되게.** 가운데 정렬도 OK. 억지 비대칭·복잡한 그리드 안 해도 된다 — **크고 깔끔하면 된다.**
- ★구도는 카드마다 조금씩 바꿔 단조롭지 않게(패널 위치: 아래 / 왼쪽 등).
- ★한 카드 = 한 사진 = 한 장면. 프레임 반 가르기 금지, 사진 두 장 붙이기 금지.
- 아이콘은 기본적으로 뺀다. 색 원 안 픽토그램 금지. 꼭 쓰면 아주 작은 얇은 라인 1~2개만.

## ★ 색상 (글마다 1개, 이름으로 잠금)
- **★색은 '이름'으로 확정해 모든 카드에 똑같이 박는다.** 영역2 맨 처음에 포인트색 1개를 정하고(예: 스카이블루), 그 **색 이름**을 **모든 카드 영문 프롬프트의 `[ACCENT]` 자리에 동일하게** 쓴다.
- **`pick one` / `choose` 같은 선택형 문구를 모델 프롬프트에 절대 남기지 않는다.** 남기면 카드마다 색이 바뀐다(테스트에서 실제로 블루↔코랄로 갈림).
- **HEX(예: #8E9FD6)는 모델이 무시한다. 반드시 '색 이름'으로 지정한다.**
- 포인트색은 **라벨·숫자·구분선·손글씨 같은 작은 디테일에만**(전체 15% 이하). 사진을 덮지 않는다. 베이스는 사진의 자연색 또는 깔끔한 뉴트럴.
- 최근 글과 다른 색으로(특히 **녹색·주황 자동 반복 금지**).
- 글씨 색은 배경과 대비만 강하면 된다 — 밝은 배경엔 어두운 색, 어두운 배경엔 밝은 색(크림·아이보리). **비비드(쨍한 고채도)·너무 연한 색은 글씨로 안 쓴다.**
- 글자 그라데이션·외곽선·글로우·그림자 금지. 네온·형광·전단지풍 금지.
- 썸네일: 글씨 배경 박스 없이 사진 빈 공간(하늘·물·벽·길·바닥)에 제목만. 제목색은 빈 공간 밝기로 고대비. **제목을 파스텔로 하지 않는다**(대비 약함). 안 읽히면 색 말고 사진 구도·대비를 바꾼다.

**파스텔 로테이션 풀 (글마다 다른 1개):**
코랄핑크 · 버터옐로 · 민트 · 라벤더 · 페리윙클(연보라블루) · 피치 · 스카이블루 · 소프트틸 · 더스티로즈 · 라일락 · 살구 · 연하늘 · 세이지(가끔만)

## ★ 손글씨·도들 (감성 한 스푼, 절제)
- 짧은 태그라인·포인트 한 줄·가격에 손글씨(스크립트) 느낌 + 작은 도들(잎·하트·동그라미·밑줄) 1~2개를 포인트색으로.
- ★**손글씨는 너무 작으면 안 읽혀 무의미하다. 읽힐 크기로 키우거나, 작아질 거면 뺀다.**(평가단 지적)
- 본문 정보(시간·요금·교통·항목)는 또렷한 고딕 유지. 손글씨는 짧은 악센트 문구에만.
- 한 카드에 손글씨+도들 1~2개만, 도배 X.

## ★ 사진 분위기 (진짜 거기처럼 + 가고 싶게)
그 장소·계절의 실제 분위기를 자연광 사진으로. 거리·물·골목·산책길·시장·음식·카페 등 로컬 생활감, 얕은 심도, 사람은 뒷모습·손·실루엣.
★사진 속(배경)에는 **어떤 글자도 넣지 않는다** — 간판·현판·배너·상호·지명·역명판, 한글·영문 모두 금지. 모든 텍스트는 깔끔한 오버레이로만, **사진 안엔 글자 0.**
그 외 금지: 지도·안내판·공식 로고·정확한 랜드마크 재현(분위기로만), 본문에 없는 정보, 네온·만화풍·얼굴 클로즈업.
카드별 사진은 한 장면만. 'split / divided / two scenes / 분할' 같은 단어를 프롬프트에 쓰지 않는다.

## ★ 이모지 (맥락 맞는 것만)
- 카드 위 이모지는 **그 카드 내용과 맞는 것만.** ★국내 당일치기 코스에 비행기✈️ 같은 맥락 안 맞는 이모지 금지(평가단 지적: 40대가 "비행기 타나?" 오해).
- 교통🚇 / 시간⏰ / 화장실🚻 / 사진📷 등 의미가 분명할 때만.

## ★ 생성 툴 워터마크 주의
- 생성 툴이 자체 로고·워터마크(예: "HIGGSFIELD AI")를 박으면 **그대로 올리지 않는다** — 잘라내거나 그 카드는 버리고 다시 뽑는다.
- 블로그 워터마크는 **우하단 `blog.naver.com/witchbloom82` 하나만.**

---

## [글 구조] — 출력은 반드시 2영역
- **영역1 = 최종 본문** (글쓰기 지침 `tukbeoki-blog-writing-guide.md`).
- **영역2 = 이미지 생성 프롬프트** — 매 글 반드시 출력. 아래 카드 구성·영문 프롬프트 꼬리표를 따른다. **영역2 없이 끝내지 말 것.**
- ★영역2 맨 처음에 **이 글의 포인트색 1개(이름)** 를 먼저 적고, 모든 카드 영문 프롬프트의 `[ACCENT]` 자리에 그 색 이름을 동일하게 박는다.

### 영문 프롬프트 꼬리표 — 정보 카드 (끝에 붙임)
> `[ACCENT]`에는 **글 단위로 정한 색 이름**(예: `sky blue`)을 넣는다. 모든 정보 카드에 같은 색.
```
clean modern Korean travel blog information card, the photo is the clear hero and makes you want to visit, a full-bleed natural-daylight photo fills the entire card as the background, the Korean text sits over the photo on a clearly translucent frosted glass panel (glassmorphism at about 35-45% opacity, the photo is clearly visible through the panel, NOT a near-opaque white card, NOT a flat solid-color box, NOT a rounded sticker), the panel is anchored to one edge (bottom or left) and bleeds off that edge with a soft feathered boundary, large clean high-contrast Korean text in a bold simple sans-serif, easily legible for older readers, clear size hierarchy (big bold headline, smaller lighter labels), generous spacing and tidy alignment, the accent color [ACCENT] used consistently and only on small details (thin dividers, small labels, key numbers), never as a wash over the photo, let the photo's natural colors lead, clean neutral feel, simple and tidy not busy, no flat pictogram icons inside colored circles, no PowerPoint SmartArt, no card-news template look, soft natural light, photorealistic DSLR, bright and fresh, no neon, no tourist brochure look, no text outline, no gradient, no glow, no drop shadow on text, no text or signage of any kind inside the photo itself, all Korean text only as a clean overlay, keep all text within a safe margin so nothing is cropped at the edges, a single uninterrupted photo (do not split the frame), a small neutral watermark reading "blog.naver.com/witchbloom82" in the bottom-right corner
```

### 영문 프롬프트 꼬리표 — 썸네일 (끝에 붙임)
```
clean modern Korean travel blog cover photo, the photograph is the hero and feels like a real place you want to visit, place one large high-contrast Korean headline directly on clean empty negative space in the photo (sky, calm water, wall, road, floor or softly blurred area), create that empty space in the composition first, NO background panel and NO colored label box behind the headline, choose the headline color by the background brightness for strong contrast (dark headline on light areas, light headline on dark areas, never a low-contrast pastel headline), large legible Korean headline in a bold simple sans-serif for older readers, optionally one short small handwritten accent line in the accent color [ACCENT] (keep it large enough to read), simple and tidy, soft natural daylight, photorealistic, bright and fresh, no neon, no tourist brochure look, no text outline, no gradient, no glow, no drop shadow, no signage or place-name text anywhere inside the photo scene (only the headline overlay), a small neutral watermark reading "blog.naver.com/witchbloom82" in the bottom-right corner
```

---

## ★ 카드 구성
- 국내 당일치기·해외 2~3박 **7~8장**, 해외 4박+ **9~10장**.
- **국내 당일치기**: 썸네일 `1:1`, 일정요약·대중교통·DAY·맛집·카페·예산 `4:5`(정보 많으면 `3:4`), 짐싸기 `9:16`.
- **해외 2~3박**: 썸네일 `1:1`, 일정요약·항공/공항·DAY1·DAY2·맛집·예산 `4:5`, 짐싸기 `9:16`. **해외 4박+**: +DAY 카드 4~5장.
- ★**카드 타입 분리(테스트 확인 규칙):** 썸네일 = **헤드라인만**(정보 패널 금지). 정보카드 = **패널 + 정보**(거대 커버 헤드라인 금지). 한 장에 둘을 섞지 않는다.
- **출력 형식**: `이미지 N. 카드명 비율` / `삽입 위치 [이미지 N 삽입: 카드명]` / `카드 텍스트(본문 시간표·가격·주의 반영)` / `영문 프롬프트([ACCENT]에 글 색 박기)`.

## ★ 번호 입력
숫자만("1","2"), "이미지N", "N번", "N번 생성" → 그 숫자를 이미지 번호로 보고 **직전 영역2 기획안의 해당 번호**를 그 영문 프롬프트로 생성(생성 전 번호 존재 확인). "전체"=전 카드, "CTA"=CTA 이미지. 영문 프롬프트 기준 생성, 생성 후 설명 X. 없는 번호는 "기획안엔 이미지 1~N까지 있어요. 방향 주면 새로 기획할게요"로 안내.

## ★ CTA 이미지
기본 목록 제외, "CTA 이미지/마무리 문구 이미지" 명확 요청 시만. `16:9, 1200×675`. 국내 문구: 글이 도움 되셨다면 / 공감 💗+이웃추가 / 뚜벅이로 가능한 당일치기 코스 꾸준히 올려요. 국내 금지: 여권·공항·캐리어·환전·eSIM. 권장: 전철역·기차역·버스정류장·교통카드·골목·강변·바다·카페·시장·운동화. 글씨 크게, 우하단 워터마크 필수. 여행 유형 불명확하면 국내/해외 먼저 확인.

---

## ★ 점검 (출력 전 — 현실 기준)
1. 시니어도 확대 없이 읽히나(큰 글씨·강한 대비)
2. 깔끔·정돈됐나(여백·한 메시지) — 원 안 픽토그램·둥근 스티커·네온·SmartArt 없나
3. 사진이 진짜 그곳처럼·가고 싶게 나왔나
4. 정보가 한눈에 읽히나(헤드라인 1개 + 굵기/크기 위계)
5. 사진 풀배경 위 **'비치는' 유리 패널**인가(뽀얀 흰 카드·불투명 박스 아님), 한쪽 모서리에 붙었나
6. **동선·경로 글씨가 충분히 크고, 길면 2줄로 나눴나**(한 줄 욱여넣기 아님)
7. **포인트색을 '색 이름'으로 모든 카드에 동일하게 박았나**(`pick one` 안 남겼나, HEX로만 지정 안 했나)
8. 글씨가 배경과 대비 강한가(비비드·너무 연한 색 아님)
9. 손글씨 악센트가 읽힐 크기인가(작아서 무의미하면 빼기)
10. **사진 안에 글자·간판·지명 없나**(텍스트는 오버레이만)
11. 이모지가 카드 맥락에 맞나(국내 코스에 비행기 X)
12. 1번=썸네일(헤드라인만)·정보카드는 패널 — 타입 안 섞였나
13. **생성 툴 자체 로고/워터마크 안 박혔나**(박혔으면 잘라내거나 재생성), 블로그 워터마크는 우하단 하나만
14. 번호 입력 시 기획안에 있는 번호인가
