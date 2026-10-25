# Tokens

Every number in HomeMind comes from a token file in `src/design-system/tokens/`. Components read
them through `useTheme()` (`theme.colors.*`, `theme.spacing.*`, `theme.typography.*`, …) and never
restate them. The tables below are generated from the source, and the contrast figures are
measured — `npm run a11y:contrast` recomputes every ratio in CI (`tests/design-system/contrast.test.ts`).

- `tokens/palette.ts` is the **only** source file containing a raw hex value: `no-restricted-syntax`
  bans hex literals everywhere else, with one override for the token/theme sources and the tests
  that measure them ([contributing.md](./contributing.md#the-boundary-rules)).
- `themes/light.ts` and `themes/dark.ts` map palette entries onto **roles**. A role name says what
  a colour is for (`onPrimarySubtle`, `controlTrackOff`), never what it is (`green200`).
- Spacing, typography, radius, border, elevation, icon and layout tokens are **shared** by both
  themes; only colours change with the appearance. That is asserted in `tokens.test.ts`, so a dark
  mode can never quietly invent its own rhythm.

---

## Colour

### Starting identity

The identity is a deep, desaturated kitchen green on warm paper. These are the anchors the rest of
the palette is derived from:

| Intent            | Hex       | Where it lives                                                          |
| ----------------- | --------- | ----------------------------------------------------------------------- |
| Primary           | `#245C4F` | `palette.inkPrimary` → `primary` (light)                                |
| Primary pressed   | `#19473D` | `primaryPressed` (light)                                                |
| Primary subtle    | `#E5F1EB` | `primarySubtle` (light)                                                 |
| Accent            | `#B9E4C9` | `accent` in dark, `primaryBorder`/hover greens in light                 |
| Background        | `#F8F7F2` | `background`, `controlBackground`                                       |
| Surface           | `#FFFFFF` | `surface`                                                               |
| Surface secondary | `#F0F1EB` | `surfaceSecondary`, `neutralSubtle`                                     |
| Text primary      | `#202923` | `textPrimary`, and the base of the dark-mode `night` ramp               |
| Text secondary    | `#68736C` | `textTertiary`, `iconMuted` (light)                                     |
| Border            | `#E2E5DF` | `surfaceTertiary`, `borderSubtle`                                       |
| Success           | `#26734D` | `success`                                                               |
| Warning           | `#986116` | `warning`; `warningSubtle` text is darkened to `#7E5010` to reach 4.5:1 |
| Danger            | `#B63F3F` | `danger`                                                                |
| Info              | `#3569A8` | `info`                                                                  |

Two additions were necessary to make those anchors work as a _system_ rather than a swatch sheet:

1. An **ink ramp** (`ink50 … ink900`) so tints, borders and pressed states are derived, not
   invented per screen — and so secondary text could be darkened to `#55605A`. The brief's
   `#68736C` remains `textTertiary` and `iconMuted`, where it measures 4.60:1 on the background and
   4.93:1 on a surface, i.e. still AA.
2. A **night ramp** (`night900 … night50`) for dark mode. Dark surfaces are not black; they are the
   primary text colour pushed down (`#0C1210` background, `#161F1C` surface, `#1D2724` /
   `#26312D` raised), with the greens lightened to `#8CCDB4` / `#B9E4C9` and status hues shifted to
   tint-with-dark-text (`onSuccess` is `#0D2A1D` on `#7BCFA3`, not white on green).

### Semantic roles

75 roles, both appearances. `on*` roles are _foregrounds guaranteed on the surface named after
them_, which is what makes the contrast test possible.

| Role                | Light       | Dark        |
| ------------------- | ----------- | ----------- |
| `primary`           | `#245C4F`   | `#8CCDB4`   |
| `onPrimary`         | `#FFFFFF`   | `#0B211D`   |
| `primaryPressed`    | `#19473D`   | `#B9E4C9`   |
| `primarySubtle`     | `#E5F1EB`   | `#15382C`   |
| `onPrimarySubtle`   | `#19473D`   | `#B9E4C9`   |
| `primaryBorder`     | `#B9E4C9`   | `#35806A`   |
| `accent`            | `#B9E4C9`   | `#12342D`   |
| `onAccent`          | `#12342D`   | `#B9E4C9`   |
| `background`        | `#F8F7F2`   | `#0C1210`   |
| `surface`           | `#FFFFFF`   | `#161F1C`   |
| `surfaceSecondary`  | `#F0F1EB`   | `#1D2724`   |
| `surfaceTertiary`   | `#E2E5DF`   | `#26312D`   |
| `onBackground`      | `#202923`   | `#EDF1EC`   |
| `onSurface`         | `#202923`   | `#EDF1EC`   |
| `onSurfaceMuted`    | `#55605A`   | `#C9D2CB`   |
| `surfacePressed`    | `#F0F1EB`   | `#1D2724`   |
| `surfaceSelected`   | `#E5F1EB`   | `#1B4436`   |
| `surfaceDisabled`   | `#F0F1EB`   | `#1D2724`   |
| `overlay`           | `#2029238C` | `#000000A8` |
| `onOverlay`         | `#F8F7F2`   | `#EDF1EC`   |
| `skeleton`          | `#E2E5DF`   | `#26312D`   |
| `textPrimary`       | `#202923`   | `#EDF1EC`   |
| `textSecondary`     | `#55605A`   | `#A0ABA3`   |
| `textTertiary`      | `#68736C`   | `#8A958C`   |
| `textDisabled`      | `#8B958D`   | `#7D8880`   |
| `textLink`          | `#245C4F`   | `#8CCDB4`   |
| `textInverse`       | `#FFFFFF`   | `#202923`   |
| `borderSubtle`      | `#E2E5DF`   | `#26312D`   |
| `borderStrong`      | `#68736C`   | `#7D8880`   |
| `borderInput`       | `#7B857E`   | `#5D6D63`   |
| `borderDisabled`    | `#E2E5DF`   | `#33403A`   |
| `borderFocus`       | `#35806A`   | `#8CCDB4`   |
| `focusRing`         | `#35806A`   | `#8CCDB4`   |
| `success`           | `#26734D`   | `#7BCFA3`   |
| `onSuccess`         | `#FFFFFF`   | `#0D2A1D`   |
| `successSubtle`     | `#E4F1E9`   | `#153526`   |
| `onSuccessSubtle`   | `#26734D`   | `#7BCFA3`   |
| `successBorder`     | `#BFE3CE`   | `#2F8A5C`   |
| `warning`           | `#986116`   | `#E7B45F`   |
| `onWarning`         | `#FFFFFF`   | `#2B1E07`   |
| `warningSubtle`     | `#FBF0DC`   | `#3A2A11`   |
| `onWarningSubtle`   | `#7E5010`   | `#E7B45F`   |
| `warningBorder`     | `#F0D9AE`   | `#B87F2A`   |
| `danger`            | `#B63F3F`   | `#EE9A95`   |
| `onDanger`          | `#FFFFFF`   | `#2E1414`   |
| `dangerSubtle`      | `#FBE9E9`   | `#3B1D1D`   |
| `onDangerSubtle`    | `#B63F3F`   | `#EE9A95`   |
| `dangerBorder`      | `#EFC7C7`   | `#C45750`   |
| `info`              | `#3569A8`   | `#8CBEEF`   |
| `onInfo`            | `#FFFFFF`   | `#101F31`   |
| `infoSubtle`        | `#E6EFF8`   | `#16293D`   |
| `onInfoSubtle`      | `#3569A8`   | `#8CBEEF`   |
| `infoBorder`        | `#C4DAF1`   | `#4479B8`   |
| `neutral`           | `#55605A`   | `#C9D2CB`   |
| `onNeutral`         | `#FFFFFF`   | `#0C1210`   |
| `neutralSubtle`     | `#F0F1EB`   | `#26312D`   |
| `onNeutralSubtle`   | `#414C46`   | `#C9D2CB`   |
| `controlTrackOff`   | `#7B857E`   | `#46554E`   |
| `controlTrackOn`    | `#245C4F`   | `#57A98F`   |
| `controlThumb`      | `#FFFFFF`   | `#EDF1EC`   |
| `controlBackground` | `#F8F7F2`   | `#111816`   |
| `controlBorder`     | `#7B857E`   | `#5D6D63`   |
| `controlSelected`   | `#245C4F`   | `#8CCDB4`   |
| `controlDisabled`   | `#E2E5DF`   | `#26312D`   |
| `stepperBackground` | `#FFFFFF`   | `#1D2724`   |
| `ripple`            | `#20292329` | `#FFFFFF33` |
| `rippleOnPrimary`   | `#FFFFFF3D` | `#0B211D3D` |
| `tabBar`            | `#FFFFFF`   | `#0F1512`   |
| `tabBarBorder`      | `#E2E5DF`   | `#26312D`   |
| `tabBarActive`      | `#245C4F`   | `#8CCDB4`   |
| `tabBarInactive`    | `#68736C`   | `#7D8880`   |
| `headerBackground`  | `#F8F7F2`   | `#0C1210`   |
| `headerText`        | `#202923`   | `#EDF1EC`   |
| `iconDefault`       | `#414C46`   | `#C9D2CB`   |
| `iconMuted`         | `#68736C`   | `#A0ABA3`   |

### Reading the table

| Group    | Roles                                                                                                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand    | `primary`, `onPrimary`, `primaryPressed`, `primarySubtle`, `onPrimarySubtle`, `primaryBorder`, `accent`, `onAccent`                                                                                       |
| Layers   | `background`, `surface`, `surfaceSecondary`, `surfaceTertiary`, `onBackground`, `onSurface`, `onSurfaceMuted`, `surfacePressed`, `surfaceSelected`, `surfaceDisabled`, `overlay`, `onOverlay`, `skeleton` |
| Text     | `textPrimary`, `textSecondary`, `textTertiary`, `textDisabled`, `textLink`, `textInverse`                                                                                                                 |
| Lines    | `borderSubtle`, `borderStrong`, `borderInput`, `borderDisabled`, `borderFocus`, `focusRing`                                                                                                               |
| Status   | `success`, `onSuccess`, `successSubtle`, `onSuccessSubtle`, `successBorder` — and the same five for `warning`, `danger`, `info`, `neutral`                                                                |
| Controls | `controlTrackOff`, `controlTrackOn`, `controlThumb`, `controlBackground`, `controlBorder`, `controlSelected`, `controlDisabled`, `stepperBackground`, `ripple`, `rippleOnPrimary`                         |
| Chrome   | `tabBar`, `tabBarBorder`, `tabBarActive`, `tabBarInactive`, `headerBackground`, `headerText`, `iconDefault`, `iconMuted`                                                                                  |

Rules for using them:

- A **text** colour on a **layer**: `textPrimary` on `surface`, `textSecondary` on `background`.
  Never mix a status foreground with a different layer (`onSuccessSubtle` belongs to
  `successSubtle`).
- Inputs sit on `controlBackground` (a hairline lighter than `surface` in light mode, darker in
  dark mode) with `borderInput`. That single pairing is why every input in the app reads the same.
- Translucency is only ever produced by `withAlpha()` / `mix()` from `src/lib/color.ts` — that is
  how `overlay`, `ripple`, `successSubtle` and friends stay derivable and greppable. No component
  is allowed to write `rgba()`.
- Status fills (`success`, `warning`, `danger`, `info`) are **not** backgrounds for body text; use
  the `*Subtle` variant for a fill and the matching `on*Subtle` for its text. The solid fills exist
  for icons, badge dots, chart marks and progress fills, always with an icon and a word beside
  them.

---

## Measured contrast

Every row is computed by `tests/design-system/contrast.test.ts`, which fails if a pair drops below
its requirement. Text roles are held to 4.5:1 (WCAG AA normal text); interface, border and icon
roles to 3:1 (WCAG 1.4.11).

| Pair (foreground on background)       | Light | Dark  | Required |
| ------------------------------------- | ----- | ----- | -------- |
| `textPrimary` on `background`         | 13.96 | 16.58 | 4.5:1    |
| `textPrimary` on `surface`            | 14.97 | 14.75 | 4.5:1    |
| `textPrimary` on `surfaceSecondary`   | 13.18 | 13.45 | 4.5:1    |
| `textPrimary` on `surfaceTertiary`    | 11.77 | 11.79 | 4.5:1    |
| `textSecondary` on `background`       | 6.10  | 7.97  | 4.5:1    |
| `textSecondary` on `surface`          | 6.55  | 7.10  | 4.5:1    |
| `textSecondary` on `surfaceSecondary` | 5.76  | 6.47  | 4.5:1    |
| `textSecondary` on `surfaceTertiary`  | 5.15  | 5.67  | 4.5:1    |
| `textTertiary` on `background`        | 4.60  | 6.09  | 4.5:1    |
| `textTertiary` on `surface`           | 4.93  | 5.42  | 4.5:1    |
| `textLink` on `background`            | 7.20  | 10.37 | 4.5:1    |
| `textLink` on `surface`               | 7.72  | 9.23  | 4.5:1    |
| `onPrimary` on `primary`              | 7.72  | 9.21  | 4.5:1    |
| `onPrimary` on `primaryPressed`       | 10.45 | 12.01 | 4.5:1    |
| `onPrimarySubtle` on `primarySubtle`  | 9.01  | 9.18  | 4.5:1    |
| `onAccent` on `accent`                | 9.65  | 9.65  | 4.5:1    |
| `onSurfaceMuted` on `surface`         | 6.55  | 10.88 | 4.5:1    |
| `textInverse` on `primary`            | 7.72  | 8.20  | 4.5:1    |
| `onOverlay` on `overlay`              | 13.96 | 18.39 | 4.5:1    |
| `onSuccess` on `success`              | 5.77  | 8.27  | 4.5:1    |
| `onWarning` on `warning`              | 5.18  | 8.59  | 4.5:1    |
| `onDanger` on `danger`                | 5.57  | 7.90  | 4.5:1    |
| `onInfo` on `info`                    | 5.62  | 8.50  | 4.5:1    |
| `onSuccessSubtle` on `successSubtle`  | 4.96  | 7.20  | 4.5:1    |
| `onWarningSubtle` on `warningSubtle`  | 6.11  | 7.30  | 4.5:1    |
| `onDangerSubtle` on `dangerSubtle`    | 4.75  | 7.03  | 4.5:1    |
| `onInfoSubtle` on `infoSubtle`        | 4.83  | 7.56  | 4.5:1    |
| `onNeutralSubtle` on `neutralSubtle`  | 7.88  | 8.70  | 4.5:1    |

### Interface and non-text contrast (3:1)

| `borderInput` on `background` | 3.56 | 3.45 | 3:1 |
| `borderInput` on `surface` | 3.82 | 3.07 | 3:1 |
| `borderStrong` on `surface` | 4.93 | 4.58 | 3:1 |
| `borderStrong` on `background` | 4.60 | 5.14 | 3:1 |
| `borderFocus` on `background` | 4.40 | 10.37 | 3:1 |
| `focusRing` on `background` | 4.40 | 10.37 | 3:1 |
| `tabBarInactive` on `tabBar` | 4.93 | 5.02 | 3:1 |
| `tabBarActive` on `tabBar` | 7.72 | 10.13 | 3:1 |
| `headerText` on `headerBackground` | 13.96 | 16.58 | 3:1 |
| `iconDefault` on `surface` | 8.95 | 10.88 | 3:1 |
| `iconMuted` on `surface` | 4.93 | 7.10 | 3:1 |
| `iconMuted` on `background` | 4.60 | 7.97 | 3:1 |
| `success` on `surface` | 5.77 | 9.06 | 3:1 |
| `warning` on `surface` | 5.18 | 8.90 | 3:1 |
| `danger` on `surface` | 5.57 | 7.77 | 3:1 |
| `info` on `surface` | 5.62 | 8.60 | 3:1 |
| `primary` on `surface` | 7.72 | 9.23 | 3:1 |
| `controlBorder` on `controlBackground` | 3.56 | 3.29 | 3:1 |
| `controlSelected` on `controlBackground` | 7.20 | 9.87 | 3:1 |
| `controlTrackOn` on `surface` | 7.72 | 6.00 | 3:1 |
| `controlThumb` on `controlTrackOff` | 3.82 | 6.89 | 3:1 |

### Documented exemptions

These are deliberate and are asserted as _allowed_ by the test, not ignored by it:

| Pair                                  | Ratio      | Why it is fine                                                                                                                       |
| ------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `textDisabled` on `surface`           | 3.10 light | Disabled content is not required to meet 4.5:1; it is still 3:1+ so it stays legible, and a disabled control always keeps its label. |
| `controlThumb` on `controlTrackOn`    | 2.46 dark  | The thumb is a knob, not information; the state is carried by the track colour plus the `On`/`Off` accessibility value.              |
| `controlTrackOff` on `surface`        | 2.14 dark  | Same reasoning; the unchecked/off state is the _absence_ of colour and is named in the spoken label.                                 |
| status `*Border` on `*Subtle` fill    | 1.20 light | Decorative tint used to group an alert, not a boundary that conveys meaning alone.                                                   |
| `skeleton` on `surface`               | 1.27       | A loading shimmer is not content and never carries information.                                                                      |
| `onNeutral`                           | n/a        | Reserved for a future solid neutral fill; the neutral badge uses `onNeutralSubtle` on `neutralSubtle` (7.88 light / 8.70 dark).      |
| hairline dividers (`border.hairline`) | n/a        | A 0.33pt separator is a rendering artefact of a platform boundary, not an informational border.                                      |

---

## Typography

System fonts on purpose: SF Pro on iOS and Roboto on Android are already tuned for their platform,
need no download, and honour Dynamic Type out of the box. If a brand face is approved later it is
added in `tokens/typography.ts` (plus `expo-font` in `app/_layout.tsx`) and no screen changes.

Every role declares size, line height, weight, tracking **and** a `maxFontSizeMultiplier`, so
accessibility text sizes grow inside the layout instead of overflowing it. `Text` applies the
ceiling for you; set `allowRoleScaling` only when a role is used as display type.

| Role              | Size / line height | Weight | Tracking | Growth ceiling |
| ----------------- | ------------------ | ------ | -------- | -------------- |
| `display`         | 30 / 36            | 700    | -0.4     | ×1.25          |
| `title`           | 22 / 28            | 700    | -0.3     | ×1.35          |
| `sectionTitle`    | 18 / 24            | 600    | -0.2     | ×1.4           |
| `cardTitle`       | 16 / 22            | 600    | -0.1     | ×1.5           |
| `body`            | 16 / 24            | 400    | 0        | ×1.6           |
| `bodyEmphasis`    | 16 / 24            | 600    | 0        | ×1.6           |
| `bodySecondary`   | 15 / 21            | 400    | 0        | ×1.6           |
| `label`           | 15 / 20            | 600    | 0.1      | ×1.5           |
| `caption`         | 13 / 18            | 400    | 0.1      | ×1.8           |
| `captionEmphasis` | 13 / 18            | 600    | 0.1      | ×1.8           |
| `button`          | 16 / 20            | 600    | 0.2      | ×1.4           |
| `buttonSmall`     | 14 / 18            | 600    | 0.2      | ×1.5           |
| `numeric`         | 28 / 34            | 700    | -0.5     | ×1.2           |
| `numericMedium`   | 20 / 26            | 700    | -0.3     | ×1.3           |
| `numericSmall`    | 15 / 20            | 600    | 0        | ×1.5           |
| `tabLabel`        | 11 / 13            | 500    | 0.1      | ×1.5           |
| `badge`           | 11 / 14            | 700    | 0.2      | ×1.3           |
| `overline`        | 12 / 16            | 600    | 0.6      | ×1.6           |

Usage notes:

- `display` is reserved for the showcase/hero number; page titles use `title` under a large
  navigator header, and `sectionTitle` is the highest level inside a screen.
- `numeric`, `numericMedium`, `numericSmall` are the quantity scale — `numeric` for a quantity on a
  detail screen, `numericMedium` in a card, `numericSmall` inside a row. Tabular figures are
  enabled so quantities do not jitter while stepping.
- `overline` is the small caps-ish label above a section title or inside a badge; it is never used
  for instructions or error text.
- `caption` is the smallest size for _supporting_ copy; helper text under an input uses `label` /
  `caption` depending on density, and required-information copy must never go below 13pt.

---

## Spacing, shape, elevation, icons, motion, layout

Spacing (`spacing`): the ramp is `0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64` (indexed
`spacing[0] … spacing[10]`), and every value in the scale is a multiple of 4pt.

| Alias                 | Value | Use                                              |
| --------------------- | ----- | ------------------------------------------------ |
| `micro`               | 4     | Smallest gap that still reads as intentional     |
| `inline`              | 8     | Icon-to-label, tightly coupled inline items      |
| `component`           | 12    | Between related controls inside one row or group |
| `betweenText`         | 8     | Title to the copy directly beneath it            |
| `card`                | 16    | Inner padding of cards, list rows and inputs     |
| `compact`             | 8     | Dense list rows and chips                        |
| `screenGutter`        | 20    | Left/right padding of a full-width screen        |
| `section`             | 28    | Between two sections of a page                   |
| `actionBar`           | 12    | Room above a bottom-pinned primary action        |
| `scrollBottomPadding` | 96    | Content clearance below a floating action button |

Radius (`radius`): `none` 0 · `xs` 6 · `sm` 8 · `md` 12 (inputs) · `lg` 16 (cards) · `xl` 20
(sheets, dialogs) · `xxl` 28 (hero surfaces) · `pill` 9999 (badges, chips).

Border (`border`): `hairline` 0.33 (separators — never a colour-only boundary), `thin` 1,
`medium` 1.5 (inputs), `emphasis` 2 (selected/active), `focusRing` 3, `divider` 0.33.

Elevation (`elevation`) — deliberately restrained; most hierarchy comes from `surface*` layers:

| Token      | Shadow                                                       |
| ---------- | ------------------------------------------------------------ |
| `none`     | no shadow (rows inside a card)                               |
| `card`     | one low, wide shadow for a raised card on the background     |
| `header`   | hairline only — iOS headers separate by a line, not by depth |
| `floating` | `FloatingActionButton`, popovers                             |
| `modal`    | `ConfirmDialog` card                                         |
| `sheet`    | `BottomSheet` edge (one tight upward shadow)                 |

Icons (`icons.ts`) — one family, Ionicons via `@expo/vector-icons`, rendered through `<Icon>`:
`iconSize` `xs` 14 · `sm` 16 · `md` 20 · `lg` 24 · `xl` 32 · `xxl` 40 · `hero` 56;
`iconStroke` `thin` 1.25 · `default` 1.5 · `emphasis` 2; `iconContainer` `sm` 28 · `md` 36 ·
`lg` 44 (the touch target) · `xl` 56 (category tiles). Outlined glyphs are the default; filled
glyphs are reserved for a _selected_ state, so selection is never colour-only.

Motion (`motion`) — durations `instant` 90 · `fast` 150 · `base` 220 · `slow` 300 ·
`leisurely` 420; easing curves `enter` `[0.32,0.72,0,1]`, `exit` `[0.4,0,1,1]`, `standard`,
`decelerate`; spring `damping` 22 / `stiffness` 260 / `mass` 1; offsets `small` 4 · `medium` 8 ·
`large` 16 · `sheet` 320. `useReducedMotion()` (and `useAnimationScale()`) collapse every duration
to 0 when the device asks for less motion — components never hardcode a number.

Layout (`layout`) — `minTouchTarget` 44 · `minControlHeight` 48 · `controlHeight` `sm` 36 / `md`
44 / `lg` 52 · `tabBarHeight` 49 · `headerHeight` 44 · `largeHeaderHeight` 96 ·
`maxContentWidth` 680 (centres the showcase and any wide screen on tablets) · `sheet`
(`mediumHeight` 0.62, `largeHeight` 0.88, `radius` 20, `grabberHeight` 24) · `toast`
(`yOffset` 12, `duration` 3200) · `breakpoint` (`compact` 380, `medium` 480, `wide` 720) ·
`safeArea` (`minTop` 8, `minBottom` 8) · `fab` (`size` 56, `extendedHeight` 52, `margin` 20,
`clearance` 24).

---

## Adding or changing a token

1. Change the token file, not the component. If a component needs a value that does not exist,
   that is a design-system decision and belongs in `src/design-system/`.
2. Add the role to **both** themes (`light.ts`, `dark.ts`) — `ColorTokens` makes an omission a
   compile error — and to `tests/design-system/tokens.test.ts` if it carries an invariant.
3. Run `npm run a11y:contrast`. If a new foreground/background pair is meant for text or an
   interface boundary, add it to `MEASURED` in `tests/design-system/contrast.test.ts` so it can
   never regress silently.
4. Show it in the showcase (`src/showcase/sections/`), because a token nothing renders is a token
   nobody uses.
