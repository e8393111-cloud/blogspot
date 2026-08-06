# witchbloom82 이미지 지침 (통합본) — 영역2 산출 기준

> 사용자 슬림본 + **실배경 사진 참조링크** 규칙을 합친 단일 기준.
> ★변경점 2가지: ①**글래스/반투명 패널 완전 삭제**(패널은 어떤 형태도 금지) ②**카드마다 실제 배경 사진 소스(참조링크) 필수**.

---

## ■ 0. 배경 사진 = 실사진 (참조링크 필수) ★이 지침의 1순위

순수 text-to-image로 "비슷하게 생성"하면 **AI가 상상한 인위적 배경**이 나온다(실사 아님).
그래서 **실제 그 장소의 진짜 사진을 배경 원본으로 두고 그 위에 글자만 얹는다.**

**카드마다 아래를 반드시 함께 준다.**
```
[배경 사진 소스] URL 또는 검색 경로 / 출처기관 / 라이선스 / 저작자표기 필요여부 / 검증상태
```

**소스 우선순위**
1. **한국관광공사 포토코리아** https://phoko.visitkorea.or.kr/ ← 1순위
   관광 전문 사진 + **공공누리 1유형이면 출처 표기만으로 자유 사용**
2. **지자체 관광 공식**(○○시 문화관광 포털)
3. **대한민국구석구석** https://korean.visitkorea.or.kr/
4. 업체·기관 공식 홈페이지
5. 위키미디어 공용 — **최후 수단**(일반인 스냅샷이라 관광지 느낌이 약함)

**금지·주의**
- ★**언론사 보도사진 금지**(재사용 허가 필요). 불가피하면 "허가 필요" 표기 + 공공누리 대안 병기.
- ★URL을 **지어내지 않는다.** 못 찾은 카드는 **"소스 미확보"**로 정직히 쓰고, **어떤 검색어로 어디서 찾으면 되는지**를 적는다. 가짜 생성 배경으로 때우지 않는다.
- 세션에서 링크를 직접 열 수 없으면 **"미검증(직접 열람 불가)"**을 표기한다.
- 특정 매장 사진이 아닌 일반 컷을 쓸 땐 캡션에 **"예시 이미지"** 명시.

**사용법 3줄을 영역2 맨 앞에 병기**
> ①배경 사진 URL을 열어 저장 → ②GPT에 업로드 → ③아래 프롬프트로 **글자만 얹기**

프롬프트는 **편집 지시** 형태로:
`edit the uploaded real photograph; keep the scene EXACTLY as-is, do NOT repaint or regenerate the background; ONLY overlay the Korean text (and watermark)`

---

## ■ 1. 핵심 (이 5개 안 지켜지면 실패)
1) **사진이 주인공** — 풀배경(full-bleed) 자연광 사진 위에 글씨를 얹는다. 사진을 잘라 단색 정보면을 만들지 않는다.
2) **글씨는 좌/우 세로 한쪽** — 사진의 **밝은 여백 쪽에 직접** 얹는다(부드러운 드롭섀도로 가독성 확보).
   ★**패널은 어떤 형태도 금지** — 반투명 유리·글래스모피즘·불투명 박스·뽀얀 흰 카드·둥근 스티커·상하단 정보 띠 전부 금지.
   **빈 공간은 패널로 만드는 게 아니라 사진 구도로 만든다**(하늘·물·노면·흐린 초록을 크게 잡기).
   정보 구분이 필요하면 얇은 구분선까지만.
3) **큰 글씨·높은 대비** — 확대 없이 한눈에. 깔끔한 모던 고딕, 큰 헤드라인+굵기 대비로 위계. 시선 착지점 1개(헤드라인/핵심 숫자). 정보 많으면 글씨 줄이지 말고 세로로 더 길게(4:5→3:4·9:16).
4) **세트 색 1개 고정** — 한 글의 모든 카드가 같은 포인트색. 썸네일 사진에서 한 색을 뽑고 나머지 카드도 그 색으로 통일. 카드마다 다시 뽑아 색이 튀면 안 됨. 포인트색은 핵심 숫자·라벨·구분선·손글씨에만(15%↓), 본문 글씨는 사진과 어울리는 깊고 대비 강한 색.
   ★**앰버/골드/주황을 기본값으로 삼지 않는다.** 글감의 히어로 사진에서 실제 색을 뽑는다(연잎 그린·스톤 딥블루·딥레드·세이지·쿨 그레이블루 등).
5) **카드만 보고 혼자 따라가기** — 이미지는 예쁜 포스터가 아니라 **길 안내판**. 직접 가는 당사자가 카드 한 장 보고 다음 행동이 안 나오면 실패. 사실·길찾기가 미감보다 먼저.

---

## ■ 2. 사진
- 그 장소·계절의 실제 분위기, 자연광, 로컬 생활감(거리·물·골목·산책길·시장·카페). 얕은 심도. 사람은 뒷모습·손·실루엣만.
- ★**사진 안엔 글자 0** — 간판·현판·배너·상호·지명·역명판, 한글·영문 모두 금지. 모든 텍스트는 오버레이로만.
- ★**조명은 자연광 기본** — 맑은 낮·부드러운 오전광. **노을/석양은 CTA 1장에만**(글감이 실제 노을이 아니라면). 매 카드가 주황빛이면 촌스럽다.
- 금지: 지도·공식 로고·정확한 랜드마크 재현·만화풍·얼굴 클로즈업. 프롬프트에 'split/divided/two scenes/분할' 쓰지 않기. **한 카드 = 한 장면.**

---

## ■ 3. 타이포·색·아이콘
- 서체: 본문·정보·숫자·헤드라인 = 깔끔한 **모던 고딕**(또렷한 산세리프; 싸구려 기본 고딕·붓글씨 금지). 손글씨는 짧은 태그라인 한 줄 + 작은 도들 1~2개에만 — 본문 정보엔 금지.
- 색: 밝은 배경엔 어두운 글씨, 어두운 배경엔 크림 글씨. 비비드·너무 연한 글씨 금지. 글자 그라데이션·외곽선·글로우·그림자강조·네온·형광·전단지풍 금지(가독용 soft drop shadow는 허용).
- 아이콘: 은은하게만 — 연한 뉴트럴 원 + 가는 픽토그램. 채도 높은 컬러 원·꽉 찬 클립아트·알약 라벨 금지. **아이콘 배지·이모지 배지·점선 구분선 금지.** 위계는 큰 글씨·숫자·여백이 만든다.
- 참고 팔레트(사진과 맞을 때만): 코랄핑크·버터옐로·민트·라벤더·페리윙클·피치·스카이블루·소프트틸·더스티로즈·살구·웜오렌지·딥그린·쿨스톤그레이블루.

---

## ■ 4. 카드 내용 = 길찾기 (실속)
**카드 구성**: ★영역1의 이미지 삽입 포인트 수만큼 생성(개수 고정 아님, **이름·개수 1:1**).
**비율**: 썸네일 1:1 / 정보·시간표·대중교통·운영·무장애·예산 4:5(정보 많으면 3:4·9:16) / **코스 요약 4:5 또는 3:4** / 짐싸기 9:16 / CTA 16:9.

**출력 형식**
```
이미지 N. 카드명 · 비율
[삽입 위치] [이미지 N 삽입: 카드명]
[배경 사진 소스] URL/검색경로 · 출처 · 라이선스 · 검증상태
[카드 텍스트] (본문 시간표·가격·주의 반영)
[영문 프롬프트] 완성형 — 축약 금지
```

**대중교통 카드 = 길 안내판**: 버스번호가 가장 크게·먼저.
①출발역·출구 ②첫 버스 ③환승 정류장+동작(같은 정류장 대기/길 건너) ④다음 버스 ⑤하차 정류장 ⑥하차 후 방향/랜드마크 ⑦도보 시간+난이도(평지/오르막) ⑧실시간(**네이버지도**)·플랜B. 오는 길 카드엔 ⑨**막차** 한 줄 필수.
- ★버스번호가 아닌 숫자(게이트·출구·요금)는 라벨을 붙이고 버스번호와 다른 색으로.
- '도보 N분'만 쓰지 말고 '△△ 방향으로'를 함께. **(버스·택시도 OK)** 대안 병기.
- 위험 노선은 숫자+회피 규칙. 드문 배차엔 플랜B 한 줄("놓치면 택시 ☎○○"). 환승 2회↑면 2장으로 분리.

**★운영시간 카드**: 폐장만 쓰지 말 것. **①폐장 ②매표 마감 ③입장 마감 ④탈것(케이블카·모노레일·이동열차) 운행 종료**를 각각. **마감 시각을 가장 크게.**

**코스 요약 카드(타임라인)**: ①②③④ 번호 + 시각 + 지점 사이 이동수단·소요.
하단 요약 3칸 = **[전체 소요 / 1인 비용(65세 기준 병기) / ★마감 시각]**. ★마감 칸 필수.
작은 사진은 실사진만, 못 구하면 번호+글자로.

**통합 시간표 카드**: 본문 동선의 모든 단계를 빠짐없이. 본문과 100% 일치.
**가는 길 / 오는 길**: ↑가는 / ↓오는 라벨·화살표로 구분(색 family 유지).

**카드 문구**: 제목 1 + 부제 1 + 정보 4~6줄 + 경고 1. 각 줄 12~18자. 부연 글씨는 주요 정보의 70%↑. ☎는 운영·무장애 카드 상단에. '실시간 확인' 경고는 정말 중요한 카드에만.
★**썸네일 = 순수 표지** — 제목(+짧은 태그라인)만. 정보 나열·아이콘 리스트·박스 전부 금지.
★**텍스트 오류 줄이기**: 한 줄에 숫자 1~2개까지. 작은 숫자 여러 개보다 큰 숫자 2~3개.
★본문의 핵심 판단(순서 이유·계절 주의·폐선·마감 함정)도 관련 카드에 한 줄 반영.

---

## ■ 5. 영문 꼬리표 (모델에 실제로 가는 부분 — 그대로 전달)
★영문 프롬프트는 기획안에 적힌 **그대로** 전달한다 — 요약·의역·생략·임의 약화 금지(특히 색·패널 금지 항목을 빼지 않는다).
★카드 텍스트에 준 숫자만 넣고 없는 숫자를 추가하지 않는다.

**정보 카드 영문 프롬프트 끝에 붙인다:**
```
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. ACCENT COLOR: one single accent for the whole set, pull it from the hero photo and keep it identical on every card, no pink no magenta unless that is the chosen accent, not orange not amber not gold unless the hero photo is genuinely warm-toned, use the accent only on key numbers labels and thin dividers about 15 percent. LAYOUT: one continuous full-bleed natural-daylight photo fills the entire frame as the clear hero, compose the crop so one vertical side is naturally bright and empty such as open sky water pale road or softly blurred greenery, place the Korean text DIRECTLY on that bright area with a soft drop shadow, NO panel NO glass NO translucent layer NO box NO rounded card NO tinted overlay strip NO white or foggy wash over the photo NO bottom strip or top band NO template-like side panel, the empty space comes from the photo composition never from an added panel, never split the frame, one scene only. TYPE: large clean high-contrast Korean gothic readable without zooming, strong weight contrast, strict editorial grid, generous margins, dark text on light areas and cream text on dark areas, no vivid or pale low-contrast text, no text outline gradient or glow, render every Korean character and number exactly as written do not invent alter drop or add any text or numbers, keep each card minimal with only one or two numbers per line so the text stays accurate. WAYFINDING: the card works as a one-glance route instruction not a poster, very large bus numbers and station and stop names, after the final stop show the walking direction or a nearby landmark not only minutes, show the transfer action wait at the same stop or cross the street, add one short difficulty note flat or uphill, add one backup line if a rare bus is missed, keep any phone number near the top, only one short warning line. ICONS: only small soft neutral-toned circles with thin pictograms that recede, no saturated colored circles, no clip-art, no pill chips, no icon badges, no emoji or sticker badges, no dotted separator lines, no speech-bubble panel, no card-news or SmartArt look. PHOTO: premium editorial travel magazine spread in the aesthetic of Kinfolk and Cereal, clear natural daylight bright and airy, photorealistic DSLR, natural colors not a monochrome orange or amber wash, no sunset unless this is the CTA card, no signs banners place-names shop-names or station signs inside the photo, no real logos, no map UI, no exact landmark, all Korean text only as a clean overlay. Optionally one short handwritten script tagline plus one or two tiny doodles in the accent color, main info stays in clean gothic. Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

**썸네일 영문 프롬프트 끝에 붙인다:**
```
EDIT MODE: edit the uploaded real photograph, keep the scene EXACTLY as-is, do NOT repaint regenerate or stylize the background, ONLY overlay the Korean text and watermark. premium editorial magazine cover in the aesthetic of Kinfolk and Cereal, one continuous full-bleed natural-daylight photo as the hero, place one large high-contrast Korean headline DIRECTLY on clean negative space such as sky water wall road or softly blurred area with a soft drop shadow, that empty space must come from the photo composition itself, NO panel NO glass NO translucent layer NO text background box NO colored label box NO pill banner NO bottom strip, choose headline color by background brightness dark on light and light on dark never a low-contrast pastel headline, headline in clean refined Korean gothic with strong weight contrast not a brush or calligraphy font, the thumbnail stays purely a cover with only a short headline and an optional one-line tagline, no route numbers no bus numbers no information lists no icon rows no boxes, render the Korean headline exactly as written do not invent alter or add any text or numbers, ONE accent color pulled from the photo used only on tiny details, not orange not amber not gold unless the photo is genuinely warm-toned, no pink unless chosen, optionally one small handwritten sub-tagline and a tiny doodle in the accent color, no signs or place-name text inside the photo scene only the headline overlay, no text outline gradient or glow, clear natural daylight natural colors, small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

## ■ 6. 번호 입력 / CTA
- 숫자만·"이미지N"·"N번"·"전체"·"CTA" → 직전 영역2 기획안의 해당 번호 영문 프롬프트를 **그대로** 사용해 생성(요약·변경 금지). 없는 번호면 "기획안엔 1~N까지 있어요". 생성 후 설명 X.
- 단, 직전 카드에 **사실·길찾기 문제**(버스번호 누락·운영시간 오류 가능·**마감 시각 누락**·하차 방향 없음·환승 동작 불명·도보 시간/난이도 없음·본문과 불일치·정보 과다)면 즉시 생성 말고 **"다시 잡는 게 안전합니다" + 수정 1안** 후 생성. 미감 아닌 **사실·동선 문제**일 때만.
- **CTA 이미지**: 영역2 마지막에 항상 16:9(영역1 CTA 삽입 포인트와 1:1). 문구 "공감 💗 + 이웃추가 / 뚜벅이 당일치기 코스 꾸준히 올려요". 사진 위 오버레이, 우하단 워터마크 필수.

---

## ■ 7. 점검 (통과 못하면 미감보다 먼저 고침)
1) 카드만 보고 혼자 다음 행동 되나 — 버스번호·환승 동작·하차 후 방향·도보 시간/난이도·플랜B 보이나.
2) 본문 시간표와 카드가 100% 같나(모든 단계 포함).
3) 세트 색 1개로 통일됐나, 안 튀나. **앰버/주황을 습관적으로 쓰지 않았나.**
4) ★**패널이 아예 없나** — 글자가 사진 위에 직접 얹혔나(글래스·박스·하단 띠·반 가르기 전부 없음).
5) 한글이 확대 없이 읽히는 큰 고딕·고대비인가, 부연도 주요 정보의 70%↑인가.
6) 사진 안에 글자·간판·지명 0, 우하단 워터마크 있나.
7) 영역1 삽입 포인트와 영역2가 **개수·이름 1:1**인가, CTA 16:9 포함했나.
8) 버스 아닌 숫자에 라벨 붙고 버스와 구분되나, 오는 길에 **막차** 있나, 핵심 숫자를 본문과 한 글자씩 대조했나.
9) ★**운영시간 카드에 매표·입장 마감이 있나**(폐장만 쓰지 않았나).
10) ★**카드마다 실배경 사진 소스가 붙어 있나** — 없는 카드는 "소스 미확보 + 찾는 방법"으로 정직히 표기했나.
+ 미확인 숫자(운영시간·배차)는 단정 말고 범위+☎.
