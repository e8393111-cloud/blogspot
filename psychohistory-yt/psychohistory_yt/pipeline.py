from __future__ import annotations

import logging
import re
from pathlib import Path

from .compose import compose_shorts, write_ass
from .config import Settings
from .llm import ClaudeClient
from .script import ShortsScript, generate_shorts_script
from .storage import Workspace
from .topics import Topic
from .visual.pollinations import PollinationsAdapter
from .voice.edge_tts_adapter import EdgeTTSAdapter
from .voice.elevenlabs import ElevenLabsAdapter

logger = logging.getLogger(__name__)


def _slug(text: str) -> str:
    s = re.sub(r"[^\w\s가-힣-]", "", text, flags=re.UNICODE).strip()
    s = re.sub(r"\s+", "-", s)
    return s[:40] or "untitled"


def build_llm(settings: Settings) -> ClaudeClient:
    return ClaudeClient(
        api_key=settings.anthropic_api_key, model=settings.anthropic_model
    )


def build_voice(settings: Settings):
    if settings.voice_adapter == "elevenlabs":
        return ElevenLabsAdapter(
            api_key=settings.elevenlabs_api_key or "",
            voice_id=settings.elevenlabs_voice_id or "",
            model_id=settings.elevenlabs_model_id,
        )
    return EdgeTTSAdapter(voice=settings.edge_tts_voice)


def build_image(settings: Settings):
    if settings.visual_image_adapter == "higgsfield":
        from .visual.higgsfield import HiggsfieldHTTPAdapter

        return HiggsfieldHTTPAdapter(
            api_key=settings.higgsfield_api_key or "",
            api_base=settings.higgsfield_api_base,
            image_model=settings.higgsfield_image_model,
        )
    return PollinationsAdapter(model=settings.pollinations_model)


def produce(
    settings: Settings,
    topic: Topic,
    *,
    duration_sec: int | None = None,
) -> tuple[Workspace, ShortsScript]:
    duration_sec = duration_sec or settings.default_short_duration_sec
    workspace = Workspace.new(settings.workspace_dir, _slug(topic.title))
    logger.info("workspace=%s", workspace.root)

    llm = build_llm(settings)
    script = generate_shorts_script(llm, topic, duration_sec=duration_sec)
    workspace.save_json("topic.json", topic)
    workspace.save_json("script.json", script)

    image_adapter = build_image(settings)
    image_paths: list[Path] = []
    for i, shot in enumerate(script.shots):
        out = workspace.image_path(i)
        logger.info("generating image %d/%d", i + 1, len(script.shots))
        image_adapter.generate(shot.image_prompt, out)
        image_paths.append(out)

    voice = build_voice(settings)
    voice.synthesize(script.full_narration, workspace.narration_path())

    write_ass(script.captions, workspace.captions_path())

    compose_shorts(
        script=script,
        images=image_paths,
        narration=workspace.narration_path(),
        captions_ass=workspace.captions_path(),
        output=workspace.final_video_path(),
    )
    return workspace, script
