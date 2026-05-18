from __future__ import annotations

import json
import logging
from pathlib import Path

import click
from rich.console import Console
from rich.table import Table

from .config import Settings
from .pipeline import build_llm, produce
from .storage import Workspace
from .topics import Topic, discover_topics
from .upload import YouTubeUploader

console = Console()


def _setup_logging(verbose: bool) -> None:
    logging.basicConfig(
        level=logging.DEBUG if verbose else logging.INFO,
        format="%(asctime)s %(name)s %(levelname)s %(message)s",
    )


@click.group()
@click.option("--verbose", "-v", is_flag=True)
def main(verbose: bool) -> None:
    _setup_logging(verbose)


@main.command("topics")
@click.option("--count", default=5)
@click.option("--context", default=None, help="Optional context for topic discovery")
@click.option("--save", type=click.Path(path_type=Path), default=None)
def topics_cmd(count: int, context: str | None, save: Path | None) -> None:
    settings = Settings.load()
    llm = build_llm(settings)
    topics = discover_topics(llm, count=count, context=context)

    table = Table(show_lines=True)
    table.add_column("#", style="cyan")
    table.add_column("Title", style="bold")
    table.add_column("Angle")
    table.add_column("Why now")
    for i, t in enumerate(topics, 1):
        table.add_row(str(i), t.title, t.angle, t.why_now)
    console.print(table)

    if save:
        save.write_text(
            json.dumps([t.__dict__ for t in topics], ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        console.print(f"[green]Saved to {save}")


@main.command("produce")
@click.option("--topic-title", required=True)
@click.option("--angle", default="")
@click.option("--structural-pressure", default="")
@click.option("--why-now", default="")
@click.option("--audience-hook", default="")
@click.option("--duration", type=int, default=None)
def produce_cmd(
    topic_title: str,
    angle: str,
    structural_pressure: str,
    why_now: str,
    audience_hook: str,
    duration: int | None,
) -> None:
    settings = Settings.load()
    topic = Topic(
        title=topic_title,
        angle=angle,
        structural_pressure=structural_pressure,
        why_now=why_now,
        audience_hook=audience_hook,
    )
    workspace, script = produce(settings, topic, duration_sec=duration)
    console.print(f"[green]Done: {workspace.final_video_path()}")
    console.print(f"[cyan]SEO title:[/] {script.seo_title}")


@main.command("upload")
@click.option("--workspace", type=click.Path(exists=True, path_type=Path), required=True)
@click.option("--privacy", default=None, help="Override privacy status")
def upload_cmd(workspace: Path, privacy: str | None) -> None:
    settings = Settings.load()
    ws = Workspace(workspace)
    script_data = ws.load_json("script.json")

    uploader = YouTubeUploader(
        client_secret_file=settings.youtube_client_secret_file,
        token_file=settings.youtube_token_file,
    )
    result = uploader.upload(
        video_path=ws.final_video_path(),
        title=script_data["seo_title"],
        description=script_data["seo_description"],
        tags=script_data["hashtags"],
        category_id=settings.youtube_default_category,
        privacy_status=privacy or settings.youtube_default_privacy,
    )
    console.print(f"[green]Uploaded:[/] {result.url}")


@main.command("auth-youtube")
def auth_youtube_cmd() -> None:
    settings = Settings.load()
    uploader = YouTubeUploader(
        client_secret_file=settings.youtube_client_secret_file,
        token_file=settings.youtube_token_file,
    )
    uploader._creds()
    console.print(f"[green]Token saved to {settings.youtube_token_file}")


@main.command("run")
@click.option("--count", default=1, help="Number of topics to pick and produce")
@click.option("--upload", is_flag=True, help="Auto-upload after produce")
def run_cmd(count: int, upload: bool) -> None:
    settings = Settings.load()
    llm = build_llm(settings)
    topics = discover_topics(llm, count=count)
    for t in topics[:count]:
        console.print(f"[bold]Producing:[/] {t.title}")
        workspace, script = produce(settings, t)
        console.print(f"[green]→ {workspace.final_video_path()}")
        if upload:
            uploader = YouTubeUploader(
                client_secret_file=settings.youtube_client_secret_file,
                token_file=settings.youtube_token_file,
            )
            result = uploader.upload(
                video_path=workspace.final_video_path(),
                title=script.seo_title,
                description=script.seo_description,
                tags=script.hashtags,
                category_id=settings.youtube_default_category,
                privacy_status=settings.youtube_default_privacy,
            )
            console.print(f"[green]Uploaded:[/] {result.url}")
