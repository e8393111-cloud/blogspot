# 영역2 — 이미지 지시서 (무주 덕유산 곤돌라)

- 기준 : `.claude/image-guide.md` 통합본
- area1 이미지 삽입 포인트 10개와 **개수·이름 1:1**
- 사진 출처 대장 : `photos/CREDITS.md`

## ★이 지시서의 전제 두 가지 (먼저 읽기)

1. **세트색은 아직 확정이 아니다.** 프록시 차단(CONNECT 403)으로 히어로 사진을 열어보지
   못했다. 아래에 쓴 `덕유산 구상나무 그린`은 **글감 기준 제안**이고,
   운영자가 1번 카드 배경 사진을 열어 실제 색을 보고 확정한다.
   ★확정 전까지 앰버/골드로 되돌리지 않는다 — 이 글은 상록 침엽수와 회백색 능선이 주조다.
2. **10장 중 4장은 배경 사진이 없다.** 곤돌라 탑승장 · 터미널 외경 · 리조트 셔틀 · 맛집.
   **가짜 생성 배경으로 채우지 않는다.** 운영자가 실사진으로 채우거나 그 카드를 뺀다.

## 세트색 (제안, 확정 전)

- 메인 : **덕유산 구상나무 그린** `#1E5140` — 핵심 숫자 · 라벨 · 구분선에만(전체 15% 이하)
- 보조 : 능선 회백색 `#E8E6E1` (글자 바탕이 어두울 때 글자색)
- 본문 글씨 : 깊은 잉크 `#16201C` (밝은 하늘 위) / 크림 `#F5F3EE` (어두운 숲 위)
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
(open sky, pale ridge, water, or soft out-of-focus foliage) with a soft drop shadow.
Render the Korean characters EXACTLY as written, no substitutions, no invented glyphs.
Accent color #1E5140 on numbers and labels only (under 15% of the frame);
natural colors everywhere else — NOT orange, NOT amber, NOT a monochrome warm wash.
Small watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity.
```

**사용법** — ①아래 사진 URL을 열어 저장 → ②GPT에 업로드 → ③해당 카드 프롬프트로 글자만 얹기

---

## 이미지 1. 썸네일 — 곤돌라 캐빈에서 본 덕유산 능선, 헤드라인 문구 · 1:1

- **삽입 위치** : area1 18행 (첫 5줄 직후)
- **실배경 사진 소스** : 한국관광공사 TourAPI · 설천봉 contentid 2704644 · **Type1**
  https://tong.visitkorea.or.kr/cms/resource/07/3478807_image2_1.jpg
  (대안 : .../05/3478805_image2_1.jpg · .../10/3478810_image2_1.jpg)
  ★**육안 미확인.** 열어서 ⓐ겨울 상고대가 아닌지 ⓑ간판·글자가 없는지 확인 후 사용.
  ★곤돌라 캐빈 내부 사진은 확보하지 못했다 — 설천봉 능선 실경으로 간다.
- **카드 텍스트** (이모지 없음)
  ```
  무주덕유산 곤돌라
  앉아서 1,520m 설천봉까지
  65세 이상 30% 할인
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of Seolcheonbong peak in Deogyusan National Park,
  Muju, Korea — a clear-daylight autumn ridge with evergreen Korean fir and pale grey
  rock, one continuous full-bleed photo filling the whole square frame. Keep the scene
  EXACTLY as-is; do NOT repaint or regenerate the background; ONLY overlay Korean text.
  Compose so the upper sky area stays naturally bright and empty. Place this Korean
  headline DIRECTLY on that bright sky with a soft drop shadow, three lines,
  large bold cover type, no subtitle beyond these lines:
  "무주덕유산 곤돌라" / "앉아서 1,520m 설천봉까지" / "65세 이상 30% 할인"
  Render the Korean characters EXACTLY as written. This is a COVER — headline only,
  NO information lists, NO icons, NO boxes.
  Accent color #1E5140 on "1,520m" and "30%" only; body type deep ink #16201C on bright
  sky, or cream #F5F3EE if the sky is dark. Natural colors everywhere — NOT orange,
  NOT amber, NOT a monochrome warm wash. NO panel, NO glass, NO rounded card, NO white
  or foggy wash, NO icon badges, NO dotted lines, NEVER split the frame.
  Small watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity. 1:1 square.
  ```

---

## 이미지 2. 코스 요약 카드 — 반나절 동선 타임라인 · 4:5

- **삽입 위치** : area1 43행 (3초요약 박스 직후)
- **실배경 사진 소스** : 설천봉 contentid 2704644 · **Type1**
  https://tong.visitkorea.or.kr/cms/resource/08/3478808_image2_1.jpg
  ★작은 사진 4컷을 쓸 경우에도 **실사진만** — 아래 Type1 목록에서 고른다
  (설천봉 3478809 · 향적봉 4056664 · 향적봉 4056662 · 구천동계곡 3536277).
  구하지 못하면 **사진 없이 번호+글자만으로 간다.**
- ★이 카드는 `.claude/CLAUDE.md`가 명시한 **'패널 금지'의 유일한 예외**(타임라인 인포그래픽).
- **카드 텍스트**
  ```
  무주덕유산 반나절 코스

  ① 무주공용버스터미널
     무주읍 출발 셔틀 10:20
     (타는 곳: P1주차장·시장사거리·군청민원실 옆·산림조합 앞)
        ↓ 리조트행 무료 셔틀
  ② 무주덕유산리조트 곤돌라 탑승장
        ↓ 곤돌라
  ③ 설천봉 전망대 1,520m
     여기까지만 봐도 충분해요
        ↓ 데크길 편도 0.6km · 왕복 약 40분 (선택)
  ④ 향적봉 1,614m

  전체 소요   반나절
  1인 비용    65세 이상 곤돌라 30% 할인 (금액 미확보)
  ★마감      곤돌라 상행 월~목 16:00 · 금 16:30 · 토 17:00 · 일 16:00
             돌아오는 셔틀 리조트 출발 15:30 (다음 편 18:30)
  ```
  ★셔틀·곤돌라 소요 분은 확보하지 못했다. **지어내지 말고 빈칸으로 둔다.**
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of the Deogyusan ridge at Seolcheonbong, Muju,
  Korea — clear natural daylight, evergreen firs and pale open sky, one continuous
  full-bleed photo filling the whole 4:5 frame. Keep the scene EXACTLY as-is; do NOT
  repaint or regenerate it. Overlay a vertical numbered TIMELINE infographic reading
  top to bottom, using the Korean text below rendered EXACTLY as written. This ONE card
  may use a restrained dark-green tinted strip (about 25% opacity, #1E5140) behind the
  timeline so the numbers stay legible — the photograph must remain clearly visible
  through it; NEVER a milky white or frosted-opaque panel, NEVER a 50/50 split.
  Numbers ①②③④ in #1E5140, connected by thin vertical rules; movement notes in smaller
  type between the stops; a three-row summary block at the bottom.
  Korean text:
  헤드라인 "무주덕유산 반나절 코스"
  ① "무주공용버스터미널 / 무주읍 출발 셔틀 10:20"
  ↓ "리조트행 무료 셔틀"
  ② "무주덕유산리조트 곤돌라 탑승장"
  ↓ "곤돌라"
  ③ "설천봉 전망대 1,520m / 여기까지만 봐도 충분해요"
  ↓ "데크길 편도 0.6km · 왕복 약 40분 (선택)"
  ④ "향적봉 1,614m"
  하단 "전체 소요  반나절" / "1인 비용  65세 이상 곤돌라 30% 할인"
  하단 강조 "마감  곤돌라 상행 월~목 16:00 · 금 16:30 · 토 17:00 · 일 16:00"
  하단 강조 "돌아오는 셔틀  리조트 출발 15:30 (다음 편 18:30)"
  Keep one or two numbers per line so nothing is crowded. NO icon badges, NO circular
  sticker or emoji icons, NO dotted separator lines, NO white or foggy wash.
  Natural colors — NOT orange, NOT amber. Watermark "blog.naver.com/witchbloom82"
  bottom-right, 55% opacity. 4:5 portrait.
  ```

---

## 이미지 3. 곤돌라 탑승장 전경 · 4:5

- **삽입 위치** : area1 67행 (곤돌라 시간표 박스·예약 버튼 직후)
- **실배경 사진 소스** : ★**미확보.**
  TourAPI에 `무주덕유산리조트`·`곤돌라` 단독 콘텐츠가 없다.
  → 운영자가 **네이버지도 플레이스 사진이나 리조트 공식 홈페이지 사진**으로 채운다.
  → 못 구하면 **이 카드를 빼고**, area1 67행의 이미지 삽입 포인트도 함께 지운다.
  ★설천봉 사진 중 곤돌라 상부역이 찍힌 컷이 있을 수 있으나, 육안 미확인이라 단정하지 않는다.
- **카드 텍스트** (배경만 바꿔 그대로 사용)
  ```
  곤돌라, 요일마다 마감이 달라요

  월~목  상행 10:00~16:00 · 하행 ~16:30
  금      상행 10:00~16:30 · 하행 ~17:00
  토      상행 09:00~17:00 · 하행 ~17:30
  일      상행 09:00~16:00 · 하행 ~16:30

  ★11월 2일부터 토요일은 09:30~16:30
  ★오후 4시 10분에 도착하면 월~목엔 못 올라가요
  ★10월 주말·공휴일은 사전예약제
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of the Muju Deogyusan Resort gondola base station,
  Korea, in clear natural daylight — one continuous full-bleed photo filling the whole
  4:5 frame. Keep the scene EXACTLY as-is; do NOT repaint or regenerate it; ONLY overlay
  the Korean text. Compose so one vertical side (open sky or pale pavement) stays
  naturally bright and empty, and place the text DIRECTLY on that bright area with a
  soft drop shadow — NO panel, NO glass, NO box, NO rounded card, NO white or foggy
  wash, NO icon badges, NO dotted separator lines, NEVER split the frame.
  Korean text rendered EXACTLY as written, day labels left and times right, one or two
  numbers per line:
  헤드라인 "곤돌라, 요일마다 마감이 달라요"
  "월~목  상행 10:00~16:00 · 하행 ~16:30"
  "금  상행 10:00~16:30 · 하행 ~17:00"
  "토  상행 09:00~17:00 · 하행 ~17:30"
  "일  상행 09:00~16:00 · 하행 ~16:30"
  "11월 2일부터 토요일은 09:30~16:30"
  "오후 4시 10분에 도착하면 월~목엔 못 올라가요"
  "10월 주말·공휴일은 사전예약제"
  Accent #1E5140 on the times only; body type deep ink #16201C. Natural colors —
  NOT orange, NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right,
  55% opacity. 4:5 portrait.
  ```

---

## 이미지 4. 설천봉 전망대에서 본 향적봉 능선 · 4:5

- **삽입 위치** : area1 86행 (요금·할인 문단 직후)
- **실배경 사진 소스** : 향적봉(덕유산) contentid 1705213 · **Type1**
  https://tong.visitkorea.or.kr/cms/resource/26/3516726_image2_1.jpg
  (대안 : .../64/4056664_image2_1.jpg · .../30/3516730_image2_1.jpg)
  ★육안 미확인 — 열어서 능선이 보이는 컷인지 확인 후 사용.
- **카드 텍스트**
  ```
  곤돌라 요금, 누가 할인받나요

  65세 이상          30% 할인 (신분증 제시)
  36개월 미만        무료
  36개월~초등학생    소인 요금
  국가유공자·보훈대상자  30% 할인
  군인·경찰·소방관      30% 할인 (4인 한)
  장애인 1~3급         30% 할인 (동반 1인 포함)

  덕유산 국립공원 입장료는 2007년에 폐지돼 없어요
  ★왕복·편도 금액은 공식 홈페이지 요금표에서 확인
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of the Hyangjeokbong ridge in Deogyusan National
  Park, Muju, Korea — clear natural daylight over layered ridgelines and Korean fir,
  one continuous full-bleed photo filling the whole 4:5 frame. Keep the scene EXACTLY
  as-is; do NOT repaint or regenerate it; ONLY overlay the Korean text. Compose so the
  open sky above the ridgeline stays naturally bright and empty, and place the text
  DIRECTLY on that bright sky with a soft drop shadow — NO panel, NO glass, NO box,
  NO rounded card, NO white or foggy wash, NO icon badges, NO dotted separator lines,
  NEVER split the frame. Korean text rendered EXACTLY as written, label left and value
  right, one number per line:
  헤드라인 "곤돌라 요금, 누가 할인받나요"
  "65세 이상  30% 할인 (신분증 제시)"
  "36개월 미만  무료"
  "36개월~초등학생  소인 요금"
  "국가유공자·보훈대상자  30% 할인"
  "군인·경찰·소방관  30% 할인 (4인 한)"
  "장애인 1~3급  30% 할인 (동반 1인 포함)"
  "덕유산 국립공원 입장료는 2007년에 폐지돼 없어요"
  "왕복·편도 금액은 공식 홈페이지 요금표에서 확인"
  Accent #1E5140 on "30%", "무료" and "2007년" only. Natural colors — NOT orange,
  NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity.
  4:5 portrait.
  ```

---

## 이미지 5. 무주공용버스터미널 외경 · 4:5

- **삽입 위치** : area1 104행 (시외버스 문단 직후)
- **실배경 사진 소스** : ★**미확보.** 터미널은 관광 콘텐츠가 아니라 TourAPI 대상이 아니다.
  → 운영자가 **네이버지도 플레이스 사진 또는 직접 촬영본**으로 채운다.
  → 못 구하면 이 카드를 빼고 area1 104행의 삽입 포인트도 함께 지운다.
- **카드 텍스트**
  ```
  대전에서 50분, 서울에서 2시간 55분

  대전복합터미널 → 무주   약 50분 · 5,500원 · 하루 9회 이상
  서울(우등) → 무주        약 2시간 55분 · 하루 5회

  ★서울은 출발 터미널이 여러 곳이에요 — 예매할 때 확인
  ★돌아가는 편 시각은 터미널에 먼저 물어두기
  무주공용버스터미널 063-322-2245
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of Muju Intercity Bus Terminal, Korea, in clear
  natural daylight — one continuous full-bleed photo filling the whole 4:5 frame.
  Keep the scene EXACTLY as-is; do NOT repaint or regenerate it; ONLY overlay the
  Korean text. Compose so the open sky above the building stays naturally bright and
  empty, and place the text DIRECTLY on it with a soft drop shadow — NO panel, NO glass,
  NO box, NO rounded card, NO white or foggy wash, NO icon badges, NO dotted separator
  lines, NEVER split the frame. This card must read like a ROAD SIGN: origin on the
  left, time and fare on the right, in large legible type. Korean text rendered EXACTLY
  as written:
  헤드라인 "대전에서 50분, 서울에서 2시간 55분"
  "대전복합터미널 → 무주  약 50분 · 5,500원 · 하루 9회 이상"
  "서울(우등) → 무주  약 2시간 55분 · 하루 5회"
  "서울은 출발 터미널이 여러 곳이에요 — 예매할 때 확인"
  "돌아가는 편 시각은 터미널에 먼저 물어두기"
  "무주공용버스터미널 063-322-2245"
  Accent #1E5140 on "50분", "5,500원" and "2시간 55분" only. Natural colors —
  NOT orange, NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right,
  55% opacity. 4:5 portrait.
  ```

---

## 이미지 6. 리조트 셔틀 승차 위치 안내판 또는 리조트 전경 · 4:5

- **삽입 위치** : area1 130행 (셔틀 박스 직후)
- **실배경 사진 소스** : ★**미확보.** 같은 이유(관광 콘텐츠 아님).
  → 운영자가 리조트 공식 홈 사진·네이버지도 플레이스 사진으로 채운다.
  → 못 구하면 이 카드를 빼고 area1 130행의 삽입 포인트도 함께 지운다.
- **카드 텍스트**
  ```
  리조트 셔틀, 하루 4번뿐이에요

  무주읍 출발   05:00 · 07:20 · 10:20 · 16:30
  리조트 출발   09:30 · 15:30 · 18:30 · 21:10

  타는 곳은 터미널 정문이 아니에요
  P1주차장(무주관광안내소 위) · 시장사거리
  군청민원실 옆 · 산림조합 앞

  ★리조트행 셔틀과 구천동행 버스는 다른 차예요
  ★15:30을 놓치면 다음은 18:30 — 3시간을 기다려요
  ★시간이 안 맞으면 무주읍내에서 택시
  셔틀 문의 063-320-7113
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of the Muju Deogyusan Resort shuttle stop sign or
  the resort seen in clear natural daylight, Korea — one continuous full-bleed photo
  filling the whole 4:5 frame. Keep the scene EXACTLY as-is; do NOT repaint or
  regenerate it; ONLY overlay the Korean text. Compose so one vertical side (open sky
  or pale pavement) stays naturally bright and empty, and place the text DIRECTLY on
  that bright area with a soft drop shadow — NO panel, NO glass, NO box, NO rounded
  card, NO white or foggy wash, NO icon badges, NO dotted separator lines, NEVER split
  the frame. This card must read like a ROAD SIGN — departure times large, warnings
  below. Korean text rendered EXACTLY as written:
  헤드라인 "리조트 셔틀, 하루 4번뿐이에요"
  "무주읍 출발  05:00 · 07:20 · 10:20 · 16:30"
  "리조트 출발  09:30 · 15:30 · 18:30 · 21:10"
  "타는 곳은 터미널 정문이 아니에요"
  "P1주차장(무주관광안내소 위) · 시장사거리 · 군청민원실 옆 · 산림조합 앞"
  "리조트행 셔틀과 구천동행 버스는 다른 차예요"
  "15:30을 놓치면 다음은 18:30 — 3시간을 기다려요"
  "시간이 안 맞으면 무주읍내에서 택시"
  "셔틀 문의 063-320-7113"
  Accent #1E5140 on "10:20", "15:30" and "18:30" only. Natural colors — NOT orange,
  NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity.
  4:5 portrait.
  ```

---

## 이미지 7. 설천봉에서 향적봉으로 이어지는 데크길 · 4:5

- **삽입 위치** : area1 147행 (설천봉↔향적봉 문단 직후)
- **실배경 사진 소스** : 향적봉(덕유산) contentid 1705213 · **Type1**
  https://tong.visitkorea.or.kr/cms/resource/62/4056662_image2_1.jpg
  (대안 : .../66/4056666_image2_1.jpg · .../69/4056669_image2_1.jpg)
  ★육안 미확인 — 열어서 **데크길이 실제로 보이는 컷**인지 확인한다. 안 보이면
  　능선 컷으로 쓰되 카드 제목을 "여기까지만 봐도 충분해요"로 바꾼다.
- **카드 텍스트**
  ```
  향적봉까지 안 올라가도 괜찮아요

  곤돌라 + 설천봉 전망대   계단 거의 없이 도착
  설천봉 → 향적봉          편도 0.6km · 왕복 약 40분

  초반은 데크길, 정상 근처는 계단이에요
  무릎이 편치 않으면 설천봉 전망대까지만

  ★곤돌라는 연중 운행해요
  ★"5월 19일~6월 22일만 운행"은 등산로 예약제 기간이지
    곤돌라 이야기가 아니에요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of the wooden deck trail from Seolcheonbong toward
  Hyangjeokbong in Deogyusan National Park, Muju, Korea — clear natural daylight,
  Korean fir on both sides, one continuous full-bleed photo filling the whole 4:5 frame.
  Keep the scene EXACTLY as-is; do NOT repaint or regenerate it; ONLY overlay the Korean
  text. Compose so the sky or the pale deck surface stays naturally bright and empty,
  and place the text DIRECTLY on that bright area with a soft drop shadow — NO panel,
  NO glass, NO box, NO rounded card, NO white or foggy wash, NO icon badges, NO dotted
  separator lines, NEVER split the frame. Korean text rendered EXACTLY as written:
  헤드라인 "향적봉까지 안 올라가도 괜찮아요"
  "곤돌라 + 설천봉 전망대  계단 거의 없이 도착"
  "설천봉 → 향적봉  편도 0.6km · 왕복 약 40분"
  "초반은 데크길, 정상 근처는 계단이에요"
  "무릎이 편치 않으면 설천봉 전망대까지만"
  "곤돌라는 연중 운행해요"
  "'5월 19일~6월 22일만 운행'은 등산로 예약제 기간이지 곤돌라 이야기가 아니에요"
  Accent #1E5140 on "0.6km" and "40분" only. Natural colors — NOT orange, NOT amber.
  Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity. 4:5 portrait.
  ```

---

## 이미지 8. 구천동어사길 목교 구간 · 4:5

- **삽입 위치** : area1 164행 (구천동어사길 문단·버튼 직후)
- **실배경 사진 소스** : ★**대체본.**
  구천동 어사길(contentid 2673996)은 **Type3(변경금지)라 글자를 얹을 수 없다.**
  → 같은 계곡의 **구천동계곡 contentid 127742 · Type1**로 대체한다.
  http://tong.visitkorea.or.kr/cms/resource/77/3536277_image2_1.jpg
  (대안 : .../78/3536278_image2_1.jpg · .../81/3536281_image2_1.jpg)
  ★육안 미확인 — 열어서 목교·데크가 보이면 그대로, 물길만 보이면 카드 제목을
  　"구천동은 다른 날 가세요"로 두고 계곡 컷으로 쓴다.
  ★어사길 Type3 사진을 **글자 없이 원본 그대로** 쓰는 건 가능하다(오버레이만 금지).
- **카드 텍스트**
  ```
  구천동어사길은 같은 날 못 묶어요

  구천동 방면 버스   하루 5회
  07:50 · 10:10 · 11:10 · 17:00 · 17:50

  ★11:10 다음이 17:00 — 거의 6시간이 비어요
  오전 편을 놓치면 오후 5시까지 무주읍내에서 기다려요

  어사길 월하탄~안심대   편도 3.3km · 1시간 20분~2시간
  목교·데크·자연석길이 섞이고 계단도 있어요

  곤돌라와 어사길, 둘 중 하나만 고르세요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of Gucheondong Valley in Deogyusan National Park,
  Muju, Korea — clear natural daylight, clear water over pale boulders and deep green
  forest, one continuous full-bleed photo filling the whole 4:5 frame. Keep the scene
  EXACTLY as-is; do NOT repaint or regenerate it; ONLY overlay the Korean text. Compose
  so the bright water surface or the open gap in the canopy stays naturally bright and
  empty, and place the text DIRECTLY on that bright area with a soft drop shadow —
  NO panel, NO glass, NO box, NO rounded card, NO white or foggy wash, NO icon badges,
  NO dotted separator lines, NEVER split the frame. Korean text rendered EXACTLY as
  written, one or two numbers per line:
  헤드라인 "구천동어사길은 같은 날 못 묶어요"
  "구천동 방면 버스  하루 5회"
  "07:50 · 10:10 · 11:10 · 17:00 · 17:50"
  "11:10 다음이 17:00 — 거의 6시간이 비어요"
  "오전 편을 놓치면 오후 5시까지 무주읍내에서 기다려요"
  "어사길 월하탄~안심대  편도 3.3km · 1시간 20분~2시간"
  "목교·데크·자연석길이 섞이고 계단도 있어요"
  "곤돌라와 어사길, 둘 중 하나만 고르세요"
  Accent #1E5140 on "11:10", "17:00" and "6시간" only. Natural colors — NOT orange,
  NOT amber. Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity.
  4:5 portrait.
  ```

---

## 이미지 9. 무주읍내 밥집 거리 또는 쏘가리어죽 · 4:5

- **삽입 위치** : area1 180행 (맛집 문단 직후)
- **실배경 사진 소스** : ★**미확보.** 개별 음식점은 TourAPI 사진 대상이 아니다.
  → 운영자가 네이버지도 플레이스 사진(메뉴판 아닌 음식 컷)으로 채운다.
  → 못 구하면 이 카드를 빼고 area1 180행의 삽입 포인트도 함께 지운다.
  ★AI로 어죽 이미지를 생성해 붙이지 않는다 — 실제 가게 음식이 아니면 거짓이 된다.
- **카드 텍스트**
  ```
  무주읍내에서 뭘 먹나요

  무주어죽      쏘가리어죽 20,000원 · 빠가어죽 10,000원(2인~)
                 09:30~19:30 · 수요일 휴무
  금강식당      쏘가리탕 60,000원부터 · 10:30~19:30
                 1986년부터 한자리
  별미가든      산채정식 1인 19,000~25,000원대
                 11:30~20:00 연중무휴

  ★터미널에서의 도보 거리는 네이버지도에서 상호 검색
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of a Korean freshwater-fish porridge (eojuk) dish
  or a restaurant street in Muju town, Korea, shot in soft natural daylight — one
  continuous full-bleed photo filling the whole 4:5 frame. Keep the scene EXACTLY
  as-is; do NOT repaint or regenerate it; ONLY overlay the Korean text. Compose so one
  vertical side (a pale tabletop, wall, or out-of-focus background) stays naturally
  bright and empty, and place the text DIRECTLY on that bright area with a soft drop
  shadow — NO panel, NO glass, NO box, NO rounded card, NO white or foggy wash, NO icon
  badges, NO dotted separator lines, NEVER split the frame. Korean text rendered
  EXACTLY as written, shop name left and menu with price right, one price per line:
  헤드라인 "무주읍내에서 뭘 먹나요"
  "무주어죽  쏘가리어죽 20,000원 · 빠가어죽 10,000원(2인~)"
  "09:30~19:30 · 수요일 휴무"
  "금강식당  쏘가리탕 60,000원부터 · 10:30~19:30"
  "1986년부터 한자리"
  "별미가든  산채정식 1인 19,000~25,000원대"
  "11:30~20:00 연중무휴"
  "터미널에서의 도보 거리는 네이버지도에서 상호 검색"
  Accent #1E5140 on the prices only. Natural colors — NOT orange, NOT amber.
  Watermark "blog.naver.com/witchbloom82" bottom-right, 55% opacity. 4:5 portrait.
  ```

---

## 이미지 10. CTA — 단풍철 덕유산 능선과 곤돌라 전경 · 16:9

- **삽입 위치** : area1 204행 (전화 박스 직후, 한 줄 정리 직전)
- **실배경 사진 소스** : 향적봉(덕유산) contentid 1705213 · **Type1**
  https://tong.visitkorea.or.kr/cms/resource/67/4056667_image2_1.jpg
  (대안 : 설천봉 .../09/3478809_image2_1.jpg · 향적봉 .../68/4056668_image2_1.jpg)
  ★육안 미확인 — 열어서 **가로 구도로 능선이 펼쳐진 컷**을 고른다.
  ★CTA 1장은 노을/석양 톤을 써도 되는 유일한 카드다. 다만 배경을 물들이지 말고
  　**사진이 실제로 노을일 때만** 그 컷을 고른다.
- **카드 텍스트** (한 줄, 이모지 없음)
  ```
  대전에서 50분, 곤돌라 타고 덕유산 단풍 능선 만나러 가요
  ```
- **영문 프롬프트**
  ```
  Edit the uploaded real photograph of the Deogyusan ridgeline in Muju, Korea, seen
  wide in autumn under clear natural daylight — one continuous full-bleed photo filling
  the whole 16:9 frame. Keep the scene EXACTLY as-is; do NOT repaint or regenerate it;
  ONLY overlay the Korean text. Compose so the open sky across the upper third stays
  naturally bright and empty, and place this ONE Korean line DIRECTLY on that bright
  sky with a soft drop shadow, centred, large and confident, nothing else on the card:
  "대전에서 50분, 곤돌라 타고 덕유산 단풍 능선 만나러 가요"
  Render the Korean characters EXACTLY as written. NO panel, NO glass, NO box, NO
  rounded card, NO white or foggy wash, NO icon badges, NO dotted separator lines,
  NO information list, NEVER split the frame. Accent #1E5140 on "50분" only; body type
  deep ink #16201C on bright sky, or cream #F5F3EE if the sky is dark. Natural colors —
  NOT a monochrome orange or amber wash. Watermark "blog.naver.com/witchbloom82"
  bottom-right, 55% opacity. 16:9 landscape.
  ```

---

## 점검 (실측)

- area1 이미지 삽입 포인트 : **10개** / area2 카드 : **10개** — 이름·번호 1:1 ✅
- 비율 : 썸네일 1:1 · 코스 요약 4:5 · 정보 카드 4:5 × 7 · CTA 16:9 ✅
- 카드 안 이모지 : **0개** (썸네일 이모지는 area1 썸네일문구 줄에만) ✅
- 배경 실사진 확보 : **6/10** — 3·5·6·9번은 **미확보로 명시**(가짜 생성 금지) ⚠
- Type3 사진에 오버레이 : **0건** (구천동 어사길 Type3 → 구천동계곡 Type1로 대체) ✅
- 육안 확인 : **0/10** — 프록시 CONNECT 403으로 원본을 열지 못했다 ⚠
