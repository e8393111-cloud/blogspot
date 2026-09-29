# 영역2 — 합천 해인사 이미지 지시서 (발행 예정 2026-10-20)

> 기준: MASTER → 02_TRAVELBLOG_IMAGE_SPEC(2026-09-29) → 01 → 04. 본문 숫자는 area1과 글자 단위로 같다.
> 삽입 포인트는 area1의 `[이미지 삽입: …]` 9개와 개수·이름·순서 1:1이다(아래 「1:1 대응」 참조).
> 생성 경로는 GPT 이미지 편집이다. **사용법 한 줄** — ①이 사진 파일을 열어 저장(사진 카드만) → ②GPT 이미지에 업로드 → ③아래 프롬프트로 글자만 얹기.

---

## 세트색 (히어로 사진 실측에서 추출)

| 역할 | HEX | 근거 |
|---|---|---|
| 글자 잉크 (제목·본문) | **#1F2A33** | 해인사 기와의 먹색(짙은 청회색). 밝은 하늘·크림 위에서 고대비 |
| 포인트색 1개 (핵심 숫자·라벨만, 15% 이하) | **#2A6247** | 가야산 녹음의 깊은 초록. 히어로 사진 산자락에서 뽑음 |
| 정보 카드 배경 (사진 없는 카드) | **#F6F1E6** | 크림 단색. 사진이 없는 카드를 가짜 배경으로 채우지 않기 위한 평면 색 |
| 워터마크 | **#6B6F6A** (크림 위) / 크림색 #F6F1E6 (사진 위) | 작게, 눈에 덜 띄게 |

- ★앰버·골드·주황 계열 사용 안 함. 포인트색은 초록 한 가지뿐.
- 조명은 맑은 낮 자연광(원본 사진 그대로). 노을·석양 카드 없음.

## 공통 금지사항 (모든 카드에 프롬프트로도 다시 박는다)

1. 패널 전면 금지 — 글래스·반투명 유리·흰 박스·둥근 카드·정보 띠·프레임 반 가르기.
2. 그림자·외곽선·글로우·흰 안개·국소 미백 금지 (02: 그림자·외곽선 효과 금지). 가독성은 글자 위치·색·크기로 해결.
3. 아이콘·이모지·뱃지·스티커·점선·구분선 금지. 위계는 글자 크기·굵기·여백으로만.
4. 원본 사진 재창작 금지 — 하늘·산·나무·기와·건물 추가/삭제/교체, 계절·날씨 변경 금지. 글자 자리를 만들려고 배경을 고치지 않는다.
5. 우하단 한국관광공사 로고를 지우거나 가리지 않는다. 크롭도 로고가 잘리면 실패.
6. 카드 문구에 없는 숫자·글자를 모델이 지어내지 않는다. 사진 안에 간판·지명 글자 새로 만들지 않는다.
7. 서체: 굵고 탄탄한 고딕(Pretendard Bold / Noto Sans KR Bold 계열). 왼쪽 정렬, 좌우 안전여백 8%.
8. 축소 검수: 카드 폭 360px(대표는 180px)에서 제목·핵심값이 확대 없이 읽혀야 한다.

## 사진 배분 요약

- **해인사 사진(126175, Type1)은 카드 1(썸네일) 한 장에만 쓴다.** 카드 2~9는 사진 없는 크림 정보 카드.
- 이유: 원본이 940×627 가로 사진이고 우하단에 관광공사 로고(x≈735~920, y≈555~605)가 있다. 로고를 자르지 않고 4:5·3:4로 크롭하면 오른쪽 폭 약 500px, 하늘은 맨 위 100px 남짓이라 글자 자리가 안 나온다. 16:9는 로고가 잘려 불가. 1:1(627×627)만 로고를 포함하면서 왼쪽 위 하늘이 남는다.
- 사진 위에 글자를 얹고 아래는 크림으로 잇는 방식은 프레임 반 가르기라 쓰지 않는다.
- Type3 5종(소리길·성보박물관·가야산국립공원·뚝배기가든·황매산)은 어느 카드에도 쓰지 않는다.

---

## 이미지 1. 썸네일 — 해인사 전경 · 1:1

- **삽입 위치**: `[이미지 삽입: 1. 썸네일 — 해인사 전경]` (3초요약 박스 다음, 첫 소제목 앞)
- **실배경 사진**: `/home/user/blogspot/.claude/posts/2026-10-20-합천/photos/haeinsa-126175.jpg` (contentid 126175 · Type1 · 원저작자 한국관광공사)
- **사전 크롭(GPT에 올리기 전에 편집 프로그램에서 직접)**: 원본 940×627에서 **x=313~940, y=0~627 (627×627 정사각)**. 우하단 관광공사 로고가 크롭 안에 온전히 남는다. 크롭은 모델에게 맡기지 않는다. 출력은 1080×1080.
- **카드 텍스트**:
  - 제목 1줄: `입장료 0원` (`0원`만 포인트색 #2A6247)
  - 제목 2줄: `해인사 반나절`
  - 보조 1줄: `합천 · 대구서부에서 직통버스`
  - 워터마크(좌하단): `blog.naver.com/witchbloom82`
- **배치 근거**: 크롭 왼쪽 위(하늘·구름)에 글자. 제목 글자 높이는 폭의 약 9~10%, 보조문구는 제목의 약 35%. 오른쪽 기와지붕·산은 가리지 않는다. 워터마크는 로고와 반대쪽인 좌하단(크롭 왼쪽 아래 기와 위)에 크림색으로 작게.
- **영문 프롬프트**:
```
Edit the uploaded real photograph; keep the scene EXACTLY as-is, do NOT repaint or regenerate the background; ONLY overlay the Korean text (and watermark). The uploaded image is already cropped to a 1:1 square; keep that framing and output 1:1 at 1080x1080. Do not crop, zoom, extend, blur, brighten locally, or change the sky, clouds, mountains, roofs, trees, season, weather or colors in any way. Keep the Korea Tourism Organization logo at the bottom-right fully visible and untouched, and do not place any text near it.
Overlay text in the natural bright sky and cloud area at the upper-left, left-aligned on one shared left baseline, with about 8% safe margin from the left and top edges. Use a bold, sturdy Korean sans-serif (Pretendard Bold or Noto Sans KR Bold), deep ink color #1F2A33, no shadow, no outline, no glow.
Title, two lines, letter height about 9-10% of the image width, tight but readable line spacing:
Line 1: "입장료 0원"  (render the characters "입장료" in #1F2A33 and "0원" in deep green #2A6247)
Line 2: "해인사 반나절"
Below the title, with clear spacing, ONE smaller subtitle line at about 35% of the title size, in #1F2A33, medium weight:
"합천 · 대구서부에서 직통버스"
Render the Korean characters and the numeral 0 exactly as written; do not invent, alter or add any other text or numbers.
Small watermark at the bottom-left corner, about 2.2% of image width, cream #F6F1E6, regular weight, no shadow: "blog.naver.com/witchbloom82".
Accent color is ONLY the deep green #2A6247 on "0원" (under 15% of the design). NOT orange, NOT amber, NOT gold; natural daylight colors of the original photo stay unchanged.
NO panel, NO glass, NO box, NO rounded card, NO banner strip, NO badge, NO icon, NO emoji, NO sticker, NO dotted or divider line, NO drop shadow, NO outline, NO glow, NO white haze or fog over the photo, NO frame split. The photograph stays crisp and full-bleed to the edges. The title must stay legible when the image is shrunk to 180px wide.
```
- **대체텍스트(alt)**: 가야산 자락 해인사 기와지붕과 푸른 하늘 위에 '입장료 0원, 해인사 반나절'이라고 적은 대표 이미지

---

## 이미지 2. 가는 길 카드 — 대구서부 → 해인사 · 4:5

- **삽입 위치**: `[이미지 삽입: 2. 가는 길 카드 — 대구서부 → 해인사]` (첫 소제목 「해인사, 대구에서 차 없이 당일치기가 되나요?」 섹션 끝, 06:40 첫차 안내 줄 다음)
- **실배경 사진**: 사진 없음 — 정보 카드 (크림 단색 #F6F1E6)
- **카드 텍스트**:
  - 제목: `대구서부 → 해인사`
  - 핵심값(가장 크게): `직통 약 1시간 30분`
  - 요금: `편도 8,900원`
  - 배차: `첫차 06:40 · 하루 14회`
  - 조건(작게): `시간표 사이트 기준`
  - 워터마크(우하단): `blog.naver.com/witchbloom82`
- **영문 프롬프트**:
```
Create a flat, clean information card at 4:5 vertical ratio (1080x1350). This card has NO photograph. The background is one solid flat cream color #F6F1E6 filling the whole frame edge to edge (no gradient, no texture, no vignette, no inner card, no panel).
Typography only, left-aligned on one shared left baseline, about 8% safe margin on all sides. Bold sturdy Korean sans-serif (Pretendard Bold or Noto Sans KR Bold). Main ink color #1F2A33. The single accent color is deep green #2A6247, used ONLY on the key numbers and the small label line (under 15% of the design). NOT orange, NOT amber, NOT gold.
Vertical hierarchy from the upper-left, generous spacing between groups, hierarchy created only by size, weight and whitespace:
1) Title, medium-large (letter height about 6% of image width): "대구서부 → 해인사"
2) Hero value, the largest text on the card (letter height about 9% of image width), split over two lines if needed: "직통 약" / "1시간 30분" — numerals in deep green #2A6247
3) Two supporting lines at about 55% of the title size, each with at most two numbers:
   "편도 8,900원"
   "첫차 06:40 · 하루 14회"
4) One small note line at about 40% of the title size, #1F2A33 at regular weight: "시간표 사이트 기준"
Render every Korean character and every number EXACTLY as written above; do not invent, change, translate or add any text, number, bus number or time.
Small watermark at the bottom-right corner, about 2.2% of image width, gray #6B6F6A: "blog.naver.com/witchbloom82".
NO photograph, NO panel, NO glass, NO box, NO rounded card, NO banner strip, NO badge, NO icon, NO pictogram, NO emoji, NO sticker, NO dotted or divider line, NO drop shadow, NO outline, NO glow, NO white haze. Everything must be legible at 360px wide.
```
- **대체텍스트(alt)**: 대구서부에서 해인사까지 직통 약 1시간 30분, 편도 8,900원, 첫차 06:40 안내 카드

---

## 이미지 3. 귀갓길 막차 카드 · 4:5

- **삽입 위치**: `[이미지 삽입: 3. 귀갓길 막차 카드]` (두 번째 소제목 「해인사에서 대구로 돌아가는 막차는 몇 시인가요?」 섹션 끝, 승차 위치·요금·반나절 라벨 줄 다음)
- **실배경 사진**: 사진 없음 — 정보 카드 (크림 단색 #F6F1E6)
- **카드 텍스트**:
  - 제목: `해인사발 대구서부행`
  - 핵심값(가장 크게): `막차 19:20`
  - 방향 주의: `20:00은 대구서부에서 오는 막차예요`
  - 권장: `오후 3~4시대 출발이 마음 편해요`
  - 승차: `승차 해인사시외버스터미널`
  - 조건(작게): `시간표 사이트 기준`
  - 워터마크(우하단): `blog.naver.com/witchbloom82`
- **영문 프롬프트**:
```
Create a flat, clean information card at 4:5 vertical ratio (1080x1350). This card has NO photograph. The background is one solid flat cream color #F6F1E6 filling the whole frame edge to edge (no gradient, no texture, no vignette, no inner card, no panel).
Typography only, left-aligned on one shared left baseline, about 8% safe margin on all sides. Bold sturdy Korean sans-serif (Pretendard Bold or Noto Sans KR Bold). Main ink color #1F2A33. The single accent color is deep green #2A6247, used ONLY on the key number and the label (under 15% of the design). NOT orange, NOT amber, NOT gold.
Hierarchy from the upper-left, generous spacing, created only by size, weight and whitespace:
1) Title, medium-large (letter height about 6% of image width): "해인사발 대구서부행"
2) Hero value, the largest and boldest text on the card (letter height about 13% of image width), on one line: "막차 19:20" — the numerals "19:20" in deep green #2A6247, the word "막차" in #1F2A33
3) A direction warning line at about 55% of the title size, bold, #1F2A33: "20:00은 대구서부에서 오는 막차예요"
4) Two supporting lines at about 50% of the title size, regular weight:
   "오후 3~4시대 출발이 마음 편해요"
   "승차 해인사시외버스터미널"
5) One small note line at about 40% of the title size: "시간표 사이트 기준"
Render every Korean character and every number EXACTLY as written; do not invent, change or add any time, number, price or text. The direction must stay exactly "해인사발 대구서부행 19:20" and the 20:00 line must stay as written (20:00 is the last bus coming from Daegu Seobu, not the return bus).
Small watermark at the bottom-right corner, about 2.2% of image width, gray #6B6F6A: "blog.naver.com/witchbloom82".
NO photograph, NO panel, NO glass, NO box, NO rounded card, NO banner strip, NO badge, NO icon, NO pictogram, NO emoji, NO sticker, NO dotted or divider line, NO drop shadow, NO outline, NO glow, NO white haze. Everything must be legible at 360px wide.
```
- **대체텍스트(alt)**: 해인사에서 대구서부로 돌아가는 막차는 19시 20분, 20시 00분은 대구서부에서 오는 막차라는 안내 카드

---

## 이미지 4. 하루 총비용 카드 · 3:4 (숫자·요금 카드, 02의 3:4 허용 조건)

- **삽입 위치**: `[이미지 삽입: 4. 하루 총비용 카드]` (네 번째 소제목 「해인사 입장료와 하루 총비용은 얼마인가요?」 섹션 끝, 예전 후기 7,000원 안내 문단 다음)
- **실배경 사진**: 사진 없음 — 정보 카드 (크림 단색 #F6F1E6)
- **카드 텍스트**:
  - 제목: `하루 총비용`
  - 핵심값(가장 크게): `3만 3천 원 안팎`
  - 입장료: `해인사 0원 · 성보박물관 0원`
  - 교통: `교통 대구서부 왕복 17,800원`
  - 점심: `점심 산채비빔밥 15,000원대`
  - 조건(작게): `점심은 2026년 2월 후기 기준 · 대구 지하철 요금 제외`
  - 워터마크(우하단): `blog.naver.com/witchbloom82`
- **영문 프롬프트**:
```
Create a flat, clean information card at 3:4 vertical ratio (1080x1440). This card has NO photograph. The background is one solid flat cream color #F6F1E6 filling the whole frame edge to edge (no gradient, no texture, no vignette, no inner card, no panel).
Typography only, left-aligned on one shared left baseline, about 8% safe margin on all sides. Bold sturdy Korean sans-serif (Pretendard Bold or Noto Sans KR Bold). Main ink color #1F2A33. The single accent color is deep green #2A6247, used ONLY on the hero number and the labels (under 15% of the design). NOT orange, NOT amber, NOT gold.
Hierarchy from the upper-left, generous spacing, created only by size, weight and whitespace:
1) Title, medium-large (letter height about 6% of image width): "하루 총비용"
2) Hero value, the largest text on the card (letter height about 10% of image width), on one line or two: "3만 3천 원 안팎" — numerals and "원" in deep green #2A6247
3) Three supporting lines at about 55% of the title size, one per line, each with at most two numbers:
   "해인사 0원 · 성보박물관 0원"
   "교통 대구서부 왕복 17,800원"
   "점심 산채비빔밥 15,000원대"
4) One small note line at about 38% of the title size, regular weight, may wrap to two lines: "점심은 2026년 2월 후기 기준 · 대구 지하철 요금 제외"
Render every Korean character and every number EXACTLY as written; do not invent, change or add any price or text.
Small watermark at the bottom-right corner, about 2.2% of image width, gray #6B6F6A: "blog.naver.com/witchbloom82".
NO photograph, NO panel, NO glass, NO box, NO rounded card, NO banner strip, NO badge, NO icon, NO pictogram, NO emoji, NO coin or money illustration, NO sticker, NO dotted or divider line, NO drop shadow, NO outline, NO glow, NO white haze. Everything must be legible at 360px wide.
```
- **대체텍스트(alt)**: 해인사 하루 총비용 3만 3천 원 안팎, 입장료 0원, 대구서부 왕복 17,800원, 산채비빔밥 15,000원대

---

## 이미지 5. 마감 시각 카드 — 본사 · 박물관 · 4:5

- **삽입 위치**: `[이미지 삽입: 5. 마감 시각 카드 — 본사 · 박물관]` (다섯 번째 소제목 「해인사 운영시간과 성보박물관 휴게시간은 언제인가요?」 섹션 끝, 공식 링크 버튼 2개 다음)
- **실배경 사진**: 사진 없음 — 정보 카드 (크림 단색 #F6F1E6). 성보박물관 사진(2559372)은 Type3라 얹을 수 없다.
- **카드 텍스트**:
  - 제목: `본사는 연중무휴, 박물관은 월요일 휴관`
  - 블록 1 라벨: `해인사 본사`
    - `대략 09:00~17:30 · 연중무휴`
    - `날마다 조금씩 달라질 수 있어요`
  - 블록 2 라벨: `성보박물관 (4~10월)`
    - `운영 10:00~17:00 · 월요일 휴관`
    - `휴게 11:00~12:30`
    - `입장 마감 16:30`
  - 워터마크(우하단): `blog.naver.com/witchbloom82`
- ★"17:30까지"로 단정하지 않는다: 카드에 `대략`과 `날마다 조금씩 달라질 수 있어요`를 반드시 함께 넣는다.
- **영문 프롬프트**:
```
Create a flat, clean information card at 4:5 vertical ratio (1080x1350). This card has NO photograph. The background is one solid flat cream color #F6F1E6 filling the whole frame edge to edge (no gradient, no texture, no vignette, no inner card, no panel).
Typography only, left-aligned on one shared left baseline, about 8% safe margin on all sides. Bold sturdy Korean sans-serif (Pretendard Bold or Noto Sans KR Bold). Main ink color #1F2A33. The single accent color is deep green #2A6247, used ONLY on the two block labels and the key times "11:00~12:30" and "16:30" (under 15% of the design). NOT orange, NOT amber, NOT gold.
Hierarchy from the upper-left, generous spacing between the two groups, created only by size, weight and whitespace (no lines, no boxes):
1) Title in two lines, bold, letter height about 6.5% of image width: "본사는 연중무휴," / "박물관은 월요일 휴관"
2) Group A label in deep green #2A6247, about 50% of the title size: "해인사 본사"
   Under it, two lines at about 55% of the title size, #1F2A33:
   "대략 09:00~17:30 · 연중무휴"
   "날마다 조금씩 달라질 수 있어요"
3) Group B label in deep green #2A6247, about 50% of the title size: "성보박물관 (4~10월)"
   Under it, three lines at about 55% of the title size, #1F2A33, bold for the second and third lines:
   "운영 10:00~17:00 · 월요일 휴관"
   "휴게 11:00~12:30"
   "입장 마감 16:30"
Render every Korean character and every number EXACTLY as written; do not invent, change, merge or add any time. Never write "17:30까지" without the word "대략"; keep the line "날마다 조금씩 달라질 수 있어요" exactly.
Small watermark at the bottom-right corner, about 2.2% of image width, gray #6B6F6A: "blog.naver.com/witchbloom82".
NO photograph, NO panel, NO glass, NO box, NO rounded card, NO banner strip, NO badge, NO icon, NO pictogram, NO emoji, NO clock illustration, NO sticker, NO dotted or divider line, NO drop shadow, NO outline, NO glow, NO white haze. Everything must be legible at 360px wide.
```
- **대체텍스트(alt)**: 해인사 본사는 대략 09:00~17:30 연중무휴, 성보박물관은 10:00~17:00 휴게 11:00~12:30 입장 마감 16:30 월요일 휴관 안내 카드

---

## 이미지 6. 반나절 코스 요약 카드 · 3:4

- **삽입 위치**: `[이미지 삽입: 6. 반나절 코스 요약 카드]` (여섯 번째 소제목 「해인사 반나절 코스, 어떤 순서로 걸으면 되나요?」 섹션 끝, 소리길 계곡 카드 바로 앞)
- **실배경 사진**: 사진 없음 — 정보 카드 (크림 단색 #F6F1E6). 작은 사진 4장도 쓰지 않는다(쓸 수 있는 Type1이 1장뿐이고 이미 카드 1에 사용).
- **이동수단 검증(area1 대조)**: 지점 사이 이동수단은 area1이 명시한 것만 넣는다. 터미널→경내는 "절까지 오르막을 조금 걸어요"라 `오르막 도보`만 적고 분 단위는 쓰지 않는다(정류장→일주문 도보 분은 area1에도 없음). 경내·박물관·식당·소리길 사이의 도보 분/거리는 area1에 없으므로 쓰지 않는다. 마지막 귀가는 `버스`.
- **카드 텍스트**:
  - 제목: `해인사 반나절 코스`
  - 1: `08:10 해인사시외버스터미널 도착`
    - 이동: `오르막 도보`
  - 2: `09:00 경내 · 장경판전`
  - 3: `10:00~11:00 성보박물관`
  - 4: `11:00~12:30 점심`
  - 5: `12:30~ 소리길 산책`
  - 6: `오후 3~4시대 버스로 귀가`
  - 하단 3칸(가로 3열, 라벨은 포인트색·작게, 값은 잉크색):
    - `전체 소요` / `이동 왕복 약 3시간 · 체류 4~5시간`
    - `1인 비용` / `입장료 0원 · 교통 왕복 17,800원`
    - `★ 마감 시각` / `성보박물관 휴게 11:00~12:30 · 입장 마감 16:30` / `해인사발 막차 19:20`
  - 워터마크(우하단): `blog.naver.com/witchbloom82`
- ★마감 시각 칸은 필수이며 박물관과 막차 두 값을 모두 넣는다. 비용 칸의 `0원`은 전 연령 공통이라 경로 표기를 붙이지 않는다.
- **영문 프롬프트**:
```
Create a flat, clean course summary card at 3:4 vertical ratio (1080x1440). This card has NO photograph. The background is one solid flat cream color #F6F1E6 filling the whole frame edge to edge (no gradient, no texture, no vignette, no inner card, no panel).
Typography only, left-aligned on one shared left baseline, about 8% safe margin on all sides. Bold sturdy Korean sans-serif (Pretendard Bold or Noto Sans KR Bold). Main ink color #1F2A33. The single accent color is deep green #2A6247, used ONLY on the step numbers, the times and the three small labels at the bottom (under 15% of the design). NOT orange, NOT amber, NOT gold.
Upper part: title "해인사 반나절 코스" in bold, letter height about 6.5% of image width.
Middle part: a vertical list of six numbered steps, evenly spaced, each step on its own line: a plain numeral "1" to "6" in deep green #2A6247 followed by the text in #1F2A33 (plain numerals only, NOT in circles, NOT in badges, NO connecting lines). Step text at about 55% of the title size, times in bold green. Render exactly:
"1  08:10 해인사시외버스터미널 도착"
   (directly under step 1, one smaller line at 40% of the title size, indented to align with the step text: "오르막 도보")
"2  09:00 경내 · 장경판전"
"3  10:00~11:00 성보박물관"
"4  11:00~12:30 점심"
"5  12:30~ 소리길 산책"
"6  오후 3~4시대 버스로 귀가"
Lower part: three short text groups arranged in ONE row of three columns with clear gaps (no boxes, no lines). Each group has a small label in deep green #2A6247 (about 38% of the title size) and its value below in #1F2A33 (about 42% of the title size, may wrap to 2-3 lines):
Column 1 label "전체 소요", value "이동 왕복 약 3시간 · 체류 4~5시간"
Column 2 label "1인 비용", value "입장료 0원 · 교통 왕복 17,800원"
Column 3 label "★ 마감 시각", value on two lines "성보박물관 휴게 11:00~12:30 · 입장 마감 16:30" and "해인사발 막차 19:20" (this third column is emphasized in bold)
Render every Korean character and every number EXACTLY as written; do not invent, change or add any time, price, distance, walking minutes, bus number or text. Do not add walking times between steps.
Small watermark at the bottom-right corner, about 2.2% of image width, gray #6B6F6A: "blog.naver.com/witchbloom82".
NO photograph, NO panel, NO glass, NO box, NO rounded card, NO banner strip, NO badge, NO circle, NO icon, NO pictogram, NO map, NO emoji, NO sticker, NO dotted or divider line, NO drop shadow, NO outline, NO glow, NO white haze. Everything must be legible at 360px wide.
```
- **대체텍스트(alt)**: 해인사 반나절 코스 요약, 08:10 도착부터 경내, 성보박물관, 점심, 소리길, 오후 귀가 순서와 성보박물관 휴게 11:00~12:30, 해인사발 막차 19:20

---

## 이미지 7. 소리길 계곡 · 4:5

- **삽입 위치**: `[이미지 삽입: 7. 소리길 계곡]` (여섯 번째 소제목 섹션, 코스 요약 카드 바로 다음 — 코스 6번 소리길 산책 설명과 짝)
- **실배경 사진**: 사진 없음 — 정보 카드 (크림 단색 #F6F1E6). 소리길 사진(2414679)은 Type3(변경금지)라 글자를 얹을 수 없고, 이 글에서 내려받지도 않았다.
- **카드 텍스트**:
  - 제목: `가야산 소리길`
  - 핵심값(가장 크게): `상시 개방`
  - `연중무휴`
  - `홍류동 계곡을 따라 걷는 수평 탐방로`
  - `시작점에서 30분만 걸어도 충분해요`
  - 워터마크(우하단): `blog.naver.com/witchbloom82`
- ★길이(6km/7.3km)는 자료가 상충해 쓰지 않는다.
- **영문 프롬프트**:
```
Create a flat, clean information card at 4:5 vertical ratio (1080x1350). This card has NO photograph. The background is one solid flat cream color #F6F1E6 filling the whole frame edge to edge (no gradient, no texture, no vignette, no inner card, no panel).
Typography only, left-aligned on one shared left baseline, about 8% safe margin on all sides. Bold sturdy Korean sans-serif (Pretendard Bold or Noto Sans KR Bold). Main ink color #1F2A33. The single accent color is deep green #2A6247, used ONLY on the hero value (under 15% of the design). NOT orange, NOT amber, NOT gold.
Hierarchy from the upper-left, generous spacing, created only by size, weight and whitespace:
1) Title, medium-large (letter height about 6% of image width): "가야산 소리길"
2) Hero value, the largest text on the card (letter height about 12% of image width): "상시 개방" in deep green #2A6247
3) One line right below, about 55% of the title size, bold, #1F2A33: "연중무휴"
4) Two supporting lines at about 50% of the title size, regular weight, #1F2A33:
   "홍류동 계곡을 따라 걷는 수평 탐방로"
   "시작점에서 30분만 걸어도 충분해요"
Render every Korean character and every number EXACTLY as written; do not invent, change or add any distance (no km), time or text.
Small watermark at the bottom-right corner, about 2.2% of image width, gray #6B6F6A: "blog.naver.com/witchbloom82".
NO photograph, NO landscape illustration, NO panel, NO glass, NO box, NO rounded card, NO banner strip, NO badge, NO icon, NO pictogram, NO emoji, NO sticker, NO dotted or divider line, NO drop shadow, NO outline, NO glow, NO white haze. Everything must be legible at 360px wide.
```
- **대체텍스트(alt)**: 가야산 소리길은 상시 개방 연중무휴, 홍류동 계곡을 따라 걷는 탐방로이며 30분만 걸어도 충분하다는 안내 카드

---

## 이미지 8. 산채 식사 · 4:5

- **삽입 위치**: `[이미지 삽입: 8. 산채 식사]` (일곱 번째 소제목 「해인사 앞 식당은 어디서 뭘 먹나요?」 섹션 끝, 두 식당 목록 다음)
- **실배경 사진**: 사진 없음 — 정보 카드 (크림 단색 #F6F1E6). 뚝배기가든식당 사진(1914924)은 Type3라 얹을 수 없다.
- **카드 텍스트**:
  - 제목: `해인사 앞 식당 두 곳`
  - 블록 1 라벨: `삼성식당`
    - `산채비빔밥 15,000원대`
    - `11:00~19:00 · 연중무휴 · 카드 가능`
  - 블록 2 라벨: `뚝배기가든식당`
    - `08:00~20:00 · 연중무휴`
    - `모든 카드 가능 · 아침도 가능`
  - 조건(작게): `삼성식당 가격은 2026년 2월 후기 기준`
  - 워터마크(우하단): `blog.naver.com/witchbloom82`
- ★뚝배기가든 가격은 area1에 없어 카드에도 쓰지 않는다. 음식 일러스트·사진도 넣지 않는다.
- **영문 프롬프트**:
```
Create a flat, clean information card at 4:5 vertical ratio (1080x1350). This card has NO photograph. The background is one solid flat cream color #F6F1E6 filling the whole frame edge to edge (no gradient, no texture, no vignette, no inner card, no panel).
Typography only, left-aligned on one shared left baseline, about 8% safe margin on all sides. Bold sturdy Korean sans-serif (Pretendard Bold or Noto Sans KR Bold). Main ink color #1F2A33. The single accent color is deep green #2A6247, used ONLY on the two restaurant names and the price (under 15% of the design). NOT orange, NOT amber, NOT gold.
Hierarchy from the upper-left, generous spacing between the two groups, created only by size, weight and whitespace (no lines, no boxes):
1) Title, bold, letter height about 6.5% of image width: "해인사 앞 식당 두 곳"
2) Group A name in deep green #2A6247, about 60% of the title size, bold: "삼성식당"
   Under it, two lines at about 50% of the title size, #1F2A33:
   "산채비빔밥 15,000원대"   (numerals in deep green #2A6247)
   "11:00~19:00 · 연중무휴 · 카드 가능"
3) Group B name in deep green #2A6247, about 60% of the title size, bold: "뚝배기가든식당"
   Under it, two lines at about 50% of the title size, #1F2A33:
   "08:00~20:00 · 연중무휴"
   "모든 카드 가능 · 아침도 가능"
4) One small note line at about 38% of the title size, regular weight: "삼성식당 가격은 2026년 2월 후기 기준"
Render every Korean character and every number EXACTLY as written; do not invent, change or add any price, menu or text. The second restaurant has NO price on this card.
Small watermark at the bottom-right corner, about 2.2% of image width, gray #6B6F6A: "blog.naver.com/witchbloom82".
NO photograph, NO food illustration, NO panel, NO glass, NO box, NO rounded card, NO banner strip, NO badge, NO icon, NO pictogram, NO emoji, NO sticker, NO dotted or divider line, NO drop shadow, NO outline, NO glow, NO white haze. Everything must be legible at 360px wide.
```
- **대체텍스트(alt)**: 해인사 앞 삼성식당 산채비빔밥 15,000원대 11:00~19:00, 뚝배기가든식당 08:00~20:00, 두 곳 모두 연중무휴 안내 카드

---

## 이미지 9. 쉬는 자리 카드 · 4:5

- **삽입 위치**: `[이미지 삽입: 9. 쉬는 자리 카드]` (여덟 번째 소제목 「해인사에서 쉬는 자리와 편의시설은 어디 있나요?」 섹션 끝)
- **실배경 사진**: 사진 없음 — 정보 카드 (크림 단색 #F6F1E6)
- **카드 텍스트**:
  - 제목: `해인사에서 쉬는 자리`
  - 라벨: `쉴 수 있는 곳`
    - `상가 식당`
    - `성보박물관 (11:00~12:30 휴게 시간 제외)`
    - `소리길 계곡변`
  - 라벨: `알아 두세요`
    - `경내는 오르막이 있어요`
    - `성보박물관은 유모차가 안 돼요`
    - `화장실은 도착해서 터미널 직원에게 물어요`
  - 워터마크(우하단): `blog.naver.com/witchbloom82`
- ★화장실 위치·병원·약국은 area1이 못 구했다고 밝힌 값이라 카드에 위치를 지어 넣지 않는다.
- **영문 프롬프트**:
```
Create a flat, clean information card at 4:5 vertical ratio (1080x1350). This card has NO photograph. The background is one solid flat cream color #F6F1E6 filling the whole frame edge to edge (no gradient, no texture, no vignette, no inner card, no panel).
Typography only, left-aligned on one shared left baseline, about 8% safe margin on all sides. Bold sturdy Korean sans-serif (Pretendard Bold or Noto Sans KR Bold). Main ink color #1F2A33. The single accent color is deep green #2A6247, used ONLY on the two small group labels and the time "11:00~12:30" (under 15% of the design). NOT orange, NOT amber, NOT gold.
Hierarchy from the upper-left, generous spacing between the two groups, created only by size, weight and whitespace (no lines, no boxes, no bullets, no icons):
1) Title, bold, letter height about 6.5% of image width: "해인사에서 쉬는 자리"
2) Group A label in deep green #2A6247, about 45% of the title size: "쉴 수 있는 곳"
   Under it, three lines at about 58% of the title size, #1F2A33:
   "상가 식당"
   "성보박물관 (11:00~12:30 휴게 시간 제외)"
   "소리길 계곡변"
3) Group B label in deep green #2A6247, about 45% of the title size: "알아 두세요"
   Under it, three lines at about 50% of the title size, #1F2A33, regular weight:
   "경내는 오르막이 있어요"
   "성보박물관은 유모차가 안 돼요"
   "화장실은 도착해서 터미널 직원에게 물어요"
Render every Korean character and every number EXACTLY as written; do not invent, change or add any facility, location, distance, time or text. Do not draw a toilet sign, bench, map or any pictogram.
Small watermark at the bottom-right corner, about 2.2% of image width, gray #6B6F6A: "blog.naver.com/witchbloom82".
NO photograph, NO panel, NO glass, NO box, NO rounded card, NO banner strip, NO badge, NO icon, NO pictogram, NO emoji, NO sticker, NO dotted or divider line, NO drop shadow, NO outline, NO glow, NO white haze. Everything must be legible at 360px wide.
```
- **대체텍스트(alt)**: 해인사에서 쉬는 자리는 상가 식당, 성보박물관 실내, 소리길 계곡변이며 경내 오르막과 성보박물관 유모차 불가 안내 카드

---

## area1 ↔ area2 1:1 대응표

| area1 줄 | area1 이름 | area2 | 비율 | 사진 |
|---|---|---|---|---|
| 43 | 1. 썸네일 — 해인사 전경 | 이미지 1 | 1:1 | 해인사 126175 (Type1, 크롭) |
| 63 | 2. 가는 길 카드 — 대구서부 → 해인사 | 이미지 2 | 4:5 | 없음 |
| 90 | 3. 귀갓길 막차 카드 | 이미지 3 | 4:5 | 없음 |
| 126 | 4. 하루 총비용 카드 | 이미지 4 | 3:4 | 없음 |
| 155 | 5. 마감 시각 카드 — 본사 · 박물관 | 이미지 5 | 4:5 | 없음 |
| 194 | 6. 반나절 코스 요약 카드 | 이미지 6 | 3:4 | 없음 |
| 195 | 7. 소리길 계곡 | 이미지 7 | 4:5 | 없음 |
| 215 | 8. 산채 식사 | 이미지 8 | 4:5 | 없음 |
| 227 | 9. 쉬는 자리 카드 | 이미지 9 | 4:5 | 없음 |

- CTA 이미지는 없다. area1에는 CTA 이미지 삽입 포인트가 없고 `[메인 CTA]` 텍스트만 있다. 해인사 사진을 16:9로 자르면 관광공사 로고가 잘려 만들 수 없다. 01 규격의 텍스트 CTA(`공감 💗 + 이웃추가` / `뚜벅이 당일치기 코스 꾸준히 올려요`)를 본문 맨 마지막에 그대로 둔다.
- 저작권 표기: 본문 또는 카드 1 캡션에 `사진: 한국관광공사 (공공누리 1유형)`을 적는다. `photos/CREDITS.md`에 contentid 126175 기록됨.

## 생성 후 자체검수 (04 이미지 항목)

1. 카드 1: 관광공사 로고가 우하단에 온전히 남았나 / 하늘·산·기와가 원본과 같나 / 폭 180px에서 `입장료 0원` 읽히나. 하나라도 NO면 해당 요소만 재생성.
2. 카드 2~9: 글자가 area1과 글자 단위로 같나(특히 19:20 · 20:00 방향, 0원, 8,900원, 17,800원, 16:30, 11:00~12:30) / 폭 360px에서 제목·핵심값이 읽히나 / 아이콘·박스·그림자·주황 기미가 없나.
3. 원본 왜곡(카드 1의 배경 변형)이 같은 사이클에서 2회 나오면 재생성을 멈추고 크롭한 원본 그대로 삽입하고, 제목 문구는 본문 텍스트로 옮긴다(02 fallback). 글자 오탈자·크기 실패는 배경 왜곡 횟수에 넣지 않는다.
4. 골든샘플(강릉 대표) 파일은 이 작업에서 직접 열어 보지 못했다. 생성 시 입력2로 넣으려면 강릉 대표이미지를 열어 글자 위계만 참고하도록 지시하고, 그 사진의 바다·사람·계절은 옮기지 않는다.
