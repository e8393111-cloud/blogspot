from __future__ import annotations

import hashlib
from pathlib import Path
from urllib.parse import quote

import httpx

from .base import ImageAdapter


class PollinationsAdapter(ImageAdapter):
    """Free image generation via pollinations.ai. No API key required."""

    BASE = "https://image.pollinations.ai/prompt"

    def __init__(self, model: str = "flux", timeout: float = 120.0):
        self._model = model
        self._timeout = timeout

    def generate(
        self,
        prompt: str,
        output_path: Path,
        *,
        width: int = 1080,
        height: int = 1920,
        seed: int | None = None,
    ) -> Path:
        if seed is None:
            seed = int(hashlib.sha256(prompt.encode()).hexdigest(), 16) % 2**31
        url = (
            f"{self.BASE}/{quote(prompt)}"
            f"?width={width}&height={height}&seed={seed}"
            f"&model={self._model}&nologo=true&enhance=true"
        )
        output_path.parent.mkdir(parents=True, exist_ok=True)
        with httpx.stream("GET", url, timeout=self._timeout, follow_redirects=True) as r:
            r.raise_for_status()
            with output_path.open("wb") as f:
                for chunk in r.iter_bytes():
                    f.write(chunk)
        return output_path
