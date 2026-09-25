# 영역2 — 이미지 제작 지시서 · 청도 당일치기 (2026-10-15 발행 예정)

기준 : `.claude/blog-image-project-instructions-v2.md` (**V2가 최우선**)
사진 대장 : `photos/CREDITS.md` — 저작권 유형은 **사진 단위**로 판정했다

---

## ★★먼저 읽을 것 — 이 회차는 제작 가능한 카드가 0장이다

청도에서 TourAPI에 등재된 사진은 **두 곳(청도 프로방스 · 청도소싸움미디어체험관) 18장뿐이고, 18장 전부 `Type3`(공공누리 1유형 + 변경금지)** 였다.
와인터널·운문사·추어탕거리·청도역은 **아예 미등재**다. (자세한 검증 기록은 `photos/CREDITS.md`)

**Type3에는 글자를 얹을 수 없다.** 그러므로 이 지시서는 이렇게 구성했다.

1. **카드 9장의 텍스트·레이아웃·영문 프롬프트는 전부 완성형으로 써 두었다.** 배경 사진만 끼우면 바로 제작할 수 있다.
2. **배경 사진은 운영자가 확보해야 한다** — 직접 촬영분, 네이버 이미지, 각 시설 공식 홈. 각 카드에 "무엇을 찍은 사진이 필요한지"를 구체적으로 적었다.
3. **이미지 5(프로방스)만 지금 바로 넣을 수 있다** — Type3 원본을 글자 없이 그대로 삽입한다. 파일은 `photos/`에 있다.
4. ★**AI로 배경을 생성하지 않는다.** 사진이 없으면 그 칸은 비워 두거나 글 없이 원본만 넣는다. 가짜 배경으로 채우면 이 블로그의 유일한 자산인 신뢰가 깨진다.

---

## 0. 이 글의 공통 규격

**포인트색 : 감와인 딥레드 `#7B2D3B`**
　근거 — 이 글의 두 주인공이 **청도반시(붉은 감)** 와 **감와인 저장고(와인터널)** 다. 10월 읍내 풍경도 감이 주인공이다.
　★직전 두 글(창녕 늪 그린 `#3F6B52` · 평창 전나무 딥그린 `#2E4F3E`)과 **계열이 겹치지 않게** 난색 쪽으로 넘어왔다.
　★단 **주황·앰버·골드가 아니다.** 감와인의 자줏빛 붉은색이다. `NOT orange, NOT amber, NOT gold`를 프롬프트에 박는다.
　⚠**히어로 사진을 아직 확보하지 못한 상태의 제안값**이다. 배경 사진을 구한 뒤 실제 색이 다르면 **그 사진에서 다시 뽑는다** — V2 원칙이 추정색보다 우선한다.

**글자색** : 밝은 하늘·노면·대합실 위에는 잉크 `#1C2226` / 어두운 터널 내부 위에는 크림 `#F4F1EA`

**워터마크** : `blog.naver.com/witchbloom82` · **우하단** · 작고 낮은 대비
　원본에 출처 표기가 있으면 가리지 않는다(겹치면 좌하단)

**제작 도구** : GPT 이미지 편집 기능 (V2 §1)
**사용법** : ①배경 사진을 저장 → ②GPT에 업로드 → ③아래 프롬프트로 **글자만** 얹기

**카드 안에 이모지를 넣지 않는다.** 썸네일 이모지(🍚)는 본문 썸네일문구 줄에만 둔다.

### ★모든 카드 프롬프트에 그대로 들어가는 금지 블록

```
Edit the uploaded real photograph. Do NOT repaint, regenerate or recompose the scene.
Do NOT add, remove or replace any sky, road, building, sign, person, vehicle,
tree, food, bowl or facility. Do NOT change the season, the time of day or the weather.
Do NOT add or exaggerate autumn colour or saturation.
NO glass panel, NO translucent box, NO white or cream information plate,
NO milky gradient, NO local whitening, NO blur/fog/glow behind the letters,
NO top or bottom information band, NO rounded sticker, NO speech bubble.
NO text drop shadow, NO outline, NO glow, NO 3D lettering, NO gradient on letters.
NO icon badges, NO emoji, NO check marks, NO dotted separator lines.
Keep the photograph crisp and full-bleed. Place the Korean text DIRECTLY on the
naturally bright, empty part of the photo, using weight and spacing for hierarchy.
Render every Korean character and every digit EXACTLY as written, with no substitution.
Accent colour #7B2D3B is for key numbers and small labels only (under 15% of the frame).
NOT orange, NOT amber, NOT gold.
```

---

## 썸네일 · 1:1

**삽입 위치** : 글 맨 위 (본문 `썸네일문구` 줄과 짝)

**배경 사진 소스** : ❌ **미확보 — 운영자 확보 필요**
　필요한 사진 : **청도역 앞 추어탕거리 간판 골목**, 또는 **추어탕 한 그릇 상차림**. 낮, 자연광.
　구하는 곳 : 직접 촬영 / 네이버 이미지 '청도 추어탕거리' / 청도군 문화관광 포토갤러리
　★간판 글씨가 크게 박힌 컷은 피한다(V2 — 사진 안 글자 0).

**카드 텍스트** (표지니까 이것만)
```
청도역 앞이
추어탕거리예요

와인터널 3,000원 · 반나절이면 충분
```

**영문 프롬프트**
```
Edit the uploaded real photograph of the mudfish-soup restaurant street in front of
Cheongdo Station, Korea, in clear natural daylight. Square 1:1 crop, one continuous
full-bleed photo. Compose so the upper area (sky or pale road) stays naturally bright
and empty. Place the Korean headline "청도역 앞이 / 추어탕거리예요" there in a heavy
modern Korean sans-serif, ink #1C2226, generous line spacing, and the smaller tagline
"와인터널 3,000원 · 반나절이면 충분" beneath it at about 40% of the headline size,
with "3,000원" in #7B2D3B. Bottom-right watermark "blog.naver.com/witchbloom82",
small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 1. 교통 카드 · 4:5

**삽입 위치** : `[이미지 삽입: 청도역과 청도상상마루 터미널 외관]` (소제목1 끝)

**배경 사진 소스** : ❌ **미확보 — 운영자 확보 필요**
　필요한 사진 : **청도역 역사 외관** 또는 **청도상상마루(2025년 9월 재개장한 터미널 새 건물) 외관**. 낮, 하늘이 넓게 잡힌 컷.
　구하는 곳 : 직접 촬영 / 네이버 이미지 '청도역' '청도상상마루' / 코레일 역 안내

**카드 텍스트**
```
청도역에는 KTX가 서지 않아요

서울에서
KTX로 동대구역 → 무궁화호·ITX-마음 환승
환승 30분 · 2,600원

대구·부산·경주에서
갈아탈 필요 없이 한 번에

청도역 ↔ 청도시외버스터미널
도보 150m
```

**영문 프롬프트**
```
Edit the uploaded real photograph of Cheongdo Station (or the Cheongdo Sangsangmaru
bus terminal building), Korea, in clear natural daylight. Vertical 4:5 crop, one
continuous full-bleed photo, the open sky filling the upper third so it is naturally
bright and empty. Place the Korean text DIRECTLY on that bright sky area, left-aligned,
in a clean Korean sans-serif, ink #1C2226:
line 1 (largest, heavy): 청도역에는 KTX가 서지 않아요
then two small groups, each a light label line followed by a heavier value line:
  서울에서 / KTX로 동대구역 → 무궁화호·ITX-마음 환승 / 환승 30분 · 2,600원
  대구·부산·경주에서 / 갈아탈 필요 없이 한 번에
then the last group: 청도역 ↔ 청도시외버스터미널 / 도보 150m
Set "30분 · 2,600원" and "도보 150m" in #7B2D3B. At most two numbers per line.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 2. 맛집 카드 · 4:5

**삽입 위치** : `[이미지 삽입: 청도역 앞 추어탕거리 전경]` (소제목2 끝)

**배경 사진 소스** : ❌ **미확보 — 운영자 확보 필요**
　필요한 사진 : **추어탕 한 그릇 상차림**(위에서 내려다본 컷이 글자 자리를 만들기 좋다) 또는 **추어탕거리 골목**.
　구하는 곳 : 직접 촬영 / 네이버지도 업체 사진 / 네이버 이미지 '청도 추어탕'

**카드 텍스트**
```
청도 추어탕은 가을이 제철이에요

역전추어탕 (50년)
추어탕 9,000원 · 미꾸라지튀김 10,000 / 15,000원
11:30~20:00

향미추어탕 (45년)
추어탕 9,000원 안팎 · 고디탕 7,000원대
06:00~20:00 · 향신료를 넣지 않아요

두 집 다 정기휴무는 확인되지 않았어요
```

**영문 프롬프트**
```
Edit the uploaded real photograph of a Korean mudfish soup (chueotang) table setting,
or the restaurant street in Cheongdo, shot in clear natural daylight. Vertical 4:5 crop,
one continuous full-bleed photo. Compose so one side (the pale table surface or the
bright road) stays naturally empty. Place the Korean text DIRECTLY on that area in a
clean Korean sans-serif, ink #1C2226:
heading (largest): 청도 추어탕은 가을이 제철이에요
then two restaurant blocks, each with a heavier name line and lighter detail lines:
  역전추어탕 (50년) / 추어탕 9,000원 · 미꾸라지튀김 10,000 / 15,000원 / 11:30~20:00
  향미추어탕 (45년) / 추어탕 9,000원 안팎 · 고디탕 7,000원대 / 06:00~20:00 · 향신료를 넣지 않아요
then a small closing line: 두 집 다 정기휴무는 확인되지 않았어요
Set the prices in #7B2D3B. Keep at most two numbers per line.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 3. ★코스 요약 타임라인 카드 · 4:5

**삽입 위치** : `[이미지 삽입: 청도 반나절 코스요약 타임라인 카드]` (소제목3 안, 3초요약 근처)
**이 카드만 패널 금지의 예외다** — 번호·시각·이동수단을 한 줄에 꿰는 인포그래픽.

**배경 사진 소스** : ❌ **작은 사진 4장 미확보 — 운영자 확보 필요**
　★V2 원칙: **작은 사진도 실사진만 쓴다. AI 생성 컷 금지.**
　4장 구하면 → 사진 넣은 타임라인, **못 구하면 → 사진 없이 번호+글자만으로 간다**(이쪽이 기본값).
　필요한 컷 : ①청도역 ②추어탕 한 그릇 ③와인터널 내부 ④청도역 대합실

**카드 텍스트**
```
청도 반나절 코스

① 청도역 도착           11:00
   ↓ 도보 5분
② 역 앞 추어탕거리       11:10~12:10
   점심 한 그릇
   ↓ 7-3번 버스 또는 택시 15분
③ 청도와인터널          12:40~14:00
   입장료 3,000원 · 서늘한 실내
   ↓ 택시 15분 (버스는 배차 3시간30분)
④ 청도역 대합실          14:30
   열차 기다리며 쉬기

전체 소요   약 3시간 30분
1인 비용    추어탕 9,000원 + 입장료 3,000원 + 택시 약 12,000원
            ※65세 이상은 코레일 승차권 경로우대 할인
★마감 시각  와인터널은 이르면 18:00에 닫아요 — 16시 전 도착 권장
            그날 버스 시각은 054-371-5100
```

**영문 프롬프트**
```
Build a vertical 4:5 Korean timeline infographic card on a plain warm off-white
background (#F7F3EE). This is the ONE card allowed to be a graphic rather than a photo.
Four numbered stops ①②③④ down the left edge connected by a thin vertical line in
#7B2D3B, each stop showing a bold place name, a time on the right, and a small
lighter detail line. Between stops, set the transfer line (도보 5분 / 7-3번 버스 또는
택시 15분 / 택시 15분) in smaller grey type beside the connector.
Title at the top: 청도 반나절 코스
At the bottom, three summary rows separated by generous space (NOT boxes):
  전체 소요 · 약 3시간 30분
  1인 비용 · 추어탕 9,000원 + 입장료 3,000원 + 택시 약 12,000원
  ★마감 시각 · 와인터널은 이르면 18:00에 닫아요 — 16시 전 도착 권장
Render every Korean character and every digit EXACTLY as written.
NO icon badges, NO emoji, NO check marks, NO dotted lines, NO drop shadow, NO outline,
NO glow, NO 3D lettering, NO gradient on letters.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
```

---

## 이미지 4. 와인터널 정보 카드 · 4:5

**삽입 위치** : `[이미지 삽입: 청도와인터널 내부 감와인 저장고]` (소제목3 끝)

**배경 사진 소스** : ❌ **미확보 — 운영자 확보 필요** (TourAPI 미등재)
　필요한 사진 : **와인터널 내부 아치형 통로**. 조명이 있는 어두운 터널이라 **글자는 크림색**으로 간다.
　구하는 곳 : 직접 촬영 / 청도감와인 공식(gamwine.com) / 네이버 이미지 '청도와인터널 내부'

**카드 텍스트**
```
1904년 경부선 옛 터널이에요

입장료      3,000원
운영        연중무휴
            오전 9시 반쯤 열어
            오후 6~8시 사이 닫아요
감와인 시음  무료
주차        무료

65세 할인 여부는 054-371-1904
```

**영문 프롬프트**
```
Edit the uploaded real photograph of the interior of Cheongdo Wine Tunnel, Korea —
a brick arched former railway tunnel used as a wine cellar, lit by its own warm lamps.
Vertical 4:5 crop, one continuous full-bleed photo. Keep the tunnel exactly as shot;
do not brighten, relight or recolour it. Place the Korean text DIRECTLY on the darker
empty wall area in cream #F4F1EA, in a clean Korean sans-serif:
heading (largest): 1904년 경부선 옛 터널이에요
then label-value rows, the label light and the value heavier:
  입장료 · 3,000원 / 운영 · 연중무휴 / 오전 9시 반쯤 열어 오후 6~8시 사이 닫아요 /
  감와인 시음 · 무료 / 주차 · 무료
then a small closing line: 65세 할인 여부는 054-371-1904
Set "3,000원" in #7B2D3B only if it stays legible against the dark wall; otherwise keep
it cream and give it extra weight instead. At most two numbers per line.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 5. 프로방스 — ★Type3 원본 그대로 삽입 (글자 없음)

**삽입 위치** : `[이미지 삽입: 청도프로방스 빛축제 야경 — 11월부터의 모습]` (소제목4 끝)

**배경 사진 소스** : ⭕ **확보됨 — `photos/cheongdo-provence-2952517.jpg`**
　한국관광공사 포토코리아 · contentid 2729992 · serialnum 2952517_9
　원본 URL: http://tong.visitkorea.or.kr/cms/resource/17/2952517_image3_1.jpg
　`cpyrhtDivCd` = **Type3 (변경금지)**

**★제작하지 않는다.** 글자·워터마크를 포함해 **아무것도 얹지 않고 원본 그대로** 본문에 넣는다.

**본문 사진 아래에 붙일 캡션 한 줄** (이미지가 아니라 글로)
```
▲ 청도프로방스 빛축제 야경 — 조명은 보통 11월부터 켜져요 (한국관광공사 포토코리아)
```
★이 캡션이 **반드시** 들어가야 한다. 10월 15일 발행 글에 야경 사진만 있으면 독자가 "지금 가면 이렇구나"로 읽는다. 본문도 "11월 이후에 다시 오시면"이라고 썼으니 사진과 글이 같은 말을 하게 만든다.

---

## 이미지 6. 운문사 — 미제작 (배경 미확보)

**삽입 위치** : `[이미지 삽입: 운문사 처진소나무(다음 방문용 참고컷)]` (소제목5 끝)

**배경 사진 소스** : ❌ **미확보** — 운문사는 TourAPI 미등재다.
　필요한 사진 : **운문사 처진소나무**(천연기념물 제180호) 또는 운문사 경내.
　구하는 곳 : 직접 촬영 / 운문사 공식 / 네이버 이미지 '운문사 처진소나무'
　**사진을 못 구하면 이 칸은 통째로 빼도 된다** — 본문에서 운문사는 "다음 방문 목록"으로 다루는 보조 소재다.
　글자를 얹지 말고 **원본 그대로** 넣는 쪽을 권한다(참고컷 성격).

---

## 이미지 7. 청도반시 — 미제작 (배경 미확보)

**삽입 위치** : `[이미지 삽입: 청도 읍내 반시(감) 익어가는 풍경]` (소제목6 끝)

**배경 사진 소스** : ❌ **미확보**
　필요한 사진 : **담장 너머 붉게 익은 감나무**. 10월 청도 읍내 풍경 — 이 글의 도입부 첫 문장과 짝이 되는 컷이다.
　구하는 곳 : 직접 촬영 / 네이버 이미지 '청도반시' '청도 감나무'
　글자 없이 **원본 그대로** 넣어도 충분하다. 넣는다면 짧은 한 줄만:
```
청도반시는 씨가 없어요
```

---

## 이미지 8. 편의·무장애 카드 · 4:5

**삽입 위치** : `[이미지 삽입: 청도역 대합실 쉼터]` (소제목7 끝)

**배경 사진 소스** : ❌ **미확보 — 운영자 확보 필요**
　필요한 사진 : **청도역 대합실 내부**(의자가 보이는 밝은 실내) 또는 청도상상마루 1층.
　구하는 곳 : 직접 촬영 / 네이버 이미지 '청도역 대합실'

**카드 텍스트**
```
앉아서 쉴 자리부터 알려드릴게요

청도역 대합실       냉난방 실내
청도상상마루 1층    2025년 9월 재개장, 자리 넉넉해요
와인터널 내부       서늘한 실내, 쉼터 겸 볼거리

65세 이상은 코레일 승차권 경로우대 할인

응급실  청도대남병원 054-370-5112
        24시간 · 급하면 119가 가장 빨라요
```

**영문 프롬프트**
```
Edit the uploaded real photograph of the waiting room inside Cheongdo Station, Korea,
in its own indoor light. Vertical 4:5 crop, one continuous full-bleed photo. Compose so
one side (a pale wall or the bright window area) stays naturally empty. Place the
Korean text DIRECTLY on that area in a clean Korean sans-serif, ink #1C2226:
heading (largest): 앉아서 쉴 자리부터 알려드릴게요
then three label-value rows, the place name heavier and the detail lighter:
  청도역 대합실 · 냉난방 실내
  청도상상마루 1층 · 2025년 9월 재개장, 자리 넉넉해요
  와인터널 내부 · 서늘한 실내, 쉼터 겸 볼거리
then: 65세 이상은 코레일 승차권 경로우대 할인
then a small last group: 응급실 · 청도대남병원 054-370-5112 / 24시간 · 급하면 119가 가장 빨라요
Set "054-370-5112" and "119" in #7B2D3B. At most two numbers per line.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 9. CTA · 16:9

**삽입 위치** : `[이미지 삽입: 청도 읍내 저녁 풍경(CTA용)]` (메인 CTA 바로 위)

**배경 사진 소스** : ❌ **미확보 — 운영자 확보 필요**
　필요한 사진 : **청도 읍내 해질녘 풍경**. ★이 글에서 **노을을 쓰는 건 이 한 장뿐**이다(V2 — 노을 남발 금지).
　구하는 곳 : 직접 촬영 / 네이버 이미지 '청도 읍내'

**카드 텍스트**
```
추어탕 한 그릇과 편한 신발이면 충분해요
청도 · 반나절
```

**영문 프롬프트**
```
Edit the uploaded real photograph of the town centre of Cheongdo, Korea, at dusk.
Wide 16:9 crop, one continuous full-bleed photo. Keep the light exactly as shot.
Compose so the sky band stays naturally bright and empty; place the Korean line
"추어탕 한 그릇과 편한 신발이면 충분해요" there in a clean Korean sans-serif,
cream #F4F1EA if the sky is dark or ink #1C2226 if it is pale, and beneath it the
small line "청도 · 반나절" at about 45% of that size, with "반나절" in #7B2D3B.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 개수 대조 (영역1 ↔ 영역2 · 1:1)

| # | 영역1 이미지 삽입 포인트 | 영역2 | 비율 | 배경 사진 |
|---|---|---|---|---|
| — | 썸네일문구 (14행) | 썸네일 | 1:1 | ❌ 미확보 |
| 1 | 청도역과 청도상상마루 터미널 외관 | 교통 카드 | 4:5 | ❌ 미확보 |
| 2 | 청도역 앞 추어탕거리 전경 | 맛집 카드 | 4:5 | ❌ 미확보 |
| 3 | 청도 반나절 코스요약 타임라인 카드 | 코스 요약 | 4:5 | 그래픽(사진 선택) |
| 4 | 청도와인터널 내부 감와인 저장고 | 와인터널 카드 | 4:5 | ❌ 미확보 |
| 5 | 청도프로방스 빛축제 야경 — 11월부터의 모습 | **원본 삽입** | 원본 | ⭕ 확보(Type3) |
| 6 | 운문사 처진소나무(다음 방문용 참고컷) | 미제작 | 원본 | ❌ 미확보 |
| 7 | 청도 읍내 반시(감) 익어가는 풍경 | 미제작 | 원본 | ❌ 미확보 |
| 8 | 청도역 대합실 쉼터 | 편의 카드 | 4:5 | ❌ 미확보 |
| 9 | 청도 읍내 저녁 풍경(CTA용) | CTA | 16:9 | ❌ 미확보 |

**제작 가능** 1장(코스 요약, 사진 없이 그래픽으로) · **원본 삽입** 1장 · **배경 확보 대기** 8장
