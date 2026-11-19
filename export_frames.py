#!/usr/bin/env python3
"""Re-export the Harry Potter scroll-film frames from master.mp4.

Pipeline (updated 19 Nov 2026 — the old version downscaled to 1280x720,
which made the film look blurry on fullscreen/retina screens):
  - source: master.mp4 (1920x1080, 24fps, 37.5s)
  - sample to 15fps -> 563 frames (f0001..f0563), same timing as film.ts
  - keep native 1920x1080 (no downscale), WebP quality 85
  - mild unsharp mask (luma 0.35) — the AI-generated source is soft by
    nature; this recovers crispness without halos
  - poster.webp from the first frame, same treatment

Requires ffmpeg with libwebp (ffmpeg -encoders | grep libwebp).
Run from the repo root:  python3 export_frames.py
"""
import subprocess
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent
MASTER = REPO / "master.mp4"
OUT = REPO / "public" / "film"

FRAMES = 563          # must match totalFrames in src/data/film.ts
QUALITY = 85
UNSHARP = "unsharp=5:5:0.35:5:5:0.0"


def run(cmd: list[str]) -> None:
    print("+", " ".join(cmd))
    subprocess.run(cmd, check=True)


def main() -> None:
    if not MASTER.exists():
        sys.exit(f"missing {MASTER}")
    OUT.mkdir(parents=True, exist_ok=True)

    run([
        "ffmpeg", "-y", "-v", "error",
        "-i", str(MASTER),
        "-vf", f"fps=15,{UNSHARP}",
        "-c:v", "libwebp", "-quality", str(QUALITY),
        "-compression_level", "6",
        str(OUT / "f%04d.webp"),
    ])
    run([
        "ffmpeg", "-y", "-v", "error",
        "-ss", "0", "-i", str(MASTER),
        "-frames:v", "1",
        "-vf", UNSHARP,
        "-c:v", "libwebp", "-quality", str(QUALITY),
        str(OUT / "poster.webp"),
    ])

    frames = sorted(OUT.glob("f*.webp"))
    assert len(frames) == FRAMES, f"expected {FRAMES} frames, got {len(frames)}"
    size_mb = sum(f.stat().st_size for f in OUT.glob("*.webp")) / (1024 * 1024)
    print(f"\n✓ Exported {len(frames)} frames at 15fps as 1920x1080 WebP (quality {QUALITY})")
    print(f"✓ Total size of public/film/: {size_mb:.2f} MB")


if __name__ == "__main__":
    main()
