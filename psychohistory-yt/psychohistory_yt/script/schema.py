from __future__ import annotations

from dataclasses import dataclass, field


@dataclass
class Caption:
    start_sec: float
    end_sec: float
    text: str


@dataclass
class ShotPlan:
    start_sec: float
    end_sec: float
    image_prompt: str
    motion: str = "kenburns_zoom_in"


@dataclass
class ShortsScript:
    topic: str
    hook: str
    narration: str
    cta: str
    captions: list[Caption] = field(default_factory=list)
    shots: list[ShotPlan] = field(default_factory=list)
    hashtags: list[str] = field(default_factory=list)
    seo_title: str = ""
    seo_description: str = ""

    @property
    def full_narration(self) -> str:
        return self.narration

    def total_duration(self) -> float:
        if self.captions:
            return self.captions[-1].end_sec
        if self.shots:
            return self.shots[-1].end_sec
        return 0.0
