"""Card-news image renderer — a small FastAPI service.

POST /render
    body: {"slides": [...], "theme": "ivory", "handle": "@yourhandle"}
    auth: if RENDER_API_KEY is set, requests must send  X-Api-Key: <key>
    returns: {"token": "...", "count": N,
              "images": ["https://host/img/<token>/1.png", ...],
              "caption": "...", "hashtags": [...]}   # caption/hashtags echoed if provided

GET /img/{token}/{name}.png   -> the rendered PNG (publicly fetchable; needed by Instagram)
GET /health                   -> {"ok": true, "fonts": true}

Rendered images live in memory with a TTL (default 2h) — fine for a single free-tier
instance feeding a Make.com scenario that publishes within seconds.
"""

from __future__ import annotations

import os
import secrets
import time

from fastapi import FastAPI, Header, HTTPException, Request
from fastapi.responses import JSONResponse, Response
from pydantic import BaseModel, Field

from cards import encode, render_slides
from fonts import fonts_available
from theme import THEMES

app = FastAPI(title="cardnews-renderer", version="1.0.0")

RENDER_API_KEY = os.environ.get("RENDER_API_KEY", "").strip()
PUBLIC_BASE_URL = os.environ.get("PUBLIC_BASE_URL", "").strip().rstrip("/")
TTL_SECONDS = int(os.environ.get("RENDER_TTL_SECONDS", "7200"))
MAX_SLIDES = int(os.environ.get("RENDER_MAX_SLIDES", "20"))

# token -> {"ts": float, "images": list[bytes]}
_STORE: dict[str, dict] = {}


def _gc() -> None:
    now = time.time()
    stale = [t for t, v in _STORE.items() if now - v["ts"] > TTL_SECONDS]
    for t in stale:
        _STORE.pop(t, None)


def _base_url(request: Request) -> str:
    if PUBLIC_BASE_URL:
        return PUBLIC_BASE_URL
    # request.base_url already has a trailing slash
    return str(request.base_url).rstrip("/")


def _check_auth(x_api_key: str | None) -> None:
    if RENDER_API_KEY and (x_api_key or "") != RENDER_API_KEY:
        raise HTTPException(status_code=401, detail="invalid or missing X-Api-Key")


class Slide(BaseModel):
    role: str = "body"
    tag: str | None = None
    headline: str | None = None
    subhead: str | None = None
    body: str | None = None
    handle: str | None = None


class RenderRequest(BaseModel):
    slides: list[Slide] = Field(..., min_length=1)
    theme: str | None = None
    handle: str | None = None
    image_format: str = "jpeg"  # "jpeg" (Instagram requires JPEG) or "png"
    caption: str | None = None
    hashtags: list[str] | None = None


@app.get("/")
def index() -> dict:
    return {
        "service": "cardnews-renderer",
        "endpoints": ["POST /render", "GET /img/{token}/{n}.jpg", "GET /health"],
        "themes": list(THEMES.keys()),
    }


@app.get("/health")
def health() -> dict:
    return {"ok": True, "fonts": fonts_available(), "themes": list(THEMES.keys())}


@app.post("/render")
def render(req: RenderRequest, request: Request, x_api_key: str | None = Header(default=None)) -> JSONResponse:
    _check_auth(x_api_key)
    _gc()

    if len(req.slides) > MAX_SLIDES:
        raise HTTPException(status_code=413, detail=f"too many slides (max {MAX_SLIDES})")

    handle = (req.handle or "").strip()
    slides: list[dict] = []
    for s in req.slides:
        d = s.model_dump()
        if handle and not (d.get("handle") or "").strip():
            d["handle"] = handle
        slides.append(d)

    try:
        images = render_slides(slides, req.theme)
    except RuntimeError as e:  # missing fonts, etc.
        raise HTTPException(status_code=500, detail=str(e))

    encoded = [encode(im, req.image_format) for im in images]
    ext = encoded[0][1] if encoded else "jpg"
    mime = encoded[0][2] if encoded else "image/jpeg"
    token = secrets.token_urlsafe(12)
    _STORE[token] = {"ts": time.time(), "images": [b for b, _, _ in encoded], "ext": ext, "mime": mime}

    base = _base_url(request)
    urls = [f"{base}/img/{token}/{i}.{ext}" for i in range(1, len(images) + 1)]
    return JSONResponse(
        {
            "token": token,
            "count": len(images),
            "images": urls,
            "caption": req.caption,
            "hashtags": req.hashtags,
            "expires_in": TTL_SECONDS,
        }
    )


@app.get("/img/{token}/{name}")
def get_image(token: str, name: str) -> Response:
    _gc()
    entry = _STORE.get(token)
    if not entry:
        raise HTTPException(status_code=404, detail="unknown or expired token")
    stem = name.split(".")[0]
    if not stem.isdigit():
        raise HTTPException(status_code=400, detail="bad image name")
    idx = int(stem)
    if not (1 <= idx <= len(entry["images"])):
        raise HTTPException(status_code=404, detail="image index out of range")
    return Response(
        content=entry["images"][idx - 1],
        media_type=entry.get("mime", "image/jpeg"),
        headers={"Cache-Control": f"public, max-age={TTL_SECONDS}"},
    )
