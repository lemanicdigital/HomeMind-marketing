"""Writes the Homesky logo masters in this folder. Run: python brand/make-brand.py path/to/Inter-SemiBold.ttf

Needs `pip install fonttools` and Inter SemiBold (SIL Open Font Licence, which allows logo use;
https://github.com/rsms/inter). The wordmark is outlined to paths, so the SVGs depend on no font.
The app's raster icons are drawn from the same geometry by HomeMind-IOS/scripts/make-icons.py.
"""
import sys
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

HERE = Path(__file__).parent
BERRY_300, BERRY_400, BERRY_500, BERRY_600, BERRY_800, BERRY_900 = (
    "#A3A6FF", "#7F83F2", "#5A5EDC", "#3D41C6", "#23267A", "#14164A")
SAFFRON = "#F5B731"
NIGHT, NIGHT_SKY = "#0D0F1F", "#1D1C45"

# The sky window on a 256 grid, centred: an outer arch x 56–200 with a radius-72 head and a flat foot
# at y 212 (corners softened, r 12); a frame 24 thick, so the glass is x 80–176 with a radius-48 head
# and the sill at y 188; the sun a half disc of radius 34 standing on the sill.
FRAME = ("M56 116A72 72 0 0 1 200 116V200A12 12 0 0 1 188 212H68A12 12 0 0 1 56 200Z"
         "M80 188H176V116A48 48 0 0 0 80 116Z")
GLASS = "M80 188H176V116A48 48 0 0 0 80 116Z"
SUN = "M94 188A34 34 0 0 1 162 188Z"


def svg(w, h, body):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" '
            f'role="img"><title>Homesky</title>{body}</svg>\n')


def mark(frame, sun, glass=None):
    inside = f'<path fill="{glass}" d="{GLASS}"/>' if glass else ""
    return inside + f'<path fill="{frame}" fill-rule="evenodd" d="{FRAME}"/><path fill="{sun}" d="{SUN}"/>'


def app_tile(top, bottom, frame, glass, rx=0, scale=0.88):
    """The app icon: a sky gradient, the window larger on it, the sky seen through the glass."""
    off = 128 * (1 - scale)
    return (f'<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="256" gradientUnits="userSpaceOnUse">'
            f'<stop offset="0" stop-color="{top}"/><stop offset="1" stop-color="{bottom}"/></linearGradient>'
            f'<linearGradient id="glass" x1="0" y1="68" x2="0" y2="188" gradientUnits="userSpaceOnUse">'
            f'<stop offset="0" stop-color="{glass[0]}"/><stop offset="1" stop-color="{glass[1]}"/></linearGradient>'
            f'</defs><rect width="256" height="256" rx="{rx}" fill="url(#sky)"/>'
            f'<g transform="translate({off:g} {off:g}) scale({scale})">{mark(frame, SAFFRON, "url(#glass)")}</g>')


def wordmark(font_path, size, fill, tracking=-0.01):
    """'homesky' in Inter SemiBold, outlined, baseline at y 0. Returns (svg body, width)."""
    font = TTFont(font_path)
    glyphs, cmap, scale = font.getGlyphSet(), font.getBestCmap(), size / font["head"].unitsPerEm
    x, parts = 0.0, []
    for ch in "homesky":
        glyph = glyphs[cmap[ord(ch)]]
        pen = SVGPathPen(glyphs)
        glyph.draw(TransformPen(pen, (scale, 0, 0, -scale, x, 0)))
        parts.append(f'<path fill="{fill}" d="{pen.getCommands()}"/>')
        x += glyph.width * scale + tracking * size
    return "".join(parts), x - tracking * size


def main(font_path):
    files = {
        "homesky-symbol": (256, mark(BERRY_600, SAFFRON)),
        "homesky-symbol-reversed": (256, mark("#FFFFFF", SAFFRON)),
        "homesky-symbol-black": (256, mark("#000000", "#000000")),
        "homesky-symbol-white": (256, mark("#FFFFFF", "#FFFFFF")),
        "homesky-app-icon": (256, app_tile(BERRY_500, BERRY_800, "#FFFFFF", (BERRY_800, BERRY_400))),
        "homesky-app-icon-dark": (256, app_tile(NIGHT_SKY, NIGHT, BERRY_300, (NIGHT, BERRY_800))),
    }
    for name, (w, body) in files.items():
        (HERE / f"{name}.svg").write_text(svg(w, 256, body), encoding="utf-8", newline="\n")
    # The favicon is the app icon with rounded corners (browsers don't mask) and the window larger.
    favicon = app_tile(BERRY_500, BERRY_800, "#FFFFFF", (BERRY_800, BERRY_400), rx=56, scale=0.96)
    (HERE.parent / "public" / "favicon.svg").write_text(svg(256, 256, favicon), encoding="utf-8", newline="\n")

    # Lockups: the word's baseline on the window's foot, 32 units (four-thirds of the frame) from it.
    for suffix, frame, sun, ink in (("", BERRY_600, SAFFRON, BERRY_900), ("-reversed", "#FFFFFF", SAFFRON, "#FFFFFF"),
                                    ("-black", "#000000", "#000000", "#000000"),
                                    ("-white", "#FFFFFF", "#FFFFFF", "#FFFFFF")):
        text, width = wordmark(font_path, 132, ink)
        body = mark(frame, sun) + f'<g transform="translate(232 212)">{text}</g>'
        (HERE / f"homesky-horizontal{suffix}.svg").write_text(
            svg(int(232 + width + 12), 256, body), encoding="utf-8", newline="\n")


if __name__ == "__main__":
    main(sys.argv[1])
