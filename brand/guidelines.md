# Brand Guidelines — Trung Nguyen / iamtrung.com
> Machine-readable spec for AI-assisted asset generation.
> When generating any asset, load this file first. Do not override values without explicit instruction.

---

## 1. Identity

**Person:** Trung Nguyen  
**Domain:** iamtrung.com  
**One-line position:** Diagnostic-first operator who works on the founder's operating system, not their to-do list.  
**Brand essence:** Clarity over noise. Depth over speed. Connection over transaction.

### What this brand is
- A diagnostic + community brand
- Structural and emotional — simultaneously
- Anti-hustle, explicitly
- Certain without being loud

### What this brand is not
- A coaching brand
- Motivational content
- Hustle-adjacent
- Tech-bro energy
- Quick-fix consulting

---

## 2. Color System

All values are exact. Do not approximate or substitute.

| Token | Role | Hex | Usage |
|-------|------|-----|-------|
| `background` | Page background | `#F8F9F7` | Default surface. Never busy. |
| `text-primary` | Body + headings | `#1A2F23` | All default text |
| `accent` | Brand green | `#2F5F48` | Headlines, CTAs, emphasis spans — max ~10% of text |
| `interactive` | Hover state | `#3A7D5A` | Hover only. Never default state. |
| `surface-alt` | Section alt bg | `#E8EFE9` | Section breaks, cards, alternating panels |
| `text-muted` | Metadata | `#5A7D6A` | Captions, footnotes, footer nav, dates |
| `warm-divider` | Sand | `#D4C4A8` | Dividers, decorative rules — optional |
| `warm-text` | Clay | `#A67C52` | Use only where warmth is needed — optional |

### Color rules
- `accent` (#2F5F48) is an **emphasis color**, not a body text color
- Never two saturated greens in the same sentence or paragraph
- High-contrast (near-black bg) sections: maximum one per page, used for rhythm only
- No gradients, no duotones, no color overlays

---

## 3. Typography

**Two-font system:**
- **Instrument Serif** — H1 and H2 only. Chosen for editorial weight and humanity. Loaded via `next/font/google`.
- **Inter** — everything else: H3, body, UI, labels, captions. Precision and legibility.

**Instrument Serif fallback:** `Instrument Serif, Georgia, serif`  
**Inter fallback:** `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Weight + size hierarchy

| Element | Font | Weight | Weight value | Size range | Notes |
|---------|------|--------|-------------|------------|-------|
| H1 / Hero | Instrument Serif | Regular | 400 | 4xl–7xl (36px–72px) | Natural weight only. Letter-spacing: -0.02em. |
| H2 / Section | Instrument Serif | Regular | 400 | 2xl (24px) | Natural weight only. Letter-spacing: -0.02em. |
| H3 / Subhead | Inter | Medium | 500 | xl–2xl (20px–24px) | Card header. Sometimes uppercase + tracking-wide at sm size. |
| Body | Inter | Normal | 400 | lg–xl (18px–20px) | Always readable, never thin |
| Metadata / labels | Inter | Normal | 400 | sm (14px) | Uppercase + letter-spacing wide for section labels |
| Citation / attribution | Inter | Light + italic | 300 | sm–base | Citations, testimonial attribution only |
| Atmospheric quote | Inter | Light + italic | 300 | lg–2xl (18px–24px) | Poetic emphasis only — not UI, not headings |

### Typography rules
- **H1 and H2 always render in Instrument Serif at weight 400** — this is enforced by unlayered CSS in `globals.css` and overrides any Tailwind weight class on those elements. Do not attempt to bold them.
- Instrument Serif italic is available and may be used for atmospheric or reflective phrases within H1/H2.
- `font-light` (300) is **reserved for citations and poetic/reflective italic text only** — never standard UI, never buttons
- `line-height`: relaxed (1.625) on all body copy — this is a reflection space, not a news site
- `letter-spacing`: `-0.02em` on H1/H2, `wide` + `uppercase` on small section labels, default everywhere else
- Never center-align body paragraphs — only headings and pull-quotes

---

## 4. Layout & Spacing

| Token | Value | Usage |
|-------|-------|-------|
| Section padding | `py-32` (128px top/bottom) | Consistent section breathing room |
| Max content width | `max-w-6xl` (~1152px) | All pages |
| Focused content width | `max-w-4xl` (~896px) | Diagnostic page, long-form text |
| Horizontal padding | `px-6 md:px-12 lg:px-24` | Responsive side margins |
| Two-column gap | `gap-16` (64px) | Comparison/contrast layouts |
| Internal gap | `gap-6` (24px) | Between smaller elements |

### Layout rules
- Two-column grid for comparison/contrast content: `grid-cols-1 lg:grid-cols-2 gap-16`
- No decorative borders, drop shadows, or gradients — space does the separating
- One visual hierarchy per section — don't compete with yourself
- Section padding `py-32` is non-negotiable — do not compress to fit more content

---

## 5. Component Patterns

### Buttons
- **Border radius:** `0` (square/sharp — architectural, not soft-app)
- **No rounded corners** on any interactive element (buttons, inputs)

| Variant | Style |
|---------|-------|
| Primary (solid) | `bg:#2F5F48 text:white hover:bg:#3A7D5A` |
| Secondary (outline) | `border:#2F5F48 text:#2F5F48 hover:bg:#2F5F48/10` |
| Text link | `text:#2F5F48 hover:text:#3A7D5A border-b on hover` |

### Cards / panels
- Border: `1px solid #E8EFE9` — structural, not decorative
- Background: `#F8F9F7` or `#E8EFE9`
- No drop shadows

### Testimonial blocks
- Left border accent: `4px solid #2F5F48`
- Quote weight: Normal (400)
- Attribution: Muted (`#5A7D6A`), small (14px)

### Dividers
- Color: `#D4C4A8` (sand) — optional, use sparingly
- No decorative borders as page furniture

---

## 6. Voice & Copy Rules

### The four words
| Word | What it means |
|------|--------------|
| **Direct** | No preamble. First sentence is the point. |
| **Honest** | Admits burnout, being lost, the cost of getting it wrong. No hero narrative. |
| **Spacious** | Short sentences. Room to breathe. Never oversells. |
| **Certain** | Claims without hedging. "One session. One verdict." Not "potentially helpful." |

### Sentence patterns (use these)
- Short declarative sentence. Then a longer one that earns it.
- Contrast structure: "Not X — Y."
- Lead with the feeling, follow with the framework: "You feel it. You haven't named it yet."
- Italicize the thing that *matters most*, not the thing that sounds impressive.
- Name what this is **not** as often as what it is.

### Core vocabulary (own these)
`clarity` · `structural` · `bottleneck` · `presence` · `inner work` · `alignment` · `sustainable` · `constraint` · `reset` · `drift` · `honest` · `calm` · `center`

### Use sparingly (yours but easy to overuse)
`ecosystem` · `belonging` · `authentic` · `intentional`

### Never use
`disruption` · `scale` (as verb) · `leverage` (as verb) · `synergy` · `journey` (except literally, for Vietnam) · `unlock your potential` · `transform your mindset` · `world-class` · `proven framework` · `results-driven` · `game-changing` · `powerful` · `incredible` · `amazing`

### Forbidden CTA patterns
- "You may want to consider..." → write: "Book it."
- Passive voice on any CTA
- Long preamble before the point

### The one test
Before publishing anything, ask:  
**Would a burned-out founder who has seen every marketing trick trust this?**  
If yes → publish. If it sounds like a consultant wrote it in a hurry → rewrite.

---

## 7. Offers

| Offer | Name | Type |
|-------|------|------|
| Diagnostic | Founder Bottleneck Diagnostic (short) / 90-Minute Execution Bottleneck Diagnostic (full) | Functional + specific |
| Community | The Innernet | Wordplay: internet + inner + inner net |
| Retreat | Re:Connect Vietnam | Action + context |
| Workshop | The Uncomfort Zone | Contrast — the discomfort is the point |

**Naming pattern:** specific over clever, honest over catchy.  
"The Founder Verdict" = testimonials section label only. Not an offer name. Never use as page title or metadata.

**Pricing:** No price published on site. Internal floor $299. Never publish a price without checking `TrungOPS/offers/diagnostic.md` first.

---

## 8. Asset Generation Instructions

When generating any asset for this brand, apply the following context block:

```
Brand: Trung Nguyen / iamtrung.com
Colors: bg #F8F9F7, text #1A2F23, accent #2F5F48, hover #3A7D5A, surface #E8EFE9, muted #5A7D6A
Fonts: Instrument Serif Regular 400 (H1, H2 only) + Inter (everything else: H3 Medium 500, body Normal 400, citations Light 300 italic)
Buttons: square corners (border-radius: 0), solid accent or outlined
Voice: direct, honest, spacious, certain — short declaratives, contrast structure, no hype words
Spacing: generous — 128px section padding, max-width 1152px
Never: gradients, shadows, rounded interactive elements, two greens together, bold/heavy weight on H1 or H2
```

### Social / banner assets
- Dominant background: `#F8F9F7` or `#1A2F23` (light or dark — one per asset)
- Headline: Instrument Serif Regular (400), letter-spacing -0.02em, `#1A2F23` or `#F8F9F7` depending on bg
- Subline / body: Inter Normal (400)
- Accent element: single use of `#2F5F48` — one word, one line, one element
- No stock photography, no fake smiles, no gradients
- Whitespace is the design — don't fill it

### Client-facing documents (decks, proposals)
- Cover: `#1A2F23` background, `#F8F9F7` text, `#2F5F48` accent word
- Body slides: `#F8F9F7` background, `#1A2F23` text
- Slide headers: Instrument Serif Regular 400, letter-spacing -0.02em
- Body: Inter Normal 400, 18–20px, line-height 1.625
- No decorative elements beyond a `#D4C4A8` divider rule where structure is needed

### Email / newsletter
- Background: `#F8F9F7`
- Max width: 600px
- No header images — lead with text
- CTA button: `#2F5F48` fill, white text, border-radius 0, padding 12px 24px

---

## 9. Source of Truth

All content decisions defer to `napcae/TrungOPS`:

| What | File |
|------|------|
| Offer name | `offers/diagnostic.md` — heading line |
| Price | `offers/diagnostic.md` — Price field |
| ICP definitions | `strategy/icp.md` |
| Positioning / voice | `strategy/positioning.md` |
| Testimonial permission | `testimonials/wall-of-love.md` / `case-studies.md` — `Permission:` line |

Testimonial rule: check `Permission:` line before naming anyone. No line = no permission = anonymize.
