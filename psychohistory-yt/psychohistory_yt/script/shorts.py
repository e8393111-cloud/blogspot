from __future__ import annotations

from typing import Any

from ..llm.base import LLMClient
from ..topics.discover import Topic
from ..topics.prompts import PSYCHOHISTORY_FRAMING
from .schema import Caption, ShortsScript, ShotPlan


_SCRIPT_SCHEMA: dict[str, Any] = {
    "type": "object",
    "properties": {
        "hook": {"type": "string"},
        "narration": {"type": "string"},
        "cta": {"type": "string"},
        "captions": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "start_sec": {"type": "number"},
                    "end_sec": {"type": "number"},
                    "text": {"type": "string"},
                },
                "required": ["start_sec", "end_sec", "text"],
                "additionalProperties": False,
            },
        },
        "shots": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "start_sec": {"type": "number"},
                    "end_sec": {"type": "number"},
                    "image_prompt": {"type": "string"},
                    "motion": {
                        "type": "string",
                        "enum": [
                            "kenburns_zoom_in",
                            "kenburns_zoom_out",
                            "kenburns_pan_left",
                            "kenburns_pan_right",
                            "static",
                        ],
                    },
                },
                "required": ["start_sec", "end_sec", "image_prompt", "motion"],
                "additionalProperties": False,
            },
        },
        "hashtags": {"type": "array", "items": {"type": "string"}},
        "seo_title": {"type": "string"},
        "seo_description": {"type": "string"},
    },
    "required": [
        "hook",
        "narration",
        "cta",
        "captions",
        "shots",
        "hashtags",
        "seo_title",
        "seo_description",
    ],
    "additionalProperties": False,
}


def generate_shorts_script(
    llm: LLMClient,
    topic: Topic,
    *,
    duration_sec: int = 55,
) -> ShortsScript:
    user_prompt = f"""다음 주제로 {duration_sec}초 분량의 YouTube Shorts 스크립트를 작성하라.

[주제]
- 제목: {topic.title}
- 분석 축: {topic.angle}
- 구조적 압력: {topic.structural_pressure}
- 임계점/현재성: {topic.why_now}
- 시청자 훅: {topic.audience_hook}

[출력 구조]
- hook: 0~5초 첫 문장. 시청자가 "어?" 하게 만드는 한 문장. 데이터 한 개나 반직관적 사실로 시작.
- narration: hook을 포함한 전체 한국어 내레이션. 일상어로 쓸 것. "~입니다" 종결.
  분량은 한국어 발화 기준 약 {duration_sec * 4}자 내외 (TTS 1분 ≈ 240자).
- cta: 마지막 1~2초. 채널 톤에 맞는 차분한 액션 (예: "다음 편에서 이어집니다." "프로필에서 시리즈 확인.").
- captions: 화면 자막 분할. 한 자막 최대 18자, 1.5~3초 단위. 시간은 0초부터 누적.
- shots: 비주얼 컷 계획. 6~10초 단위로 분할. 각 컷마다:
    image_prompt: 영어로 작성된 사진/일러스트 생성 프롬프트. 9:16 세로, 시네마틱, 한국어 텍스트 포함 금지(자막은 별도).
    motion: kenburns_zoom_in / kenburns_zoom_out / kenburns_pan_left / kenburns_pan_right / static 중 선택.
- hashtags: 8~12개. #심리역사학 #현대사회 #트렌드분석 같은 채널 공통 + 주제별 태그.
- seo_title: 100자 이내 YouTube 제목. 검색·CTR 친화.
- seo_description: 4~6줄 한국어 설명. 첫 줄에 훅 한 문장, 마지막에 해시태그.

[제약]
- captions[i].end_sec == captions[i+1].start_sec 로 연속
- shots[i].end_sec == shots[i+1].start_sec 로 연속
- captions[-1].end_sec ≈ {duration_sec}, shots[-1].end_sec ≈ {duration_sec}
"""

    result = llm.parse_json(
        system=PSYCHOHISTORY_FRAMING,
        user=user_prompt,
        schema=_SCRIPT_SCHEMA,
        max_tokens=8192,
    )

    return ShortsScript(
        topic=topic.title,
        hook=result["hook"],
        narration=result["narration"],
        cta=result["cta"],
        captions=[Caption(**c) for c in result["captions"]],
        shots=[ShotPlan(**s) for s in result["shots"]],
        hashtags=result["hashtags"],
        seo_title=result["seo_title"],
        seo_description=result["seo_description"],
    )
