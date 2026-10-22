# 2026-10-19 Work 이미지
- hero.png: photo01.jpg Type1 기반 imagegen 편집, 1:1. 실제 사진 기반 AI 편집 표시. #2F5D3A, 패널 없음, 출처 워터마크 유지.
- cta.png: photo02.jpg Type1 기반 imagegen 편집, 16:9, 고정 CTA.
- 본문 photo05-type3-raw.jpg, photo03.jpg, photo04.jpg: 원본 그대로 업로드, 각 출처·계절 캡션.
- haemi-map.png: 실제 OSM geometry·POI 좌표로 제작한 위치/방문순서 지도. 경로선/거리 추정 없음. © OpenStreetMap contributors, ODbL. 2026-10-19 api.openstreetmap.org/api/0.6/map?bbox=126.541,36.710,126.552,36.718 자료 보존 haemi.osm.
- 재현: make_map.py, Pillow, NotoSansKR[wght].ttf 필요. 원고 경로는 현재 cwd 기준 스크립트에 기록.
- 표준 5장+지도1: 총6장 저장·재열람·pstatic 실제 이미지 로딩 확인.
