# 영역2 — 이미지 지시서 · 2026 여수밤바다 불꽃축제 (발행예정 2026-10-24)

> **쓰는 법 3줄**
> ① 아래 [배경 사진 소스] URL을 열어 사진을 저장 → ② GPT에 **업로드** → ③ 카드의 영문 프롬프트로 **글자만 얹기**
> ★순수 생성(text-to-image)으로 배경을 만들지 않는다.

## 세트색 (전 카드 동일)
**동백 레드 `#A63A3A`**
근거 — 여수 시화가 동백이고 오동도 동백이 이 지역의 색이다. 불꽃의 따뜻함과도 이어진다.
직전 두 회차(목포 딥틸 `#1F5A5B` · 순천 슬레이트 블루그레이 `#3E5A6E`)가 모두 한류 계열이라 구분된다.
★앰버·골드·주황이 아니다. 포인트색은 핵심 숫자·라벨·얇은 구분선에만(15% 이하), 본문 글자는 고대비 딥차콜/크림.

## ★사진 소스 상황 — 정직히
TourAPI 조회 결과 **여수세계박람회장(올해 행사장)이 미등재**다. `종포해양공원`·`하멜등대`도 0건.
`이순신광장`은 나오지만 **Type3(변경금지)**이고 **올해 행사장이 아니다**.
그리고 **불꽃 장면 사진은 공공누리로 구할 수 없다** — 포토코리아에 여수 불꽃축제 컷이 없다.

→ 오버레이 가능한 Type1은 지난 여수 회차(2026-09-13)에서 확보한 **진남관 10장 · 돌산공원 4장**뿐이다.
　 그중 **돌산공원은 여수 밤바다 조망 명소**라 '어디서 봐야 잘 보이나' 카드에 실제 연관성이 있다.
→ 나머지는 **소스 미확보**로 적고 찾는 검색어를 남긴다. 가짜 생성 배경으로 때우지 않는다.

---

## 이미지 1. 썸네일 · 1:1
[삽입 위치] 본문 맨 위(썸네일문구 줄)
[배경 사진 소스] **Type1 확보** — 돌산공원 / 한국관광공사 포토코리아 / 공공누리 제1유형(변형 가능)
　https://tong.visitkorea.or.kr/cms/resource/55/3534455_image2_1.jpg (contentid 128755 · ds1)
　검증상태 : **API 응답으로 확인 · 육안 미확인** — 운영자가 열어 ①바다 조망이 맞는지 ②사진 안 글자·간판 유무 ③워터마크 위치 확인
[카드 텍스트]
```
여수 불꽃축제
올해는 장소가 다릅니다
```
[영문 프롬프트]
```
Edit the uploaded real photograph of the Yeosu harbour seen from Dolsan Park. Keep the scene EXACTLY as-is — do NOT repaint, redesign, regenerate, restyle or replace any part of the background. ONLY overlay the Korean text and the watermark. Place the headline on whichever area of the photo is naturally brightest and least busy; if no such area exists, place it across the lower third. Korean headline exactly: 여수 불꽃축제 / sub-tagline exactly: 올해는 장소가 다릅니다
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. premium editorial magazine cover in the aesthetic of Kinfolk and Cereal, one continuous full-bleed natural-daylight photo as the hero, place one large high-contrast Korean headline DIRECTLY on clean negative space such as sky water wall road or softly blurred area with a soft drop shadow, that empty space must come from the photo composition itself, NO panel NO glass NO translucent layer NO text background box NO colored label box NO pill banner NO bottom strip, choose headline color by background brightness dark on light and light on dark never a low-contrast pastel headline, headline in clean refined Korean gothic with strong weight contrast not a brush or calligraphy font, the thumbnail stays purely a cover with only a short headline and an optional one-line tagline, no route numbers no bus numbers no information lists no icon rows no boxes, render the Korean headline exactly as written do not invent alter or add any text or numbers, ONE accent color pulled from the photo used only on tiny details — here a deep camellia red #A63A3A — not orange not amber not gold, no pink, optionally one small handwritten sub-tagline and a tiny doodle in the accent color, no signs or place-name text inside the photo scene only the headline overlay, no text outline gradient or glow, clear natural daylight natural colors, small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 이미지 2. 장소 변경 카드 · 4:5  ★이 글의 핵심 카드
[삽입 위치] [이미지 삽입: 여수세계박람회장 전경]
[배경 사진 소스] **소스 미확보**
　찾는 법 — 포토코리아 https://phoko.visitkorea.or.kr/ 에서 `여수세계박람회장` `여수엑스포` `엑스포해양공원` 검색.
　TourAPI(`areaCode=38`·`sigunguCode=13`)에는 **0건**이다.
　대안 : 2026여수세계섬박람회 공식 홈(yeosu2026.or.kr)의 보도자료용 사진 — 사용 허가 확인 필요.
[카드 텍스트]
```
올해는 이순신광장이 아니에요

2026년 10월 31일 (토)
여수세계박람회장 일원

작년 2025년은 이순신광장이었어요
2024년은 박람회장이었고요

★장소가 해마다 오갑니다
다녀온 분 후기 말고
그해 여수시 안내를 보세요
```
[영문 프롬프트]
```
Edit the uploaded real photograph of the Yeosu Expo waterfront in clear daylight. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark on the naturally brightest and least busy vertical side. The line "올해는 이순신광장이 아니에요" is the single visual anchor; the year numbers carry short Korean labels so a reader cannot mistake one year's venue for another.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — a deep camellia red #A63A3A — identical on every card, no pink no magenta, not orange not amber not gold, accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty such as open sky water or pale pavement, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, the empty space comes from the photo composition never from an added panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, only one or two numbers per line so the text stays accurate. WAYFINDING: the card works as a one-glance correction not a poster, the venue change is stated first and the years are labelled, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors not a monochrome orange or amber wash, no sunset, no signs banners place-names shop-names or station signs inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 이미지 3. 교통 카드 · 4:5
[삽입 위치] [이미지 삽입: 여수엑스포역 앞 전경]
[배경 사진 소스] **소스 미확보**
　찾는 법 — 포토코리아에서 `여수엑스포역` `여수 기차역` 검색. TourAPI는 역·터미널을 등재하지 않는다(철원·순천 회차에서 확인).
[카드 텍스트]
```
여수엑스포역에서 도보 5분

역 앞 횡단보도 건너 직진
→ 박람회장 3문

여수엑스포역은 전라선 종착역이에요
서울 용산에서 약 4시간 40분
하루 4회뿐 · 자리가 금방 차요

★여수종합버스터미널은 다른 권역이에요
오림동에 있어 도보로는 못 가요

요금과 그날 시각은 코레일톡에
```
[영문 프롬프트]
```
Edit the uploaded real photograph of a Korean regional railway station forecourt in clear daylight. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark on the naturally brightest and least busy vertical side. "도보 5분" is the largest element; the warning that the intercity bus terminal is a different district sits directly under it because that is the mistake this card exists to prevent.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — a deep camellia red #A63A3A — identical on every card, no pink no magenta, not orange not amber not gold, accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, the empty space comes from the photo composition never from an added panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, only one or two numbers per line. WAYFINDING: the card works as a one-glance route instruction not a poster, show the walking direction and the gate name after the station, add one short difficulty note flat or uphill, add one backup line, keep any phone number near the top, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors not a monochrome orange or amber wash, no sunset, no signs banners place-names shop-names or station signs inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```
★**하차 후 도보 분은 확보했다**(역 앞 도보 약 5분, B등급). 다만 **여수종합버스터미널→행사장 노선은 미확보**라 이 카드에 넣지 않았다.

---

## 이미지 4. 돈 카드 · 4:5
[삽입 위치] [이미지 삽입: 2026 여수세계섬박람회 입구]
[배경 사진 소스] **소스 미확보**
　찾는 법 — 포토코리아에서 `여수 엑스포` `박람회장` 검색. 못 구하면 이 카드는 사진 없이 번호+글자만으로.
[카드 텍스트]
```
돈이 얼마나 드나요

불꽃축제 자체는 무료예요
유료 관람석 신설 발표 없어요

★그런데 아직 확정 안 된 게 있어요
10월 31일은 섬박람회 기간이라
박람회장 안에 들어가려면
입장권이 필요할 수 있어요

필요하면 성인 15,000원
사전예매 12,000원
청소년 9,000원 · 어린이 6,000원

표를 미리 사기 전에
여수시 발표를 한 번 보세요
```
[영문 프롬프트]
```
Edit the uploaded real photograph of an exposition ground entrance plaza in clear daylight. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark on the naturally brightest and least busy vertical side. The uncertainty line comes before the prices so a reader never reads the prices as a settled requirement; every price carries a short Korean label naming who pays it.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — a deep camellia red #A63A3A — identical on every card, no pink no magenta, not orange not amber not gold, accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, keep one price per line so the text stays accurate. WAYFINDING: this is a price card so every number needs its own Korean label and none of them may look like a bus number, and the not-yet-confirmed note must read before the prices, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors not a monochrome orange or amber wash, no sunset, no signs banners place-names or shop-names inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 이미지 5. 보는 자리 카드 · 4:5
[삽입 위치] [이미지 삽입: 오동도 전경]
[배경 사진 소스] **Type3 — 오버레이 불가**
　오동도 계열 3건이 전부 Type3(공공누리 1유형 + 변경금지)로 확인됐다(2026-09-13 여수 회차 기록).
　→ **대체 배경으로 돌산공원 Type1을 쓴다** : https://tong.visitkorea.or.kr/cms/resource/56/3534456_image2_1.jpg (ds2)
　　 돌산공원은 실제로 여수 밤바다 조망 명소라 이 카드 주제와 맞는다.
[카드 텍스트]
```
어디서 봐야 잘 보이나요

공식 좌석이 없어요
돗자리나 접이식 의자를 가져가세요

박람회장 건너편 쪽이
사람이 덜 몰릴 수 있어요
오동도 · 돌산공원 · 자산공원

오동도는 엑스포역에서
걸으면 30분, 7번 버스면 15분

★불꽃 끝까지 안 보고
일찍 나와도 괜찮아요
```
[영문 프롬프트]
```
Edit the uploaded real photograph of the Yeosu harbour and bridge seen from a hilltop park in clear daylight. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark on the naturally brightest and least busy vertical side. The bus number 7 is the only number that may be rendered large; the walking and riding minutes carry short Korean labels so they never read as bus numbers.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — a deep camellia red #A63A3A — identical on every card, no pink no magenta, not orange not amber not gold, accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty such as open sky or water, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, only one or two numbers per line. WAYFINDING: the card works as a one-glance instruction not a poster, name the viewing spots and how to reach one of them, add one short difficulty note, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors not a monochrome orange or amber wash, no sunset, no signs banners place-names or shop-names inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 이미지 6. 시각·귀가 카드 · 3:4  ★이 글에서 가장 조심해야 할 카드
[삽입 위치] [이미지 삽입: 여수 밤바다 불꽃 장면]
[배경 사진 소스] ★**소스 미확보 — 그리고 구할 수 없다**
　한국관광공사 포토코리아에 **여수 불꽃축제 사진이 등재돼 있지 않다.** TourAPI 0건.
　언론 보도사진은 재사용 허가가 필요해 **쓸 수 없다**(이미지 지침 §0 금지 항목).
　→ **이 카드는 사진 없이 글자만으로 간다.** 불꽃 사진을 AI로 만들어 붙이지 않는다.
[카드 텍스트]
```
몇 시에 하고, 어떻게 돌아오나요

올해 시각은 아직 발표 전이에요

예년에는 두 해 모두
저녁 8시에 불꽃이 시작해
35분쯤 이어졌어요
(2026년은 확정 아님)

★귀가는 이렇게 준비하세요
1. 시각이 나오면 기차표부터
2. 1박을 미리 생각해 두기
3. 늦으면 역·터미널 앞 택시

10월 31일은 토요일이에요
```
[영문 프롬프트]
```
Create a clean vertical information card with NO background photograph — plain editorial layout on a soft neutral off-white ground. The heading states that this year's time is not yet announced; below it a short labelled block gives the two past years' start time as a reference with an explicit not-confirmed note; below that a numbered three-step block on how to prepare the trip home.
ACCENT COLOR: a deep camellia red #A63A3A used only on the step numbers, the reference time and the thin dividers, about 15 percent of the card, not orange not amber not gold, no pink. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on the light ground, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, only one or two numbers per line so the text stays accurate. The not-yet-announced line must be more prominent than the reference time so no reader takes the reference as this year's schedule. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look, no photographs and no illustrated fireworks. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```
★**불꽃 그림을 그려 넣지 않는다.** 일러스트 불꽃을 얹으면 독자가 실사진으로 오인한다.

---

## 이미지 7. 맛집 카드 · 4:5
[삽입 위치] [이미지 삽입: 고향민속식당 갈치조림정식]
[배경 사진 소스] **소스 미확보**
　찾는 법 — 포토코리아에서 `갈치조림` `남도 한상` 검색. 특정 매장 컷이 아니면 캡션에 `예시 이미지` 명시 필수.
[카드 텍스트]
```
행사 전에 먹고 가세요

고향민속식당
갈치조림정식 40,000원
갓고등어조림정식 38,000원
바지락탕 10,000원 · 된장찌개 9,000원
08:00~21:00 연중무휴 · 공화동

여진식당
게장백반 15,000원
월~토 10:00~20:00 (16~17시는 쉬어요)
일요일 휴무 · 061-685-7999

★행사 당일 저녁은 줄이 길어요
```
[영문 프롬프트]
```
Edit the uploaded real photograph of a Korean braised-fish set meal with many side dishes in clear daylight. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark on the naturally brightest and least busy vertical side. Each shop name sits above its dish and price, and the opening hours stay attached to the shop they belong to.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — a deep camellia red #A63A3A — identical on every card, no pink no magenta, not orange not amber not gold, accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty such as a pale table surface, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, only one or two numbers per line. WAYFINDING: this is a restaurant card so each entry shows the shop name, the signature dish, the price and the opening hours, keep the phone number near its own shop, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look. PHOTO: premium editorial food-travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors not a monochrome orange or amber wash, no sunset, no signs banners place-names or shop-names inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 이미지 8. 카페 카드 · 4:5
[삽입 위치] [이미지 삽입: 여진식당 게장백반]
[배경 사진 소스] **소스 미확보** — `게장백반` `간장게장` 검색
[카드 텍스트]
```
박람회장 안 카페는 주의하세요

카페아에 여수엑스포점
아메리카노 4,000원
메로나라떼 5,500원
10:00~18:00 · 주문 마감 17:30
월요일 휴무

★박람회 단지 안(B동 국제관 1층)이라
입장권이 필요할 수 있어요

들어가기 전에 확인하고 움직이세요
```
[영문 프롬프트]
```
Edit the uploaded real photograph of a Korean soy-marinated crab set meal or a bright cafe counter in clear daylight. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark on the naturally brightest and least busy vertical side. The warning that this cafe sits inside the exposition grounds is the point of the card and must read as prominently as the prices.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — a deep camellia red #A63A3A — identical on every card, no pink no magenta, not orange not amber not gold, accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, only one or two numbers per line. WAYFINDING: name the shop, its prices and hours, and state plainly that it sits inside a ticketed area, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look. PHOTO: premium editorial food-travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors, no sunset, no signs banners place-names or shop-names inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 이미지 9. 무장애 카드 · 4:5
[삽입 위치] [이미지 삽입: 박람회장 평지 산책로]
[배경 사진 소스] **소스 미확보** — `여수 엑스포 해양공원` `여수 바닷가 산책로` 검색
　★삽입 포인트 이름을 `휠체어 대여소 안내판`에서 바꿨다 — **사진 안에 글자가 들어가면 안 되는데 '안내판'은 글자 그 자체**라 규칙 위반이 된다.
[카드 텍스트]
```
걷기 힘들면 어떤가요

박람회장은 평지예요

휠체어·보행보조기 무료로 빌려줘요
장애인 화장실 10곳 · 경사로 있어요

응급 협력병원 4곳이 지정돼 있어요
여수전남병원 응급실 061-640-7118

★공식 좌석이 없으니
접이식 의자를 챙기면 편해요
```
[영문 프롬프트]
```
Edit the uploaded real photograph of a flat seaside promenade in clear daylight. Keep the scene EXACTLY as-is — do NOT repaint, regenerate or restyle the background. ONLY overlay the Korean text and the watermark on the naturally brightest and least busy vertical side. The phone number sits near the top of the text block; the free wheelchair loan is the line a reader should catch first.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set — a deep camellia red #A63A3A — identical on every card, no pink no magenta, not orange not amber not gold, accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers. WAYFINDING: this is an accessibility card so it states that the ground is flat, what equipment is lent, how many accessible toilets there are and which hospital to call, keep the phone number near the top, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no card-news or SmartArt look. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors, no sunset, no signs banners place-names or shop-names inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 이미지 10. CTA · 16:9
[삽입 위치] [메인 CTA] 바로 위
[배경 사진 소스] **Type1 확보** — 돌산공원 (썸네일과 다른 컷)
　https://tong.visitkorea.or.kr/cms/resource/57/3534457_image2_1.jpg (contentid 128755 · ds3)
　★CTA 1장에 한해 노을 톤 허용(이미지 지침 §2) — 단 업로드 사진에 이미 노을이 있을 때만.
[카드 텍스트]
```
공감 💗 + 이웃추가
뚜벅이 당일치기 코스 꾸준히 올려요
```
[영문 프롬프트]
```
Edit the uploaded real photograph of the Yeosu harbour seen from Dolsan Park, cropped to a wide 16:9 frame. Keep the scene EXACTLY as-is — do NOT repaint, redesign, regenerate, restyle or replace any part of the background. ONLY overlay the Korean text and the watermark. Place the two short lines on whichever area of the photo is naturally brightest and least busy; if no such area exists, place them across the lower third.
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. This is the one card in the set where warm late-afternoon light is allowed if the uploaded photo already has it — do not add it if the photo does not. ACCENT COLOR: a deep camellia red #A63A3A on tiny details only, not orange not amber not gold as a wash, no pink. LAYOUT: one continuous full-bleed photo fills the entire frame, place the Korean text DIRECTLY on a naturally bright quiet area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO bottom strip or top band, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic, dark text on light areas and cream text on dark areas, no text outline gradient or glow, render every Korean character exactly as written do not invent alter or add any text, keep it to the two short lines only with no information list and no icon row. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, photorealistic DSLR, natural colors, no signs banners place-names or station signs inside the photo, no real logos, no map UI, all Korean text only as a clean overlay. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## 점검
- 영역1 이미지 삽입 포인트 **8개** + 썸네일 + CTA = **10장**, 이름·개수 1:1 ✅
- 세트색 1개(`#A63A3A` 동백 레드)로 전 카드 통일 · 앰버/주황 아님 · 직전 두 회차와 구분됨 ✅
- 패널·글래스·하단 띠·반 가르기 금지 문구 전 카드 포함 ✅
- 교통 카드에 **하차 후 도보(역 앞 5분)** 있음 ✅ / 터미널이 다른 권역이라는 경고 있음 ✅
- 시각 카드에 **"올해 확정 아님"이 참고 시각보다 크게** 지시됨 ✅
- 사진 안 글자 0 · 워터마크 우하단 ✅
- ★실배경 소스가 붙은 카드 **3장**(1·5·10, 전부 돌산공원 Type1) — 나머지 7장은 **소스 미확보 + 찾는 방법** ✅
- ★**이미지 6(불꽃 장면)은 사진을 구할 수 없다** — 공공누리에 없고 보도사진은 쓸 수 없다. **글자만으로 간다** ✅
- ★**육안 미확인** — 돌산공원 4장도 열어 보지 못했다 ✅
