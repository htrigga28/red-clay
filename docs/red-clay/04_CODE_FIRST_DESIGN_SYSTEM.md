# Red Clay Coffee — Code-First Design System

**Document version:** 1.1.0  
**Change note:** Round 1.1 adds the Canyon-led product-grid baseline, three-zone PDP prototype, and restrained desktop editorial reveal-menu rules.  
**Status:** Bounded Round-1 system. Ranges support prototyping; final typography, color, easing, and optical spacing remain open until real assets and browser screenshots exist.

## Design-system posture

Use semantic roles and a small number of strong primitives. Red Clay is not a component-library showcase. Reuse anatomy and behavior, but allow editorial sections to change composition and rhythm.

## Typography roles

### Editorial/display serif

Purpose: hero statements, region names, Edition titles, sensory chapter statements, product titles at larger scales. Character should feel authoritative, contemporary, bookish, and tactile—not nostalgic, fashion-thin, pseudo-ethnic, or ornamental.

**Open candidates, ranked for prototype testing:**

1. **Instrument Serif** — open-source; expressive contemporary editorial character; test body-size legibility and italics.
2. **Newsreader** — open-source; broader family and strong reading utility; slightly more literary/soft.
3. **Source Serif 4** — open-source; robust fallback and variable range; less distinctive without careful art direction.

**Final choice: OPEN.** Any paid alternative requires explicit licensing, webfont performance, and redistribution approval before adoption.

### Body/UI grotesk

Purpose: body copy, controls, cart, product metadata labels, navigation, forms. Must be quiet and highly legible.

**Open candidates:** Geist Sans, Inter, or IBM Plex Sans. Final choice is OPEN; Geist/Inter are safe prototype defaults, not brand decisions.

### Restrained metadata face

A mono is justified only for folio numbers, compact process/elevation labels, and utility values. Use **Geist Mono** or **IBM Plex Mono** provisionally. Do not set whole paragraphs or every label in mono.

## Type behavior

Use fluid values where the scale should respond to viewport. Optical tuning may vary by chosen face.

| Role | Provisional fluid range | Behavior |
|---|---|---|
| Hero display | `clamp(3rem, 7.5vw, 8.75rem)` | 2–5 lines on mobile; spatial but not cropped on desktop. |
| Folio region display | `clamp(3.5rem, 9vw, 10rem)` | May split across lines; supports image counterweight. |
| Section headline | `clamp(2.1rem, 4.2vw, 5rem)` | Short/medium statements; avoid same scale every section. |
| Product title | `clamp(1.45rem, 2.2vw, 2.75rem)` | Serif at PDP/feature scale; quieter on cards. |
| Article title | `clamp(2.75rem, 6vw, 7rem)` | Preserve readable line breaks and masthead hierarchy. |
| Body lead | `clamp(1.2rem, 1.5vw, 1.55rem)` | 1.35–1.5 line-height, used sparingly. |
| Body | `clamp(1rem, 0.35vw + .92rem, 1.125rem)` | 1.55–1.75 line-height; 55–70 characters desktop. |
| Metadata/UI | `0.72rem–0.9rem` | Grotesk/mono, modest tracking; never illegibly tiny. |
| Navigation | `0.82rem–0.95rem` | Quiet but touch target surrounds text. |

Avoid automatic uppercase for paragraphs. Uppercase is limited to short eyebrows, folio labels, and compact status language. Do not use typography animation that temporarily destroys legibility.

## Grid and measures

| View | Grid | Gutters | Measures |
|---|---|---|---|
| Mobile | 4 columns | 16 px reference; may reach 20–24 px on wide phones | Content ~358 px at 390; full-bleed media breaks gutter intentionally. |
| Tablet | 8 columns | 32 px | Reading max ~580 px; cards may form two columns. |
| Desktop | 12 columns | 60 px outer / 24 px internal at 1440 | Active frame ~1320 px; reading ~620 px; wide plate 1200 px–100vw. |

The primary desktop coffee PDP prototype uses three unequal zones: purchase/story, dominant product image, and metadata/details. Do not encode fixed percentages before browser review. The earlier roughly 7/5 or 58/42 media/purchase split is an alternate prototype only. Editorial asymmetry may otherwise use 7/5, 8/4, offset 5/6, or a centered reading column with oversized media. Keep fewer than five horizontal visual units; never fill every column merely because a grid exists.

## Spacing philosophy

Provisional primitives: 8, 16, 24, 32, 48, 64, 96, 140 px. These are relationships, not a uniform section-padding recipe.

- **Compressed:** metadata clusters, card copy, Continuum, cart.
- **Standard:** product groups, forms, supporting editorial blocks.
- **Expansive:** hero release, chapter transitions, Editions masthead, Folio entry/exit.
- **Deliberate interruption:** full-bleed images may touch one section and create a large release before the next.

Avoid identical `padding-block` on all sections. Rhythm should alternate compact information, image immersion, and open editorial pause.

## Color roles

Exact sampled values remain **PROVISIONAL** until final imagery is produced and calibrated. Define roles first:

| Role | Use | Constraint |
|---|---|---|
| **Bone / Linen** | Primary bright canvas, product grounds, reading surfaces | Warm-neutral, not yellow beige or clinical white. |
| **Basalt / Obsidian** | Primary text, dark chapters, cart/menu depth, strong rules | Preserve shadow detail; do not crush all dark imagery. |
| **Laterite** | Region/material emphasis, selected planes, active marks | Pigmented mineral red; not a global red wash. |
| **Terracotta** | Vessel/product accents, tactile warmth | Distinct from Laterite; avoid muddy brown sameness. |
| **Stone / Ash neutrals** | Secondary surfaces, disabled states, fine divisions | Must maintain accessible text contrast. |
| **Coffee / botanical support** | Deep liquid brown, restrained leaf green from imagery | Image-led and secondary; not a decorative UI palette. |

Prototype colors may be stored as `--color-canvas`, `--color-ink`, `--color-mineral`, `--color-clay`, and `--color-rule`; do not label arbitrary hex values “final.” Validate WCAG contrast in every surface pairing.

## Surfaces, borders, and radius

- Default surface is the page itself, not a card container.
- Use background changes for chapter rhythm: Bone ↔ Basalt or a restrained Laterite plane.
- Fine 1 px rules structure metadata, folio progress, menus, tables, and footer groups.
- Product media may have a small practical radius only if the final photographic system supports it; default prototype radius is 0–4 px.
- Drawers/sheets may use a modest top radius on mobile for platform familiarity; do not propagate it to content sections.
- Pills are reserved for true selectable chips/statuses, not links, headings, or decorative labels.
- Shadows are functional for overlays and focus separation, never floating-card decoration.

## Buttons and links

### Primary commerce action

Solid high-contrast rectangular button, full-width in mobile buy modules, comfortable 48 px minimum touch height. Label is direct: `Add to Bag`, optionally with price when stable. Loading preserves width; success is announced without replacing navigation context.

### Secondary editorial action

Text-forward or outlined rectangular action. Use for `Explore Origins`, `Read the Edition`, `View the Kiln Cup`. It should not compete with Add to Bag.

### Text link

Sentence-case label plus subtle directional arrow or underline. Hover/focus can animate the rule/arrow a few pixels; the label itself stays stable. Underlines or other non-color cues identify links in body copy.

### Inline commerce

Compact product context plus one action. Mobile may open a purchase sheet; desktop may expose format selection inline. Do not turn an article into a series of buy banners.

All states require visible keyboard focus. Hover effects must have touch/keyboard equivalents. Disabled actions include explanation when a choice is required.

## Image system

### Full-bleed plates

Use as rare chapter punctuation: hero, origin landscape, major visual interlude, ritual release. UI chrome recedes. Captions remain small, accessible, and outside important image content.

### Product photography

- Consistent packaging and Cup geometry across all files.
- Primary card image uses a quiet, calibrated ground and clear silhouette.
- Secondary images show material, opened pack, coffee ritual, or region-relevant context.
- Never rely on AI-rendered text; labels and product information are added in code/design.

### Editorial plates

Use 4:5, 3:2/16:9, and occasional 1:1 with intentional focal safety. Desktop may use clipping/masks; the underlying asset remains visible in a simple container without enhancement.

### Mobile crops

Dedicated 9:16 or 4:5 crops where centering a landscape destroys subject or negative space. Do not download desktop-only Folio leads to mobile when dedicated versions exist.

### Hover image swap

Pointer devices may crossfade or clip to one alternate image without resizing the card. Preload only when near viewport or after intent. Reduced motion may swap instantly. Mobile uses explicit gallery/touch presentation.

### Captions and alt text

Captions state relevant place/material/process context and verification status. Alt text describes meaningful content; decorative textures have empty alt. Never use alt text to smuggle unverified facts.

## Product cards

**Rest anatomy:** dominant media → name → region/type → three notes or material line → one compact metadata row → price/status. Minimal permanent chrome.

- Media dominates; chrome is minimal.
- Desktop hover may reveal alternate media and quick-add within the image plane.
- Quick-add opens a format selector if required; it cannot silently choose a grind.
- Mobile action is visible and thumb-friendly; no hover simulation.
- Sold out uses `Harvest Concluded`; no urgency animation, ratings, sale badge, or countdown.
- Variants may be featured, standard, compact, related, and inline-commerce while keeping the same data contract.
- Avoid five identical oversized mobile cards; vary crop/spacing/emphasis, not information integrity.

## Product grid

- Desktop Shop baseline is a calm, Canyon-informed image-led grid with generous opening and inter-row whitespace; it is not a dense information table or horizontal-row list.
- Four coffees form the dominant collection. The Kiln Cup remains secondary through a separate row, different span, or quieter visual scale.
- Prototype responsive counts rather than hard-code a Canyon ratio: one column on mobile; two where tablet/card width permits; three or four coffee columns on wide desktop when imagery and metadata remain legible.
- Deliberate non-uniformity is an art-direction tool, not a bento pattern. Vary only when hierarchy requires it; do not randomize spans.
- Hover/focus may reveal one alternate image and restrained Quick Add. Never translate/lift the card or add overlay-control clutter.

## Coffee PDP opening

- **Primary desktop prototype:** three unequal zones—purchase/identity/tasting/options; dominant product image; origin/process/dispatch/technical context.
- **Alternate prototype:** 58/42 media/purchase composition. It is retained for browser comparison and is not the canonical default.
- Opening utility must transition into larger publication-like editorial chapters. Borders and compact metadata belong to utility; they must not frame the whole PDP as a dashboard.
- Mobile follows a single buying-first sequence and does not imitate three desktop columns.

## Desktop editorial reveal menu

- Use one spacious panel visually separated from the current page; no nested flyouts, taxonomy maze, or promo wall.
- Shop groups four coffees under `COFFEE`, the Kiln Cup under `OBJECT`, and at most one editorial/current-harvest feature. Origins lists the three regions and at most one contextual feature.
- Typography stays restrained; one strong image may anchor the feature. Fine rules/background separation are preferable to rounded menu cards or glass blur.
- Pointer, keyboard, focus, Escape, route-change, and outside-click states must agree. Essential routes remain in the base navigation.
- Treat as a prototype: collapse to the simpler desktop header if testing makes the launch catalog feel artificially large. Mobile uses its simple full-screen menu instead.

## Responsive behavior

- DOM order follows mobile narrative order.
- Desktop layout changes via grid/positioning, not content duplication.
- Hide decorative desktop layers on mobile; never hide essential text/actions.
- Use container queries only where they simplify component variants; viewport breakpoints govern page composition and Folio eligibility.
- Hover capability is detected separately from width.
- Use `svh/dvh` carefully for mobile sheets and hero/stage height.
- Tablet defaults to normal flow and wider editorial pairs.

## Accessibility baseline

- One H1; semantic regions; headings follow content hierarchy rather than visual size.
- Visible focus on every interactive element; focus not obscured by sticky header/buy bar.
- 48×48 px touch intent for primary targets.
- Dialog semantics, focus trap, Escape, backdrop behavior, focus restoration.
- Form labels, inline error association, live status for cart/newsletter updates.
- Meaningful alt text; decorative layers hidden from assistive tech.
- Reduced-motion mode has no extended pinning, scrubbed masks, ambient video, or hidden animation-waiting content.
- Contrast is tested on actual imagery/surfaces; text over photography requires a controlled readable field, not hope.

## Anti-AI-generated-site rules

- No endless rounded cards, arbitrary 24 px radii, bento grids, glass, decorative gradients, floating panels, or centered SaaS hero.
- No icon feature grid, fake metrics/charts, testimonials, star ratings, sale/countdown language, or dashboard motifs.
- No identical section spacing or copy-pasted two-column sections.
- No ubiquitous fade-up, spring/bounce, gratuitous parallax/3D, particles, or smooth-scroll dependency.
- No generic beige “luxury,” fake African patterns, safari cues, pseudo-ethnic type, or tourism imagery.
- No template decision that competes with coffee discovery, reading, or cart completion.

## Implementation token status

| Token group | Round-1 status |
|---|---|
| Semantic color roles | Defined; numeric values open |
| Typography roles | Defined; final families open |
| Type/measure ranges | Prototype-ready; optical tuning open |
| Grid/gutters | Canonical structural ranges |
| Spacing relationships | Prototype-ready; per-page tuning required |
| Radius/shadow | Restrained defaults; final image-dependent |
| Motion durations/easing | Intentionally open until browser prototype |
