# 영역2 — 이미지 제작 지시서 · 창녕 우포늪 (2026-10-15 발행 예정)

기준 : `.claude/blog-image-project-instructions-v2.md` (**V2가 최우선**)
사진 대장 : `photos/CREDITS.md` — 저작권 유형은 **사진 단위**로 판정했다

---

## 0. 이 글의 공통 규격

**포인트색 : 늪 그린 `#3F6B52`** (단 하나)
　근거 — 확인한 히어로 사진(`upo-3590836`)의 수생식물 군락에서 뽑았다. 하늘·수면은 청회색이고 난색이 전혀 없다.
　★앰버·골드·주황 계열 **아님**. 직전 글(홍천 `#3E6374`)과도 다르다.
　포인트색은 **핵심 숫자 · 일부 제목 · 얇은 구분선**에만 쓴다. 사진 색조는 건드리지 않는다.

**글자색** : 밝은 하늘·수면 위에는 잉크 `#182229` / 어두운 초록 위에는 크림 `#F4F1EA`

**워터마크** : `blog.naver.com/witchbloom82` · **우하단** · 작고 낮은 대비
　원본에 출처 표기가 이미 있으면 그것을 가리지 않는다(겹치면 좌하단으로 옮긴다)

**제작 도구** : GPT 이미지 편집 기능 (V2 §1)

### ★모든 카드 프롬프트에 그대로 들어가는 금지 블록

```
Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, hill, water, plant, boat, building, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT exaggerate mist, foliage or colour.
NO glass panel, NO translucent box, NO white or cream information plate,
NO milky gradient, NO local whitening, NO blur/fog/glow behind the letters,
NO top or bottom information band, NO rounded sticker, NO speech bubble.
NO text drop shadow, NO outline, NO glow, NO 3D lettering, NO gradient on letters.
NO icon badges, NO check marks, NO leaf or curl ornaments.
Keep the photograph crisp and full-bleed. Place the Korean text DIRECTLY on the
naturally bright, empty part of the photo, using weight and spacing for hierarchy.
Render every Korean character and every digit EXACTLY as written, with no substitution.
```

### ★사용법 (한 줄)
① 아래 사진 URL을 브라우저로 열어 **원본을 저장** → ② GPT에 업로드 → ③ 그 카드의 프롬프트로 **글자만 얹기**

---

## ★제작 계획 한눈에 (영역1 삽입 포인트 9개와 1:1)

| 영역1 슬롯 | 처리 | 배경 사진 | 유형 |
|---|---|---|---|
| ① 창녕시외버스터미널 외관 | **카드 미제작 (V2 §8 fallback)** | 확보 실패 | — |
| ② 우포늪 코스요약 타임라인 카드 | 정보카드 A · 4:5 | 우포늪 `3590836` | Type1 ✅ |
| ③ 우포늪 탐방로 데크길·대대제방 전망 | 정보카드 B · 4:5 | 우포늪 `3590651` | Type1 ✅ |
| ④ 우포늪생태관 외관 | 정보카드 C · 4:5 | 생태관 `3537911` | Type1 ✅ |
| ⑤ 우포늪체험장 쪽배 체험 모습 | 정보카드 D · 4:5 | 체험장 `3537892` | Type1 ✅ |
| ⑥ 우포늪 전망대·주매정 쉼터 | 정보카드 E · 4:5 | 우포늪 `3590652` | Type1 ✅ |
| ⑦ 삼오식당 수구레국밥 상차림 | **원본 그대로 삽입** | 삼오식당 `2853821` | **Type3** ❌ |
| ⑧ 화왕산 전경(초록빛 억새) | **원본 그대로 삽입** | 화왕산 `3496729` | **Type3** ❌ |
| ⑨ 우포늪 늪지 전경(CTA용) | CTA · 16:9 | 우포늪 `3590899` | Type1 ✅ |

추가로 **이미지 0. 썸네일(1:1)** — 본문 삽입이 아니라 **네이버 대표이미지 지정용**이다.

합계 : 썸네일 1 + 정보카드 5 + CTA 1 = **제작 7장** · 원본 그대로 삽입 2장 · 미제작 1칸

---

# 이미지 0. 썸네일 · 1:1

**삽입 위치** : 본문 삽입 아님 — 발행 시 **대표이미지로 지정**

**실제 배경 사진 소스**
`https://tong.visitkorea.or.kr/cms/resource_photo/36/3590836_image2_1.jpg`
한국관광공사 포토코리아 · `contentid 126737` · **Type1(변형 가능)**

★**이 사진은 실제로 열어서 확인했다**(`photos/upo-3590836-thumb.jpg`).
넓은 수면이 가운데를 가로지르고 뒤로 낮은 산줄기, **상단 3분의 1이 밝은 회백색 하늘**,
앞쪽 가장자리에 수생식물 초록 군락, 수면 오른쪽에 **나무 쪽배 한 척**. 간판·글자 없음. 흐린 낮의 자연광.
→ **글자는 상단 하늘에 얹는다.** 쪽배와 수생식물을 가리지 않는다.

**카드 텍스트**
```
창녕 우포늪
연중 무료 · 전 구간 평지 늪길
```
(`연중 무료`만 포인트색 `#3F6B52`)

**영문 프롬프트**
```
Edit the uploaded real photograph of Upo Wetland in Changnyeong, Korea.
Keep the scene EXACTLY as it is: the wide still water across the middle, the low
hills on the far shore, the overcast pale grey-white sky filling the upper third,
the thick green mat of aquatic plants along the near edge, and the single small
wooden boat resting on the water at the right. Crop to a 1:1 square, keeping the
boat and the green plant edge inside the frame, and keep the bright empty sky band
across the top. Apply only a gentle brightness and contrast lift so the photo reads
clean on a phone; do not warm it up and do not saturate the green.

Place this Korean text DIRECTLY on the bright empty sky at the top, left-aligned,
with generous margins, in a clean modern Korean gothic:
line 1, large and tight: 창녕 우포늪
line 2, about half that size, regular weight: 연중 무료 · 전 구간 평지 늪길
Colour: deep ink #182229 for all of it, EXCEPT the two words 연중 무료 which are
swamp green #3F6B52. No other colour anywhere.

Add a small low-contrast watermark blog.naver.com/witchbloom82 in the BOTTOM RIGHT
corner, small enough not to compete with the photo. If the original already carries
a credit mark in that corner, move the watermark to the bottom left instead and do
not cover the original mark.

Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, hill, water, plant, boat, building, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT exaggerate mist, foliage or colour.
NO glass panel, NO translucent box, NO white or cream information plate,
NO milky gradient, NO local whitening, NO blur/fog/glow behind the letters,
NO top or bottom information band, NO rounded sticker, NO speech bubble.
NO text drop shadow, NO outline, NO glow, NO 3D lettering, NO gradient on letters.
NO icon badges, NO check marks, NO leaf or curl ornaments.
Keep the photograph crisp and full-bleed. Place the Korean text DIRECTLY on the
naturally bright, empty part of the photo, using weight and spacing for hierarchy.
Render every Korean character and every digit EXACTLY as written, with no substitution.
```

---

# 이미지 ①. 창녕시외버스터미널 외관 — ★카드 미제작

**삽입 위치** : 영역1 78행

**사유** : 관광사진 API에 **터미널은 등재 대상이 아니다.**
`창녕시외버스터미널`·`영신버스터미널` 모두 0건이었고, 다른 장소 사진을 터미널인 척 붙이는 것은
V2 §4(원본에 없는 시설 추가 금지)와 정면으로 충돌한다.

**처리** : **V2 §8 fallback 3번** — 이 칸은 비우고, 터미널 두 곳을 구분하는 정보는 **본문 텍스트로 이미 처리돼 있다**
(영역1 소제목1의 ✅라벨-값 줄 + `★우포늪행 14번 버스는 창녕시외버스터미널이 아니라 영신버스터미널에서 출발해요` 색변경 줄).

**운영자 선택지** : 직접 찍은 터미널 사진이 있으면 그 자리에 넣으면 된다. 없으면 **넣지 않고 발행한다.**
　가짜 배경으로 채우지 않는다.

---

# 이미지 ②. 우포늪 코스요약 타임라인 카드 · 4:5

**삽입 위치** : 영역1 115행 (3초요약 박스와 소제목2 사이)

**실제 배경 사진 소스**
`https://tong.visitkorea.or.kr/cms/resource_photo/36/3590836_image2_1.jpg`
포토코리아 · `contentid 126737` · **Type1** (썸네일과 같은 사진을 세로 크롭으로 다시 쓴다 — 세트의 표지 역할)

**카드 텍스트**
```
창녕 우포늪 반나절 코스

① 창녕시외버스터미널 도착
　　도보 3~5분 → 영신버스터미널
② 13:30  14번 버스 승차
　　35분
③ 14:05  우포늪(세진) 하차 · 도보 2분
④ 14:05~17:20  탐방로 · 생태관
⑤ 17:20  돌아나오는 14번 승차
⑥ 17:55  창녕 복귀 → 18:00 시외터미널

체류 3시간 15분
입장료 0원 · 65세도 0원
★생태관 입장 마감 17:00
```

**★검산(영역1과 글자 단위 일치)** : 13:30 → 14:05(35분) → 17:20(체류 3시간 15분) → 17:55.
입장 마감 17:00. 우포늪 입장·주차 무료이므로 65세 별도 할인 개념이 없다 = 0원.

**영문 프롬프트**
```
Edit the uploaded real photograph of Upo Wetland in Changnyeong, Korea.
Keep the scene EXACTLY as it is: the wide still water, the low hills on the far
shore, the overcast pale sky, the green aquatic plants along the near edge and the
small wooden boat on the water. Crop to a 4:5 vertical frame so that the pale
overcast sky occupies the upper half and the water and green edge fill the lower
half; the boat must stay visible. Apply only a mild brightness and contrast lift.

Place the following Korean text DIRECTLY on the photograph in a clean modern Korean
gothic, left-aligned with generous margins. Put the heading and the numbered steps
on the bright sky in the upper half, and the three closing lines on the calm water
surface in the lower half. Use size and weight, not boxes, to separate them:

heading, largest: 창녕 우포늪 반나절 코스
then the numbered steps, regular weight, one per line, the indented lines slightly
smaller and lighter:
① 창녕시외버스터미널 도착
　　도보 3~5분 → 영신버스터미널
② 13:30  14번 버스 승차
　　35분
③ 14:05  우포늪(세진) 하차 · 도보 2분
④ 14:05~17:20  탐방로 · 생태관
⑤ 17:20  돌아나오는 14번 승차
⑥ 17:55  창녕 복귀 → 18:00 시외터미널
then, after a thin 1px horizontal rule in swamp green #3F6B52, three closing lines:
체류 3시간 15분
입장료 0원 · 65세도 0원
★생태관 입장 마감 17:00

Colour: deep ink #182229 on the bright sky, cream #F4F1EA where the text sits over
darker water or greenery. The times 13:30 / 14:05 / 17:20 / 17:55, the figure 0원,
and the whole last line ★생태관 입장 마감 17:00 are swamp green #3F6B52. Nothing else
is coloured.

Add a small low-contrast watermark blog.naver.com/witchbloom82 in the BOTTOM RIGHT
corner. If the original carries a credit mark there, move it to the bottom left.

Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, hill, water, plant, boat, building, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT exaggerate mist, foliage or colour.
NO glass panel, NO translucent box, NO white or cream information plate,
NO milky gradient, NO local whitening, NO blur/fog/glow behind the letters,
NO top or bottom information band, NO rounded sticker, NO speech bubble.
NO text drop shadow, NO outline, NO glow, NO 3D lettering, NO gradient on letters.
NO icon badges, NO check marks, NO leaf or curl ornaments.
Keep the photograph crisp and full-bleed. Place the Korean text DIRECTLY on the
naturally bright, empty part of the photo, using weight and spacing for hierarchy.
Render every Korean character and every digit EXACTLY as written, with no substitution.
```

★정보량이 많다. 한 번 생성해 보고 글자가 빽빽하면 **3:4로 넓히거나** 마지막 세 줄을 빼고
그 정보는 본문 라벨-값 줄에 맡긴다(V2 §8 순서 2번). 글자를 무작정 줄이지 않는다.

---

# 이미지 ③. 우포늪 탐방로 · 걷기 코스 카드 · 4:5

**삽입 위치** : 영역1 139행 (소제목3 끝)

**실제 배경 사진 소스**
`https://tong.visitkorea.or.kr/cms/resource_photo/51/3590651_image2_1.jpg`
포토코리아 · `contentid 126737` · **Type1**

⚠ 이 사진은 **아직 육안 확인 전**이다(`photos/CREDITS.md` §7). 열어 보고 **탐방로·데크·물가 산책로가 보이는 컷인지**
확인한 뒤 쓴다. 늪 한가운데만 찍힌 컷이면 ⑥번용 사진과 바꾼다.

**카드 텍스트**
```
얼마나 걸으면 될까요

짧은 코스  약 30분
　생태관 ↔ 전망대 ↔ 숲탐방로1길
중간 코스  1시간 · 2시간
　갈래길에서 돌아 나와도 돼요
전체 둘레길  8.7km · 3시간 30분

전 구간 평지 · 계단 없음
다 안 걸어도 괜찮아요
```

**영문 프롬프트**
```
Edit the uploaded real photograph of the walking trail at Upo Wetland in
Changnyeong, Korea. Keep the scene EXACTLY as it is — the path, the water, the
reeds and trees, the sky and the light of that day must all stay unchanged. Crop to
a 4:5 vertical frame, choosing the crop so that one continuous bright area (open
sky, pale water, or the pale surface of the path) runs down one vertical side with
nothing important in it. Apply only a mild brightness and contrast lift; keep the
greens natural and do not warm the image.

Place this Korean text DIRECTLY on that bright empty side, left-aligned, in a clean
modern Korean gothic, with clear spacing between the three coarse groups:
heading, largest: 얼마나 걸으면 될까요
짧은 코스  약 30분
　생태관 ↔ 전망대 ↔ 숲탐방로1길
중간 코스  1시간 · 2시간
　갈래길에서 돌아 나와도 돼요
전체 둘레길  8.7km · 3시간 30분
then a thin 1px horizontal rule in swamp green #3F6B52, then two closing lines in
slightly larger weight:
전 구간 평지 · 계단 없음
다 안 걸어도 괜찮아요

Colour: deep ink #182229 on bright areas, cream #F4F1EA over darker greenery. The
durations 약 30분 / 1시간 · 2시간 / 8.7km · 3시간 30분 and the line 전 구간 평지 · 계단 없음
are swamp green #3F6B52. Nothing else is coloured.

Add a small low-contrast watermark blog.naver.com/witchbloom82 in the BOTTOM RIGHT
corner. If the original carries a credit mark there, move it to the bottom left.

Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, hill, water, plant, boat, building, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT exaggerate mist, foliage or colour.
NO glass panel, NO translucent box, NO white or cream information plate,
NO milky gradient, NO local whitening, NO blur/fog/glow behind the letters,
NO top or bottom information band, NO rounded sticker, NO speech bubble.
NO text drop shadow, NO outline, NO glow, NO 3D lettering, NO gradient on letters.
NO icon badges, NO check marks, NO leaf or curl ornaments.
Keep the photograph crisp and full-bleed. Place the Korean text DIRECTLY on the
naturally bright, empty part of the photo, using weight and spacing for hierarchy.
Render every Korean character and every digit EXACTLY as written, with no substitution.
```

---

# 이미지 ④. 우포늪생태관 운영시간 카드 · 4:5

**삽입 위치** : 영역1 166행

**실제 배경 사진 소스**
`https://tong.visitkorea.or.kr/cms/resource/11/3537911_image2_1.jpg`
포토코리아 · `contentid 661980`(우포늪생태관) · **Type1**

⚠ 육안 확인 전. **생태관 건물이 보이는 컷인지** 확인하고 쓴다.
★주소가 **유어면 우포늪길 220**이다. 체험장(대합면 우포2로 370) 사진과 **섞어 쓰면 독자를 다른 권역으로 보낸다.**

**카드 텍스트**
```
우포늪생태관

운영  09:00 ~ 18:00
입장 마감  17:00
휴관  매주 월요일
　10월 15일은 목요일 · 정상 운영
관람료  무료 · 주차 무료

☎ 055-530-1556
```

**★검산** : 영역1 소제목4와 글자 단위 동일. **폐장 18:00과 입장 마감 17:00을 각각 적었다**(한 칸에 섞지 않음).

**영문 프롬프트**
```
Edit the uploaded real photograph of the Upo Wetland Ecological Museum building in
Changnyeong, Korea. Keep the building, the sky, the ground and the surrounding
planting EXACTLY as they are. Crop to a 4:5 vertical frame so that a continuous
bright, uncluttered area — open sky above the roofline, or a pale paved forecourt —
runs down one vertical side. Apply only a mild brightness and contrast lift.

Place this Korean text DIRECTLY on that bright empty area, left-aligned, in a clean
modern Korean gothic, with the label and value of each row on the same line and
clear vertical spacing between rows:
heading, largest: 우포늪생태관
운영  09:00 ~ 18:00
입장 마감  17:00
휴관  매주 월요일
　10월 15일은 목요일 · 정상 운영
관람료  무료 · 주차 무료
then a thin 1px horizontal rule in swamp green #3F6B52, then:
☎ 055-530-1556

Colour: deep ink #182229 on bright areas, cream #F4F1EA over darker parts of the
building. The values 09:00 ~ 18:00, 17:00, 매주 월요일 and 무료 · 주차 무료 are swamp
green #3F6B52, and the line 입장 마감  17:00 is set one weight heavier than the rest.
Nothing else is coloured.

Add a small low-contrast watermark blog.naver.com/witchbloom82 in the BOTTOM RIGHT
corner. If the original carries a credit mark there, move it to the bottom left.

Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, hill, water, plant, boat, building, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT exaggerate mist, foliage or colour.
NO glass panel, NO translucent box, NO white or cream information plate,
NO milky gradient, NO local whitening, NO blur/fog/glow behind the letters,
NO top or bottom information band, NO rounded sticker, NO speech bubble.
NO text drop shadow, NO outline, NO glow, NO 3D lettering, NO gradient on letters.
NO icon badges, NO check marks, NO leaf or curl ornaments.
Keep the photograph crisp and full-bleed. Place the Korean text DIRECTLY on the
naturally bright, empty part of the photo, using weight and spacing for hierarchy.
Render every Korean character and every digit EXACTLY as written, with no substitution.
```

---

# 이미지 ⑤. 우포늪체험장 쪽배·자전거 카드 · 4:5

**삽입 위치** : 영역1 167행

**실제 배경 사진 소스**
`https://tong.visitkorea.or.kr/cms/resource/92/3537892_image2_1.jpg`
포토코리아 · `contentid 2785997`(우포늪체험장) · **Type1**

⚠ 육안 확인 전. **쪽배나 체험장 시설이 보이는 컷인지** 확인하고 쓴다.

**카드 텍스트**
```
쪽배 타기 · 자전거

쪽배  4~11월 · 하루 5회
　10:00 11:00 14:00 15:00 16:00
　1인 5,000원 · 각 30분
자전거  1인용 3,000원 · 2인용 4,000원

탐방로는 무료 · 쪽배만 따로 내요
65세 할인 여부는 ☎055-530-1556
```

**★검산** : 영역1 소제목4와 동일. **65세 할인은 확인하지 못했으므로 "있다/없다"를 쓰지 않고 전화번호를 준다.**
　지어낸 할인 조건을 카드에 넣지 않는다(V2 내용정확성).

**영문 프롬프트**
```
Edit the uploaded real photograph of the Upo Wetland hands-on experience area in
Changnyeong, Korea, where visitors ride traditional flat wooden boats. Keep the
boats, the water, the bank, the planting and the sky EXACTLY as they are. Crop to a
4:5 vertical frame keeping one continuous bright area — open sky or pale open water
— down one vertical side. Apply only a mild brightness and contrast lift.

Place this Korean text DIRECTLY on that bright area, left-aligned, in a clean modern
Korean gothic, with clear spacing between the two groups:
heading, largest: 쪽배 타기 · 자전거
쪽배  4~11월 · 하루 5회
　10:00 11:00 14:00 15:00 16:00
　1인 5,000원 · 각 30분
자전거  1인용 3,000원 · 2인용 4,000원
then a thin 1px horizontal rule in swamp green #3F6B52, then two closing lines,
slightly smaller:
탐방로는 무료 · 쪽배만 따로 내요
65세 할인 여부는 ☎055-530-1556

Colour: deep ink #182229 on bright areas, cream #F4F1EA over darker water. The five
times, 1인 5,000원, 1인용 3,000원 · 2인용 4,000원 and the word 무료 are swamp green
#3F6B52. Nothing else is coloured.

Add a small low-contrast watermark blog.naver.com/witchbloom82 in the BOTTOM RIGHT
corner. If the original carries a credit mark there, move it to the bottom left.

Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, hill, water, plant, boat, building, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT exaggerate mist, foliage or colour.
NO glass panel, NO translucent box, NO white or cream information plate,
NO milky gradient, NO local whitening, NO blur/fog/glow behind the letters,
NO top or bottom information band, NO rounded sticker, NO speech bubble.
NO text drop shadow, NO outline, NO glow, NO 3D lettering, NO gradient on letters.
NO icon badges, NO check marks, NO leaf or curl ornaments.
Keep the photograph crisp and full-bleed. Place the Korean text DIRECTLY on the
naturally bright, empty part of the photo, using weight and spacing for hierarchy.
Render every Korean character and every digit EXACTLY as written, with no substitution.
```

---

# 이미지 ⑥. 무장애 · 쉬는 자리 카드 · 4:5

**삽입 위치** : 영역1 181행 (소제목5 끝)

**실제 배경 사진 소스**
`https://tong.visitkorea.or.kr/cms/resource_photo/52/3590652_image2_1.jpg`
포토코리아 · `contentid 126737` · **Type1**

⚠ 육안 확인 전. **쉼터·정자·전망대·벤치가 보이면 최우선**, 없으면 ③번용 사진과 맞바꾼다.

**카드 텍스트**
```
휠체어 · 유모차도 괜찮아요

휠체어 무료 대여  4대
유모차 무료 대여  5대
장애인 전용 주차  13면
화장실  생태관 안 · 세진주차장 옆

쉬는 자리
　전망대(30분 코스 안) · 주매정 · 생태관 실내

당일 재고는 ☎055-530-1556
```

**영문 프롬프트**
```
Edit the uploaded real photograph taken at Upo Wetland in Changnyeong, Korea. Keep
the scene EXACTLY as it is — the shelter or viewing point, the path, the water, the
trees and the sky of that day must all stay unchanged. Crop to a 4:5 vertical frame
with one continuous bright, empty vertical band (open sky or pale water). Apply only
a mild brightness and contrast lift.

Place this Korean text DIRECTLY on that bright band, left-aligned, in a clean modern
Korean gothic, label and value on the same line, with clear spacing between groups:
heading, largest: 휠체어 · 유모차도 괜찮아요
휠체어 무료 대여  4대
유모차 무료 대여  5대
장애인 전용 주차  13면
화장실  생태관 안 · 세진주차장 옆
then a thin 1px horizontal rule in swamp green #3F6B52, then:
쉬는 자리
　전망대(30분 코스 안) · 주매정 · 생태관 실내
then, smaller and lighter:
당일 재고는 ☎055-530-1556

Colour: deep ink #182229 on bright areas, cream #F4F1EA over darker greenery. The
figures 4대, 5대, 13면 and the words 무료 대여 are swamp green #3F6B52. Nothing else
is coloured.

Add a small low-contrast watermark blog.naver.com/witchbloom82 in the BOTTOM RIGHT
corner. If the original carries a credit mark there, move it to the bottom left.

Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, hill, water, plant, boat, building, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT exaggerate mist, foliage or colour.
NO glass panel, NO translucent box, NO white or cream information plate,
NO milky gradient, NO local whitening, NO blur/fog/glow behind the letters,
NO top or bottom information band, NO rounded sticker, NO speech bubble.
NO text drop shadow, NO outline, NO glow, NO 3D lettering, NO gradient on letters.
NO icon badges, NO check marks, NO leaf or curl ornaments.
Keep the photograph crisp and full-bleed. Place the Korean text DIRECTLY on the
naturally bright, empty part of the photo, using weight and spacing for hierarchy.
Render every Korean character and every digit EXACTLY as written, with no substitution.
```

---

# 이미지 ⑦. 삼오식당 수구레국밥 — ★원본 그대로 삽입 (카드 제작 금지)

**삽입 위치** : 영역1 201행

**실제 사진 소스**
`http://tong.visitkorea.or.kr/cms/resource/21/2853821_image2_1.JPG` (음식 컷)
포토코리아 · `contentid 2853831` · **`cpyrhtDivCd = Type3` — 공공누리 제1유형 + 변경금지**

**★글자를 얹으면 라이선스 위반이다.** 크롭·보정·워터마크 추가도 하지 않는다.
**저장한 원본을 그대로 본문에 넣는다.**

**대체 컷** : 실내 `.../20/2853820_image2_1.JPG` · 음식2 `.../22/2853822_image2_1.JPG` (셋 다 Type3)

**정보는 본문 텍스트로** (V2 §8 fallback 3번) — 영역1에 이미 이렇게 들어가 있다 :
```
1. [굵게]삼오식당(창녕본점)[/굵게] — 수구레국밥 9,000원 · 수구레국수 8,000원 · 선지국밥 9,000원(특 11,000원)
　창녕읍 창녕시장길 90, 창녕전통시장 인근 · 창녕시외버스터미널에서 도보권
　영업 06:00~18:00(라스트오더 17:30), 연중무휴 — 목요일(10/15)도 정상 영업해요
```

**사진 아래 한 줄로 출처 표기(필수)**
```
사진 출처 : 한국관광공사 포토코리아 (공공누리 제1유형)
```

---

# 이미지 ⑧. 화왕산 전경 — ★원본 그대로 삽입 (카드 제작 금지)

**삽입 위치** : 영역1 217행

**실제 사진 소스**
`https://tong.visitkorea.or.kr/cms/resource/29/3496729_image2_1.jpg`
포토코리아 · `contentid 126038`(화왕산군립공원) · **`cpyrhtDivCd = Type3` — 변경금지**

**★글자 금지.** 원본 그대로 넣는다.

⚠ **열어 보고 억새가 이미 은빛으로 만개한 컷이면 쓰지 않는다.**
본문이 "10월 15일엔 아직 일러요 · 초록빛이 많이 남아 있어요"라고 말하는데
사진이 만개한 은빛이면 **글과 사진이 정면으로 어긋난다**(독자가 사진을 믿고 갔다가 헛걸음한다).
만개 컷뿐이면 이 칸은 **비우고**, 화왕산 문단은 사진 없이 낸다.

**사진 아래 출처 표기**
```
사진 출처 : 한국관광공사 포토코리아 (공공누리 제1유형)
```

---

# 이미지 ⑨. CTA · 16:9

**삽입 위치** : 영역1 254행 (메인 CTA 자리)

**실제 배경 사진 소스**
`https://tong.visitkorea.or.kr/cms/resource_photo/99/3590899_image2_1.jpg`
포토코리아 · `contentid 126737` · **Type1**

⚠ 육안 확인 전. **가로로 넓게 트인 늪 전경**이면 그대로, 세로 구도면 확인한 `3590836`으로 바꾼다
(그 사진은 가로 수면 구도라 16:9에 잘 맞는다).

**카드 텍스트**
```
차 없이 가는 당일치기, 계속 올려요
공감 💗 + 이웃추가
```

**영문 프롬프트**
```
Edit the uploaded real photograph of Upo Wetland in Changnyeong, Korea. Keep the
scene EXACTLY as it is: the wide water, the far shore, the plants at the edge and
the sky of that day. Crop to a 16:9 horizontal frame that keeps the widest open
stretch of water and sky. Apply only a mild brightness and contrast lift; keep the
colours natural and do not warm the image.

Place this Korean text DIRECTLY on the calm open water or the open sky, whichever is
emptier, centred horizontally, in a clean modern Korean gothic:
line 1, larger: 차 없이 가는 당일치기, 계속 올려요
line 2, smaller, one weight lighter: 공감 💗 + 이웃추가
Colour: cream #F4F1EA if the text sits over darker water, deep ink #182229 if it
sits over the bright sky. Keep the small heart as it is; do not add any other icon.
No colour accent on this card — the CTA stays quiet.

Add a small low-contrast watermark blog.naver.com/witchbloom82 in the BOTTOM RIGHT
corner. If the original carries a credit mark there, move it to the bottom left.

Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, hill, water, plant, boat, building, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT exaggerate mist, foliage or colour.
NO glass panel, NO translucent box, NO white or cream information plate,
NO milky gradient, NO local whitening, NO blur/fog/glow behind the letters,
NO top or bottom information band, NO rounded sticker, NO speech bubble.
NO text drop shadow, NO outline, NO glow, NO 3D lettering, NO gradient on letters.
NO icon badges, NO check marks, NO leaf or curl ornaments.
Keep the photograph crisp and full-bleed. Place the Korean text DIRECTLY on the
naturally bright, empty part of the photo, using weight and spacing for hierarchy.
Render every Korean character and every digit EXACTLY as written, with no substitution.
```

---

## ★발행 전 이미지 점검표

- [ ] 카드 안에 **이모지가 없는가** (CTA의 💗 하나만 예외 — 본문 CTA 문구를 그대로 옮긴 것)
- [ ] 글자 뒤에 **패널·미백·블러·그림자·외곽선·글로우**가 없는가
- [ ] 사진의 하늘·산·물·식물·쪽배·건물이 **원본과 같은가** (하나라도 달라지면 실패, V2 §7)
- [ ] 계절·날씨가 바뀌지 않았는가
- [ ] 포인트색이 **`#3F6B52` 하나뿐**인가 (주황·앰버 0)
- [ ] 워터마크가 **우하단**인가, 원본 출처 표기를 가리지 않는가
- [ ] 카드의 숫자가 **영역1과 글자 단위로 같은가** (13:30 / 14:05 / 17:20 / 17:55 / 17:00 / 18:00 / 9,000원 / 5,000원 / 3,000원 / 4,000원 / 4대 / 5대 / 13면 / 8.7km)
- [ ] **Type3 사진(⑦ 삼오식당 · ⑧ 화왕산)에 글자를 얹지 않았는가**
- [ ] Type3 사진 아래 **출처 한 줄**을 넣었는가
- [ ] ⑧ 화왕산 사진이 **만개한 은빛 억새가 아닌가** (본문과 어긋나면 빼기)
- [ ] 같은 편집을 2회 실패하면 **세 번째 시도 대신 원본 삽입**으로 내렸는가 (V2 §8)

## ★남은 일 (운영자)

1. **사진 ②~⑥·⑨의 원본을 열어 육안 확인** — 특히 우포늪 5장은 `imgname`이 전부 "창녕 우포늪"으로 같아
　 파일명으로 장면을 구분할 수 없다. ①번(`3590836`)만 이번에 확인했다.
2. 확인 결과 장면이 카드 주제와 안 맞으면 **같은 contentid 안에서 바꿔 쓴다**(전부 Type1이라 자유롭다).
3. 터미널 사진을 직접 갖고 있으면 ①번 칸에 넣는다. 없으면 비우고 발행한다.
