# 레퍼런스 사진 대장 — 2026-10-08 함양 상림공원

출처 : 한국관광공사 포토코리아 (TourAPI `detailImage2`)
수집일 : 2026-09-22 (KST)
본문 표기 문구 : `사진 출처 : 한국관광공사 포토코리아 (공공누리 제1유형)`

## 장소
**상림공원** · contentid **126861** · contenttypeid 12
주소 `경남 함양군 함양읍 교산리 1073-1` · modifiedtime 2026-06-19
총 **26장** — **Type1 18장 · Type3 8장**

## ★★조회 과정에서 잡은 함정 — `areacode`가 빈 레코드가 있다

처음에 `areaCode=38`(전남)로 조회해 0건이 나왔고, `areaCode=36`(경남)으로 고쳐도 **또 0건**이었다.
지역코드를 틀린 게 원인이 아니었다 — **상림공원 레코드 자체의 `areacode`와 `sigungucode`가 빈 문자열**이다.

```
"areacode":"", "sigungucode":"", "contentid":"126861", "title":"상림공원"
```

`areaCode` 파라미터로 필터하면 **이 장소가 통째로 사라진다.**
순창(강천산 126249)·부안에서는 이 필드가 채워져 있어 운 좋게 넘어갔다.

→ ★**새 규칙 : TourAPI 검색은 `areaCode` 없이 키워드만으로 먼저 돌리고, 지역은 `addr1`로 판별한다.**
　`areaCode`는 동명이인을 걸러낼 때만 쓰고, 0건이 나오면 **지역코드를 의심하기 전에 필터 자체를 빼 본다.**

★부수 소득 : `함양`으로 전국 검색하니 **`보림사(함양)` 316028**의 주소가 `함양읍 상림3길 32`였다.
　기자가 상림 주소를 "상림3길 32 인근"이라 적은 건 실은 이 절 주소였다. 상림공원 본체는 `교산리 1073-1`이다.

## Type1 18장 — 글자 오버레이 가능
★**18장 전부 `imgname`이 "함양 상림공원"으로 똑같다.** 파일명으로는 내용을 전혀 알 수 없다.
　순창에서 배운 대로 **내려받아 눈으로 봐야** 어느 게 숲길인지 꽃인지 누각인지 갈린다.

| # | originimgurl |
|---|---|
| 1 | https://tong.visitkorea.or.kr/cms/resource_photo/18/3522218_image2_1.jpg |
| 2 | https://tong.visitkorea.or.kr/cms/resource_photo/64/3522564_image2_1.jpg |
| 3 | https://tong.visitkorea.or.kr/cms/resource_photo/65/3522265_image2_1.jpg |
| 4 | https://tong.visitkorea.or.kr/cms/resource_photo/52/3522352_image2_1.jpg |
| 5 | https://tong.visitkorea.or.kr/cms/resource_photo/91/3522591_image2_1.jpg |
| 6 | https://tong.visitkorea.or.kr/cms/resource_photo/30/3522430_image2_1.jpg |
| 7 | https://tong.visitkorea.or.kr/cms/resource_photo/10/3522410_image2_1.jpg |
| 8 | https://tong.visitkorea.or.kr/cms/resource_photo/89/3522589_image2_1.jpg |
| 9 | https://tong.visitkorea.or.kr/cms/resource_photo/88/3522588_image2_1.jpg |
| 10 | https://tong.visitkorea.or.kr/cms/resource_photo/68/3522268_image2_1.jpg |
| 11 | https://tong.visitkorea.or.kr/cms/resource_photo/79/3522179_image2_1.jpg |
| 12 | https://tong.visitkorea.or.kr/cms/resource_photo/69/3522569_image2_1.jpg |
| 13 | https://tong.visitkorea.or.kr/cms/resource_photo/48/3522548_image2_1.jpg |
| 14 | https://tong.visitkorea.or.kr/cms/resource_photo/16/3522216_image2_1.jpg |
| 15 | https://tong.visitkorea.or.kr/cms/resource_photo/66/3522266_image2_1.jpg |
| 16 | https://tong.visitkorea.or.kr/cms/resource_photo/15/3522215_image2_1.jpg |
| 17 | https://tong.visitkorea.or.kr/cms/resource_photo/09/3522409_image2_1.jpg |
| 18 | https://tong.visitkorea.or.kr/cms/resource_photo/47/3522547_image2_1.jpg |

## ★Type3 8장 — **변경금지. 글자를 얹으면 라이선스 위반이다**
`상림공원_1` ~ `상림공원_8` (`resource/30585xx` 계열)
```
3058520 · 3058521 · 3058522 · 3058523 · 3058524 · 3058525 · 3058526 · 3058527
```
→ 본문에 **원본 그대로만** 넣을 수 있다. 카드 배경으로 쓰지 않는다.
→ ★이름이 붙어 있는 쪽(`상림공원_N`)이 Type3이고, 이름이 뭉뚱그려진 쪽(`함양 상림공원`)이 Type1이다.
　 **이름이 구체적인 게 더 쓸 만하다는 직관이 여기선 틀린다.**

## ★다운로드 · 육안 확인 결과 — 6장 전부 열어 봤다

Make base64 조각 시나리오(6219674)로 받아 **한 장씩 열어 확인**했다.
파일은 `photos/h01.jpg` ~ `h06.jpg`. 전부 `FFD8`로 시작해 `FFD9`로 끝난다(잘림 없음).

| 파일 | 원본 | 크기 | **실제로 보이는 것(직접 확인)** | 카드 |
|---|---|---|---|---|
| `h01.jpg` | 3522218 | 202,505B | 상림 안 **연못 + 석축 + 흙길** · 짙은 초록 반영 · 물 여백 큼 | 이미지 5 |
| `h02.jpg` | 3522564 | 154,319B | **평지 흙길 터널** · 양쪽 난간 · 밝은 길이 아래 절반 | 이미지 6 |
| `h03.jpg` | 3522265 | 162,911B | 꽃밭 + **그네 의자·벤치** · ★**붉은 양귀비** | 이미지 8 (크롭 필수) |
| `h04.jpg` | 3522591 | 156,594B | 넓은 흙길 + **걷는 사람 1명(붉은 옷)** · 활엽수 터널 | 이미지 9 |
| `h05.jpg` | 3522410 | 127,708B | **벤치 단독** + 잔디 + 붉은 꽃밭 배경 | 이미지 7 (크롭 필수) |
| `h06.jpg` | 3522179 | 238,142B | ★**개울 + 포장 산책로 + 유모차 끄는 사람 + 걷는 사람 여럿** | **이미지 1 썸네일** |

★★**h06이 이 글의 증거 사진이다.** 본문 세 주장(①평지 ②유모차 가능 ③활엽수 그늘)을
　한 장에 다 담고 있다. 유모차가 실제로 찍혀 있어 "유모차 끌고 갈 수 있다"는 문장을 사진이 뒷받침한다.

## ★★계절 함정 — 순창 교훈이 그대로 재현됐다

**`h03`·`h05`는 붉은 양귀비(또는 그 계열) 꽃밭**이다. 양귀비는 **5~6월 꽃**이다.
그런데 두 장의 `imgname`은 다른 16장과 똑같이 **"함양 상림공원"** 하나뿐이다.

→ **이름만 보고 '10월 초 꽃' 카드에 썼으면 10월 글에 5월 꽃이 들어갔다.**
　순창에서 `g02`(입구 조형물 글자)·`g07`(안내판)을 이름만으로는 못 걸러냈던 것과 같은 유형이다.
→ 두 장은 **꽃이 아니라 '쉬는 자리(벤치·그네)'** 카드로만 쓰고,
　프롬프트에 **붉은 꽃이 프레임에 크게 들어가지 않게 크롭**하라고 박았다.
★**결론 : Type1 18장 중 어느 것도 파일명으로 내용을 알 수 없다. 쓸 장은 반드시 열어 본다.**

## 아직 열어 보지 않은 Type1 12장
3522352 · 3522430 · 3522589 · 3522588 · 3522268 · 3522569 · 3522548 · 3522216 ·
3522266 · 3522215 · 3522409 · 3522547
→ 배경이 더 필요하면 여기서 받아 **열어 보고** 고른다. 이름으로 고르지 않는다.

## 배경을 못 구한 카드 (가짜로 채우지 않았다)
- **함양시외버스터미널** — 관광 DB 미등재
- **함양산삼축제** — `함양산삼축제`로 검색해도 0건(축제는 등재 대상이 아니다)
- **맛집(함양갈비탕·조샌집)** — 일반 식당은 등재 대상이 아니다
- **함화루 · 역사인물공원** — `함화루`로 0건. 상림공원(126861) 사진 중에 섞여 있을 수 있어
　남은 12장을 열어 보면 나올 가능성이 있다.
