# 내 건강관리 PWA

운동, 식단/칼로리, 체중·물·수면, 복약 알림을 한 곳에서 관리하는 모바일 PWA.

## 기능
- 🏃 운동 기록 (종류·시간·칼로리·메모)
- 🍱 식단/칼로리 기록 (끼니별)
- ⚖️ 체중 추이 (그래프 포함)
- 💧 물 섭취량 카운터 (일일 목표 8잔)
- 😴 수면 시간 기록
- 💊 복약 등록 및 시각 알림 (브라우저 알림)
- 📱 홈 화면에 설치 가능한 PWA, 오프라인 동작

## 기술
- 순수 HTML/CSS/JS (프레임워크 없음)
- 데이터: 브라우저 LocalStorage
- Service Worker로 오프라인 캐시
- GitHub Pages로 배포

## 로컬 실행
```bash
python3 -m http.server 8080
# 브라우저에서 http://localhost:8080 열기
```

## 배포
`main` 브랜치에 푸시되면 `.github/workflows/pages.yml`이
GitHub Pages로 자동 배포합니다.
저장소 Settings → Pages → Source를 **GitHub Actions**로 설정해주세요.
