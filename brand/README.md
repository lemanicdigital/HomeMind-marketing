# Homesky logo

**The sky window.** An arched window, the shape of home, whose round head is the dome of the sky,
with the sun rising on its sill. It is the morning the app greets you with: Home at breakfast, when
the day's list is written. One idea, two colours, readable at 16 px.

## Files

| File                                                           | Use                                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `homesky-symbol.svg`                                           | The mark on light backgrounds. The master.                                 |
| `homesky-symbol-reversed.svg`                                  | The mark on blueberry or dark backgrounds.                                 |
| `homesky-symbol-black.svg`, `-white`                           | One colour: print, engraving, embossing, fax-grade copies.                 |
| `homesky-horizontal.svg`                                       | Mark and wordmark, on light backgrounds.                                   |
| `homesky-horizontal-reversed.svg`                              | Mark and wordmark, on blueberry or dark backgrounds.                       |
| `homesky-horizontal-black.svg`, `-white`                       | Lockup in one colour.                                                      |
| `homesky-app-icon.svg`, `-dark.svg`                            | The iOS icon's artwork; `homesky-app-icon-1024.png` is the App Store size. |
| `../public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | The website's icons.                                                       |

`make-brand.py` writes every SVG here from one geometry, and `HomeMind-IOS/scripts/make-icons.py`
draws the app's PNG icons (light, dark, tinted, Android, splash) from the same numbers. Change the
mark in both or in neither.

## Construction

On a 256 grid: an outer arch 144 wide with a radius-72 head, a frame 24 thick on every side, the
outer foot corners softened to radius 12, and the sun a half disc of radius 34 standing on the sill.
Only arcs and straight lines; no strokes, no masks, no live text.

## Colour

| Role      | HEX       | RGB           | Where                                         |
| --------- | --------- | ------------- | --------------------------------------------- |
| Blueberry | `#3D41C6` | 61, 65, 198   | The frame on light; the app's primary.        |
| Saffron   | `#F5B731` | 245, 183, 49  | The sun, always. The app's one accent.        |
| Ink       | `#14164A` | 20, 22, 74    | The wordmark on light.                        |
| Lavender  | `#A3A6FF` | 163, 166, 255 | The frame on dark (the dark theme's primary). |

The app icon adds a blueberry sky (`#5A5EDC` → `#23267A`) and glass that brightens towards the sun
(`#23267A` → `#7F83F2`). For print, have the printer match the HEX values; CMYK and Pantone
references are not set yet.

## Type

The wordmark is Inter SemiBold, lowercase, tracked −1 %, outlined to paths. Inter is under the SIL
Open Font Licence, which allows use in a logo. In running text the product's name is written
"Homesky", with a capital H.

## Space and size

- **Clear space**: the width of the frame's opening (96 units on the 256 grid, about two-thirds of
  the mark's width) on every side. Nothing else enters it.
- **Smallest size**: the symbol at 16 px (it was drawn for it); the horizontal lockup at 96 px wide.
- The wordmark's baseline sits on the window's foot; keep the lockup's proportions, never rebuild it.

## Don't

- Recolour the sun, or give it rays, a face or a glow.
- Fill the window with a photograph or a pattern.
- Outline, stretch, rotate, or add shadows or bevels.
- Set the wordmark in another typeface, or capitalise it in the logo.
- Put the blueberry mark on a mid-tone background; use the reversed or one-colour version.

## Clearance

The mark was checked against a library of 1,400 logos and drawn from scratch; that is not a
trademark search. Before filing or printing at scale, have a professional search run in the EUIPO
and Swissreg registers (and WIPO for other markets).
