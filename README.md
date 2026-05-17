# Globe Insights — Design System

> **Brutalism × 3D × Parallax.** A travel-planning brand that sells *cheap, fast, short, comfortable trips* — and looks nothing like the polite pastel travel sites it competes against.

---

## Company context

**Globe Insights** is a trip-planning service that builds **cheap, fast, short-trip itineraries** with the most comfort possible per dollar. The product strips out the over-curated "lifestyle travel" feeling and gives travelers a punchy, opinionated plan they can act on inside a long weekend.

The brand is **brutalist**: pure white background, **3px solid black** borders on every card and section, oversized black typography, and **#FFE600 yellow** as the only accent — used on hover states and highlighted sections. No gradients. No drop shadows. No border radius. Body copy is set in a monospace face. Image cards lean slightly off-axis (-1° to -2° rotation) to add a hand-pasted, zine-poster feel. Motion is the inverse of the static stiffness: long, eased-out parallax and 3D depth on scroll.

### Voice in one line
> Loud, direct, opinionated. We tell you what to book, not what to "consider."

---

## Sources

This system was generated from a written brief — **no codebase, Figma file, or existing screenshots were provided**. All visual decisions trace back to:

- The product description (cheap, fast, short, comfortable trip plans)
- The aesthetic brief: brutalism, 3D, smooth eased-out parallax, oversized type
- The hard rules: white #FFFFFF bg, 3px solid #000 borders, 80px/900 hero, #FFE600 accent, monospace body, slight rotation on image cards, no gradients/shadows/radius

If you have an existing logo, brand guide, photo library, or codebase, drop it in and I'll re-derive against the real source.

---

## Index

| Path | What it is |
|---|---|
| `README.md` | This file — context, content rules, visual foundations, iconography |
| `SKILL.md` | Skill manifest for Claude Code / Agent Skills |
| `colors_and_type.css` | Base + semantic CSS variables (colors, type scale, spacing, borders) |
| `fonts/` | Webfont references (Space Grotesk display, JetBrains Mono body) |
| `assets/` | Logos, marks, sticker badges, placeholder imagery |
| `preview/` | Design-system preview cards (colors, type, components, brand) |
| `ui_kits/marketing/` | Brutalist landing page UI kit (index.html + JSX components) |

---

## Content fundamentals

Globe Insights writes the way a travel-obsessed friend talks at a bar. **Short. Confident. A little smug.** Never marketing-speak.

### Voice rules

- **Second person.** Always "you." Never "we."*
  - *"You leave Friday. You're back Sunday. You've seen Lisbon."*
  - Not: "We help travelers explore..."
- **Imperatives over descriptions.** Tell the reader what to do.
  - *"Book it. Pack light. Go."*
- **Numbers are weapons.** Price, hours, flights, steps — quantify everything possible.
  - *"3 days. 2 flights. 1 carry-on. €420 all in."*
- **Slang and contractions are fine.** "It's", "you'll", "gonna" — yes.
- **Short sentences.** 3–8 words is the sweet spot for headlines and pull quotes. Body copy can run longer but should still feel clipped.
- **No hedging.** Cut "perhaps", "might", "consider", "explore", "discover".
- **No travel cliches.** Banned: *hidden gems, off the beaten path, bucket list, wanderlust, journey, adventure awaits, dream destination, breathtaking, immerse yourself.*

### Casing

- **HEADLINES IN ALL CAPS** for the H1/hero and section openers — leans into the poster/zine feel.
- **Sentence case** for body copy and UI labels.
- **lowercase** for the `globe insights` wordmark itself (the brand sits low; the headlines yell).

### Punctuation

- **Periods on every line** of a stacked headline — adds rhythm and finality.
  *"CHEAP. FAST. SHORT. COMFORTABLE."*
- **Em dashes** for asides, never parenthetical commas. *"Lisbon — 48 hours, €420."*
- **No exclamation points.** The volume is already high; punctuation shouldn't add to it.

### Emoji & special chars

- **No emoji.** Anywhere. The visual language is black/white/yellow with hard borders — emoji break the system instantly.
- **Unicode arrows are fine** as inline UI markers: `→`, `↗`, `✕`. Used sparingly, always on accent or in black.
- **Pipes and slashes** are encouraged as visual separators in metadata: `LISBON / 48H / €420`.

### Sample copy

```
H1:    SHORT TRIPS.
       LONG MEMORIES.
       ZERO B.S.

Sub:   You give us a weekend. We give you a city.
       3 days max. 1 carry-on. Best comfort per dollar, every time.

CTA:   PLAN MY TRIP →

Card:  LISBON / 48H / €420
       Friday 6pm wheels-up, Sunday 11pm home.
       Tram 28, pastéis, sunset at São Jorge. Done.
```

---

## Visual foundations

### Palette

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FFFFFF` | Page background. Never tinted, never gradient. |
| `--ink` | `#000000` | All text, all borders, all rules. |
| `--accent` | `#FFE600` | Hover fills, highlighted section backgrounds, selected states. |
| `--accent-press` | `#E8D200` | Pressed state — yellow knocked down ~6%. |
| `--ink-50` | `#0000000D` | The only allowed neutral — used for ghost dividers in dense data only. |

There are **no greys, no tints, no gradients**. Color is binary: it's black, it's white, or it's the one yellow.

### Type

- **Display / Headlines:** `Space Grotesk` — geometric, slightly humanist, holds up at 80–160px. Weights 700 + 900.
- **Body / UI / Mono:** `JetBrains Mono` — every paragraph, every label, every nav item, every price. Monospace is the body face, not just the code face.
- **Hero scale:** 80px / 900 weight / -2% letter-spacing / 0.9 line-height.
- **No serif anywhere.** No italic except for the rare in-line foreign-language word.

> Both faces are pulled from Google Fonts as the closest free match. **If you have a licensed display face you want as the brand voice, drop it into `fonts/` and I'll swap it.**

### Spacing & layout

- **8px base grid.** All spacing tokens are multiples: 8, 16, 24, 32, 48, 64, 96, 128.
- **3px is the only border weight.** Not 2, not 4. Always solid black.
- **No border-radius. Anywhere.** Buttons, cards, inputs, images — all hard corners.
- **Hard 12-column grid** on desktop with **48px gutters**. Cards butt up against each other; gutters are gaps, not padding.
- **Sections are framed.** Most major sections sit inside a 3px black border with their own internal padding. The page is a stack of boxes, not a flowing ribbon.

### Backgrounds & imagery

- **Background is always `#FFFFFF`.** No exceptions on the marketing site.
- **One section per page** may flip to `--accent` (yellow) — the "highlighted" section. Use it once, hard.
- **Images are full-bleed inside their card** with a 3px black border. They're treated like Xerox-pasted posters: high contrast, slightly desaturated, sometimes duotone (black on yellow, or pure b&w).
- **Image rotation:** image cards rotate `-1deg` or `-2deg` (alternating) to break the grid. Text cards stay axis-aligned.
- **No textures, no patterns, no noise overlays.** The only "texture" is the rigid grid itself.

### Motion

The static design is stiff and loud. The motion is the opposite: **slow, generous, eased-out**.

- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (a long ease-out) is the house curve for everything. Duration 600–900ms for entrances, 200ms for hover.
- **Parallax.** The hero, mid-page sections, and footer use 3 layers of parallax: background type, foreground card, and a free-floating sticker/badge that moves fastest. Driven by `scroll`-linked transforms.
- **3D depth.** Cards use `transform: perspective(1200px) rotateX()/rotateY()` on hover and on scroll, leaning a few degrees toward/away from the viewer — never more than 6°.
- **No bounces, no springs, no fades-in-from-nothing.** Entrances slide up 24–48px from below with opacity 0 → 1, eased out.
- **Marquee strips** (a horizontally scrolling band of repeating text) are a recurring motif at section breaks.

### Hover & press

- **Hover (button, card, link):**
  - The element fills with `--accent` (yellow).
  - Text inverts to black (it was already black, but contrast against yellow is even higher).
  - Element shifts up `-2px` and offsets a 3px black "drop block" `(4px, 4px)` behind itself — a hard offset, not a shadow blur.
- **Press:** element snaps down to `(0, 0)`, drop block disappears. 80ms snap.
- **Focus:** 3px solid yellow outline, offset by 2px.

### Borders, shadows, radii

- **Borders:** `3px solid #000`, every card, every input, every section break, every image.
- **Drop block (the only "shadow"):** a hard, un-blurred offset of a solid `#000` rectangle, e.g. `box-shadow: 6px 6px 0 0 #000;`. This is the brutalist substitute for elevation.
- **Border radius:** `0`. Tokenized as `--radius: 0`.
- **No inner shadows. No blur. No glassmorphism.**

### Transparency & blur

- Effectively unused. The system reads as opaque flat planes. The one exception: the sticky top nav uses `background: #FFFFFFE6` with **no blur** so type underneath shows through faintly when scrolling.

### Layout rules / fixed elements

- **Sticky top nav** with a 3px bottom border. Logo left, links right, primary CTA pinned far right with the drop block.
- **Floating sticker badges** — small rotated yellow circles or squares with hand-set type ("NEW", "€420", "48H"). They sit at z-index above cards and parallax independently.
- **Footer** is the loudest element on the page: oversized wordmark in 200–300px black type, blowing past the edge.

### Imagery vibe

- **High-contrast, slightly desaturated.** Photos read almost like risograph prints.
- **Duotone treatments** in `#000` + `#FFE600` for hero photography.
- **Subjects are travel-forward but unglamorous** — a tram, a coffee, a passport, a backpack on a chair. No drone shots of beaches.

### Cards

- 3px solid black border.
- 0 border radius.
- White or yellow fill.
- 24–32px internal padding.
- A hard `6px 6px 0 0 #000` drop block on hover, lifted `-2px`.
- Image cards rotate `-1°` or `-2°`.

---

## Iconography

See [iconography section in README](#iconography-1).

<a id="iconography-1"></a>
### Iconography

- **No icon font shipped with the brand** (none provided in the brief).
- **Lucide** is the chosen substitute icon set — its hairline-stroke, geometric, monoline silhouettes pair well with the brutalist grid (and are visually distinct from the heavy display type so the icons don't fight the headlines). Stroke `2.25px`, color `#000`, size `24px` default.
  - **Flagged substitution:** if you want a custom icon set drawn to match the wordmark, replace the Lucide CDN reference in `ui_kits/marketing/index.html`.
- **Loaded from CDN:** `https://unpkg.com/lucide@latest/dist/lucide.js`. No local copy — keeps the asset folder lean.
- **Emoji: never.** The brutalist grid breaks the moment a colored emoji glyph lands on it.
- **Unicode arrows / glyphs** *are* used as in-line UI markers: `→` (forward, CTA), `↗` (external link), `✕` (close), `/` (metadata separator). Always rendered in the body monospace at body weight, never decorated.
- **Sticker badges** (the rotated yellow circles with text) function as iconography in this system more than pictograms do — content like `48H`, `€420`, `NEW` carries the weight that an icon would in a polite design.

---
