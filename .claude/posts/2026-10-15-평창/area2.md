# 영역2 — 이미지 제작 지시서 · 평창 월정사·오대산 (2026-10-15 발행 예정)

기준 : `.claude/blog-image-project-instructions-v2.md` (**V2가 최우선**)
사진 대장 : `photos/CREDITS.md` — 저작권 유형은 **사진 단위**로 판정했다

---

## 0. 이 글의 공통 규격

**포인트색 : 전나무 딥그린 `#2E4F3E`**
　근거 — 이 글의 주인공이 전나무숲길(전나무 1,700여 그루, 그늘이 깊은 길)이다.
　★직전 글(창녕 늪 그린 `#3F6B52`)보다 **어둡고 푸른 쪽**으로 잡아 세트가 겹치지 않게 했다.
　★앰버·골드·주황 **아님**. 단풍이 이 글의 훅이 아니므로 난색으로 물들이지 않는다.
　⚠**단 이 색은 히어로 사진을 아직 열어 보지 못한 상태의 제안값**이다(사진 서버가 프록시 차단).
　　사진을 열어 보고 실제 색이 다르면 **그 사진에서 다시 뽑는다** — V2 원칙이 추정색보다 우선한다.

**글자색** : 밝은 하늘·돌바닥 위에는 잉크 `#182229` / 어두운 숲 위에는 크림 `#F4F1EA`

**워터마크** : `blog.naver.com/witchbloom82` · **우하단** · 작고 낮은 대비
　원본에 출처 표기가 있으면 가리지 않는다(겹치면 좌하단)

**제작 도구** : GPT 이미지 편집 기능 (V2 §1)

### ★모든 카드 프롬프트에 그대로 들어가는 금지 블록

```
Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, tree, path, building, roof, stone, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT add or exaggerate autumn colour,
mist or falling leaves. Do NOT exaggerate foliage or saturation.
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

## ★★먼저 읽을 것 — 이 글은 쓸 수 있는 사진이 적다

`contentid 125772`(월정사·월정사 전나무숲) 20장 중
- **Type1 5장** — 오버레이 가능. 전부 `imgname`이 "월정사"라 **장면을 열어 봐야 안다**
- **Type3 15장** — 변경금지. 이름에 '전나무숲'이 들어간 **유일한 계열**이라, 숲길 장면은 여기에만 있다

→ 그래서 **글자를 얹는 카드는 Type1 5장으로만** 만들고,
　 **전나무숲길 장면은 Type3 원본을 그대로 삽입**한다. 섞으면 라이선스 위반이다.

교통시설(진부역·터미널·226번 버스)·맛집·양떼목장은 **TourAPI에 없다.** 억지로 다른 사진을 붙이지 않는다.

---

## ★제작 계획 한눈에 (영역1 삽입 포인트 9개와 1:1)

| 영역1 슬롯 | 처리 | 배경 사진 | 유형 |
|---|---|---|---|
| ① 진부(오대산)역 KTX 승강장 전경 | **카드 미제작 (V2 §8)** | 없음 | — |
| ② 진부시외버스터미널 외관 | **카드 미제작 (V2 §8)** | 없음 | — |
| ③ 226번 월정사행 버스 승차 모습 | **카드 미제작 (V2 §8)** | 없음 | — |
| ④ 월정사 전나무숲길 데크로드 | **원본 그대로 삽입** | 전나무숲 계열 Type3 | **Type3** ❌ |
| ⑤ 월정사 경내 적광전 전경 | 정보카드 A · 4:5 | 월정사 Type1 ① | Type1 ✅ |
| ⑥ 전나무숲길 쉼터 벤치 | **원본 그대로 삽입** | 전나무숲 계열 Type3 | **Type3** ❌ |
| ⑦ 진부역 뒷고기 상차림 | **카드 미제작 (V2 §8)** | 없음 | — |
| ⑧ 대관령 양떼목장 전경 | **카드 미제작** | TourAPI 0건 | — |
| ⑨ 전나무숲길 아침 햇살(CTA용) | CTA · 16:9 | 월정사 Type1 ⑤ | Type1 ✅ |

추가로 **이미지 0. 썸네일(1:1)** — 본문 삽입이 아니라 **네이버 대표이미지 지정용**
그리고 **정보카드 B·C** 두 장을 소제목2·4 자리에 얹는다(아래 참조).

합계 : 썸네일 1 + 정보카드 3 + CTA 1 = **제작 5장** · 원본 그대로 삽입 2장 · 미제작 4칸

★**미제작 4칸이 많다.** 교통 슬롯 3개가 전부 사진이 없어서다.
　 운영자가 진부역·터미널 사진을 직접 갖고 있으면 그 자리에 넣고, 없으면 **비우고 발행한다.**
　 그 정보는 본문 텍스트(라벨-값 줄)로 이미 다 들어가 있다.

---

# 이미지 0. 썸네일 · 1:1

**삽입 위치** : 본문 삽입 아님 — 발행 시 **대표이미지로 지정**

**실제 배경 사진 소스**
`https://tong.visitkorea.or.kr/cms/resource_photo/33/3584033_image2_1.jpg`
포토코리아 · `contentid 125772` · **Type1(변형 가능)** · imgname `평창 월정사`

⚠ 육안 확인 전. **열어 보고 하늘이나 마당 같은 밝은 여백이 있는 컷**인지 확인한 뒤 쓴다.
없으면 Type1 나머지 4장(`3569503`·`3569441`·`3569550`·`3569529`) 중에서 고른다.

**카드 텍스트**
```
평창 월정사
입장료 0원 · 전나무숲길 완전 평지
```
(`입장료 0원`만 포인트색 `#2E4F3E`)

**영문 프롬프트**
```
Edit the uploaded real photograph of Woljeongsa temple in Pyeongchang, Korea.
Keep the scene EXACTLY as it is — the temple buildings, their tiled roofs, the
stone ground, the surrounding fir trees and the sky of that day must all stay
unchanged. Crop to a 1:1 square, choosing the crop so that one naturally bright and
uncluttered area (open sky above the roofline, or the pale stone courtyard) stays
clear for the text. Apply only a gentle brightness and contrast lift so the photo
reads clean on a phone; keep the greens natural and do not warm the image.

Place this Korean text DIRECTLY on that bright empty area, left-aligned, with
generous margins, in a clean modern Korean gothic:
line 1, large and tight: 평창 월정사
line 2, about half that size, regular weight: 입장료 0원 · 전나무숲길 완전 평지
Colour: deep ink #182229 for all of it, EXCEPT the two words 입장료 0원 which are
deep fir green #2E4F3E. No other colour anywhere.

Add a small low-contrast watermark blog.naver.com/witchbloom82 in the BOTTOM RIGHT
corner. If the original already carries a credit mark there, move it to the bottom
left and do not cover the original mark.

Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, tree, path, building, roof, stone, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT add or exaggerate autumn colour,
mist or falling leaves. Do NOT exaggerate foliage or saturation.
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

# 정보카드 A — 월정사 경내 (영역1 슬롯 ⑤) · 4:5

**삽입 위치** : 영역1 `[이미지 삽입: 월정사 경내 적광전 전경]`

**실제 배경 사진 소스**
`https://tong.visitkorea.or.kr/cms/resource_photo/03/3569503_image2_1.jpg`
포토코리아 · `contentid 125772` · **Type1**

⚠ 육안 확인 전. **경내 건물이 보이는 컷**인지 확인하고 쓴다(숲길 컷이면 다른 Type1과 맞바꾼다).

**카드 텍스트**
```
월정사, 입장료가 아예 없어요

입장료  0원
　2023년 5월 문화재관람료 폐지
　성인도 65세도 따질 것 없이 무료
전나무숲길  0원 · 상시 개방
매표소  없음
```

**★검산** : 영역1과 글자 단위 동일. **'65세 할인'이 아니라 '구분 없이 무료'**다 — 할인으로 쓰면 틀린다.

**영문 프롬프트**
```
Edit the uploaded real photograph of the Woljeongsa temple grounds in Pyeongchang,
Korea. Keep the buildings, roofs, stone courtyard, trees and sky EXACTLY as they
are. Crop to a 4:5 vertical frame so that one continuous bright, uncluttered band —
open sky above the roofline, or the pale stone ground — runs down one vertical side.
Apply only a mild brightness and contrast lift.

Place this Korean text DIRECTLY on that bright band, left-aligned, in a clean modern
Korean gothic, label and value on the same line where they pair, with clear spacing
between groups:
heading, largest: 월정사, 입장료가 아예 없어요
입장료  0원
　2023년 5월 문화재관람료 폐지
　성인도 65세도 따질 것 없이 무료
then a thin 1px horizontal rule in deep fir green #2E4F3E, then:
전나무숲길  0원 · 상시 개방
매표소  없음

Colour: deep ink #182229 on bright areas, cream #F4F1EA where the text sits over
darker roof or foliage. The two figures 0원 are deep fir green #2E4F3E and set one
weight heavier. Nothing else is coloured.

Add a small low-contrast watermark blog.naver.com/witchbloom82 in the BOTTOM RIGHT
corner. If the original carries a credit mark there, move it to the bottom left.

Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, tree, path, building, roof, stone, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT add or exaggerate autumn colour,
mist or falling leaves. Do NOT exaggerate foliage or saturation.
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

# 정보카드 B — 226번 버스 (소제목2 자리) · 4:5

**삽입 위치** : 영역1 소제목2 끝, `[이미지 삽입: 226번 월정사행 버스 승차 모습]` 자리를 **이 카드로 대체**
　(버스 사진이 없으므로, 월정사 사진 위에 버스 정보를 얹는다 — 사진과 내용이 어긋나지 않게
　 **버스 사진인 척하지 않고** '월정사 가는 길' 정보 카드로 성격을 바꾼다)

**실제 배경 사진 소스**
`https://tong.visitkorea.or.kr/cms/resource_photo/41/3569441_image2_1.jpg`
포토코리아 · `contentid 125772` · **Type1**

**카드 텍스트**
```
월정사 가는 226번, 하루 열 번

타는 곳  진부시외버스터미널
　시외버스에서 내린 자리 바로 뒷편
요금 1,900원 · 20분 · 하차 후 150m 도보 5분

07:50 09:05 10:00 11:00 11:50
13:10 15:10 15:50 17:00 17:40

★17:40 차로 들어가면 안 돼요
★13:10 차까지 타는 걸 권해요
```

**★검산** : 시각 10개·요금·소요·도보 전부 영역1 및 월정사 공식 안내와 일치.
**도보는 2분이 아니라 150m·5분**이다(공식 기준으로 정정된 값).

**영문 프롬프트**
```
Edit the uploaded real photograph taken at Woljeongsa in Pyeongchang, Korea. Keep
the scene EXACTLY as it is. Crop to a 4:5 vertical frame keeping one continuous
bright, empty area (open sky, or pale stone path) large enough to hold several lines
of text. Apply only a mild brightness and contrast lift.

Place this Korean text DIRECTLY on that bright area, left-aligned, in a clean modern
Korean gothic, with clear spacing between the three groups:
heading, largest: 월정사 가는 226번, 하루 열 번
타는 곳  진부시외버스터미널
　시외버스에서 내린 자리 바로 뒷편
요금 1,900원 · 20분 · 하차 후 150m 도보 5분
then the ten departure times on two lines, evenly spaced, slightly smaller:
07:50 09:05 10:00 11:00 11:50
13:10 15:10 15:50 17:00 17:40
then a thin 1px horizontal rule in deep fir green #2E4F3E, then two closing lines:
★17:40 차로 들어가면 안 돼요
★13:10 차까지 타는 걸 권해요

Colour: deep ink #182229 on bright areas, cream #F4F1EA over darker greenery. The
ten times, 1,900원 and both closing lines starting with ★ are deep fir green
#2E4F3E. Nothing else is coloured.

Add a small low-contrast watermark blog.naver.com/witchbloom82 in the BOTTOM RIGHT
corner. If the original carries a credit mark there, move it to the bottom left.

Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, tree, path, building, roof, stone, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT add or exaggerate autumn colour,
mist or falling leaves. Do NOT exaggerate foliage or saturation.
NO glass panel, NO translucent box, NO white or cream information plate,
NO milky gradient, NO local whitening, NO blur/fog/glow behind the letters,
NO top or bottom information band, NO rounded sticker, NO speech bubble.
NO text drop shadow, NO outline, NO glow, NO 3D lettering, NO gradient on letters.
NO icon badges, NO check marks, NO leaf or curl ornaments.
Keep the photograph crisp and full-bleed. Place the Korean text DIRECTLY on the
naturally bright, empty part of the photo, using weight and spacing for hierarchy.
Render every Korean character and every digit EXACTLY as written, with no substitution.
```

★시각이 열 개라 글자가 빽빽하다. 한 번 생성해 보고 답답하면 **3:4로 넓히거나**
시각 열 개를 빼고 "하루 열 번 · 07:50 첫차 · 17:40 막차"로 줄인다(V2 §8 순서 2번).

---

# 정보카드 C — 걷기 코스와 돌아오는 길 (소제목3 자리) · 4:5

**삽입 위치** : 영역1 `[이미지 삽입: 전나무숲길 쉼터 벤치]` **바로 앞**
　(쉼터 벤치 자리는 아래 ⑥번 Type3 원본 삽입으로 남긴다)

**실제 배경 사진 소스**
`https://tong.visitkorea.or.kr/cms/resource_photo/50/3569550_image2_1.jpg`
포토코리아 · `contentid 125772` · **Type1**

**카드 텍스트**
```
얼마나 걸으면 될까요

짧은 코스  30~40분
　일주문 ↔ 금강교 왕복
전체 코스  1.9km · 약 1시간
전나무숲길  1km · 전나무 1,700여 그루
급경사 없음 · 처음부터 끝까지 평지

돌아오는 버스를 놓쳐도
　택시로 15분 · 18,000원
```

**★검산** : 택시 18,000원은 **월정사 공식 안내 기준**이다. 영역1과 동일.
이 카드의 마지막 두 줄이 이 글의 **불안을 푸는 핵심**이라 반드시 넣는다.

**영문 프롬프트**
```
Edit the uploaded real photograph taken at Woljeongsa in Pyeongchang, Korea. Keep
the scene EXACTLY as it is — the path, the fir trees, the buildings and the sky of
that day. Crop to a 4:5 vertical frame with one continuous bright, empty vertical
band. Apply only a mild brightness and contrast lift; keep the greens natural.

Place this Korean text DIRECTLY on that bright band, left-aligned, in a clean modern
Korean gothic, with clear spacing between the two groups:
heading, largest: 얼마나 걸으면 될까요
짧은 코스  30~40분
　일주문 ↔ 금강교 왕복
전체 코스  1.9km · 약 1시간
전나무숲길  1km · 전나무 1,700여 그루
급경사 없음 · 처음부터 끝까지 평지
then a thin 1px horizontal rule in deep fir green #2E4F3E, then two closing lines:
돌아오는 버스를 놓쳐도
　택시로 15분 · 18,000원

Colour: deep ink #182229 on bright areas, cream #F4F1EA over darker foliage. The
durations 30~40분, 1.9km · 약 1시간, 1km, the line 급경사 없음 · 처음부터 끝까지 평지
and the figure 18,000원 are deep fir green #2E4F3E. Nothing else is coloured.

Add a small low-contrast watermark blog.naver.com/witchbloom82 in the BOTTOM RIGHT
corner. If the original carries a credit mark there, move it to the bottom left.

Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, tree, path, building, roof, stone, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT add or exaggerate autumn colour,
mist or falling leaves. Do NOT exaggerate foliage or saturation.
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

# ④⑥. 전나무숲길 — ★원본 그대로 삽입 (카드 제작 금지)

**삽입 위치** : 영역1 `[이미지 삽입: 월정사 전나무숲길 데크로드]` · `[이미지 삽입: 전나무숲길 쉼터 벤치]`

**실제 사진 소스** — `contentid 125772`의 **Type3 계열**에서 두 장 고른다
`https://tong.visitkorea.or.kr/cms/resource/44/3304044_image2_1.jpg`
`https://tong.visitkorea.or.kr/cms/resource/45/3304045_image2_1.jpg`
(그 밖에 `3304047`·`3304048`·`3304049`·`3304050`·`3304052`·`3304053`·`3304055`·`3304056`·
`3304059`·`3304060`·`3304061`·`3304063`·`3304064` — 전부 같은 계열)

**`cpyrhtDivCd = Type3` — 공공누리 제1유형 + 변경금지.**
★**글자를 얹으면 라이선스 위반이다.** 크롭·보정·워터마크 추가도 하지 않는다.
**저장한 원본을 그대로 본문에 넣는다.**

★열어 보고 **데크로드가 보이는 컷**과 **쉼터·벤치가 보이는 컷**을 각각 고른다.
둘 다 없으면 숲길 전경 두 장으로 대체하고, 본문의 슬롯 이름을 사진에 맞게 고친다
(사진에 없는 것을 슬롯 이름으로 약속하지 않는다).

**사진 아래 한 줄로 출처 표기(필수)**
```
사진 출처 : 한국관광공사 포토코리아 (공공누리 제1유형)
```

---

# 이미지 ⑨. CTA · 16:9

**삽입 위치** : 영역1 메인 CTA 자리

**실제 배경 사진 소스**
`https://tong.visitkorea.or.kr/cms/resource_photo/29/3569529_image2_1.jpg`
포토코리아 · `contentid 125772` · **Type1**

⚠ 육안 확인 전. **가로로 트인 구도**면 그대로, 세로 구도면 남은 Type1으로 바꾼다.

**카드 텍스트**
```
차 없이 가는 당일치기, 계속 올려요
공감 💗 + 이웃추가
```

**영문 프롬프트**
```
Edit the uploaded real photograph taken at Woljeongsa in Pyeongchang, Korea. Keep
the scene EXACTLY as it is. Crop to a 16:9 horizontal frame that keeps the widest
open stretch of sky, path or courtyard. Apply only a mild brightness and contrast
lift; keep the colours natural and do not warm the image.

Place this Korean text DIRECTLY on the emptiest bright area, centred horizontally,
in a clean modern Korean gothic:
line 1, larger: 차 없이 가는 당일치기, 계속 올려요
line 2, smaller, one weight lighter: 공감 💗 + 이웃추가
Colour: cream #F4F1EA if the text sits over darker foliage, deep ink #182229 if it
sits over bright sky or stone. Keep the small heart as it is; add no other icon.
No colour accent on this card — the CTA stays quiet.

Add a small low-contrast watermark blog.naver.com/witchbloom82 in the BOTTOM RIGHT
corner. If the original carries a credit mark there, move it to the bottom left.

Do NOT repaint, regenerate or recompose the scene. Do NOT add, remove or replace
any sky, tree, path, building, roof, stone, person, vehicle, sign or facility.
Do NOT change the season or the weather. Do NOT add or exaggerate autumn colour,
mist or falling leaves. Do NOT exaggerate foliage or saturation.
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

- [ ] 카드 안에 **이모지가 없는가** (CTA의 💗 하나만 예외)
- [ ] 글자 뒤에 **패널·미백·블러·그림자·외곽선·글로우**가 없는가
- [ ] 사진의 하늘·나무·길·건물·기와가 **원본과 같은가** (하나라도 달라지면 실패, V2 §7)
- [ ] **가을 단풍을 더 넣거나 과장하지 않았는가** — 본문이 "아직 물들기 시작하는 단계"라고 쓴다.
　　사진이 만개한 단풍이면 글과 어긋난다
- [ ] 포인트색이 **`#2E4F3E` 하나뿐**인가 (주황·앰버 0)
- [ ] 워터마크가 **우하단**인가, 원본 출처 표기를 가리지 않는가
- [ ] 카드 숫자가 **영역1과 글자 단위로 같은가**
　　(1,900원 / 20분 / 150m·5분 / 07:50~17:40 열 개 / 18,000원 / 1.9km / 1km / 30~40분)
- [ ] ★**Type3 사진(④⑥ 전나무숲길)에 글자를 얹지 않았는가**
- [ ] Type3 사진 아래 **출처 한 줄**을 넣었는가
- [ ] 미제작 4칸(①②③⑦⑧)을 **가짜 사진으로 채우지 않았는가**

## ★남은 일 (운영자)

1. **Type1 5장을 열어 보고 장면을 확인**한 뒤 카드에 배정한다 — `imgname`이 전부 "월정사"라 이름으론 알 수 없다
2. **Type3 계열에서 데크로드 컷과 쉼터 컷**을 각각 고른다(원본 그대로 삽입)
3. 포인트색 `#2E4F3E`는 **사진을 못 본 상태의 제안값**이다. 히어로 사진 색이 다르면 그 사진에서 다시 뽑는다
4. 진부역·터미널 사진을 갖고 있으면 ①②칸에 넣고, 없으면 비우고 발행한다
