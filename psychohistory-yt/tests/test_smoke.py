"""Smoke tests — verify the package imports and core types are wired correctly.
No network calls, no external services."""
from __future__ import annotations


def test_imports() -> None:
    from psychohistory_yt import __version__
    from psychohistory_yt.config import Settings
    from psychohistory_yt.llm import ClaudeClient, LLMClient
    from psychohistory_yt.topics import Topic
    from psychohistory_yt.script import ShortsScript, Caption, ShotPlan
    from psychohistory_yt.voice import EdgeTTSAdapter, ElevenLabsAdapter, TTSAdapter
    from psychohistory_yt.visual import PollinationsAdapter, ImageAdapter
    from psychohistory_yt.storage import Workspace

    assert __version__


def test_shortsscript_duration() -> None:
    from psychohistory_yt.script import Caption, ShortsScript, ShotPlan

    script = ShortsScript(
        topic="t",
        hook="h",
        narration="n",
        cta="c",
        captions=[Caption(0, 3.0, "a"), Caption(3.0, 5.5, "b")],
        shots=[ShotPlan(0, 5.5, "p")],
    )
    assert script.total_duration() == 5.5


def test_pollinations_url_shape() -> None:
    from psychohistory_yt.visual.pollinations import PollinationsAdapter

    adapter = PollinationsAdapter()
    assert adapter._model == "flux"


def test_caption_writer_creates_valid_ass(tmp_path) -> None:
    from psychohistory_yt.compose.captions import write_ass
    from psychohistory_yt.script import Caption

    out = tmp_path / "test.ass"
    write_ass([Caption(0, 2.5, "안녕")], out)
    content = out.read_text(encoding="utf-8")
    assert "[Script Info]" in content
    assert "안녕" in content
