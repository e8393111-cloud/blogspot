# 영역2 — 이미지 제작 지시서 · 횡성 가볼만한곳 (2026-10-20 발행 예정)

기준 : `.claude/blog-image-project-instructions-v2.md` (**V2가 최우선**)
사진 대장 : `photos/CREDITS.md` — 횡성호수길 5구간(contentid 2774026) 16장 전부 **Type1**
사용법 : ①아래 URL을 열어 사진을 저장 → ②GPT 이미지 편집에 업로드 → ③아래 프롬프트로 **글자만** 얹기

---

## ★★먼저 읽을 것 — 이번 회차 사진 상황

- 횡성 관광지 4곳 중 **[횡성호수길] 5구간(contentid 2774026)만 Type1**이다(횡성호·호수길축제·한우체험관은 전부 Type3).
- 16장 중 **1~10번(파일명 `..._외부_01~12`)이 10월 발행에 맞는 상시 풍경**이다. **11~16번은 샤스타데이지(초여름) 사진이라 이번 글엔 쓰지 않는다.**
- **1번(`4096180`)만 실제로 열어서 육안 확인**했다 — 횡성호 수면, 짙은 녹음의 낮은 능선, 옅은 구름이 있는 맑은 파란 하늘. 노을 아님, 사진 안 글자·워터마크 없음. **이 사진에서 세트색을 뽑았다.**
- 2~10번은 **미검증(직접 열람 불가)** — 같은 contentid의 "외부" 연작이라 호수·능선·트레일 계열일 확률이 높지만, 실제로 열어 보지 않은 이상 세부 내용을 단정하지 않는다. **사용 전 반드시 열어서 확인하고, 장면이 안 맞으면 다른 번호로 교체한다.**
- **횡성역·버스터미널·농어촌버스·한우갈비탕·읍내 저녁 풍경은 TourAPI에 등재된 관광지가 아니라 사진 자체가 없다.** 가짜 생성 배경으로 채우지 않는다 — 아래 각 카드에 "무엇을 찍으면 되는지"를 구체적으로 적었다.

**바로 제작 가능** 3장(썸네일·코스요약·망향의동산 풍경, 단 2~10번은 사용 전 육안 재확인 필요) · **배경 확보 대기** 5장(KTX·터미널·버스·한우갈비탕·CTA)

---

## 0. 이 글의 공통 규격

**포인트색 : 호수면 딥 포레스트틸 `#4F6958`**
　근거 — 히어로 사진(`4096180`, 실제 열람 확인)에서 뽑았다. 하늘 `#ADD4F6`, 능선 `#B2D4E9`, 호수면 `#4F6958`.
　★**앰버·골드·주황 절대 금지** — 이 히어로는 한 군데도 따뜻한 톤이 아니다. `NOT orange, NOT amber, NOT gold`를 모든 프롬프트에 명시한다.

**글자색** : 밝은 하늘·물 위에는 잉크 `#16221D` / 짙은 능선·수풀 위에는 크림 `#F4F1EA`

**워터마크** : `blog.naver.com/witchbloom82` · **우하단** · 작고 낮은 대비
　한국관광공사 원본에 별도 출처 표기가 있으면 가리지 않는다(겹치면 좌하단).

**제작 도구** : GPT 이미지 편집 기능(V2 §1) — 순수 생성 금지, 반드시 **업로드한 실사진 편집**으로.

**카드 안에 이모지·아이콘 배지를 넣지 않는다.** 썸네일 이모지(🚶)는 본문 썸네일문구 줄에만 둔다.

### ★모든 카드 프롬프트에 그대로 들어가는 금지 블록

```
Edit the uploaded real photograph. Do NOT repaint, regenerate or recompose the scene.
Do NOT add, remove or replace any sky, lake, water, mountain, ridge, trail, deck,
bench, building, sign, person or vehicle. Do NOT change the season, the time of day
or the weather. Do NOT add or exaggerate autumn colour or saturation.
NO glass panel, NO translucent box, NO white or cream information plate,
NO milky gradient, NO local whitening, NO blur/fog/glow behind the letters,
NO top or bottom information band, NO rounded sticker, NO speech bubble.
NO text drop shadow, NO outline, NO glow, NO 3D lettering, NO gradient on letters.
NO icon badges, NO emoji, NO check marks, NO dotted separator lines.
Keep the photograph crisp and full-bleed. Place the Korean text DIRECTLY on the
naturally bright, empty part of the photo, using weight and spacing for hierarchy.
Render every Korean character and every digit EXACTLY as written, with no substitution.
Accent colour #4F6958 is for key numbers and small labels only (under 15% of the frame).
NOT orange, NOT amber, NOT gold.
```

---

## 썸네일 · 1:1

**삽입 위치** : 글 맨 위 (본문 `썸네일문구` 줄과 짝)

**배경 사진 소스** : ⭕ **확보 · 육안 확인 완료 — 사진 1번**
```
https://tong.visitkorea.or.kr/cms/resource/80/4096180_image2_1.jpg
```
한국관광공사 포토코리아 · contentid 2774026 · **Type1(오버레이 가능)**
★실제로 연 사진 — 횡성호 수면 + 짙은 녹음의 낮은 능선 + 옅은 구름의 맑은 파란 하늘. 글자·간판·워터마크 없음. **하늘·호수면이 넓게 비어 있어 글자 자리로 적합.**

**카드 텍스트**
```
횡성호수길
9km 다 안 걸어도 돼요

입장료는 상품권으로 돌려받아요
```

**영문 프롬프트**
```
Edit the uploaded real photograph exactly as provided — Hoengseong Lake, Korea:
calm lake water in the foreground, low green forested ridges behind, pale blue sky
with soft clouds above, clear natural daylight, no sunset. Do NOT repaint, regenerate,
or invent any new scene element beyond what is already in the uploaded file. Square
1:1 crop that keeps the open sky and the lake surface visible. Place the Korean
headline "횡성호수길 / 9km 다 안 걸어도 돼요" DIRECTLY on the bright sky area in the
upper part of the frame, heavy modern Korean sans-serif, ink #16221D, generous line
spacing. Beneath it, the smaller line "입장료는 상품권으로 돌려받아요" at about 40%
of the headline size, with "상품권" in #4F6958.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 1. 횡성역 KTX 카드 · 4:5 — ★배경 미확보

**삽입 위치** : `[이미지 삽입: 횡성역과 강릉선 KTX-이음 열차]` (소제목1 끝)

**배경 사진 소스** : ❌ **미확보 — 운영자 확보 필요** (횡성역은 TourAPI 미등재)
　필요한 사진 : **횡성역 역사 외관** 또는 **승강장의 KTX-이음 열차**. 낮, 하늘이 넓게 잡힌 컷.
　구하는 곳 : 직접 촬영 / 네이버 이미지 '횡성역' / 코레일 역 안내 페이지
　★역명판이 큼직하게 박힌 정면 컷은 피한다(V2 — 사진 안 글자 0, 오버레이로만 처리).

**카드 텍스트**
```
횡성역엔 KTX가 환승 없이 와요

청량리 → 횡성역
갈아타지 않고 한 번에

첫차 06:59 · 막차 23:07

65세 이상 평일 30% 할인
```

**영문 프롬프트**
```
Edit the uploaded real photograph of Hoengseong Station (or the KTX-Eum train on its
platform), Korea. Keep the scene EXACTLY as-is; do not repaint or regenerate the
background. Vertical 4:5 crop, one continuous full-bleed photo, the open sky filling
the upper third so it stays naturally bright and empty. Place the Korean text
DIRECTLY on that bright sky area in a clean Korean sans-serif, ink #16221D:
heading (largest, heavy): 횡성역엔 KTX가 환승 없이 와요
then: 청량리 → 횡성역 / 갈아타지 않고 한 번에
then: 첫차 06:59 · 막차 23:07
then a closing line: 65세 이상 평일 30% 할인
Set "06:59", "23:07" and "30%" in #4F6958. At most two numbers per line.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 2. 횡성시외버스터미널 카드 · 4:5 — ★배경 미확보

**삽입 위치** : `[이미지 삽입: 횡성시외버스터미널 외관]` (소제목2 끝)

**배경 사진 소스** : ❌ **미확보 — 운영자 확보 필요** (터미널은 TourAPI 미등재)
　필요한 사진 : **횡성시외버스터미널 외관 정면**. 낮, 하늘이 넓게 잡힌 컷.
　구하는 곳 : 직접 촬영 / 네이버 이미지 '횡성시외버스터미널'

**카드 텍스트**
```
원주에서 오면 하루 27회예요

원주 ↔ 횡성    하루 27회 · 사실상 수시
동서울 ↔ 횡성  하루 4회 · 약 1시간50분 · 12,500원

★횡성 → 동서울 막차 18:10
```

**영문 프롬프트**
```
Edit the uploaded real photograph of the Hoengseong Intercity Bus Terminal building,
Korea. Keep the scene EXACTLY as-is; do not repaint or regenerate the background.
Vertical 4:5 crop, one continuous full-bleed photo with the open sky filling the
upper third so it stays naturally bright and empty. Place the Korean text DIRECTLY
on that bright area in a clean Korean sans-serif, ink #16221D:
heading (largest): 원주에서 오면 하루 27회예요
then two label-value rows: 원주 ↔ 횡성 · 하루 27회 · 사실상 수시 /
동서울 ↔ 횡성 · 하루 4회 · 약 1시간50분 · 12,500원
then a small warning line in heavier weight: ★횡성 → 동서울 막차 18:10
Set "27회", "18:10" and "12,500원" in #4F6958. At most two numbers per line.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 3. ★농어촌버스 길 안내 카드 · 4:5 — ★배경 미확보 (이 글에서 가장 중요한 카드)

**삽입 위치** : `[이미지 삽입: 횡성 농어촌버스와 갑천 방면 정류장]` (소제목3 끝)

**배경 사진 소스** : ❌ **미확보 — 운영자 확보 필요** (횡성 농어촌버스·정류장은 TourAPI 미등재)
　필요한 사진 : **만세공원 정류장** 또는 **횡성 농어촌버스 승차 장면**. 낮, 정류장 표지판이 작게 보이는 정도는 괜찮으나 글자가 크게 읽히는 정면 클로즈업은 피한다.
　구하는 곳 : 직접 촬영이 가장 확실하다 / 네이버 이미지 '횡성 농어촌버스' '만세공원 정류장'

**카드 텍스트** — ★버스 번호를 절대 넣지 않는다(본문에서도 끝내 확정하지 못한 값)
```
횡성역이 아니라 터미널에서 타요

타는 곳    만세공원 정류장 (터미널서 도보 5분)
내리는 곳  구방1리 · 망향의동산

★내린 뒤 도보 15분
문 앞까지 총 50분쯤

하루 3회 안팎이에요
놓치면 택시로 넘어가면 돼요
```

**영문 프롬프트**
```
Edit the uploaded real photograph of a local rural bus stop or bus in Hoengseong,
Korea. Keep the scene EXACTLY as-is; do not repaint or regenerate the background.
Vertical 4:5 crop, one continuous full-bleed photo, compose so the open sky or the
pale road surface on one side stays naturally bright and empty. Place the Korean
text DIRECTLY on that area in a clean Korean sans-serif, ink #16221D:
heading (largest, heavy): 횡성역이 아니라 터미널에서 타요
then two label-value rows, the label light and the value heavier:
  타는 곳 · 만세공원 정류장 (터미널서 도보 5분)
  내리는 곳 · 구방1리 · 망향의동산
then a warning group, slightly larger and bolder: ★내린 뒤 도보 15분 / 문 앞까지
총 50분쯤
then two closing lines: 하루 3회 안팎이에요 / 놓치면 택시로 넘어가면 돼요
Do NOT render any bus route number anywhere on this card — none is confirmed.
Set "15분", "50분" and "3회" in #4F6958. At most two numbers per line.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 4. ★횡성호수길 5구간 코스요약 타임라인 카드 · 4:5

**삽입 위치** : `[이미지 삽입: 횡성호수길 5구간 코스요약 타임라인 카드]` (소제목4 안)
**이 카드만 패널 금지의 예외다** — 번호·시각·이동을 한 줄에 꿰는 인포그래픽.

**배경 사진 소스** : ⭕ **작은 사진 인서트 가능(Type1) — 단 2~10번은 사용 전 육안 재확인 필요**
　배경은 따뜻한 오프화이트 그래픽(`#F7F4F0`). 정선·청도 회차와 같은 방식으로 **작은 실사진 2~3장을 인서트로만** 넣는다(AI 생성 컷 금지).
　인서트 후보(같은 contentid 2774026, Type1) :
```
https://tong.visitkorea.or.kr/cms/resource/81/4096181_image2_1.jpg  (2번)
https://tong.visitkorea.or.kr/cms/resource/83/4096183_image2_1.jpg  (4번)
https://tong.visitkorea.or.kr/cms/resource/89/4096189_image2_1.jpg  (7번)
```
　★이 3장은 아직 육안으로 열어보지 않았다(미검증). **제작 전 반드시 열어서 실제로 호수길 트레일·전망대·쉼터 장면인지 확인**하고, 안 맞으면 CREDITS 표의 다른 번호(3·5·6·8·9·10)로 바꿔 쓴다. 못 구하면 **사진 없이 번호+글자만으로 간다**(이쪽이 기본값).

**카드 텍스트** — ★area1과 글자 단위로 동일
```
횡성호수길 5구간 — 9km 다 안 걸어도 돼요

① 망향의동산 매표소 도착
   입장료 1,000원(65세) · 2,000원(일반)
   낸 만큼 관광상품권으로 돌려줘요
   ↓ A코스 4.5km · 도보 1시간30분
② A코스 완주 — 노을쉼터에서 쉬기
   ★여기서 돌아가도 충분해요
   ↓ 더 걷는다면 B코스(오색꿈길) 4.5km · 1시간30분
③ B코스까지 완주 — 전체 9.0km 원점회귀
   ↓ 매표소로 복귀

전체 소요    A코스만 1시간30분 · 전체 9km는 약 3시간
1인 비용     입장료 1,000원(65세) · 낸 만큼 상품권으로 환급
★마감 시각   17시에 문을 닫아요
             13시 전 도착이면 9km 전체
             14시30분 전이면 A코스 4.5km
```

**영문 프롬프트**
```
Build a vertical 4:5 Korean timeline infographic card on a plain warm off-white
background (#F7F4F0). This is the ONE card allowed to be a graphic rather than a
single photo. If the small real photo inserts above are confirmed usable, place two
or three small square photo crops beside steps ①②③ using the uploaded real
photographs exactly as they are — do NOT generate new imagery for these insets; if
no usable photo is confirmed, omit the insets and use numbers and text only.
Three numbered stops ①②③ down the left edge connected by a thin vertical line in
#4F6958, each stop showing a bold place/step name, then lighter detail lines, then
the transfer line (A코스 4.5km · 도보 1시간30분 / B코스(오색꿈길) 4.5km · 1시간30분)
in smaller grey type beside the connector.
Title at the top: 횡성호수길 5구간 — 9km 다 안 걸어도 돼요
At the bottom, three summary rows separated by generous space (NOT boxes):
  전체 소요 · A코스만 1시간30분 · 전체 9km는 약 3시간
  1인 비용 · 입장료 1,000원(65세) · 낸 만큼 상품권으로 환급
  ★마감 시각 · 17시에 문을 닫아요 · 13시 전 도착이면 9km 전체 · 14시30분 전이면
  A코스 4.5km
Render every Korean character and every digit EXACTLY as written, do not invent,
alter, drop or add any number. Keep at most two numbers per line.
NO icon badges, NO emoji, NO check marks, NO dotted lines, NO drop shadow, NO outline,
NO glow, NO 3D lettering, NO gradient on letters.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
```

---

## 이미지 5. 망향의동산과 호수 전망대 풍경 · 4:5

**삽입 위치** : `[이미지 삽입: 망향의동산과 호수 전망대 풍경]` (소제목4 끝, 억새 문단 위)

**배경 사진 소스** : ⭕ **확보(Type1) — 미검증(직접 열람 불가), 사용 전 육안 확인 필요**
```
https://tong.visitkorea.or.kr/cms/resource/82/4096182_image2_1.jpg  (3번, 1순위)
https://tong.visitkorea.or.kr/cms/resource/84/4096184_image2_1.jpg  (5번, 대안)
https://tong.visitkorea.or.kr/cms/resource/87/4096187_image2_1.jpg  (6번, 대안)
```
한국관광공사 포토코리아 · contentid 2774026 · **Type1(오버레이 가능)**
★1번(썸네일)과 다른 컷을 쓴다. 열었을 때 하늘·호수면 등 밝은 여백이 있는 구도를 고른다. **11~16번(샤스타데이지)은 계절이 안 맞아 이 카드에 쓰지 않는다.**

**카드 텍스트** — 이 카드는 정보보다 분위기 중심(사진이 주인공)
```
망향의동산에서 보는 횡성호

10월 하순~11월 초
호수 억새가 물드는 시기예요
```

**영문 프롬프트**
```
Edit the uploaded real photograph exactly as provided — Hoengseong Lake viewed from
Manghyangui-dongsan, Korea, from the same photo series as the verified hero photo
(lake water, green ridges, natural daylight, no sunset). Do NOT repaint, regenerate,
or invent any new scene element beyond what is in the uploaded file. Vertical 4:5
crop, one continuous full-bleed photo. Compose so the sky or the lake surface on one
side stays naturally bright and empty. Place the Korean text DIRECTLY on that area in
a clean Korean sans-serif, ink #16221D:
heading (largest): 망향의동산에서 보는 횡성호
then a smaller two-line caption: 10월 하순~11월 초 / 호수 억새가 물드는 시기예요
Set "10월 하순~11월 초" in #4F6958. Keep the text minimal — this card is a mood
photo, not an information card.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 6. 횡성축협 한우프라자 한우갈비탕 카드 · 4:5 — ★배경 미확보

**삽입 위치** : `[이미지 삽입: 횡성축협 한우프라자 한우갈비탕]` (소제목6 끝)

**배경 사진 소스** : ❌ **미확보 — 운영자 확보 필요** (한우체험관과 별개 업체이며 TourAPI 미등재)
　필요한 사진 : **한우갈비탕 한 그릇 상차림**(위에서 내려다본 컷이 글자 자리를 만들기 좋다) 또는 **축협건물 외관**.
　구하는 곳 : 직접 촬영 / 네이버지도 업체 사진 '횡성축협 한우프라자'

**카드 텍스트**
```
횡성축협 한우프라자

한우갈비탕 18,000원

연중무휴 11:00~21:00
읍내 중심가 · 축협건물 2층
```

**영문 프롬프트**
```
Edit the uploaded real photograph of a Korean beef short-rib soup (galbitang) table
setting, or the Hoengseong Livestock Cooperative Hanwoo Plaza building exterior,
Korea, in clear natural daylight or warm indoor light. Keep the scene EXACTLY as-is;
do not repaint or regenerate the background. Vertical 4:5 crop, one continuous
full-bleed photo. Compose so one side (the pale table surface or the bright wall)
stays naturally empty. Place the Korean text DIRECTLY on that area in a clean Korean
sans-serif, ink #16221D:
heading (largest): 횡성축협 한우프라자
then a large price line: 한우갈비탕 18,000원
then two smaller lines: 연중무휴 11:00~21:00 / 읍내 중심가 · 축협건물 2층
Set "18,000원" in #4F6958. At most two numbers per line.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 이미지 7. CTA · 16:9 — ★배경 미확보

**삽입 위치** : `[이미지 삽입: 횡성 읍내 저녁 풍경(CTA용)]` (메인 CTA 바로 위)

**배경 사진 소스** : ❌ **미확보 — 운영자 확보 필요**
　필요한 사진 : **횡성 읍내 해질녘 풍경**. ★이 글에서 노을을 쓰는 건 이 한 장뿐(V2 — 노을 남발 금지).
　구하는 곳 : 직접 촬영 / 네이버 이미지 '횡성 읍내'
　★대안 — 못 구하면 **호수길 Type1 사진(2~10번 중 하늘이 넓은 컷)을 낮 자연광 그대로** 써도 된다. 이 경우 노을 문구("저녁") 대신 "반나절" 톤으로 문구를 바꾼다.

**카드 텍스트**
```
KTX 타고 평지길만 걸어요

횡성 · 반나절
```

**영문 프롬프트**
```
Edit the uploaded real photograph of downtown Hoengseong, Korea, at dusk (or, if
using the lake trail photo instead, in clear natural daylight). Keep the scene
EXACTLY as-is; do not repaint or regenerate the background. Wide 16:9 crop, one
continuous full-bleed photo. Compose so the sky band stays naturally bright and
empty; place the Korean line "KTX 타고 평지길만 걸어요" there in a clean Korean
sans-serif, cream #F4F1EA if the sky is dark or ink #16221D if it is pale, and
beneath it the small line "횡성 · 반나절" at about 45% of that size, with "반나절"
in #4F6958.
Bottom-right watermark "blog.naver.com/witchbloom82", small, low contrast.
[여기에 위 금지 블록을 그대로 붙인다]
```

---

## 개수 대조 (영역1 ↔ 영역2 · 1:1)

| # | 영역1 이미지 삽입 포인트 | 영역2 | 비율 | 배경 사진 |
|---|---|---|---|---|
| — | 썸네일문구 (11행) | 썸네일 | 1:1 | ⭕ **확보·육안확인(1번, Type1)** |
| 1 | 횡성역과 강릉선 KTX-이음 열차 | KTX 카드 | 4:5 | ❌ 미확보 |
| 2 | 횡성시외버스터미널 외관 | 터미널 카드 | 4:5 | ❌ 미확보 |
| 3 | 횡성 농어촌버스와 갑천 방면 정류장 | 길 안내 카드 | 4:5 | ❌ 미확보 |
| 4 | 횡성호수길 5구간 코스요약 타임라인 카드 | 코스 요약 | 4:5 | ⭕ 그래픽 + Type1 인서트(미검증) |
| 5 | 망향의동산과 호수 전망대 풍경 | 풍경 카드 | 4:5 | ⭕ **확보(Type1, 미검증)** |
| 6 | 횡성축협 한우프라자 한우갈비탕 | 맛집 카드 | 4:5 | ❌ 미확보 |
| 7 | 횡성 읍내 저녁 풍경(CTA용) | CTA | 16:9 | ❌ 미확보(호수길 사진 대안 있음) |

**바로 제작 가능** 3장(썸네일·코스요약·망향의동산 풍경 — 단 2~10번은 사용 전 육안 재확인 필수) · **배경 확보 대기** 5장(KTX·터미널·버스·한우갈비탕·CTA)

사진 출처 : 한국관광공사 포토코리아 (공공누리 제1유형)
