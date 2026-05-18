"""Visual themes for the card renderer.

A theme is just a bag of colors + a couple of layout knobs. Add your own
by extending THEMES; the renderer looks them up by name.
"""

from __future__ import annotations

from dataclasses import dataclass, field


@dataclass(frozen=True)
class Theme:
    name: str
    bg: tuple[int, int, int]
    bg_alt: tuple[int, int, int]          # background for body slides
    surface: tuple[int, int, int]         # accent block / chip background
    text: tuple[int, int, int]            # primary text
    subtext: tuple[int, int, int]         # secondary text
    accent: tuple[int, int, int]          # accent color (rules, tag text)
    accent_text: tuple[int, int, int]     # text on top of `surface`
    footer: tuple[int, int, int]          # page number / handle color
    cover_headline_weight: str = "bold"
    body_headline_weight: str = "bold"


THEMES: dict[str, Theme] = {
    # warm, editorial
    "ivory": Theme(
        name="ivory",
        bg=(244, 241, 234),
        bg_alt=(249, 246, 240),
        surface=(31, 28, 26),
        text=(31, 28, 26),
        subtext=(110, 102, 94),
        accent=(193, 90, 50),
        accent_text=(244, 241, 234),
        footer=(150, 142, 132),
    ),
    # high-contrast dark
    "ink": Theme(
        name="ink",
        bg=(17, 18, 23),
        bg_alt=(24, 26, 33),
        surface=(245, 246, 250),
        text=(245, 246, 250),
        subtext=(160, 165, 178),
        accent=(120, 200, 255),
        accent_text=(17, 18, 23),
        footer=(110, 115, 128),
    ),
    # fresh, friendly
    "mint": Theme(
        name="mint",
        bg=(238, 248, 244),
        bg_alt=(244, 251, 248),
        surface=(15, 92, 74),
        text=(13, 46, 38),
        subtext=(72, 110, 100),
        accent=(20, 138, 110),
        accent_text=(238, 248, 244),
        footer=(120, 150, 140),
    ),
}

DEFAULT_THEME = "ivory"


def get_theme(name: str | None) -> Theme:
    if not name:
        return THEMES[DEFAULT_THEME]
    return THEMES.get(name.strip().lower(), THEMES[DEFAULT_THEME])
