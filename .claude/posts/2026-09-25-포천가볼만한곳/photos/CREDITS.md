# 사진 소스 대장 — 포천 가볼만한곳
수집일 2026-09-10 · 한국관광공사 TourAPI(`detailImage2`) · Make 시나리오 6190253

**출처 표기(공공누리 의무) — 글 안에 한 줄 넣을 것**
```
사진 출처 : 한국관광공사 포토코리아 (공공누리 제1유형)
```

★`cpyrhtDivCd` — **Type1 = 글자 오버레이 가능 / Type3 = 제1유형+변경금지, 원본 그대로만**
★★**이번엔 갈렸다.** 국립수목원·광릉숲길은 Type1인데 **산정호수는 5장 전부 Type3**다.
　속초에서 권금성(Type1) vs 비선대(Type3)로 갈렸던 것과 같은 패턴 — **사진 단위로 본다.**

---

## ✅ 국립수목원 — Type1 (오버레이 가능) · contentid 127497
주소 **경기도 포천시 소흘읍 광릉수목원로 509** (검색 정확히 일치)
| 파일 | URL |
|---|---|
| kna1 | https://tong.visitkorea.or.kr/cms/resource/55/3493555_image2_1.jpg |
| kna2 | https://tong.visitkorea.or.kr/cms/resource/56/3493556_image2_1.jpg |
| kna3 | https://tong.visitkorea.or.kr/cms/resource/62/3493562_image2_1.jpg |
| kna4 | https://tong.visitkorea.or.kr/cms/resource/64/3493564_image2_1.jpg |
| kna5 | https://tong.visitkorea.or.kr/cms/resource/68/3493568_image2_1.jpg |
| kna6 | https://tong.visitkorea.or.kr/cms/resource/69/3493569_image2_1.jpg |
※ 대표 이미지 `3493563_image2_1.jpg`도 Type1 (firstimage)

## ✅ 광릉숲길 — Type1 (오버레이 가능) · contentid 2638583
주소 경기도 **남양주시 진접읍** 봉선사길 193-13 (봉선사입구~국립수목원 구간)
⚠**행정구역이 남양주다.** "포천 광릉숲"이라고 캡션 달지 말 것 — 숲길 자체가 포천·남양주에 걸쳐 있다.
| 파일 | URL |
|---|---|
| gws1 | https://tong.visitkorea.or.kr/cms/resource/31/3507331_image2_1.jpg |
| gws2 | https://tong.visitkorea.or.kr/cms/resource/32/3507332_image2_1.jpg |
| gws3 | https://tong.visitkorea.or.kr/cms/resource/33/3507333_image2_1.jpg |
| gws4 | https://tong.visitkorea.or.kr/cms/resource/35/3507335_image2_1.jpg |
| gws5 | https://tong.visitkorea.or.kr/cms/resource/36/3507336_image2_1.jpg |

## ❌ 산정호수 — **Type3 (변경금지)** · contentid 125523
주소 경기도 포천시 영북면 산정호수로 402 · **5장 전부 Type3**
→ ★**글자를 얹으면 라이선스 위반.** 본문에 **원본 그대로만** 넣는다. 카드 배경으로 쓰지 않는다.
| 파일 | imgname | URL |
|---|---|---|
| sjh1 | 포천 산정호수 (6) | http://tong.visitkorea.or.kr/cms/resource/48/3022448_image2_1.jpg |
| sjh2 | 포천 산정호수 (8) | http://tong.visitkorea.or.kr/cms/resource/49/3022449_image2_1.jpg |
| sjh3 | 포천 산정호수 (9) | http://tong.visitkorea.or.kr/cms/resource/50/3022450_image2_1.jpg |
| sjh4 | 포천 산정호수 (10) | http://tong.visitkorea.or.kr/cms/resource/51/3022451_image2_1.jpg |
| sjh5 | 포천 산정호수 (11) | http://tong.visitkorea.or.kr/cms/resource/52/3022452_image2_1.jpg |

## ⛔ 미확보 (0건 — 억지로 다른 사진을 붙이지 않았다)
- **명성산** — 검색은 되나(contentid 125469, 포천시 이동면) **등록 사진 0장**.
  ⚠검색 2순위로 **철원군 갈말읍 명성산**도 잡혔다. 포천·철원에 걸친 산이라 지역 표기에 주의.
- **의정부역·21번 버스·수목향·담화재·가비가배** — 관광지 등재 대상이 아니라 TourAPI에 없다(정상).
  → 교통·맛집 카드는 **정보카드(평면 타이포)**로 처리한다.

---

## ★육안 확인 상태 — **미확인**
`photo-tool.md` 6단계(Make base64 조각으로 내려받아 Read로 열어 보기)를 **이번에도 수행하지 못했다.**
사유: 데이터스토어 조회가 응답 크기에 따라 권한 분류기에 막혀 22조각×여러 장을 재조립할 수 없다(속초·남원과 동일).
★**열어본 척하지 않고 `육안 미확인`으로 남긴다.** 카드 확정 전 운영자가 직접 볼 것:
1. 파일명과 실제 내용이 맞는지 (철원에서 '고석정 전경'이 인공폭포였던 사례)
2. 사진 안에 글자·간판·조형물이 있는지 (있으면 배경 탈락)
3. 우하단 한국관광공사 워터마크 유무 → 있으면 우리 워터마크는 **좌하단**으로
