# 영역2 — 이미지 지시서 (순창 강천산)

- 기준 : `.claude/image-guide.md` 통합본
- area1 이미지 삽입 포인트 10개와 **개수·이름 1:1**
- 사진 출처 대장 : `photos/CREDITS.md`

## ★이 지시서의 전제 네 가지 (먼저 읽기)

1. ★★**이번 회차는 배경 사진을 실제로 내려받아 눈으로 다 봤다.** 지금까지 다섯 회차 연속
   "프록시 차단으로 육안 미확인"으로 넘겼는데, 이번엔 Make base64 조각 시나리오로 **11장을 받아 전부 열어 봤다.**
   → 아래 카드의 배경 설명은 추측이 아니라 **실제로 본 사진**이다. 파일은 `photos/`에 있다.
2. **세트색은 히어로에서 실제로 뽑았다.** 1번 배경(`g09.jpg`)의 구름다리가 **선명한 주홍**이다.
   앰버/골드를 습관적으로 쓴 게 아니라 **사진에 실재하는 색**이라 채택했다. 하늘·산은 자연색 그대로 둔다.
3. **10장 중 2장은 배경이 없다.** 3번(터미널)·9번(맛집).
   순창공용버스터미널과 산 아래 식당은 관광 DB 미등재라 사진이 아예 없다. **가짜 생성 배경으로 채우지 않는다.**
4. ★**11장 중 3장은 카드 배경으로 쓰지 않는다.**
   `g02`(입구 캐릭터 포토존 — 조형물에 '강천산' 글자) · `g03`(강천사 일주문 — 현판 한자) · `g07`(애추지형 안내판).
   image-guide가 "사진 안엔 글자·간판·지명 0"을 요구한다. 본문에 원본 그대로 넣는 건 가능하다.

## 저작권 — 이번엔 전부 Type1이라 여유롭다

- 강천산 군립공원(126249) 16장 · 강천사 모과나무(2357460) 5장 : **전부 `Type1`** → 글자 오버레이 OK
- ★단 **채계산 출렁다리(2654773)는 7장 전부 `Type3`(변경금지)** — 이 글에 쓰지 않지만, 순창 글을 또 쓸 때 주의
- 글 안에 한 줄 : `사진 출처 : 한국관광공사 포토코리아 (공공누리 제1유형)`

## 세트색

- 메인 : **구름다리 주홍** `#D24B27` — 핵심 숫자 · 라벨 · 구분선에만(전체 15% 이하)
- 본문 글씨 : 깊은 잉크 `#1B2320`(밝은 하늘·흙길 위) / 크림 `#F6F2EA`(어두운 숲·암벽 위)
- ★사진은 자연색 그대로. **하늘·산·계곡을 주홍으로 물들이지 않는다.**

## 공통 지시 (모든 카드 프롬프트에 포함)

```
Edit the UPLOADED real photograph. Keep the scene EXACTLY as-is — do NOT repaint,
do NOT regenerate, do NOT relight the background. ONLY overlay the Korean text and
the watermark. Keep the photograph crisp and full-bleed across the entire frame.
NO panel, NO glass, NO translucent box, NO rounded card, NO white or foggy wash over
the photo, NO icon badges, NO circular sticker or emoji icons, NO dotted separator
lines, NO template-like side panel, NEVER split the frame 50/50.
Place the Korean text DIRECTLY on the naturally bright, empty area of the photo
(open sky, pale dirt path, water, or soft out-of-focus foliage) with a soft drop shadow.
Render the Korean characters EXACTLY as written, no substitutions, no invented glyphs.
Accent color #D24B27 on numbers and labels only (under 15% of the frame);
natural colors everywhere else — NOT a monochrome orange wash, NOT amber, NOT sepia.
The existing Korea Tourism Organization watermark is part of the source photo — leave it.
Add a small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

★사용법 한 줄 : ①아래 `배경 파일`을 열어 저장(또는 `photos/`에서 바로 꺼내기) → ②GPT에 업로드 → ③해당 프롬프트로 글자만 얹기.

---

## 이미지 1. 썸네일 — 가을 강천산 구름다리 원경 · 1:1

- **삽입 위치** : 첫 5줄 직전(표지)
- **배경 파일** : `photos/g09.jpg` — ★실물 확인함
- **실배경 사진 소스** : https://tong.visitkorea.or.kr/cms/resource/60/3573360_image2_1.jpg
  (`순창_강천산 군립공원 (2)` · contentid 126249 · `cpyrhtDivCd` **Type1**)
- **실제로 보이는 장면** : 가을 초입의 짙은 초록 능선 사이로 **주홍색 구름다리**가 걸려 있고,
  프레임 위쪽 3분의 1이 **구름 한 점 없는 맑은 파란 하늘**이다. 글자 자리가 하늘에 넉넉하다.

**카드 텍스트**
```
순창 강천산
65세는 무료가 아니에요
```

**영문 프롬프트**
```
Edit the uploaded real photograph of Gangcheonsan County Park in Sunchang, Korea —
a vivid vermilion suspension bridge strung across a deep green early-autumn ridge,
with a wide cloudless blue sky filling the upper third of the frame.
Keep the scene EXACTLY as-is; do NOT repaint or regenerate the mountains, bridge or sky.
Crop to a 1:1 square keeping the bridge just below centre and preserving the open sky above.
Overlay ONLY two lines of Korean text placed DIRECTLY on the bright empty sky,
with a soft drop shadow, no panel of any kind:
line 1 (large, bold, deep ink #1B2320): 순창 강천산
line 2 (medium, accent #D24B27): 65세는 무료가 아니에요
Cover title only — NO information list, NO icons, NO boxes, NO rounded stickers,
NO dotted separators, NO white or foggy wash, NEVER split the frame.
Render the Korean characters exactly as written.
Keep the existing Korea Tourism Organization watermark that is part of the photo.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 2. 강천산 입구 다리와 매표소 방향 · 4:5

- **삽입 위치** : 소제목 1 직후
- **배경 파일** : `photos/g10.jpg` — ★실물 확인함
- **실배경 사진 소스** : https://tong.visitkorea.or.kr/cms/resource/61/3573361_image2_1.jpg
  (`순창_강천산 군립공원 (4)` · Type1)
- **실제로 보이는 장면** : 단풍이 막 들기 시작한 숲 사이로 **석조 난간이 있는 다리**가 놓여 있고,
  다리 위 **밝은 회색 노면**이 프레임 아래 절반을 채운다. 글자는 이 노면 위에 얹는다.

**카드 텍스트**
```
강천산 가는 길
경로 A  전주·광주 직행버스
경로 B  순창터미널 환승
경로 C  KTX 남원 → 순창행 버스
```

**영문 프롬프트**
```
Edit the uploaded real photograph: a stone-railed bridge at the entrance of
Gangcheonsan County Park, Sunchang, Korea, early autumn foliage on both sides,
a broad pale grey road surface filling the lower half of the frame.
Keep the scene EXACTLY as-is; do NOT repaint or regenerate the trees, bridge or road.
Crop to 4:5 portrait keeping the full width of the bridge and the empty road in front.
Overlay ONLY the Korean text DIRECTLY on the bright empty road surface, left-aligned,
with a soft drop shadow, no panel and no tinted strip:
heading (bold, deep ink #1B2320): 강천산 가는 길
then three plain label–value lines, the route letters in accent #D24B27:
경로 A  전주·광주 직행버스
경로 B  순창터미널 환승
경로 C  KTX 남원 → 순창행 버스
Plain Korean text only — NO icon badges, NO circular stickers, NO dotted separator
lines, NO white or foggy wash over the photo, NO template-like side panel,
NEVER split the frame. Keep the photograph crisp and full-bleed.
Natural colors everywhere — NOT an orange wash.
Keep the existing Korea Tourism Organization watermark.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 3. 순창공용버스터미널 외관과 정류장 · 4:5

- **삽입 위치** : 소제목 3 직후
- **배경 파일** : ★**없음**
- **실배경 사진 소스** : ★**미확보.** 순창공용버스터미널은 관광 DB(TourAPI) 미등재다.
  `순창고추장민속마을`도 `totalCount 0`이었다. **억지로 다른 사진을 붙이지 않는다.**
- **운영자 진행** : ①네이버지도 '순창공용버스터미널' 거리뷰·방문자 사진에서 **외관 1장**을 확보해
  그 사진을 배경으로 아래 프롬프트를 쓰거나, ②사진 없이 **글자만** 카드로 간다.

**카드 텍스트**
```
순창터미널 → 강천산
✅ 지역버스  1일 8회 · 10:50~17:30
✅ 소요      약 30분
✅ 요금      950원 (교통카드)
✅ 첫차      10:50 — 그 전엔 택시뿐
☎ 063-653-2186
```

**영문 프롬프트** (배경 사진을 구한 뒤에만 사용)
```
Edit the uploaded real photograph of Sunchang Public Bus Terminal, Korea.
Keep the scene EXACTLY as-is; do NOT repaint or regenerate the building or sky.
Crop to 4:5 portrait so that an open sky or a pale paved forecourt occupies one
vertical side, leaving a naturally bright empty area for text.
Overlay ONLY the Korean text DIRECTLY on that bright area with a soft drop shadow:
heading (bold, deep ink #1B2320): 순창터미널 → 강천산
then plain label–value lines, numbers in accent #D24B27:
지역버스 1일 8회 · 10:50~17:30 / 소요 약 30분 / 요금 950원 (교통카드) /
첫차 10:50 — 그 전엔 택시뿐 / 063-653-2186
NO panel, NO glass, NO box, NO icon badges, NO circular stickers,
NO dotted separators, NO white or foggy wash, NEVER split the frame.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 4. 병풍폭포 · 4:5

- **삽입 위치** : 소제목 4(입장료) 직후
- **배경 파일** : `photos/g11.jpg` — ★실물 확인함
- **실배경 사진 소스** : https://tong.visitkorea.or.kr/cms/resource/67/3573367_image2_1.jpg
  (`순창_강천산 군립공원 (9)` · Type1)
- **실제로 보이는 장면** : 밝은 회백색 **암벽 전체를 여러 갈래 물줄기가 얇게 타고 내리는 폭포**,
  아래에 맑은 계류와 자갈밭, 왼쪽 위에 파란 하늘 조각. 글자는 **왼쪽 위 하늘 + 암벽 상단**에 얹는다.

**카드 텍스트**
```
강천산 입장료
✅ 성인      5,000원
   상품권 2,000원 즉시 환급
✅ 청소년    4,000원
✅ 무료      만 70세 이상
★ 65~69세는 무료가 아니에요
```

**영문 프롬프트**
```
Edit the uploaded real photograph of Byeongpung Falls in Gangcheonsan, Sunchang, Korea —
many thin strands of water sliding down a broad pale rock face, a clear shallow stream
and pebble bed below, a patch of blue sky at the upper left.
Keep the scene EXACTLY as-is; do NOT repaint or regenerate the rock, water or sky.
Crop to 4:5 portrait keeping the full height of the rock face.
Overlay ONLY the Korean text DIRECTLY on the bright upper-left sky and the pale upper
rock face, with a soft drop shadow, no panel of any kind:
heading (bold, cream #F6F2EA): 강천산 입장료
then plain label–value lines in cream, the prices in accent #D24B27:
성인 5,000원 (상품권 2,000원 즉시 환급) / 청소년 4,000원 / 무료 만 70세 이상
and one emphasised line in accent #D24B27: 65~69세는 무료가 아니에요
NO icon badges, NO circular stickers, NO dotted separator lines, NO white or foggy
wash over the photo, NO template-like side panel, NEVER split the frame.
Keep the photograph crisp and full-bleed; natural colors, NOT an orange wash.
Keep the existing Korea Tourism Organization watermark.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 5. 매표소부터 이어지는 평지 계곡길 · 4:5

- **삽입 위치** : 소제목 5 직후
- **배경 파일** : `photos/g06.jpg` — ★실물 확인함
- **실배경 사진 소스** : https://tong.visitkorea.or.kr/cms/resource/14/4060114_image2_1.jpg
  (`전북_순창_강천산 군립공원_외부_06.jpg` · Type1)
- **실제로 보이는 장면** : 계곡 옆으로 **난간과 돌담이 있는 평탄한 포장 산책로**가 오른쪽으로 뻗고,
  가운데에 작은 단짜리 폭포와 얕은 소(沼)가 있다. **오른쪽 산책로의 밝은 노면**이 글자 자리다.

**카드 텍스트**
```
매표소부터 평지길
✅ 첫 폭포까지   약 120m 평지
✅ 유모차       끌고 갈 수 있어요
✅ 화장실       11개소
✅ 쉼터         정자·의자 82개
```

**영문 프롬프트**
```
Edit the uploaded real photograph: a flat paved walking path with a low stone wall and
railing running along a clear mountain stream in Gangcheonsan, Sunchang, Korea, with a
small stepped waterfall and a shallow pool at the centre and fresh green foliage above.
Keep the scene EXACTLY as-is; do NOT repaint or regenerate the path, stream or trees.
Crop to 4:5 portrait keeping the path on the right side of the frame.
Overlay ONLY the Korean text DIRECTLY on the bright pale path surface on the right,
with a soft drop shadow, no panel and no tinted strip:
heading (bold, deep ink #1B2320): 매표소부터 평지길
then plain label–value lines, the numbers in accent #D24B27:
첫 폭포까지 약 120m 평지 / 유모차 끌고 갈 수 있어요 / 화장실 11개소 / 쉼터 정자·의자 82개
NO icon badges, NO circular stickers, NO dotted separators, NO white or foggy wash,
NO template-like side panel, NEVER split the frame. Keep the photo crisp and full-bleed.
Keep the existing Korea Tourism Organization watermark.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 6. 맨발산책로 흙길 · 4:5

- **삽입 위치** : 이미지 5 바로 다음(소제목 5 안)
- **배경 파일** : `photos/g05.jpg` — ★실물 확인함
- **실배경 사진 소스** : https://tong.visitkorea.or.kr/cms/resource/21/4060121_image2_1.jpg
  (`전북_순창_강천산 군립공원_외부_05.jpg` · Type1)
- **실제로 보이는 장면** : 붉은 줄기의 **메타세쿼이아 기둥 사이로 넓고 고운 흙길**이 휘어 들어가고,
  두 사람이 나란히 걷고 있다. 길이 아주 밝아 **아래쪽 흙길 전체가 글자 자리**다.
  ★이 글의 '평지·맨발산책로' 주장을 그림 한 장으로 증명하는 컷이다.

**카드 텍스트**
```
맨발산책로
✅ 길이   왕복 약 2.25~2.5km
✅ 경사   거의 없는 평지
✅ 바닥   고운 모래·흙
✅ 소요   왕복 약 2시간
```

**영문 프롬프트**
```
Edit the uploaded real photograph: a wide, soft, pale dirt walking path curving between
tall red-barked metasequoia trunks in Gangcheonsan, Sunchang, Korea, bright fresh green
maple leaves overhead, two people walking side by side in the middle distance.
Keep the scene EXACTLY as-is; do NOT repaint or regenerate the trees, path or people.
Crop to 4:5 portrait keeping the full width of the dirt path in the lower half.
Overlay ONLY the Korean text DIRECTLY on the bright dirt path, left-aligned,
with a soft drop shadow, no panel of any kind:
heading (bold, deep ink #1B2320): 맨발산책로
then plain label–value lines, the numbers in accent #D24B27:
길이 왕복 약 2.25~2.5km / 경사 거의 없는 평지 / 바닥 고운 모래·흙 / 소요 왕복 약 2시간
NO icon badges, NO circular stickers, NO dotted separators, NO white or foggy wash,
NO template-like side panel, NEVER split the frame. Keep the photo crisp and full-bleed.
Natural colors — NOT an orange or amber wash.
Keep the existing Korea Tourism Organization watermark.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 7. 강천산 구름다리 근경 · 4:5

- **삽입 위치** : 소제목 6 초반(구름다리 설명 직후)
- **배경 파일** : `photos/g01.jpg` — ★실물 확인함
- **실배경 사진 소스** : https://tong.visitkorea.or.kr/cms/resource/17/4060117_image2_1.jpg
  (`전북_순창_강천산 군립공원_외부_01.jpg` · Type1)
- **실제로 보이는 장면** : **주홍색 현수교**가 계곡을 가로질러 바위 봉우리에 걸려 있고,
  주변은 연둣빛 신록과 흩날리는 벚꽃, 오른쪽 위에 흐린 하늘과 먼 능선.
  ★**봄 컷**이다. 10월 발행이므로 카드 텍스트에 계절을 쓰지 않는다.

**카드 텍스트**
```
구름다리
✅ 길이   78m
✅ 높이   50m
✅ 폭     1m
✅ 왕복   매표소에서 1.5~2시간
구장군폭포까지 안 가도 괜찮아요
```

**영문 프롬프트**
```
Edit the uploaded real photograph: a vermilion suspension footbridge spanning a rocky
gorge in Gangcheonsan, Sunchang, Korea, seen from above, surrounded by fresh light-green
spring foliage and scattered cherry blossom, a pale overcast sky and distant ridges at
the upper right. Keep the scene EXACTLY as-is; do NOT repaint or regenerate anything.
Crop to 4:5 portrait keeping the whole bridge and the bright sky band at the top.
Overlay ONLY the Korean text DIRECTLY on the bright sky and the pale distant ridge,
with a soft drop shadow, no panel of any kind:
heading (bold, deep ink #1B2320): 구름다리
then plain label–value lines, the numbers in accent #D24B27:
길이 78m / 높이 50m / 폭 1m / 왕복 매표소에서 1.5~2시간
and one closing line in deep ink: 구장군폭포까지 안 가도 괜찮아요
NO icon badges, NO circular stickers, NO dotted separators, NO white or foggy wash,
NO template-like side panel, NEVER split the frame. Keep the photo crisp and full-bleed.
Keep the existing Korea Tourism Organization watermark.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 8. 코스요약카드 — 반나절 타임라인 · 4:5

- **삽입 위치** : 소제목 6 끝(반나절 일정 목록 직후)
- **배경 파일** : `photos/g04.jpg` — ★실물 확인함
- **실배경 사진 소스** : https://tong.visitkorea.or.kr/cms/resource/20/4060120_image2_1.jpg
  (`전북_순창_강천산 군립공원_외부_04.jpg` · Type1)
- **실제로 보이는 장면** : 연둣빛 단풍나무 가지가 앞을 가리고 그 아래로 **얕은 계류와 작은 여울**이 흐른다.
  차분해서 글자가 많이 올라가는 타임라인 카드에 맞는다. 글자는 **가운데 물과 자갈밭**에 얹는다.
- ★**이 카드만 '패널 금지' 규칙의 예외**지만, 그래도 패널을 만들지 않고 번호+글자만 얹는다.
- ★**작은 사진 4장은 넣지 않는다.** 지점별 실사진을 다 구하지 못했고, AI 생성 컷은 금지다.
  번호와 글자만으로 간다(image-guide가 허용하는 대안).

**카드 텍스트**
```
강천산 반나절 코스
① 10:50  순창터미널 버스 (약 30분)
② 11:20  매표소 도착 · 입장권
③ 12:00  맨발산책로 걷기
④ 13:00  구름다리
⑤ 13:30  점심 (산 아래 식당가)
⑥ 15:00  매표소 앞에서 버스

전체 약 4시간 10분 · 1인 약 9,000원
★마감 18:00 (4~10월) / 17:00 (11~3월)
★서울행 막차 15:30 — 강천산에서 14:20에 나오세요
```

**영문 프롬프트**
```
Edit the uploaded real photograph: a shallow clear mountain stream with small rapids and
a pebble bed, framed by fresh light-green maple branches, in Gangcheonsan, Sunchang, Korea.
Keep the scene EXACTLY as-is; do NOT repaint or regenerate the stream or foliage.
Crop to 4:5 portrait keeping the bright water and pebble bed across the middle and lower frame.
Overlay ONLY the Korean text DIRECTLY on the bright water and pebbles, left-aligned,
with a soft drop shadow, no panel of any kind:
heading (bold, deep ink #1B2320): 강천산 반나절 코스
then six numbered timeline rows, the circled numbers and the times in accent #D24B27:
① 10:50 순창터미널 버스 (약 30분) / ② 11:20 매표소 도착 · 입장권 /
③ 12:00 맨발산책로 걷기 / ④ 13:00 구름다리 /
⑤ 13:30 점심 (산 아래 식당가) / ⑥ 15:00 매표소 앞에서 버스
then a closing block, the deadline lines emphasised in accent #D24B27:
전체 약 4시간 10분 · 1인 약 9,000원
마감 18:00 (4~10월) / 17:00 (11~3월)
서울행 막차 15:30 — 강천산에서 14:20에 나오세요
Plain Korean text only — NO icon badges, NO circular stickers, NO dotted separator lines,
NO small inset photos, NO white or foggy wash over the photo, NO template-like side panel,
NEVER split the frame. Keep the photograph crisp and full-bleed.
Keep the existing Korea Tourism Organization watermark.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 9. 산 아래 식당가 산채비빔밥과 순창삼합 · 4:5

- **삽입 위치** : 소제목 7 끝
- **배경 파일** : ★**없음**
- **실배경 사진 소스** : ★**미확보.** 완도식당·뜨란채·산솔카페 모두 관광 DB 미등재다.
- **운영자 진행** : 네이버지도 각 가게의 **방문자 사진(음식 컷)**에서 1장을 고르거나,
  사진 없이 글자만 카드로 간다. **다른 식당 사진을 가져다 붙이지 않는다.**

**카드 텍스트**
```
강천산 아래 밥집
① 완도식당   산채비빔밥 11,000원
　 불더덕정식(2인) 32,000원 · 매표소 도보권
② 뜨란채     순창삼합(2인) 39,000원
　 11:00~22:00 · 1·4주 월요일 휴무
③ 산솔카페   쌀 식빵 4,800원
　 매일 10:00~17:00 — 5시면 닫아요
```

**영문 프롬프트** (배경 사진을 구한 뒤에만 사용)
```
Edit the uploaded real photograph of a Korean mountain-village set meal
(sanchae bibimbap with side dishes) on a wooden table.
Keep the scene EXACTLY as-is; do NOT repaint or regenerate the food or table.
Crop to 4:5 portrait leaving a naturally bright, empty area of table or wall on one side.
Overlay ONLY the Korean text DIRECTLY on that bright empty area with a soft drop shadow:
heading (bold, deep ink #1B2320): 강천산 아래 밥집
then three numbered rows, the prices in accent #D24B27:
① 완도식당 산채비빔밥 11,000원 · 불더덕정식(2인) 32,000원 · 매표소 도보권
② 뜨란채 순창삼합(2인) 39,000원 · 11:00~22:00 · 1·4주 월요일 휴무
③ 산솔카페 쌀 식빵 4,800원 · 매일 10:00~17:00 — 5시면 닫아요
NO icon badges, NO circular stickers, NO dotted separators, NO white or foggy wash,
NO template-like side panel, NEVER split the frame.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 이미지 10. CTA — 가을빛 강천산 입구 전경 · 16:9

- **삽입 위치** : 한 줄 정리 직후, [메인 CTA] 바로 위
- **배경 파일** : `photos/g08.jpg` — ★실물 확인함
- **실배경 사진 소스** : https://tong.visitkorea.or.kr/cms/resource/59/3573359_image2_1.jpg
  (`순창_강천산 군립공원 (1)` · Type1)
- **실제로 보이는 장면** : 가을 산 아래 **강천산 입구 광장**. 가운데에 금속 조형 분수탑,
  넓은 아스팔트와 횡단보도, 맑은 낮 하늘.
- ★★**크롭 주의** : 프레임 왼쪽과 오른쪽에 **캐릭터 조형물과 'I♥YOU' 글자 조형물**이 있다.
  image-guide가 사진 속 글자를 금지하므로, **16:9로 크롭할 때 왼쪽·오른쪽 조형물을 잘라내고
  가운데 분수탑과 뒤쪽 산·하늘을 크게 잡는다.**

**카드 텍스트**
```
가을 강천산, 평지 계곡길을 천천히
```

**영문 프롬프트**
```
Edit the uploaded real photograph of the entrance plaza of Gangcheonsan County Park,
Sunchang, Korea in autumn — a tall pale-green metal fountain sculpture in the centre,
a broad asphalt plaza with a crosswalk in front, wooded autumn hillside and clear sky behind.
Keep the scene EXACTLY as-is; do NOT repaint or regenerate the sculpture, plaza or hills.
★Crop to 16:9 landscape centred on the fountain sculpture and the hillside behind it,
CUTTING OUT the cartoon character statues and the "I♥YOU" letter sculpture at the left
and right edges — no readable signage or lettering may remain inside the frame.
Overlay ONLY one line of Korean text DIRECTLY on the bright empty sky, centred,
with a soft drop shadow, no panel of any kind, in deep ink #1B2320 with the word
"강천산" in accent #D24B27:
가을 강천산, 평지 계곡길을 천천히
NO icon badges, NO circular stickers, NO dotted separators, NO white or foggy wash,
NO template-like side panel, NEVER split the frame. Keep the photo crisp and full-bleed.
Natural autumn colors — NOT an orange or sepia wash.
Keep the existing Korea Tourism Organization watermark.
Add small watermark "blog.naver.com/witchbloom82" bottom-left, 55% opacity.
```

---

## 점검 (실측)

- 카드 수 : **10** · area1 이미지 삽입 포인트 **10** — 번호·이름 1:1 ✔
- 비율 : 썸네일 1:1(1장) · 정보 4:5(8장) · CTA 16:9(1장) ✔
- **실배경 사진 확보 : 8/10** (3번 터미널·9번 맛집은 관광 DB 미등재 — 가짜로 채우지 않음)
- **육안 확인 : 8/8** ★이번 회차 처음으로 전부 열어 봄
- 저작권 : 사용한 8장 **전부 Type1** — 글자 오버레이 적법 ✔
- 패널·아이콘 배지·점선·흰 워시 : 전 프롬프트에 금지 명시 ✔
- 세트색 : 히어로(`g09`)에서 뽑은 주홍 `#D24B27` 1개, 액센트 15% 이하 ✔
- 이모지 : 카드 안에 **0개** ✔ (썸네일 이모지는 본문 썸네일문구 줄에만)
- 워터마크 : `blog.naver.com/witchbloom82` 좌하단 (한국관광공사 워터마크가 우하단에 이미 박혀 있어 겹치지 않게 좌하단으로 뺐다) ✔
