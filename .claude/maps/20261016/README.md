# 실제 동선 지도 보강 — 2026-10-16

## 실행 결과
- 요청: 남은 문경·함양 기존 임시저장본에 지도 추가, 공개 발행 금지.
- 용인: 사용자 발행 완료 보고로 제외.
- 문경 저장목록 2026.10.16 07:55, 함양 2026.10.16 07:57. UI 표시값이며 시간대 변환/추정하지 않음.
- 두 글 모두 저장 후 새로고침 → 저장목록에서 다시 열기 → 새 지도 실제 로드 확인.
- 각 기존 이미지5개 ID 유지 + 지도1 =6개. 표3개씩, 문경 링크카드4·장소1, 함양 링크카드2·장소1 유지.
- 삽입 전후 본문 텍스트 공백 정규화 대조 동일. 기존 원고를 재붙여넣지 않음.
- 실제 화면: mungyeong-map-saved.jpg, hamyang-map-saved.jpg, two-map-drafts-saved.jpg.
- map PNG 1200×1400, 모바일360×420 육안 검수. 독립 route_map_facts 검수 승인: 지점·길·가독성 필수수정 없음.
- 생성형 이미지가 아닌 OSM 데이터 렌더링. 네이버 지도 AI 활용 표시 OFF. 기존 사진 AI표시 유지.
- 지도 일부 시설 진입구간은 데이터에 없어 직선으로 창작하지 않음. 안내소/함화루까지 약16m/13m, 문경 박물관까지 약70m의 최근접 보행로 간격은 연결하지 않고 시설진입 현장표지 이용 범례로 구분. 이 값은 내부검증값이며 이미지/본문에 거리로 추가하지 않음.
- 전체 교통/버스 시간표 재검증 작업은 아님. 기존 미확인 항목 유지. 공개 발행 안 함.

## 원자료·권리
- OSM 데이터: © OpenStreetMap contributors, ODbL 1.0. 정적 지도에 출처·copyright URL 표기.
- https://www.openstreetmap.org/copyright
- https://api.openstreetmap.org/api/0.6/map?bbox=128.071,36.760,128.082,36.771
- https://api.openstreetmap.org/api/0.6/map?bbox=127.716569,35.520150,127.727437,35.527843
- 실제 응답 보존: mungyeong.osm.gz, hamyang.osm.gz. 추출 route JSON은 같은 ODbL 적용.
- 원본 내보내기 브라우저 경로 동기화 실패·Overpass timeout 뒤 공식 OSM API로 수집 성공. 같은 자료를 다른 출처로 둔갑하지 않음.
- 배경도로·하천·공원·건물은 OSM 원래 형상. 임의 지형 없음. 현장 통제·노면·무장애는 보장하지 않음.
- 함양 상림관광안내소: 공식 전국관광안내소표준데이터, 35.52372669,127.721893 / 필봉산길49 / 상림공원 입구 주차장 내, 데이터2026-06-17.
  https://www.data.go.kr/data/15013112/standard.do
- 함화루: 한국문화원연합회 지역N문화 '김종직이 지리산을 바라보던, 함양 함화루' 원문 지도 데이터 longitude127.7193950000,latitude35.5243210000. 주소 운림리349-1.
  https://ncms.nculture.org/pavilion/story/2361
  주소 대조 https://encykorea.aks.ac.kr/Article/E0062282
- 옛길박물관: 36.7631400,128.0763790 / 주흘관36.7684296,128.0752194, OSM 미러 위치 대조:
  https://kr.maptons.com/p/8799299430
  https://kr.maptons.com/p/8932642133
  공식박물관: https://www.gbmg.go.kr/tour/contents.do?mId=0102010100
- 문경 공식 탐방로의 관리사무소→주흘관244m를 박물관→관문 거리로 사용하지 않음.
- 지도 소요시간·거리·화장실 위치 신규 추가 없음.

## 재현
두 osm.gz를 압축 해제하고 Noto Sans KR 가변글꼴(SIL OFL)을 준비:
MAP_FONT=/absolute/path/NotoSansKR.ttf python render_maps_reproducible.py
route_paths.py는 OSM footway/path/pedestrian/steps 연결만으로 최단 연결을 계산. 경로는 공식 지정 코스가 아닌 본문 산책 제안의 주요 보행로 표시.
