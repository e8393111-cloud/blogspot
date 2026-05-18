"""Higgsfield image/video adapters.

Two surfaces:

1. `HiggsfieldHTTPAdapter` — for headless production use. Requires a paid
   Higgsfield API key. The exact REST endpoints are not publicly documented
   at the time of writing; this class records what models to call and leaves
   the wire-format glue to be filled in when the user has an account.

2. `HiggsfieldMCPBridge` — for development inside a Claude Code session.
   Calls the Higgsfield MCP tools directly via the parent agent. Not usable
   from a standalone Python process.

Both are OPTIONAL. The default pipeline runs on PollinationsAdapter +
ffmpeg Ken Burns motion, no paid account needed.
"""
from __future__ import annotations

from pathlib import Path

from .base import ImageAdapter


class HiggsfieldHTTPAdapter(ImageAdapter):
    def __init__(
        self,
        api_key: str,
        api_base: str = "https://api.higgsfield.ai",
        image_model: str = "nano_banana_2",
    ):
        if not api_key:
            raise ValueError("HIGGSFIELD_API_KEY required for paid Higgsfield adapter")
        self._api_key = api_key
        self._api_base = api_base.rstrip("/")
        self._image_model = image_model

    def generate(
        self,
        prompt: str,
        output_path: Path,
        *,
        width: int = 1080,
        height: int = 1920,
        seed: int | None = None,
    ) -> Path:
        raise NotImplementedError(
            "HiggsfieldHTTPAdapter is a stub. Implement against confirmed REST endpoints "
            "once a paid account is available."
        )
