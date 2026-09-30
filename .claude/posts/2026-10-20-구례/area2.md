# 영역2 — 이미지 지시서 · 전남 구례 화엄사 + 피아골 단풍 (발행 예정 2026-10-20)

> 기준: `.claude/image-guide.md`(단일 기준) + 그 머리말이 우선하도록 지정한 `.claude/blog-image-project-instructions-v2.md`
> 영역1 `[이미지 삽입]` 10개와 **이름·순서·개수 1:1** (이미지1~10). CTA 16:9 포함.

## 사용법 (3줄)
> ①배경 사진 파일을 열어 저장 (`photos/` 폴더) → ②GPT에 업로드 → ③해당 카드의 프롬프트에 **공통 꼬리표(TAIL-A 또는 TAIL-B)를 이어 붙여** 글자만 얹기
> 결과가 '실제 사진에 글자를 얹은 것'이 아니라 '새 풍경'처럼 보이면 실패. 같은 사진에서 배경이 2번 변하면 3번째 생성하지 말고 **원본 사진을 그대로 본문에 넣고 정보는 네이버 본문 텍스트로** 간다(V2 §8).

---

## 0. 세트색 · 공통 규칙 (한 번 정의)

### 세트색 (1개, 톤 2단)
- **포인트색 = 계곡 청록 그린 `#2E6F5E`** (어두운 바탕 위에서는 같은 색상의 밝은 톤 `#B7DCCB`)
- 왜 이 색인가: 확보한 실사진 3장(화엄사 경내·화엄사계곡·피아골)의 공통 색이 **기와 먹색 + 돌 회색 + 계곡 초록**이다. 앰버/주황은 쓰지 않는다(`NOT orange, NOT amber, NOT gold`).
  단풍 사진이 들어와도 포인트색은 그린으로 유지한다 — 붉은 단풍 위에서 그린 라벨이 보색으로 또렷하고, 카드마다 색을 다시 뽑지 않는다.
- 사용처: 핵심 숫자·짧은 라벨·얇은 실선만(면적 15% 이하).
- 본문 글씨: 밝은 곳 `#1F2A2E`(기와 먹색) / 어두운 곳 `#F6F1E4`(크림).
- 사진 없는 카드(2·3·4·9)의 바탕: 따뜻한 크림 `#F4EFE3` 단색.

### 공통 금지사항 (모든 카드 프롬프트에 핵심 금지구를 다시 박는다)
`NO panel, NO glass, NO translucent layer, NO box, NO rounded card, NO sticker or icon badge, NO emoji, NO dotted lines, NO white or foggy wash over the photo, NO bottom strip or top band, never split the frame, one scene only, do not add remove or replace any sky, mountain, tree, leaf, water, building, person, sign or object, do not change season or weather, do not exaggerate color, render every Korean character and number exactly as written and add no other text or numbers.`

### 지침 충돌 처리 (image-guide 머리말 → V2 우선)
- image-guide 본문은 "soft drop shadow"를 허용하나 **V2는 그림자·글로우·외곽선·글자 뒤 처리를 전면 금지** → 아래 꼬리표에서 그림자를 뺐다. 가독성은 **글자 색(밝은 곳=먹색, 어두운 곳=크림)과 위치**로 확보한다.
- image-guide 꼬리표의 "tiny doodles" 등 자동 장식은 V2("불필요한 아이콘·장식 자동 추가 금지")에 따라 뺐다.
- 카드 안에는 **이모지를 넣지 않는다**(CLAUDE.md). CTA 기본 문구의 💗도 뺐다.
- ★**워터마크 위치**: 확보한 실사진 3장은 전부 **우하단에 한국관광공사 워터마크가 이미 박혀 있다**(CREDITS.md는 "워터마크 없음"이라 썼으나 실제로 열어 보니 있음). 원저작자 표기는 지우지 않으므로 **우리 워터마크는 좌하단**. 사진 없는 크림 카드는 우하단.

### TAIL-A — 실사진 위 정보 카드 꼬리표 (카드 5·6·7·10 / 썸네일(1)은 TAIL-T)
```
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. Do not add, remove or replace any sky, mountain, tree, leaf, water, rock, building, roof, person or object, do not change the season or weather, do not exaggerate saturation, contrast or color, keep any existing Korea Tourism Organization credit mark in the photo untouched. ACCENT COLOR: one single accent for the whole set, deep valley green #2E6F5E (use the lighter tone #B7DCCB on dark areas), identical on every card, no pink no magenta, not orange not amber not gold, use the accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, crop it so the text sits on one vertical side, place the Korean text DIRECTLY on the photo with no shadow, no glow and no outline, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO blur behind the text NO bottom strip or top band NO template-like side panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic in a firm medium-bold weight, readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text #1F2A2E on light areas and cream text #F6F1E4 on dark areas, no vivid or pale low-contrast text, no text outline gradient glow or shadow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, keep each card minimal with only one or two numbers per line so the text stays accurate. WAYFINDING: the card works as a one-glance instruction not a poster, apply these only where the card text provides them (big bus and stop names, walking direction, one difficulty note, one backup line, phone number near the top) and never add any line, bus number, time or phone number that is not in the card text. ICONS: none, no icon badges, no emoji or sticker badges, no dotted separator lines, no speech-bubble panel, no card-news or SmartArt look. PHOTO: natural colors as in the uploaded photo, no sunset, no signs banners place-names or shop-names added inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. At most one short handwritten script tagline line, only if the card text lists one, and no doodles; main info stays in clean gothic. Small neutral watermark "blog.naver.com/witchbloom82" at the bottom LEFT corner because the bottom right holds the original photo credit.
```

### TAIL-T — 썸네일 꼬리표 (image-guide 썸네일 꼬리표 그대로 + V2 반영)
```
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. Do not add, remove or replace any sky, mountain, tree, leaf, water, building or object, do not change the season or weather, do not exaggerate color. premium editorial magazine cover in the aesthetic of Kinfolk and Cereal, one continuous full-bleed natural-daylight photo as the hero, place one large high-contrast Korean headline DIRECTLY on clean negative space of the photo (calm sky, water, wall, road or softly blurred area that already exists in the photo) with no shadow, no glow and no outline, that empty space must come from the photo composition itself, NO panel NO glass NO translucent layer NO text background box NO colored label box NO pill banner NO bottom strip NO white or foggy wash NO blur behind the text, choose headline color by background brightness dark #1F2A2E on light and cream #F6F1E4 on dark never a low-contrast pastel headline, headline in clean refined Korean gothic with strong weight contrast not a brush or calligraphy font, the thumbnail stays purely a cover with only a short headline and an optional one-line tagline, no route numbers no bus numbers no information lists no icon rows no boxes, render the Korean headline exactly as written do not invent alter or add any text or numbers, ONE accent color deep valley green #2E6F5E (lighter tone #B7DCCB on dark) used only on tiny details, not orange not amber not gold, no pink, no signs or place-name text inside the photo scene only the headline overlay, no text outline gradient or glow, clear natural daylight natural colors, small neutral watermark "blog.naver.com/witchbloom82" at the bottom right unless the photo already carries an original photo credit in that corner, in which case place it bottom left and leave the credit untouched.
```

### TAIL-B — 사진 없는 크림 정보 카드 꼬리표 (카드 2·3·4·9)
```
FLAT INFOGRAPHIC, NO PHOTOGRAPH: a clean editorial information card on a plain warm cream #F4EFE3 background, no photo, no texture, no gradient, no illustration, no decoration. ACCENT COLOR: one single accent, deep valley green #2E6F5E, only on key numbers, short labels and thin solid divider lines, about 15 percent of the text, body text dark ink #1F2A2E, no pink no orange no amber no gold. LAYOUT: one text column with a strict editorial grid and generous margins, group related lines with white space, thin solid hairlines are allowed as dividers, NO boxes NO rounded cards NO panels NO pill chips NO sticker or icon badges NO emoji NO dotted lines NO shadows NO glow NO outline NO gradient. TYPE: large clean high-contrast Korean gothic in a firm medium-bold weight, readable without zooming, strong weight contrast for hierarchy (large title, large key numbers, smaller supporting lines that stay at least 70 percent of the key line size), numbers that are not bus numbers carry a small label and use the accent color, render every Korean character and number exactly as written, do not invent alter drop or add any text or numbers, only one or two numbers per line. No map, no logo, no symbols other than the arrow characters written in the card text. Small neutral watermark "blog.naver.com/witchbloom82" at the bottom right.
```

---

## 카드 목록 (요약)

| # | 카드 | 비율 | 실배경 |
|---|---|---|---|
| 1 | 썸네일 · 화엄사 전경 | 1:1 | ★미확보(가을 사진 필요) |
| 2 | 코스 요약 카드 | 4:5 | 사진 없음 — 크림 카드(작은 사진도 없음) |
| 3 | 출발지별 교통 카드 | 4:5 | 사진 없음(터미널·버스는 API에 없음) — 크림 카드 |
| 4 | 구례구역 함정 안내 | 4:5 | 사진 없음(역·정류장 사진 없음) — 크림 카드 |
| 5 | 화엄사 | 1:1 | 확보 `hwaeomsa-127923.jpg` (봄 사진, 아래 경고 참조) |
| 6 | 화엄사계곡 쉬는 자리 | 4:5 | 확보 `hwaeomsa-gyegok-126266.jpg` |
| 7 | 피아골 단풍 | 4:5 | ★미확보(가을 사진 필요) |
| 8 | 연곡사 | 4:5 | 확보 `yeongoksa-126363.jpg` — **오버레이 없이 원본 그대로** |
| 9 | 맛집 카드 | 4:5 | 사진 없음 — 크림 카드 |
| 10 | CTA | 16:9 | 확보 `piagol-126265.jpg` (여름 초록, 아래 경고 참조) |

---

## 이미지 1. 썸네일 · 화엄사 전경 · 1:1
- **삽입 위치**: `[이미지 삽입: 이미지1 썸네일 · 화엄사 전경 · 1:1]`
- **실배경 사진**: ★미확보 — 가을 사진 필요(운영자 확보)
  - 확보한 `hwaeomsa-127923.jpg`는 **매화 핀 봄**이라 단풍 글 표지로 쓰면 글과 사진이 어긋나고, 계절 변경은 V2가 금지하므로 **쓰지 않는다.**
  - 찾는 방법: 한국관광공사 포토코리아(phoko.visitkorea.or.kr)에서 "화엄사 단풍" · "지리산 피아골 단풍" 검색. 또는 `.claude/photo-tool.md`의 `detailImage2`로 화엄사(127923)·피아골(126265)의 다른 컷 목록을 받아 가을 컷을 고른다(한 장소당 4~11장).
  - 통과 조건: ①`cpyrhtDivCd`=**Type1** ②열어서 사진 안 글자·간판 없음 확인 ③한쪽 세로에 잔잔한 여백(하늘·물·흐린 숲) ④정방형 크롭 가능.
  - 파일명은 `photos/thumb-autumn-<contentid>.jpg`로 저장, `CREDITS.md`에 contentid·Type 기록.
- **카드 텍스트** (표지 only — 정보 나열 금지):
  ```
  구례 단풍 코스
  화엄사 입장료 0원
  피아골은 오후 5시 마감
  ```
  손글씨 태그라인 1줄(선택): `차 없이 다녀와요`
  (`구례 단풍 코스` 가장 크게 · `0원`·`오후 5시`만 포인트색 그린)
- **영문 프롬프트**:
  ```
  Edit the uploaded real autumn photograph as a 1:1 square magazine cover. Keep the scene EXACTLY as-is, do NOT repaint or regenerate the background, ONLY overlay the Korean headline and the watermark. Crop to a square so that one vertical side is the calmest, emptiest area that already exists in the photo, and place the headline there, left-aligned, in three short lines, exactly as written: line 1 "구례 단풍 코스" in the largest size, line 2 "화엄사 입장료 0원" and line 3 "피아골은 오후 5시 마감" in a clearly smaller size. Only "0원" and "오후 5시" are colored in the accent green (#2E6F5E on light areas, #B7DCCB on dark areas), everything else uses the dark ink #1F2A2E on light areas or the cream #F6F1E4 on dark areas, chosen by the brightness of the photo where each line sits. Optionally one small handwritten script tagline line "차 없이 다녀와요" under the headline in the accent color. The text sits directly on the photo, NO panel, NO glass, NO box, NO rounded card, NO sticker or icon badge, NO emoji, NO dotted line, NO white or foggy wash, NO blur behind the text, no shadow, no glow, no outline, never split the frame, do not change the season, do not exaggerate the autumn colors, no bus numbers, no information list, no other text or numbers. NOT orange, NOT amber, NOT gold, natural colors, NOT a monochrome wash. Then append TAIL-T.
  ```

## 이미지 2. 코스 요약 카드 · 4:5
- **삽입 위치**: `[이미지 삽입: 이미지2 코스 요약 카드 · 4:5]`
- **실배경 사진**: 없음. 지점별 작은 실사진도 쓰지 않는다(확보 4장은 봄·여름·한자 현판이라 이 카드에 부적합, AI 생성 컷 금지). → 번호+글자만. **이 카드만 '패널 금지'의 예외**이나 박스는 쓰지 않고 얇은 실선만 쓴다.
- **카드 텍스트** (area1 값만. 지점 간 이동은 area1에 있는 것만 적음):
  ```
  구례 반나절 코스
  화엄사 하나만 봐도 충분해요

  ① 구례구역 (열차로 오면)
  　↓ 군내버스 14분 · 도보 불가
  ② 구례터미널
  　↓ 군내버스 10~15분
  ③ 화엄사 · 관람 1~2시간
  　↓ 구례읍내로 돌아와
  ④ 점심

  단풍 욕심 내는 날
  피아골 먼저 → 화엄사는 오후 4시 전 도착
  둘 다 무리면 하나만 골라도 좋아요

  전체 소요
  광주 기준 버스 편도 1시간 15~34분
  화엄사 체류 1~2시간
  ────
  1인 교통비
  21,600원 (광주 출발 왕복)
  입장료 0원 · 65세 할인 따질 필요 없음
  ────
  ★마감 시각
  피아골 17:00
  화엄사는 해 지기 전
  ```
  라벨 `전체 소요` `1인 교통비` `★마감 시각`은 포인트색. 마감 칸이 가장 눈에 띄게(가장 큰 숫자 `17:00`).
  ※ 버스 번호·하차 후 도보·피아골↔화엄사 이동 소요는 area1에 값이 없어 **넣지 않았다.** 구례구역↔구례터미널은 도보 불가로 표시.
- **영문 프롬프트**:
  ```
  Create a 4:5 vertical course-summary infographic for a Korean walking-trip blog, flat design on a plain warm cream #F4EFE3 background, no photograph. Use one text column with a vertical timeline on the left: four large numbered nodes ①②③④ connected by a thin solid vertical line in the accent green #2E6F5E (no dotted line). Render this Korean text exactly as written, top to bottom. Title (large): "구례 반나절 코스", subtitle (smaller): "화엄사 하나만 봐도 충분해요". Node ① "구례구역 (열차로 오면)", between ① and ② the transfer line "군내버스 14분 · 도보 불가" with a small down arrow, node ② "구례터미널", between ② and ③ "군내버스 10~15분", node ③ "화엄사 · 관람 1~2시간", between ③ and ④ "구례읍내로 돌아와", node ④ "점심". Under the timeline, one small block of two lines: "단풍 욕심 내는 날" then "피아골 먼저 → 화엄사는 오후 4시 전 도착" then a smaller line "둘 다 무리면 하나만 골라도 좋아요". At the bottom, three summary columns separated by thin solid vertical hairlines (no boxes, no cards): column 1 label "전체 소요" with "광주 기준 버스 편도 1시간 15~34분" and "화엄사 체류 1~2시간"; column 2 label "1인 교통비" with "21,600원 (광주 출발 왕복)" and "입장료 0원 · 65세 할인 따질 필요 없음"; column 3 label "★마감 시각" with "피아골 17:00" and "화엄사는 해 지기 전", column 3 is the visually strongest with "17:00" as the largest number. The three labels and the numbers 14, 10~15, 17:00 use the accent green, all other text uses dark ink #1F2A2E. Do not invent any bus number, time, walking minute or price that is not written above. NO panel, NO glass, NO box, NO rounded card, NO sticker or icon badge, NO emoji, NO dotted lines, NO shadow, NO photo. Then append TAIL-B.
  ```

## 이미지 3. 출발지별 교통 카드 · 4:5
- **삽입 위치**: `[이미지 삽입: 이미지3 출발지별 교통 카드 · 4:5]`
- **실배경 사진**: 없음(시외버스터미널·버스·열차는 관광사진 API에 없음, 가짜로 채우지 않음) → 크림 정보 카드.
- **카드 텍스트**:
  ```
  구례 가는 길 · 출발지별

  광주 → 구례터미널
  시외버스 1시간 15분~1시간 34분
  요금 9,800원 · 하루 16~17회
  광주발 첫차 06:35 (광주 유·스퀘어 승차)

  순천 → 구례
  열차: 구례구역까지 약 13분 (구례구역 함정!)
  시외버스: 구례터미널 직행 · 하루 15회
  순천발 첫차 06:45 · 걷는 수고 없는 쪽

  서울
  열차: 용산 → 구례구역 · 하루 약 15회 · 첫차 05:08
  일반 열차 2시간 20~30분대
  버스: 서울남부터미널 → 구례터미널 · 하루 8회 · 약 3시간
  65세 이상 평일(월~목) 코레일 30% 할인
  ```
  경고 1줄: `구례구역은 구례읍이 아니에요`
  ※ 서울 버스 요금(3만원 안팎, 2023년 자료)은 기준이 옛 자료라 카드에서 뺐다(본문에 있음). 정보가 밀리면 **3:4로 늘리되** 삽입 포인트 이름은 그대로.
- **영문 프롬프트**:
  ```
  Create a 4:5 vertical transport information card as a one-glance route sign for a Korean walking-trip blog, flat design on a plain warm cream #F4EFE3 background, no photograph. One left-aligned text column with three sections separated by thin solid hairlines. Render exactly this Korean text. Title (large): "구례 가는 길 · 출발지별". Section 1 heading (large, bold) "광주 → 구례터미널", lines: "시외버스 1시간 15분~1시간 34분", "요금 9,800원 · 하루 16~17회", "광주발 첫차 06:35 (광주 유·스퀘어 승차)". Section 2 heading "순천 → 구례", lines: "열차: 구례구역까지 약 13분 (구례구역 함정!)", "시외버스: 구례터미널 직행 · 하루 15회", "순천발 첫차 06:45 · 걷는 수고 없는 쪽". Section 3 heading "서울", lines: "열차: 용산 → 구례구역 · 하루 약 15회 · 첫차 05:08", "일반 열차 2시간 20~30분대", "버스: 서울남부터미널 → 구례터미널 · 하루 8회 · 약 3시간", "65세 이상 평일(월~목) 코레일 30% 할인". Last line, one short warning in the accent green: "구례구역은 구례읍이 아니에요". The three section headings are the largest text after the title, the labels "요금", "열차", "시외버스", "버스" and the durations use the accent green #2E6F5E, everything else dark ink #1F2A2E. Do not invent any bus number, time, price or minute that is not written above. NO panel, NO glass, NO box, NO rounded card, NO sticker or icon badge, NO emoji, NO dotted lines, NO shadow, NO photo. Then append TAIL-B.
  ```

## 이미지 4. 구례구역 함정 안내 · 4:5
- **삽입 위치**: `[이미지 삽입: 이미지4 구례구역 함정 안내 · 4:5]`
- **실배경 사진**: 없음(구례구역·정류장 사진 미확보, 가짜로 채우지 않음) → 크림 정보 카드. 사진을 원하면 운영자가 현장·공식 사진을 확보해 그때 TAIL-A로 전환.
- **카드 텍스트** (버스 번호·정류장 위치·하차 후 도보는 area1에 값이 없어 **넣지 않음**):
  ```
  구례구역은 구례읍이 아니에요
  구례터미널까지 도로 약 6km · 걸어갈 수 없어요

  1단계  구례구역 → 구례터미널
  군내버스 14분 · 택시 7분 약 8,000원
  기사님께 "구례터미널 가요?"

  2단계  구례터미널 → 화엄사
  군내버스 10~15분 · 요금 1,000원
  하루 36회 · 배차가 잦아요

  버스 타는 시간만 합쳐 25~30분
  환승 대기·하차 후 걷는 시간은 별도

  플랜B  걷기는 안 되고 택시는 돼요
  실시간 버스 도착은 네이버지도
  ```
  라벨(`1단계` `2단계` `플랜B`)과 시간·요금 숫자는 포인트색, `걸어갈 수 없어요`는 굵게.
- **영문 프롬프트**:
  ```
  Create a 4:5 vertical route-sign card for a Korean walking-trip blog, flat design on a plain warm cream #F4EFE3 background, no photograph. Left-aligned single column. Render exactly this Korean text. Headline (largest): "구례구역은 구례읍이 아니에요". Sub-headline: "구례터미널까지 도로 약 6km · 걸어갈 수 없어요" with "걸어갈 수 없어요" in bold. Then two steps separated by a thin solid hairline. Step 1: label "1단계" in the accent green, heading "구례구역 → 구례터미널", lines "군내버스 14분 · 택시 7분 약 8,000원" and "기사님께 "구례터미널 가요?"". Step 2: label "2단계" in the accent green, heading "구례터미널 → 화엄사", lines "군내버스 10~15분 · 요금 1,000원" and "하루 36회 · 배차가 잦아요". Then one summary line "버스 타는 시간만 합쳐 25~30분" with a smaller line under it "환승 대기·하차 후 걷는 시간은 별도". Then a short backup line "플랜B  걷기는 안 되고 택시는 돼요" with "플랜B" in the accent green, and a last small line "실시간 버스 도착은 네이버지도". The step labels, the minutes and the fares use the accent green #2E6F5E and carry their labels (요금, 군내버스), everything else uses dark ink #1F2A2E. Do not invent any bus route number, stop name, walking minute or phone number, they are not in the card text. NO panel, NO glass, NO box, NO rounded card, NO sticker or icon badge, NO emoji, NO dotted lines, NO shadow, NO photo. Then append TAIL-B.
  ```

## 이미지 5. 화엄사 · 1:1
- **삽입 위치**: `[이미지 삽입: 이미지5 화엄사 · 1:1 또는 4:5]` → **1:1로 확정**(원본이 940×626 가로라 4:5는 폭 500px만 남아 흐려짐)
- **실배경 사진**: `/home/user/blogspot/.claude/posts/2026-10-20-구례/photos/hwaeomsa-127923.jpg` (contentid 127923 · Type1)
  - 열어서 확인: 경내 부감, 오른쪽에 큰 기와 지붕, 가운데 매화, 뒤 산. ★**우하단에 한국관광공사 워터마크 있음**(우리 워터마크는 좌하단). 사진 안 글자·간판 없음.
  - ⚠**봄(매화) 사진**이다. 이 카드 글에는 계절 언급이 없어 쓸 수는 있으나, 10월 글에서 매화가 보이면 독자가 어긋남을 느낄 수 있다 → **가을 화엄사 컷을 확보하면 교체 권장.**
  - 글자 자리: 오른쪽 **기와 지붕(어두운 먹색)** 면 → 크림 글씨. 기와 결이 있어 완전히 잔잔하진 않으므로 글자를 굵게·크게 유지. 1:1 크롭은 x 약 300~940 구간(오른쪽 지붕+KTO 표기 포함)으로 잡는다. 2번 실패하면 원본 그대로 삽입 + 본문 텍스트.
- **카드 텍스트**:
  ```
  화엄사 입장료 0원
  2023년 5월부터 무료
  주차장도 2026년 1월부터 무료

  관람 1~2시간 · 연중무휴
  해가 지면 들어갈 수 없어요
  108계단은 안 올라도 돼요
  ```
  (`0원` 큰 포인트색 밝은 톤 `#B7DCCB` · `해가 지면 들어갈 수 없어요` 굵게. "18시까지" 표기 금지)
- **영문 프롬프트**:
  ```
  Edit the uploaded real photograph as a 1:1 square. Keep the scene EXACTLY as-is, do NOT repaint or regenerate the background, ONLY overlay the Korean text and the watermark. Crop to a square that keeps the right-hand side of the photo, and place the Korean text left-aligned directly on the large dark roof area on the right side of the frame, in cream #F6F1E4, no shadow, no glow, no outline. Render exactly this Korean text. Line 1 (largest): "화엄사 입장료 0원" with "0원" in the light accent green #B7DCCB. Line 2 (smaller): "2023년 5월부터 무료". Line 3 (smaller): "주차장도 2026년 1월부터 무료". A blank gap, then three smaller lines: "관람 1~2시간 · 연중무휴", "해가 지면 들어갈 수 없어요" (bold), "108계단은 안 올라도 돼요". Do not write "18시" anywhere. Keep the existing Korea Tourism Organization credit mark in the lower right of the photo untouched and put the small neutral watermark "blog.naver.com/witchbloom82" at the bottom LEFT. NO panel, NO glass, NO box, NO rounded card, NO sticker or icon badge, NO emoji, NO dotted line, NO white or foggy wash, NO blur behind the text, never split the frame, do not change the season or the plum blossom, do not add or remove any roof, tree or building, no other text or numbers. NOT orange, NOT amber, NOT gold, natural colors, NOT a monochrome wash. Then append TAIL-A.
  ```

## 이미지 6. 화엄사계곡 쉬는 자리 · 4:5
- **삽입 위치**: `[이미지 삽입: 이미지6 화엄사계곡 쉬는 자리 · 4:5]`
- **실배경 사진**: `/home/user/blogspot/.claude/posts/2026-10-20-구례/photos/hwaeomsa-gyegok-126266.jpg` (contentid 126266 · Type1)
  - 열어서 확인: 햇빛 받는 너럭바위·얕은 물·오른쪽 잎. ★우하단에 한국관광공사 워터마크 있음(우리 것은 좌하단). 사진 안 글자 없음. 화면이 전체적으로 **바위 결로 복잡**하다.
  - 4:5 크롭은 폭 약 500px이라 저해상도 → **업스케일 후 사용**(`upscale_image`).
  - 글자 자리: 왼쪽 위 밝은 바위면(x 0~350, y 60~300) → 먹색 글씨. 여백이 넉넉하지 않아 글자를 3~4줄로 줄였다. 2번 실패하면 원본 그대로 삽입 + 본문 텍스트.
  - 계절: 초록·햇살 여름 느낌. 카드 문구에 계절 언급 없음.
- **카드 텍스트**:
  ```
  화엄사 옆 쉬는 자리
  화엄사계곡
  물소리 곁에 잠깐 앉아 쉬어 가요
  화장실은 일주문 근처에서 먼저
  ☎ 화엄사계곡 061-780-7700
  ```
  (☎ 줄은 area1 전화 박스 값. 운영 카드는 아니지만 정보 카드 관례상 상단에 두면 좋음 → **제목 바로 아래**로 올려도 됨)
- **영문 프롬프트**:
  ```
  Edit the uploaded real photograph as a 4:5 vertical crop. Keep the scene EXACTLY as-is, do NOT repaint or regenerate the background, ONLY overlay the Korean text and the watermark. Crop the left part of the photo so the sunlit pale boulders at the upper left carry the text, and place the Korean text left-aligned directly on them in dark ink #1F2A2E, no shadow, no glow, no outline. Render exactly this Korean text. Small label at the top in the accent green #2E6F5E: "화엄사 옆 쉬는 자리". Headline (largest): "화엄사계곡". Then three smaller lines: "물소리 곁에 잠깐 앉아 쉬어 가요", "화장실은 일주문 근처에서 먼저", and "☎ 화엄사계곡 061-780-7700" with the phone number in the accent green. Keep the existing Korea Tourism Organization credit mark in the lower right of the photo untouched and put the small neutral watermark "blog.naver.com/witchbloom82" at the bottom LEFT. NO panel, NO glass, NO box, NO rounded card, NO sticker or icon badge, NO emoji, NO dotted line, NO white or foggy wash, NO blur behind the text, never split the frame, do not add or remove any rock, water or leaf, do not change the light, no other text or numbers. NOT orange, NOT amber, NOT gold, natural colors, NOT a monochrome wash. Then append TAIL-A.
  ```

## 이미지 7. 피아골 단풍 · 4:5
- **삽입 위치**: `[이미지 삽입: 이미지7 피아골 단풍 · 4:5]`
- **실배경 사진**: ★미확보 — 가을 사진 필요(운영자 확보)
  - 확보한 `piagol-126265.jpg`는 **여름 초록**이라 "단풍" 카드에 쓰면 사진이 글을 배신한다. 계절 변경도 금지 → **쓰지 않는다.** (이 사진은 CTA에 배정)
  - 찾는 방법: 포토코리아에서 "피아골 단풍" · "삼홍소" · "지리산 단풍" 검색, 또는 `photo-tool.md`의 `detailImage2`로 피아골 contentid 126265의 다른 컷 확인. ★`피아골단풍펜션`(2384015)은 **Type3(변경금지)** — 절대 배경 금지.
  - 통과 조건: Type1 · 글자 없음 · 세로(4:5) 크롭에서 한쪽에 잔잔한 여백 · 붉은 단풍이 실제로 찍힌 컷.
  - 저장: `photos/piagol-autumn-<contentid>.jpg`, `CREDITS.md`에 기록. 사진이 오면 우리 워터마크 위치는 KTO 표기가 있는 모서리 반대편.
- **카드 텍스트** (☎ 상단):
  ```
  ☎ 구례여객운수 061-780-2731
  피아골 단풍
  10월 하순~11월 초가 절정
  운영 08:00~17:00 · 연중무휴
  늦어도 오후 2시까지 입장
  구례터미널 → 피아골 군내버스 · 하루 14회
  버스 탈 때 먼저 물어보세요
  "돌아오는 막차가 몇 시예요?"
  ```
  ※ 피아골행 버스 번호·시각·하차 후 도보는 area1에 값이 없어 **넣지 않음.** 17시가 입장 마감인지 하산 마감인지 값이 없으므로 `마감`이라 쓰지 않고 `운영`으로 표기.
- **영문 프롬프트**:
  ```
  Edit the uploaded real autumn photograph as a 4:5 vertical card. Keep the scene EXACTLY as-is, do NOT repaint or regenerate the background, ONLY overlay the Korean text and the watermark. Crop to 4:5 so that one vertical side is the calmest area that already exists in the photo, and place the Korean text left-aligned directly on that area, using dark ink #1F2A2E on bright areas or cream #F6F1E4 on dark areas by the brightness where each line sits, no shadow, no glow, no outline. Render exactly this Korean text. Top small line: "☎ 구례여객운수 061-780-2731" with the phone number in the accent green (#2E6F5E on light areas, #B7DCCB on dark areas). Headline (largest): "피아골 단풍". Then smaller lines: "10월 하순~11월 초가 절정", "운영 08:00~17:00 · 연중무휴", "늦어도 오후 2시까지 입장", "구례터미널 → 피아골 군내버스 · 하루 14회". A gap, then a bold smaller line "버스 탈 때 먼저 물어보세요" and under it "돌아오는 막차가 몇 시예요?" in quotation marks. "08:00~17:00" and "오후 2시" are the key numbers and use the accent green. Do not invent any bus number, time or walking minute. NO panel, NO glass, NO box, NO rounded card, NO sticker or icon badge, NO emoji, NO dotted line, NO white or foggy wash, NO blur behind the text, never split the frame, do not change the season, do not intensify the autumn colors, do not add or remove any tree, leaf or water, no other text or numbers. NOT orange, NOT amber, NOT gold, natural colors, NOT a monochrome wash. Then append TAIL-A and place the watermark in the corner opposite to any original photo credit.
  ```

## 이미지 8. 연곡사 · 4:5
- **삽입 위치**: `[이미지 삽입: 이미지8 연곡사 · 4:5]`
- **실배경 사진**: `/home/user/blogspot/.claude/posts/2026-10-20-구례/photos/yeongoksa-126363.jpg` (contentid 126363 · Type1)
  - ⚠**현판에 한자가 박혀 있어 오버레이 배경 금지.** → **글자를 얹지 않고 원본 그대로 본문에 삽입**한다. 이 카드는 **생성·편집을 하지 않는다.**
  - 비율: 원본이 3:2 가로(940×626)라 4:5로 자르면 폭 500px이 되어 화질이 떨어진다 → **원본 3:2 그대로 삽입**을 권장(삽입 포인트 이름은 그대로 유지). 이 사진 또한 우하단에 KTO 표기가 있을 수 있으니 자르지 않고 원본 보존.
  - 출처 표기 필수(공공누리 1유형): "한국관광공사 · 연곡사 (contentid 126363)".
- **카드 텍스트**: 없음 (원본 그대로).
  연곡사 정보(현금 챙기기·☎ 061-782-7412)는 이미 본문 텍스트에 있다.
- **영문 프롬프트**: 없음 — 생성하지 않는다. (텍스트를 얹으려면 한자 현판이 없는 다른 연곡사 컷을 확보해야 한다.)
- **alt**: `피아골 입구 연곡사 문루, 돌계단 위 단청 지붕과 연등`

## 이미지 9. 맛집 카드 · 4:5
- **삽입 위치**: `[이미지 삽입: 이미지9 맛집 카드 · 4:5]`
- **실배경 사진**: 없음(일반 식당은 관광사진 API에 없음, 가짜로 채우지 않음) → 크림 정보 카드. 식당 실제 사진을 확보하면 TAIL-A로 전환하고 "예시 이미지" 표기.
- **카드 텍스트** (2026년 9월 28일 검색 기준, area1과 동일):
  ```
  구례 점심 세 곳
  가격은 2026년 9월 28일 검색 기준

  구례역대합실
  지리산 흑돼지 안심돈가스 1만 원대 초반
  구례구역 바로 옆 · 열차 시각 사이에 좋아요

  평화식당
  한우 육회비빔밥 1만 원대 초중반부터
  11:00~20:00 · 목요일 휴무 · 62년 노포

  섬진강재첩국수
  재첩국수 8천 원대 · 재첩전 1만 원 안팎
  9시 반 무렵~19시 · 목요일 휴무
  ```
  하단 작은 줄: `가격·시간은 네이버지도 메뉴 탭에서 마지막으로 한 번 더`
  ※ 구례역대합실 영업시간은 area1에 값이 없어 카드에도 넣지 않았다. 평화식당 걷는 거리·재첩집 정류장 도보도 값이 없어 넣지 않음.
- **영문 프롬프트**:
  ```
  Create a 4:5 vertical restaurant information card for a Korean walking-trip blog, flat design on a plain warm cream #F4EFE3 background, no photograph. Left-aligned single column with three restaurant entries separated by thin solid hairlines. Render exactly this Korean text. Title (large): "구례 점심 세 곳", small line under it: "가격은 2026년 9월 28일 검색 기준". Entry 1: name "구례역대합실" (bold, large), lines "지리산 흑돼지 안심돈가스 1만 원대 초반", "구례구역 바로 옆 · 열차 시각 사이에 좋아요". Entry 2: name "평화식당", lines "한우 육회비빔밥 1만 원대 초중반부터", "11:00~20:00 · 목요일 휴무 · 62년 노포". Entry 3: name "섬진강재첩국수", lines "재첩국수 8천 원대 · 재첩전 1만 원 안팎", "9시 반 무렵~19시 · 목요일 휴무". Last small line: "가격·시간은 네이버지도 메뉴 탭에서 마지막으로 한 번 더". The three restaurant names, the price figures and "목요일 휴무" use the accent green #2E6F5E, everything else uses dark ink #1F2A2E. Do not add any address, phone number, opening time or price that is not written above. NO panel, NO glass, NO box, NO rounded card, NO sticker or icon badge, NO emoji, NO dotted lines, NO shadow, NO photo. Then append TAIL-B.
  ```

## 이미지 10. CTA · 16:9
- **삽입 위치**: `[이미지 삽입: 이미지10 CTA · 16:9]`
- **실배경 사진**: `/home/user/blogspot/.claude/posts/2026-10-20-구례/photos/piagol-126265.jpg` (contentid 126265 · Type1)
  - 열어서 확인: 맑은 물웅덩이·둥근 바위·짙은 초록 숲. ★우하단에 KTO 표기 있음(우리 워터마크는 좌하단). **여름 초록**이라 가을 글 마무리로는 계절이 어긋난다 → **가을 피아골 컷을 확보하면 이 자리도 교체 권장.** 카드 문구에 단풍·계절 언급은 없다.
  - 노을은 CTA 1장에만 허용되지만 **실사진에 노을이 없으므로 노을을 만들지 않는다**(장면 변경 금지). 자연광 그대로.
  - 16:9 크롭은 **아래쪽 기준(y 약 97~626)**으로 잡아 KTO 표기를 보존한다.
  - 글자 자리: 왼쪽 위 짙은 숲 → 크림 글씨.
- **카드 텍스트**:
  ```
  공감 + 이웃추가
  뚜벅이 당일치기 코스 꾸준히 올려요
  ```
  (💗는 카드 안 이모지 금지 규칙에 따라 뺐다.)
- **영문 프롬프트**:
  ```
  Edit the uploaded real photograph as a 16:9 horizontal banner. Keep the scene EXACTLY as-is, do NOT repaint or regenerate the background, ONLY overlay the Korean text and the watermark. Crop 16:9 anchored to the bottom of the photo so the original credit mark in the lower right stays inside the frame, and place the Korean text left-aligned directly on the dark forest area in the upper left in cream #F6F1E4, no shadow, no glow, no outline. Render exactly this Korean text. Line 1 (large): "공감 + 이웃추가". Line 2 (smaller): "뚜벅이 당일치기 코스 꾸준히 올려요". Only the "+" sign is in the light accent green #B7DCCB. Keep the existing Korea Tourism Organization credit mark untouched and put the small neutral watermark "blog.naver.com/witchbloom82" at the bottom LEFT. NO panel, NO glass, NO box, NO rounded card, NO sticker or icon badge, NO emoji, NO heart symbol, NO dotted line, NO white or foggy wash, NO blur behind the text, never split the frame, do not add a sunset or change the light, do not add or remove any tree, rock or water, no other text or numbers. NOT orange, NOT amber, NOT gold, natural colors, NOT a monochrome wash. Then append TAIL-A.
  ```

---

## 점검 (image-guide §7)
1. 카드만 보고 다음 행동이 나오나 — 3·4번은 출발지·승차·요금·하차 후 방향(기사님께 질문)까지. 버스 번호·도보 분은 값이 없어 넣지 않았고 그 사실은 본문에 있음.
2. 본문과 100% 일치 — 카드 숫자는 area1에서 그대로. 광주·서울행 막차 숫자와 피아골행 버스 번호·시각은 넣지 않음.
3. 세트색 1개(그린 `#2E6F5E`), 앰버 없음.
4. 패널 없음(코스 요약 카드도 얇은 실선만).
5. 사진 안 글자 0 — 연곡사(한자 현판)는 오버레이 배경에서 제외.
6. 워터마크 — KTO 표기 있는 사진은 좌하단, 나머지 우하단.
7. 삽입 포인트 10개와 이름·개수 1:1, CTA 16:9 포함.
8. 오는 길 막차 — 순천행 20:30 · 열차 20:59는 **area1 본문 상단에** 있고 이 글의 카드에는 오는 길 전용 카드가 없다(area1 삽입 포인트에 없음). 카드에 없는 값은 지어내지 않음.
9. 운영시간 카드 — 별도 카드는 없고 카드 2의 `★마감 시각` 칸과 카드 7·5에 반영(폐장/입장 마감 구분은 본문 박스).
10. 카드마다 실배경 소스 — 확보 3(5·6·10) / 원본만 1(8) / 미확보 2(1·7) / 사진 없는 정보 카드 4(2·3·4·9).
