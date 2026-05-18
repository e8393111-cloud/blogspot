from __future__ import annotations

from pathlib import Path

import httpx

from .base import TTSAdapter


class ElevenLabsAdapter(TTSAdapter):
    def __init__(
        self,
        api_key: str,
        voice_id: str,
        model_id: str = "eleven_multilingual_v2",
        timeout: float = 60.0,
    ):
        if not api_key:
            raise ValueError("ElevenLabs API key required")
        if not voice_id:
            raise ValueError("ElevenLabs voice_id required")
        self._api_key = api_key
        self._voice_id = voice_id
        self._model_id = model_id
        self._timeout = timeout

    def synthesize(self, text: str, output_path: Path) -> Path:
        url = f"https://api.elevenlabs.io/v1/text-to-speech/{self._voice_id}"
        headers = {
            "xi-api-key": self._api_key,
            "Content-Type": "application/json",
            "Accept": "audio/mpeg",
        }
        payload = {
            "text": text,
            "model_id": self._model_id,
            "voice_settings": {"stability": 0.5, "similarity_boost": 0.75},
        }
        output_path.parent.mkdir(parents=True, exist_ok=True)
        with httpx.stream(
            "POST", url, headers=headers, json=payload, timeout=self._timeout
        ) as r:
            r.raise_for_status()
            with output_path.open("wb") as f:
                for chunk in r.iter_bytes():
                    f.write(chunk)
        return output_path
