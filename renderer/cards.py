"""Render a list of card-news "slides" (dicts) into Instagram-sized PNG images.

The slide schema mirrors what the Claude prompt produces (see prompts/cardnews_system.md):

    {"role": "cover", "tag": "...", "headline": "...", "subhead": "...", "handle": "@x"}
    {"role": "body",  "headline": "...", "body": "..."}
    {"role": "cta",   "headline": "...", "body": "...", "handle": "@x"}

Output: 1080x1350 (4:5) PNGs — Instagram's tallest feed ratio.
"""

from __future__ import annotations

import io
import re

from PIL import Image, ImageDraw

from fonts import load_font
from theme import Theme, get_theme

# Canvas
W, H = 1080, 1350
MARGIN = 96
CONTENT_W = W - 2 * MARGIN

# Token regex: keep Latin/number/symbol runs together; CJK & other chars break freely.
_WORD = r"A-Za-z0-9@#%&_/+．.\-’'"
_TOKEN_RE = re.compile(rf"[{_WORD}]+|[^{_WORD}\s]|\s+")
# Punctuation that should never start a wrapped line — it hugs the preceding text.
_TIGHT_LEADING = set(",.!?;:)]}…·、。」』〕》”’%")


def _tokens(text: str) -> list[str]:
    return _TOKEN_RE.findall(text)


def _glue_orphan_punct(lines: list[str]) -> list[str]:
    """Pull leading punctuation off the front of a line onto the previous line."""
    out = list(lines)
    i = 1
    while i < len(out):
        ln = out[i]
        moved = ""
        while ln and ln[0] in _TIGHT_LEADING:
            moved += ln[0]
            ln = ln[1:].lstrip()
        if moved:
            out[i - 1] = out[i - 1].rstrip() + moved
            out[i] = ln
        i += 1
    out = [ln for ln in out if ln] or [""]
    return out


def _line_height(font, line_spacing: float) -> float:
    ascent, descent = font.getmetrics()
    return (ascent + descent) * line_spacing


def wrap_text(draw: ImageDraw.ImageDraw, text: str, font, max_width: float) -> list[str]:
    text = " ".join((text or "").split())
    if not text:
        return [""]

    def w(s: str) -> float:
        return draw.textlength(s, font=font)

    def hard_split(token: str, cur: str, lines: list[str]) -> str:
        for ch in token:
            if cur and w(cur + ch) > max_width:
                lines.append(cur)
                cur = ch
            else:
                cur += ch
        return cur

    lines: list[str] = []
    cur = ""
    for tok in _tokens(text):
        if tok.isspace():
            if cur and w(cur + " ") <= max_width:
                cur += " "
            continue
        if not cur:
            cur = tok if w(tok) <= max_width else hard_split(tok, "", lines)
            continue
        if w(cur + tok) <= max_width:
            cur += tok
        else:
            lines.append(cur.rstrip())
            cur = tok if w(tok) <= max_width else hard_split(tok, "", lines)
    if cur.strip():
        lines.append(cur.rstrip())
    return _glue_orphan_punct(lines or [""])


def fit_text(
    draw: ImageDraw.ImageDraw,
    text: str,
    weight: str,
    max_width: float,
    max_height: float,
    *,
    start_size: int,
    min_size: int = 24,
    line_spacing: float = 1.18,
) -> tuple[object, list[str], float]:
    """Shrink the font until the wrapped text fits the box; ellipsize if it still won't."""
    size = start_size
    while size >= min_size:
        font = load_font(weight, size)
        lines = wrap_text(draw, text, font, max_width)
        lh = _line_height(font, line_spacing)
        if lh * len(lines) <= max_height:
            return font, lines, lh
        size -= 2
    font = load_font(weight, min_size)
    lines = wrap_text(draw, text, font, max_width)
    lh = _line_height(font, line_spacing)
    max_lines = max(1, int(max_height // lh))
    if len(lines) > max_lines:
        lines = lines[:max_lines]
        last = lines[-1]
        while last and draw.textlength(last + "…", font=font) > max_width:
            last = last[:-1]
        lines[-1] = (last + "…") if last else "…"
    return font, lines, lh


def draw_lines(
    draw: ImageDraw.ImageDraw,
    lines: list[str],
    font,
    x: float,
    y: float,
    fill,
    lh: float,
    *,
    align: str = "left",
    box_width: float | None = None,
) -> float:
    cy = y
    for ln in lines:
        if align == "center" and box_width is not None:
            lx = x + (box_width - draw.textlength(ln, font=font)) / 2
        else:
            lx = x
        draw.text((lx, cy), ln, font=font, fill=fill)
        cy += lh
    return cy


def _chip(draw: ImageDraw.ImageDraw, x: float, y: float, text: str, *, bg, fg, size: int) -> float:
    """Draw a rounded "pill" chip; return its height."""
    font = load_font("bold", size)
    pad_x, pad_y = int(size * 0.7), int(size * 0.42)
    tw = draw.textlength(text, font=font)
    h = _line_height(font, 1.0) + 2 * pad_y
    draw.rounded_rectangle([x, y, x + tw + 2 * pad_x, y + h], radius=h / 2, fill=bg)
    draw.text((x + pad_x, y + pad_y), text, font=font, fill=fg)
    return h


def _footer(draw: ImageDraw.ImageDraw, *, index: int, total: int, handle: str, color) -> None:
    font = load_font("bold", 30)
    y = H - MARGIN - 28
    draw.text((MARGIN, y), f"{index:02d} / {total:02d}", font=font, fill=color)
    handle = (handle or "").strip()
    if handle:
        hw = draw.textlength(handle, font=font)
        draw.text((W - MARGIN - hw, y), handle, font=font, fill=color)


def render_slide(slide: dict, theme: Theme, index: int, total: int) -> Image.Image:
    role = (slide.get("role") or "body").lower()
    handle = slide.get("handle") or ""

    if role == "cover":
        bg = theme.bg
    elif role == "cta":
        bg = theme.surface
    else:
        bg = theme.bg_alt

    img = Image.new("RGB", (W, H), bg)
    d = ImageDraw.Draw(img)

    headline = (slide.get("headline") or "").strip()
    body = (slide.get("body") or "").strip()

    if role == "cover":
        text_color, sub_color = theme.text, theme.subtext
        y = MARGIN + 36
        tag = (slide.get("tag") or "").strip()
        if tag:
            h = _chip(d, MARGIN, y, tag, bg=theme.surface, fg=theme.accent_text, size=34)
            y += h + 52
        else:
            y += 52

        f, lines, lh = fit_text(
            d, headline, theme.cover_headline_weight, CONTENT_W, 600,
            start_size=132, min_size=54, line_spacing=1.1,
        )
        y = draw_lines(d, lines, f, MARGIN, y, text_color, lh)

        y += 30
        d.rectangle([MARGIN, y, MARGIN + 132, y + 10], fill=theme.accent)
        y += 46

        subhead = (slide.get("subhead") or "").strip() or body
        if subhead:
            sf, slines, slh = fit_text(
                d, subhead, "regular", CONTENT_W, 260,
                start_size=46, min_size=28, line_spacing=1.32,
            )
            draw_lines(d, slines, sf, MARGIN, y, sub_color, slh)

        _footer(d, index=index, total=total, handle=handle, color=theme.footer)

    elif role == "cta":
        text_color = theme.accent_text
        accent = theme.accent
        # vertically-ish centered block
        f, lines, lh = fit_text(
            d, headline, "bold", CONTENT_W, 500,
            start_size=112, min_size=48, line_spacing=1.12,
        )
        block_h = lh * len(lines)
        body_lines: list[str] = []
        bf = blh = None
        if body:
            bf, body_lines, blh = fit_text(
                d, body, "regular", CONTENT_W, 320,
                start_size=44, min_size=28, line_spacing=1.34,
            )
            block_h += 56 + blh * len(body_lines)
        y = max(MARGIN + 60, (H - block_h) / 2 - 40)
        y = draw_lines(d, lines, f, MARGIN, y, text_color, lh)
        if body_lines and bf is not None and blh is not None:
            y += 24
            d.rectangle([MARGIN, y, MARGIN + 132, y + 10], fill=accent)
            y += 32
            draw_lines(d, body_lines, bf, MARGIN, y, text_color, blh)
        _footer(d, index=index, total=total, handle=handle, color=text_color)

    else:  # body
        text_color, sub_color, accent = theme.text, theme.subtext, theme.accent
        y = MARGIN + 36
        _chip(d, MARGIN, y, f"{index:02d}", bg=theme.surface, fg=theme.accent_text, size=34)
        y += _line_height(load_font("bold", 34), 1.0) + 2 * int(34 * 0.42) + 48

        f, lines, lh = fit_text(
            d, headline, theme.body_headline_weight, CONTENT_W, 280,
            start_size=80, min_size=44, line_spacing=1.14,
        )
        y = draw_lines(d, lines, f, MARGIN, y, text_color, lh)

        y += 26
        d.rectangle([MARGIN, y, MARGIN + 110, y + 8], fill=accent)
        y += 44

        if body:
            avail_h = (H - MARGIN - 70) - y
            bf, blines, blh = fit_text(
                d, body, "regular", CONTENT_W, max(avail_h, 200),
                start_size=46, min_size=26, line_spacing=1.42,
            )
            draw_lines(d, blines, bf, MARGIN, y, sub_color, blh)

        _footer(d, index=index, total=total, handle=handle, color=theme.footer)

    return img


def render_slides(slides: list[dict], theme_name: str | None = None) -> list[Image.Image]:
    theme = get_theme(theme_name)
    total = len(slides)
    out: list[Image.Image] = []
    for i, slide in enumerate(slides, start=1):
        out.append(render_slide(slide, theme, i, total))
    return out


def to_png_bytes(img: Image.Image) -> bytes:
    buf = io.BytesIO()
    img.save(buf, format="PNG", optimize=True)
    return buf.getvalue()
