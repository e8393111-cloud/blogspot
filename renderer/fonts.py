"""Font loading helpers.

By default we look for a CJK-capable font so Korean text renders.
In Docker we install `fonts-noto-cjk` (see Dockerfile). For local dev,
either install Noto Sans CJK / Pretendard yourself or set the env vars:

    CARD_FONT_REGULAR=/abs/path/to/regular.(ttf|otf|ttc)
    CARD_FONT_BOLD=/abs/path/to/bold.(ttf|otf|ttc)
"""

from __future__ import annotations

import os
from functools import lru_cache

from PIL import ImageFont

# Candidate font paths, in priority order. `.ttc` collections need an index.
_REGULAR_CANDIDATES: list[tuple[str, int]] = [
    (os.environ.get("CARD_FONT_REGULAR", ""), 0),
    ("/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc", 0),
    ("/usr/share/fonts/opentype/noto/NotoSansCJKkr-Regular.otf", 0),
    ("/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttc", 0),
    ("/usr/share/fonts/truetype/nanum/NanumGothic.ttf", 0),
    ("/usr/share/fonts/truetype/pretendard/Pretendard-Regular.otf", 0),
    ("/usr/share/fonts/opentype/pretendard/Pretendard-Regular.otf", 0),
    ("/Library/Fonts/AppleSDGothicNeo.ttc", 0),
    ("/System/Library/Fonts/AppleSDGothicNeo.ttc", 0),
    ("C:\\Windows\\Fonts\\malgun.ttf", 0),
    # last-resort CJK fallbacks that ship with many Debian/Ubuntu boxes
    ("/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc", 0),
    ("/usr/share/fonts/truetype/wqy/wqy-microhei.ttc", 0),
    ("/usr/share/fonts/opentype/ipafont-gothic/ipag.ttf", 0),
]

_BOLD_CANDIDATES: list[tuple[str, int]] = [
    (os.environ.get("CARD_FONT_BOLD", ""), 0),
    ("/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc", 0),
    ("/usr/share/fonts/opentype/noto/NotoSansCJKkr-Bold.otf", 0),
    ("/usr/share/fonts/truetype/noto/NotoSansCJK-Bold.ttc", 0),
    ("/usr/share/fonts/truetype/nanum/NanumGothicBold.ttf", 0),
    ("/usr/share/fonts/truetype/pretendard/Pretendard-Bold.otf", 0),
    ("/usr/share/fonts/opentype/pretendard/Pretendard-Bold.otf", 0),
    ("/Library/Fonts/AppleSDGothicNeo.ttc", 2),
    ("/System/Library/Fonts/AppleSDGothicNeo.ttc", 2),
    ("C:\\Windows\\Fonts\\malgunbd.ttf", 0),
]


def _first_existing(candidates: list[tuple[str, int]]) -> tuple[str, int] | None:
    for path, index in candidates:
        if path and os.path.isfile(path):
            return path, index
    return None


@lru_cache(maxsize=128)
def load_font(weight: str, size: int) -> ImageFont.FreeTypeFont:
    """weight: 'regular' | 'bold'."""
    chosen = _first_existing(_BOLD_CANDIDATES if weight == "bold" else _REGULAR_CANDIDATES)
    if chosen is None:
        # Last resort: regular candidates for bold too, then Pillow's default.
        chosen = _first_existing(_REGULAR_CANDIDATES)
    if chosen is None:
        raise RuntimeError(
            "No CJK-capable font found. Install `fonts-noto-cjk` or set "
            "CARD_FONT_REGULAR / CARD_FONT_BOLD environment variables."
        )
    path, index = chosen
    return ImageFont.truetype(path, size=size, index=index)


def fonts_available() -> bool:
    return _first_existing(_REGULAR_CANDIDATES) is not None
