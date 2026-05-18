from __future__ import annotations

import asyncio
from pathlib import Path

from .base import TTSAdapter


class EdgeTTSAdapter(TTSAdapter):
    def __init__(self, voice: str = "ko-KR-SunHiNeural", rate: str = "+0%"):
        self._voice = voice
        self._rate = rate

    def synthesize(self, text: str, output_path: Path) -> Path:
        import edge_tts

        async def _run() -> None:
            communicate = edge_tts.Communicate(text, self._voice, rate=self._rate)
            await communicate.save(str(output_path))

        output_path.parent.mkdir(parents=True, exist_ok=True)
        asyncio.run(_run())
        return output_path
