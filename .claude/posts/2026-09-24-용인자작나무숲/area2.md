# 용인자작나무숲 이미지 최종 대응 — 2026-10-06

현행 IMAGE-V3-20260929-2029-KST. 5장 모두 built-in GPT imagegen EDIT. 원본과 강릉 대표/CTA 디자인샘플을 직접 확인하고 입력. 과거9장 계획은 폐기.

|파일|위치|비율|실제 입력|문구|
|---|---|---|---|---|
|20261006-hero-real-edit.png|도입 뒤 대표|1:1|entrance|용인 / 자작나무숲 / 입장료·휴무 먼저 체크|
|20261006-hours-real-edit.png|운영시간 뒤|4:5|fountain|오후7시 입장마감 / 운영10:00–20:00 / 화요일휴무 / 공휴일화요일 정상영업|
|20261006-fee-real-edit.png|요금 뒤|4:5|entrance 별도크롭|성인입장료 / 평일5,000원 / 주말·공휴일6,000원 / 2026.6.2기준|
|20261006-rest-real-edit.png|휴식/카페 뒤|4:5|cafe|걷다가 쉬어가요 / 베툴라카페 / 전망대는 계단이용|
|20261006-cta-real-edit.png|본문 마지막|16:9|garden 오른쪽 사진|공감 💗 + 이웃추가 / 뚜벅이 당일치기 코스 꾸준히 올려요|

포인트 #547366 지시, 실제 HEX 픽셀 동일성은 미확인. 모던 고딕, 좌정렬, 큰 제목/중간정보/작은출처와 워터마크. 패널·그림자·글자뒤 미백 없음. 하늘과 구도 확장으로 사진을 재구성했으므로 실제 현장 기록사진으로 단정하지 않음. 각 캡션에 봄 자료사진 기반 AI편집·연출과 원출처 표시. 기존 본문/카드/105번 수치 유지.

원본 출처 https://gnews.gg.go.kr/news/news_view.do?N=&b_code=&c_code=C076&lastidx=10&number=202606020656575729C076&s_code=C501&scrollidx=&type_m=sub

## 실제 실행 프롬프트

### hero
Use case: compositing. EDIT real source photo (image1) into polished Korean travel blog image. Image2 is typography/layout REFERENCE ONLY, do not use its sea/person/scenery. Output 1:1 square. Preserve entrance hillside and actual Korean sign. Remove small person at lower right. Extend natural blue sky upward for headline, no extra buildings. Keep real location features and spring greenery recognizable. No changing season. Full-bleed photo, restrained clean travel-magazine aesthetic, not flyer. Large modern Korean gothic headline, aligned left, generous safe margins, typography hierarchy matching reference. Exact headline "용인
자작나무숲". Exact supporting text "입장료·휴무 먼저 체크". Supporting info >=70% primary INFO font, but smaller than headline. Set accent #547366 sparingly, main charcoal on sky or cream on foliage. All text directly on photo. NO panels, boxes, strips, local white fog/blur, shadows, outlines, gradients, collage or fake official logos. Tiny bottom-left "사진 © 유하선 · 경기도뉴스포털", tiny bottom-right "blog.naver.com/witchbloom82".  Preserve photo photographer rights. Do not add any other copy.

### hours
Use case: compositing. EDIT real source photo (image1) into polished Korean travel blog image. Image2 is typography/layout REFERENCE ONLY, do not use its sea/person/scenery. Output 4:5 portrait. Preserve fountain and pond/plants scene. Crop as needed, extend natural sky only. Keep real location features and spring greenery recognizable. No changing season. Full-bleed photo, restrained clean travel-magazine aesthetic, not flyer. Large modern Korean gothic headline, aligned left, generous safe margins, typography hierarchy matching reference. Exact headline "오후 7시
입장 마감". Exact supporting text "운영 10:00–20:00
화요일 휴무
공휴일 화요일은 정상영업". Supporting info >=70% primary INFO font, but smaller than headline. Set accent #547366 sparingly, main charcoal on sky or cream on foliage. All text directly on photo. NO panels, boxes, strips, local white fog/blur, shadows, outlines, gradients, collage or fake official logos. Tiny bottom-left "사진 © 유하선 · 경기도뉴스포털", tiny bottom-right "blog.naver.com/witchbloom82".  Preserve photo photographer rights. Do not add any other copy.

### fee
Use case: compositing. EDIT real source photo (image1) into polished Korean travel blog image. Image2 is typography/layout REFERENCE ONLY, do not use its sea/person/scenery. Output 4:5 portrait. Preserve real entrance sign and garden. Use different crop from square hero, no person. Keep real location features and spring greenery recognizable. No changing season. Full-bleed photo, restrained clean travel-magazine aesthetic, not flyer. Large modern Korean gothic headline, aligned left, generous safe margins, typography hierarchy matching reference. Exact headline "성인 입장료". Exact supporting text "평일 5,000원
주말·공휴일 6,000원". Supporting info >=70% primary INFO font, but smaller than headline. Set accent #547366 sparingly, main charcoal on sky or cream on foliage. All text directly on photo. NO panels, boxes, strips, local white fog/blur, shadows, outlines, gradients, collage or fake official logos. Tiny bottom-left "사진 © 유하선 · 경기도뉴스포털", tiny bottom-right "blog.naver.com/witchbloom82". Small credit line "2026.6.2 경기도 안내 기준". Preserve photo photographer rights. Do not add any other copy.

### rest
Use case: compositing. EDIT real source photo (image1) into polished Korean travel blog image. Image2 is typography/layout REFERENCE ONLY, do not use its sea/person/scenery. Output 4:5 portrait. Preserve exact real red gable brick cafe and garden/fountain. Extend natural sky above for text. No new facilities. Keep real location features and spring greenery recognizable. No changing season. Full-bleed photo, restrained clean travel-magazine aesthetic, not flyer. Large modern Korean gothic headline, aligned left, generous safe margins, typography hierarchy matching reference. Exact headline "걷다가
쉬어가요". Exact supporting text "베툴라 카페
전망대는 계단 이용". Supporting info >=70% primary INFO font, but smaller than headline. Set accent #547366 sparingly, main charcoal on sky or cream on foliage. All text directly on photo. NO panels, boxes, strips, local white fog/blur, shadows, outlines, gradients, collage or fake official logos. Tiny bottom-left "사진 © 유하선 · 경기도뉴스포털", tiny bottom-right "blog.naver.com/witchbloom82".  Preserve photo photographer rights. Do not add any other copy.

### cta
Use case: compositing. EDIT real source photo (image1) into polished Korean travel blog image. Image2 is typography/layout REFERENCE ONLY, do not use its sea/person/scenery. Output 16:9 landscape. Use only RIGHT photo of reference diptych, retain real formal garden aerial view. No collage, no tower-left-half. Place type over natural darker garden upper region in warm white, no artificial plate. Keep real location features and spring greenery recognizable. No changing season. Full-bleed photo, restrained clean travel-magazine aesthetic, not flyer. Large modern Korean gothic headline, aligned left, generous safe margins, typography hierarchy matching reference. Exact headline "공감 💗 + 이웃추가". Exact supporting text "뚜벅이 당일치기 코스 꾸준히 올려요". Supporting info >=70% primary INFO font, but smaller than headline. Set accent #547366 sparingly, main charcoal on sky or cream on foliage. All text directly on photo. NO panels, boxes, strips, local white fog/blur, shadows, outlines, gradients, collage or fake official logos. Tiny bottom-left "사진 © 유하선 · 경기도뉴스포털", tiny bottom-right "blog.naver.com/witchbloom82".  Preserve photo photographer rights. Do not add any other copy.
