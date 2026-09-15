# 영역2 — 이미지 지시서 · 순천만국가정원 (발행예정 2026-10-27)

> **쓰는 법 3줄**
> ① 아래 [배경 사진 소스] URL을 열어 사진을 저장한다
> ② GPT(또는 이미지 편집 도구)에 그 사진을 **업로드**한다
> ③ 카드의 영문 프롬프트를 그대로 붙여 **글자만 얹는다**
> ★순수 생성(text-to-image)으로 배경을 만들지 않는다. 실사진 위에 오버레이만 한다.

## 세트색 (전 카드 동일)
**갯벌 물빛 슬레이트 블루그레이 `#3E5A6E`**
근거 — 히어로 사진(용산전망대에서 본 순천만)에 갈대의 따뜻한 색과 갯벌 물길의 차가운 청회색이 같이 있다.
갈대 쪽 색을 뽑으면 화면 전체가 주황으로 물들어 이미지 지침이 금지한 '앰버 워시'가 된다.
그래서 **물길 쪽 색**을 뽑았다. 목포 회차(`#1F5A5B` 딥틸)와도 구분된다.
포인트색은 핵심 숫자·라벨·얇은 구분선에만(15% 이하), 본문 글자는 고대비 딥차콜/크림.

## ★사진 소스 상황 — 정직히
한국관광공사 TourAPI(`areaCode=38` 전남 · `sigunguCode=11` 순천시)를 조회한 결과
**순천시 관광지 등재가 통틀어 7건**이고, **순천만국가정원·순천만습지 본체는 아예 등재돼 있지 않다**.
정식명칭·띄어쓰기 변형 6종과 타입 필터 해제 조회까지 했으나 0건이었다.
→ 오버레이가 가능한 **Type1은 `용산전망대` 한 장뿐**이다. 나머지 카드는 **소스 미확보**로 적고 찾는 방법을 남긴다.
　(Type3 = 공공누리 1유형 + **변경금지**. 글자를 얹으면 라이선스 위반이라 배경으로 쓸 수 없다. 원본 그대로는 본문에 넣어도 된다.)

---

## 이미지 1. 썸네일 · 1:1
[삽입 위치] 본문 맨 위 (썸네일문구 줄)
[배경 사진 소스] **Type1 확보** — 용산전망대 / 한국관광공사 포토코리아 / 공공누리 제1유형(변형 가능)
　http://tong.visitkorea.or.kr/cms/resource/17/3590517_image2_1.jpg
　contentid 228886 · `cpyrhtDivCd=Type1` · addr1 순천시 해룡면 순천만길 513-51
　검증상태 : **API 응답으로 확인 · 육안 미확인** — 운영자가 열어 ①내용이 전망대에서 본 갈대밭이 맞는지 ②사진 안 글자·간판 유무 ③관광공사 워터마크 위치를 볼 것
[카드 텍스트]
```
순천만국가정원
65세 무료인데, 돈 드는 게 있어요
```
[영문 프롬프트]
```
Edit the uploaded real photograph of the Suncheon Bay reed wetland seen from the observatory. Keep the scene EXACTLY as-is — do NOT repaint, redesign, regenerate, restyle or replace any part of the background. ONLY overlay the Korean text and the watermark. Place the headline on whichever area of the photo is naturally brightest and least busy; if no such area exists, place it across the lower third. Korean headline exactly: 순천만국가정원 / sub-tagline exactly: 65세 무료인데, 돈 드는 게 있어요
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. premium editorial magazine cover in the aesthetic of Kinfolk and Cereal, one continuous full-bleed natural-daylight photo as the hero, place one large high-contrast Korean headline DIRECTLY on clean negative space such as sky water wall road or softly blurred area with a soft drop shadow, that empty space must come from the photo composition itself, NO panel NO glass NO translucent layer NO text background box NO colored label box NO pill banner NO bottom strip, choose headline color by background brightness dark on light and light on dark never a low-contrast pastel headline, headline in clean refined Korean gothic with strong weight contrast not a brush or calligraphy font, the thumbnail stays purely a cover with only a short headline and an optional one-line tagline, no route numbers no bus numbers no information lists no icon rows no boxes, render the Korean headline exactly as written do not invent alter or add any text or numbers, ONE accent color pulled from the photo used only on tiny details — here the muted slate blue-grey #3E5A6E of the tidal channel, not orange not amber not gold, no pink, optionally one small handwritten sub-tagline and a tiny doodle in the accent color, no signs or place-name text inside the photo scene only the headline overlay, no text outline gradient or glow, clear natural daylight natural colors, small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```
★관광공사 사진은 우하단에 자체 워터마크가 있는 경우가 있다. 겹치면 우리 워터마크를 **좌하단**으로 옮긴다.

---

## 이미지 2. 교통 카드(가는 길) · 4:5
[삽입 위치] [이미지 삽입: 순천역 앞 버스 정류장]
[배경 사진 소스] **소스 미확보**
　찾는 법 — 포토코리아 https://phoko.visitkorea.or.kr/ 에서 `순천역` `순천 시내` `순천 버스` 검색.
　TourAPI에는 역·터미널·시내버스가 등재 대상이 아니라 0건이다(철원 회차에서 같은 결과를 확인).
　대안 : 순천시 문화관광 포털 사진자료실, 또는 글자·간판이 없는 일반 버스정류장 컷을 쓰고 캡션에 `예시 이미지` 명시.
[카드 텍스트]
```
순천역 → 순천만국가정원·순천만습지

66  한 번이면 둘 다 가요
첫차 06:05 · 막차 22:00 · 약 25분 간격
요금 카드 1,600원 · 현금 1,700원

내리는 곳
정원 → '순천만국가정원'
습지 → '순천만'

순천역 ↔ 종합버스터미널 도보 600m
둘 다 66번을 탈 수 있어요

놓치면 순천역 앞에서 택시 (버스·택시 둘 다 OK)
실시간 도착은 네이버지도
```
[영문 프롬프트]
```
Edit the uploaded real photograph of a Korean small-city street bus stop. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark, placed on the naturally brightest and least busy vertical side of the photo. The bus number 66 must be the largest element on the card; the fare numbers and the times carry small Korean labels and use the accent colour so they never read as bus numbers.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — the muted slate blue-grey #3E5A6E pulled from the tidal channel in the hero photo — keep it identical on every card, no pink no magenta, not orange not amber not gold, use the accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty such as open sky water pale road or softly blurred greenery, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, the empty space comes from the photo composition never from an added panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, keep each card minimal with only one or two numbers per line so the text stays accurate. WAYFINDING: the card works as a one-glance route instruction not a poster, very large bus numbers and station and stop names, after the final stop show the walking direction or a nearby landmark not only minutes, show the transfer action wait at the same stop or cross the street, add one short difficulty note flat or uphill, add one backup line if a rare bus is missed, keep any phone number near the top, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no speech-bubble panel, no card-news or SmartArt look. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors not a monochrome orange or amber wash, no sunset unless this is the CTA card, no signs banners place-names shop-names or station signs inside the photo, no real logos, no map UI, no exact landmark, all Korean text only as a clean overlay. Optionally one short handwritten script tagline plus one or two tiny doodles in the accent color, main info stays in clean gothic. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```
★**하차 후 도보 시간은 넣지 않았다** — 확보하지 못했다. 운영자가 네이버지도로 실측해 `하차 후 도보 N분` 한 줄을 이 카드에 추가하면 완성된다. 지어낸 분을 넣지 않는다.

---

## 이미지 3. 요일 함정 카드 · 4:5
[삽입 위치] [이미지 삽입: 순천문학관 외관]
[배경 사진 소스] **Type3 — 오버레이 불가**
　순천문학관 / contentid 2612813 / `cpyrhtDivCd=Type3`(공공누리 1유형 + **변경금지**)
　http://tong.visitkorea.or.kr/cms/resource/44/3370744_image2_1.JPG
　→ 이 사진은 **글자를 얹을 수 없다.** 원본 그대로 본문에 넣고, 이 카드의 배경은 따로 구해야 한다.
　찾는 법 — 포토코리아에서 `순천 한옥` `순천만 초가` 검색, 또는 소스 미확보 시 카드를 빼고 본문 라벨-값 줄로만 간다.
[카드 텍스트]
```
순천만습지, 월요일에 문 닫나요?

정원·습지 본체
매월 마지막 주 월요일 휴관

순천문학관
매주 월요일 휴관

올가을 본체 쉬는 날
10월 26일 · 11월 30일 · 12월 28일

평범한 월요일엔
문학관만 닫혀 있어요
```
[영문 프롬프트]
```
Edit the uploaded real photograph of a traditional Korean tiled-roof building in daylight. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark on the naturally brightest and least busy vertical side. The three closure dates are the visual anchor and carry the accent colour with a small Korean label so they never read as bus numbers.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — the muted slate blue-grey #3E5A6E — identical on every card, no pink no magenta, not orange not amber not gold, accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, the empty space comes from the photo composition never from an added panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, only one or two numbers per line. WAYFINDING: the card works as a one-glance instruction not a poster, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors not a monochrome orange or amber wash, no sunset, no signs banners place-names or shop-names inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 이미지 4. 운영시간·마감 카드 · 3:4
[삽입 위치] [이미지 삽입: 순천만습지 무진교]
[배경 사진 소스] **소스 미확보**
　찾는 법 — 포토코리아에서 `순천만` `무진교` `갈대숲 탐방로` 검색.
　TourAPI에는 `순천만 화포포구`(127327)가 있으나 **Type3라 오버레이 불가**이고 무진교도 아니다.
[카드 텍스트]
```
순천만습지 매표소가 먼저 닫혀요

순천만습지 (10월)
폐장 19:00 / 매표 마감 18:00

순천만국가정원
폐장 20:00 / 매표·입장 마감 19:00

탈것은 더 먼저 끊겨요
관람차 17:40 · 스카이큐브 18:00

야간권으로는
순천만습지 입장 불가

습지부터 보세요
```
[영문 프롬프트]
```
Edit the uploaded real photograph of a long wooden boardwalk crossing a reed wetland in clear daylight. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark on the naturally brightest and least busy vertical side. The two closing-time numbers 18:00 and 19:00 are the largest elements; every time carries a short Korean label so the reader can tell a ticket cutoff from a closing time.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — the muted slate blue-grey #3E5A6E — identical on every card, no pink no magenta, not orange not amber not gold, accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty such as open sky water or pale boardwalk, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, the empty space comes from the photo composition never from an added panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, only one or two numbers per line so the text stays accurate. WAYFINDING: this is an opening-hours card so show the closing time, the ticket-office cutoff, the last-entry rule and the ride shutdown as separate labelled lines with the cutoff largest, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors not a monochrome orange or amber wash, no sunset, no signs banners place-names or shop-names inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 이미지 5. 스카이큐브 카드 · 4:5
[삽입 위치] [이미지 삽입: 스카이큐브 궤도차]
[배경 사진 소스] **소스 미확보**
　찾는 법 — 포토코리아에서 `순천 스카이큐브` `순천만정원 모노레일` 검색. TourAPI 0건.
　못 구하면 이 카드는 사진 없이 **번호+글자만**으로 간다(이미지 지침 허용). 가짜 생성 배경으로 때우지 않는다.
[카드 텍스트]
```
스카이큐브, 아무나 못 타요

정원 입장객만 탑승 가능
정원에 안 들어가면 탈 수 없어요

국가정원역 ↔ 순천만역
4.6km · 15분

표는 정원 안 스카이큐브 역사에서

스카이큐브 탔으면
갈대열차 3,000원이 무료
```
[영문 프롬프트]
```
Edit the uploaded real photograph of a small driverless people-mover running above a green wetland landscape in clear daylight. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark on the naturally brightest and least busy vertical side. The line "정원 입장객만 탑승 가능" is the visual anchor of this card.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — the muted slate blue-grey #3E5A6E — identical on every card, no pink no magenta, not orange not amber not gold, accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, the empty space comes from the photo composition never from an added panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, only one or two numbers per line. WAYFINDING: the card works as a one-glance instruction not a poster, state the boarding restriction first and where the ticket is sold, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors not a monochrome orange or amber wash, no sunset, no signs banners place-names or shop-names inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 이미지 6. 요금 카드 · 3:4
[삽입 위치] [이미지 삽입: 국가정원 관람차]
[배경 사진 소스] **소스 미확보**
　찾는 법 — 포토코리아에서 `순천만국가정원` `순천 정원` 검색(TourAPI에는 국가정원 자체가 미등재).
[카드 텍스트]
```
65세 무료, 그런데 공짜가 아니에요

입장료 (공식 요금표)
성인 19~64세 10,000원
청소년·군인 13~18세 7,000원
어린이 7~12세 5,000원
65세 이상 무료

★입장은 무료여도 탈것은 따로
관람차 3,000원 (65세도 같은 값)
정원드림호 10,000원
갈대열차 3,000원

지갑은 꼭 챙기세요
```
[영문 프롬프트]
```
Edit the uploaded real photograph of a garden ferris-wheel or garden ride under clear daylight. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark on the naturally brightest and least busy vertical side. Every price carries a short Korean label naming who pays it, and the age ranges stay attached to their price so a reader cannot mix them up.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — the muted slate blue-grey #3E5A6E — identical on every card, no pink no magenta, not orange not amber not gold, accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, the empty space comes from the photo composition never from an added panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, keep one price per line so the text stays accurate. WAYFINDING: this is a price card so every number needs its own Korean label and none of them may look like a bus number, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors not a monochrome orange or amber wash, no sunset, no signs banners place-names or shop-names inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 이미지 7. 맛집 카드 · 4:5
[삽입 위치] [이미지 삽입: 순천 꼬막정식 상차림]
[배경 사진 소스] **소스 미확보**
　찾는 법 — 포토코리아에서 `꼬막정식` `전남 남도한상` 검색. TourAPI 맛집(contenttypeid=39)은 사진이 거의 없다.
　특정 매장 사진이 아닌 일반 컷을 쓰면 캡션에 `예시 이미지` 명시 필수.
[카드 텍스트]
```
순천, 걸어서 가는 밥집

순천만정문식당 · 꼬막정식 17,000원
습지 인근 · 08:30~21:00 · 주문 마감 20:00

만석국밥집 · 돼지국밥 8,000원대
순천역 도보 3분 · 07:00~23:00 연중무휴

이레돈까스 · 등심돈까스 10,000원대
순천역 앞 · 일요일 휴무

만대재 한옥카페 · 쑥크림 7,000원
습지 인근 · 11:00~21:00 · 실내 넓어요
```
[영문 프롬프트]
```
Edit the uploaded real photograph of a Korean set-menu table with many small side dishes in clear daylight. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark on the naturally brightest and least busy vertical side. Each shop name sits above its dish and price, and the walking access line stays attached to the shop it belongs to.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — the muted slate blue-grey #3E5A6E — identical on every card, no pink no magenta, not orange not amber not gold, accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty such as a pale table surface, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, the empty space comes from the photo composition never from an added panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, only one or two numbers per line. WAYFINDING: this is a restaurant card so each entry shows the shop name, the signature dish, the price, how far it is on foot and the opening hours, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look. PHOTO: premium editorial food-travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors not a monochrome orange or amber wash, no sunset, no signs banners place-names or shop-names inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 이미지 8. 무장애·쉬는 자리 카드 · 4:5
[삽입 위치] [이미지 삽입: 무진교 평지 데크길]
[배경 사진 소스] **소스 미확보**
　찾는 법 — 포토코리아에서 `순천만 갈대숲 탐방로` `무진교` 검색.
[카드 텍스트]
```
걷기 힘들면 어디까지만 봐도 되나요

평지 구간
무진교 ~ 갈대숲 데크길
휠체어·유모차 다녀요

★용산전망대는 계단이 많아요
평지 구간과 다릅니다

전망대까지 안 올라가도
무진교에서 보는 갈대밭이 본론이에요

쉬는 자리
습지 만대재 실내 · 정원 안 카페
화장실은 입구와 동선마다
```
[영문 프롬프트]
```
Edit the uploaded real photograph of a flat wooden boardwalk through tall reeds in clear daylight. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark on the naturally brightest and least busy vertical side. The contrast between the flat boardwalk section and the stair-heavy observatory is the point of this card, so those two lines sit closest together.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — the muted slate blue-grey #3E5A6E — identical on every card, no pink no magenta, not orange not amber not gold, accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, the empty space comes from the photo composition never from an added panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers. WAYFINDING: this is an accessibility card so it states which stretch is flat, which is stairs, where the seats and indoor shelter are and where the toilets are, add one short difficulty note flat or uphill, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors not a monochrome orange or amber wash, no sunset, no signs banners place-names or shop-names inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 이미지 9. 코스 요약 카드(타임라인) · 3:4
[삽입 위치] [이미지 삽입: 순천만 하루 코스 요약]
[배경 사진 소스] **작은 사진 4장 미확보** → 이미지 지침대로 **사진 없이 번호+글자만**으로 간다.
　Type1이 용산전망대 한 장뿐이라 타임라인용 실사진 4컷을 채울 수 없다. AI 생성 컷은 쓰지 않는다.
[카드 텍스트]
```
순천만 하루, 이렇게 도세요

① 09:00 순천만국가정원 입장
　　정원 관람 3시간
　↓ 점심 1시간
② 13:00 스카이큐브 (15분)
③ 13:15 순천만습지 도착
　　갈대숲·무진교 1시간 30분
④ 14:45 마무리

전체 소요 약 6시간
1인 비용  65세 0원 / 성인 10,000원
★마감  습지 매표 18:00 · 관람차 17:40

반나절만 : 습지 하나만 보고 와도 충분해요
```
[영문 프롬프트]
```
Create a clean vertical timeline card with NO background photograph — plain editorial layout on a soft neutral off-white ground. Four numbered stops running top to bottom with the time, the place name and how long to stay, and between the stops the mode of travel and its duration. A three-cell summary strip at the bottom shows total time, cost per person with the over-65 figure beside it, and the closing cutoffs.
ACCENT COLOR: the muted slate blue-grey #3E5A6E used only on the step numbers, the cutoff times and the thin dividers, about 15 percent of the card, not orange not amber not gold, no pink. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on the light ground, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, only one or two numbers per line so the text stays accurate. The closing-time cell must be as prominent as the total-time cell. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look, no photographs and no illustrated scenery. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```
★검산 — 09:00 +정원 3시간 = 12:00, +점심 1시간 = 13:00, +스카이큐브 15분 = 13:15, +습지 1시간 30분 = 14:45.
　본문 "15시 무렵 마무리"와 맞는다. 스카이큐브 13:15 탑승은 마감 18:00 전, 습지 13:15 입장은 매표 마감 18:00 전.

---

## 이미지 10. CTA · 16:9
[삽입 위치] [메인 CTA] 바로 위
[배경 사진 소스] **Type1 확보** — 용산전망대 (썸네일과 같은 사진, 다른 크롭)
　http://tong.visitkorea.or.kr/cms/resource/17/3590517_image2_1.jpg · contentid 228886 · Type1
　★CTA 1장에 한해 노을 톤 허용(이미지 지침 §2).
[카드 텍스트]
```
공감 💗 + 이웃추가
뚜벅이 당일치기 코스 꾸준히 올려요
```
[영문 프롬프트]
```
Edit the uploaded real photograph of the Suncheon Bay reed wetland seen from the observatory, cropped to a wide 16:9 frame. Keep the scene EXACTLY as-is — do NOT repaint, redesign, regenerate, restyle or replace any part of the background. ONLY overlay the Korean text and the watermark. Place the two short lines on whichever area of the photo is naturally brightest and least busy; if no such area exists, place them across the lower third.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. This is the one card in the set where warm late-afternoon light is allowed if the uploaded photo already has it — do not add it if the photo does not. ACCENT COLOR: the muted slate blue-grey #3E5A6E on tiny details only, not orange not amber not gold as a wash, no pink. LAYOUT: one continuous full-bleed photo fills the entire frame, place the Korean text DIRECTLY on a naturally bright quiet area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO bottom strip or top band, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic, dark text on light areas and cream text on dark areas, no text outline gradient or glow, render every Korean character exactly as written do not invent alter or add any text, keep it to the two short lines only with no information list and no icon row. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, photorealistic DSLR, natural colors, no signs banners place-names or station signs inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 점검
- 영역1 이미지 삽입 포인트 **8개** + 썸네일 + CTA = **10장**, 이름·개수 1:1 ✅
- 세트색 1개(`#3E5A6E`)로 전 카드 통일 · 앰버/주황 아님 ✅
- 패널·글래스·하단 띠·반 가르기 전부 금지 문구 포함 ✅
- 운영시간 카드(이미지 4)에 폐장·매표 마감·탈것 종료를 각각 ✅
- 코스 요약 카드(이미지 9)에 **마감 시각 칸** 있음 ✅ · 65세 비용 병기 ✅
- 사진 안 글자 0 · 워터마크 우하단 ✅
- ★**실배경 사진 소스가 붙은 카드는 3장(1·9는 사진 없음 포함해 2장이 Type1)** — 나머지 6장은 **소스 미확보 + 찾는 방법**으로 정직히 표기 ✅
- ★**하차 후 도보 분이 교통 카드에 없다** — 확보 못 해 비워 뒀다. 운영자가 채운다 ✅
