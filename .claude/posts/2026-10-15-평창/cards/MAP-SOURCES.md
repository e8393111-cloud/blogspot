# 월정사 실제 좌표 지도

작성 2026-10-15. 생성형 이미지가 아니라 OSM 좌표를 투영해 조판한 정적 지도.

- 데이터: https://api.openstreetmap.org/api/0.6/map?bbox=128.582,37.719,128.601,37.736
- 저작권: © OpenStreetMap contributors https://www.openstreetmap.org/copyright (ODbL)
- 지도선형: 숲길 way656982050, 일주문 way859029635, 주차장 way1319746153, 경내 way476358120, 석탑 node4643603432.
- 금강교로 표시한 연결다리 way656982052는 원자료의 이름태그가 없다. 공식 주차장→금강교→월정사 접근순서와 지형 관계로 식별했다.
- 북쪽이 위, 위도37.7288 기준 동일한 가로/세로 미터 축척. 등고선·고도·수목 위치는 임의 생성하지 않음.
- 강조선은 원자료 route vertex를 따라 일주문 가까운 vertex에서 끝남. 선재길 전체 relation은 강조하지 않음.
- 편도 약1km는 평창군 관광자료 값: https://tour.pc.go.kr/Home/H50000/H51300/boardView?board_key=367&page=1&search_type=1
- 지도데이터 수집과 공식자료 교차검증에 기존 fact_check 에이전트 활용. 금강교 이름은 위 해석 한계가 있음.

## 재제작
Pillow 설치 환경에서 이 폴더의 osm-area.geojson을 작업폴더에 놓고 MAP_KOREAN_FONT로 NotoSansKR 가변폰트 파일을 지정하여 python make_real_map.py 실행. 지도에는 전체 데이터 중 화면 범위 내 요소만 표현.
