from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()


def _required(key: str) -> str:
    val = os.getenv(key)
    if not val:
        raise RuntimeError(f"Missing required env var: {key}")
    return val


def _bool(key: str, default: bool = False) -> bool:
    raw = os.getenv(key)
    if raw is None:
        return default
    return raw.lower() in {"1", "true", "yes", "y", "on"}


@dataclass(frozen=True)
class Settings:
    anthropic_api_key: str
    anthropic_model: str

    voice_adapter: str
    edge_tts_voice: str
    elevenlabs_api_key: str | None
    elevenlabs_voice_id: str | None
    elevenlabs_model_id: str

    visual_image_adapter: str
    visual_motion_adapter: str
    pollinations_model: str
    higgsfield_api_key: str | None
    higgsfield_api_base: str
    higgsfield_image_model: str
    higgsfield_video_model: str

    youtube_client_secret_file: Path
    youtube_token_file: Path
    youtube_default_category: str
    youtube_default_privacy: str

    workspace_dir: Path
    default_language: str
    default_short_duration_sec: int

    @classmethod
    def load(cls) -> "Settings":
        return cls(
            anthropic_api_key=_required("ANTHROPIC_API_KEY"),
            anthropic_model=os.getenv("ANTHROPIC_MODEL", "claude-sonnet-4-6"),
            voice_adapter=os.getenv("VOICE_ADAPTER", "edge_tts"),
            edge_tts_voice=os.getenv("EDGE_TTS_VOICE", "ko-KR-SunHiNeural"),
            elevenlabs_api_key=os.getenv("ELEVENLABS_API_KEY"),
            elevenlabs_voice_id=os.getenv("ELEVENLABS_VOICE_ID"),
            elevenlabs_model_id=os.getenv("ELEVENLABS_MODEL_ID", "eleven_multilingual_v2"),
            visual_image_adapter=os.getenv("VISUAL_IMAGE_ADAPTER", "pollinations"),
            visual_motion_adapter=os.getenv("VISUAL_MOTION_ADAPTER", "kenburns"),
            pollinations_model=os.getenv("POLLINATIONS_MODEL", "flux"),
            higgsfield_api_key=os.getenv("HIGGSFIELD_API_KEY"),
            higgsfield_api_base=os.getenv("HIGGSFIELD_API_BASE", "https://api.higgsfield.ai"),
            higgsfield_image_model=os.getenv("HIGGSFIELD_IMAGE_MODEL", "nano_banana_2"),
            higgsfield_video_model=os.getenv("HIGGSFIELD_VIDEO_MODEL", "kling2_6"),
            youtube_client_secret_file=Path(
                os.getenv("YOUTUBE_CLIENT_SECRET_FILE", "secrets/client_secret.json")
            ),
            youtube_token_file=Path(
                os.getenv("YOUTUBE_TOKEN_FILE", "secrets/youtube_token.json")
            ),
            youtube_default_category=os.getenv("YOUTUBE_DEFAULT_CATEGORY", "27"),
            youtube_default_privacy=os.getenv("YOUTUBE_DEFAULT_PRIVACY", "private"),
            workspace_dir=Path(os.getenv("WORKSPACE_DIR", "workspace")),
            default_language=os.getenv("DEFAULT_LANGUAGE", "ko"),
            default_short_duration_sec=int(os.getenv("DEFAULT_SHORT_DURATION_SEC", "55")),
        )
