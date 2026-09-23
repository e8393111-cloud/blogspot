# 영역2 — 홍천 가볼만한곳 (2026-10-05 발행 예정) 이미지 지시서 · **V2 기준**

기준 : `.claude/blog-image-project-instructions-v2.md` (2026-09-22 V2 최우선 규칙)
개정 : 2026-09-23 — V2 이전 판(장면 묘사·노을 변경·전면 세트색)을 폐기하고 다시 씀.
　　　 옛 판은 `area2-V2-CONFLICT.md`에 충돌 내역이 남아 있다.

---

## ★이 지시서를 쓰는 법 (V2 §2·§5 제작 순서)

1. 카드마다 적힌 **배경 사진 URL을 열어 파일로 저장**한다.
2. 그 파일을 **GPT 이미지 편집에 실제 입력으로 업로드**한다. ★기억이나 문장 설명으로 대체하지 않는다.
3. 아래 **영문 편집 프롬프트**를 넣어 **글자만** 얹는다.
4. 한 장 만들고 **바로 확인**한다 → 문구·숫자·비율·출처·장소·패널/블러 잔존·모바일 가독성.
5. 원본 장면이 바뀌었으면 **실패**다. 같은 프롬프트로 3번째를 만들지 않는다(V2 §8).

## ★공통 규칙 (모든 카드에 적용)

**포인트색 : `#3E6374`** (홍천강 물빛 블루그레이) — 글 전체에서 이 한 가지만 쓴다.
　★**쓰는 자리를 좁힌다** — **핵심 숫자 · 제목 한 줄 · 얇은 구분선**에만. 라벨 전체에 칠하지 않는다(V2 §색과 여백).
**글자색** : 밝은 사진 위에는 짙은 잉크 `#182229` · 어두운 부분 위에는 크림 `#F4F1EA`
**워터마크** : `blog.naver.com/witchbloom82` · **우하단**
　★원본에 **한국관광공사 워터마크가 이미 우하단에 있으면 겹치지 않게 좌하단으로** 옮긴다.
　**원저작자 출처·워터마크는 절대 지우지 않는다**(V2 §7).
**출처 표기(공공누리 의무)** — 본문 맨 아래 한 줄 : `사진 출처 : 한국관광공사 포토코리아 (공공누리 제1유형)`

### 절대 금지 (V2 §4 + 타이포그래피)
```
NO glass panel, NO frosted effect, NO translucent white box, NO opaque info box,
NO cream info plate, NO hazy white gradient, NO local whitening,
NO fog / blur / glow behind the text, NO top or bottom info bar,
NO rounded sticker, NO speech bubble.
NO text drop shadow, NO outline, NO glow, NO 3D lettering, NO gradient on letters.
NO adding, removing or replacing sky, mountains, trees, flowers, paths, buildings,
people, vehicles, buses, signs or facilities.
NO season change, NO weather change, NO exaggerating flowers / autumn leaves / snow / mist.
NO adding a lake, trail or bus stop that is not in the original.
NO heavy HDR, NO over-sharpening, NO over-saturation, NO orange/gold colour wash.
Do NOT make the real photograph look like an illustration, a render or an AI composite.
```
★**가독성이 나쁘면 패널을 넣지 말고** 글자 위치·크기·색·줄바꿈을 바꾼다(V2 §절대 금지).

### 허용되는 수정만 (V2 §3)
```
Crop and resize to the target aspect ratio.
Subtle brightness / contrast / saturation / colour-temperature adjustment.
Natural horizon and framing cleanup.
Add the exact Korean card text, the watermark and the credit.
Adjust text position, size and line breaks for mobile readability.
```
> 기준선 : **실제 사진 그대로 보이되, 블로그 카드로 보기 좋게 살짝 다듬은 정도**

### ★글자 자리 정하는 법 — 단정하지 않는다
이번 회차 사진은 **육안 미확인**이다(`photos/CREDITS.md` §4). 어느 쪽이 비어 있는지 **내가 알 수 없다.**
→ 프롬프트는 **`the naturally bright, empty side of the uploaded photo (left or right — whichever it already is)`**로 쓴다.
→ 제작자가 **원본을 보고 좌/우를 정한다.** V2 §디자인 기준의 *"정보는 사진 여백의 왼쪽 또는 오른쪽에 세로로 정돈한다"*를 따른다.
★**구도를 만들라고 지시하지 않는다**(`compose` 금지). 이미 있는 여백을 쓴다.

### 폰트
현대적이고 단정한 고딕. **폰트명을 단정하지 않는다** — V2는 *"이미지 생성에 폰트명을 적은 것은 실제 폰트 적용을 보장하지 않는다"*고 한다.
제목은 탄탄한 중간~굵은 고딕, 본문은 또렷한 중간 굵기. **굵기와 간격으로 위계를 만든다.**

---

## ★제작 가능/불가 현황

| 카드 | 배경 | V2 처리 |
|---|---|---|
| 썸네일 · 이미지 3 · 4 · 5 · 6 · CTA | ✅ Type1 실사진 확보 | **제작한다** |
| 이미지 2 (은행나무숲) | ⚠ Type3(변경금지) | **글자 없이 원본 그대로 삽입** |
| 이미지 1 · 7 · 8 · 9 | ❌ 배경 미확보 | **제작하지 않는다** (아래 §마지막) |

→ 실제 제작 세트 = **썸네일 1 + 정보카드 5 + CTA 1**. V2 §4 템플릿(`썸네일 1 + 정보카드 4~6 + CTA 1`) 범위에 든다.

---

# 썸네일 · 1:1

**삽입 위치** : 글 맨 위 (본문 `썸네일문구` 줄에 대응)
**배경 사진(실제 입력)** : `https://tong.visitkorea.or.kr/cms/resource/64/3584664_image2_1.jpg`
　홍천_홍천강 (2) · contentid 125745 · **Type1**
　⚠**이 사진은 서면 팔봉 권역이다.** 본문 주인공인 홍천읍 잔도 구간이 아니다.
　썸네일은 표지라 장소를 특정하지 않으므로 사용 가능하되, **캡션으로 "잔도"라고 부르지 않는다.**

**카드 텍스트** (표지 — 정보 나열 금지)
```
홍천 가볼만한곳
버스로 되는 코스만
```
★이모지는 **본문 썸네일문구 줄에만** 둔다. 카드 안에는 넣지 않는다.

**영문 편집 프롬프트**
```
Edit the uploaded real photograph. Keep the scene EXACTLY as it is — do not repaint,
regenerate or recompose anything in it.
Crop it to a 1:1 square, keeping the main subject intact. Apply only a subtle
brightness and contrast adjustment.
Place this Korean text directly on the naturally bright, empty side of the uploaded
photo (left or right — whichever it already is), set vertically stacked and left-aligned,
in a clean modern gothic typeface, with NO panel and NO effect behind the letters:
  line 1 (large, bold):  홍천 가볼만한곳
  line 2 (smaller):      버스로 되는 코스만
Use deep ink #182229 on bright areas, or cream #F4F1EA on dark areas.
Use the accent colour #3E6374 on line 1 ONLY.
Add the watermark "blog.naver.com/witchbloom82" in the bottom-right corner at low opacity;
if the original already has a watermark there, put ours in the bottom-left instead and
leave the original watermark untouched.
[위 '절대 금지' 블록 전체를 여기에 붙일 것]
```

---

# 이미지 2. 광원리 은행나무숲 · 원본 그대로

**삽입 위치** : area1 78행
**배경 사진** : `https://tong.visitkorea.or.kr/cms/resource/70/3494170_image2_1.jpg`
　홍천 은행나무숲 · contentid 1899635 · **Type3(변경금지)**

## ❌카드를 만들지 않는다 — 글자를 얹으면 라이선스 위반
`cpyrhtDivCd = Type3`는 공공누리 1유형 + **변경금지**다.
V2 §7의 *"원저작자 워터마크·출처가 훼손되지 않음"*과도 같은 방향이다.

→ **원본을 무보정으로 본문에 넣는다.** 크롭도 하지 않는다.
→ 설명은 **본문 캡션 줄**로 대신한다:
```
▲ 광원리 은행나무숲 (사진 : 한국관광공사 포토코리아)
```
★이 글에서 은행나무숲은 **"못 가는 곳"** 참고컷이라 용도와 라이선스가 맞아떨어진다.

---

# 이미지 3. 홍천강 잔도 산책로 · 4:5

**삽입 위치** : area1 93행
**배경 사진(실제 입력)** : `https://tong.visitkorea.or.kr/cms/resource/61/3584661_image2_1.jpg`
　홍천_홍천강 (5) · contentid 125745 · **Type1**
⚠**이 사진은 잔도 구간이 아니다**(서면 팔봉 권역). 본문에 넣을 때 캡션을 정직하게 단다:
```
▲ 홍천강 (자료사진 · 한국관광공사 포토코리아)
```
★**원본에 없는 데크·잔도를 그려 넣지 않는다**(V2 §4).

**카드 텍스트**
```
터미널 건너편, 걸어서 1~2분

길이     데크 266m + 잔도 317m = 583m
폭       2m · 평지
쉴 곳    벤치 · 무대데크 그늘
화장실   터미널 대합실 바로 옆
```
★포인트색은 **`583m` 한 곳**에만.

**영문 편집 프롬프트**
```
Edit the uploaded real photograph. Keep the scene EXACTLY as it is — do not repaint,
regenerate or recompose anything, and do not add any deck, boardwalk, bench or facility
that is not already in the photo.
Crop it to 4:5. Apply only a subtle brightness and contrast adjustment.
Place this Korean text directly on the naturally bright, empty side of the uploaded photo
(left or right — whichever it already is), arranged vertically with generous spacing,
in a clean modern gothic, with NO panel and NO effect behind the letters:
  headline (bold):  터미널 건너편, 걸어서 1~2분
  then label-value lines, label lighter weight, value medium weight,
  at most two numbers per line, rendered EXACTLY as written:
    길이     데크 266m + 잔도 317m = 583m
    폭       2m · 평지
    쉴 곳    벤치 · 무대데크 그늘
    화장실   터미널 대합실 바로 옆
Apply the accent colour #3E6374 to "583m" ONLY. Everything else in deep ink #182229
(or cream #F4F1EA if it sits over a dark part of the photo).
Build the hierarchy with weight and spacing, not with boxes or icons.
Add the watermark "blog.naver.com/witchbloom82" bottom-right at low opacity; if the original
already has one there, put ours bottom-left and leave the original untouched.
[위 '절대 금지' 블록 전체를 여기에 붙일 것]
```

---

# 이미지 4. 수타사 · 4:5

**삽입 위치** : area1 117행
**배경 사진(실제 입력)** : `https://tong.visitkorea.or.kr/cms/resource/83/3532983_image2_1.jpg`
　홍천 수타사 (2) · contentid 125764 · **Type1**

**카드 텍스트**
```
수타사는 입장료도 주차도 없어요

입장료   무료
주차     무료
운영     연중무휴 상시 개방
마감     폐장·매표·입장 마감 모두 없음
```
★포인트색은 **`무료` 두 글자**에만(첫 줄 `입장료 무료`).

**영문 편집 프롬프트**
```
Edit the uploaded real photograph of a Korean temple. Keep the scene EXACTLY as it is —
do not repaint, regenerate or recompose the building, roof, trees or sky.
Crop it to 4:5. Apply only a subtle brightness and contrast adjustment.
Place this Korean text directly on the naturally bright, empty side of the uploaded photo
(left or right — whichever it already is), arranged vertically, in a clean modern gothic,
with NO panel and NO effect behind the letters:
  headline (bold):  수타사는 입장료도 주차도 없어요
  then label-value lines, rendered EXACTLY as written:
    입장료   무료
    주차     무료
    운영     연중무휴 상시 개방
    마감     폐장·매표·입장 마감 모두 없음
Apply the accent colour #3E6374 to the first "무료" ONLY. Everything else in deep ink
#182229 (or cream #F4F1EA over dark areas).
Add the watermark "blog.naver.com/witchbloom82" bottom-right at low opacity; if the original
already has one there, put ours bottom-left and leave the original untouched.
[위 '절대 금지' 블록 전체를 여기에 붙일 것]
```

---

# 이미지 5. 수타사 버스 짝맞춤 · 3:4  ★이 글에서 가장 중요한 카드

**삽입 위치** : area1 118행
**배경 사진(실제 입력)** : `https://tong.visitkorea.or.kr/cms/resource/85/3532985_image2_1.jpg`
　홍천 수타사 (4) · contentid 125764 · **Type1**
★**비율을 3:4로 올렸다** — 시각이 6개라 4:5에 넣으면 글자가 빽빽해진다(V2 §이미지별 형식: 정보량이 많으면 3:4).

## ★숫자가 틀리면 독자가 갇힌다
`16:30 + 40분 = 17:10 도착`인데 **나오는 막차가 17:20**이다. 이 카드가 그 짝을 보여주는 카드다.
**한 글자도 바꾸지 말 것.**

**카드 텍스트**
```
들어가는 차와 나오는 차는 짝으로

12:30 들어가 → 17:20 나오기
약 4시간 · 가장 편해요

06:15 들어가 → 13:20 나오기
더 일찍 움직이고 싶다면

16:30 차는 타지 마세요
10분 만에 되돌아 타야 해요
```
★포인트색은 **`16:30 차는 타지 마세요`** 한 줄에만. 나머지 시각은 잉크색.
★산소길 정보(3.8km / 12km)는 **이 카드에서 뺐다** — 시각과 섞이면 오독한다. 본문에만 둔다.

**영문 편집 프롬프트**
```
Edit the uploaded real photograph of a forest path. Keep the scene EXACTLY as it is —
do not repaint, regenerate or recompose the trees, path, stream or light, and do not
change the season.
Crop it to 3:4. Apply only a subtle brightness and contrast adjustment.
Place this Korean text directly on the naturally bright, empty side of the uploaded photo
(left or right — whichever it already is), arranged vertically in three grouped blocks
with clear spacing between the groups, in a clean modern gothic, with NO panel and NO
effect behind the letters. Render every time EXACTLY as written:
  headline (bold):        들어가는 차와 나오는 차는 짝으로
  group 1 line a (medium): 12:30 들어가 → 17:20 나오기
  group 1 line b (small):  약 4시간 · 가장 편해요
  group 2 line a (medium): 06:15 들어가 → 13:20 나오기
  group 2 line b (small):  더 일찍 움직이고 싶다면
  group 3 line a (medium): 16:30 차는 타지 마세요
  group 3 line b (small):  10분 만에 되돌아 타야 해요
Apply the accent colour #3E6374 to "16:30 차는 타지 마세요" ONLY. Everything else in deep
ink #182229 (or cream #F4F1EA over dark areas).
Optionally separate the three groups with a thin hairline rule in #3E6374. No other
decoration, no icons, no check marks, no arrows other than the → already in the text.
Add the watermark "blog.naver.com/witchbloom82" bottom-right at low opacity; if the original
already has one there, put ours bottom-left and leave the original untouched.
[위 '절대 금지' 블록 전체를 여기에 붙일 것]
```

---

# 이미지 6. 무궁화수목원 · 4:5

**삽입 위치** : area1 133행
**배경 사진(실제 입력)** : `https://tong.visitkorea.or.kr/cms/resource/42/3450142_image2_1.jpg`
　무궁화수목원 (3) · contentid 2774013 · **Type1**
★**같은 장소의 `3037088`~`3037096` 9장은 Type3다.** 절대 배경으로 쓰지 말 것.

## ★★area1은 이 자리를 '야경'으로 적었지만 배경은 낮 사진일 가능성이 높다
**V2 §4는 낮을 밤으로 바꾸는 것(날씨·시간대 변경)을 금지**한다.
→ **원본이 낮이면 낮 그대로 쓰고, 카드 문구로 야간 정보를 전달한다.** 억지로 밤으로 만들지 않는다.
→ 야경 컷이 꼭 필요하면 **홍천군 공식 SNS 사용 허락**으로 따로 구한다.
→ 그에 맞춰 **area1 118행 슬롯 이름을 '무궁화수목원 은하수 돌담길 야경' → '무궁화수목원'으로 고치는 게 맞다**(본문 수정은 별도 권한 — V2 §내용 정확성).

**카드 텍스트**
```
10월 5일은 월요일이라 야간개장이 없어요

야간개장     9/18~10/11 · 금·토·일만 · 18:00~21:00
마지막 기회   10/9(금) · 10/10(토) · 10/11(일)
낮 운영      09:00~18:00 (3~10월)
입장료       무료 · 주차 무료
```
★포인트색은 **`금·토·일만`**에만.

**영문 편집 프롬프트**
```
Edit the uploaded real photograph of an arboretum garden. Keep the scene EXACTLY as it is —
do not repaint, regenerate or recompose it, and do NOT turn day into night or change the
weather or season.
Crop it to 4:5. Apply only a subtle brightness and contrast adjustment.
Place this Korean text directly on the naturally bright, empty side of the uploaded photo
(left or right — whichever it already is), arranged vertically, in a clean modern gothic,
with NO panel and NO effect behind the letters. Render every date and time EXACTLY as written:
  headline (bold):  10월 5일은 월요일이라 야간개장이 없어요
  then label-value lines:
    야간개장     9/18~10/11 · 금·토·일만 · 18:00~21:00
    마지막 기회   10/9(금) · 10/10(토) · 10/11(일)
    낮 운영      09:00~18:00 (3~10월)
    입장료       무료 · 주차 무료
Apply the accent colour #3E6374 to "금·토·일만" ONLY. Everything else in deep ink #182229
(or cream #F4F1EA over dark areas).
Add the watermark "blog.naver.com/witchbloom82" bottom-right at low opacity; if the original
already has one there, put ours bottom-left and leave the original untouched.
[위 '절대 금지' 블록 전체를 여기에 붙일 것]
```

---

# CTA · 16:9

**삽입 위치** : area1 192행 `[메인 CTA]` 바로 위
**배경 사진(실제 입력)** : `https://tong.visitkorea.or.kr/cms/resource/66/3584666_image2_1.jpg`
　홍천_홍천강 (4) · contentid 125745 · **Type1**

## ★옛 판의 '노을로 바꾸라'를 삭제했다
V2 §4가 **날씨·색조 변경과 주황/골드 색조 통일을 금지**한다. **원본의 빛 그대로** 쓴다.

**카드 텍스트** (V2 §이미지별 형식 기본 CTA 문구 반영)
```
공감 💗 + 이웃추가
뚜벅이 당일치기 코스 꾸준히 올려요
```
★V2가 정한 기본 CTA 문구다. area1의 `[메인 CTA]` 줄(`이번 주말, 홍천강 잔도부터 천천히 걸어보세요!`)은 **본문에 그대로 두고**, 카드에는 이 문구를 쓴다.

**영문 편집 프롬프트**
```
Edit the uploaded real photograph of a river. Keep the scene EXACTLY as it is — do not
repaint, regenerate or recompose it, and do NOT change the time of day, the light or the
weather. Keep the original colours.
Crop it to 16:9. Apply only a subtle brightness and contrast adjustment.
Place this Korean text directly on the naturally bright, empty area of the uploaded photo,
in a clean modern gothic, with NO panel and NO effect behind the letters:
  line 1 (bold):    공감 💗 + 이웃추가
  line 2 (smaller): 뚜벅이 당일치기 코스 꾸준히 올려요
Use cream #F4F1EA over darker water, or deep ink #182229 over bright sky — whichever the
photo actually gives. Apply the accent colour #3E6374 to line 1 ONLY.
Add the watermark "blog.naver.com/witchbloom82" bottom-right at low opacity; if the original
already has one there, put ours bottom-left and leave the original untouched.
[위 '절대 금지' 블록 전체를 여기에 붙일 것]
```

---

# ★배경 미확보 4장 — V2 §8 fallback을 적용한다

| area1 슬롯 | 대상 | 상태 |
|---|---|---|
| 58행 | 홍천종합버스터미널 외관 | ❌ 관광 DB 미등재 |
| 143행 | 홍천중앙시장 전경 | ❌ 관광 DB 미등재 |
| 155행 | 홍천막국수 상차림 | ❌ 일반 식당은 등재 대상 아님 |
| 156행 | 양지말화로구이 상차림 | ❌ 위와 같음 |

**V2 §8** : *"그래도 원본 보존이 안 되면 **실제 원본 사진을 그대로 삽입하고 정보는 네이버 본문 텍스트로 처리**한다."*
**V2 §2** : 실제 사진이 없는데 비슷한 장소를 새로 생성하는 것은 **금지**.

→ ★**이 4장은 카드를 만들지 않는다.** 가짜 배경으로 채우지 않는다.
→ **정보는 이미 area1 본문에 전부 들어 있다**(터미널 주소·전화, 시장 장날, 맛집 가격·주소·전화). **추가 작업이 없다.**
→ **배경을 구하면** 위 카드들과 같은 형식으로 만들면 된다. 확보 경로 —
　① 운영자 직접 촬영 ② 홍천군 공식 SNS 사용 허락 ③ 가게 SNS 사용 허락
→ 그때까지 area1의 해당 `[이미지 삽입]` 줄은 **운영자가 직접 찍은 사진을 넣는 자리**로 둔다.

---

## 1:1 대응 점검

| area1 이미지 삽입 | area2 | 제작 |
|---|---|---|
| 58 홍천종합버스터미널 외관 | — | ❌ 배경 미확보 |
| 78 광원리 은행나무숲 참고 사진 | 이미지 2 | ⚠ Type3 · **원본 그대로** |
| 93 홍천강 잔도 산책로 데크 전경 | 이미지 3 | ✅ |
| 117 수타사 대적광전 | 이미지 4 | ✅ |
| 118 수타사 산소길 숲길 | 이미지 5 | ✅ (3:4) |
| 133 무궁화수목원 은하수 돌담길 야경 | 이미지 6 | ✅ (★슬롯명 수정 권고 — 낮 사진) |
| 143 홍천중앙시장 전경 | — | ❌ 배경 미확보 |
| 155 홍천막국수 상차림 | — | ❌ 배경 미확보 |
| 156 양지말화로구이 상차림 | — | ❌ 배경 미확보 |
| (썸네일문구 줄) | 썸네일 1:1 | ✅ |
| (메인 CTA 줄) | CTA 16:9 | ✅ |

**실제 제작 = 썸네일 1 + 정보카드 4 + CTA 1 + 원본삽입 1.**
V2 §4 템플릿(`썸네일 1 + 정보카드 4~6 + CTA 1`)에 든다.

## 자체검수 체크리스트 (V2 §7 · 한 장 만들 때마다)
- [ ] 원본 실제 장소가 그대로인가 (지형·시설·사람·계절·날씨 변화 0)
- [ ] 원본에 없던 요소가 생기지 않았나
- [ ] 문구·숫자·비율이 이 지시서와 **한 글자씩** 같은가 (특히 이미지 5의 시각 6개)
- [ ] 글자 뒤 패널·미백·안개·블러·**그림자**가 없는가
- [ ] 원저작자 워터마크·출처가 훼손되지 않았나
- [ ] 포인트색이 **한 곳**에만 쓰였는가
- [ ] 모바일에서 읽히는가
- [ ] 카드 세트가 같은 디자인 언어인가

★**'실제 사진에 디자인을 얹은 것'이 아니라 'AI가 새 풍경을 만든 것'처럼 보이면 즉시 실패 처리한다.**
