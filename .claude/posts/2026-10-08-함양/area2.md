# 영역2 — 이미지 지시서 (함양 상림공원)

- 기준 : `.claude/image-guide.md` 통합본
- area1 이미지 삽입 포인트 **10개**와 개수·이름 1:1
- 사진 출처 대장 : `photos/CREDITS.md`

## ★이 지시서의 전제 네 가지 (먼저 읽기)

1. **배경 확보 5/10.** 상림공원(contentid 126861)에서 Type1 6장을 받아 **전부 열어 봤고**, 그중 5장을 배정했다.
   나머지 5장(축제·터미널·함화루·가을꽃·맛집)은 **관광 DB에 사진이 없다. 가짜 생성 배경으로 채우지 않았다.**
2. ★★**계절 함정을 실제로 밟기 직전이었다.** 받아 본 6장 중 `h03`·`h05`가 **붉은 양귀비 꽃밭**인데,
   양귀비는 **5~6월 꽃**이다. 그런데 두 장의 `imgname`은 나머지 16장과 똑같이 **"함양 상림공원"** 하나뿐이다.
   → **이름만 보고 7번(가을꽃) 카드에 썼으면 10월 글에 5월 꽃이 들어갔다.**
   　두 장은 **'쉬는 자리'** 카드로만 쓰고, 프롬프트에 **붉은 꽃을 크롭**하라고 박았다.
3. ★**Type3 8장이 섞여 있다.** `상림공원_1`~`상림공원_8`(`resource/30585xx`)은 **변경금지**다.
   　글자를 얹으면 라이선스 위반이다. **아래 카드 배경으로 한 장도 쓰지 않았다.**
   　★역설 : 이름이 구체적인 쪽(`상림공원_N`)이 Type3이고, 뭉뚱그려진 쪽(`함양 상림공원`)이 Type1이다.
4. **세트색은 히어로에서 뽑았다.** 1번 배경(`h06`)은 짙은 활엽수 초록 + 붉은 흙 포장로다.
   　앰버/골드를 습관적으로 쓴 게 아니다.

## 세트색

- 메인 : **상림 딥그린** `#2E5A3C` — 핵심 숫자 · 라벨 · 구분선에만(전체 15% 이하)
- 본문 글씨 : 깊은 잉크 `#16201A`(밝은 길·잔디 위) / 크림 `#F5F2EA`(짙은 숲 위)
- ★사진은 자연색 그대로. **숲을 초록 한 색으로 물들이지 않는다.** `NOT orange, NOT amber, NOT a monochrome green wash`

## 공통 지시 (모든 카드 프롬프트에 포함)

```
Edit the UPLOADED real photograph. Keep the scene EXACTLY as-is — do NOT repaint,
do NOT regenerate, do NOT relight the background. ONLY overlay the Korean text and
the watermark. Keep the photograph crisp and full-bleed across the entire frame.
NO panel, NO glass, NO translucent box, NO rounded card, NO white or foggy wash over
the photo, NO icon badges, NO circular sticker or emoji icons, NO dotted separator
lines, NO template-like side panel, NEVER split the frame 50/50.
Place the Korean text DIRECTLY on the naturally bright, empty area of the photo
(the pale dirt path, the paved walkway, open water, or sunlit grass) with a soft drop shadow.
Render the Korean characters EXACTLY as written, no substitutions, no invented glyphs.
Accent color #2E5A3C on numbers and labels only (under 15% of the frame);
natural colors everywhere else — NOT orange, NOT amber, NOT a monochrome wash.
The existing Korea Tourism Organization watermark is part of the source photo — leave it.
Add a small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

★**워터마크를 좌하단으로 뺐다** — 받아 본 6장 전부 **우하단에 한국관광공사 워터마크**가 박혀 있다.
★사용법 : ①`photos/`에서 파일을 꺼내 → ②GPT에 업로드 → ③해당 프롬프트로 글자만 얹기.

---

## 이미지 1. 썸네일 — 상림 숲길 · 1:1
- **배경 파일** : `photos/h06.jpg` — ★실물 확인함
- **소스** : https://tong.visitkorea.or.kr/cms/resource_photo/79/3522179_image2_1.jpg (126861 · **Type1**)
- **실제로 보이는 장면** : 돌로 쌓은 개울이 왼쪽을 흐르고, 오른쪽으로 **붉은 흙색 포장 산책로**가 뻗는다.
  활엽수가 위를 완전히 덮은 터널이고, **유모차를 끄는 사람**과 걷는 사람 여럿이 중간 거리에 있다.
- ★★**이 한 장이 본문 세 주장을 다 증명한다** — ①평지 ②유모차 가능 ③활엽수 그늘.
  유모차가 실제로 찍혀 있어 "유모차 끌고도 갈 수 있다"는 문장을 사진이 뒷받침한다. 그래서 썸네일로 올렸다.

**카드 텍스트**
```
함양 상림공원
입장료도 폐장시간도 없어요
```

**영문 프롬프트**
```
Edit the uploaded real photograph of Sangnim Park in Hamyang, Korea — a stone-lined
stream on the left, a wide reddish-brown paved walking path on the right, a full canopy
of broadleaf trees overhead, and several people walking in the middle distance
(one pushing a stroller). Keep the scene EXACTLY as-is; do NOT repaint or regenerate
the trees, stream, path or people.
Crop to a 1:1 square keeping the path and the stream both visible.
Overlay ONLY two lines of Korean text placed DIRECTLY on the bright empty stretch of
the paved path, with a soft drop shadow, no panel of any kind:
line 1 (large, bold, deep ink #16201A): 함양 상림공원
line 2 (medium, accent #2E5A3C): 입장료도 폐장시간도 없어요
Cover title only — NO information list, NO icons, NO boxes, NO rounded stickers,
NO dotted separators, NO white or foggy wash, NEVER split the frame.
Render the Korean characters exactly as written.
Keep the existing Korea Tourism Organization watermark.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 2. 함양산삼축제 현장 · 4:5
- **배경 파일** : ★**없음**
- **소스** : ★**미확보.** `함양산삼축제`로 TourAPI 검색 결과 **0건**이다. 축제는 관광 DB 등재 대상이 아니다.
- **운영자 진행** : ①축제 공식 사이트(`https://www.sansamfestival.or.kr/`) 갤러리에서 지난 회차 현장 사진을 받거나,
  ②사진 없이 **글자만** 카드로 간다. **다른 축제 사진을 가져다 붙이지 않는다.**

**카드 텍스트**
```
제21회 함양산삼축제
✅ 기간   2026.10.7(수)~10.11(일)
✅ 장소   상림공원 일원
✅ 10/8(목)은 축제 2일차
☎ 055-964-3353
★운영시간·체험비는 전화로 확인
```

**영문 프롬프트** (배경 사진을 구한 뒤에만 사용) — 공통 지시 + 위 텍스트를 밝은 여백에 직접 얹기.

---

## 이미지 3. 상림 숲길 평지 산책로 · 4:5
- **배경 파일** : `photos/h04.jpg` — ★실물 확인함
- **소스** : https://tong.visitkorea.or.kr/cms/resource_photo/91/3522591_image2_1.jpg (**Type1**)
- **실제로 보이는 장면** : 아주 넓은 **밝은 흙길**이 앞으로 뻗고, 양쪽에 낮은 나무 난간.
  **붉은 옷을 입은 사람 한 명**이 중간 거리에서 걸어온다. 굵은 활엽수 줄기가 프레임 양쪽을 감싼다.
  → 사람이 한 명 있어 길 폭의 스케일이 읽힌다.

**카드 텍스트**
```
상림 숲길
✅ 길이   1.6km (평지)
✅ 폭     80~200m
✅ 나무   120여 종 2만 그루 활엽수
✅ 소요   천천히 걸어 왕복 1시간 안팎
```

**영문 프롬프트**
```
Edit the uploaded real photograph: a very wide, bright, pale dirt walking path in
Sangnim Park, Hamyang, Korea, low wooden rope railings on both sides, thick broadleaf
tree trunks framing the edges, one person in a red jacket walking toward the camera
in the middle distance. Keep the scene EXACTLY as-is; do NOT repaint or regenerate
the path, trees or person.
Crop to 4:5 portrait keeping the full width of the dirt path in the lower half.
Overlay ONLY the Korean text DIRECTLY on the bright dirt path, left-aligned,
with a soft drop shadow, no panel of any kind:
heading (bold, deep ink #16201A): 상림 숲길
then plain label-value lines, the numbers in accent #2E5A3C:
길이 1.6km (평지) / 폭 80~200m / 나무 120여 종 2만 그루 활엽수 / 소요 천천히 걸어 왕복 1시간 안팎
NO icon badges, NO circular stickers, NO dotted separators, NO white or foggy wash,
NO template-like side panel, NEVER split the frame. Keep the photo crisp and full-bleed.
Keep the existing Korea Tourism Organization watermark.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 4. 함양시외버스터미널 · 4:5
- **배경 파일** : ★**없음** — 터미널은 관광 DB 미등재다.
- **운영자 진행** : 네이버지도 '함양시외버스터미널' 거리뷰·방문자 사진에서 외관 1장, 또는 글자만 카드.

**카드 텍스트**
```
함양 오는 길
✅ 터미널   함양읍 용평리 680-1
✅ 방면     대전·진주·대구서부·서울(남부/동서울)
✅ 광주     하루 1편 · 19:05 출발 · 14,700원
✅ 철도     함양군엔 역이 없어요
☎ 055-963-3567
★터미널→상림 도보 30분 안팎 (또는 택시)
```

---

## 이미지 5. 상림 연못과 석축 · 4:5
- **배경 파일** : `photos/h01.jpg` — ★실물 확인함
- **소스** : https://tong.visitkorea.or.kr/cms/resource_photo/18/3522218_image2_1.jpg (**Type1**)
- **실제로 보이는 장면** : 상림 안 **연못**이 프레임 중앙을 채우고 초록 숲이 물에 그대로 반영된다.
  오른쪽으로 **돌 석축과 자갈 산책로**, 양쪽에 나무 난간. 왼쪽에 흙길.
  → **물 반영면이 밝고 넓어** 글자 자리가 넉넉하다.
- ★area1 5번 슬롯 이름은 '함화루'인데 **함화루 사진은 확보하지 못했다.**
  　`함화루`로 TourAPI 검색 결과 0건이고, 받아 본 6장에도 누각이 없다.
  　→ 이 카드는 **연못·석축 컷으로 대체**했다. 본문 문맥(숲 안 동선)과 어긋나지 않는다.
  　★운영자가 함화루 컷을 원하면 `photos/CREDITS.md`의 **열어 보지 않은 Type1 12장**에서 찾으면 나올 수 있다.

**카드 텍스트**
```
상림 안에서 만나는 것
① 함화루   숲 입구의 2층 누각 (옛 함양읍성 남문)
② 역사인물공원   숲 가운데 · 최치원 등 11명 흉상
③ 연못과 정자   사운정 · 화수정 · 초선정
　세 곳 다 산책로에서 자연히 만나요
```

**영문 프롬프트**
```
Edit the uploaded real photograph: a pond inside Sangnim Park, Hamyang, Korea,
green forest mirrored on the still water, a dry-stone retaining wall and a gravel
walking path along the right side with wooden rope railings, a dirt path on the left.
Keep the scene EXACTLY as-is; do NOT repaint or regenerate the water, stones or trees.
Crop to 4:5 portrait keeping the bright reflective water across the middle of the frame.
Overlay ONLY the Korean text DIRECTLY on the bright water reflection, left-aligned,
with a soft drop shadow, no panel of any kind:
heading (bold, cream #F5F2EA): 상림 안에서 만나는 것
then three numbered rows in cream, the circled numbers in accent #2E5A3C:
① 함화루 숲 입구의 2층 누각 (옛 함양읍성 남문)
② 역사인물공원 숲 가운데 · 최치원 등 11명 흉상
③ 연못과 정자 사운정 · 화수정 · 초선정
and one closing line: 세 곳 다 산책로에서 자연히 만나요
NO icon badges, NO circular stickers, NO dotted separators, NO white or foggy wash,
NO template-like side panel, NEVER split the frame. Keep the photo crisp and full-bleed.
Keep the existing Korea Tourism Organization watermark.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 6. 쉬는 자리 — 숲 속 벤치 · 4:5
- **배경 파일** : `photos/h05.jpg` — ★실물 확인함
- **소스** : https://tong.visitkorea.or.kr/cms/resource_photo/10/3522410_image2_1.jpg (**Type1**)
- **실제로 보이는 장면** : 잔디밭 위에 **나무 벤치 한 개**가 단독으로 놓여 있고 뒤로 짙은 숲.
  중간에 **붉은 꽃밭**이 띠처럼 지나간다.
- ★★**크롭 주의** : 그 붉은 꽃은 **양귀비 계열(5~6월)**이다. 10월 글에 크게 들어가면 계절 오류가 된다.
  　→ **벤치와 잔디를 중심으로 잡고 붉은 꽃띠는 프레임 상단에서 잘라낸다.**

**카드 텍스트**
```
걷다가 쉬는 자리
✅ 정자   사운정 · 화수정 · 초선정
✅ 벤치   숲길 곳곳
✅ 그늘   활엽수 2만 그루
　다 걷지 않아도 괜찮아요
```

**영문 프롬프트**
```
Edit the uploaded real photograph: a single wooden bench standing alone on a mown lawn
in Sangnim Park, Hamyang, Korea, dense dark-green forest behind it.
Keep the scene EXACTLY as-is; do NOT repaint or regenerate the bench, lawn or forest.
★Crop to 4:5 portrait centred on the bench and the lawn, cutting the band of RED
FLOWERS out of the top of the frame — those flowers bloom in late spring and this
article is for early October, so they must not be prominent.
Overlay ONLY the Korean text DIRECTLY on the bright sunlit lawn, left-aligned,
with a soft drop shadow, no panel of any kind:
heading (bold, deep ink #16201A): 걷다가 쉬는 자리
then plain label-value lines, the labels in accent #2E5A3C:
정자 사운정 · 화수정 · 초선정 / 벤치 숲길 곳곳 / 그늘 활엽수 2만 그루
and one closing line in deep ink: 다 걷지 않아도 괜찮아요
NO icon badges, NO circular stickers, NO dotted separators, NO white or foggy wash,
NO template-like side panel, NEVER split the frame. Keep the photo crisp and full-bleed.
Keep the existing Korea Tourism Organization watermark.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 7. 10월 초 상림의 가을꽃 · 4:5
- **배경 파일** : ★★**없음 — 그리고 있는 사진을 쓰면 안 된다.**
- **소스** : ★**미확보.** 받아 본 6장 중 꽃이 찍힌 `h03`·`h05`는 **붉은 양귀비 계열(5~6월)**이다.
  　본문이 말하는 **황화코스모스(노란색)·버들마편초(보라)**는 전혀 다른 꽃이고, 확보된 사진에 없다.
- ★★**절대 h03·h05를 이 카드에 쓰지 마라.** 10월 글에 5월 꽃을 넣는 계절 오류가 된다.
  　`imgname`이 18장 모두 "함양 상림공원"으로 똑같아 이름만 보면 구분이 안 된다.
- **운영자 진행** : 네이버 이미지에서 `상림공원 황화코스모스`로 실사진을 구하거나, 글자만 카드로 간다.

**카드 텍스트**
```
10월 초엔 이런 꽃이
✅ 꽃무릇   9월 말~10월 초 절정 → 10/8은 끝물
✅ 황화코스모스   노란 꽃, 10월 초에도 남아요
✅ 버들마편초   보라 꽃
★단풍은 아직 일러요 — 절정은 10월 하순~11월 초
```

---

## 이미지 8. 함양갈비탕 한 상 · 4:5
- **배경 파일** : ★**없음** — 일반 식당은 관광 DB 미등재다.
- **운영자 진행** : 네이버지도 방문자 사진에서 1장, 또는 글자만 카드. **다른 집 사진을 붙이지 않는다.**

**카드 텍스트**
```
함양 상림 근처 밥집
① 함양갈비탕   갈비탕 11,000원
　 함양읍 용평길 10 (터미널 근처) · 11:00~20:30
② 조샌집   어탕국수 9,000원
　 ★목요일 휴무 — 10/8엔 못 가요
③ 상림숯불갈비   삼겹생갈비 13,000원
　 상림 정문 앞 (2026년 9월 검색 기준)
```

---

## 이미지 9. 코스요약카드 — 반나절 타임라인 · 4:5
- **배경 파일** : `photos/h02.jpg` — ★실물 확인함
- **소스** : https://tong.visitkorea.or.kr/cms/resource_photo/64/3522564_image2_1.jpg (**Type1**)
- **실제로 보이는 장면** : **밝은 흙길**이 프레임 아래 절반을 채우며 앞으로 뻗고, 양쪽에 붉은 기둥 난간.
  위는 짙은 활엽수 터널. 사람이 없어 글자 자리가 깨끗하다. → 타임라인 카드에 최적.
- ★**작은 사진 4장은 넣지 않는다.** 지점별 실사진(터미널·축제·맛집)을 못 구했고 AI 생성 컷은 금지다.
  　번호와 글자만으로 간다(image-guide 허용 대안).

**카드 텍스트**
```
상림공원 반나절 코스
① 함양시외버스터미널 도착
② 도보 30분 안팎 (또는 택시) → 상림공원
③ 함화루에서 숲길 시작 · 평지 1.6km
④ 역사인물공원 · 정자에서 쉬기
⑤ 축제 부스 구경 (10/7~11)
⑥ 점심 — 함양갈비탕
⑦ 터미널로 복귀

입장료 0원 · 폐장 시간 없음
★광주 방면은 19:05 하루 1편
★휠체어·유모차 대여는 16시 전 도착
```

**영문 프롬프트**
```
Edit the uploaded real photograph: a bright pale dirt path running forward through
Sangnim Park, Hamyang, Korea, red-brown post-and-rope railings on both sides,
a dense broadleaf canopy overhead, no people in frame.
Keep the scene EXACTLY as-is; do NOT repaint or regenerate the path or trees.
Crop to 4:5 portrait keeping the bright dirt path across the lower two thirds.
Overlay ONLY the Korean text DIRECTLY on the bright dirt path, left-aligned,
with a soft drop shadow, no panel of any kind:
heading (bold, deep ink #16201A): 상림공원 반나절 코스
then seven numbered rows, the circled numbers in accent #2E5A3C:
① 함양시외버스터미널 도착 / ② 도보 30분 안팎 (또는 택시) → 상림공원 /
③ 함화루에서 숲길 시작 · 평지 1.6km / ④ 역사인물공원 · 정자에서 쉬기 /
⑤ 축제 부스 구경 (10/7~11) / ⑥ 점심 — 함양갈비탕 / ⑦ 터미널로 복귀
then a closing block, the two starred lines emphasised in accent #2E5A3C:
입장료 0원 · 폐장 시간 없음
광주 방면은 19:05 하루 1편
휠체어·유모차 대여는 16시 전 도착
Plain Korean text only — NO icon badges, NO circular stickers, NO dotted separator lines,
NO small inset photos, NO white or foggy wash, NO template-like side panel,
NEVER split the frame. Keep the photograph crisp and full-bleed.
Keep the existing Korea Tourism Organization watermark.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 10. CTA — 상림 숲길 마무리 컷 · 16:9
- **배경 파일** : `photos/h03.jpg` — ★실물 확인함
- **소스** : https://tong.visitkorea.or.kr/cms/resource_photo/65/3522265_image2_1.jpg (**Type1**)
- **실제로 보이는 장면** : 잔디밭과 화단, **그네 의자와 벤치**, 뒤로 낮은 산.
  프레임 아래쪽에 **붉은 꽃밭**이 크게 깔려 있다.
- ★★**크롭 주의** : 그 붉은 꽃은 **양귀비 계열(5~6월)**이다.
  　→ **16:9로 자를 때 아래쪽 붉은 꽃밭을 잘라내고, 잔디밭·그네·뒷산을 중심으로** 잡는다.
  　붉은 꽃이 프레임을 채우면 10월 글에 5월 사진을 쓴 셈이 된다.

**카드 텍스트**
```
가을 함양, 상림 숲길을 천천히
```

**영문 프롬프트**
```
Edit the uploaded real photograph of Sangnim Park, Hamyang, Korea — a mown lawn with
flower beds, a wooden swing seat and a bench, low wooded hills behind,
and a broad band of RED FLOWERS across the bottom of the frame.
Keep the scene EXACTLY as-is; do NOT repaint or regenerate the lawn, trees or hills.
★Crop to 16:9 landscape centred on the lawn, the swing seat and the hills behind,
CUTTING OUT the band of red flowers along the bottom — those bloom in late spring and
this article is for early October, so they must not fill the frame.
Overlay ONLY one line of Korean text DIRECTLY on the bright sunlit lawn, centred,
with a soft drop shadow, no panel of any kind, in deep ink #16201A with the word
"상림" in accent #2E5A3C:
가을 함양, 상림 숲길을 천천히
NO icon badges, NO circular stickers, NO dotted separators, NO white or foggy wash,
NO template-like side panel, NEVER split the frame. Keep the photo crisp and full-bleed.
Natural colors — NOT an orange or sepia wash.
Keep the existing Korea Tourism Organization watermark.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 점검 (실측)

- 카드 수 **10** · area1 이미지 삽입 포인트 **10** — 번호·이름 1:1 ✔
  ★단 5번은 area1 슬롯명이 '함화루'인데 **연못·석축 컷으로 대체**했다(함화루 사진 미확보).
  ★6번은 area1 슬롯명을 '역사인물공원' → **'쉬는 자리'**로 바꿨다(흉상 사진 미확보 + 쉬는 자리는 이 블로그가 볼거리와 같은 급으로 다루는 항목).
- 비율 : 썸네일 1:1(1장) · 정보 4:5(8장) · CTA 16:9(1장) ✔
- **실배경 확보 : 5/10** (1·3·5·6·9·10 중 5장 — 2·4·7·8은 관광 DB에 사진이 없다)
  ※10번도 배경이 있으니 실제 확보는 **6장**이고 그중 `h04`가 3번, `h02`가 9번, `h01`이 5번, `h05`가 6번, `h03`이 10번, `h06`이 1번이다.
  → **배경 있는 카드 6 / 없는 카드 4**
- **육안 확인 : 6/6** ✔ 전부 열어 봤다
- 저작권 : 사용한 6장 **전부 Type1** ✔ · **Type3 8장은 배경으로 한 장도 쓰지 않았다** ✔
- ★★**계절 검증 : h03·h05의 붉은 꽃이 5~6월 양귀비**라 7번(가을꽃) 카드에 쓰지 못하게 금지 문구를 박고,
  　6번·10번엔 **크롭으로 잘라내라는 지시**를 넣었다 ✔
- 패널·아이콘 배지·점선·흰 워시 : 전 프롬프트에 금지 명시 ✔
- 세트색 : 히어로(`h06`)에서 뽑은 딥그린 `#2E5A3C` 1개, 액센트 15% 이하 ✔
- 이모지 : 카드 안에 **0개** ✔
- 워터마크 : 좌하단 (원본 6장 전부 우하단에 한국관광공사 워터마크가 있어 겹치지 않게) ✔
