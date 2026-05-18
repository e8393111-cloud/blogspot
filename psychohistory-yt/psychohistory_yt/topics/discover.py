from __future__ import annotations

from dataclasses import dataclass
from typing import Any

from ..llm.base import LLMClient
from .prompts import PSYCHOHISTORY_FRAMING


@dataclass(frozen=True)
class Topic:
    title: str
    angle: str
    structural_pressure: str
    why_now: str
    audience_hook: str


_TOPIC_SCHEMA: dict[str, Any] = {
    "type": "object",
    "properties": {
        "topics": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "title": {"type": "string"},
                    "angle": {"type": "string"},
                    "structural_pressure": {"type": "string"},
                    "why_now": {"type": "string"},
                    "audience_hook": {"type": "string"},
                },
                "required": [
                    "title",
                    "angle",
                    "structural_pressure",
                    "why_now",
                    "audience_hook",
                ],
                "additionalProperties": False,
            },
        }
    },
    "required": ["topics"],
    "additionalProperties": False,
}


def discover_topics(
    llm: LLMClient,
    *,
    count: int = 5,
    context: str | None = None,
) -> list[Topic]:
    user_prompt = (
        f"오늘 한국 사회·경제·기술 흐름에서 심리역사학 5대 축 중 최소 2개가 동시에 작동하는 "
        f"Shorts 주제 후보 {count}개를 발굴하라.\n\n"
        "각 주제는 다음을 포함:\n"
        "- title: 60자 이내 한국어 제목 (Shorts 썸네일에 들어갈 수 있는 정도)\n"
        "- angle: 어떤 분석 축이 작동하는가 (예: '집단 행동 통계 + 인센티브 균형 이동')\n"
        "- structural_pressure: 어떤 느린 변수가 작동하는가 (1문장)\n"
        "- why_now: 왜 지금이 다른가 / 어떤 임계점 신호가 있는가 (1문장)\n"
        "- audience_hook: 시청자(20-40대 한국 도시 거주자)가 '내 일상과 직결'이라고 느낄 포인트 (1문장)"
    )
    if context:
        user_prompt += f"\n\n[참고 맥락]\n{context}"

    result = llm.parse_json(
        system=PSYCHOHISTORY_FRAMING,
        user=user_prompt,
        schema=_TOPIC_SCHEMA,
        max_tokens=4096,
    )
    return [Topic(**t) for t in result["topics"]]
