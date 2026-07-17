# AWA — Design Guidelines

_Apparent Wind Activities. Yacht design studio._

These guidelines document the visual system as implemented in the codebase
(`app/globals.css`, `app/layout.tsx`, `components/`). Follow them when adding
new pages or components so the site stays coherent.

---

## 1. Brand tone

- Minimal, editorial, technical. White space is a design element, not filler.
- Restrained palette, precise typography, generous margins driven by a strict
  column grid.
- No decorative gradients, blobs, shadows, or rounded "card" clutter. Structure
  comes from the grid, hairline rules, and typography.

---

## 2. Color

The palette is intentionally tiny: one near-black ink, one off-white paper, and
opacity variants of the ink for hierarchy.

| Token | Value | Usage |
|-------|-------|-------|
| Paper / background | `#f5f5f5` | Page background everywhere (`<html>`, `<main>`, footer) |
| Ink / foreground | `#292929` | Primary text, titles, borders |
| Body ink (darker) | `#1a1a1a` | `.body-text` long-form paragraphs |
| Hover surface | `#ececec` / `#e8e8e8` | Card / menu-item hover backgrounds |
| Hairline border | `#e0e0e0` | Menu borders, dividers |

### Opacity ramp (built from the ink)

Use `#292929` with an alpha suffix instead of introducing new greys:

- `text-[#292929]` — primary text
- `text-[#292929]/70` — secondary / italic intro text
- `text-[#292929]/50` — eyebrows, labels, back links, placeholders
- `border-[#292929]/10` — dividers and card separators

Rules:
- Never introduce a new color without reason. Stay within ink + paper + alpha.
- No purple/violet. No temperature-mixed gradients. Avoid gradients entirely.
- If you override a background, override the text color to preserve contrast.

_Note: the shadcn design tokens in `globals.css` (`--primary`, `--muted`, etc.)
exist for UI primitives, but AWA pages mostly use the literal `#f5f5f5` /
`#292929` values above for consistency with the existing pages._

---

## 3. Typography

Two families only.

### Sans — Degular Variable (headings + UI + body)
Loaded via Typekit. Exposed as `--font-sans` and the `font-sans` class.
It is a variable font; AWA leans on specific variation settings:

| Class | `font-variation-settings` | Use |
|-------|---------------------------|-----|
| `body` (default) | `opsz 6, wght 200, ital 1` | Base body weight, light italic |
| `.menu-item` | `opsz 6, wght 300, ital 1` | Navigation labels |
| `.body-text` | `opsz 6, wght 100, ital 1` | Long-form editorial paragraphs, color `#1a1a1a` |

Common Tailwind text patterns used with it:
- Intro / editorial copy: `font-light italic ... text-justify leading-relaxed`
- Body paragraphs: `text-sm font-light text-[#292929] leading-relaxed`

### Mono — Source Code Pro Variable (technical accents)
Exposed via `.section-title` (`wght 500`) and `--font-mono`. Used for
structured/technical labels.

### Eyebrows & labels
Small uppercase mono-feel labels are a signature element:

```
text-[10px] tracking-[0.3em] text-[#292929]/50 uppercase
```

### Titles
```
text-[#292929] font-medium tracking-[0.12em] text-2xl lg:text-3xl
```

Typography rules:
- Max 2 font families (Degular + Source Code Pro). Never add more.
- Body text uses `leading-relaxed`; wrap key headlines in `text-balance` /
  `text-pretty`.
- Wide letter-spacing (`tracking-wider`, `tracking-[0.12em]`,
  `tracking-[0.3em]`) is the house accent — use it on labels and titles, never
  on body copy.

---

## 4. Layout — the AWA row & column grid

The homepage/editorial pages use a bespoke grid defined in `globals.css`.

### Desktop (`min-width: 1024px`)
- **42-column grid** (`.awa-section`, `grid-template-columns: repeat(42, 1fr)`).
  - cols 1–2: left margin
  - cols 3–19: text column (`.awa-left-col`, 17 cols)
  - cols 20–22: gap
  - cols 23–39: media column (`.awa-video-col`, 17 cols)
  - cols 40–42: right margin
- **Row unit** `--awa-row: calc(17 / 42 * 100vw * 6 / 5 / 22)`. Total page =
  22 rows; the hero video height drives the whole vertical rhythm.
  - Header = 1 row (`.awa-header`)
  - Title top = row 3; text top = row 13; media bottom-aligns to row 22.
- Margins/positioning are expressed in viewport-relative column math, e.g.
  `paddingLeft: "calc(2 / 42 * 100vw)"`, not fixed pixels.

### Mobile (`max-width: 1023px`)
- Sections collapse to `flex flex-col`.
- A **46-column** logic positions title vs. text:
  - title: 2-col left margin + 11 cols (`.awa-mobile-title`)
  - gap: 3 cols
  - text: 27 cols + 3-col right margin (`.awa-mobile-text`)

### Simple prose pages
Content pages (services, method) use the `ProsePage` component instead of the
row grid: a centered `max-w-2xl` column with `px-8 lg:px-16 py-16 lg:py-24`.

Layout rules:
- Mobile-first; enhance at `lg:`.
- Flexbox for most layouts; CSS grid only for the 2D column system.
- Use the Tailwind spacing scale and `gap-*`; avoid arbitrary pixel padding
  except the intentional `calc(n / 42 * 100vw)` column math.
- Never mix margin/padding with `gap` on the same element; never use `space-*`.

---

## 5. Components & patterns

### Header (`components/header.tsx`)
- One row tall on desktop (`.awa-header`), logo left, nav right.
- Desktop nav = hover dropdowns (Racing / Apex / Cruising) + About link.
- Labels use `.menu-item` + `text-sm font-medium tracking-wider text-[#292929]`,
  `hover:opacity-60`.
- Dropdown panel: `bg-[#f5f5f5] border border-[#e0e0e0]`, items
  `font-light italic`, `hover:bg-[#e8e8e8]`.
- Mobile: hamburger toggles a stacked accordion menu.

### Footer (`components/footer.tsx`)
- Paper background, padding in row/column units.
- "Connect With Us" label, a single-line email form with a bottom-border input
  (`border-b border-[#292929]`, no box), text `Send` button, Instagram link.

### Prose building blocks (`components/prose-page.tsx`)
- `ProsePage` — wraps Header + centered column + Footer, with `eyebrow`,
  `title`, `intro`, a hairline `hr`, and a `← back` link.
- `SectionTitle` — the `text-[10px] tracking-[0.3em] uppercase` eyebrow.
- `P` — standard justified body paragraph.
- `More` — an underlined `… →` forward link (`underline-offset-4
  decoration-[#292929]/20`).

### Entry cards (About "The work")
- 2-col grid separated by hairlines: `grid md:grid-cols-2 gap-px
  bg-[#292929]/10 border border-[#292929]/10`.
- Each card: paper bg, `hover:bg-[#ececec]`, italic prompt + tracked title +
  summary + uppercase `Read →` affordance pinned to the bottom (`mt-auto`).

### Interaction
- Hovers are subtle: `hover:opacity-60` for nav, background shift for cards,
  ink-darkening for links. Always `transition-colors` / `transition-opacity`.
- Forward navigation uses `→`, back navigation uses `←` (as unicode escapes in
  JSX: `{"\u2192"}`, `{"\u2190"}`).

---

## 6. Imagery & icons

- Prefer real photography/video of boats. The hero uses a `<video>` filling the
  media column.
- No abstract decorative shapes or hand-drawn SVG illustrations.
- Icons from `lucide-react` only (e.g. `Menu`, `X`, `ChevronDown`), sized
  14–24px. Never use emojis as icons.
- Always provide meaningful `alt` text; mark decorative images appropriately.

---

## 7. Do / Don't

**Do**
- Keep to paper `#f5f5f5` + ink `#292929` and its alpha ramp.
- Use wide tracking + uppercase for labels; light italic for editorial copy.
- Express layout margins in the column-fraction math on grid pages.
- Reuse `ProsePage` and its helpers for text-heavy pages.

**Don't**
- Add new colors, gradients, shadows, or heavy borders.
- Introduce a third font family.
- Use fixed pixel margins on the row/column grid pages.
- Use `space-*` utilities or mix `gap` with margin/padding on one element.
