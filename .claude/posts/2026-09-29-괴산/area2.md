# 영역2 — 이미지 지시서 (괴산 산막이옛길)

- 기준 : `.claude/image-guide.md` 통합본
- area1 이미지 삽입 포인트 10개와 **개수·이름 1:1**
- 사진 출처 대장 : `photos/CREDITS.md`

## ★이 지시서의 전제 세 가지 (먼저 읽기)

1. ★★**산막이옛길 등재 사진은 전량 Type3(변경금지)다.** 글자를 얹으면 공공누리 위반이다.
   → 오버레이 카드 배경은 **괴산호(Type1)**와 **문광저수지 Type1 4장**에서만 쓴다.
   → 산막이옛길 Type3 사진은 **글자 없이 원본 그대로** 쓰는 분위기 컷으로만.
   ★괴산호는 **산막이옛길이 끼고 도는 바로 그 호수**라 배경으로 정당하다
   　(무주에서 이름이 같아도 다른 산이라 뺀 것과 반대 방향의 판단 — 기준은 이름이 아니라 독자가 보게 될 풍경).
2. **세트색은 확정이 아니다.** 프록시 차단으로 히어로 사진을 열지 못했다.
   아래 `호수 세이지`는 글감 기준 제안이고, 운영자가 1번 배경을 열어 실제 색을 보고 확정한다.
   ★확정 전까지 앰버/골드로 되돌리지 않는다 — 이 글은 물빛과 상록 숲이 주조다.
3. **10장 중 4장은 배경이 없다.** 터미널·정류장·유람선·맛집. **가짜 생성 배경으로 채우지 않는다.**

## 세트색 (제안, 확정 전)

- 메인 : **괴산호 세이지** `#4A6B5D` — 핵심 숫자 · 라벨 · 구분선에만(전체 15% 이하)
- 본문 글씨 : 깊은 잉크 `#16201C`(밝은 수면·하늘 위) / 크림 `#F5F3EE`(어두운 숲 위)
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
(open water, sky, or pale boardwalk) with a soft drop shadow.
Render the Korean characters EXACTLY as written, no substitutions, no invented glyphs.
Accent color #4A6B5D on numbers and labels only (under 15% of the frame);
natural colors everywhere else — NOT orange, NOT amber, NOT a monochrome warm wash.
Small watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity.
```

**사용법** — ①아래 사진 URL을 열어 저장 → ②GPT에 업로드 → ③해당 카드 프롬프트로 글자만 얹기

---

## 이미지 1. 썸네일 — 산막이옛길 호수 데크길 전경, 헤드라인 문구 · 1:1

- **삽입 위치** : area1 26행 (첫 5줄 직후)
- **실배경 사진 소스** : 한국관광공사 TourAPI · **괴산호** contentid 125869 · **Type1**
  http://tong.visitkorea.or.kr/cms/resource/33/3571233_image2_1.jpg
  (대안 : .../37/3571237_image2_1.jpg · .../35/3571235_image2_1.jpg)
  ★**육안 미확인.** 열어서 ⓐ호수와 산자락이 보이는 컷인지 ⓑ간판·글자가 없는지 확인 후 사용.
  ★산막이옛길 자체 사진(1948361)은 **Type3라 여기 쓰면 안 된다.**
- **카드 텍스트** (이모지 없음)
  ```
  괴산 산막이옛길
  전 구간 무료 호수길
  2.9km만 걸어도 충분해요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of Goesan Lake (Goesanho) in Goesan-gun,
  Chungcheongbuk-do, Korea — clear natural daylight over still water with forested
  ridges behind, one continuous full-bleed photo filling the whole square frame.
  Keep the scene EXACTLY as-is; do NOT repaint or regenerate the background;
  ONLY overlay Korean text. Compose so the open water or sky stays naturally bright
  and empty. Place this Korean headline DIRECTLY on that bright area with a soft drop
  shadow, three lines, large bold cover type, nothing else:
  "괴산 산막이옛길" / "전 구간 무료 호수길" / "2.9km만 걸어도 충분해요"
  Render the Korean characters EXACTLY as written. This is a COVER — headline only,
  NO information lists, NO icons, NO boxes.
  Accent color #4A6B5D on "무료" and "2.9km" only; body type deep ink #16201C on bright
  water, or cream #F5F3EE if the water is dark. Natural colors everywhere — NOT orange,
  NOT amber, NOT a monochrome warm wash. NO panel, NO glass, NO rounded card, NO white
  or foggy wash, NO icon badges, NO dotted lines, NEVER split the frame.
  Small watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity. 1:1 square.
  ```

---

## 이미지 2. 코스 요약 카드 — 반나절 동선 타임라인 · 4:5

- **삽입 위치** : area1 44행 (3초요약 박스 직후)
- **실배경 사진 소스** : 괴산호 contentid 125869 · **Type1**
  http://tong.visitkorea.or.kr/cms/resource/34/3571234_image2_1.jpg
  ★작은 사진을 쓸 경우에도 **Type1만** — 괴산호 3571235 · 3571236 · 3571238 · 3571239.
  　산막이옛길 Type3 사진을 작은 컷으로도 넣지 않는다(합성도 변형이다).
  　구하지 못하면 **사진 없이 번호+글자만으로 간다.**
- ★이 카드는 `CLAUDE.md`가 명시한 **'패널 금지'의 유일한 예외**(타임라인 인포그래픽).
- **카드 텍스트**
  ```
  괴산 산막이옛길 반나절 코스

  ① 괴산공영버스터미널
     11:10 시내버스
        ↓ 수전(산막이옛길)행
  ② 산막이옛길 입구
     ★정류장에서 입구까지 도보 시간은 미확보
     　애매하면 택시 8,000~9,000원
        ↓
  ③ 2코스 왕복 2.9km
     1시간 20분 안팎 · 4.4km 1코스는 선택
        ↓
  ④ 트레일 입구 식당 · 점심
        ↓
  ⑤ 수전 15:30 버스로 복귀

  전체 소요   반나절 (11:10~15:30 사이 4시간 20분)
  1인 비용    산막이옛길 전 구간 무료 (유람선은 별도)
  ★마감      폐장 17:00 · 연중무휴
  ★막차      수전 → 괴산 19:20 (시외버스)
             서울 당일 복귀면 17:30까지
  ```
  ★버스 승차 시간은 확보하지 못했다. **지어내지 말고 위처럼 비워 둔다.**
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of Goesan Lake, Goesan-gun, Korea — clear natural
  daylight, calm water and forested slopes, one continuous full-bleed photo filling the
  whole 4:5 frame. Keep the scene EXACTLY as-is; do NOT repaint or regenerate it.
  Overlay a vertical numbered TIMELINE infographic reading top to bottom, using the
  Korean text below rendered EXACTLY as written. This ONE card may use a restrained
  sage-green tinted strip (about 25% opacity, #4A6B5D) behind the timeline so the
  numbers stay legible — the photograph must remain clearly visible through it;
  NEVER a milky white or frosted-opaque panel, NEVER a 50/50 split.
  Numbers ①②③④⑤ in #4A6B5D, connected by thin vertical rules; movement notes in smaller
  type between the stops; a four-row summary block at the bottom.
  Korean text:
  헤드라인 "괴산 산막이옛길 반나절 코스"
  ① "괴산공영버스터미널 / 11:10 시내버스"
  ↓ "수전(산막이옛길)행"
  ② "산막이옛길 입구 / 정류장에서 입구까지 도보 시간은 미확보 · 애매하면 택시 8,000~9,000원"
  ③ "2코스 왕복 2.9km / 1시간 20분 안팎 · 4.4km 1코스는 선택"
  ④ "트레일 입구 식당 · 점심"
  ⑤ "수전 15:30 버스로 복귀"
  하단 "전체 소요  반나절 (11:10~15:30 사이 4시간 20분)"
  하단 "1인 비용  산막이옛길 전 구간 무료 (유람선은 별도)"
  하단 강조 "마감  폐장 17:00 · 연중무휴"
  하단 강조 "막차  수전 → 괴산 19:20 (시외버스) · 서울 당일 복귀면 17:30까지"
  Keep one or two numbers per line so nothing is crowded. NO icon badges, NO circular
  sticker or emoji icons, NO dotted separator lines, NO white or foggy wash.
  Natural colors — NOT orange, NOT amber. Watermark "blog.naver.com/witchbloom82"
  bottom-right, 55% opacity. 4:5 portrait.
  ```

---

## 이미지 3. 괴산공영버스터미널 외경 또는 수전 정류장 · 4:5

- **삽입 위치** : area1 67행 (버스 시간표·공식 링크 직후)
- **실배경 사진 소스** : ★**미확보.** 터미널·정류장은 관광 콘텐츠가 아니라 TourAPI 대상이 아니다.
  → 운영자가 **네이버지도 플레이스 사진 또는 직접 촬영본**으로 채운다.
  → 못 구하면 이 카드를 빼고 area1 67행의 삽입 포인트도 함께 지운다.
  ★**이 글에서 가장 아쉬운 컷이다** — 독자가 실제로 내릴 곳이다.
- **카드 텍스트** (배경만 바꿔 그대로 사용)
  ```
  갈 때 11:10, 나올 때 15:30
  이 두 개만 기억하면 돼요

  괴산 → 수전   6:30 · 7:50 · 11:10 · 12:30
                14:00 · 15:10 · 17:10 · 17:50
                시외버스 8:10 · 16:45
  수전 → 괴산   7:20 · 8:10 · 11:35 · 12:50
                14:20 · 15:30 · 17:30 · 18:05
                시외버스 8:25 · 19:20

  ★하루 10편 (시내 8 + 시외 2)
  ★진짜 막차는 18:05이 아니라 19:20
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of Goesan intercity bus terminal or the "Sujeon"
  roadside bus stop in Goesan-gun, Korea, in clear natural daylight — one continuous
  full-bleed photo filling the whole 4:5 frame. Keep the scene EXACTLY as-is; do NOT
  repaint or regenerate it; ONLY overlay the Korean text. Compose so one vertical side
  (open sky or pale pavement) stays naturally bright and empty, and place the text
  DIRECTLY on that bright area with a soft drop shadow — NO panel, NO glass, NO box,
  NO rounded card, NO white or foggy wash, NO icon badges, NO dotted separator lines,
  NEVER split the frame. This card must read like a ROAD SIGN: the two headline times
  large at the top, the full timetable smaller below. Korean text rendered EXACTLY as
  written:
  헤드라인 "갈 때 11:10, 나올 때 15:30 — 이 두 개만 기억하면 돼요"
  "괴산 → 수전  6:30 · 7:50 · 11:10 · 12:30 · 14:00 · 15:10 · 17:10 · 17:50"
  "시외버스 8:10 · 16:45"
  "수전 → 괴산  7:20 · 8:10 · 11:35 · 12:50 · 14:20 · 15:30 · 17:30 · 18:05"
  "시외버스 8:25 · 19:20"
  "하루 10편 (시내 8 + 시외 2)"
  "진짜 막차는 18:05이 아니라 19:20"
  Accent #4A6B5D on "11:10", "15:30" and "19:20" only. Natural colors — NOT orange,
  NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity.
  4:5 portrait.
  ```

---

## 이미지 4. 괴산공영버스터미널 시외버스 승차장 · 4:5

- **삽입 위치** : area1 93행 (출발지별 교통 문단 직후)
- **실배경 사진 소스** : ★**미확보.** 같은 이유(관광 콘텐츠 아님).
  → 운영자가 채우거나 카드를 뺀다.
- **카드 텍스트**
  ```
  괴산은 청주에서 오는 게 가장 가까워요

  청주 → 괴산     완행 1시간 10~20분대
  동서울 → 괴산   하루 10회 안팎 · 약 2시간
  충주 → 괴산     하루 1회뿐이라 시간 맞추기가 어려워요
  대전 → 괴산     직행이 불확실 — 청주를 거쳐 오는 게 안전

  ★서울에서는 왕복 버스만 4시간이라 걷는 시간과 맞먹어요
  ★괴산 → 동서울 귀경 막차는 18:55쯤
  　서울 당일 복귀면 수전 17:30 버스를 타세요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of the intercity bus boarding platform at Goesan
  terminal, Korea, in clear natural daylight — one continuous full-bleed photo filling
  the whole 4:5 frame. Keep the scene EXACTLY as-is; do NOT repaint or regenerate it;
  ONLY overlay the Korean text. Compose so the open sky above stays naturally bright
  and empty, and place the text DIRECTLY on it with a soft drop shadow — NO panel,
  NO glass, NO box, NO rounded card, NO white or foggy wash, NO icon badges, NO dotted
  separator lines, NEVER split the frame. This card must read like a ROAD SIGN: origin
  on the left, time on the right. Korean text rendered EXACTLY as written:
  헤드라인 "괴산은 청주에서 오는 게 가장 가까워요"
  "청주 → 괴산  완행 1시간 10~20분대"
  "동서울 → 괴산  하루 10회 안팎 · 약 2시간"
  "충주 → 괴산  하루 1회뿐이라 시간 맞추기가 어려워요"
  "대전 → 괴산  직행이 불확실 — 청주를 거쳐 오는 게 안전"
  "서울에서는 왕복 버스만 4시간이라 걷는 시간과 맞먹어요"
  "괴산 → 동서울 귀경 막차는 18:55쯤 · 서울 당일 복귀면 수전 17:30 버스를 타세요"
  Accent #4A6B5D on "1시간 10~20분대", "18:55" and "17:30" only. Natural colors —
  NOT orange, NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right,
  55% opacity. 4:5 portrait.
  ```

---

## 이미지 5. 산막이옛길 2코스 데크길, 진달래동산 방향 · 4:5

- **삽입 위치** : area1 113행 (코스 소제목 직후)
- **실배경 사진 소스** : 괴산호 contentid 125869 · **Type1**
  http://tong.visitkorea.or.kr/cms/resource/35/3571235_image2_1.jpg
  (대안 : .../36/3571236_image2_1.jpg)
  ★**육안 미확인** — 열어서 수변 데크나 물가 산책로가 보이는 컷이면 그대로,
  　호수 원경만 보이면 카드 제목을 "2.9km만 걸어도 충분해요"로 두고 원경으로 쓴다.
  ★산막이옛길 자체 사진(Type3)은 **여기에 쓰면 안 된다.**
- **카드 텍스트**
  ```
  4km 다 안 걸어도 괜찮아요

  2코스   2.9km · 노루샘 ~ 진달래동산 · 1시간 20분 안팎
  1코스   4.4km · 노루샘 ~ 산막이마을 · 선택

  대부분 나무 데크길이라 그늘이 이어져요
  2코스만 걸어도 산막이옛길 핵심 풍경은 다 보는 셈이에요

  ★입장료 없음 — 나이 상관없이 전 구간 무료
  ★운영 09:00~17:00 · 연중무휴
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of the lakeside walkway at Goesan Lake, Goesan-gun,
  Korea — clear natural daylight, wooden boardwalk beside still water with green
  forested slopes, one continuous full-bleed photo filling the whole 4:5 frame.
  Keep the scene EXACTLY as-is; do NOT repaint or regenerate it; ONLY overlay the
  Korean text. Compose so the bright water surface or the pale boardwalk stays
  naturally bright and empty, and place the text DIRECTLY on that area with a soft drop
  shadow — NO panel, NO glass, NO box, NO rounded card, NO white or foggy wash, NO icon
  badges, NO dotted separator lines, NEVER split the frame. Korean text rendered
  EXACTLY as written, label left and value right:
  헤드라인 "4km 다 안 걸어도 괜찮아요"
  "2코스  2.9km · 노루샘 ~ 진달래동산 · 1시간 20분 안팎"
  "1코스  4.4km · 노루샘 ~ 산막이마을 · 선택"
  "대부분 나무 데크길이라 그늘이 이어져요"
  "2코스만 걸어도 산막이옛길 핵심 풍경은 다 보는 셈이에요"
  "입장료 없음 — 나이 상관없이 전 구간 무료"
  "운영 09:00~17:00 · 연중무휴"
  Accent #4A6B5D on "2.9km", "4.4km" and "무료" only. Natural colors — NOT orange,
  NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity.
  4:5 portrait.
  ```

---

## 이미지 6. 산막이옛길 유람선 또는 선착장 전경 · 4:5

- **삽입 위치** : area1 125행 (유람선 소제목 직후)
- **실배경 사진 소스** : ★**미확보.**
  산막이옛길 콘텐츠(1948361)의 사진이 **전량 Type3**라 글자를 얹을 수 없다.
  괴산호 Type1 사진에 배가 찍혀 있을 수는 있으나 **육안 미확인이라 단정할 수 없다.**
  → 운영자가 괴산호 Type1 컷을 열어 **배·선착장이 보이면 그걸 쓰고**, 없으면 이 카드를 뺀다.
  → 또는 산막이옛길 Type3 사진을 **글자 없이 원본 그대로** 분위기 컷으로 넣는다(오버레이만 금지).
- **카드 텍스트**
  ```
  배 타면 걷는 길을 절반으로 줄여요

  운항 구간   차돌바위선착장 ↔ 산막이선착장
  운영 업체   산막이옛길영농조합 · 대운선박 (두 곳)
  요금        "편도 5,000원대"라는 안내가 있어요

  ★요금 · 65세 할인 · 막배 시각은 괴산군 공식 홈페이지에도 없어요
  　군이 '운행문의'로만 안내해요 — 043-832-3527로 미리 물어보고 가요
  ★6월 20일~9월 20일은 괴산댐 방류로 운항을 쉬어요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of a small passenger boat or boat landing on Goesan
  Lake, Goesan-gun, Korea, in clear natural daylight — one continuous full-bleed photo
  filling the whole 4:5 frame. Keep the scene EXACTLY as-is; do NOT repaint or
  regenerate it; ONLY overlay the Korean text. Compose so the open water stays
  naturally bright and empty, and place the text DIRECTLY on it with a soft drop shadow
  — NO panel, NO glass, NO box, NO rounded card, NO white or foggy wash, NO icon badges,
  NO dotted separator lines, NEVER split the frame. Korean text rendered EXACTLY as
  written:
  헤드라인 "배 타면 걷는 길을 절반으로 줄여요"
  "운항 구간  차돌바위선착장 ↔ 산막이선착장"
  "운영 업체  산막이옛길영농조합 · 대운선박 (두 곳)"
  "요금  '편도 5,000원대'라는 안내가 있어요"
  "요금 · 65세 할인 · 막배 시각은 괴산군 공식 홈페이지에도 없어요"
  "군이 '운행문의'로만 안내해요 — 043-832-3527로 미리 물어보고 가요"
  "6월 20일~9월 20일은 괴산댐 방류로 운항을 쉬어요"
  Accent #4A6B5D on "5,000원대" and the phone number only. Natural colors — NOT orange,
  NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity.
  4:5 portrait.
  ```

---

## 이미지 7. 소나무출렁다리 또는 연화담 전망 쉼터 · 4:5

- **삽입 위치** : area1 144행 (쉼터 목록 직후)
- **실배경 사진 소스** : 괴산호 contentid 125869 · **Type1**
  http://tong.visitkorea.or.kr/cms/resource/38/3571238_image2_1.jpg
  (대안 : .../39/3571239_image2_1.jpg)
  ★**육안 미확인** — 출렁다리나 정자가 보이면 그대로, 안 보이면 카드 제목을
  　"쉬는 자리가 길 위에 흩어져 있어요"로 두고 호수 컷으로 쓴다.
- **카드 텍스트**
  ```
  쉬는 자리가 길 위에 흩어져 있어요

  고인돌쉼터 · 연리지 · 소나무출렁다리 · 연화담
  망세루 · 앉은뱅이약수 · 병풍루 · 꾀꼬리전망대

  괴산군이 꼽은 명소만 26곳이에요
  한 번에 다 볼 필요 없어요 — 앉았다 가면 돼요

  ★화장실 · 매점 위치는 이번엔 구하지 못했어요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of a lookout pavilion or suspension footbridge
  beside Goesan Lake, Goesan-gun, Korea, in clear natural daylight — one continuous
  full-bleed photo filling the whole 4:5 frame. Keep the scene EXACTLY as-is; do NOT
  repaint or regenerate it; ONLY overlay the Korean text. Compose so the sky or the
  water surface stays naturally bright and empty, and place the text DIRECTLY on that
  bright area with a soft drop shadow — NO panel, NO glass, NO box, NO rounded card,
  NO white or foggy wash, NO icon badges, NO dotted separator lines, NEVER split the
  frame. Korean text rendered EXACTLY as written:
  헤드라인 "쉬는 자리가 길 위에 흩어져 있어요"
  "고인돌쉼터 · 연리지 · 소나무출렁다리 · 연화담"
  "망세루 · 앉은뱅이약수 · 병풍루 · 꾀꼬리전망대"
  "괴산군이 꼽은 명소만 26곳이에요"
  "한 번에 다 볼 필요 없어요 — 앉았다 가면 돼요"
  "화장실 · 매점 위치는 이번엔 구하지 못했어요"
  Accent #4A6B5D on "26곳" only. Natural colors — NOT orange, NOT amber.
  Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity. 4:5 portrait.
  ```

---

## 이미지 8. 산막이옛길 데크길, 완만한 구간 전경 · 4:5

- **삽입 위치** : area1 155행 (무장애·편의 문단 직후)
- **실배경 사진 소스** : 괴산호 contentid 125869 · **Type1**
  http://tong.visitkorea.or.kr/cms/resource/36/3571236_image2_1.jpg
  (대안 : 문광저수지 Type1 .../22/4093622_image2_1.jpg)
  ★**육안 미확인.**
- **카드 텍스트**
  ```
  평소에 산책하는 분이면 걸을 수 있어요

  길 성격   대부분 나무 데크 · 완만한 수변 산책로
  거리      2코스 2.9km면 1시간 20분 안팎

  ★휠체어 · 유모차로 전 구간이 가능한지는 확인된 자료가 없어요
  　한국관광공사 공공데이터에도 해당 항목이 비어 있어요
  ★화장실 위치도 이번엔 구하지 못했어요 — 터미널에서 미리 다녀오면 편해요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of a gentle lakeside boardwalk at Goesan Lake,
  Goesan-gun, Korea, in soft natural daylight — one continuous full-bleed photo filling
  the whole 4:5 frame. Keep the scene EXACTLY as-is; do NOT repaint or regenerate it;
  ONLY overlay the Korean text. Compose so the pale boardwalk or the water stays
  naturally bright and empty, and place the text DIRECTLY on that area with a soft drop
  shadow — NO panel, NO glass, NO box, NO rounded card, NO white or foggy wash, NO icon
  badges, NO dotted separator lines, NEVER split the frame. Korean text rendered
  EXACTLY as written:
  헤드라인 "평소에 산책하는 분이면 걸을 수 있어요"
  "길 성격  대부분 나무 데크 · 완만한 수변 산책로"
  "거리  2코스 2.9km면 1시간 20분 안팎"
  "휠체어 · 유모차로 전 구간이 가능한지는 확인된 자료가 없어요"
  "한국관광공사 공공데이터에도 해당 항목이 비어 있어요"
  "화장실 위치도 이번엔 구하지 못했어요 — 터미널에서 미리 다녀오면 편해요"
  Accent #4A6B5D on "2.9km" and "1시간 20분" only. Natural colors — NOT orange,
  NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity.
  4:5 portrait.
  ```

---

## 이미지 9. 올갱이해장국 또는 트레일 입구 식당가 전경 · 4:5

- **삽입 위치** : area1 167행 (맛집 문단 직후)
- **실배경 사진 소스** : ★**미확보.** 개별 음식점은 TourAPI 사진 대상이 아니다.
  → 운영자가 네이버지도 플레이스 사진(음식 컷)으로 채운다. 못 구하면 카드를 뺀다.
  ★**AI로 올갱이국 이미지를 생성해 붙이지 않는다** — 실제 그 가게 음식이 아니면 거짓이 된다.
- **카드 텍스트**
  ```
  괴산은 올갱이국이에요

  산막이 세자매        올갱이해장국 12,000원
                       09:00~18:00(라스트오더 17:00) · 트레일 입구 도보권
  괴산산막이매운탕     메기 · 빠가사리 매운탕 · 어죽 · 09:00~19:00
                       가격은 구하지 못했어요 (옆집이 12,000원대)
  주차장식당           올갱이해장국 12,000원 · 07:00~20:00
                       터미널 도보권 · 괴산 올갱이국거리

  ★가격 · 영업시간은 네이버지도에서 한 번 더 보면 좋아요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of a Korean freshwater-snail soup (olgaengi-guk)
  dish or a small restaurant row in Goesan, Korea, shot in soft natural daylight — one
  continuous full-bleed photo filling the whole 4:5 frame. Keep the scene EXACTLY
  as-is; do NOT repaint or regenerate it; ONLY overlay the Korean text. Compose so one
  vertical side (a pale tabletop, wall, or out-of-focus background) stays naturally
  bright and empty, and place the text DIRECTLY on that area with a soft drop shadow —
  NO panel, NO glass, NO box, NO rounded card, NO white or foggy wash, NO icon badges,
  NO dotted separator lines, NEVER split the frame. Korean text rendered EXACTLY as
  written, shop name left and menu with price right, one price per line:
  헤드라인 "괴산은 올갱이국이에요"
  "산막이 세자매  올갱이해장국 12,000원"
  "09:00~18:00(라스트오더 17:00) · 트레일 입구 도보권"
  "괴산산막이매운탕  메기 · 빠가사리 매운탕 · 어죽 · 09:00~19:00"
  "가격은 구하지 못했어요 (옆집이 12,000원대)"
  "주차장식당  올갱이해장국 12,000원 · 07:00~20:00"
  "터미널 도보권 · 괴산 올갱이국거리"
  "가격 · 영업시간은 네이버지도에서 한 번 더 보면 좋아요"
  Accent #4A6B5D on the prices only. Natural colors — NOT orange, NOT amber.
  Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity. 4:5 portrait.
  ```

---

## 이미지 10. CTA — 산막이옛길 호수 전경과 가을 분위기 · 16:9

- **삽입 위치** : area1 190행 (전화 박스 직후, 한 줄 정리 직전)
- **실배경 사진 소스** : 괴산호 contentid 125869 · **Type1**
  http://tong.visitkorea.or.kr/cms/resource/37/3571237_image2_1.jpg
  (대안 : .../39/3571239_image2_1.jpg · 문광저수지 Type1 .../21/4093621_image2_1.jpg)
  ★**육안 미확인** — 열어서 **가로 구도로 호수가 펼쳐진 컷**을 고른다.
  ★CTA 1장은 노을 톤을 써도 되는 유일한 카드지만, **사진이 실제로 노을일 때만** 그 컷을 고른다.
  　배경을 주황으로 물들이지 않는다.
- **카드 텍스트** (한 줄, 이모지 없음)
  ```
  입장료 없는 호수길, 2.9km만 걸어도 충분해요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of Goesan Lake in Goesan-gun, Korea, seen wide in
  autumn under clear natural daylight — one continuous full-bleed photo filling the
  whole 16:9 frame. Keep the scene EXACTLY as-is; do NOT repaint or regenerate it;
  ONLY overlay the Korean text. Compose so the open water or sky across the upper third
  stays naturally bright and empty, and place this ONE Korean line DIRECTLY on that
  bright area with a soft drop shadow, centred, large and confident, nothing else on
  the card:
  "입장료 없는 호수길, 2.9km만 걸어도 충분해요"
  Render the Korean characters EXACTLY as written. NO panel, NO glass, NO box, NO
  rounded card, NO white or foggy wash, NO icon badges, NO dotted separator lines,
  NO information list, NEVER split the frame. Accent #4A6B5D on "2.9km" only; body type
  deep ink #16201C on bright water, or cream #F5F3EE if the water is dark. Natural
  colors — NOT a monochrome orange or amber wash. Watermark
  "blog.naver.com/witchbloom82" bottom-right, 55% opacity. 16:9 landscape.
  ```

---

## 점검 (실측)

- area1 이미지 삽입 포인트 **10개** / area2 카드 **10개** — 이름·번호 1:1 ✅
- 비율 : 썸네일 1:1 · 코스 요약 4:5 · 정보 카드 4:5 × 7 · CTA 16:9 ✅
- 카드 안 이모지 : **0개**(썸네일 이모지는 area1 썸네일문구 줄에만) ✅
- ★**Type3 사진에 오버레이 : 0건** — 산막이옛길 등재분 전량이 Type3라 배경에서 제외하고
  　같은 호수인 괴산호 Type1로 대체했다 ✅
- 배경 실사진 확보 : **6/10** — 3·4·6·9번은 **미확보로 명시**(가짜 생성 금지) ⚠
- 육안 확인 : **0/10** — 프록시 CONNECT 403으로 원본을 열지 못했다 ⚠
