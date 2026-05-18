from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Any


class LLMClient(ABC):
    @abstractmethod
    def complete(
        self,
        *,
        system: str | list[dict[str, Any]],
        user: str,
        max_tokens: int = 4096,
        cache_system: bool = True,
    ) -> str:
        ...

    @abstractmethod
    def parse_json(
        self,
        *,
        system: str | list[dict[str, Any]],
        user: str,
        schema: dict[str, Any],
        max_tokens: int = 4096,
        cache_system: bool = True,
    ) -> Any:
        ...
