# 무주 덕유산 — 레퍼런스 사진 대장

- 수집일 : 2026-09-18
- 출처 : 한국관광공사 TourAPI(KorService2) `searchKeyword2` + `detailImage2`
- 라이선스 : 공공누리. `cpyrhtDivCd`가 **Type1 = 제1유형(출처표시, 변형 가능)**, **Type3 = 제1유형+변경금지**

## ★먼저 읽을 것 — 이 대장의 두 가지 한계

1. **원본 파일을 내려받지 못했다.** 이 세션의 아웃바운드 프록시가
   `tong.visitkorea.or.kr` 을 **CONNECT 403** 으로 차단한다(2026-09-18 실측, curl 56).
   그래서 아래 사진은 **전부 육안 미확인**이다 — API가 준 `imgname`과 contentid만 믿고 적었다.
   ★운영자가 URL을 열어 실제 장면을 확인한 뒤 카드에 쓴다.
2. **파일명(imgname)을 믿지 마라.** 용인 자작나무숲 4060005 사례처럼
   imgname과 실제 장면이 어긋나는 경우가 잦다. 특히 아래 `덕유산 국립공원`이라는
   포괄적 이름이 붙은 8장은 계절·위치가 제각각일 가능성이 높다.

## ★이 글에서 반드시 가려야 할 것 — '덕유산'과 '적상산'

TourAPI에서 `덕유산`으로 검색하면 **`덕유산국립공원 적상전망대`(contentid 2737304)**가 걸린다.
주소는 무주군 **적상면 북창리**로, **적상산**이지 이 글이 다루는 **설천봉·향적봉 능선이 아니다.**
Type1이라 오버레이는 가능하지만 **이 글의 배경으로는 쓰지 않는다** — 독자가 곤돌라로
올라가는 곳과 다른 산이다. 아래 목록에서 일부러 뺐다.

---

## A. Type1 (변형 가능 — 글자 오버레이 OK)

### 설천봉 · contentid 2704644 (무주군 설천면 심곡리) — 곤돌라 상부역이 있는 봉우리
| 파일 | imgname | 원본 URL |
|---|---|---|
| 3478805 | (대표 firstimage) | https://tong.visitkorea.or.kr/cms/resource/05/3478805_image2_1.jpg |
| 3478806 | 겨울왕국 | https://tong.visitkorea.or.kr/cms/resource/06/3478806_image2_1.jpg |
| 3478807 | 덕유산 국립공원 | https://tong.visitkorea.or.kr/cms/resource/07/3478807_image2_1.jpg |
| 3478808 | 덕유산 국립공원 | https://tong.visitkorea.or.kr/cms/resource/08/3478808_image2_1.jpg |
| 3478809 | 덕유산 국립공원 | https://tong.visitkorea.or.kr/cms/resource/09/3478809_image2_1.jpg |
| 3478810 | 덕유산 국립공원 | https://tong.visitkorea.or.kr/cms/resource/10/3478810_image2_1.jpg |

★`겨울왕국`(3478806)은 **겨울 상고대**일 가능성이 높다. 이 글은 10~11월 단풍철 발행이므로
　계절이 어긋난다 — 열어보고 겨울 장면이면 쓰지 않는다.

### 향적봉(덕유산) · contentid 1705213 (무주군 설천면 청량리) — 정상(1,614m)
| 파일 | imgname | 원본 URL |
|---|---|---|
| 3516730 | (대표 firstimage) | https://tong.visitkorea.or.kr/cms/resource/30/3516730_image2_1.jpg |
| 3516726 | 덕유산 국립공원 | https://tong.visitkorea.or.kr/cms/resource/26/3516726_image2_1.jpg |
| 3516727 | 덕유산 국립공원 | https://tong.visitkorea.or.kr/cms/resource/27/3516727_image2_1.jpg |
| 3516728 | 덕유산 국립공원 | https://tong.visitkorea.or.kr/cms/resource/28/3516728_image2_1.jpg |
| 4056662 | 무주_향적봉(덕유산) (3).jpg | https://tong.visitkorea.or.kr/cms/resource/62/4056662_image2_1.jpg |
| 4056663 | 무주_향적봉(덕유산) (미확인) | https://tong.visitkorea.or.kr/cms/resource/63/4056663_image2_1.jpg |
| 4056664 | 무주_향적봉(덕유산) (1).jpg | https://tong.visitkorea.or.kr/cms/resource/64/4056664_image2_1.jpg |
| 4056666 | 무주_향적봉(덕유산) (4).jpg | https://tong.visitkorea.or.kr/cms/resource/66/4056666_image2_1.jpg |
| 4056667 | 무주_향적봉(덕유산) (7).jpg | https://tong.visitkorea.or.kr/cms/resource/67/4056667_image2_1.jpg |
| 4056668 | 무주_향적봉(덕유산) (6).jpg | https://tong.visitkorea.or.kr/cms/resource/68/4056668_image2_1.jpg |
| 4056669 | 무주_향적봉(덕유산) (5).jpg | https://tong.visitkorea.or.kr/cms/resource/69/4056669_image2_1.jpg |

★4056663은 응답이 2,600자에서 잘려 imgname을 못 봤다. contentid·Type1까지만 확인했다.

### 구천동계곡 · contentid 127742 (무주군 설천면 구천동1로 159)
| 파일 | imgname | 원본 URL |
|---|---|---|
| 3536275 | (대표 firstimage) | http://tong.visitkorea.or.kr/cms/resource/75/3536275_image2_1.jpg |
| 3536276 | 무주_구천동계곡 (1) | http://tong.visitkorea.or.kr/cms/resource/76/3536276_image2_1.jpg |
| 3536277 | 무주_구천동계곡 (2) | http://tong.visitkorea.or.kr/cms/resource/77/3536277_image2_1.jpg |
| 3536278 | 무주_구천동계곡 (3) | http://tong.visitkorea.or.kr/cms/resource/78/3536278_image2_1.jpg |
| 3536279 | 무주_구천동계곡 (6) | http://tong.visitkorea.or.kr/cms/resource/79/3536279_image2_1.jpg |
| 3536280 | 무주_구천동계곡 (7) | http://tong.visitkorea.or.kr/cms/resource/80/3536280_image2_1.jpg |
| 3536281 | 무주_구천동계곡 (5) | http://tong.visitkorea.or.kr/cms/resource/81/3536281_image2_1.jpg |

---

## B. Type3 (변경금지 — 글자를 얹으면 위반. 원본 그대로만)

| 대상 | contentid | 비고 |
|---|---|---|
| 구천동 어사길 | 2673996 | ★본문 8번 카드의 주제인데 **Type3다.** 오버레이 금지 → 구천동계곡 Type1로 대체했다 |
| 무주 구천동 33경 | 127031 | |
| 무주 구천동 관광특구 | 1624914 | |
| 국립 덕유산자연휴양림 | 125416 | 이 글과 무관(숙박시설) |
| 덕유산국립공원 적상전망대 (3040088·89·90·91) | 2737304 | 적상산 — 이 글 대상 아님 |

---

## C. 끝내 못 구한 장면 (4장) — area2에서 '배경 미확보'로 표시

| 필요한 장면 | 왜 못 구했나 |
|---|---|
| 곤돌라 탑승장 전경 | TourAPI에 `무주덕유산리조트`·`곤돌라` 단독 콘텐츠가 없다. 설천봉 사진 중 곤돌라 상부역이 찍힌 컷이 있을 수 있으나 **육안 미확인이라 단정할 수 없다** |
| 무주공용버스터미널 외경 | 관광 콘텐츠가 아니라 TourAPI 대상이 아니다 |
| 리조트 셔틀 승차 위치 / 리조트 전경 | 같은 이유 |
| 무주읍내 밥집 · 쏘가리어죽 | 개별 음식점은 TourAPI 사진 대상이 아니다 |

★이 4장은 **가짜 생성 배경으로 때우지 않는다.** 운영자가 네이버지도 플레이스 사진이나
　직접 촬영본으로 채우거나, 그 카드를 빼고 발행한다.

## 출처 표기 (공공누리 의무)

> 사진 출처 : 한국관광공사 (공공누리 제1유형)
