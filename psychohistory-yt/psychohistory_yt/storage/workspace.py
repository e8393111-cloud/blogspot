from __future__ import annotations

import json
from dataclasses import asdict, is_dataclass
from datetime import datetime
from pathlib import Path
from typing import Any


def _to_jsonable(obj: Any) -> Any:
    if is_dataclass(obj):
        return {k: _to_jsonable(v) for k, v in asdict(obj).items()}
    if isinstance(obj, list):
        return [_to_jsonable(x) for x in obj]
    if isinstance(obj, dict):
        return {k: _to_jsonable(v) for k, v in obj.items()}
    if isinstance(obj, Path):
        return str(obj)
    return obj


class Workspace:
    def __init__(self, root: Path):
        self.root = root
        self.images_dir = root / "images"
        self.audio_dir = root / "audio"
        self.subtitles_dir = root / "subtitles"
        self.output_dir = root / "output"
        for d in (self.images_dir, self.audio_dir, self.subtitles_dir, self.output_dir):
            d.mkdir(parents=True, exist_ok=True)

    @classmethod
    def new(cls, base: Path, slug: str) -> "Workspace":
        ts = datetime.utcnow().strftime("%Y%m%d-%H%M%S")
        return cls(base / f"{ts}-{slug}")

    def save_json(self, name: str, data: Any) -> Path:
        path = self.root / name
        path.write_text(
            json.dumps(_to_jsonable(data), ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        return path

    def load_json(self, name: str) -> Any:
        return json.loads((self.root / name).read_text(encoding="utf-8"))

    def image_path(self, index: int) -> Path:
        return self.images_dir / f"shot_{index:03d}.png"

    def narration_path(self) -> Path:
        return self.audio_dir / "narration.mp3"

    def captions_path(self) -> Path:
        return self.subtitles_dir / "captions.ass"

    def final_video_path(self) -> Path:
        return self.output_dir / "final.mp4"
