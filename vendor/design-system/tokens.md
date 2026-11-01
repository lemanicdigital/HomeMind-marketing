# Tokens

Every number in Homesky comes from a token file in `src/design-system/tokens/`. Components read
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

### Identity: blueberry and saffron

The identity is a deep blueberry for everything you act on, one saffron for the one action that
matters most (Add), cool blue-grey ink on a misty white, and a colour for every category. A
household inventory is a list of chores; the palette's job is to make that list pleasant to look
at and quick to read.

| Intent            | Hex       | Where it lives                                                   |
| ----------------- | --------- | ---------------------------------------------------------------- |
| Primary           | `#3D41C6` | `palette.berry600` → `primary`, links, selected controls (light) |
| Primary pressed   | `#2F32A3` | `primaryPressed` (light)                                         |
| Primary subtle    | `#EEEFFC` | `primarySubtle`, `surfaceSelected` (light)                       |
| Accent            | `#F5B731` | `accent`: the centre Add button only, with a `#3A2600` plus      |
| Background        | `#F4F5FA` | `background`, `controlBackground`                                |
| Surface           | `#FFFFFF` | `surface`                                                        |
| Surface secondary | `#ECEEF6` | `surfaceSecondary`, `neutralSubtle`                              |
| Text primary      | `#161A33` | `textPrimary`, and the base of the dark-mode `night` ramp        |
| Text secondary    | `#4A5072` | `textSecondary` (light)                                          |
| Success           | `#1F7F47` | `success`                                                        |
| Warning           | `#A85A00` | `warning`                                                        |
| Danger            | `#C93A2E` | `danger`                                                         |
| Info              | `#1E6AB8` | `info`                                                           |

Three ideas carry it:

1. **One saffron thing.** `accent` is used for the Add button and the floating-button badge,
   nothing else, so the eye always finds the main action. Everything else you can press is
   blueberry.
2. **Categories have colours.** `categoryPantry` … `categoryOther` are solid tiles under a white
   `onCategory` glyph, like Reminders' lists: pantry amber, fresh basil, beverages sky, frozen
   glacier, cleaning lavender, bathroom coral, pet carrot, other slate. Each clears 3:1 under the
   glyph in both themes, and the category is always also named in the row.
3. **Home has a sky.** `skyDawn`, `skyDay`, `skyDusk` and `skyNight` wash in behind Home's title
   (`Screen`'s `wash` prop), picked by the clock in `src/lib/sky.ts`. Body text is checked at 4.5:1
   on all four, in both themes.

Dark mode is a night sky, not a black hole: `#0D0F1F` background, `#161931` surface, `#1E2240` /
`#282D50` raised, with blueberry lightened to `#A3A6FF` (dark text on it) and saffron to
`#F7C04A`. Status hues become tints with dark text (`onSuccess` is `#0B2817` on `#72D69C`).

### Semantic roles

90 roles, both appearances. `on*` roles are _foregrounds guaranteed on the surface named after
them_, which is what makes the contrast test possible.

| Role                | Light       | Dark        |
| ------------------- | ----------- | ----------- |
| `primary`           | `#3D41C6`   | `#A3A6FF`   |
| `onPrimary`         | `#FFFFFF`   | `#0D0F1F`   |
| `primaryPressed`    | `#2F32A3`   | `#C4C6F7`   |
| `primarySubtle`     | `#EEEFFC`   | `#23265A`   |
| `onPrimarySubtle`   | `#2F32A3`   | `#C4C6F7`   |
| `primaryBorder`     | `#C4C6F7`   | `#5A5EDC`   |
| `accent`            | `#F5B731`   | `#F7C04A`   |
| `onAccent`          | `#3A2600`   | `#3A2600`   |
| `background`        | `#F4F5FA`   | `#0D0F1F`   |
| `surface`           | `#FFFFFF`   | `#161931`   |
| `surfaceSecondary`  | `#ECEEF6`   | `#1E2240`   |
| `surfaceTertiary`   | `#E2E5F0`   | `#282D50`   |
| `onBackground`      | `#161A33`   | `#EEF0FA`   |
| `onSurface`         | `#161A33`   | `#EEF0FA`   |
| `onSurfaceMuted`    | `#4A5072`   | `#CDD0E6`   |
| `surfacePressed`    | `#ECEEF6`   | `#1E2240`   |
| `surfaceSelected`   | `#EEEFFC`   | `#2A2E6B`   |
| `surfaceDisabled`   | `#ECEEF6`   | `#1E2240`   |
| `overlay`           | `#161A338C` | `#000000A8` |
| `onOverlay`         | `#F4F5FA`   | `#EEF0FA`   |
| `skeleton`          | `#E2E5F0`   | `#282D50`   |
| `textPrimary`       | `#161A33`   | `#EEF0FA`   |
| `textSecondary`     | `#4A5072`   | `#B9BDD8`   |
| `textTertiary`      | `#5E6485`   | `#8F95B8`   |
| `textDisabled`      | `#8A8FAC`   | `#80869F`   |
| `textLink`          | `#3D41C6`   | `#A3A6FF`   |
| `textInverse`       | `#FFFFFF`   | `#161A33`   |
| `media`             | `#000000`   | `#000000`   |
| `onMedia`           | `#FFFFFF`   | `#FFFFFF`   |
| `borderSubtle`      | `#E2E5F0`   | `#282D50`   |
| `borderStrong`      | `#5E6485`   | `#80869F`   |
| `borderInput`       | `#7A80A0`   | `#646B95`   |
| `borderDisabled`    | `#E2E5F0`   | `#343A62`   |
| `borderFocus`       | `#5A5EDC`   | `#A3A6FF`   |
| `focusRing`         | `#5A5EDC`   | `#A3A6FF`   |
| `success`           | `#1F7F47`   | `#72D69C`   |
| `onSuccess`         | `#FFFFFF`   | `#0B2817`   |
| `successSubtle`     | `#E3F4E9`   | `#15322A`   |
| `onSuccessSubtle`   | `#17643A`   | `#72D69C`   |
| `successBorder`     | `#BDE5CC`   | `#2E9A5B`   |
| `warning`           | `#A85A00`   | `#F2B65E`   |
| `onWarning`         | `#FFFFFF`   | `#2D1A00`   |
| `warningSubtle`     | `#FDF0DC`   | `#38291A`   |
| `onWarningSubtle`   | `#7F4400`   | `#F2B65E`   |
| `warningBorder`     | `#F6D9AE`   | `#C67A1E`   |
| `danger`            | `#C93A2E`   | `#F49A90`   |
| `onDanger`          | `#FFFFFF`   | `#2F0F0B`   |
| `dangerSubtle`      | `#FCEAE8`   | `#3A1D27`   |
| `onDangerSubtle`    | `#A8291F`   | `#F49A90`   |
| `dangerBorder`      | `#F3C6C1`   | `#D9584D`   |
| `info`              | `#1E6AB8`   | `#8EC2F5`   |
| `onInfo`            | `#FFFFFF`   | `#0B1E33`   |
| `infoSubtle`        | `#E5F0FB`   | `#172A48`   |
| `onInfoSubtle`      | `#1E6AB8`   | `#8EC2F5`   |
| `infoBorder`        | `#C2DBF3`   | `#3A82CC`   |
| `neutral`           | `#4A5072`   | `#CDD0E6`   |
| `onNeutral`         | `#FFFFFF`   | `#0D0F1F`   |
| `neutralSubtle`     | `#ECEEF6`   | `#282D50`   |
| `onNeutralSubtle`   | `#363C5E`   | `#CDD0E6`   |
| `controlTrackOff`   | `#7A80A0`   | `#474E7A`   |
| `controlTrackOn`    | `#3D41C6`   | `#7F83F2`   |
| `controlThumb`      | `#FFFFFF`   | `#EEF0FA`   |
| `controlBackground` | `#F4F5FA`   | `#111428`   |
| `controlBorder`     | `#7A80A0`   | `#646B95`   |
| `controlSelected`   | `#3D41C6`   | `#A3A6FF`   |
| `controlDisabled`   | `#E2E5F0`   | `#282D50`   |
| `stepperBackground` | `#FFFFFF`   | `#1E2240`   |
| `ripple`            | `#161A3329` | `#FFFFFF33` |
| `rippleOnPrimary`   | `#FFFFFF3D` | `#14164A3D` |
| `tabBar`            | `#FFFFFF`   | `#0F1124`   |
| `tabBarBorder`      | `#E2E5F0`   | `#282D50`   |
| `tabBarActive`      | `#3D41C6`   | `#A3A6FF`   |
| `tabBarInactive`    | `#5E6485`   | `#80869F`   |
| `headerBackground`  | `#F4F5FA`   | `#0D0F1F`   |
| `headerText`        | `#161A33`   | `#EEF0FA`   |
| `iconDefault`       | `#363C5E`   | `#CDD0E6`   |
| `iconMuted`         | `#5E6485`   | `#B9BDD8`   |
| `categoryPantry`    | `#A86C00`   | `#A86C00`   |
| `categoryFresh`     | `#23874D`   | `#23874D`   |
| `categoryBeverages` | `#1C7BC4`   | `#1C7BC4`   |
| `categoryFrozen`    | `#0E8296`   | `#0E8296`   |
| `categoryCleaning`  | `#7B4FE0`   | `#7B4FE0`   |
| `categoryBathroom`  | `#D2466D`   | `#D2466D`   |
| `categoryPet`       | `#D35C12`   | `#D35C12`   |
| `categoryOther`     | `#636A8A`   | `#636A8A`   |
| `onCategory`        | `#FFFFFF`   | `#FFFFFF`   |
| `skyDawn`           | `#FFF1CF`   | `#2A2414`   |
| `skyDay`            | `#E3ECFF`   | `#16233F`   |
| `skyDusk`           | `#FBE2E6`   | `#2E1A2A`   |
| `skyNight`          | `#E4E3FA`   | `#1D1C45`   |

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
| Category | `categoryPantry`, `categoryFresh`, `categoryBeverages`, `categoryFrozen`, `categoryCleaning`, `categoryBathroom`, `categoryPet`, `categoryOther`, `onCategory`                                            |
| Sky      | `skyDawn`, `skyDay`, `skyDusk`, `skyNight`                                                                                                                                                                |

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
| `textPrimary` on `background`         | 15.69 | 16.72 | 4.5:1    |
| `textPrimary` on `surface`            | 17.08 | 15.18 | 4.5:1    |
| `textPrimary` on `surfaceSecondary`   | 14.74 | 13.61 | 4.5:1    |
| `textPrimary` on `surfaceTertiary`    | 13.58 | 11.69 | 4.5:1    |
| `textSecondary` on `background`       | 7.19  | 10.25 | 4.5:1    |
| `textSecondary` on `surface`          | 7.83  | 9.31  | 4.5:1    |
| `textSecondary` on `surfaceSecondary` | 6.76  | 8.35  | 4.5:1    |
| `textSecondary` on `surfaceTertiary`  | 6.23  | 7.17  | 4.5:1    |
| `textTertiary` on `background`        | 5.30  | 6.48  | 4.5:1    |
| `textTertiary` on `surface`           | 5.77  | 5.88  | 4.5:1    |
| `textTertiary` on `surfaceSecondary`  | 4.98  | 5.27  | 4.5:1    |
| `textLink` on `background`            | 6.96  | 8.56  | 4.5:1    |
| `textLink` on `surface`               | 7.58  | 7.77  | 4.5:1    |
| `onPrimary` on `primary`              | 7.58  | 8.56  | 4.5:1    |
| `onPrimary` on `primaryPressed`       | 9.97  | 11.55 | 4.5:1    |
| `onPrimarySubtle` on `primarySubtle`  | 8.73  | 8.53  | 4.5:1    |
| `onAccent` on `accent`                | 8.03  | 8.64  | 4.5:1    |
| `onSurfaceMuted` on `surface`         | 7.83  | 11.30 | 4.5:1    |
| `textInverse` on `primary`            | 7.58  | 7.69  | 4.5:1    |
| `onOverlay` on `overlay`              | 15.69 | 18.48 | 4.5:1    |
| `onSuccess` on `success`              | 5.02  | 8.88  | 4.5:1    |
| `onWarning` on `warning`              | 5.09  | 9.23  | 4.5:1    |
| `onDanger` on `danger`                | 5.09  | 8.27  | 4.5:1    |
| `onInfo` on `info`                    | 5.51  | 8.96  | 4.5:1    |
| `onSuccessSubtle` on `successSubtle`  | 6.29  | 7.76  | 4.5:1    |
| `onWarningSubtle` on `warningSubtle`  | 6.84  | 7.75  | 4.5:1    |
| `onDangerSubtle` on `dangerSubtle`    | 6.02  | 7.13  | 4.5:1    |
| `onInfoSubtle` on `infoSubtle`        | 4.78  | 7.65  | 4.5:1    |
| `onNeutralSubtle` on `neutralSubtle`  | 9.23  | 8.70  | 4.5:1    |
| `textPrimary` on `skyDawn`            | 15.24 | 13.58 | 4.5:1    |
| `textPrimary` on `skyDay`             | 14.40 | 13.73 | 4.5:1    |
| `textPrimary` on `skyDusk`            | 13.92 | 14.24 | 4.5:1    |
| `textPrimary` on `skyNight`           | 13.55 | 14.17 | 4.5:1    |
| `textSecondary` on `skyDawn`          | 6.99  | 8.33  | 4.5:1    |
| `textSecondary` on `skyDay`           | 6.60  | 8.42  | 4.5:1    |
| `textSecondary` on `skyDusk`          | 6.39  | 8.74  | 4.5:1    |
| `textSecondary` on `skyNight`         | 6.22  | 8.69  | 4.5:1    |

### Interface and non-text contrast (3:1)

| Pair                                     | Light | Dark  | Required |
| ---------------------------------------- | ----- | ----- | -------- |
| `borderInput` on `background`            | 3.56  | 3.69  | 3:1      |
| `borderInput` on `surface`               | 3.87  | 3.35  | 3:1      |
| `borderStrong` on `surface`              | 5.77  | 4.79  | 3:1      |
| `borderStrong` on `background`           | 5.30  | 5.27  | 3:1      |
| `borderFocus` on `background`            | 4.74  | 8.56  | 3:1      |
| `focusRing` on `background`              | 4.74  | 8.56  | 3:1      |
| `tabBarInactive` on `tabBar`             | 5.77  | 5.18  | 3:1      |
| `tabBarActive` on `tabBar`               | 7.58  | 8.40  | 3:1      |
| `headerText` on `headerBackground`       | 15.69 | 16.72 | 3:1      |
| `iconDefault` on `surface`               | 10.69 | 11.30 | 3:1      |
| `iconMuted` on `surface`                 | 5.77  | 9.31  | 3:1      |
| `iconMuted` on `background`              | 5.30  | 10.25 | 3:1      |
| `success` on `surface`                   | 5.02  | 9.70  | 3:1      |
| `warning` on `surface`                   | 5.09  | 9.55  | 3:1      |
| `danger` on `surface`                    | 5.09  | 8.11  | 3:1      |
| `info` on `surface`                      | 5.51  | 9.19  | 3:1      |
| `primary` on `surface`                   | 7.58  | 7.77  | 3:1      |
| `controlBorder` on `controlBackground`   | 3.56  | 3.53  | 3:1      |
| `controlSelected` on `controlBackground` | 6.96  | 8.19  | 3:1      |
| `controlTrackOn` on `surface`            | 7.58  | 5.28  | 3:1      |
| `controlThumb` on `controlTrackOff`      | 3.87  | 7.00  | 3:1      |
| `onAccent` on `accent`                   | 8.03  | 8.64  | 3:1      |
| `onCategory` on `categoryPantry`         | 4.37  | 4.37  | 3:1      |
| `onCategory` on `categoryFresh`          | 4.52  | 4.52  | 3:1      |
| `onCategory` on `categoryBeverages`      | 4.49  | 4.49  | 3:1      |
| `onCategory` on `categoryFrozen`         | 4.51  | 4.51  | 3:1      |
| `onCategory` on `categoryCleaning`       | 5.20  | 5.20  | 3:1      |
| `onCategory` on `categoryBathroom`       | 4.34  | 4.34  | 3:1      |
| `onCategory` on `categoryPet`            | 3.96  | 3.96  | 3:1      |
| `onCategory` on `categoryOther`          | 5.30  | 5.30  | 3:1      |

### Documented exemptions

These are deliberate and are asserted as _allowed_ by the test, not ignored by it:

| Pair                                  | Ratio      | Why it is fine                                                                                                                       |
| ------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `textDisabled` on `surface`           | 3.18 light | Disabled content is not required to meet 4.5:1; it is still 3:1+ so it stays legible, and a disabled control always keeps its label. |
| `controlThumb` on `controlTrackOn`    | 2.87 dark  | The thumb is a knob, not information; the state is carried by the track colour plus the `On`/`Off` accessibility value.              |
| `controlTrackOff` on `surface`        | 2.17 dark  | Same reasoning; the unchecked/off state is the _absence_ of colour and is named in the spoken label.                                 |
| status `*Border` on `*Subtle` fill    | 1.21 light | Decorative tint used to group an alert, not a boundary that conveys meaning alone.                                                   |
| `skeleton` on `surface`               | 1.26       | A loading shimmer is not content and never carries information.                                                                      |
| `onNeutral`                           | n/a        | Reserved for a future solid neutral fill; the neutral badge uses `onNeutralSubtle` on `neutralSubtle` (9.23 light / 8.70 dark).      |
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
`large` 16 · `sheet` 320; Reanimated `springs` `snappy` (press) · `gentle` (settling) · `bouncy` (a
small reward), and `stagger` 55 ms between blocks that appear in turn. `useReducedMotion()` (and `useAnimationScale()`) collapse every duration
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
