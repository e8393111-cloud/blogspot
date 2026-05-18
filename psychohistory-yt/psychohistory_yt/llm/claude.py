from __future__ import annotations

import json
import logging
from typing import Any

import anthropic

from .base import LLMClient

logger = logging.getLogger(__name__)


class ClaudeClient(LLMClient):
    def __init__(self, api_key: str, model: str = "claude-sonnet-4-6"):
        self._client = anthropic.Anthropic(api_key=api_key)
        self._model = model

    def _system_blocks(
        self, system: str | list[dict[str, Any]], cache: bool
    ) -> list[dict[str, Any]]:
        if isinstance(system, str):
            block: dict[str, Any] = {"type": "text", "text": system}
            if cache:
                block["cache_control"] = {"type": "ephemeral"}
            return [block]
        if cache and system:
            blocks = [dict(b) for b in system]
            blocks[-1]["cache_control"] = {"type": "ephemeral"}
            return blocks
        return list(system)

    def complete(
        self,
        *,
        system: str | list[dict[str, Any]],
        user: str,
        max_tokens: int = 4096,
        cache_system: bool = True,
    ) -> str:
        response = self._client.messages.create(
            model=self._model,
            max_tokens=max_tokens,
            system=self._system_blocks(system, cache_system),
            messages=[{"role": "user", "content": user}],
        )
        usage = response.usage
        logger.info(
            "claude.complete tokens in=%d out=%d cache_read=%d cache_write=%d",
            usage.input_tokens,
            usage.output_tokens,
            getattr(usage, "cache_read_input_tokens", 0) or 0,
            getattr(usage, "cache_creation_input_tokens", 0) or 0,
        )
        return "".join(b.text for b in response.content if b.type == "text")

    def parse_json(
        self,
        *,
        system: str | list[dict[str, Any]],
        user: str,
        schema: dict[str, Any],
        max_tokens: int = 4096,
        cache_system: bool = True,
    ) -> Any:
        response = self._client.messages.create(
            model=self._model,
            max_tokens=max_tokens,
            system=self._system_blocks(system, cache_system),
            messages=[{"role": "user", "content": user}],
            output_config={"format": {"type": "json_schema", "schema": schema}},
        )
        text = next(b.text for b in response.content if b.type == "text")
        return json.loads(text)
