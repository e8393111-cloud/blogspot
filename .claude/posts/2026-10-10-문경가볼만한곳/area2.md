# 영역2 — 이미지 지시서 (문경 가볼만한곳 · 2026-10-10 발행예정)

> ★**세트색 : 딥 포레스트 그린 `#2E4636`** — 문경새재 히어로(주흘관 성벽 옆 소나무·계곡)에서 뽑았다.
> 단풍은 **사진의 자연색 그대로** 두고, 세트색은 글자·라벨·구분선에만(≤15%) 쓴다.
> `NOT orange, NOT amber` — 단풍 글이라고 화면 전체를 주황으로 물들이면 촌스럽다. 군산(딥네이비)·여수(딥레드)와도 겹치지 않는다.
> 조명 기본값 = **맑은 가을 낮 자연광**. 노을은 CTA 1장에만.

## ★★배경 사진 현황 — 먼저 읽을 것
`photos/CREDITS.md` 참조. **이 글은 주인공에 글자를 못 얹는다.**
- **문경새재 1관문 = TourAPI에 `문경 조령 관문`(2753508)으로 등재 · `Type3`(변경금지)** → 글자 오버레이 **불가**. 원본 그대로만 삽입.
- **주흘산(126036) Type3**, **가은오픈세트장(2610294) Type3** → 오버레이 불가.
  ★가은오픈세트장은 **문경새재 오픈세트장과 다른 시설**이다(가은읍 vs 문경읍). 본문 카드에 쓰지 말 것.
- **Type1(오버레이 가능)은 진남교반(126570) 하나뿐.**
→ 그래서 **글자 카드는 진남교반 배경 1장으로 몰고, 나머지는 배경 미확보로 남긴다.** 가짜 생성 배경으로 채우지 않는다.

공통 프롬프트 꼬리표(모든 카드에 붙일 것):
`ONE continuous full-bleed photograph fills the entire frame. Compose so one vertical side is naturally bright and empty (open sky, water, pale stone path) and place the Korean text DIRECTLY on that bright area with a soft drop shadow. NO panel, NO glass, NO box, NO rounded card, NO divider line, NO tinted overlay strip, NO icon badges, NO circular sticker or emoji icons, NO dotted separator lines, NO white or foggy wash over the photo, NO template-like side panel. Keep the photograph crisp and full-bleed. Accent color deep forest green #2E4636 on numbers and labels only (under 15%); body text in a deep high-contrast ink tone. Natural colors — NOT a monochrome orange/amber wash, NOT orange, NOT amber. Clear autumn daylight. Watermark "blog.naver.com/witchbloom82" small, bottom-right.`
★**카드 안에는 이모지를 넣지 않는다**(`image-guide.md` 금지). 썸네일 이모지는 본문 썸네일문구 줄에만 둔다.

---

## 이미지 0. 썸네일 · 1:1
**삽입 위치** : 대표 이미지(본문 최상단)
**실제 배경 사진 소스** : ❌ **미확보** — 문경새재 1관문은 Type3라 글자를 얹을 수 없다.
　→ 운영자가 **직접 촬영분 또는 Type1 사진**을 구해야 한다. 대안: 진남교반(아래 링크)을 쓰되 "문경새재"라는 문구와 맞지 않으니 권하지 않는다.
**카드 텍스트** : `문경새재, 1관문만 봐도 충분해요` / 작은 태그라인 `차 없이 버스로 가는 반나절`
**영문 프롬프트** :
`Edit the uploaded real photograph of Mungyeong Saejae's first gate (Juheulgwan) in autumn; keep the scene EXACTLY as-is, do NOT repaint or regenerate the background; ONLY overlay the Korean text and the watermark. A stone fortress gate with tiled roof under clear autumn daylight, pine trees and maple colour in natural tones, a pale stone path leading to the gate. Place the headline 문경새재, 1관문만 봐도 충분해요 on the open bright sky above the gate, with the small tagline 차 없이 버스로 가는 반나절 beneath it.` + 공통 꼬리표

## 이미지 1. 교통 카드(길 안내판) · 4:5
**삽입 위치** : 본문 57행 `[이미지 삽입 : KTX-이음 문경역 외관 또는 문경새재 정류장 표지판…]`
**실제 배경 사진 소스** : ❌ **미확보**(터미널·역·정류장은 TourAPI 등재 대상이 아니다 — 철원 선례와 동일)
**카드 텍스트**
```
문경새재 가는 버스
급행1  점촌 · 시청 · 마성 · 문경역 · 새재
100번  문경역 ↔ 새재   하루 6회쯤 · 15분
어디에 내려도 환승 1회
현금 1,000~1,500원은 챙기기
```
**영문 프롬프트** :
`Edit the uploaded real photograph of a rural Korean bus stop sign or the KTX Mungyeong station exterior; keep the scene EXACTLY as-is, do NOT repaint or regenerate the background; ONLY overlay the Korean text and the watermark. Clear autumn daylight, wide pale sky on the left half of the frame. Place the Korean lines on that bright empty sky, the route numbers slightly larger in deep forest green #2E4636.` + 공통 꼬리표

## 이미지 2. 출발지별 교통 카드 · 4:5
**삽입 위치** : 본문 97행 `[이미지 삽입 : 문경공용버스터미널 또는 점촌시외버스터미널 외관…]`
**실제 배경 사진 소스** : ❌ **미확보**(터미널 미등재)
**카드 텍스트**
```
어디서 출발하나요
동서울 → 점촌   2시간 · 우등 19,000원
판교 → 문경     KTX 1시간 30분 · 65세 12,200원
상주 → 점촌     하루 46회 · 가장 촘촘해요
대구북부 직행은 2018년에 없어졌어요
```
**영문 프롬프트** :
`Edit the uploaded real photograph of a small Korean intercity bus terminal exterior; keep the scene EXACTLY as-is, do NOT repaint or regenerate the background; ONLY overlay the Korean text and the watermark. Clear daylight, a broad pale road surface in the lower third giving empty space for text.` + 공통 꼬리표

## 이미지 3. 문경새재 1관문 · **원본 그대로(글자 없음)** · 4:5 또는 3:4
**삽입 위치** : 본문 134행 `[이미지 삽입 : 문경새재 1관문(주흘관) 전경…]`
**실제 배경 사진 소스** : ✅ **확보 · 단 `Type3`(변경금지)**
　`http://tong.visitkorea.or.kr/cms/resource/16/3408316_image2_1.jpg` (문경 조령 관문 · contentid 2753508)
**★이 카드는 글자를 얹지 않는다.** 원본을 그대로 넣고, 설명은 본문 텍스트로 단다.
**출처 표기(의무)** : `사진 출처 : 한국관광공사 포토코리아 (공공누리 제1유형)`

## 이미지 4. 쉬는 자리 카드 · 4:5
**삽입 위치** : 본문 135행 `[이미지 삽입 : 옛길박물관 앞 산책로와 정자…]`
**실제 배경 사진 소스** : ❌ **미확보**(옛길박물관 TourAPI 0건)
**카드 텍스트**
```
쉬어갈 자리
벤치 · 정자   1관문에서 조곡관 가는 길 곳곳
화장실        관리사무소 · 주차장 옆
실내          옛길박물관 안 (무료 · 냉난방)
다 안 걸어도 괜찮아요
```
**영문 프롬프트** :
`Edit the uploaded real photograph of a shaded walking path with a wooden Korean pavilion and benches in autumn; keep the scene EXACTLY as-is, do NOT repaint or regenerate the background; ONLY overlay the Korean text and the watermark. Soft morning light through tall trees, a pale gravel path on one side giving bright empty space.` + 공통 꼬리표

## 이미지 5. ★전동차 함정 카드(이 글의 핵심) · 3:4
**삽입 위치** : 본문 165행 `[이미지 삽입 : 문경새재 전동차와 옛길박물관 탑승장…]`
**실제 배경 사진 소스** : ❌ **미확보**(전동차 TourAPI 0건)
**카드 텍스트** — ★숫자가 많으니 한 줄에 1~2개만
```
전동차, 10월부터 12월까지
2관문에 가지 않아요
요일과 상관없이 오픈세트장까지만

운행시간  10월 09:30~17:30
          11월 10:00~17:00
65세도 2,000원 (경로 혜택 없음)
```
**영문 프롬프트** :
`Edit the uploaded real photograph of the small open-sided electric shuttle car at Mungyeong Saejae; keep the scene EXACTLY as-is, do NOT repaint or regenerate the background; ONLY overlay the Korean text and the watermark. Clear autumn daylight, a wide pale gravel forecourt filling the lower half so the Korean lines sit on it directly. Set the two sentences 2관문에 가지 않아요 and the times in deep forest green #2E4636, everything else deep ink.` + 공통 꼬리표

## 이미지 6. 맛집 카드 · 4:5
**삽입 위치** : 본문 218행 `[이미지 삽입 : 새재할매집 석쇠구이 상차림…]`
**실제 배경 사진 소스** : ❌ **미확보**(음식점은 TourAPI 등재 대상 아님 — 철원 선례)
**카드 텍스트**
```
새재할매집  1관문 안쪽 · 도보권
고추장 약돌돼지 석쇠구이  19,000원
더덕구이 12,000원 · 도토리묵 11,000원
11:00~18:00 (라스트오더 17:30) · 월요일 휴무
```
**영문 프롬프트** :
`Edit the uploaded real photograph of a Korean charcoal-grilled pork dish on a rustic table; keep the scene EXACTLY as-is, do NOT repaint or regenerate the background; ONLY overlay the Korean text and the watermark. Warm indoor daylight from a window, a plain pale table surface on one side giving empty space for the text.` + 공통 꼬리표

## 이미지 7. 편의·무장애 카드 · 4:5
**삽입 위치** : 본문 232행 `[이미지 삽입 : 문경새재 산책로의 벤치·정자…]`
**실제 배경 사진 소스** : ✅ **확보 · `Type1`(오버레이 가능)** — 이 글에서 유일하게 글자를 얹어도 되는 실사진
　`http://tong.visitkorea.or.kr/cms/resource/80/3584880_image2_1.jpg` (진남교반 · contentid 126570)
　※ 진남교반은 문경새재가 아니라 마성면이다. **"문경새재 산책로"라고 쓰지 말 것** — 카드 문구를 장소 중립으로 뒀다.
**카드 텍스트**
```
몸이 편한지부터
평지 위주 · 돌길 구간 있음
휠체어 · 유모차  관리사무소 대여 08:30~17:30
화장실  관리사무소 · 주차장 옆
반려동물은 들어갈 수 없어요
```
**영문 프롬프트** :
`Edit the uploaded real photograph of Jinnamgyoban in Mungyeong — a river bend with bridges below rocky cliffs; keep the scene EXACTLY as-is, do NOT repaint or regenerate the background; ONLY overlay the Korean text and the watermark. Clear autumn daylight, the broad pale river surface filling one vertical side so the Korean lines sit directly on the water with a soft drop shadow.` + 공통 꼬리표
**출처 표기(의무)** : `사진 출처 : 한국관광공사 포토코리아 (공공누리 제1유형)`

## 이미지 8. 메인 CTA · 16:9
**삽입 위치** : 본문 맨 아래 `[메인 CTA]` 바로 위
**실제 배경 사진 소스** : ❌ **미확보**
**카드 텍스트** : `이번 가을, 버스 타고 문경새재`
**영문 프롬프트** :
`Edit the uploaded real photograph of an autumn mountain pass road at Mungyeong in late afternoon light; keep the scene EXACTLY as-is, do NOT repaint or regenerate the background; ONLY overlay the Korean text and the watermark. This is the one card where warm low sunlight is allowed. Place 이번 가을, 버스 타고 문경새재 on the open sky across the upper third.` + 공통 꼬리표

---

## 운영자 사용법 (생성형 도구를 쓸 때)
① 위 사진 URL을 열어 저장 → ② GPT에 **업로드** → ③ 해당 카드의 영문 프롬프트로 **글자만 얹기**.
순수 text-to-image로 배경을 만들지 않는다(AI티 나는 인위적 배경의 원인).
**배경 미확보(❌)로 표시된 7장은 실사진을 먼저 구한 뒤 진행한다.**
