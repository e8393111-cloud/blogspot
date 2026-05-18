from __future__ import annotations

import shutil
import subprocess
from pathlib import Path

from ..script.schema import ShortsScript, ShotPlan


def _ensure_ffmpeg() -> str:
    binary = shutil.which("ffmpeg")
    if not binary:
        raise RuntimeError("ffmpeg not found in PATH. Install via 'apt install ffmpeg' or 'brew install ffmpeg'.")
    return binary


_MOTION_FILTERS = {
    "kenburns_zoom_in": "zoompan=z='min(zoom+0.0015,1.2)':d=DURATIONFRAMES:s={W}x{H}:fps=30",
    "kenburns_zoom_out": "zoompan=z='if(eq(on,1),1.2,max(1.0,zoom-0.0015))':d=DURATIONFRAMES:s={W}x{H}:fps=30",
    "kenburns_pan_left": "zoompan=z=1.15:x='iw*0.5-(iw/zoom/2)+on*2':y='ih*0.5-(ih/zoom/2)':d=DURATIONFRAMES:s={W}x{H}:fps=30",
    "kenburns_pan_right": "zoompan=z=1.15:x='iw*0.5-(iw/zoom/2)-on*2':y='ih*0.5-(ih/zoom/2)':d=DURATIONFRAMES:s={W}x{H}:fps=30",
    "static": "scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},fps=30",
}


def _shot_clip(
    ffmpeg: str,
    image: Path,
    shot: ShotPlan,
    output: Path,
    width: int,
    height: int,
) -> Path:
    duration = shot.end_sec - shot.start_sec
    frames = max(1, int(duration * 30))
    filter_template = _MOTION_FILTERS.get(shot.motion, _MOTION_FILTERS["static"])
    vf = (
        f"scale={width * 2}:{height * 2}:force_original_aspect_ratio=increase,"
        f"crop={width * 2}:{height * 2},"
        + filter_template.format(W=width, H=height).replace("DURATIONFRAMES", str(frames))
    )
    cmd = [
        ffmpeg, "-y", "-loop", "1", "-i", str(image),
        "-t", f"{duration:.3f}",
        "-vf", vf,
        "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "veryfast",
        "-r", "30",
        str(output),
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    return output


def compose_shorts(
    script: ShortsScript,
    images: list[Path],
    narration: Path,
    captions_ass: Path,
    output: Path,
    *,
    width: int = 1080,
    height: int = 1920,
    workdir: Path | None = None,
) -> Path:
    if len(images) != len(script.shots):
        raise ValueError(
            f"Image count ({len(images)}) does not match shot count ({len(script.shots)})"
        )
    ffmpeg = _ensure_ffmpeg()
    workdir = workdir or output.parent / "_compose_tmp"
    workdir.mkdir(parents=True, exist_ok=True)

    clip_paths: list[Path] = []
    for i, (image, shot) in enumerate(zip(images, script.shots)):
        clip = workdir / f"shot_{i:03d}.mp4"
        _shot_clip(ffmpeg, image, shot, clip, width, height)
        clip_paths.append(clip)

    concat_list = workdir / "concat.txt"
    concat_list.write_text(
        "\n".join(f"file '{p.resolve()}'" for p in clip_paths) + "\n",
        encoding="utf-8",
    )
    video_only = workdir / "video.mp4"
    subprocess.run(
        [ffmpeg, "-y", "-f", "concat", "-safe", "0", "-i", str(concat_list),
         "-c", "copy", str(video_only)],
        check=True, capture_output=True,
    )

    output.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        [
            ffmpeg, "-y",
            "-i", str(video_only),
            "-i", str(narration),
            "-vf", f"subtitles={captions_ass}",
            "-c:v", "libx264", "-preset", "medium", "-crf", "20",
            "-c:a", "aac", "-b:a", "192k",
            "-shortest",
            str(output),
        ],
        check=True, capture_output=True,
    )
    return output
