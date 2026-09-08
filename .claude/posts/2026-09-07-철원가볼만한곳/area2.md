# 영역2 — 철원 고석정 꽃밭 이미지 지시서 (9장)

📅 2026년 9월 7일 기준 · 본문 : `area1.md`

**세트 색 1개** : 더스티 로즈 / 뮤트 모브핑크 (dusty rose, muted mauve-pink)
　근거 — 히어로 사진의 주인공이 핑크뮬리·코키아·천일홍이라 실제 톤이 로즈~자주 계열이다.
　가평 글(딥 틸그린)과 겹치지 않게 이번 글은 이 색으로 고정. 앰버·골드·주황은 쓰지 않는다.

**사용법 3단계**
　① 아래 사진 URL을 브라우저에서 열어 저장
　② 이미지 생성 GPT에 업로드
　③ 그 카드의 영문 프롬프트를 그대로 넣어 **"사진은 그대로 두고 글자만"** 얹기

---

## ★사진 소스 — 한국관광공사 TourAPI로 실제 확보

한국관광공사 관광사진 API(`KorService2/detailImage2`)로 받은 **실재하는 URL**이다. 지어낸 주소가 아니다.

### ⚠가장 중요한 것 — `Type1`만 글자를 얹을 수 있다

API가 사진마다 `cpyrhtDivCd`(저작권 유형)를 함께 준다. **이걸 반드시 보고 골라야 한다.**

- **`Type1` = 공공누리 제1유형** — 출처만 밝히면 상업적 이용·**변형 가능** → ✅ 글자 오버레이 OK
- **`Type3` = 제1유형 + 변경금지** — 출처를 밝혀도 **가공·편집 불가** → ❌ 글자를 얹으면 라이선스 위반
　→ Type3 사진은 **글자 없이 원본 그대로** 본문 사진으로만 쓸 수 있다.

### 확보한 Type1 사진 (오버레이 가능)

| 장소 | 장수 | contentid |
|---|---:|---|
| 고석정 꽃밭 | 7 | 2749319 |
| 고석정국민관광지 | 11 | 125782 |
| 철원 한탄강 주상절리길(잔도) | 11 | 2760361 |
| 승일교 | 5 | 2777847 |
| 직탕폭포 | 6 | 125653 |
| 철원 노동당사 | 5 | 264485 |
| 철원역사문화공원 | 9 | 3072021 |

### Type3 — 있지만 글자를 얹으면 안 되는 사진

한탄강빵명장(4) · 고석정가든 · 순담계곡(5) · 한탄강 은하수교(10) · 송대소주상절리(4) · 고석정(지질공원)

### 끝내 없는 것

**동송터미널 · 동서울터미널 · 시내버스** — 터미널은 관광지가 아니라 TourAPI에 없다. 억지로 다른 사진을 붙이지 않았다.

### 출처 표기 (공공누리 1유형 의무)

사진 아래나 글 맨 끝에 한 줄:
```
사진 출처 : 한국관광공사 포토코리아 (공공누리 제1유형)
```

---

## ★프롬프트에서 장면 묘사를 뺐다

이전 판은 `a wide-open autumn flower field with pink muhly in soft focus…`처럼 **내가 상상한 장면**을 길게 묘사했다. 실제 사진이 그와 다르면 모델이 **배경을 묘사대로 고쳐 그린다.** 사진을 눈으로 확인할 수 없으므로, 묘사를 걷어내고 **"업로드한 사진을 그대로 두고 글자만 얹어라"**는 편집 지시와 오버레이 텍스트만 남겼다. 어떤 사진이 오든 안전하고, 프롬프트도 절반으로 짧아졌다.

---
---

# 이미지1. 썸네일 카드 · 1:1

**삽입 위치** : 글 맨 앞

**배경 사진** — 고석정 꽃밭 · 한국관광공사 · **공공누리 1유형(Type1)** · 출처표시 필요 · API 응답으로 확인(사진 미열람)
```
https://tong.visitkorea.or.kr/cms/resource_photo/44/4062444_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/09/4062109_image2_1.JPG   (후보2)
https://tong.visitkorea.or.kr/cms/resource_photo/42/4062442_image2_1.jpg   (후보3)
```

**카드 텍스트**
```
철원 고석정 꽃밭, 화요일만 피하면 버스로 다 됩니다
버스와 도보로 35분 · 9월 말 절정
```

**영문 프롬프트**
```
Edit the uploaded photograph. Keep the image EXACTLY as-is — do NOT repaint, redesign, regenerate, restyle or replace any part of the background. ONLY overlay Korean text and a watermark.

Place one large Korean headline "철원 고석정 꽃밭, 화요일만 피하면 버스로 다 됩니다" and one smaller tagline below it "버스와 도보로 35분 · 9월 말 절정". Put them on whichever area of the photo is naturally brightest and least busy; if no such area exists, place them across the lower third. Give the text a soft drop shadow. Choose the text color for maximum contrast against whatever is behind it — dark charcoal on light areas, warm cream on dark areas. Never a low-contrast pastel.

This is a cover: headline plus one tagline only. No information lists, no numbers beyond what is written, no icons.

Typography: clean refined Korean gothic with strong weight contrast. Not brush, not calligraphy. No text outline, gradient or glow.

NO panel, NO glass, NO translucent layer, NO text background box, NO colored label box, NO pill banner, NO bottom strip, NO rounded card, NO tinted overlay, NO white or foggy wash over the photo. Never split the frame. The space for text must come from the photo itself, never from an added shape.

Accent color, used only on a tiny detail such as a separator dot or a thin underline: dusty rose / muted mauve-pink. Not orange, not amber, not gold.

Render the Korean text exactly as written. Do not invent, alter, drop or add any character or number.

Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

# 이미지2. 코스 요약 타임라인 카드 · 4:5

★ 이 카드만 '패널 금지'의 예외 (번호형 인포그래픽)

**삽입 위치** : 반나절 코스 문단 직후

**작은 사진 2장** — 둘 다 Type1
```
③ 고석정 꽃밭   https://tong.visitkorea.or.kr/cms/resource_photo/46/4062446_image2_1.jpg
④ 고석정 권역   https://tong.visitkorea.or.kr/cms/resource/09/3331509_image2_1.jpg
```
※ ①동송터미널 · ②시내버스는 **사진 없음** → 숫자와 글자만으로 간다(가짜 컷 금지)

**카드 텍스트**
```
① 동송터미널 도착 (서울·의정부 버스)
② 버스 22분 + 도보 10분 → 고석정 꽃밭
③ 꽃밭 + 고석정(정자) 관람 2~3시간
④ 동송 시내 복귀(35분) → 점심 1시간
⑤ 귀경 버스 [16시 전 출발]

하단 3칸
· 현지 이동 : 왕복 약 1시간 10분
· 1인 비용(65세) : 6,100원
　(왕복 지역버스 3,100원 + 입장료 실부담 2,500원, 동송까지 오가는 장거리 버스비 별도)
· ★마감·주의 : 매주 화요일 휴무 · 귀경 16시 전 출발
```

**영문 프롬프트**
```
Build a clean editorial route-timeline infographic on a soft warm-white / pale cream paper background. This card is the one permitted exception to the no-panel rule.

Five numbered waypoints in a vertical line, connected by a thin dusty-rose line:
① "동송터미널 도착 (서울·의정부 버스)" — number only, no photo
② "버스 22분 + 도보 10분 → 고석정 꽃밭" — number only, no photo
③ "꽃밭 + 고석정(정자) 관람 2~3시간" — with the first uploaded photograph cropped into a small circle, unaltered
④ "동송 시내 복귀(35분) → 점심 1시간" — with the second uploaded photograph cropped into a small circle, unaltered
⑤ "귀경 버스 [16시 전 출발]" — number only; render "16시 전 출발" in the dusty-rose accent color

Do NOT invent or generate any photograph for ① or ②. A plain number is correct there.
Do NOT repaint, restyle or regenerate the two uploaded photos — crop to a circle only.

Below the waypoints, a footer of three cells separated by thin hairlines only, no boxes and no fill:
"현지 이동 · 왕복 약 1시간 10분"
"1인 비용(65세) · 6,100원"
"★마감·주의 · 매주 화요일 휴무 · 16시 전 출발"
Render the third cell in the dusty-rose accent color and slightly bolder than the others.

Add one small line: "실시간 : 네이버지도"

Typography: clean modern Korean gothic, high-contrast dark charcoal on the cream ground, readable without zooming, generous margins, strict editorial grid. No icon badges, no emoji stickers, no dotted separators, no clip-art, no gradients.

Accent color: dusty rose / muted mauve-pink only. Not orange, not amber, not gold.

Render every Korean character and number exactly as written. Do not invent, alter, drop or add any digit.

Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

# 이미지3. 고석정 꽃밭 전경 · 4:5

감성 컷 · 정보 최소

**삽입 위치** : 운영시간·시즌 소제목 문단 뒤, 버튼링크 다음

**배경 사진** — 고석정 꽃밭 · **Type1** · 출처표시 필요 (이미지1과 다른 컷을 고를 것)
```
https://tong.visitkorea.or.kr/cms/resource_photo/06/4062106_image2_1.JPG
https://tong.visitkorea.or.kr/cms/resource_photo/41/4062441_image2_1.jpg   (후보2)
```

**카드 텍스트**
```
가을 햇살 속 억새와 핑크뮬리
9월 말~10월 초 절정
```

**영문 프롬프트**
```
Edit the uploaded photograph. Keep the image EXACTLY as-is — do NOT repaint, redesign, regenerate, restyle or replace any part of the background. ONLY overlay Korean text and a watermark.

This card carries almost no information. Place only two lines on whichever area of the photo is naturally brightest and least busy; if no such area exists, place them across the lower third:
larger line "가을 햇살 속 억새와 핑크뮬리"
smaller line below it "9월 말~10월 초 절정"
Nothing else. No numbers, no lists, no icons.

Soft drop shadow. Text color chosen for maximum contrast against whatever is behind it. Never a low-contrast pastel. Clean refined Korean gothic, strong weight contrast. No text outline, gradient or glow.

NO panel, NO glass, NO translucent layer, NO box, NO rounded card, NO divider strip, NO tinted overlay, NO white or foggy wash over the photo. Never split the frame.

Accent color, used only as a thin underline beneath the smaller line: dusty rose / muted mauve-pink. Not orange, not amber, not gold.

Render the Korean text exactly as written. Do not invent, alter, drop or add any character.

Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

# 이미지4. 동송터미널 1번 버스 길찾기 안내판 카드 · 4:5

**삽입 위치** : 버스 소요시간 소제목 문단, 버튼링크 앞

**배경 사진** — ❌ **소스 미확보**
TourAPI에 터미널·시내버스 사진은 없다(관광지가 아니라 등재 대상이 아님).
찾는 방법 :
1. 다음에 직접 가실 때 **동송터미널 승강장과 1번 버스 정류장 표지판**을 직접 찍는 것이 가장 확실하다
2. 위키백과 `동송시외버스공용터미널` (CC BY-SA — 저작자 표시 후 사용 가능)
3. 그때까지는 **사진 없이 크림 배경 + 글자만**으로 만들어도 이 카드는 제 역할을 한다(길 안내판이 목적이므로)

**카드 텍스트**
```
동송터미널 → 고석정 꽃밭
총 35분
● 도보 1분 : 이평리(정한약국 앞) 정류장
● 버스 22분 : 2번 · 5번 (2-1번은 27분)
● 하차 : 고석정(정문)
● 도보 10분 : 정문 → 꽃밭
● 요금 : 1,550원(교통카드)
★버스 22분 + 걷는 10분 = 총 35분
플랜B : 택시 12분 · 약 13,200원
```

**영문 프롬프트 (사진 없이 만들 때)**
```
Build a clean wayfinding notice card on a soft warm-white / pale cream paper background. No photograph.

The bus number dominates. Largest text: "동송터미널 → 고석정 꽃밭". Directly below, slightly smaller: "총 35분".

Below that, a vertical list with generous line spacing:
"● 도보 1분 : 이평리(정한약국 앞) 정류장"
"● 버스 22분 : 2번 · 5번 (2-1번은 27분)"
"● 하차 : 고석정(정문) → 도보 10분"
"● 요금 : 1,550원(교통카드)"
"★버스 22분 + 걷는 10분 = 총 35분"

One warning line in the dusty-rose accent color: "플랜B : 택시 12분 · 약 13,200원"
One backup line at the bottom: ""

Only one or two numbers per line so every digit stays accurate.

Typography: clean high-contrast Korean gothic, dark charcoal on the cream ground, large enough to read without zooming, generous margins. No icon badges, no emoji stickers, no dotted separators, no clip-art, no gradients, no card-news template look.

Accent color: dusty rose / muted mauve-pink only, on the bus number "1번", the warning line, and thin dividers. Not orange, not amber, not gold.

Render every Korean character and number exactly as written. Do not invent, alter, drop or add any digit.

Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```
※ 나중에 실사진을 구하면, 위 프롬프트 첫 문단을 이미지1의 편집 지시("Edit the uploaded photograph…")로 바꾸면 그대로 쓸 수 있다.

---

# 이미지5. 서울·의정부 출발 교통 카드 · 3:4

**삽입 위치** : 서울·의정부 교통 소제목 문단, 예매 버튼링크 앞

**배경 사진** — ❌ **소스 미확보** (터미널 사진 없음, 이미지4와 같은 이유)
→ 정보량이 많은 카드라 **사진 없이 크림 배경**이 오히려 읽기 좋다.

**카드 텍스트**
```
★서울(동서울터미널) 출발
✅ 하루 16회 · 첫차 06:00 · 막차 19:30
✅ 소요 약 1시간 56분(의정부 경유) · 11,300원
★의정부 출발(3001번)
✅ 의정부발 : 12:30 · 16:00 · 18:50
✅ 동송발(귀경) : 09:30 · 13:30 · 16:00
✅ 3001-1번 : 동송발 07:20 · 동서울발 10:30
★의정부 첫차(12:30) 타면 꽃밭 체류 1시간 남짓 — 오전편 예매 사이트 확인 필요
```

**영문 프롬프트**
```
Build a clean information card on a soft warm-white / pale cream paper background, tall 3:4 format. No photograph.

Two section headers in the dusty-rose accent color, bold and clearly larger than the body lines:
"★서울(동서울터미널) 출발"
"★의정부 출발(3001번)"

Under the first header:
"✅ 하루 16회 · 첫차 06:00 · 막차 19:30"
"✅ 소요 약 1시간 56분(의정부 경유) · 11,300원"

Under the second header:
"✅ 의정부발 : 12:30 · 16:00 · 18:50"
"✅ 동송발(귀경) : 09:30 · 13:30 · 16:00"
"✅ 3001-1번 : 동송발 07:20 · 동서울발 10:30"

At the bottom, one warning line in dark charcoal with the key phrase in the accent color:
"★의정부 첫차(12:30) 타면 꽃밭 체류 1시간 남짓 — 오전편 예매 사이트 확인 필요"

Every time and price must be rendered exactly as given. Do not invent, alter, drop or add any digit. Keep one or two numbers per line.

Typography: clean high-contrast Korean gothic, dark charcoal on the cream ground, readable without zooming, generous margins, strict editorial grid, thin hairline dividers only. No boxes, no fills, no icon badges, no emoji stickers, no dotted separators, no clip-art, no gradients.

Accent color: dusty rose / muted mauve-pink only. Not orange, not amber, not gold.

Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

# 이미지6. 요금&상품권 환급 카드 · 4:5

**삽입 위치** : 입장료 소제목 문단, 깡통열차 설명 뒤

**배경 사진** — 고석정 꽃밭 · **Type1** · 출처표시 필요
```
https://tong.visitkorea.or.kr/cms/resource_photo/42/4062442_image2_1.jpg
```

**카드 텍스트**
```
입장료 일부를 상품권으로 돌려받아요
● 대인 10,000원 · 소인 4,000원
● 65세 이상 5,000원 (감면)
● 65세 실부담 3,000원 (상품권 2,000원)
★운영 09:00~19:00 · 매표 마감 18:00 · 화요일 휴무
깡통열차 5,000원 · 입장료와 별도 · 65세 할인 없음 · 17:00 종료
```

**영문 프롬프트**
```
Edit the uploaded photograph. Keep the image EXACTLY as-is — do NOT repaint, redesign, regenerate, restyle or replace any part of the background. ONLY overlay Korean text and a watermark. Do not draw any gift certificate, coupon or banknote — express the refund through typography alone.

Place the text on whichever area of the photo is naturally brightest and least busy; if no such area exists, place it across the lower half. Soft drop shadow. Text color chosen for maximum contrast against whatever is behind it.

Headline: "입장료 일부를 상품권으로 돌려받아요" — render "50%" noticeably larger than the rest, in the dusty-rose accent color.

Then, as label-value lines:
"● 대인 10,000원 · 소인 4,000원"
"● 65세 이상 5,000원 (감면)"
"● 65세 실부담 3,000원 (상품권 2,000원)" — render "2,500원" in the accent color

One operating-hours line in the accent color, at least as large as the price lines:
"★운영 09:00~19:00 · 매표 마감 18:00 · 화요일 휴무"

At the very bottom, separated by a thin hairline only (not a box), a smaller line for a separately priced attraction:
"깡통열차 5,000원 · 입장료와 별도 · 65세 할인 없음 · 17:00 종료"

Keep one or two numbers per line. Render every number exactly as written. Do not invent, alter, drop or add any digit.

Typography: clean high-contrast Korean gothic, strong weight contrast. No text outline, gradient or glow.

NO panel, NO glass, NO translucent layer, NO box, NO rounded card, NO bottom strip, NO tinted overlay, NO white or foggy wash over the photo. Never split the frame.

Accent color: dusty rose / muted mauve-pink only. Not orange, not amber, not gold.

Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

# 이미지7. 볼거리&쉼터 카드 · 4:5

**삽입 위치** : 볼거리·쉼터 소제목 문단, 주소 안내 앞

**배경 사진** — 고석정국민관광지 · **Type1** · 출처표시 필요
```
https://tong.visitkorea.or.kr/cms/resource/77/4090777_image2_1.jpg   (강원_철원_고석정국민관광지_전경)
https://tong.visitkorea.or.kr/cms/resource/07/3331507_image2_1.jpg   (후보2)
https://tong.visitkorea.or.kr/cms/resource/16/3331516_image2_1.JPG   (후보3)
```
※ `고석정(한탄강 유네스코 세계지질공원)`(contentid 2615225) 사진은 **Type3(변경금지)**라 글자를 얹으면 안 된다.

**카드 텍스트**
```
고석정 꽃밭 ↔ 고석정(정자) 도보 5분 · 평지
✅ 촛불맨드라미·가우라 (8월 말~)
✅ 천일홍·버베나·백일홍 (9월)
✅ 코키아·핑크뮬리·억새 (9월 말~10월 초 절정)
★꽃밭은 그늘이 적어요 — 모자·양산·물
✅ 장애인화장실 · 경사로 · 휠체어·유모차 대여 가능
```

**영문 프롬프트**
```
Edit the uploaded photograph. Keep the image EXACTLY as-is — do NOT repaint, redesign, regenerate, restyle or replace any part of the background. ONLY overlay Korean text and a watermark.

Place the text on whichever area of the photo is naturally brightest and least busy; if no such area exists, place it across the lower half. Soft drop shadow. Text color chosen for maximum contrast against whatever is behind it.

Top line: "고석정 꽃밭 ↔ 고석정(정자) 도보 5분 · 평지"

Then, as label-value lines:
"✅ 촛불맨드라미·가우라 (8월 말~)"
"✅ 천일홍·버베나·백일홍 (9월)"
"✅ 코키아·핑크뮬리·억새 (9월 말~10월 초 절정)" — render "9월 말~10월 초 절정" in the dusty-rose accent color

One warning line with the key phrase in the accent color:
"★꽃밭은 그늘이 적어요 — 모자·양산·물"

Bottom line:
"✅ 장애인화장실 · 경사로 · 휠체어·유모차 대여 가능"

Render every Korean character exactly as written. Do not invent, alter, drop or add any text.

Typography: clean high-contrast Korean gothic, strong weight contrast. No text outline, gradient or glow. At most one small faint wheelchair pictogram on the accessibility line; no other icons, no saturated colored circles, no clip-art, no emoji badges, no dotted separators.

NO panel, NO glass, NO translucent layer, NO box, NO rounded card, NO bottom strip, NO tinted overlay, NO white or foggy wash over the photo. Never split the frame.

Accent color: dusty rose / muted mauve-pink only — keep it identical to the other cards in this set regardless of what colors appear in this particular photo. Not orange, not amber, not gold.

Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

# 이미지8. 동송 맛집 3곳 카드 · 4:5

**삽입 위치** : 맛집·귀경 소제목 문단, 화요일 휴무 경고 앞

**배경 사진** — ❌ **오버레이 불가**
한탄강빵명장·고석정가든 사진은 TourAPI에 있지만 **전부 `Type3`(변경금지)** 라 글자를 얹을 수 없다.
```
(참고 · 글자 없이 원본 그대로만 쓸 수 있는 사진)
한탄강빵명장 마늘빵과 음료  http://tong.visitkorea.or.kr/cms/resource/72/2855572_image2_1.JPG
한탄강빵명장 실내          http://tong.visitkorea.or.kr/cms/resource/73/2855573_image2_1.JPG
```
→ **이 카드는 사진 없이 크림 배경 + 글자로 만든다.**
→ 위 Type3 사진은 본문 안에 **글자 없이** 따로 넣고 출처만 밝히면 된다.

**카드 텍스트**
```
1. 소문난순대국왕족발 · 순대국 10,000원 · 09:00~21:00
2. 한탄강빵명장 · 육쪽마늘빵 6,000원 · 화요일 휴무
3. 고석정가든 · 메기매운탕 2인 40,000원 · 화요일 휴무
★3곳 중 2곳 화요일 휴무
```

**영문 프롬프트**
```
Build a clean information card on a soft warm-white / pale cream paper background. No photograph.

Three numbered lines in a vertical list with generous spacing:
"1. 소문난순대국왕족발 · 순대국 10,000원 · 09:00~21:00"
"2. 한탄강빵명장 · 육쪽마늘빵 6,000원 · 화요일 휴무"
"3. 고석정가든 · 메기매운탕 2인 40,000원 · 화요일 휴무"

One warning line at the bottom with the key phrase in the dusty-rose accent color:
"★3곳 중 2곳 화요일 휴무"

Keep one or two numbers per line. Render every Korean character and number exactly as written. Do not invent, alter, drop or add any digit.

Typography: clean high-contrast Korean gothic, dark charcoal on the cream ground, readable without zooming, generous margins, thin hairline dividers only. No boxes, no fills, no icon badges, no emoji stickers, no dotted separators, no clip-art, no gradients, no card-news template look.

Do not generate, draw or illustrate any food, dish, storefront or interior. Text only.

Accent color: dusty rose / muted mauve-pink only. Not orange, not amber, not gold.

Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---

# 이미지9. CTA 카드 · 16:9

**삽입 위치** : 한 줄 정리 문단 뒤, 메인 CTA 문구 앞

**배경 사진** — 승일교 또는 한탄강 주상절리길 · **Type1** · 출처표시 필요
```
승일교          http://tong.visitkorea.or.kr/cms/resource/49/3558049_image2_1.jpg
철원 한탄강 주상절리길  https://tong.visitkorea.or.kr/cms/resource/11/3417811_image2_1.jpg   (후보2)
직탕폭포        http://tong.visitkorea.or.kr/cms/resource/38/3575438_image2_1.jpg   (후보3)
```
※ 은하수교·송대소·순담계곡 사진은 **Type3(변경금지)** 라 이 카드에 쓸 수 없다.

**카드 텍스트**
```
공감 💗 + 이웃추가
뚜벅이 당일치기 코스 꾸준히 올려요
```

**영문 프롬프트**
```
Edit the uploaded photograph, cropped to a wide 16:9 frame. Keep the image EXACTLY as-is — do NOT repaint, redesign, regenerate, restyle or replace any part of the background, including the sky. ONLY overlay Korean text and a watermark.

Place the text on whichever area of the photo is naturally brightest and least busy; if no such area exists, place it across the lower third:
larger line "공감 💗 + 이웃추가"
smaller line below it "뚜벅이 당일치기 코스 꾸준히 올려요"

Soft drop shadow. Text color chosen for maximum contrast against whatever is behind it. Clean refined Korean gothic, strong weight contrast. No brush or calligraphy font. No text outline, gradient or glow.

The heart mark is a simple small heart in the dusty-rose accent color. No other icons, no sticker badges.

NO panel, NO glass, NO translucent layer, NO box, NO rounded card, NO bottom strip, NO tinted overlay, NO white or foggy wash over the photo. Never split the frame.

Render the Korean text and the heart exactly as written. Do not invent, alter, drop or add any character.

Small neutral watermark "blog.naver.com/witchbloom82" bottom right.
```

---
---

## 점검

| 항목 | |
|---|---|
| 카드만 보고 다음 행동 되나 | YES (4·5에 번호·요금·시각·플랜B, 8에 화요일 경고) |
| 본문 숫자와 카드 100% 일치 | YES (새 숫자 없음) |
| 세트색 1개, 앰버·주황 미사용 | YES (더스티 로즈) |
| 패널 없음 | YES (이미지2만 규정상 예외 / 4·5·8은 사진 없는 크림 배경 정보 카드) |
| 사진 안 글자·간판 0, 워터마크 우하단 | YES |
| 영역1 삽입 포인트와 1:1 | YES (이미지1~9) |
| 막차 포함 | YES (이미지5 · 동송발 16:00) |
| 매표 마감 | YES (이미지6 · 매표 20:00 마감) ※평일 매표 마감은 본문에서도 미확인이라 지어 넣지 않음 |
| **사진 소스** | **9장 중 6장(1·2·3·6·7·9)에 공공누리 1유형 실제 URL 확보** |
| | 4·5(터미널)·8(맛집 Type3) 3장은 사진 없이 정보 카드로 처리 |
| 검증 상태 | **API 응답으로 확인 · 사진은 열어보지 않음** — 발행 전 운영자가 URL을 열어 내용 확인 필요 |
