# 레퍼런스 사진 대장 — 연천 (2026-09-08 TourAPI 수집)

## ⚠검증 상태 — **API 응답으로 확인 · 사진은 육안 미확인**
이 세션에서 사진을 **열어서 눈으로 보지 못했다.** 정직하게 남긴다.
- `tong.visitkorea.or.kr` 직접 내려받기는 프록시가 **403**으로 막는다(허용 목록에 없음).
- Make로 받아 base64로 옮기는 우회는 **전사 과정에서 깨졌다**(padding 오류). 신뢰할 수 없는 방법이다.
→ 아래 URL·제목·라이선스·contentid는 **API가 돌려준 값이라 정확**하다.
→ 다만 **사진 내용·간판·워터마크는 운영자가 링크를 열어 직접 확인**해야 한다.
　(파일명과 실제 내용이 다른 경우가 잦다 — 철원 때도 그랬다)


수집 방법 = `.claude/photo-tool.md` (Make 시나리오 6190253)
★`cpyrhtDivCd`가 **Type1이면 글자를 얹어도 되고, Type3이면 변경금지**라 원본 그대로만 쓴다.
공공누리는 **출처 표기가 의무**다.

## ✅ Type1 — 오버레이 가능 (카드 배경으로 쓸 수 있음)

### 재인폭포 · contentid 125496 · Type1 · 4장
```
http://tong.visitkorea.or.kr/cms/resource/01/3532801_image2_1.jpg   재인폭포 (1)
http://tong.visitkorea.or.kr/cms/resource/02/3532802_image2_1.jpg   재인폭포 (2)
http://tong.visitkorea.or.kr/cms/resource/03/3532803_image2_1.jpg   재인폭포 (3)
http://tong.visitkorea.or.kr/cms/resource/04/3532804_image2_1.jpg   재인폭포 (4)
```
★이 글의 주인공 사진. **Type1이라 썸네일·정보카드 배경으로 쓸 수 있다.**
⚠검색어 `재인폭포`로 그냥 치면 **연천재인폭포오토캠핑장**(contentid 2744419, Type3)이 먼저 잡힌다.
　폭포 본체는 **contentid 125496**을 직접 지정해야 나온다.

### 연천 호로고루 · contentid 128647 · Type1 · 2장
```
https://tong.visitkorea.or.kr/cms/resource/58/3332558_image2_1.jpg   연천 호로고루
https://tong.visitkorea.or.kr/cms/resource/59/3332559_image2_1.jpg   연천 호로고루
```

## ❌ Type3 — 변경금지 (글자 얹지 말 것, 원본 그대로만)

- **전곡선사박물관** · contentid 1284966 · Type3 · 10장 이상
  대표 `http://tong.visitkorea.or.kr/cms/resource/59/3038959_image2_1.jpg`
- **연천 숭의전지** · contentid 125540 · Type3 · 7장
  대표 `http://tong.visitkorea.or.kr/cms/resource/89/3381589_image2_1.JPG`
- **연천역 급수탑** · contentid 250366 · Type3 · 4장
  대표 `http://tong.visitkorea.or.kr/cms/resource/03/3537503_image2_1.jpg`
  (연천역 자체가 아니라 **급수탑**이다 — 등록문화유산. 역사 사진으로 오해하지 말 것)

## 미확보 (정직히 남김)
- **임진강 댑싸리정원** — TourAPI에 등록이 없다. 2025년 개장한 신규 시설이라서.
  → 카드 배경으로 쓰려면 다른 경로가 필요하다. **가짜 생성 배경으로 채우지 않는다.**
- **연천 한탄강** — 검색 0건(포천·철원 쪽으로만 등록돼 있음)
- **전곡역·연천역 역사(驛舍)** — 관광지가 아니라 등록이 없다. 예상된 결과.

## ★다음에 이 작업을 할 때
- 검색어에 지명을 붙여도 **동명·유사명 시설이 먼저 잡힐 수 있다.** 반드시 `title`과 `addr1`을 확인하고,
  틀렸으면 **contentid를 직접 지정**해 다시 부른다.
- 한글 검색어를 blueprint JSON에 넣을 때 **직접 타이핑하지 말고 스크립트로 이스케이프를 생성**한다.
  이번에 `전곡`→`전곱`, `댑싸리`→`댁싸리`로 깨져 2회 헛돌았다.
