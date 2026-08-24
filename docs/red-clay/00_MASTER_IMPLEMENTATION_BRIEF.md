# Red Clay Coffee — Master Implementation Brief

**Document version:** 1.2.0  
**Round:** Section 6A.3 — implementation asset lock  
**Status:** Implementation orientation; not a final execution plan  
**Change note:** Adds the approved initial asset lock, Codex asset-map authority, and non-blocking custom-media boundary while preserving Round 1.1 architecture decisions.  
**Read first:** This document, then the specification that governs the task being implemented.

## Project in one paragraph

Red Clay is a fictional contemporary African coffee house built around the material character of place. Its portfolio website must demonstrate publication-grade editorial commerce: a believable storefront, complete long-form origin storytelling, disciplined mobile UX, and one memorable signature interaction. Coffee is primary. Architecture, laterite, terracotta, basalt, linen, the Kiln Cup, and editorial storytelling support the coffee world.

The conceptual continuum is **Earth → Coffee → Vessel → Ritual**. The approved visual hierarchy is **Contemporary Monograph** at the core, **Mineral Architecture** as structural/material support, and **Luminous Editorial** as warmth.

## Quality target

- Believable without animation; memorable because of one Red Clay-specific interaction.
- Canyon Coffee supplies restraint, composition, whitespace, commerce clarity, and editorial pacing.
- Red Clay supplies laterite/basalt identity, tactile material studies, East African origin narratives, architectural mass, contemporary African representation, and motion authorship.
- Onyx Coffee Lab is a secondary reference for motion confidence and occasional high-impact desktop composition, not density or futuristic styling.
- The result must not resemble a generic coffee template, generic AI-generated site, SaaS landing page, Shadcn dashboard, Canyon clone, or usability-poor animation demo.

## Fictional-brand boundary

The brand, products, commercial relationships, inventory, prices, operations, packaging, and Kiln Cup are fictional unless explicitly verified and approved. Real geography and agricultural context may appear only when fact-checked.

Never invent or imply real sourcing relationships, station partnerships, producer interviews, payments, impact, trade terms, inventory, logistics, certifications, or product performance. Do not hard-code legacy coffee names. Current product labels are `KENYA LOT 01`, `BURUNDI LOT 01`, `ETHIOPIA LOT 01`, `ETHIOPIA LOT 02`, and `THE KILN CUP`.

## Sitemap

| Route | Experience |
|---|---|
| `/` | Homepage |
| `/shop` | No-filter collection: four coffees + Kiln Cup |
| `/shop/[coffee-slug]` | Shared coffee PDP template |
| `/shop/the-kiln-cup` | Kiln Cup PDP |
| `/origins` | Origins hub + Earthen Folio |
| `/origins/[region-slug]` | Regional origin dossier |
| `/journal` | Public label: **The Editions** |
| `/journal/[chapter-slug]` | Edition article |
| `/about` | Brand thesis and representation |
| Global | Header, mobile menu, cart, footer |

Checkout is a commerce utility, not a bespoke Round-1 editorial page.

## Two valid user paths

**Reader’s Path:** Homepage or Origins → Earthen Folio / regional dossier / Edition → contextual coffee → PDP or inline purchase → cart.

**Purist’s Path:** Header or Homepage harvest → Shop → concise product comparison → PDP purchase module → cart.

Neither path may be treated as secondary. Editorial depth must not obstruct buying, and commerce must not flatten origin storytelling.

## Responsive philosophy

Mobile defines content order, accessibility, ergonomics, product discovery, and complete storytelling. It is an intimate pocket monograph with natural scroll and simple commerce. Desktop expands the same hierarchy into asymmetric spreads, oversized photographic plates, bounded sticky compositions, hover enhancements, and restrained motion. Effect parity is not required.

Do not create desktop first and collapse it. Do not ship desktop-only media to mobile. Tablet defaults to normal editorial flow rather than a shrunken pinned desktop stage.

## Signature experience: The Earthen Folio

Primary location: `/origins`, after the origin thesis. It presents Central Kenya, Kayanza / Burundi, and Southern Ethiopia as three editorial chapters.

- Desktop eligible mode: native vertical scroll, bounded sticky stage, image-led chapter transitions, folio numbering, compact metadata, direct chapter navigation, and a clean release.
- Mobile/reduced-motion/no-JS: complete stacked chapters with dedicated crops and normal dossier links.
- Preferred enhancement: semantic HTML + CSS + GSAP/ScrollTrigger.
- Explicitly unnecessary: WebGL, Three.js, maps, terrain, elevation simulators, literal page turns, scroll-jacking, autoplay video.

## Authority routing

Start with `Red-Clay-Source-of-Truth-Registry`, then use the specialist source controlling the decision. Section 4B controls content architecture; 4C preserves the original structural baseline; `03_SITE_ARCHITECTURE_WIREFRAMES.md` controls later explicit implementation refinements; `05_PAGE_ART_DIRECTION_SPECS.md` controls visual composition without changing required content; Section 5 and `08_SIGNATURE_EXPERIENCE_SPEC.md` control the locked Folio; `assets/IMPLEMENTATION_ASSET_LOCK.md` controls the current media selection and authorization state; and `assets/CODEX_ASSET_MAP.md` controls implementation paths, provenance constraints, alt-text guidance, and replacement allowances. This brief is a summary and never outranks those sources. Portfolio-level guidance cannot override Red Clay-specific decisions.

Round 1.1 explicitly supersedes the horizontal-row desktop Shop default and fixed 58/42 PDP assumption. The current prototypes are a Canyon-informed image-led Shop grid, a three-zone coffee PDP opening, and a restrained desktop editorial reveal menu. See the Registry ledger for the full locked record.

## Current unresolved decisions

- Final fictional coffee names, prices, bag size, grind options, roast/dispatch model, and product availability.
- Subscription inclusion and any subscription saving.
- Kiln Cup dimensions, capacity, material, safety, care, price, pairing, and bundle economics.
- Final verified origin facts, elevation ranges, cultivar/process terminology, and three Edition manuscripts.
- Final packaging identity, production imagery, font pairing, exact colors, exact motion timings/easing, and final breakpoint values.
- Whether compact region entries remain after the Folio or are partially absorbed after browser prototyping.
- Desktop header pinned versus smart-hide; select through browser validation.
- Whether the restrained desktop editorial reveal menu survives browser testing or reduces to the simpler header.
- Final custom coffee packaging, packshots, alternate product-card media, Kiln Cup imagery/dimensions, and coffee-plus-Cup pairing imagery remain pending. These use deliberate temporary media during the initial build and do not block implementation.

## Initial implementation asset gate

Section 6A.3 locks a reviewable initial media set under four explicit states: `APPROVED_CURRENT`, `PROVISIONAL_REPLACEABLE`, `REFERENCE_ONLY`, and `CUSTOM_ASSET_PENDING`. Use the lock and Codex map named above; do not infer authorization from older candidate tiers or scores. The selected source archive remains outside the repository until Codex copies the required files into the mapped `/public/media/red-clay/` paths.

**ASSET DISCOVERY NO LONGER BLOCKS IMPLEMENTATION.**

## Codex may decide during safe scaffolding

- Semantic component boundaries and naming that preserve the canonical component model.
- TypeScript types, mock-data shape, route/file organization, test structure, and progressive-enhancement boundaries.
- Accessible primitive implementation details, image wrappers, focus management, and no-JS fallbacks.
- Provisional CSS custom-property names and layout values within the documented ranges.
- Which nonessential media is lazy-loaded and how enhancement code is isolated.

These choices must remain easy to revise and must not masquerade as final art direction.

## Codex may not invent

- Brand strategy, page sections, product names/facts, origin claims, biographies, quotations, sourcing relationships, prices, discounts, inventory, shipping rules, subscriptions, legal terms, or product performance.
- Final imagery, generated labels, final typography/color choices, unsupported breakpoints, or a new signature interaction.
- Filters for the launch Shop, a second homepage Folio, mandatory 3D/WebGL, or new content-heavy pages.
- Generic card, gradient, bento, glass, dashboard, rating, sale, countdown, or excessive-animation patterns.

## Current implementation documentation package

- [`01_BRAND_CREATIVE_DIRECTION.md`](01_BRAND_CREATIVE_DIRECTION.md)
- [`02_VISUAL_REFERENCE_ATLAS.md`](02_VISUAL_REFERENCE_ATLAS.md)
- [`03_SITE_ARCHITECTURE_WIREFRAMES.md`](03_SITE_ARCHITECTURE_WIREFRAMES.md)
- [`04_CODE_FIRST_DESIGN_SYSTEM.md`](04_CODE_FIRST_DESIGN_SYSTEM.md)
- [`05_PAGE_ART_DIRECTION_SPECS.md`](05_PAGE_ART_DIRECTION_SPECS.md)
- [`06_CONTENT_COPY_DECK_SCAFFOLD.md`](06_CONTENT_COPY_DECK_SCAFFOLD.md)
- [`07_ASSET_MANIFEST_SCAFFOLD.md`](07_ASSET_MANIFEST_SCAFFOLD.md)
- [`08_SIGNATURE_EXPERIENCE_SPEC.md`](08_SIGNATURE_EXPERIENCE_SPEC.md)
- [`09_MOTION_INTERACTION_SYSTEM_DRAFT.md`](09_MOTION_INTERACTION_SYSTEM_DRAFT.md)
- [`ROUND_1_1_CORRECTION_REPORT.md`](ROUND_1_1_CORRECTION_REPORT.md)

## Source references

- `project_sources/06-Red-Clay-Source-of-Truth-Registry.txt`
- `project_sources/07-RED_CLAY_SECTION_5_EARTHEN_FOLIO_SIGNATURE_EXPERIENCE_SPEC-1-.md`
- `project_sources/03-RED_CLAY_SECTION_4C_CORRECTED_CANONICAL-1-.md`
- `project_sources/02-RED_CLAY_SECTION_4B_CORRECTED_CONSOLIDATED-1-.md`
- `project_sources/04-Strategic-Brand-Resolution-Earthen-Monograph-1-.md`
- `project_sources/05-RED-CLAY-ART-DIRECTION-VALIDATION-PACK-1-.md`
- Supplied screenshots listed in `02_VISUAL_REFERENCE_ATLAS.md`
- Google Drive: `00 Portfolio Brand Website Studio - Master Index`

## Decision required

### Post-Folio regional entries

**Issue:** Section 5 allows compact regional entries to remain after the Folio or be partially absorbed if redundant.  
**Source A:** 4B/4C section order retains three region entries.  
**Source B:** Section 5 leaves consolidation to browser prototyping.  
**Why it matters:** It affects Origins page length and duplicate links.  
**Recommended resolution:** Scaffold compact entries, then decide after Folio prototype review.  
**Blocks current documentation?** NO.
