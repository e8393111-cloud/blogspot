#!/usr/bin/env python3
"""Local card-news pipeline — test the whole flow without Make.com or Instagram.

Examples:
    # one RSS/Atom feed, newest 2 posts -> ./out/<slug>/{1.png,2.png,...,caption.txt}
    python pipeline/run.py --feed https://YOURBLOG.blogspot.com/feeds/posts/default --limit 2

    # a single article URL
    python pipeline/run.py --url https://example.com/some-post --theme ink --handle @yourhandle

    # just a topic line (no source article)
    python pipeline/run.py --topic "2024 청년 월세 지원 정책 핵심 정리"

Needs: ANTHROPIC_API_KEY in the environment, plus a CJK font (Linux: `fonts-noto-cjk`,
or set CARD_FONT_REGULAR / CARD_FONT_BOLD).
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path

# Reuse the renderer's drawing code directly (no HTTP needed for local runs).
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "renderer"))

import anthropic  # noqa: E402
import feedparser  # noqa: E402
import httpx  # noqa: E402

from cards import render_slides, to_png_bytes  # noqa: E402

DEFAULT_MODEL = "claude-opus-4-7"
SYSTEM_PROMPT = (ROOT / "prompts" / "cardnews_system.md").read_text(encoding="utf-8")

OUTPUT_SCHEMA = {
    "type": "object",
    "additionalProperties": False,
    "properties": {
        "slug": {"type": "string"},
        "topic": {"type": "string"},
        "slides": {
            "type": "array",
            "items": {
                "type": "object",
                "additionalProperties": False,
                "properties": {
                    "role": {"type": "string", "enum": ["cover", "body", "cta"]},
                    "tag": {"type": "string"},
                    "headline": {"type": "string"},
                    "subhead": {"type": "string"},
                    "body": {"type": "string"},
                    "handle": {"type": "string"},
                },
                "required": ["role", "headline"],
            },
        },
        "caption": {"type": "string"},
        "hashtags": {"type": "array", "items": {"type": "string"}},
    },
    "required": ["slug", "topic", "slides", "caption", "hashtags"],
}

_TAG_RE = re.compile(r"<[^>]+>")
_SCRIPT_RE = re.compile(r"<(script|style)[^>]*>.*?</\1>", re.I | re.S)
_SLUG_RE = re.compile(r"[^a-z0-9]+")


def html_to_text(html: str, limit: int = 12000) -> str:
    html = _SCRIPT_RE.sub(" ", html)
    text = _TAG_RE.sub(" ", html)
    text = re.sub(r"&nbsp;", " ", text)
    text = re.sub(r"&amp;", "&", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text[:limit]


def fetch_url_text(url: str) -> str:
    r = httpx.get(url, follow_redirects=True, timeout=30, headers={"User-Agent": "cardnews-bot/1.0"})
    r.raise_for_status()
    return html_to_text(r.text)


def slugify(value: str) -> str:
    value = _SLUG_RE.sub("-", value.lower()).strip("-")
    return value[:40] or "cardnews"


def call_claude(client: anthropic.Anthropic, model: str, user_text: str) -> dict:
    resp = client.messages.create(
        model=model,
        max_tokens=4000,
        thinking={"type": "adaptive"},
        output_config={
            "effort": "medium",
            "format": {"type": "json_schema", "schema": OUTPUT_SCHEMA},
        },
        system=[{"type": "text", "text": SYSTEM_PROMPT, "cache_control": {"type": "ephemeral"}}],
        messages=[{"role": "user", "content": user_text}],
    )
    text = next((b.text for b in resp.content if b.type == "text"), "")
    text = text.strip()
    if text.startswith("```"):  # belt-and-suspenders if a fence ever sneaks in
        text = re.sub(r"^```[a-zA-Z]*\n|\n```$", "", text).strip()
    data = json.loads(text)
    usage = resp.usage
    print(
        f"  claude: in={usage.input_tokens} out={usage.output_tokens} "
        f"cache_read={getattr(usage, 'cache_read_input_tokens', 0)}",
        file=sys.stderr,
    )
    return data


def build_user_text(*, topic: str | None, source_url: str | None, body: str | None, handle: str | None) -> str:
    parts: list[str] = []
    if handle:
        parts.append(f"HANDLE: {handle}")
    if topic and not body:
        parts.append(f"TOPIC: {topic}")
    if source_url:
        parts.append(f"SOURCE_URL: {source_url}")
    if body:
        parts.append("ARTICLE:\n" + body)
    return "\n\n".join(parts) if parts else "TOPIC: 오늘의 이야기"


def save_cardset(out_dir: Path, data: dict, theme: str | None, handle: str | None) -> Path:
    slides = data.get("slides") or []
    if handle:
        for s in slides:
            s.setdefault("handle", handle)
    slug = slugify(data.get("slug") or data.get("topic") or "cardnews")
    target = out_dir / slug
    target.mkdir(parents=True, exist_ok=True)

    images = render_slides(slides, theme)
    for i, im in enumerate(images, start=1):
        (target / f"{i}.png").write_bytes(to_png_bytes(im))

    caption = (data.get("caption") or "").strip()
    hashtags = data.get("hashtags") or []
    (target / "caption.txt").write_text(
        caption + ("\n\n" + " ".join(hashtags) if hashtags else "") + "\n", encoding="utf-8"
    )
    (target / "meta.json").write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"  -> {target}  ({len(images)} slides)")
    return target


def main() -> int:
    ap = argparse.ArgumentParser(description="Local Instagram card-news generator")
    src = ap.add_mutually_exclusive_group(required=True)
    src.add_argument("--feed", help="RSS/Atom feed URL (e.g. a Blogger feed)")
    src.add_argument("--url", help="single article URL")
    src.add_argument("--topic", help="one-line topic, no source article")
    ap.add_argument("--limit", type=int, default=1, help="how many feed entries to process (with --feed)")
    ap.add_argument("--theme", default="ivory", help="ivory | ink | mint")
    ap.add_argument("--handle", default=os.environ.get("IG_HANDLE", ""), help="@yourhandle for the CTA slide")
    ap.add_argument("--model", default=os.environ.get("CARDNEWS_MODEL", DEFAULT_MODEL))
    ap.add_argument("--out", default="out", help="output directory")
    args = ap.parse_args()

    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("ERROR: set ANTHROPIC_API_KEY", file=sys.stderr)
        return 2

    client = anthropic.Anthropic()
    out_dir = Path(args.out)
    handle = args.handle.strip() or None

    jobs: list[dict] = []
    if args.topic:
        jobs.append({"topic": args.topic, "source_url": None, "body": None})
    elif args.url:
        print(f"fetching {args.url}")
        jobs.append({"topic": None, "source_url": args.url, "body": fetch_url_text(args.url)})
    else:  # --feed
        print(f"reading feed {args.feed}")
        parsed = feedparser.parse(args.feed)
        for entry in parsed.entries[: max(1, args.limit)]:
            link = entry.get("link")
            content = ""
            if entry.get("content"):
                content = entry["content"][0].get("value", "")
            content = content or entry.get("summary", "")
            body = html_to_text(content) if content else (fetch_url_text(link) if link else "")
            jobs.append({"topic": entry.get("title"), "source_url": link, "body": body})

    if not jobs:
        print("nothing to do (empty feed?)", file=sys.stderr)
        return 1

    for job in jobs:
        title = job.get("topic") or job.get("source_url") or "(item)"
        print(f"\n• {title}")
        user_text = build_user_text(handle=handle, **job)
        data = call_claude(client, args.model, user_text)
        save_cardset(out_dir, data, args.theme, handle)

    print("\ndone.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
