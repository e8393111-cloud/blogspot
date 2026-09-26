# 영역2 — 이미지 제작 지시서 · 정선 당일치기 (2026-10-16 발행 예정)

기준 : `.claude/blog-image-project-instructions-v2.md` (**V2가 최우선**)
사진 대장 : `photos/CREDITS.md` — 저작권 유형은 **사진 단위**로 판정했다

---

## 0. 이 글의 공통 규격

**포인트색 : 아우라지 강물 청록 `#2F6E7E`**
　근거 — 히어로 사진(`photos/aurajji-125777-4073397.jpg`)을 **실제로 열어 보고** 뽑았다.
　아우라지 출렁다리 아래 강물과 뒤편 산그늘이 만드는 푸른 청록이 이 글의 중심색이다.
　★직전 세 글(창녕 늪그린 `#3F6B52` · 평창 전나무 `#2E4F3E` · 청도 감와인 `#7B2D3B`)과 계열이 겹치지 않는다.
　★주황·앰버·골드 **아님**. 10월 발행이지만 단풍이 이 글의 훅이 아니다.

**글자색** : 밝은 하늘·강물 위에는 잉크 `#16242B` / 어두운 산그늘 위에는 크림 `#F4F1EA`

**워터마크** : `blog.naver.com/witchbloom82` · **우하단** · 작고 낮은 대비
　원본에 출처 표기가 있으면 가리지 않는다(겹치면 좌하단)

**제작 도구** : GPT 이미지 편집 기능 (V2 §1)
**사용법** : ①배경 사진 URL을 열어 저장 → ②GPT에 업로드 → ③아래 프롬프트로 **글자만** 얹기

**카드 안에 이모지를 넣지 않는다.** 썸네일 이모지(🚂)는 본문 썸네일문구 줄에만 둔다.

### ★모든 카드 프롬프트에 그대로 들어가는 금지 블록

```
Edit the uploaded real photograph. Do NOT repaint, regenerate or recompose the scene.
Do NOT add, remove or replace any sky, river, bridge, mountain, railway, building,
sign, person or vehicle. Do NOT change the season, the time of day or the weather.
Do NOT add or exaggerate autumn colour or saturation.
NO glass panel, NO translucent box, NO white or cream information plate,
NO milky gradient, NO local whitening, NO blur/fog/glow behind the letters,
NO top or bottom information band, NO rounded sticker, NO speech bubble.
NO text drop shadow, NO outline, NO glow, NO 3D lettering, NO gradient on letters.
NO icon badges, NO emoji, NO check marks, NO dotted separator lines.
Keep the photograph crisp and full-bleed. Place the Korean text DIRECTLY on the
naturally bright, empty part of the photo, using weight and spacing for hierarchy.
Render every Korean character and every digit EXACTLY as written, with no substitution.
Accent colour #2F6E7E is for key numbers and small labels only (under 15% of the frame).
NOT orange, NOT amber, NOT gold.
```

---

## 썸네일 · 1:1

**삽입 위치** : 글 맨 위 (본문 `썸네일문구` 줄과 짝)

**배경 사진 소스** : ⭕ **확보 — `photos/aurajji-125777-4073397.jpg`**
　카드 제작에는 원본을 쓴다 → https://tong.visitkorea.or.kr/cms/resource_photo/97/4073397_image2_1.jpg
　한국관광공사 포토코리아 · contentid 125777 · **Type1(오버레이 가능)**
　★**이미 열어서 확인함**: 아우라지 출렁다리 + 강 + 산 + 파란 하늘. 글자 없음. **하늘이 위쪽에 넓게 비어 있다.**

**카드 텍스트**
```
정선 가는 기차는
주말·장날에만 떠요

10월 17일 토요일이 그 날이에요
```

**영문 프롬프트**
```
Edit the uploaded real photograph of the Auraji suspension bridge in Jeongseon, Korea —
a white cable footbridge crossing a river, green mountains behind, blue sky with
white clouds above. Square 1:1 crop that keeps the bridge and the open sky.
Place the Korean headline "정선 가는 기차는 / 주말·장날에만 떠요" on the bright empty
sky in the upper part of the frame, in a heavy modern Korean sans-serif, ink #16242B,
generous line spacing. Beneath it, the smaller line "10월 17일 토요일이 그 날이에요"
at about 40% of the headline size, with "10월 17일 토요일" in #2F6E7E.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 1. 열차 카드 · 4:5 — ★배경 미확보

**삽입 위치** : `[이미지 삽입: 정선아리랑열차와 정선선 철길 풍경]` (소제목1 끝)

**배경 사진 소스** : ❌ **미확보** — 정선아리랑열차는 TourAPI 미등재다.
　필요한 사진 : **정선아리랑열차 외관** 또는 **정선선 철길 풍경**(민둥산~아우라지 구간).
　구하는 곳 : 코레일관광개발 / 네이버 이미지 '정선아리랑열차' / 직접 촬영
　★못 구하면 **아우라지 Type1 사진(4073453·4073421 등)을 배경으로 돌려쓴다** — 같은 권역이라 어색하지 않다.

**카드 텍스트**
```
정선아리랑열차, 하루 왕복 1회예요

운행하는 날   매주 토·일요일
              + 5일장(2·7·12·17·22·27일)

제천 09:02 → 아우라지 11:33
아우라지 17:20 → 제천 19:49

편도 10,200원 · 예매 코레일톡

평일엔 무궁화호도 정선역에 서지 않아요
```

**영문 프롬프트**
```
Edit the uploaded real photograph of the Jeongseon Arirang tourist train, or of the
Jeongseon railway line running through the valley, in clear natural daylight.
Vertical 4:5 crop, one continuous full-bleed photo. Compose so the sky or a pale
open area on one vertical side stays naturally bright and empty. Place the Korean
text DIRECTLY on that area, left-aligned, in a clean Korean sans-serif, ink #16242B:
heading (largest, heavy): 정선아리랑열차, 하루 왕복 1회예요
then a label line 운행하는 날 with the values 매주 토·일요일 / + 5일장(2·7·12·17·22·27일)
then the two timetable lines: 제천 09:02 → 아우라지 11:33 / 아우라지 17:20 → 제천 19:49
then: 편도 10,200원 · 예매 코레일톡
then a smaller closing line: 평일엔 무궁화호도 정선역에 서지 않아요
Set the times and "10,200원" in #2F6E7E. At most two numbers per line.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 2. ★코스 요약 타임라인 카드 · 4:5

**삽입 위치** : `[이미지 삽입: 정선 코스요약 타임라인 카드(열차 코스, 아우라지)]`
**이 카드만 패널 금지의 예외다.**

**배경** : 그래픽(따뜻한 오프화이트 `#F7F4F0`). 작은 사진을 넣는다면 **아우라지 Type1 사진만** 쓴다.

**카드 텍스트**
```
정선 반나절 코스 — 열차 뜨는 날

① 제천역 출발          09:02
   ↓ 정선아리랑열차 2시간 31분
② 아우라지 도착        11:33
   강변 산책 · 정자에서 쉬기
   ↓ (레일바이크는 선택 — 구절리까지 따로 이동)
③ 아우라지역 승차      17:20
   ↓ 2시간 29분
④ 제천역 도착          19:49

전체 소요   왕복 약 10시간 (열차 안 5시간)
1인 비용    열차 왕복 20,400원
            레일바이크 타면 1만~1만5천원 추가
★놓치면 없음  열차는 하루 1회예요
              17:20을 놓치면 그날 나올 방법이 없어요
```

**영문 프롬프트**
```
Build a vertical 4:5 Korean timeline infographic card on a plain warm off-white
background (#F7F4F0). This is the ONE card allowed to be a graphic rather than a photo.
Four numbered stops ①②③④ down the left edge connected by a thin vertical line in
#2F6E7E, each stop showing a bold place name, a time on the right, and a small lighter
detail line. Between stops, set the transfer line in smaller grey type beside the connector.
Title at the top: 정선 반나절 코스 — 열차 뜨는 날
At the bottom, three summary rows separated by generous space (NOT boxes):
  전체 소요 · 왕복 약 10시간 (열차 안 5시간)
  1인 비용 · 열차 왕복 20,400원 (레일바이크 타면 1만~1만5천원 추가)
  ★놓치면 없음 · 열차는 하루 1회, 17:20을 놓치면 그날 나올 방법이 없어요
Render every Korean character and every digit EXACTLY as written.
NO icon badges, NO emoji, NO check marks, NO dotted lines, NO drop shadow, NO outline,
NO glow, NO 3D lettering, NO gradient on letters.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
```

---

## 이미지 3. 아우라지·레일바이크 카드 · 4:5 — ⭕ 배경 확보

**삽입 위치** : `[이미지 삽입: 아우라지 강변과 레일바이크 풍경]`

**배경 사진 소스** : ⭕ **확보(Type1)** — 아우라지 6장 중 썸네일과 **다른 컷**을 쓴다.
```
https://tong.visitkorea.or.kr/cms/resource_photo/53/4073453_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/21/4073421_image2_1.jpg
```

**카드 텍스트** — ★이 카드의 핵심은 **방향 경고**다
```
레일바이크는 구절리에서 출발해요

열차에서 내린 아우라지역은 도착점이에요
타시려면 구절리역까지 7.2km를 따로 가셔야 해요
걸어갈 거리가 아니에요 — 택시나 버스

대신 좋은 점
타고 나면 아우라지로 내려와요
돌아가는 열차(17:20)와 그대로 이어져요

2인승 30,000원 · 4인승 40,000원
10월은 08:40~16:40 · 하루 5회
마지막 1km는 오르막이에요

문의 033-563-8787
```

**영문 프롬프트**
```
Edit the uploaded real photograph of the Auraji riverside in Jeongseon, Korea, in
clear natural daylight. Vertical 4:5 crop, one continuous full-bleed photo. Compose so
the sky or the pale river surface on one side stays naturally bright and empty.
Place the Korean text DIRECTLY on that area in a clean Korean sans-serif, ink #16242B:
heading (largest, heavy): 레일바이크는 구절리에서 출발해요
then the warning lines, slightly smaller:
  열차에서 내린 아우라지역은 도착점이에요 / 타시려면 구절리역까지 7.2km를 따로 가셔야 해요 /
  걸어갈 거리가 아니에요 — 택시나 버스
then a short positive group headed 대신 좋은 점:
  타고 나면 아우라지로 내려와요 / 돌아가는 열차(17:20)와 그대로 이어져요
then the fare and hours lines, then the closing line 문의 033-563-8787.
Set "7.2km", "17:20", the fares and the phone number in #2F6E7E. At most two numbers per line.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 4. 시외버스 카드 · 4:5 — ★배경 미확보

**삽입 위치** : `[이미지 삽입: 정선공영버스터미널 외관]` (소제목4 끝)

**배경 사진 소스** : ❌ **미확보** — 터미널은 TourAPI 미등재.
　필요한 사진 : **정선공영버스터미널 외관** 또는 시외버스가 선 승차장. 직접 촬영이 가장 확실하다.

**카드 텍스트**
```
열차가 없는 평일엔 시외버스예요

원주 → 정선    1일 4회 · 2시간 32분 · 14,600원~
강릉 → 정선    1일 5회 (소요·요금 미확인)
동서울 → 정선  1일 5회 · 약 3시간 · 우등 28,600원
서울고속 → 정선 1일 4회 · 약 3시간

돌아오는 막차
정선 → 원주 17:40 · 정선 → 강릉 18:10
정선 → 동서울 19:00쯤

저녁 7시 전후로 막차가 끊겨요
```

**영문 프롬프트**
```
Edit the uploaded real photograph of the Jeongseon public bus terminal, Korea, in
clear natural daylight. Vertical 4:5 crop, one continuous full-bleed photo with the
open sky filling the upper third so it stays naturally bright and empty. Place the
Korean text DIRECTLY on that bright area in a clean Korean sans-serif, ink #16242B:
heading (largest): 열차가 없는 평일엔 시외버스예요
then four route rows, the origin light and the values heavier, one route per line.
then a group headed 돌아오는 막차 with the three last-bus lines.
then a smaller closing line: 저녁 7시 전후로 막차가 끊겨요
Set the last-bus times in #2F6E7E. At most two numbers per line.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 5. 병방치 스카이워크 — ★Type3 원본 그대로 삽입 (글자 없음)

**삽입 위치** : `[이미지 삽입: 병방치 스카이워크 전망대]` (소제목5 끝)

**배경 사진 소스** : ⭕ 있으나 **Type3(변경금지)**
　http://tong.visitkorea.or.kr/cms/resource/97/1690997_image2_1.jpg · contentid 1842210

**★제작하지 않는다.** 글자·워터마크를 포함해 **아무것도 얹지 않고 원본 그대로** 넣는다.

**본문 사진 아래에 붙일 캡션 한 줄** (이미지가 아니라 글로)
```
▲ 병방치 스카이워크 — 정선읍에서 노선버스가 없어 택시로 가야 해요 (한국관광공사 포토코리아)
```
★캡션에 **"택시로 가야 한다"를 꼭 넣는다.** 사진만 보면 쉽게 갈 수 있는 곳으로 읽힌다.

---

## 이미지 6. 정선아리랑시장 — ★배경 미확보

**삽입 위치** : `[이미지 삽입: 정선아리랑시장 먹자골목 전경]` (소제목6 끝)

**배경 사진 소스** : ❌ **미확보** — 정선아리랑시장은 TourAPI 미등재다.
　이 글의 주요 소재인데 사진이 없다. **직접 촬영이나 네이버 이미지로 확보 필요.**
　필요한 사진 : **5일장 좌판 골목** 또는 **콧등치기국수 한 그릇**.

**카드 텍스트** (사진을 구하면 이 텍스트로 제작)
```
장날이 아니어도 시장은 열려요

상설시장   매일 09:00~18:00
5일장      2·7·12·17·22·27일
주말장     토요일에도 좌판이 늘어요

회동집   콧등치기국수 8,000원 · 09:00~21:00
대박집   07:00~19:00

두 집 다 장날이 아니어도 문을 열어요
```

---

## 이미지 7. CTA · 16:9 — 배경 대안 있음

**삽입 위치** : `[이미지 삽입: 정선읍 저녁 풍경(CTA용)]` (메인 CTA 바로 위)

**배경 사진 소스** : ❌ 정선읍 저녁 풍경은 미확보.
　⭕ **대안 — 민둥산 Type1 억새 사진을 쓴다.** 본문에서 민둥산 억새(9/18~11/8, 무료)를 다루므로 맥락이 맞고,
　　억새밭은 가로로 넓어 16:9에 잘 맞는다.
```
https://tong.visitkorea.or.kr/cms/resource_photo/01/4064101_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/84/4064084_image2_1.jpg
```
　★이 경우 본문 이미지 캡션을 `[이미지 삽입: 민둥산 억새(CTA용)]`로 바꾸고 area1과 이름을 맞춘다.

**카드 텍스트**
```
날짜만 잘 고르면 어렵지 않아요
정선 · 반나절
```

**영문 프롬프트**
```
Edit the uploaded real photograph of the silver grass field on Mindungsan in
Jeongseon, Korea, in clear natural daylight. Wide 16:9 crop, one continuous full-bleed
photo. Keep the light exactly as shot. Compose so the sky band stays naturally bright
and empty; place the Korean line "날짜만 잘 고르면 어렵지 않아요" there in a clean
Korean sans-serif, ink #16242B, and beneath it the small line "정선 · 반나절" at about
45% of that size, with "반나절" in #2F6E7E.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 개수 대조 (영역1 ↔ 영역2 · 1:1)

| # | 영역1 이미지 삽입 포인트 | 영역2 | 비율 | 배경 |
|---|---|---|---|---|
| — | 썸네일문구 (11행) | 썸네일 | 1:1 | ⭕ **아우라지 Type1(육안 확인)** |
| 1 | 정선아리랑열차와 정선선 철길 풍경 | 열차 카드 | 4:5 | ❌ 미확보(아우라지로 대체 가능) |
| 2 | 정선 코스요약 타임라인 카드 | 코스 요약 | 4:5 | 그래픽 |
| 3 | 아우라지 강변과 레일바이크 풍경 | 아우라지 카드 | 4:5 | ⭕ **아우라지 Type1** |
| 4 | 정선공영버스터미널 외관 | 시외버스 카드 | 4:5 | ❌ 미확보 |
| 5 | 병방치 스카이워크 전망대 | **원본 삽입** | 원본 | ⭕ Type3(글자 금지) |
| 6 | 정선아리랑시장 먹자골목 전경 | 맛집·시장 카드 | 4:5 | ❌ 미확보 |
| 7 | 정선읍 저녁 풍경(CTA용) | CTA | 16:9 | ⭕ **민둥산 Type1로 대체 권장** |

**바로 제작 가능** 4장(썸네일·코스요약·아우라지·CTA) · **원본 삽입** 1장 · **배경 확보 대기** 3장

★직전 청도 회차는 제작 가능 카드가 **0장**이었다. 정선은 **4장**이다 — Type1 17장을 확보했기 때문이다.
