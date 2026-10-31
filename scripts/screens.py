"""Turns raw iPhone screenshots into the images the "A look at the app" section serves.

    python scripts/screens.py home=PATH item=PATH inventory=PATH shopping=PATH

Each is cropped below the status bar (the clock and battery date a screenshot and say nothing
about the app), scaled to at most 600 px wide (2x the size the page shows it at; never enlarged,
which would add size and no detail), and saved as
WebP in public/screens/. The page sets width and height from these files' real size.
"""

import sys
from pathlib import Path

from PIL import Image

WIDTH = 600
# The status bar is 54 of an iPhone's 852 points (iPhone 14 / 15 / 16 class screens).
STATUS_BAR = 54 / 852
OUT = Path("public/screens")


def convert(name: str, source: Path) -> None:
    image = Image.open(source).convert("RGB")
    top = round(image.height * STATUS_BAR)
    image = image.crop((0, top, image.width, image.height))
    width = min(WIDTH, image.width)
    height = round(image.height * width / image.width)
    image = image.resize((width, height), Image.LANCZOS)
    OUT.mkdir(parents=True, exist_ok=True)
    target = OUT / f"{name}.webp"
    image.save(target, "WEBP", quality=80, method=6)
    print(f"{target}  {width}x{height}  {target.stat().st_size // 1024} KB")


if __name__ == "__main__":
    for argument in sys.argv[1:]:
        name, _, path = argument.partition("=")
        convert(name, Path(path))
