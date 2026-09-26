# 정선 레퍼런스 사진 대장 (2026-09-26 수집)

수집: 한국관광공사 TourAPI KorService2 (`searchKeyword2` → `detailImage2`) · Make 시나리오 6190253·6219674

## ★결론 — 정선은 오버레이 카드 제작이 가능하다

직전 회차(청도)는 등재 사진 18장이 전부 Type3(변경금지)라 카드를 한 장도 못 만들었다.
**정선은 다르다. Type1이 두 곳, 총 17장이다.**

| 장소 | contentid | 사진 | 저작권 | 오버레이 |
|---|---|---|---|---|
| **아우라지** | 125777 | **6장 전부 Type1** | 공공누리 1유형 | ⭕ 가능 |
| **민둥산** | 125616 | **11장 전부 Type1** | 공공누리 1유형 | ⭕ 가능 |
| 병방치 스카이워크 | 1842210 | 대표 1장 | **Type3** | ❌ 원본만 |
| 정선레일바이크 | 1936389 | 대표 1장 | **Type3** | ❌ 원본만 |
| 정선아리랑시장 | — | **0건(미등재)** | — | — |

★두 Type1 장소 모두 경로가 `/cms/resource_photo/`다 — 평창에서 확인한 규칙(“resource_photo 경로에 Type1이 몰려 있다”)이 또 맞았다.

---

## 내려받아 육안 확인한 원본

### `aurajji-125777-4073397.jpg` (13,275 bytes · JPEG 무결성 SOI/EOI 확인)
- **실제 내용(열어서 확인함)**: **아우라지 출렁다리(현수교)**가 강을 가로지르고, 뒤로 푸른 산, 위로 파란 하늘과 흰구름. 우측에 조형물 일부. 여름~초가을 녹음.
- **글자·간판·워터마크 없음.**
- ★**하늘이 화면 위쪽에 넓게 열려 있어 오버레이 글자 자리로 적합**하다. 썸네일·교통 카드 배경으로 1순위.
- contentid `125777` · serialnum `Pi4Nja` · imgname `아우라지`
- `cpyrhtDivCd` = **Type1** → 글자 오버레이 가능
- 원본 URL: https://tong.visitkorea.or.kr/cms/resource_photo/97/4073397_image2_1.jpg
  (내려받은 것은 `_image3_1.jpg` 축소판. 카드 제작은 `_image2_1.jpg` 원본을 쓴다)
- 출처 표기: 한국관광공사 포토코리아 – **공공누리 제1유형(출처표시)**

## 카드 배경으로 바로 쓸 수 있는 Type1 URL 목록

### 아우라지 (contentid 125777) — 6장 전부 Type1
```
https://tong.visitkorea.or.kr/cms/resource_photo/97/4073397_image2_1.jpg   ← 육안 확인함(출렁다리+하늘)
https://tong.visitkorea.or.kr/cms/resource_photo/53/4073453_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/21/4073421_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/25/4073425_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/38/4062338_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/98/4073398_image2_1.jpg
```

### 민둥산 (contentid 125616) — 11장 전부 Type1
```
https://tong.visitkorea.or.kr/cms/resource_photo/01/4064101_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/84/4064084_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/99/4064099_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/71/4064071_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/83/4064083_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/75/4064075_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/70/4064070_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/81/4064081_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/89/3343089_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/80/4064080_image2_1.jpg
https://tong.visitkorea.or.kr/cms/resource_photo/85/4064085_image2_1.jpg
```
★민둥산 사진 1장은 base64로 받아 무결성까지 확인했으나(온전함), 컨텍스트를 아끼려 파일로 남기지 않았다. 위 URL로 바로 받으면 된다.

## Type3 (원본 그대로만 · 글자 금지)
- 병방치 스카이워크 1842210 — http://tong.visitkorea.or.kr/cms/resource/97/1690997_image2_1.jpg
- 정선레일바이크 1936389 — http://tong.visitkorea.or.kr/cms/resource/19/2731319_image2_1.jpg

## TourAPI로 못 구한 것 (운영자 확보 필요)
1. **정선아리랑시장(5일장)** — 미등재. 이 글의 주요 소재인데 사진이 없다
2. **정선아리랑열차** — 미등재
3. **정선역·정선공영버스터미널** — 미등재
4. **구절리역** — 미등재
