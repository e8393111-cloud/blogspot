# 영역2 — 이미지 지시서 (부안 내소사·채석강)

- 기준 : `.claude/image-guide.md` 통합본
- area1 이미지 삽입 포인트 10개와 **개수·이름 1:1**
- 사진 출처 대장 : `photos/CREDITS.md`

## ★이 지시서의 전제 네 가지 (먼저 읽기)

1. ★★**채석강 사진은 '물때'를 보고 고른다.** 이 글의 핵심이 *"물이 빠져야 걷는다"*인데
   **물이 차 있는 컷을 6번 카드 배경으로 쓰면 본문과 정면으로 어긋난다.**
   → 6번은 **퇴적암 층리가 드러난 컷**, 7번은 **일부러 물이 찬 컷**(대비용)이다. 헷갈리지 말 것.
2. **배경은 넉넉하다.** 내소사·전나무숲길·채석강이 **전부 Type1**이라 제 장소 사진을 그대로 쓴다.
   ★단 **내소사 4039332 한 장만 Type3**다 — 그 파일에는 글자를 얹지 않는다.
3. **세트색은 확정이 아니다.** 프록시 차단으로 히어로 사진을 열지 못했다.
   아래 `변산 딥틸`은 글감 기준 제안이고, 운영자가 1번 배경을 열어 실제 색을 보고 확정한다.
   ★확정 전까지 앰버/골드로 되돌리지 않는다 — 바다와 상록 숲이 주조다.
4. **10장 중 2장은 배경이 없다.** 터미널·맛집. **가짜 생성 배경으로 채우지 않는다.**

## 세트색 (제안, 확정 전)

- 메인 : **변산 딥틸** `#2B5A63` — 핵심 숫자 · 라벨 · 구분선에만(전체 15% 이하)
- 본문 글씨 : 깊은 잉크 `#16201C`(밝은 하늘·모래 위) / 크림 `#F5F3EE`(어두운 암반·숲 위)
- ★금지 : `NOT orange, NOT amber, NOT a monochrome warm wash`

## 공통 지시 (모든 카드 프롬프트에 포함)

```
Edit the UPLOADED real photograph. Keep the scene EXACTLY as-is — do NOT repaint,
do NOT regenerate, do NOT relight the background. ONLY overlay the Korean text and
the watermark. Keep the photograph crisp and full-bleed across the entire frame.
NO panel, NO glass, NO translucent box, NO rounded card, NO white or foggy wash over
the photo, NO icon badges, NO circular sticker or emoji icons, NO dotted separator
lines, NO template-like side panel, NEVER split the frame 50/50.
Place the Korean text DIRECTLY on the naturally bright, empty area of the photo
(open sky, sea, pale sand, or soft out-of-focus foliage) with a soft drop shadow.
Render the Korean characters EXACTLY as written, no substitutions, no invented glyphs.
Accent color #2B5A63 on numbers and labels only (under 15% of the frame);
natural colors everywhere else — NOT orange, NOT amber, NOT a monochrome warm wash.
Small watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity.
```

**사용법** — ①아래 사진 URL을 열어 저장 → ②GPT에 업로드 → ③해당 카드 프롬프트로 글자만 얹기

---

## 이미지 1. 썸네일 — 채석강 퇴적암 위에서 바라본 서해 · 1:1

- **삽입 위치** : area1 14행 (첫 5줄 직후)
- **실배경** : TourAPI · **채석강** contentid 128982 · **Type1**
  https://tong.visitkorea.or.kr/cms/resource/01/4103801_image2_1.jpg
  (대안 : .../00/4103800_image2_1.jpg · .../44/3356644_image2_1.jpg)
  ★**육안 미확인.** 열어서 ⓐ**물이 빠져 퇴적암이 드러난 컷**인지 ⓑ간판·글자가 없는지 확인 후 사용.
- **카드 텍스트** (이모지 없음)
  ```
  부안 내소사 · 채석강
  둘 다 무료인데
  왜 하루에 다 못 볼까요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of Chaeseokgang cliffs in Buan-gun, Jeollabuk-do,
  Korea — layered sedimentary rock shelves exposed at low tide with the Yellow Sea
  beyond, clear natural daylight, one continuous full-bleed photo filling the whole
  square frame. Keep the scene EXACTLY as-is; do NOT repaint or regenerate the
  background; ONLY overlay Korean text. Compose so the open sea or sky stays naturally
  bright and empty. Place this Korean headline DIRECTLY on that bright area with a soft
  drop shadow, three lines, large bold cover type, nothing else:
  "부안 내소사 · 채석강" / "둘 다 무료인데" / "왜 하루에 다 못 볼까요"
  Render the Korean characters EXACTLY as written. This is a COVER — headline only,
  NO information lists, NO icons, NO boxes.
  Accent color #2B5A63 on "무료" only; body type deep ink #16201C on bright sky,
  or cream #F5F3EE if the sea is dark. Natural colors everywhere — NOT orange,
  NOT amber, NOT a monochrome warm wash. NO panel, NO glass, NO rounded card, NO white
  or foggy wash, NO icon badges, NO dotted lines, NEVER split the frame.
  Small watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity. 1:1 square.
  ```

---

## 이미지 2. 코스요약카드 — 두 갈래 반나절 타임라인 · 4:5

- **삽입 위치** : area1 39행 (3초요약 박스 직후)
- **실배경** : **내소사 전나무 숲길** contentid 2759612 · **Type1**
  https://tong.visitkorea.or.kr/cms/resource/79/3519979_image2_1.jpg
  ★작은 사진을 쓸 경우에도 Type1만 — 전나무숲길 3519980·3519981, 채석강 4103802·4103803.
  　구하지 못하면 **사진 없이 번호+글자만으로** 간다.
- ★이 카드는 `CLAUDE.md`가 명시한 **'패널 금지'의 유일한 예외**(타임라인 인포그래픽).
- ★★**이 글은 코스가 두 갈래다.** 하나로 합치지 말고 **좌우 또는 상하 두 줄기**로 그린다.
- **카드 텍스트**
  ```
  부안, 둘 중 하나만 고르세요

  [A] 내소사 반나절
  ① 부안종합버스터미널
     터미널에서 내소사행 다음 편 확인 (1666-2429)
  ② 내소사 일주문
  ③ 전나무숲길 600m · 왕복 20~30분
  ④ 대웅보전 · 경내
     ★일몰에 문을 닫아요

  [B] 채석강 반나절
  ① 부안종합버스터미널
     터미널에서 격포행 다음 편 확인
  ② 격포 · 채석강
     ★상시 개방 — 대신 간조 전후 2시간만 걸을 수 있어요
  ③ 격포항 · 점심

  입장료     내소사 무료 · 채석강 무료
  서울 막차  강남센트럴 17:50 · 동서울 19:30
  ★버스 소요 시간과 농어촌버스 시각은 확보하지 못해 비워 뒀어요
  ```
  ★**버스 소요·농어촌버스 시각을 지어내지 말고 위처럼 비워 둔다.**
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of the fir-tree forest path at Naesosa temple,
  Buan-gun, Korea — tall straight firs lining a soft earthen walkway, clear natural
  daylight, one continuous full-bleed photo filling the whole 4:5 frame. Keep the scene
  EXACTLY as-is; do NOT repaint or regenerate it. Overlay a TWO-BRANCH timeline
  infographic — two separate vertical tracks side by side, labelled "[A] 내소사 반나절"
  and "[B] 채석강 반나절" — using the Korean text below rendered EXACTLY as written.
  This ONE card may use a restrained deep-teal tinted strip (about 25% opacity,
  #2B5A63) behind each track so the numbers stay legible — the photograph must remain
  clearly visible through it; NEVER a milky white or frosted-opaque panel, NEVER a
  50/50 hard divide between photo and graphic.
  Numbers ①②③④ in #2B5A63, connected by thin vertical rules; a three-row summary block
  at the bottom spanning both tracks.
  Korean text:
  헤드라인 "부안, 둘 중 하나만 고르세요"
  좌측 "[A] 내소사 반나절" ① "부안종합버스터미널 / 터미널에서 내소사행 다음 편 확인 (1666-2429)"
    ② "내소사 일주문" ③ "전나무숲길 600m · 왕복 20~30분" ④ "대웅보전 · 경내 / 일몰에 문을 닫아요"
  우측 "[B] 채석강 반나절" ① "부안종합버스터미널 / 터미널에서 격포행 다음 편 확인"
    ② "격포 · 채석강 / 상시 개방 — 대신 간조 전후 2시간만 걸을 수 있어요" ③ "격포항 · 점심"
  하단 "입장료  내소사 무료 · 채석강 무료"
  하단 강조 "서울 막차  강남센트럴 17:50 · 동서울 19:30"
  하단 "버스 소요 시간과 농어촌버스 시각은 확보하지 못해 비워 뒀어요"
  Keep one or two numbers per line. NO icon badges, NO circular sticker or emoji icons,
  NO dotted separator lines, NO white or foggy wash. Natural colors — NOT orange,
  NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity.
  4:5 portrait.
  ```

---

## 이미지 3. 부안종합버스터미널 외관과 대합실 · 4:5

- **삽입 위치** : area1 67행 (시외버스 시간표·공식 링크 직후)
- **실배경** : ★**미확보.** 터미널은 관광 콘텐츠가 아니라 TourAPI 대상이 아니다.
  → 운영자가 **네이버지도 플레이스 사진 또는 직접 촬영본**으로 채운다.
  → 못 구하면 이 카드를 빼고 area1 67행의 삽입 포인트도 함께 지운다.
  ★**이 글에서 가장 아쉬운 컷이다** — 독자가 농어촌버스 편성을 물어볼 바로 그 창구다.
- **카드 텍스트**
  ```
  서울행 막차, 터미널마다 달라요

  강남센트럴 방면   07:00 · 08:40 · 10:20 · 12:00(일반)
                    13:40 · 16:10 · 17:50 ← 막차
  동서울(강변) 방면  07:50(일반) · 11:10(일반) · 12:50
                    14:50 · 17:00(일반) · 19:30 ← 막차

  요금   일반 17,000원 · 우등 23,100원
         (우등은 좌석이 넓은 고급 버스예요)

  ★막차가 1시간 40분이나 차이나요
  ★예매할 때 어느 터미널로 갈지부터 정하세요
  ★위 시각은 모두 '부안 출발' 기준이에요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of Buan intercity bus terminal in Buan-gun, Korea,
  in clear natural daylight — the building exterior or the waiting hall with its
  departure board, one continuous full-bleed photo filling the whole 4:5 frame.
  Keep the scene EXACTLY as-is; do NOT repaint or regenerate it; ONLY overlay the
  Korean text. Compose so one vertical side (open sky or a pale wall) stays naturally
  bright and empty, and place the text DIRECTLY on that bright area with a soft drop
  shadow — NO panel, NO glass, NO box, NO rounded card, NO white or foggy wash, NO icon
  badges, NO dotted separator lines, NEVER split the frame. This card must read like a
  DEPARTURE BOARD: destination on the left, times on the right, the two last-bus times
  largest. Korean text rendered EXACTLY as written:
  헤드라인 "서울행 막차, 터미널마다 달라요"
  "강남센트럴 방면  07:00 · 08:40 · 10:20 · 12:00(일반) · 13:40 · 16:10 · 17:50 ← 막차"
  "동서울(강변) 방면  07:50(일반) · 11:10(일반) · 12:50 · 14:50 · 17:00(일반) · 19:30 ← 막차"
  "요금  일반 17,000원 · 우등 23,100원 (우등은 좌석이 넓은 고급 버스예요)"
  "막차가 1시간 40분이나 차이나요"
  "예매할 때 어느 터미널로 갈지부터 정하세요"
  "위 시각은 모두 '부안 출발' 기준이에요"
  Accent #2B5A63 on "17:50", "19:30" and "1시간 40분" only. Natural colors —
  NOT orange, NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right,
  55% opacity. 4:5 portrait.
  ```

---

## 이미지 4. 내소사 일주문 · 4:5

- **삽입 위치** : area1 84행 (내소사 관람료·운영시간 문단 직후)
- **실배경** : **내소사(부안)** contentid 126352 · **Type1**
  https://tong.visitkorea.or.kr/cms/resource/97/4090597_image2_1.jpg (외부_1-1)
  (대안 : .../98/4090598_image2_1.jpg · .../88/4090588_image2_1.jpg)
  ★**육안 미확인** — 열어서 일주문이나 경내 입구가 보이는 컷인지 확인.
  ★★**4039332는 Type3다. 그 파일에는 글자를 얹지 마라.**
- **카드 텍스트**
  ```
  내소사, 2023년부터 관람료가 없어요

  문화재관람료   무료 (2023년 5월 4일부터)
  국립공원 입장료 없어요
  운영           일출 ~ 일몰 · 연중무휴
  문의           063-583-7281

  ★경로 할인을 따질 필요조차 없어요 — 나이 상관없이 무료예요
  ★시계가 아니라 해를 따라 닫아요
  　그날 일몰 시각은 채석강 물때표에 같이 나와요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of the entrance gate (Iljumun) or temple grounds of
  Naesosa in Buan-gun, Korea, in clear natural morning daylight — traditional wooden
  gate with forested hills behind, one continuous full-bleed photo filling the whole
  4:5 frame. Keep the scene EXACTLY as-is; do NOT repaint or regenerate it; ONLY
  overlay the Korean text. Compose so the open sky above the gate stays naturally
  bright and empty, and place the text DIRECTLY on it with a soft drop shadow —
  NO panel, NO glass, NO box, NO rounded card, NO white or foggy wash, NO icon badges,
  NO dotted separator lines, NEVER split the frame. Korean text rendered EXACTLY as
  written, label left and value right:
  헤드라인 "내소사, 2023년부터 관람료가 없어요"
  "문화재관람료  무료 (2023년 5월 4일부터)"
  "국립공원 입장료  없어요"
  "운영  일출 ~ 일몰 · 연중무휴"
  "문의  063-583-7281"
  "경로 할인을 따질 필요조차 없어요 — 나이 상관없이 무료예요"
  "시계가 아니라 해를 따라 닫아요 · 그날 일몰 시각은 채석강 물때표에 같이 나와요"
  Accent #2B5A63 on "무료" and "일출 ~ 일몰" only. Natural colors — NOT orange,
  NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity.
  4:5 portrait.
  ```

---

## 이미지 5. 전나무숲길 클로즈업 · 4:5

- **삽입 위치** : area1 100행 (전나무숲길 문단 직후)
- **실배경** : **내소사 전나무 숲길** contentid 2759612 · **Type1**
  https://tong.visitkorea.or.kr/cms/resource/59/4090559_image2_1.JPG (외부_8)
  (대안 : .../80/3519980_image2_1.jpg · .../69/4090569_image2_1.jpg)
  ★**육안 미확인** — 곧게 뻗은 전나무 사이 산책로가 보이는 컷을 고른다.
- **카드 텍스트**
  ```
  전나무숲길은 600m예요

  구간     일주문 ~ 천왕문
  거리     600m · 왕복 약 20~30분
  노면     숲길 · 평지에 가까워요

  ★짧아요. 다 걷고도 다리가 남아요
  ★경내까지 다 보고 나와도 반나절이면 충분해요
  ★노면이 흙길인지 데크인지는 확인된 자료가 없어요
  　휠체어·유모차 통행 가능 여부도 공식에 비어 있어요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of the fir-tree forest path at Naesosa, Buan-gun,
  Korea — tall straight firs on both sides of a soft level walkway, dappled natural
  daylight, one continuous full-bleed photo filling the whole 4:5 frame. Keep the scene
  EXACTLY as-is; do NOT repaint or regenerate it; ONLY overlay the Korean text.
  Compose so the bright gap of sky between the treetops, or the pale path surface,
  stays naturally bright and empty, and place the text DIRECTLY on that area with a
  soft drop shadow — NO panel, NO glass, NO box, NO rounded card, NO white or foggy
  wash, NO icon badges, NO dotted separator lines, NEVER split the frame.
  Korean text rendered EXACTLY as written:
  헤드라인 "전나무숲길은 600m예요"
  "구간  일주문 ~ 천왕문"
  "거리  600m · 왕복 약 20~30분"
  "노면  숲길 · 평지에 가까워요"
  "짧아요. 다 걷고도 다리가 남아요"
  "경내까지 다 보고 나와도 반나절이면 충분해요"
  "노면이 흙길인지 데크인지는 확인된 자료가 없어요 · 휠체어·유모차 통행 가능 여부도 공식에 비어 있어요"
  Accent #2B5A63 on "600m" and "20~30분" only. Natural colors — NOT orange, NOT amber.
  Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity. 4:5 portrait.
  ```

---

## 이미지 6. 채석강 물 빠진 퇴적암 층리 · 4:5

- **삽입 위치** : area1 121행 (물때 설명 문단 직후)
- **실배경** : **채석강** contentid 128982 · **Type1**
  https://tong.visitkorea.or.kr/cms/resource/44/3356644_image2_1.jpg (채석강 1)
  (대안 : .../46/3356646_image2_1.jpg · .../03/4103803_image2_1.jpg)
- ★★**이 카드는 반드시 '물이 빠진' 컷이어야 한다.** 퇴적암 층리 아래가 드러나고
  　사람이 그 위를 걸을 수 있어 보이는 장면. **물이 차 있으면 본문과 어긋난다.**
  ★육안 미확인이므로 **운영자가 열어서 물때를 눈으로 확인한 뒤 고른다.**
- **카드 텍스트**
  ```
  채석강은 물이 빠져야 걸어요

  개방     상시 개방 · 연중무휴 (운영시간이 따로 없어요)
  걷는 때  간조 전후 약 2시간
  바닥     퇴적암이라 젖으면 미끄러워요

  ★물때표에서 그날 '간조' 시각 하나만 보면 돼요
  ★간조는 하루에 약 1시간씩 늦어져요
  　"저번 그 시간"은 안 맞아요
  문의     변산반도국립공원사무소 063-582-7808
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of Chaeseokgang in Buan-gun, Korea, AT LOW TIDE —
  the layered sedimentary rock shelves fully exposed and walkable, sea withdrawn,
  clear natural daylight, one continuous full-bleed photo filling the whole 4:5 frame.
  Keep the scene EXACTLY as-is; do NOT repaint or regenerate it; ONLY overlay the
  Korean text. Compose so the open sky or the pale exposed rock stays naturally bright
  and empty, and place the text DIRECTLY on that area with a soft drop shadow —
  NO panel, NO glass, NO box, NO rounded card, NO white or foggy wash, NO icon badges,
  NO dotted separator lines, NEVER split the frame. Korean text rendered EXACTLY as
  written:
  헤드라인 "채석강은 물이 빠져야 걸어요"
  "개방  상시 개방 · 연중무휴 (운영시간이 따로 없어요)"
  "걷는 때  간조 전후 약 2시간"
  "바닥  퇴적암이라 젖으면 미끄러워요"
  "물때표에서 그날 '간조' 시각 하나만 보면 돼요"
  "간조는 하루에 약 1시간씩 늦어져요 · '저번 그 시간'은 안 맞아요"
  "문의  변산반도국립공원사무소 063-582-7808"
  Accent #2B5A63 on "간조 전후 약 2시간" and "1시간" only. Natural colors —
  NOT orange, NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right,
  55% opacity. 4:5 portrait.
  ```

---

## 이미지 7. 채석강 물 찬 모습 (대비) · 4:5

- **삽입 위치** : area1 138행 (반나절 코스 선택 문단 옆)
- **실배경** : **채석강** contentid 128982 · **Type1**
  https://tong.visitkorea.or.kr/cms/resource/02/4103802_image2_1.jpg
  (대안 : .../05/4103805_image2_1.jpg · .../06/4103806_image2_1.jpg)
- ★★**이 카드만은 '물이 찬' 컷을 고른다.** 6번과 짝을 이루는 **대비 컷**이다.
  　파도가 절벽 아래까지 들어와 걸어 들어갈 수 없어 보이는 장면.
  ★6번과 7번을 바꿔 쓰면 글이 통째로 무너진다. **운영자가 두 장을 나란히 놓고 고른다.**
  ★물 찬 컷을 못 구하면 **이 카드를 빼고** area1 138행의 삽입 포인트도 함께 지운다
  　(6번만 남아도 본문은 성립한다).
- **카드 텍스트**
  ```
  물이 차면 이렇게 돼요

  같은 자리인데 들어갈 수가 없어요
  그래서 "몇 시에 가느냐"가 전부예요

  ★내소사와 채석강을 하루에 묶으려 하면
  　물때와 버스 시각을 둘 다 맞춰야 해서 빠듯해요
  ★오늘은 하나만 — 그게 이 코스의 정답이에요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of Chaeseokgang in Buan-gun, Korea, AT HIGH TIDE —
  seawater reaching the base of the layered cliffs so the rock shelf is submerged and
  cannot be walked on, natural daylight, one continuous full-bleed photo filling the
  whole 4:5 frame. Keep the scene EXACTLY as-is; do NOT repaint or regenerate it;
  ONLY overlay the Korean text. Compose so the open sky or the bright water surface
  stays naturally bright and empty, and place the text DIRECTLY on it with a soft drop
  shadow — NO panel, NO glass, NO box, NO rounded card, NO white or foggy wash, NO icon
  badges, NO dotted separator lines, NEVER split the frame. Keep the type sparse — this
  is a CONTRAST card, not an information card. Korean text rendered EXACTLY as written:
  헤드라인 "물이 차면 이렇게 돼요"
  "같은 자리인데 들어갈 수가 없어요"
  "그래서 '몇 시에 가느냐'가 전부예요"
  "내소사와 채석강을 하루에 묶으려 하면 물때와 버스 시각을 둘 다 맞춰야 해서 빠듯해요"
  "오늘은 하나만 — 그게 이 코스의 정답이에요"
  Accent #2B5A63 on "몇 시에 가느냐" only. Natural colors — NOT orange, NOT amber.
  Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity. 4:5 portrait.
  ```

---

## 이미지 8. 향토바지락죽 또는 바지락칼국수 · 4:5

- **삽입 위치** : area1 163행 (맛집 문단 직후)
- **실배경** : ★**미확보.** 개별 음식점은 TourAPI 사진 대상이 아니다.
  → 운영자가 네이버지도 플레이스 사진(음식 컷)으로 채운다.
  → ★**대안** : `채석강수산시장` contentid **2743380 · Type1**이 있다(변산해변로 8).
  　 음식 컷을 못 구하면 **시장 컷을 배경으로** 쓰고 카드 제목을 "격포에서 뭘 먹나요"로 둔다.
  ★**AI로 바지락칼국수 이미지를 생성해 붙이지 않는다** — 실제 그 가게 음식이 아니면 거짓이 된다.
- **카드 텍스트**
  ```
  격포에서 뭘 먹나요

  향토바지락죽      바지락칼국수 10,000원
                    백합죽(2인~) 13,000원 · 바지락회덮밥 13,000원
                    08:30~20:00 · 격포 주차장 옆, 채석강에서 도보 1분
  채석강맛집식당    채석강맛집밥상 28,000원
                    솥밥 · 간장게장 · 새우장 · 백합찜 · 조개탕
                    변산해변로 · 영업시간은 전화로 확인하면 좋아요

  ★가격은 2026년 9월 검색 기준이에요
  ★가기 전 네이버지도에서 영업 중인지 한 번 보면 안심돼요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of a Korean clam porridge or clam knife-cut noodle
  dish, or the Chaeseokgang fish market street in Gyeokpo, Buan-gun, Korea, shot in
  soft natural daylight — one continuous full-bleed photo filling the whole 4:5 frame.
  Keep the scene EXACTLY as-is; do NOT repaint or regenerate it; ONLY overlay the
  Korean text. Compose so one vertical side (a pale tabletop, wall, or out-of-focus
  background) stays naturally bright and empty, and place the text DIRECTLY on that
  area with a soft drop shadow — NO panel, NO glass, NO box, NO rounded card, NO white
  or foggy wash, NO icon badges, NO dotted separator lines, NEVER split the frame.
  Korean text rendered EXACTLY as written, shop name left and menu with price right:
  헤드라인 "격포에서 뭘 먹나요"
  "향토바지락죽  바지락칼국수 10,000원 · 백합죽(2인~) 13,000원 · 바지락회덮밥 13,000원"
  "08:30~20:00 · 격포 주차장 옆, 채석강에서 도보 1분"
  "채석강맛집식당  채석강맛집밥상 28,000원"
  "솥밥 · 간장게장 · 새우장 · 백합찜 · 조개탕"
  "변산해변로 · 영업시간은 전화로 확인하면 좋아요"
  "가격은 2026년 9월 검색 기준이에요"
  "가기 전 네이버지도에서 영업 중인지 한 번 보면 안심돼요"
  Accent #2B5A63 on the prices only. Natural colors — NOT orange, NOT amber.
  Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity. 4:5 portrait.
  ```

---

## 이미지 9. 격포 카페에서 바라본 서해 전망 · 4:5

- **삽입 위치** : area1 176행 (쉬는 자리 문단 직후)
- **실배경** : **채석강** contentid 128982 · **Type1**
  https://tong.visitkorea.or.kr/cms/resource/04/4103804_image2_1.jpg
  (대안 : .../05/4103805_image2_1.jpg)
  ★**육안 미확인** — 바다가 넓게 보이는 컷을 고른다. 카페 내부 컷은 확보하지 못했다.
- **카드 텍스트**
  ```
  앉아서 쉴 자리도 있어요

  격포항 방면    바다가 보이는 카페들
  채석강 앞      벤치와 그늘

  ★카페 이름과 가격은 이번에 확인하지 못했어요
  　현장에서 골라 보시면 돼요
  ★화장실 위치도 미리 확인되지 않았어요
  　터미널에서 한 번 다녀오면 편해요
  ★내소사 경내에도 전통찻집 성격의 쉼터가 있다고 해요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of the sea view at Gyeokpo, Buan-gun, Korea —
  the Yellow Sea seen wide from the shore in soft natural daylight, one continuous
  full-bleed photo filling the whole 4:5 frame. Keep the scene EXACTLY as-is; do NOT
  repaint or regenerate it; ONLY overlay the Korean text. Compose so the open sea or
  sky stays naturally bright and empty, and place the text DIRECTLY on it with a soft
  drop shadow — NO panel, NO glass, NO box, NO rounded card, NO white or foggy wash,
  NO icon badges, NO dotted separator lines, NEVER split the frame. Keep the type calm
  and sparse — this is a RESTING card. Korean text rendered EXACTLY as written:
  헤드라인 "앉아서 쉴 자리도 있어요"
  "격포항 방면  바다가 보이는 카페들"
  "채석강 앞  벤치와 그늘"
  "카페 이름과 가격은 이번에 확인하지 못했어요 · 현장에서 골라 보시면 돼요"
  "화장실 위치도 미리 확인되지 않았어요 · 터미널에서 한 번 다녀오면 편해요"
  "내소사 경내에도 전통찻집 성격의 쉼터가 있다고 해요"
  Accent #2B5A63 sparingly on the headline only. Natural colors — NOT orange,
  NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity.
  4:5 portrait.
  ```

---

## 이미지 10. CTA — 가을빛 부안 전경 · 16:9

- **삽입 위치** : area1 214행 (전화 박스 직후, 한 줄 정리 직전)
- **실배경** : **채석강** contentid 128982 · **Type1**
  https://tong.visitkorea.or.kr/cms/resource/05/4103805_image2_1.jpg
  (대안 : 전나무숲길 .../60/4090560_image2_1.JPG · 채석강 .../06/4103806_image2_1.jpg)
  ★**육안 미확인** — **가로 구도로 바다나 숲이 펼쳐진 컷**을 고른다.
  ★CTA 1장은 노을 톤을 써도 되는 유일한 카드지만, **사진이 실제로 노을일 때만** 그 컷을 고른다.
  　배경을 주황으로 물들이지 않는다.
- **카드 텍스트** (한 줄, 이모지 없음)
  ```
  둘 다 무료인 부안, 오늘은 하나만 제대로 보고 와요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of the Buan coast or the Naesosa fir forest in
  Jeollabuk-do, Korea, seen wide in autumn under clear natural daylight — one
  continuous full-bleed photo filling the whole 16:9 frame. Keep the scene EXACTLY
  as-is; do NOT repaint or regenerate it; ONLY overlay the Korean text. Compose so the
  open sky or sea across the upper third stays naturally bright and empty, and place
  this ONE Korean line DIRECTLY on that bright area with a soft drop shadow, centred,
  large and confident, nothing else on the card:
  "둘 다 무료인 부안, 오늘은 하나만 제대로 보고 와요"
  Render the Korean characters EXACTLY as written. NO panel, NO glass, NO box, NO
  rounded card, NO white or foggy wash, NO icon badges, NO dotted separator lines,
  NO information list, NEVER split the frame. Accent #2B5A63 on "무료" only; body type
  deep ink #16201C on bright sky, or cream #F5F3EE if the sea is dark. Natural colors —
  NOT a monochrome orange or amber wash. Watermark "blog.naver.com/witchbloom82"
  bottom-right, 55% opacity. 16:9 landscape.
  ```

---

## 점검 (실측)

- area1 이미지 삽입 포인트 **10개** / area2 카드 **10개** — 이름·번호 1:1 ✅
- 비율 : 썸네일 1:1 · 코스요약 4:5 · 정보 카드 4:5 × 7 · CTA 16:9 ✅
- 카드 안 이모지 : **0개**(썸네일 이모지는 area1 썸네일문구 줄에만) ✅
- **Type3 사진에 오버레이 : 0건** — 내소사 4039332 한 장만 Type3라 배경에서 제외했다 ✅
- 배경 실사진 확보 : **8/10** — 3·8번만 **미확보로 명시**(가짜 생성 금지) ⚠
  　★괴산(6/10)·무주(6/10)보다 낫다. 내소사·전나무숲길·채석강이 전부 Type1인 덕이다.
- ★★**6번(물 빠짐)과 7번(물 참)을 바꿔 쓰면 글이 무너진다** — 운영자가 두 장을 나란히 놓고 고른다 ⚠
- 육안 확인 : **0/10** — 프록시 CONNECT 403으로 원본을 열지 못했다 ⚠
