"""Draws public/og.png, the card shown when someone shares a link to the site.

    python scripts/og.py

1200 x 630 (the size iMessage, Slack, WhatsApp and X all crop well), from the site's light tokens
and the real Home screenshot in public/screens/home.webp. Re-run it when either changes. Uses
Segoe UI from Windows; elsewhere pass font paths with --regular and --bold.
"""

import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
# The light theme's roles in src/styles/tokens.css.
BACKGROUND = "#F8F7F2"
PRIMARY = "#245C4F"
PRIMARY_SUBTLE = "#E5F1EB"
TEXT = "#202923"
TEXT_SECONDARY = "#55605A"
SURFACE = "#FFFFFF"


def logo(draw: ImageDraw.ImageDraw, x: int, y: int, size: int) -> None:
    """The favicon's mark: a rounded square, a house and a tick."""
    draw.rounded_rectangle((x, y, x + size, y + size), radius=size // 4, fill=PRIMARY)
    s = size / 32
    house = [(16, 7), (26, 15), (26, 25), (6, 25), (6, 15)]
    draw.polygon([(x + px * s, y + py * s) for px, py in house], fill=SURFACE)
    tick = [(11, 17.5), (14.5, 21), (21, 14)]
    draw.line([(x + px * s, y + py * s) for px, py in tick], fill=PRIMARY, width=round(2.6 * s), joint="curve")


def wrap(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, width: int) -> list[str]:
    lines, line = [], ""
    for word in text.split():
        candidate = f"{line} {word}".strip()
        if draw.textlength(candidate, font=font) <= width:
            line = candidate
        else:
            lines.append(line)
            line = word
    return lines + [line]


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--regular", default="C:/Windows/Fonts/segoeui.ttf")
    parser.add_argument("--bold", default="C:/Windows/Fonts/segoeuib.ttf")
    args = parser.parse_args()

    card = Image.new("RGB", (W, H), BACKGROUND)
    draw = ImageDraw.Draw(card)

    # A soft disc behind the phone, like the hero's glow.
    draw.ellipse((700, 40, 1260, 600), fill=PRIMARY_SUBTLE)

    # The phone: the real screenshot in a dark rounded border, running off the bottom edge.
    shot = Image.open("public/screens/home.webp").convert("RGB")
    phone_w = 300
    shot = shot.resize((phone_w, round(shot.height * phone_w / shot.width)), Image.LANCZOS)
    phone_h = 560
    frame = Image.new("RGB", (phone_w + 24, phone_h + 24), TEXT)
    frame.paste(shot.crop((0, 0, phone_w, phone_h)), (12, 12))
    mask = Image.new("L", frame.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, *frame.size), radius=44, fill=255)
    card.paste(frame, (820, 70), mask)

    x = 80
    logo(draw, x, 84, 56)
    draw.text((x + 76, 90), "HomeMind", font=ImageFont.truetype(args.bold, 38), fill=TEXT)

    title = ImageFont.truetype(args.bold, 60)
    y = 196
    for line in wrap(draw, "Know what’s at home before you shop.", title, 700):
        draw.text((x, y), line, font=title, fill=TEXT)
        y += 72

    body = ImageFont.truetype(args.regular, 28)
    y += 18
    for line in wrap(draw, "What you have, what goes off first, and what to buy.", body, 720):
        draw.text((x, y), line, font=body, fill=TEXT_SECONDARY)
        y += 40

    pill = ImageFont.truetype(args.bold, 24)
    label = "Coming soon to iPhone"
    pw = draw.textlength(label, font=pill) + 48
    draw.rounded_rectangle((x, 440, x + pw, 488), radius=24, fill=PRIMARY)
    draw.text((x + 24, 448), label, font=pill, fill=SURFACE)

    target = Path("public/og.png")
    card.save(target, optimize=True)
    print(f"{target}  {W}x{H}  {target.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
