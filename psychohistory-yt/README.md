# psychohistory-yt

심리역사학(Psychohistory) 관점에서 현대사회 트렌드를 예측·분석하는 YouTube Shorts 자동 생산 파이프라인.
**비용 최소화 우선**. 1편 약 $0.002 (Claude API 비용만, 나머지 무료).

## Pipeline

```
[Topic Discovery] → [Script (60s Shorts)] → [TTS Narration]
                                          ↘
                                            [Image Gen] → [ffmpeg Ken Burns + Subtitles] → [YouTube Upload]
```

| 단계 | 무료 기본 | 유료 옵션 |
|------|-----------|-----------|
| 주제 발굴 / 스크립트 | Claude Sonnet 4.6 + prompt caching (≈ $0.002/편) | — |
| TTS | **Edge TTS** (Microsoft Edge, 한국어 ko-KR-SunHiNeural 등, 무료) | ElevenLabs |
| 이미지 생성 | **Pollinations.ai** (키 불필요, 9:16 Flux) | Higgsfield Nano Banana, fal.ai |
| 모션 | **ffmpeg Ken Burns** (zoompan) | Higgsfield Kling 등 i2v |
| 자막 | ffmpeg + ASS (Noto Sans CJK KR) | — |
| 업로드 | YouTube Data API v3 | — |

비용 비교 (Shorts 1편 기준):
- 완전 무료 경로: **약 $0.002** (Claude API만)
- ElevenLabs로 음성만 업그레이드: 약 $0.003
- Higgsfield i2v 풀: $3~10/편 (대부분 i2v 비용)
- 하이브리드 (훅 1~2컷만 i2v): $0.10~0.20/편

## Setup

```bash
python -m venv .venv && source .venv/bin/activate
pip install -e .[dev]
cp .env.example .env  # 키 입력
```

### 시스템 의존성
- **ffmpeg**: `apt install ffmpeg` 또는 `brew install ffmpeg`
- **폰트 (자막용)**: Noto Sans CJK KR (`apt install fonts-noto-cjk` 또는 macOS 기본)

### 필수 키
- `ANTHROPIC_API_KEY`: 주제 발굴 + 스크립트 생성
- 그 외: 모두 선택. 기본값(Edge TTS + Pollinations + Ken Burns)이 무료.

### 업로드 (선택)
- Google Cloud Console에서 OAuth 2.0 Client ID (Desktop) 발급 → `secrets/client_secret.json`로 저장
- `phyt auth-youtube` 한 번 실행하여 토큰 발급

## CLI

```bash
# 오늘의 후보 주제 5개 발굴 (Sonnet 4.6 + 캐시 적용)
phyt topics --count 5 --save workspace/topics.json

# 특정 주제로 한 편 생산 (스크립트 → 이미지 → TTS → ffmpeg 합성)
phyt produce --topic-title "AI 도구 도입과 1인 기업 시대 가속" \
             --angle "인센티브 균형 이동 + 임계점" \
             --why-now "도구 비용이 인건비 1/10로 떨어진 첫 분기"

# 결과 업로드 (private 기본)
phyt upload --workspace workspace/20260518-... --privacy unlisted

# 처음부터 끝까지 (자동 발굴 → 생산 → 업로드)
phyt run --count 1 --upload
```

## 어댑터 교체

`.env` 한 줄로 토글:

```bash
VOICE_ADAPTER=elevenlabs       # 기본 edge_tts
VISUAL_IMAGE_ADAPTER=higgsfield # 기본 pollinations (Higgsfield 어댑터는 키 필요, 현재 stub)
```

## 디렉토리 구조

```
psychohistory_yt/
├── cli.py           # phyt CLI 엔트리
├── config.py        # .env 로딩
├── pipeline.py      # 오케스트레이션
├── llm/             # Claude (prompt caching)
├── topics/          # 주제 발굴 + 심리역사학 프레이밍 프롬프트
├── script/          # 60s Shorts 스크립트 구조 (hook/narration/cta/captions/shots)
├── voice/           # TTSAdapter (EdgeTTS, ElevenLabs)
├── visual/          # ImageAdapter (Pollinations, Higgsfield stub)
├── compose/         # ffmpeg Ken Burns + ASS 자막
├── upload/          # YouTube Data API
└── storage/         # workspace 디렉토리 관리
```

## 라이선스
TBD
