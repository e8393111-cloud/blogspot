from __future__ import annotations

from abc import ABC, abstractmethod
from pathlib import Path


class ImageAdapter(ABC):
    @abstractmethod
    def generate(
        self,
        prompt: str,
        output_path: Path,
        *,
        width: int = 1080,
        height: int = 1920,
        seed: int | None = None,
    ) -> Path:
        ...
