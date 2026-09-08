# 사진 소스 도구 — 관광사진 API로 배경 사진 확보하기

영역2 카드마다 **실재하는 공공누리 사진 URL**을 붙이는 방법이다.
`.claude/image-guide.md` §0이 "포토코리아 1순위, URL 지어내기 금지"라고 정해 놨지만
**지킬 수단이 없어서** 매번 "소스 미확보"로 넘겨 왔다. 그 수단이 이것이다.

> 이 문서는 `.claude/keyword-tool.md`(키워드 실측)와 같은 성격이다 — **매번 다시 돌리는 방법**.

---

## 무엇을 얻나

| 값 | 의미 |
|---|---|
| `originimgurl` | **원본 사진 URL** (`tong.visitkorea.or.kr/...`) — 그대로 열면 사진이 뜬다 |
| `imgname` | 사진 제목 (예: `강원_철원_고석정국민관광지_전경_04-5.jpg`) |
| `cpyrhtDivCd` | ★**저작권 유형** — 아래 참조 |
| `contentid` | 장소 고유번호. `detailImage2`에 넘길 때 쓴다 |

---

## ★★가장 중요 — `cpyrhtDivCd`를 반드시 본다

| 값 | 뜻 | 글자 오버레이 |
|---|---|---|
| **`Type1`** | 공공누리 **제1유형** (출처표시) — 상업 이용·**변형 가능** | ✅ **가능** |
| **`Type3`** | 제1유형 + **변경금지** | ❌ **불가** — 얹으면 라이선스 위반 |

**Type3 사진은 글자 없이 원본 그대로만** 본문에 넣을 수 있다.

★2026-09 철원 취재에서 실제로 겪었다 — 맛집 카드 배경으로 쓰려던 **한탄강빵명장이 Type3**였다.
그대로 글자를 얹었으면 위반이었다. **은하수교·순담계곡·송대소·고석정가든도 전부 Type3**다.
같은 지역 안에서도 사진마다 유형이 다르니 **장소 단위가 아니라 사진 단위로** 봐야 한다.

**출처 표기(공공누리 의무)** — 글 안에 한 줄:
```
사진 출처 : 한국관광공사 포토코리아 (공공누리 제1유형)
```

---

## 구성 (Make · 팀 1918871)

| 리소스 | ID | 역할 |
|---|---|---|
| 시나리오 `📷 관광사진 소스 수집 (TourAPI)` | 6190253 | 본체 (on-demand) |
| 데이터스토어 `여행키워드_집계` | 137130 | 결과 임시 저장 (키 접두사로 구분) |
| 팀 변수 `TOURAPI_KEY` | — | **이미 등록돼 있다.** 새로 발급받지 않는다 |

### 흐름
```
1 ParseJSON  검색어 배열 [{q:"고석정 꽃밭", c:""}]   ← c는 아는 contentid(없으면 "")
2 Iterator
3 HTTP       searchKeyword2   → contentid · title · cpyrhtDivCd · firstimage
6 ParseJSON
4 HTTP       detailImage2     → originimgurl 목록 (한 장소당 4~11장)
5 AddRecord  137130에 저장 (key = TP_<검색어>)
```

### 엔드포인트
```
https://apis.data.go.kr/B551011/KorService2/searchKeyword2
https://apis.data.go.kr/B551011/KorService2/detailImage2
```
공통 파라미터 : `serviceKey={{var.team.TOURAPI_KEY}}` · `MobileOS=ETC` · `MobileApp=witchbloom` · `_type=json`
`detailImage2`에 추가 : `contentId` · `imageYN=Y`

---

## ★반드시 지킬 4가지 (전부 실제로 겪은 것)

**1. `contentId`는 대문자 I다.** `contentid`로 보내면 통째로 무시되고
`NO_MANDATORY_REQUEST_PARAMETERS_ERROR1(contentId)`가 돌아온다.

**2. Make 배열 인덱스는 1부터다** → `{{6.response.body.items.item[1].contentid}}`.
`[0]`을 쓰면 빈 값이 들어가 위 에러가 난다. (키워드 도구와 같은 함정)

**3. 검색이 0건이면 detailImage2가 반드시 실패한다.** 정상이다.
　모듈 4의 `handleErrors: true`로 흘려보내고, 결과에서 `0장`으로 읽으면 된다.
　**관광지가 아닌 것은 아예 없다** — 터미널·정류장·시내버스·일반 식당은 등재 대상이 아니다.
　철원에서 `동송터미널`·`동서울터미널`·`소문난순대국왕족발`이 전부 0건이었다. 억지로 다른 사진을 붙이지 않는다.

**4. `parseResponse: false` + 뒤에 `json:ParseJSON`.** 바로 파싱하면 값이 안 잡힌다.

---

## 다시 돌리는 법

1. **검색어 교체** — 시나리오 6190253의 모듈 1 `json` 배열을 바꾼다
   (`scenarios_get` → 블루프린트 수정 → `scenarios_update`)
2. **실행** — `scenarios_run` (6190253, responsive true). 검색어 10개에 약 30초
3. **읽기** — `data-store-records_list`(137130) → `TP_<검색어>` 레코드
4. **거르기** — `cpyrhtDivCd`가 `Type1`인 것만 오버레이 배경으로 쓴다
5. **영역2에 붙이기** — 카드마다 **후보 2~3개씩**. 검증상태는 `API 응답으로 확인(사진 미열람)`로 정직히

### 검색어를 고르는 요령
- **관광지 정식 명칭**으로 친다. `고석정 꽃밭` ⭕ / `철원 꽃구경` ❌
- 지역명을 붙이면 오히려 0건이 되기도 한다 (`철원 은하수교` 0건 → `한탄강 은하수교` 10건)
- 맛집은 `contenttypeid=39`로 등재된 곳만 나온다. 대부분 없다고 보면 된다

### 오퍼레이션 예산
검색어 1개당 약 3회. 10개 ≈ 30회. 키워드 실측(155개 ≈ 470회)에 비하면 무시할 수준이다.

---

## ★사진을 눈으로 확인하는 법

**Claude는 사진을 볼 수 없다.** 프록시가 외부 접속을 막아 URL을 열 수 없고,
API가 주는 건 제목·유형·URL 같은 **텍스트뿐**이다. "이 사진이 카드에 어울리는가"는 판단할 수 없다.

→ 그래서 **후보를 한 장에 모은 HTML을 만들어 운영자에게 보낸다.**
　`<img src="...">`를 격자로 깔고 사진마다 `Type1/Type3`를 색으로 표시하면
　운영자가 스크롤 한 번으로 고를 수 있다. (2026-09-07 철원 78장에 이 방식을 썼다)

→ 그래서 **영문 프롬프트에 장면 묘사를 쓰지 않는다.**
　`a wide-open flower field with pink muhly in soft focus…`처럼 상상한 장면을 적으면
　실제 사진이 다를 때 **모델이 배경을 그 묘사대로 고쳐 그린다.**
　대신 이렇게만 쓴다:
```
Edit the uploaded photograph. Keep the image EXACTLY as-is — do NOT repaint,
redesign, regenerate, restyle or replace any part of the background.
ONLY overlay Korean text and a watermark.
Place the text on whichever area of the photo is naturally brightest and
least busy; if no such area exists, place it across the lower third.
```

---

## 주의

- **자격증명은 팀 변수에서만 참조한다.** `TOURAPI_KEY` 값을 원고·문서·커밋에 옮겨 적지 않는다.
- 데이터스토어 137130은 키워드 집계와 공용이다. 사진 결과는 `TP_` 접두사로 구분해 덮어쓰지 않게 한다.
- 사진은 시간이 지나도 잘 안 바뀌지만, **폐업·철거된 곳은 사진이 남아 있어도 글에 쓰면 안 된다.**
  영업 여부는 별도로 확인한다(`CLAUDE.md`의 폐업 확인 규칙).
