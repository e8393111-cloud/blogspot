from __future__ import annotations

from pathlib import Path

from ..script.schema import Caption


def _ass_time(sec: float) -> str:
    h = int(sec // 3600)
    m = int((sec % 3600) // 60)
    s = sec % 60
    return f"{h}:{m:02d}:{s:05.2f}"


def write_ass(captions: list[Caption], output_path: Path, video_w: int = 1080, video_h: int = 1920) -> Path:
    header = f"""[Script Info]
ScriptType: v4.00+
PlayResX: {video_w}
PlayResY: {video_h}
WrapStyle: 2
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Noto Sans CJK KR,84,&H00FFFFFF,&H000000FF,&H00000000,&H80000000,1,0,0,0,100,100,0,0,1,6,0,2,80,80,320,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    lines = []
    for c in captions:
        text = c.text.replace("\n", "\\N")
        lines.append(
            f"Dialogue: 0,{_ass_time(c.start_sec)},{_ass_time(c.end_sec)},Default,,0,0,0,,{text}"
        )
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(header + "\n".join(lines) + "\n", encoding="utf-8")
    return output_path
