**Document Version:** 1.1.0 — Corrected Canonical

**Phase:** Low-Fidelity Layout, Content Hierarchy & Responsive Wireframes

**Single Source of Truth:** Section 4B v2.0 (Corrected & Consolidated)

**Status:** Corrected canonical wireframe specification — Section 4C complete


## Canonical Use & Guardrails

This document is the corrected Section 4C implementation reference and inherits all constraints from **Section 4B v2.0 — Corrected & Consolidated**.

- **Wireframe values are structural references, not final design tokens.** Pixel sizes, ratios, and column proportions may be tuned during code-first interface art direction.
- **Product names remain placeholders:** `KENYA LOT 01`, `BURUNDI LOT 01`, `ETHIOPIA LOT 01`, `ETHIOPIA LOT 02`.
- **Exact elevations, cultivar details, process durations, roast details, tasting-note wording, and other factual origin copy remain provisional until verified.** Their presence here indicates information hierarchy and placement, not factual lock.
- **The Kiln Cup is fictional.** Capacity, dimensions, material performance, safety, care, and ergonomic claims remain fictional product specifications until physically validated.
- **Subscriptions are not a launch requirement.** Any subscription state or saving is optional/deferred unless explicitly retained later.
- **Section 5 remains concept-neutral.** This document reserves space for a future signature experience but does not assume a map, elevation profiler, WebGL terrain, 3D vessel, light study, or any other specific interaction.
- **No unsupported commercial relationships.** Red Clay must not imply real direct-trade arrangements, producer partnerships, sourcing contracts, payments, or verified impact.
- **Copy is provisional.** It exists to make wireframes meaningful and may be refined during the final content pass.

# PART 1 — GLOBAL WIREFRAME SYSTEM

## A. Page Container Model

- **Mobile (390px reference viewport):**
    
    - Screen Edge Padding: `16px` lateral gutter (content width: `358px`).
        
    - Full-Bleed Containers: `100vw` with `0px` margin (used for Hero images, visual interludes, and regional landscape plates).

    - Reading Text Measure: `100%` of container (`358px` max, ~38–44 characters per line).
        
- **Tablet (768px reference viewport):**
    
    - Screen Edge Padding: `32px` lateral gutter (content width: `704px`).
        
    - Editorial Reading Measure: Centered container capped at `580px` (~55–65 characters per line) for long-form comfort.

- **Desktop (1440px reference viewport):**
    
    - Page Max-Width: `1320px` active content frame with `60px` outer margins.
        
    - Wide Canvas Sections: `100vw` full-width background bands with constrained interior content grids.
        
    - Editorial Reading Column: `620px` max-width (~60–70 characters per line) offset asymmetrically to preserve reading rhythm.

    - Wide Photographic Sections: `1200px` to `100vw` depending on visual weight.

## B. Vertical Rhythm Scale

- **`SPACE-XS` (8px):** Micro-spacing between tags, metadata labels, and paired text lines.

- **`SPACE-S` (16px):** Interior card padding, gap between eyebrow and headline, button margin.

- **`SPACE-M` (32px):** Stack gap between content blocks on mobile, form field separation.

- **`SPACE-L` (64px):** Standard section padding on mobile; sub-module gap on desktop.

- **`SPACE-XL` (96px):** Standard section transition on desktop; major thematic breaks on mobile.

- **`SPACE-XXL` (140px):** Expansive desktop editorial transitions (e.g., Hero to Continuum, Origins to Footer).

## C. Grid Principles

- **Mobile (390px):** Strict 4-column grid (`16px` margins, `12px` gutters). Single-column dominant flow.

- **Tablet (768px):** 8-column grid (`32px` margins, `16px` gutters). 2-column card layouts, centered editorial streams.

- **Desktop (1440px):** 12-column grid (`60px` margins, `24px` gutters).

    - _Standard Editorial Split:_ 7 columns (Content/Reading, `58.3%`) + 5 columns (Imagery/Pinned UI, `41.7%`).

    - _Product Split (PDP):_ 7 columns (Editorial Image Stream, `58.3%`) + 5 columns (Sticky Purchase Panel, `41.7%`).

    - _Asymmetric Trio (Shop/Origins):_ 4 columns + 4 columns + 4 columns offset with empty lead/trail columns.

## D. Section Types (Low-Fidelity Archetypes)

1. **`SEC-HERO`:** Viewport-led or 4:5/16:9 media container with layered negative-space text.

2. **`SEC-TRANSITION`:** Compact single-row or vertical stack for conceptual shifts (e.g., Continuum).

3. **`SEC-LIST-EDITORIAL`:** Generous horizontal (desktop) or vertical (mobile) product cards.

4. **`SEC-SPLIT-MONOGRAPH`:** Asymmetric 2-column container pairing media with pinned or scrolling text.

5. **`SEC-PLATE-FULL`:** 100vw image or video interlude breaking editorial prose.

6. **`SEC-DATA-ACCORDION`:** Compact, collapsible key/value list for technical provenance.

7. **`SEC-CARD-GRID`:** 3-column (desktop) or stacked/swipeable (mobile) regional/story index.

8. **`SEC-INLINE-COMMERCE`:** In-article contextual card triggering direct purchase.

9. **`SEC-SLOT-S5`:** Bounded placeholder reserved for Section 5 interaction with static fallback.

10. **`SEC-FOOTER-MULTI`:** Structured multi-column directory with integrated dispatch form.

## E. Sticky & Fixed UI Collision Rules

```
+-----------------------------------------------------------------------------------+
| STICKY UI PRIORITY & COLLISION RULES |
+-----------------------------------------------------------------------------------+
| 1. GLOBAL HEADER: Fixed 48px (mobile) / 72px (desktop). Smart-hides on scroll- |
|    down; reappears instantly on scroll-up. |
| 2. MOBILE BUY BAR: Fixed 54px at bottom. Appears ONLY after Level 1 PDP buy |
|    module scrolls out of view. Disappears when scrolled back to top. |
| 3. CART DRAWER: Modal overlay (z-index: 100). Locks body scroll. Header and Buy |
|    Bar become inert while open. |
| 4. MOBILE MENU: Modal overlay (z-index: 90). Locks body scroll. |
| 5. DESKTOP PINNED PANEL: Pinned inside its section container ONLY. Stops at the |
|    section baseline to prevent overlapping related products or footer.|
+-----------------------------------------------------------------------------------+
```

# PART 2 — GLOBAL HEADER WIREFRAMES

### Mobile Header (390px)

- **Height:** `48px` fixed.
    
- **Behavior:** Smart-hide on scroll-down (> 60px); instant reveal on scroll-up (> 10px). Background has solid/frosted ground to maintain contrast.

- **Z-Index:** `50` (sits below Cart Drawer and Menu Overlay).

```
┌────────────────────────────────────────────────────────┐
│ [=] Menu               RED CLAY               Bag [0]  │
└────────────────────────────────────────────────────────┘
```

### Desktop Header (1440px)

- **Height:** `72px` pinned or smart-hide.

- **Behavior:** Sits cleanly above content. Links use quiet text styling with subtle underline state for active routes.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│  RED CLAY          Shop      Origins      The Editions      About                           Bag [0]  │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

# PART 3 — HOMEPAGE WIREFRAME

## Mobile Homepage (390px)

### A. Full Page ASCII Wireframe

```text
┌────────────────────────────────────────────────────────┐
│ [=] Menu               RED CLAY               Bag [0]  │
├────────────────────────────────────────────────────────┤
│ 01 HERO ENCOUNTER                                      │
│ [IMAGE: HOME-HERO-M — 9:16]                            │
│ EYEBROW: EAST AFRICAN HIGHLAND COFFEES                 │
│ HEADLINE: Coffee from the highlands of East Africa.    │
│           Roasted for the stillness of early light.    │
│ COPY: Four seasonal single-origin releases from        │
│       Kenya, Burundi, and Ethiopia.                    │
│ [ EXPLORE THE HARVEST ]   [ Read the Editions ]        │
├────────────────────────────────────────────────────────┤
│ 02 THE CONTINUUM — COMPACT TRANSITION                  │
│ From highland earth to the morning vessel.             │
│ Earth → Coffee → Vessel → Ritual                       │
├────────────────────────────────────────────────────────┤
│ 03 CURRENT HARVEST                                     │
│ HEADLINE: Four single-origin releases. One companion.  │
│                                                        │
│ ┌────────────────────────────────────────────────────┐ │
│ │ FEATURED COFFEE                                    │ │
│ │ [IMAGE: HOME-PROD-01 — 3:4]                       │ │
│ │ KENYA LOT 01 • Central Kenya                      │ │
│ │ Notes: Blackcurrant • Plum • Cane Sugar           │ │
│ │ [METADATA — VERIFY] • [PRICE]                     │ │
│ │ [ QUICK ADD ]           [ View Coffee ]           │ │
│ └────────────────────────────────────────────────────┘ │
│                                                        │
│ ┌────────────────────────────────────────────────────┐ │
│ │ COMPACT COFFEE CARD — BURUNDI LOT 01              │ │
│ │ [THUMB] Origin • Notes • [PRICE] • [ QUICK ADD ]   │ │
│ ├────────────────────────────────────────────────────┤ │
│ │ COMPACT COFFEE CARD — ETHIOPIA LOT 01             │ │
│ │ [THUMB] Origin • Notes • [PRICE] • [ QUICK ADD ]   │ │
│ ├────────────────────────────────────────────────────┤ │
│ │ COMPACT COFFEE CARD — ETHIOPIA LOT 02             │ │
│ │ [THUMB] Origin • Notes • [PRICE] • [ QUICK ADD ]   │ │
│ └────────────────────────────────────────────────────┘ │
│                                                        │
│ ┌────────────────────────────────────────────────────┐ │
│ │ COMPANION OBJECT — THE KILN CUP                   │ │
│ │ [IMAGE: HOME-PROD-05 — compact object crop]       │ │
│ │ Terracotta • light glaze • [FICTIONAL SPECS]      │ │
│ │ [ VIEW THE KILN CUP ]                             │ │
│ └────────────────────────────────────────────────────┘ │
│ [ VIEW FULL COLLECTION ]                              │
├────────────────────────────────────────────────────────┤
│ 04 THREE ORIGIN TERRITORIES                            │
│ [CARD: CENTRAL KENYA]                                  │
│ [CARD: KAYANZA / BURUNDI]                             │
│ [CARD: SOUTHERN ETHIOPIA]                             │
│ Each: image → region → concise context → dossier CTA   │
├────────────────────────────────────────────────────────┤
│ 05 FEATURED EDITION                                    │
│ [IMAGE: HOME-EDITION-01]                               │
│ Water & Time: Washed coffee in Central Kenya.          │
│ Short excerpt.                                         │
│ [ Read the Edition ]   [ View Kenya Lot 01 ]           │
├────────────────────────────────────────────────────────┤
│ 06 RITUAL & THE KILN CUP                               │
│ [IMAGE: HOME-KILN-RITUAL]                              │
│ Raw terracotta. Light glaze. A vessel for the brew.    │
│ [ VIEW THE KILN CUP ]                                  │
├────────────────────────────────────────────────────────┤
│ 07 DISPATCH / NEWSLETTER / FOOTER                      │
│ Roast and dispatch details remain placeholders.        │
│ [ Email Address ] [ JOIN DISPATCH ]                    │
│ Shop • Origins • The Editions • About                  │
│ Project / Sourcing Disclosure • Legal                  │
└────────────────────────────────────────────────────────┘
```

### B. Mobile Section Annotations

- **Hero:** Keep the primary CTA and core brand proposition available early. The hero may be viewport-led, but must not force all copy below the fold.
- **Continuum:** Compact transition, not a full-screen manifesto.
- **Current Harvest:** Do **not** stack five identical oversized 3:4 cards. Use one larger featured coffee, three compact supporting coffee cards, and a visually distinct compact Kiln Cup card. All five products remain discoverable.
- **Origins:** Default to stacked cards for clarity. A horizontal snap treatment may be tested later only if it materially shortens the page without harming discoverability.
- **Featured Edition:** One editorial image, concise excerpt, and one contextual product link. Do not duplicate the full article.
- **Kiln Cup:** Compact and subordinate to coffee.
- **Footer:** Newsletter is inline only; no modal capture.

### C. Mobile Page-Length Classification

- **Classification:** **LONG-MEDIUM, intentionally paced.**
- Do not claim an exact number of viewport scrolls before real frames exist. Validate actual page height during code-first visual prototyping.
- If the homepage feels long in browser review, first compress product-card height and Origins previews before removing narrative sections.

## Desktop Homepage (1440px)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│  RED CLAY          Shop      Origins      The Editions      About                           Bag [0]  │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 01 HERO ENCOUNTER (Asymmetric 16:9 Spatial Canvas)                                                   │
│ ┌──────────────────────────────────────────┬───────────────────────────────────────────────────────┐ │
│ │ EYEBROW: EAST AFRICAN HIGHLAND COFFEES   │ [IMAGE: HOME-HERO-D (16:9 Rammed Earth Pavilion Terrace│ │
│ │ HEADLINE:                                │  Overlooking Mount Kenya Slopes at Dawn)]             │ │
│ │ Coffee from the highlands of East Africa.│                                                       │ │
│ │ Roasted for the stillness of early light.│                                                       │ │
│ │                                          │                                                       │ │
│ │ COPY: Four seasonal single-origin        │                                                       │ │
│ │ releases from Kenya, Burundi, and        │                                                       │ │
│ │ Ethiopia, presented through place, craft,│                                                       │ │
│ │ and the ritual of brewing.               │                                                       │ │
│ │                                          │                                                       │ │
│ │ [ EXPLORE HARVEST ]  [ Read Editions ]   │                                                       │ │
│ └──────────────────────────────────────────┴───────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 02 THE CONTINUUM (Horizontal 4-Column Typographic Strip)                                             │
│ ┌──────────────────┬───────────────────┬──────────────────────┬────────────────────────────────────┐ │
│ │ 01 EARTH         │ 02 COFFEE         │ 03 VESSEL            │ 04 RITUAL                          │ │
│ │ Highland soils & │ Washed & natural  │ Hand-thrown          │ The deliberate                     │ │
│ │ volcanic rain.   │ lots for clarity. │ terracotta stoneware.│ practice of morning extraction.    │ │
│ └──────────────────┴───────────────────┴──────────────────────┴────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 03 CURRENT HARVEST (Editorial Asymmetric Layout)                                                     │
│ EYEBROW: CURRENT HARVEST // VOL. 01         HEADLINE: Four single-origin releases. One companion.     │
│ ┌──────────────────────────┬──────────────────────────┬──────────────────────────┬─────────────────┐ │
│ │ [IMAGE: HOME-PROD-01]    │ [IMAGE: HOME-PROD-02]    │ [IMAGE: HOME-PROD-03]    │ [IMAGE: PROD-05]│ │
│ │ KENYA LOT 01             │ BURUNDI LOT 01           │ ETHIOPIA LOT 01          │ THE KILN CUP    │ │
│ │ Central Kenya • [VERIFY]   │ Kayanza • [VERIFY]         │ Yirgacheffe • [VERIFY]   │ Terracotta object│ │
│ │ Blackcurrant, Plum, Sugar│ Apple, Honey, Blossom    │ Jasmine, Bergamot, Peach │ White Glaze     │ │
│ │ [PRICE] — [ QUICK ADD ]  │ [PRICE] — [ QUICK ADD ]  │ [PRICE] — [ QUICK ADD ]  │ [PRICE]—[ADD CUP│ │
│ └──────────────────────────┴──────────────────────────┴──────────────────────────┴─────────────────┘ │
│ ┌─────────────────────────────────────────────────────┬────────────────────────────────────────────┐ │
│ │ [IMAGE: HOME-PROD-04 (Wide Card)]                   │ ETHIOPIA LOT 02 • Guji Zone • 2,180m       │ │
│ │ Natural Processed Highland Landrace                 │ Notes: Wild Blueberry, Dark Cocoa, Fig     │ │
│ │ Limited Numbered Harvest Micro-Lot                  │ [PRICE] / 250g  ──  [ QUICK ADD TO BAG ]   │ │
│ └─────────────────────────────────────────────────────┴────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 04 THREE ORIGIN TERRITORIES (3-Column Regional Plate Layout)                                         │
│ ┌──────────────────────────────┬──────────────────────────────┬────────────────────────────────────┐ │
│ │ [IMAGE: HOME-ORIGIN-KENYA]   │ [IMAGE: HOME-ORIGIN-BURUNDI] │ [IMAGE: HOME-ORIGIN-ETHIOPIA]      │ │
│ │ CENTRAL KENYA                │ KAYANZA, BURUNDI             │ SOUTHERN ETHIOPIA                  │ │
│ │ [ELEVATION — VERIFY]         │ [ELEVATION — VERIFY]         │ [ELEVATION — VERIFY]               │ │
│ │ Volcanic soils & double-wash.│ Steep slopes & single-hills. │ Montane shade & wild landraces.    │ │
│ │ [ Explore Kenya Dossier -> ] │ [ Explore Burundi Dossier ->]│ [ Explore Ethiopia Dossier -> ]    │ │
│ └──────────────────────────────┴──────────────────────────────┴────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 05 FEATURED EDITION (50/50 Split Monograph Spread)                                                   │
│ ┌─────────────────────────────────────────────────────┬────────────────────────────────────────────┐ │
│ │ EYEBROW: HARVEST EDITION // VOL. 01                 │ [IMAGE: HOME-EDITION-01 (16:9 Large Plate)]│ │
│ │ HEADLINE: Water & Time: Washed coffee in the        │                                            │ │
│ │           Central Kenya highlands.                  │                                            │ │
│ │ COPY: Central Kenya's cooperative washing tradition │                                            │ │
│ │ relies on meticulous cherry sorting and freshwater  │ ┌────────────────────────────────────────┐ │
│ │ soaking channels to produce exceptional clarity.    │ │ [INLINE BUY CARD: KENYA LOT 01]        │ │
│ │                                                     │ │ [PRICE] / 250g ── [ QUICK ADD TO BAG ] │ │
│ │ [ READ THE FULL MONOGRAPH -> ]                      │ └────────────────────────────────────────┘ │
│ └─────────────────────────────────────────────────────┴────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 06 RITUAL & THE KILN CUP (Two-Column Material Study)                                                 │
│ ┌─────────────────────────────────────────────────────┬────────────────────────────────────────────┐ │
│ │ [IMAGE: HOME-KILN-RITUAL (4:5 Morning Pour)]        │ EYEBROW: THE COMPANION OBJECT              │ │
│ │                                                     │ HEADLINE: Raw terracotta. White glaze.     │ │
│ │                                                     │ COPY: Hand-thrown stoneware calibrated     │ │
│ │                                                     │ for single-origin filter extraction.       │ │
│ │                                                     │ [ ACQUIRE VESSEL ]   [ Pair with Coffee ]  │ │
│ └─────────────────────────────────────────────────────┴────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 07 DISPATCH, TRUST & GLOBAL FOOTER (4-Column Architectural Grid)                                     │
│ ┌──────────────────────┬──────────────────────┬──────────────────────┬─────────────────────────────┐ │
│ │ RED CLAY COFFEE      │ EXPLORE              │ SUPPORT & LEGAL      │ DISPATCH & RETENTION        │ │
│ │ Contemporary African │ • Shop Collection    │ • Project / Sourcing Disclosure    │ Weekly Roast: [ROAST DAY]   │ │
│ │ Coffee House.        │ • Origins Hub        │ • Shipping Terms     │ Dispatched in [WINDOW]      │ │
│ │ Earth • Coffee •     │ • The Editions       │ • Legal & Privacy    │ [ Email Address   ] [ JOIN ]│ │
│ │ Vessel • Ritual      │ • About Thesis       │ • Contact Studio     │ © 2026 Red Clay Coffee.     │ │
│ └──────────────────────┴──────────────────────┴──────────────────────┴─────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

# PART 4 — SHOP / COLLECTION WIREFRAME

### Mobile Shop (390px)

```
┌────────────────────────────────────────────────────────┐
│ [=] Menu               RED CLAY               Bag [0]  │
├────────────────────────────────────────────────────────┤
│ 01 COLLECTION INTRO                                    │
│ EYEBROW: CURRENT HARVEST // VOL. 01                    │
│ HEADLINE: Single-origin releases and one companion     │
│           object.                                      │
│ COPY: Four coffees from three highland regions.        │
├────────────────────────────────────────────────────────┤
│ 02 EDITORIAL HARVEST LIST (5 Products, No Filters)     │
│                                                        │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: SHOP-KENYA-01 (3:4 Packshot)]              │ │
│ │ KENYA LOT 01 • Central Kenya                       │ │
│ │ Notes: Blackcurrant • Damson Plum • Cane Sugar     │ │
│ │ 2,050m • Double-Washed • 250g                      │ │
│ │ Price: [PRICE]                                     │ │
│ │ [ QUICK ADD ]          [ View Details -> ]         │ │
│ └────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: SHOP-BURUNDI-01 (3:4 Packshot)]            │ │
│ │ BURUNDI LOT 01 • Kayanza Province                  │ │
│ │ Notes: Red Apple • Honey • Orange Blossom          │ │
│ │ 1,900m • Washed • 250g                             │ │
│ │ Price: [PRICE]                                     │ │
│ │ [ QUICK ADD ]          [ View Details -> ]         │ │
│ └────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: SHOP-ETHIOPIA-01 (3:4 Packshot)]           │ │
│ │ ETHIOPIA LOT 01 • Yirgacheffe Zone                 │ │
│ │ Notes: Jasmine Blossom • Bergamot • Peach          │ │
│ │ 2,100m • Washed • 250g                             │ │
│ │ Price: [PRICE]                                     │ │
│ │ [ QUICK ADD ]          [ View Details -> ]         │ │
│ └────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: SHOP-ETHIOPIA-02 (3:4 Packshot)]           │ │
│ │ ETHIOPIA LOT 02 • Guji Zone                        │ │
│ │ Notes: Wild Blueberry • Cocoa • Dried Fig          │ │
│ │ 2,180m • Natural • 250g                            │ │
│ │ Price: [PRICE]                                     │ │
│ │ [ QUICK ADD ]          [ View Details -> ]         │ │
│ └────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: SHOP-KILN-01 (3:4 Kiln Cup Hero)]          │ │
│ │ THE KILN CUP • Companion Hardware                  │ │
│ │ Notes: Raw Terracotta • Mineral-White Glaze        │ │
│ │ 280ml Capacity • Studio Edition                    │ │
│ │ Price: [PRICE]                                     │ │
│ │ [ ADD TO BAG ]         [ View Object -> ]          │ │
│ └────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────┤
│ 03 ROAST & DISPATCH NOTE                               │
│ Small-batch roasting on [ROAST DAY]. Dispatched fresh. │
├────────────────────────────────────────────────────────┤
│ 04 GLOBAL FOOTER                                       │
└────────────────────────────────────────────────────────┘
```

### Desktop Shop (1440px)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│  RED CLAY          Shop      Origins      The Editions      About                           Bag [0]  │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 01 STOREFRONT INTRO                                                                                  │
│ EYEBROW: CURRENT HARVEST // VOL. 01                                                                  │
│ HEADLINE: Single-origin releases and one companion object.                                           │
│ COPY: Four single-origin coffees from three East African highland regions, presented alongside our   │
│       companion hand-thrown ceramic vessel. Roasted to order.                  │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 02 EDITORIAL HARVEST LIST (Horizontal Split Product Cards)                                           │
│                                                                                                      │
│ ┌─────────────────────┬──────────────────────────────────────────────────────┬─────────────────────┐ │
│ │ [IMAGE: SHOP-KENYA] │ KENYA LOT 01                                         │ Price: [PRICE]      │ │
│ │ (3:4 Pack on Basalt)│ Origin: Nyeri County, Central Kenya • 2,050m         │ Format: [Whole][Fltr│ │
│ │                     │ Notes: Blackcurrant • Damson Plum • Cane Sugar       │                     │ │
│ │                     │ Metadata: Washed • [CULTIVAR — VERIFY] • 250g      │ [ QUICK ADD TO BAG ]│ │
│ │                     │ Allocation: In Stock // Roasted Weekly on [ROAST DAY]│ [ View Details -> ] │ │
│ └─────────────────────┴──────────────────────────────────────────────────────┴─────────────────────┘ │
│ ┌─────────────────────┬──────────────────────────────────────────────────────┬─────────────────────┐ │
│ │ [IMAGE: SHOP-BUR]   │ BURUNDI LOT 01                                       │ Price: [PRICE]      │ │
│ │ (3:4 Pack on Stone) │ Origin: Kayanza Province, Nile-Congo Crest • 1,900m  │ Format: [Whole][Fltr│ │
│ │                     │ Notes: Crisp Red Apple • Wildflower Honey • Blossom  │                     │ │
│ │                     │ Metadata: Washed • [CULTIVAR — VERIFY] • 250g        │ [ QUICK ADD TO BAG ]│ │
│ │                     │ Allocation: In Stock // Roasted Weekly on [ROAST DAY]│ [ View Details -> ] │ │
│ └─────────────────────┴──────────────────────────────────────────────────────┴─────────────────────┘ │
│ ┌─────────────────────┬──────────────────────────────────────────────────────┬─────────────────────┐ │
│ │ [IMAGE: SHOP-ETH01] │ ETHIOPIA LOT 01                                      │ Price: [PRICE]      │ │
│ │ (3:4 Pack on Clay)  │ Origin: Yirgacheffe Zone, Southern Highlands • 2,100m│ Format: [Whole][Fltr│ │
│ │                     │ Notes: Jasmine Blossom • Candied Bergamot • Peach    │                     │ │
│ │                     │ Metadata: Washed • [BOTANICAL DETAIL — VERIFY] • 250g│ [ QUICK ADD TO BAG ]│ │
│ │                     │ Allocation: Seasonal Harvest Release                 │ [ View Details -> ] │ │
│ └─────────────────────┴──────────────────────────────────────────────────────┴─────────────────────┘ │
│ ┌─────────────────────┬──────────────────────────────────────────────────────┬─────────────────────┐ │
│ │ [IMAGE: SHOP-ETH02] │ ETHIOPIA LOT 02                                      │ Price: [PRICE]      │ │
│ │ (3:4 Pack on Slate) │ Origin: Guji Zone, Montane Canopy • 2,180m           │ Format: [Whole][Fltr│ │
│ │                     │ Notes: Wild Blueberry • Dark Cocoa • Dried Fig       │                     │ │
│ │                     │ Metadata: Natural • [BOTANICAL DETAIL — VERIFY] • 250g│ [ QUICK ADD TO BAG ]│ │
│ │                     │ Allocation: Limited Micro-Lot Allocation             │ [ View Details -> ] │ │
│ └─────────────────────┴──────────────────────────────────────────────────────┴─────────────────────┘ │
│ ┌─────────────────────┬──────────────────────────────────────────────────────┬─────────────────────┐ │
│ │ [IMAGE: SHOP-KILN]  │ THE KILN CUP (280ml Ceramic Vessel)                  │ Price: [PRICE]      │ │
│ │ (3:4 Cup on Plinth) │ Material: Raw Terracotta Exterior • White Glaze Inside│ Edition: Studio     │ │
│ │                     │ Use: Companion vessel for filter coffee [FICTIONAL PRODUCT SPEC]     │ [ ACQUIRE VESSEL ]  │ │
│ │                     │ Pairing: Bundle with any 250g coffee and save [SAVING│ [ View Details -> ] │ │
│ └─────────────────────┴──────────────────────────────────────────────────────┴─────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 03 ROAST & DISPATCH LEDGER                                                                           │
│ Small-batch roasting on [ROAST DAY]. Fresh dispatch within [DISPATCH WINDOW].                        │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 04 GLOBAL FOOTER                                                                                     │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

# PART 5 — COFFEE PDP WIREFRAME

### Mobile Coffee PDP (390px)

```
┌────────────────────────────────────────────────────────┐
│ [=] Menu               RED CLAY               Bag [0]  │
├────────────────────────────────────────────────────────┤
│ LEVEL 1 — IMMEDIATE BUYING DECISION                    │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE GALLERY: PDP-KENYA-HERO (3:4 Ratio)]        │ │
│ │ (Swipe Dots: 1 / 4)                                │ │
│ └────────────────────────────────────────────────────┘ │
│ EYEBROW: CENTRAL KENYA // 2,050 MASL                   │
│ TITLE: KENYA LOT 01                                    │
│ TASTING NOTES: Blackcurrant • Plum • Cane Sugar        │
│ PRICE: [PRICE] (250g Whole Bean)                       │
│                                                        │
│ FORMAT SELECTOR:                                       │
│ [ (•) Whole Bean ]  [ ( ) Filter ]  [ ( ) Espresso ]   │
│                                                        │
│ [ ADD TO BAG — [PRICE] ]                               │
│ Dispatch: Roasted on [ROAST DAY], dispatched in [WIN]. │
├────────────────────────────────────────────────────────┤
│ LEVEL 2 — PRODUCT CHARACTER                            │
│ HEADLINE: Sensory Character & Brew Profile             │
│ COPY: A high-altitude lot from Central Kenya exhibiting│
│       a structured blackcurrant acidity and honeyed    │
│       sweetness, finished with double-washed clarity.  │
│                                                        │
│ BREW RECOMMENDATION:                                   │
│ 1:16 Filter Ratio (16g coffee to 250g water at 95°C).  │
│                                                        │
│ [x] Pair with The Kiln Cup (Save [SUBSCRIPTION SAVING])│
├────────────────────────────────────────────────────────┤
│ LEVEL 3 — PLACE & STORY                                │
│ HEADLINE: The Highland Slopes of Nyeri                 │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: PDP-KENYA-ORIGIN (4:5 Landscape Still)]    │ │
│ └────────────────────────────────────────────────────┘ │
│ COPY: Regional highland geography and coffee traditions are       │
│       described factually without claiming direct flavor causality. Smallholders   │
│       deliver fresh cherries to cooperative factories  │
│       utilizing freshwater soaking channels.           │
│ [ Explore Central Kenya Dossier -> ]                   │
├────────────────────────────────────────────────────────┤
│ LEVEL 4 — RELATED EDITION & METADATA                   │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [EDITION CARD: Water & Time (Kenya Monograph)]     │ │
│ │ [ Read Monograph -> ]                              │ │
│ └────────────────────────────────────────────────────┘ │
│                                                        │
│ [ + VIEW TECHNICAL SPECIFICATIONS (ACCORDION) ]        │
│ ├── Region: Nyeri County, Central Kenya                │
│ ├── Elevation: 2,050 Meters Above Sea Level            │
│ ├── Cultivar: SL28 & SL34 Selections                   │
│ ├── Process: Double-Washed & Raised Bed Dried          │
│ └── Storage: Keep sealed in a cool, dry place.         │
├────────────────────────────────────────────────────────┤
│ LEVEL 5 — RELATED PRODUCTS                             │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [CARD: BURUNDI LOT 01]     [CARD: THE KILN CUP]    │ │
│ └────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────┤
│ GLOBAL FOOTER                                          │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ [STICKY MOBILE BUY BAR — Appears only below fold]      │
│ KENYA LOT 01 • [PRICE]      [ ADD TO BAG — [PRICE] ]   │
└────────────────────────────────────────────────────────┘
```

### Desktop Coffee PDP (1440px)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│  RED CLAY          Shop      Origins      The Editions      About                           Bag [0]  │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────┬────────────────────────────────────────────┐ │
│ │ [LEFT 58%: EDITORIAL & IMAGE STREAM (Scrolls)]      │ [RIGHT 42%: PINNED PURCHASE PANEL]         │ │
│ │                                                     │                                            │ │
│ │ [IMAGE: PDP-KENYA-HERO (3:4 Pack on Basalt)]        │ EYEBROW: CENTRAL KENYA // 2,050 MASL       │ │
│ │                                                     │ TITLE: KENYA LOT 01                        │ │
│ │ [IMAGE: PDP-KENYA-ORIGIN (16:9 Landscape Plate)]    │ TASTING NOTES:                             │ │
│ │                                                     │ Blackcurrant • Damson Plum • Cane Sugar    │ │
│ │ HEADLINE: Sensory Character & Extraction            │                                            │ │
│ │ COPY: Cultivated at 2,050 meters on Mount Kenya's   │ PRICE: [PRICE] (250g / 8.8oz)              │ │
│ │ volcanic slopes, this provisional lot presents deep              │                                            │ │
│ │ fruit structure and a clean, structured finish.          │ FORMAT SELECTOR:                           │ │
│ │ Recommended 1:16 ratio filter extraction at 95°C.   │ [ (•) Whole Bean ] [ Filter ] [ Espresso ] │ │
│ │                                                     │                                            │ │
│ │ [IMAGE: PDP-KENYA-PROCESS (4:5 Sorting Work Still)] │ [ ADD TO BAG — [PRICE] ]                   │ │
│ │                                                     │ Dispatch: Roasted on [ROAST DAY].          │ │
│ │ HEADLINE: The Highland Slopes of Nyeri              │                                            │ │
│ │ COPY: Iron-dense soils and high elevations accompany│ ────────────────────────────────────────── │ │
│ │ a dense seed character. Smallholders deliver fresh  │ COMPANION UPSELL:                          │ │
│ │ cherries to cooperative washing factories.          │ [x] Pair with The Kiln Cup (+[PRICE])      │ │
│ │                                                     │                                            │ │
│ │ ┌─────────────────────────────────────────────────┐ │ ────────────────────────────────────────── │ │
│ │ │ [EDITION CARD: Water & Time (Kenya Monograph)]  │ │ TECHNICAL SPECIFICATIONS                   │ │
│ │ │ [ Read Monograph -> ]                           │ │ • Region: Nyeri County, Central Kenya      │ │
│ │ └─────────────────────────────────────────────────┘ │ • Elevation: 2,050 MASL                    │ │
│ │                                                     │ • Cultivar: SL28 & SL34                    │ │
│ │                                                     │ • Process: Double-Washed & Raised Bed Dried│ │
│ │                                                     │ • Storage: Seal in cool, dark environment. │ │
│ └─────────────────────────────────────────────────────┴────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RELATED HARVESTS (3-Card Horizontal Strip)                                                           │
│ ┌──────────────────────────────┬──────────────────────────────┬────────────────────────────────────┐ │
│ │ [CARD: BURUNDI LOT 01]       │ [CARD: ETHIOPIA LOT 01]      │ [CARD: THE KILN CUP]               │ │
│ └──────────────────────────────┴──────────────────────────────┴────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GLOBAL FOOTER                                                                                        │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

# PART 6 — KILN CUP PDP WIREFRAME

### Mobile Kiln Cup PDP (390px)

```
┌────────────────────────────────────────────────────────┐
│ [=] Menu               RED CLAY               Bag [0]  │
├────────────────────────────────────────────────────────┤
│ 01 OBJECT HERO & PURCHASE                              │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: CUP-HERO (3:4 Terracotta Cup on Plinth)]   │ │
│ └────────────────────────────────────────────────────┘ │
│ EYEBROW: COMPANION OBJECT                              │
│ TITLE: The Kiln Cup                                    │
│ MATERIAL: Raw Terracotta • White Mineral Glaze         │
│ PRICE: [PRICE] (Studio Edition)                        │
│ [ ADD TO BAG — [PRICE] ]                               │
├────────────────────────────────────────────────────────┤
│ 02 FORM & MATERIALITY                                  │
│ HEADLINE: Clay outside. Glaze within.                  │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: CUP-MATERIAL-MACRO (1:1 Rim Glaze Boundary)│ │
│ └────────────────────────────────────────────────────┘ │
│ COPY: Left unglazed on the exterior to preserve the raw│
│       coarse grit of iron-rich clay; sealed inside with│
│       opaque white glaze to showcase coffee clarity.   │
├────────────────────────────────────────────────────────┤
│ 03 SCALE & HAND FEEL                                   │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: CUP-HAND-SCALE (3:4 Hands Holding Cup)]    │ │
│ └────────────────────────────────────────────────────┘ │
│ COPY: A compact tapered form is intended to sit comfortably in hand.
│       [FICTIONAL PRODUCT SPEC — VALIDATE IF PRODUCED]         │
├────────────────────────────────────────────────────────┤
│ 04 RITUAL / COFFEE USE                                 │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: CUP-RITUAL-POUR (9:16 Pour Action Still)]  │ │
│ └────────────────────────────────────────────────────┘ │
│ COPY: Sized around a provisional 280ml single filter brew. [FICTIONAL PRODUCT SPEC]       │
├────────────────────────────────────────────────────────┤
│ 05 COFFEE PAIRING BUNDLE                               │
│ HEADLINE: Pair with the Current Harvest                │
│ [x] Bundle with KENYA LOT 01 (Save [SAVING])           │
│ [ ADD BUNDLE TO BAG — [PRICE] ]                        │
├────────────────────────────────────────────────────────┤
│ 06 SPECIFICATIONS                                      │
│ • Capacity: [TBD — FICTIONAL PRODUCT SPEC]                │
│ • Dimensions: [TBD — FICTIONAL PRODUCT SPEC]              │
│ • Material: [TBD — FICTIONAL PRODUCT SPEC]                │
│ • Care / safety: [TBD — VALIDATE IF PRODUCED]             │
├────────────────────────────────────────────────────────┤
│ 07 RETURN TO COLLECTION                                │
│ [ <- Back to Coffee Collection ]                       │
├────────────────────────────────────────────────────────┤
│ 08 GLOBAL FOOTER                                       │
└────────────────────────────────────────────────────────┘
```

### Desktop Kiln Cup PDP (1440px)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│  RED CLAY          Shop      Origins      The Editions      About                           Bag [0]  │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────┬────────────────────────────────────────────┐ │
│ │ [LEFT 55%: OBJECT & MATERIAL ESSAY]                 │ [RIGHT 45%: PINNED OBJECT BUY PANEL]       │ │
│ │                                                     │                                            │ │
│ │ [IMAGE: CUP-HERO (3:4 Studio Hero on Basalt)]       │ EYEBROW: COMPANION HARDWARE                │ │
│ │                                                     │ TITLE: The Kiln Cup                        │ │
│ │ [IMAGE: CUP-MATERIAL-MACRO (1:1 Glaze Boundary)]    │ SPECS: Raw Terracotta • Mineral-White Glaze│ │
│ │                                                     │ PRICE: [PRICE]                             │ │
│ │ HEADLINE: Clay outside. Glaze within.               │                                            │ │
│ │ COPY: Left unglazed to preserve coarse mineral grit;│ [ ADD TO BAG — [PRICE] ]                   │ │
│ │ sealed inside with white glaze for coffee clarity.  │                                            │ │
│ │                                                     │ ────────────────────────────────────────── │ │
│ │ [IMAGE: CUP-HAND-SCALE (4:5 Hand-Held Scale)]       │ CURATED PAIRING:                           │ │
│ │                                                     │ [x] Bundle with KENYA LOT 01 (+[PRICE])    │ │
│ │ [IMAGE: CUP-RITUAL-POUR (4:5 Filter Pour Action)]   │ [ ADD BUNDLE TO BAG ]                      │ │
│ │                                                     │                                            │ │
│ │ [OPTIONAL INTERACTION AREA — ONLY IF REQUIRED BY THE SELECTED SECTION 5 CONCEPT]  │ ────────────────────────────────────────── │ │
│ │                                                     │ SPECIFICATIONS [FICTIONAL SPECS]           │ │
│ │                                                     │ • Capacity: [TBD — FICTIONAL SPEC]          │ │
│ │                                                     │ • Dimensions: [TBD — FICTIONAL SPEC]        │ │
│ │                                                     │ • Material: [TBD — FICTIONAL SPEC]          │ │
│ │                                                     │ • Care / safety: [TBD — VALIDATE]           │ │
│ │                                                     │                                            │ │
│ │                                                     │ [ <- Return to Coffee Collection ]         │ │
│ └─────────────────────────────────────────────────────┴────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GLOBAL FOOTER                                                                                        │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

# PART 7 — ORIGINS HUB WIREFRAME

### Mobile Origins Hub (390px)

```
┌────────────────────────────────────────────────────────┐
│ [=] Menu               RED CLAY               Bag [0]  │
├────────────────────────────────────────────────────────┤
│ 01 ORIGIN THESIS                                       │
│ EYEBROW: ORIGIN INDEX                                  │
│ HEADLINE: Three highland regions.                      │
│           Three ways into the coffee.                  │
│ COPY: The East African highlands contain distinct       │
│       coffee landscapes across Kenya, Burundi, Ethiopia.│
├────────────────────────────────────────────────────────┤
│ 02 [SECTION 5 SIGNATURE EXPERIENCE SLOT]               │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [STATIC FALLBACK: 3-Region Segmented Selector]     │ │
│ │ [ Central Kenya ] [ Kayanza / Burundi ] [ Southern Ethiopia ]│ │
│ └────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────┤
│ 03 THREE REGIONAL TERRITORIES                          │
│                                                        │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: ORIGINS-CARD-KENYA (4:5 Landscape)]        │ │
│ │ CENTRAL KENYA • [ELEVATION — VERIFY]                       │ │
│ │ Highland landscape & regional washed-coffee traditions.     │ │
│ │ [ Explore Kenya Dossier -> ]                       │ │
│ └────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: ORIGINS-CARD-BURUNDI (4:5 Landscape)]      │ │
│ │ KAYANZA, BURUNDI • [ELEVATION — VERIFY]                    │ │
│ │ Steep highland farms & regional coffee traditions.       │ │
│ │ [ Explore Burundi Dossier -> ]                     │ │
│ └────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: ORIGINS-CARD-ETHIOPIA (4:5 Landscape)]     │ │
│ │ SOUTHERN ETHIOPIA • [ELEVATION — VERIFY]                   │ │
│ │ Montane shade landscapes & diverse Arabica lineages.      │ │
│ │ [ Explore Ethiopia Dossier -> ]                    │ │
│ └────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────┤
│ 04 HOW TO READ AN ORIGIN (Compact 4-Card Strip)        │
│ • Place: Where it grows.                               │
│ • Variety: Botanical lineage.                          │
│ • Process: Separation craft.                           │
│ • Cup: Sensory observation.                            │
├────────────────────────────────────────────────────────┤
│ 05 CURRENT HARVESTS BY REGION                          │
│ [CARD: KENYA LOT 01]      [CARD: BURUNDI LOT 01]       │
│ [CARD: ETHIOPIA LOT 01]   [CARD: ETHIOPIA LOT 02]      │
├────────────────────────────────────────────────────────┤
│ 06 RELATED EDITIONS                                    │
│ [Link: Water & Time] • [Link: Along the Kayanza Hills] │
├────────────────────────────────────────────────────────┤
│ 07 CLOSING TRANSITION                                  │
│ [ Shop the Current Harvest -> ]                        │
├────────────────────────────────────────────────────────┤
│ 08 GLOBAL FOOTER                                       │
└────────────────────────────────────────────────────────┘
```

### Desktop Origins Hub (1440px)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│  RED CLAY          Shop      Origins      The Editions      About                           Bag [0]  │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 01 ORIGIN THESIS                                                                                     │
│ EYEBROW: ORIGIN INDEX                                                                                │
│ HEADLINE: Three highland regions. Three ways into the coffee.                                        │
│ COPY: Red Clay's launch collection is organized around three distinct East African highland          │
│       regions, each with its own geography, coffee history, and processing traditions.                │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 02 [SECTION 5 SIGNATURE EXPERIENCE SLOT] (Reserved Experience Container)                   │
│ ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ [STATIC FALLBACK / FUTURE SIGNATURE EXPERIENCE — CONCEPT SELECTED IN SECTION 5]      │ │
│ │  (Fallback: three accessible region entry points; no advanced interaction required)│ │
│ └──────────────────────────────────────────────────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 03 THREE REGIONAL TERRITORIES (3-Column Asymmetric Dossier Preview)                                  │
│ ┌──────────────────────────────┬──────────────────────────────┬────────────────────────────────────┐ │
│ │ [IMAGE: ORIGINS-CARD-KENYA]  │ [IMAGE: ORIGINS-CARD-BURUNDI]│ [IMAGE: ORIGINS-CARD-ETHIOPIA]     │ │
│ │ CENTRAL KENYA                │ KAYANZA, BURUNDI             │ SOUTHERN ETHIOPIA                  │ │
│ │ [ELEVATION — VERIFY]         │ [ELEVATION — VERIFY]         │ [ELEVATION — VERIFY]               │ │
│ │ Highland landscape & washing │ Steep hillsides & smallholder│ Montane forest shade & indigenous  │ │
│ │ cooperative traditions.      │ Bourbon family gardens.      │ Arabica genetic landraces.         │ │
│ │ [ View Kenya Dossier -> ]    │ [ View Burundi Dossier -> ]  │ [ View Ethiopia Dossier -> ]       │ │
│ └──────────────────────────────┴──────────────────────────────┴────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 04 HOW TO READ AN ORIGIN (Horizontal 4-Column Educational Strip)                                     │
│ ┌──────────────────┬───────────────────┬──────────────────────┬────────────────────────────────────┐ │
│ │ 01 PLACE         │ 02 VARIETY        │ 03 PROCESS           │ 04 CUP                             │ │
│ │ Elevation, soil &│ Botanical lineage │ How the seed is      │ Sensory observations of brightness,│ │
│ │ highland climate.│ and genetics.     │ separated and dried. │ sweetness, and body.               │ │
│ └──────────────────┴───────────────────┴──────────────────────┴────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 05 CURRENT HARVEST RELEASES (4-Card Horizontal Harvest Grid)                                         │
│ ┌─────────────────────┬──────────────────────┬──────────────────────┬──────────────────────────────┐ │
│ │ [CARD: KENYA LOT 01]│ [CARD: BURUNDI LOT 01│ [CARD: ETHIOPIA LOT01│ [CARD: ETHIOPIA LOT 02]      │ │
│ └─────────────────────┴──────────────────────┴──────────────────────┴──────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 06 CLOSING TRANSITION & GLOBAL FOOTER                                                                │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

# PART 8 — ORIGIN DOSSIER WIREFRAME

### A. Generic Mobile Template (390px)

```
┌────────────────────────────────────────────────────────┐
│ [=] Menu               RED CLAY               Bag [0]  │
├────────────────────────────────────────────────────────┤
│ 01 REGIONAL HERO                                       │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: ORIGIN-[REG]-HERO (16:9 Landscape)]        │ │
│ └────────────────────────────────────────────────────┘ │
│ EYEBROW: REGIONAL DOSSIER // [ELEVATION]               │
│ HEADLINE: [Region Name, Country]                       │
├────────────────────────────────────────────────────────┤
│ 02 PLACE & LANDSCAPE                                   │
│ HEADLINE: Highland Geology & Climate                   │
│ COPY: [Factual terrain, soil notes, and climate context│
├────────────────────────────────────────────────────────┤
│ 03 COFFEE CONTEXT & CULTIVARS                          │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: ORIGIN-[REG]-BOTANICAL (1:1 Seed/Soil)]    │ │
│ └────────────────────────────────────────────────────┘ │
│ COPY: [Botanical history and cultivar specifics]       │
├────────────────────────────────────────────────────────┤
│ 04 PROCESSING TRADITIONS                               │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: ORIGIN-[REG]-PROCESS (4:5 Washing Still)]  │ │
│ └────────────────────────────────────────────────────┘ │
│ COPY: [Regional fermentation and drying craft]         │
├────────────────────────────────────────────────────────┤
│ 05 AGRICULTURAL WORK                                   │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: ORIGIN-[REG]-WORK (4:5 Environmental Still)│ │
│ └────────────────────────────────────────────────────┘ │
│ COPY: [Observational respect for washing station craft]│
├────────────────────────────────────────────────────────┤
│ 06 ACTIVE HARVEST RELEASES                             │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [PRODUCT CARD: CURRENT REGIONAL LOT]               │ │
│ │ [ Quick Add ]          [ View Details ]            │ │
│ └────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────┤
│ 07 RELATED HARVEST EDITION                             │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [EDITION CARD: RELATED MONOGRAPH]                  │ │
│ └────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────┤
│ 08 FACTUAL REFERENCE BLOCK                             │
│ • Geological Classification: [Verified Soil Type]      │
│ • Elevation Range: [Verified Altitude Band]            │
│ • Botanical Lineage: [Verified Cultivar Group]         │
├────────────────────────────────────────────────────────┤
│ 09 NEXT REGIONAL DOSSIER                               │
│ [ Next: Kayanza Province, Burundi -> ]                 │
├────────────────────────────────────────────────────────┤
│ 10 GLOBAL FOOTER                                       │
└────────────────────────────────────────────────────────┘
```

### B. Generic Desktop Template (1440px)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│  RED CLAY          Shop      Origins      The Editions      About                           Bag [0]  │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 01 REGIONAL HERO (Full-Width Photographic Plate with Integrated Title)                               │
│ ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ [IMAGE: ORIGIN-[REG]-HERO (16:9 Panoramic Highland Ridge Landscape)]                             │ │
│ │ EYEBROW: REGIONAL DOSSIER // [ELEVATION]       TITLE: [Region Name, Country]                     │ │
│ └──────────────────────────────────────────────────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 02 GEOLOGY & CULTIVAR (50/50 Editorial Spread)                                                       │
│ ┌─────────────────────────────────────────────────────┬────────────────────────────────────────────┐ │
│ │ HEADLINE: Highland Geology & Climate                │ [IMAGE: ORIGIN-[REG]-BOTANICAL (4:5 Macro)]│ │
│ │ COPY: [Factual terrain, soil geology, and diurnal   │                                            │ │
│ │       temperature conditions of the highland zone]  │ HEADLINE: Botanical Selections             │ │
│ │                                                     │ COPY: [Regional cultivar lineage notes]    │ │
│ └─────────────────────────────────────────────────────┴────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 03 PROCESSING CRAFT & AGRICULTURAL WORK (Asymmetric Split Spread)                                    │
│ ┌─────────────────────────────────────────────────────┬────────────────────────────────────────────┐ │
│ │ [IMAGE: ORIGIN-[REG]-PROCESS (4:5 Washing Craft)]   │ HEADLINE: Generational Washing Craft       │ │
│ │                                                     │ COPY: [Observational account of regional   │ │
│ │ [IMAGE: ORIGIN-[REG]-WORK (16:9 Inspection Still)]  │       washing, soaking, and drying methods]│ │
│ └─────────────────────────────────────────────────────┴────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 04 ACTIVE HARVESTS & CONNECTED EDITION (3-Column Grid)                                               │
│ ┌──────────────────────────────┬──────────────────────────────┬────────────────────────────────────┐ │
│ │ [ACTIVE PRODUCT CARD 01]     │ [ACTIVE PRODUCT CARD 02]     │ [RELATED HARVEST EDITION CARD]     │ │
│ │ [ Quick Add — [PRICE] ]      │ [ Quick Add — [PRICE] ]      │ [ Read Monograph -> ]              │ │
│ └──────────────────────────────┴──────────────────────────────┴────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 05 FACTUAL REFERENCE FOOTNOTE & NEXT REGION STRIP                                                    │
│ ┌─────────────────────────────────────────────────────────────┬────────────────────────────────────┐ │
│ │ FACTUAL REFERENCE: Verified regional agronomic parameters.  │ [ Next Terroir: Kayanza -> ]       │ │
│ └─────────────────────────────────────────────────────────────┴────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 06 GLOBAL FOOTER                                                                                     │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### C. Meaningful Structural Variations Across the Three Regions

These variations affect **sequence and emphasis only**. Final color, typography, image treatment, and motion belong to the later code-first art-direction stage.

1. **Central Kenya (`/origins/central-kenya`)**
   - Emphasize processing imagery earlier in the page after the landscape introduction.
   - Give architectural/channel geometry and sorting work more visual space.
   - Keep factual process duration as `[VERIFY]`; do not hard-code a 72-hour claim.

2. **Kayanza, Burundi (`/origins/kayanza-burundi`)**
   - Use a more vertical landscape sequence to communicate hillside scale.
   - Bring agricultural-work imagery forward before the active-coffee module.
   - Avoid treating `colline` as a decorative motif; use it only where factually appropriate.

3. **Southern Ethiopia (`/origins/southern-ethiopia`)**
   - Give botanical / canopy imagery greater prominence in the early page sequence.
   - Allow more breathing room around the landscape and botanical context before commerce.
   - Keep cultivar/landrace terminology provisional until fact-checked.

# PART 9 — THE EDITIONS HUB WIREFRAME# PART 9 — THE EDITIONS HUB WIREFRAME

### Mobile Editions Hub (390px)

```
┌────────────────────────────────────────────────────────┐
│ [=] Menu               RED CLAY               Bag [0]  │
├────────────────────────────────────────────────────────┤
│ 01 EDITORIAL OPENING                                   │
│ EYEBROW: THE EDITIONS // VOLUME 01                     │
│ HEADLINE: Documenting the craft, terroirs, and         │
│           people of East African coffee.               │
├────────────────────────────────────────────────────────┤
│ 02 FEATURED EDITION (Dominant Hero Plate)              │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: EDITION-KENYA-LEAD (16:9 Lead Still)]      │ │
│ └────────────────────────────────────────────────────┘ │
│ TAG: HARVEST MONOGRAPH // CENTRAL KENYA                │
│ HEADLINE: Water & Time: Washed coffee in the           │
│           Central Kenya highlands.                     │
│ EXCERPT: A study of regional washed-coffee craft, careful sorting,│
│          and the context surrounding the current release.     │
│ [ Read Monograph — 6 Min -> ]                          │
├────────────────────────────────────────────────────────┤
│ 03 SECONDARY EDITIONS (Stacked Cards)                  │
│                                                        │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: EDITION-BURUNDI-LEAD (4:5 Landscape)]      │ │
│ │ TAG: MICRO-TERROIR // BURUNDI                      │ │
│ │ HEADLINE: Along the Kayanza Hills.                 │ │
│ │ [ Read Monograph — 5 Min -> ]                      │ │
│ └────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: EDITION-ETHIOPIA-LEAD (4:5 Botanical Macro)│ │
│ │ TAG: BOTANICAL HERITAGE // ETHIOPIA                │ │
│ │ HEADLINE: Canopy & Landrace.                       │ │
│ │ [ Read Monograph — 7 Min -> ]                      │ │
│ └────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────┤
│ 04 CONNECTED CURRENT COFFEES (Horizontal Pill Strip)   │
│ [KENYA LOT 01]  [BURUNDI LOT 01]  [ETHIOPIA LOT 01]    │
├────────────────────────────────────────────────────────┤
│ 05 FUTURE VOLUME NOTE & TRANSITION                     │
│ Volume 02 dispatches following the upcoming harvest.   │
│ [ Shop Current Releases -> ]                           │
├────────────────────────────────────────────────────────┤
│ 06 GLOBAL FOOTER                                       │
└────────────────────────────────────────────────────────┘
```

### Desktop Editions Hub (1440px)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│  RED CLAY          Shop      Origins      The Editions      About                           Bag [0]  │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 01 EDITORIAL MASTHEAD                                                                                │
│ EYEBROW: THE EDITIONS // VOLUME 01                                                                   │
│ HEADLINE: Documenting the craft, terroirs, and people of East African coffee.                        │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 02 EDITORIAL INDEX (1 Dominant Featured Monograph + 2 Secondary Columns)                             │
│ ┌─────────────────────────────────────────────────────┬────────────────────────────────────────────┐ │
│ │ [IMAGE: EDITION-KENYA-LEAD (16:9 Large Plate)]      │ [IMAGE: EDITION-BURUNDI-LEAD (4:5 Still)]  │ │
│ │ TAG: HARVEST MONOGRAPH // CENTRAL KENYA             │ TAG: MICRO-TERROIR // BURUNDI              │ │
│ │ HEADLINE: Water & Time: Washed coffee in the        │ HEADLINE: Along the Kayanza Hills.         │ │
│ │           Central Kenya highlands.                  │ EXCERPT: Single-hill smallholder gardens.  │ │
│ │ EXCERPT: An observational account of cooperative    │ [ Read Monograph — 5 Min -> ]              │ │
│ │ washing craft and channel soaking on Mount Kenya.   │ ────────────────────────────────────────── │ │
│ │ [ READ FULL MONOGRAPH — 6 MIN -> ]                  │ [IMAGE: EDITION-ETHIOPIA-LEAD (4:5 Still)] │ │
│ │                                                     │ TAG: BOTANICAL HERITAGE // ETHIOPIA        │ │
│ │                                                     │ HEADLINE: Canopy & Landrace.               │ │
│ │                                                     │ EXCERPT: Forest shade genetic diversity.   │ │
│ │                                                     │ [ Read Monograph — 7 Min -> ]              │ │
│ └─────────────────────────────────────────────────────┴────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 03 CURRENT HARVEST LINK & ARCHIVAL FOOTER                                                            │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

# PART 10 — EDITION ARTICLE WIREFRAME

### Mobile Edition Article (390px)

```
┌────────────────────────────────────────────────────────┐
│ [=] Menu               RED CLAY               Bag [0]  │
├────────────────────────────────────────────────────────┤
│ 01 MASTHEAD                                            │
│ TAG: HARVEST MONOGRAPH // CENTRAL KENYA                │
│ TITLE: Water & Time: Washed coffee in the              │
│        Central Kenya highlands.                        │
│ META: 6 Min Read • Published for Harvest Vol. 01       │
├────────────────────────────────────────────────────────┤
│ 02 OPENING THESIS & LEAD IMAGE                         │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: EDITION-KENYA-LEAD (16:9 Lead Still)]      │ │
│ └────────────────────────────────────────────────────┘ │
│ PROSE: [80–120 words establishing the significance of  │
│        Kenyan washing traditions and high altitude]    │
├────────────────────────────────────────────────────────┤
│ 03 GEOGRAPHIC SETTING                                  │
│ PROSE: [120–180 words on Mount Kenya slopes & soils]   │
├────────────────────────────────────────────────────────┤
│ 04 PROCESS & CRAFT                                     │
│ PROSE: [180–300 words on washed-processing craft [DETAILS TO VERIFY]] │
├────────────────────────────────────────────────────────┤
│ 05 VISUAL INTERLUDE                                    │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [IMAGE: EDITION-KENYA-INTERLUDE (Full Bleed Macro)]│ │
│ └────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────┤
│ 06 AGRICULTURAL PERSPECTIVE                            │
│ PROSE: [100–180 words of roastery observational context│
│        respecting cooperative agency without quotes]   │
├────────────────────────────────────────────────────────┤
│ 07 CONTEXTUAL COMMERCE (Single Primary Buy Moment)     │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [INLINE BUY CARD: KENYA LOT 01]                    │ │
│ │ Notes: Blackcurrant • Plum • Sugar                 │ │
│ │ Price: [PRICE] / 250g                              │ │
│ │ [ QUICK ADD TO BAG ]                               │ │
│ └────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────┤
│ 08 SENSORY REFLECTION & ORIGIN LINK                    │
│ PROSE: [80–120 words on cupping table observations]    │
│ [ Explore Central Kenya Terroir Dossier -> ]           │
├────────────────────────────────────────────────────────┤
│ 09 NEXT EDITION NAVIGATION                             │
│ [ Next Monograph: Along the Kayanza Hills -> ]         │
├────────────────────────────────────────────────────────┤
│ 10 GLOBAL FOOTER                                       │
└────────────────────────────────────────────────────────┘
```

### Desktop Edition Article (1440px)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│  RED CLAY          Shop      Origins      The Editions      About                           Bag [0]  │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 01 MASTHEAD (Centered Editorial Block)                                                               │
│ TAG: HARVEST MONOGRAPH // CENTRAL KENYA • 6 MIN READ                                                 │
│ TITLE: Water & Time: Washed coffee in the Central Kenya highlands.                                  │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 02 FULL-WIDTH LEAD IMAGE PLATE                                                                       │
│ ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ [IMAGE: EDITION-KENYA-LEAD (16:9 Full-Width Panoramic Sorting Still)]                           │ │
│ └──────────────────────────────────────────────────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 03 EDITORIAL READING COLUMN (Narrow 620px Centered Column with Margin Annotations)                   │
│                                                                                                      │
│                 [ PROSE: 80–120 words opening thesis on washing traditions. ]                        │
│                                                                                                      │
│                 [ PROSE: 120–180 words on high-altitude volcanic topography. ]                       │
│                                                                                                      │
│ ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ [IMAGE: EDITION-KENYA-INTERLUDE (Wide 1200px Visual Interlude Plate)]                            │ │
│ └──────────────────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                      │
│                 [ PROSE: 180–300 words detailing channel fermentation craft. ]                       │
│                                                                                                      │
│ ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ [INLINE CONTEXTUAL COMMERCE CARD (Centered 700px Card)]                                          │ │
│ │ ┌──────────────────┬───────────────────────────────────────────────────────┬───────────────────┐ │ │
│ │ │ [IMAGE: 3:4 Pack]│ KENYA LOT 01 • Nyeri County // 2,050m                 │ Price: [PRICE]    │ │ │
│ │ │                  │ Notes: Blackcurrant • Damson Plum • Cane Sugar        │ [ QUICK ADD ]     │ │ │
│ │ └──────────────────┴───────────────────────────────────────────────────────┴───────────────────┘ │ │
│ └──────────────────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                      │
│                 [ PROSE: 100–180 words of roastery observational reflection. ]                       │
│                                                                                                      │
│                 [ LINK: Explore Central Kenya Dossier ]   [ NEXT: Kayanza Monograph -> ]             │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 04 GLOBAL FOOTER                                                                                     │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

# PART 11 — ABOUT PAGE WIREFRAME

The About page must preserve the approved information architecture on both mobile and desktop while remaining quieter than the homepage. It should not collapse the brand story into only a sourcing/roasting statement.

### Mobile About Page (390px)

```text
┌────────────────────────────────────────────────────────┐
│ [=] Menu               RED CLAY               Bag [0]  │
├────────────────────────────────────────────────────────┤
│ 01 WHAT RED CLAY IS                                    │
│ EYEBROW: THE RED CLAY THESIS                           │
│ HEADLINE: A coffee house built around the material     │
│           character of place.                          │
│ COPY: East African origins, tactile materials,         │
│       editorial storytelling, and the ritual of brew.  │
├────────────────────────────────────────────────────────┤
│ 02 WHY THE NAME                                        │
│ HEADLINE: The earth underfoot. The vessel in your hand.│
│ COPY: Red Clay connects highland earth as a material   │
│       idea with the fictional terracotta companion cup.│
├────────────────────────────────────────────────────────┤
│ 03 THE CONTINUUM                                       │
│ Earth → Coffee → Vessel → Ritual                       │
│ Four concise statements; no scientific causality.     │
├────────────────────────────────────────────────────────┤
│ 04 WHY EAST AFRICAN ORIGINS                            │
│ [IMAGE: ABOUT-EARTH or ABOUT-COFFEE]                   │
│ HEADLINE: Three regions, each with its own coffee      │
│           history and context.                         │
│ COPY: Ethiopia, Kenya, and Burundi remain distinct;    │
│       factual regional copy is verified before launch. │
├────────────────────────────────────────────────────────┤
│ 05 REPRESENTATION & AGRICULTURAL AGENCY                │
│ [IMAGE: ABOUT-PORTRAIT]                                │
│ HEADLINE: Agricultural expertise, not charity framing. │
│ COPY: Producers, processing teams, quality specialists,│
│       and coffee professionals are shown with agency.  │
├────────────────────────────────────────────────────────┤
│ 06 MATERIAL & DESIGN PHILOSOPHY                        │
│ [IMAGE: ABOUT-HERO-MATERIAL]                           │
│ COPY: Earthen surfaces, basalt, linen, paper, clay.    │
├────────────────────────────────────────────────────────┤
│ 07 COFFEE / ROASTING PHILOSOPHY                        │
│ HEADLINE: Clarity before spectacle.                    │
│ COPY: Final roast claims remain provisional.           │
├────────────────────────────────────────────────────────┤
│ 08 CLOSING                                             │
│ HEADLINE: Coffee for the stillness of early light.     │
│ [ EXPLORE CURRENT HARVEST ]                            │
├────────────────────────────────────────────────────────┤
│ 09 GLOBAL FOOTER                                       │
└────────────────────────────────────────────────────────┘
```

### Desktop About Page (1440px)

Desktop may consolidate chapters visually, but must preserve their meaning.

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│  RED CLAY          Shop      Origins      The Editions      About                           Bag [0]  │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 01 THESIS + WHY THE NAME (Asymmetric Editorial Opening)                                              │
│ ┌─────────────────────────────────────────────────────┬────────────────────────────────────────────┐ │
│ │ WHAT RED CLAY IS                                    │ WHY THE NAME                               │ │
│ │ A coffee house built around the material character  │ The earth underfoot. The vessel in hand.   │ │
│ │ of place.                                           │ Concise explanation; no universal soil     │ │
│ │                                                     │ claim across all origins.                  │ │
│ └─────────────────────────────────────────────────────┴────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 02 THE CONTINUUM (Compact 4-Part Horizontal Sequence)                                                │
│ EARTH                    COFFEE                    VESSEL                    RITUAL                    │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 03 EAST AFRICAN ORIGINS + REPRESENTATION (Split Monograph)                                           │
│ ┌─────────────────────────────────────────────────────┬────────────────────────────────────────────┐ │
│ │ [IMAGE: ABOUT-COFFEE / ABOUT-PORTRAIT]              │ Three distinct regional contexts.         │ │
│ │                                                     │ Agricultural expertise, not charity.       │ │
│ │                                                     │ No fabricated sourcing relationships.      │ │
│ └─────────────────────────────────────────────────────┴────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 04 MATERIAL WORLD (Wide Image Plate + Concise Copy)                                                  │
│ [IMAGE: ABOUT-HERO-MATERIAL / ABOUT-EARTH / ABOUT-RITUAL]                                            │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 05 COFFEE PHILOSOPHY + CLOSING                                                                       │
│ Clarity before spectacle. Final roast language remains provisional. [ EXPLORE THE HARVEST ]          │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 06 GLOBAL FOOTER                                                                                     │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

# PART 12 — CART DRAWER WIREFRAMES# PART 12 — CART DRAWER WIREFRAMES

### Mobile Cart Drawer (Near-Full-Height Bottom Sheet: 90vh)

```
┌────────────────────────────────────────────────────────┐
│ [ — Drag Handle / Pull Down Bar — ]                    │
│ YOUR BAG (2 ITEMS)                             [X] Close│
├────────────────────────────────────────────────────────┤
│ ┌────┬───────────────────────────────────────────────┐ │
│ │[IMG│ KENYA LOT 01                                  │ │
│ │1:1 │ Format: 250g Whole Bean                       │ │
│ │    │ [-] 1 [+]                           [PRICE]   │ │
│ └────┴───────────────────────────────────────────────┘ │
│ ┌────┬───────────────────────────────────────────────┐ │
│ │[IMG│ THE KILN CUP                                  │ │
│ │1:1 │ Format: 280ml Ceramic Vessel                  │ │
│ │    │ [-] 1 [+]                           [PRICE]   │ │
│ └────┴───────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────┤
│ COMPANION UPSELL (Optional 1-Tap Toggle)               │
│ [x] Bundle with Ethiopian Micro-Lot (Save [SAVING])    │
├────────────────────────────────────────────────────────┤
│ DISPATCH NOTICE                                        │
│ Roasted on [ROAST DAY] • Dispatched in [WINDOW].       │
├────────────────────────────────────────────────────────┤
│ SUBTOTAL: [PRICE]                                      │
│ Shipping & taxes calculated at checkout.               │
│ [ PROCEED TO CHECKOUT — [PRICE] ]                      │
└────────────────────────────────────────────────────────┘
```

### Desktop Cart Drawer (Right-Side 420px Fixed Drawer)

```
                                  ┌──────────────────────────────────────────┐
                                  │ YOUR BAG (1 ITEM)               [X] Close│
                                  ├──────────────────────────────────────────┤
                                  │ ┌────┬─────────────────────────────────┐ │
                                  │ │[IMG│ KENYA LOT 01                    │ │
                                  │ │1:1 │ Format: 250g Whole Bean         │ │
                                  │ │    │ Qty: [-] 1 [+]          [PRICE] │ │
                                  │ └────┴─────────────────────────────────┘ │
                                  ├──────────────────────────────────────────┤
                                  │ COMPANION PAIRING:                       │
                                  │ [ ] Add The Kiln Cup (+[PRICE])          │
                                  ├──────────────────────────────────────────┤
                                  │ LOGISTICS NOTE:                          │
                                  │ Roasted on [ROAST DAY]. Dispatched fresh.│
                                  ├──────────────────────────────────────────┤
                                  │ SUBTOTAL: [PRICE]                        │
                                  │ [ PROCEED TO CHECKOUT — [PRICE] ]        │
                                  └──────────────────────────────────────────┘
```

### Cart Drawer State Matrix (8 States)

1. **State 1 (Empty):** _"Your bag is currently empty."_ + `[ Explore the Harvest ]` button.

2. **State 2 (One Coffee):** Single coffee line item with format, quantity stepper, subtotal, and checkout CTA.

3. **State 3 (Multiple Coffees):** Stacked scrollable line items with persistent bottom checkout container.

4. **State 4 (Coffee + Kiln Cup):** Distinct line items for bean bag and hardware vessel with bundle discount applied.

5. **State 5 (Subscription Item — OPTIONAL / DEFERRED):** Only implement if subscriptions are explicitly retained later. Frequency and saving remain placeholders.

6. **State 6 (Unavailable / Concluded):** Item row muted; label: _"Harvest Concluded"_ + `[ Remove Item ]`.

7. **State 7 (Loading):** Skeletons for price and checkout CTA while quantities reconcile.

8. **State 8 (Error):** Inline message: _"Unable to update quantity. Try again."_ Preserves bag contents.

# PART 13 — MOBILE MENU WIREFRAME

```
┌────────────────────────────────────────────────────────┐
│ RED CLAY COFFEE                                [X] Close│
├────────────────────────────────────────────────────────┤
│ PRIMARY NAVIGATION                                     │
│                                                        │
│ 01 SHOP                                                │
│    Single-Origin Releases & Companion Hardware         │
│                                                        │
│ 02 ORIGINS                                             │
│    Kenya • Burundi • Ethiopia                          │
│                                                        │
│ 03 THE EDITIONS                                        │
│    Harvest Journalism & Field Monographs               │
│                                                        │
│ 04 ABOUT                                               │
│    The Red Clay Thesis & Material Philosophy            │
│                                                        │
├────────────────────────────────────────────────────────┤
│ UTILITY & DISPATCH                                     │
│ • Project / Sourcing Disclosure                        │
│ • Shipping & Terms                                     │
│ • Weekly Roast Dispatch: [ROAST DAY]                   │
│                                                        │
│ [ VIEW YOUR BAG (0) ]                                  │
└────────────────────────────────────────────────────────┘
```

- **Behavior & Accessibility:** Focus is trapped inside the overlay; `body` scroll is locked (`overflow: hidden`); pressing `Escape` or tapping `[X]` smoothly dismisses the menu. Direct Harvest Rail is removed to prevent clutter.

# PART 14 — GLOBAL FOOTER WIREFRAME

### Mobile Footer (390px Stacked)

```
┌────────────────────────────────────────────────────────┐
│ RED CLAY COFFEE                                        │
│ Contemporary African Coffee House.                     │
│ Earth • Coffee • Vessel • Ritual                       │
├────────────────────────────────────────────────────────┤
│ DISPATCH RETENTION                                     │
│ Join our seasonal release dispatch.                    │
│ [ Enter your email...             ] [ JOIN DISPATCH ]  │
│ Roasted on [ROAST DAY]. Dispatched in [WINDOW].        │
├────────────────────────────────────────────────────────┤
│ DIRECTORY                                              │
│ • Shop All Releases    • Origins Hub                   │
│ • The Editions         • About Red Clay                │
│ • Project / Sourcing Disclosure      • Legal & Terms                 │
├────────────────────────────────────────────────────────┤
│ © 2026 Red Clay Coffee. All rights reserved.           │
└────────────────────────────────────────────────────────┘
```

### Desktop Footer (1440px 4-Column Grid)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ┌──────────────────────┬──────────────────────┬──────────────────────┬─────────────────────────────┐ │
│ │ RED CLAY COFFEE      │ EXPLORE              │ SUPPORT & LEGAL      │ DISPATCH & RETENTION        │ │
│ │ Contemporary African │ • Shop Collection    │ • Project / Sourcing Disclosure    │ Join our harvest dispatch.  │ │
│ │ Coffee House.        │ • Origins Hub        │ • Shipping Terms     │ [ Email Input     ] [ JOIN ]│ │
│ │ Earth • Coffee •     │ • The Editions       │ • Legal & Privacy    │ Next Roast: [ROAST DAY]     │ │
│ │ Vessel • Ritual      │ • About Thesis       │ • Studio Contact     │ Dispatched in [WINDOW]      │ │
│ │ © 2026 Red Clay.     │                      │                      │                             │ │
│ └──────────────────────┴──────────────────────┴──────────────────────┴─────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

# PART 15 — COMPONENT WIREFRAME KIT

1. **`COMP-PROD-CARD` (Product Card):**
    
    - _Info:_ Image, Title, Origin, Tasting Notes, Metadata Strip (MASL/Process/Size), Price, Quick Add.

    - _Mobile:_ Vertical stack (3:4 image above details).

    - _Desktop:_ Horizontal split or wide grid card.

2. **`COMP-BUY-MODULE` (PDP Purchase Panel):**
    
    - _Info:_ Eyebrow, Title, Tasting Notes, Price, Format Selector, Optional Frequency, Add to Bag, Dispatch Notice.

    - _Mobile:_ Linear flow directly beneath hero gallery.

    - _Desktop:_ Pinned sticky panel within section boundaries.

3. **`COMP-STICKY-BAR` (Mobile Sticky Purchase Bar):**
    
    - _Info:_ Title, Price, Format Chip, Add to Bag Button.

    - _Mobile:_ 54px fixed thumb-zone bar; appears only when Level 1 is scrolled out of view.

    - _Desktop:_ Hidden (`display: none`).

4. **`COMP-ORIGIN-CARD` (Regional Terroir Card):**
    
    - _Info:_ Image, Region Name, Elevation Range, Landscape Summary, Link CTA.

    - _Mobile:_ 4:5 vertical card with large touch target.

    - _Desktop:_ 1/3 column regional plate with subtle line contour.

5. **`COMP-EDITION-CARD` (Editorial Article Card):**
    
    - _Info:_ Image, Tag/Volume, Title, Excerpt, Reading Time, Link CTA.

    - _Mobile:_ Stacked image and text with clear link.

    - _Desktop:_ Asymmetric featured plate vs secondary column variants.

6. **`COMP-INLINE-BUY` (In-Article Story-to-Cart Card):**
    
    - _Info:_ Product Image, Lot Name, Origin, Notes, Price, Quick Add.

    - _Mobile:_ Compact card triggering slide-up purchase sheet.

    - _Desktop:_ Centered 700px editorial card embedded within reading stream.

7. **`COMP-METADATA-BLOCK` (Agronomic Specs Matrix):**
    
    - _Info:_ Key/value pairs (Region, Elevation, Variety, Process, Grade, Storage).

    - _Mobile:_ Collapsible accordion (`[ View Technical Specifications + ]`).

    - _Desktop:_ Clean 2-column tabular grid with fine divider rules.

8. **`COMP-NEWSLETTER` (Dispatch Retention Form):**
    
    - _Info:_ Heading, Copy, Email Input Field, Submit CTA, Microcopy.

    - _Mobile:_ Stacked input and full-width button.

    - _Desktop:_ Inline single-row input and button.

9. **`COMP-CART-ITEM` (Cart Line Item):**
    
    - _Info:_ 1:1 Thumbnail, Title, Format, Price, Quantity Stepper, Remove.

    - _Mobile/Desktop:_ Compact horizontal flex row.

10. **`COMP-RELATED-CARD` (Cross-Sell / Navigation Card):**
    
    - _Info:_ Thumbnail, Name, Secondary Info, Link.

    - _Mobile:_ 2-column compact grid.

    - _Desktop:_ 3-column horizontal strip.

11. **`COMP-IMAGE-PLATE` (Editorial Visual Interlude):**
    
    - _Info:_ Responsive image container with optional caption.

    - _Mobile:_ Full-bleed `100vw`.

    - _Desktop:_ Contained `1200px` or full-bleed `100vw`.

12. **`COMP-S5-SLOT` (Signature Experience Container):**
    
    - _Info:_ Bounded placeholder holding static 3-region fallback until Section 5.

# PART 16 — RESPONSIVE BEHAVIOR MATRIX

|Component|Mobile (390px)|Tablet (768px)|Desktop (1440px)|
|---|---|---|---|
|**Header**|Fixed 48px, Menu text + Bag|Fixed 56px, Menu + Bag|Pinned 72px, Full horizontal navigation links|
|**Product Card**|Vertical single-column stack|2-column grid|Horizontal split card or asymmetric grid|
|**PDP Layout**|Single vertical stream, sticky buy bar|Single stream, centered|58/42 split: scrolling media + pinned purchase panel|
|**Origins Index**|Stacked 4:5 cards|2-column grid|3-column horizontal plate layout|
|**The Editions**|Stacked 1-column list|2-column grid|Asymmetric 1 dominant hero + 2 secondary stacked|
|**Article Reading**|100% width (358px measure)|Centered 580px measure|Centered 620px measure with margin annotations|
|**Metadata Block**|Collapsible accordion|2-column key/value table|2-column key/value table with divider rules|
|**Cart Drawer**|90vh Bottom Sheet|Right Drawer (380px)|Right Drawer (420px) with backdrop dim|
|**Global Footer**|Stacked single-column|2-column grid|4-column architectural directory|

# PART 17 — ASSET PLACEMENT MAP

This map uses the **Section 4B canonical asset IDs**. It is still a wireframe-placement map, not the final Section 6 production manifest.

### Homepage

| Asset ID | Wireframe placement | Responsive role | Crop / notes | Status |
|---|---|---|---|---|
| `HOME-HERO-D` | Home 01 Hero | Desktop | Wide 16:9+ | Final likely new |
| `HOME-HERO-M` | Home 01 Hero | Mobile | 9:16 dedicated composition | Validation reference/reuse |
| `HOME-CONTINUUM-MAT` | Home 02 Continuum | Shared/optional | 16:9 or 4:5 | Validation reuse |
| `HOME-PROD-01` | Home 03 featured coffee | Shared | 3:4 | Final packaging required |
| `HOME-PROD-02` | Home 03 compact coffee | Shared | compact/3:4 source | Final packaging required |
| `HOME-PROD-03` | Home 03 compact coffee | Shared | compact/3:4 source | Final packaging required |
| `HOME-PROD-04` | Home 03 compact coffee | Shared | compact/3:4 source | Final packaging required |
| `HOME-PROD-05` | Home 03 companion object | Shared | 3:4 / compact crop | Validation reference/reuse |
| `HOME-ORIGIN-KENYA` | Home 04 Origins | Shared | 4:5 mobile / 16:9 desktop | New/final |
| `HOME-ORIGIN-BURUNDI` | Home 04 Origins | Shared | 4:5 / 16:9 | New |
| `HOME-ORIGIN-ETHIOPIA` | Home 04 Origins | Shared | 4:5 / 16:9 | New |
| `HOME-EDITION-01` | Home 05 Featured Edition | Shared | 4:5 / 16:9 | Validation can inform |
| `HOME-KILN-RITUAL` | Home 06 Kiln Cup | Shared | 4:5 / 9:16 | Validation reference/reuse |
| `HOME-KILN-MOTION` | Home 06 optional ambience | Desktop optional | responsive | Optional; static fallback required |

### Shop

| Asset ID | Placement | Notes |
|---|---|---|
| `SHOP-KENYA-01` | Kenya product row | Final packaging asset |
| `SHOP-BURUNDI-01` | Burundi product row | Final packaging asset |
| `SHOP-ETHIOPIA-01` | Ethiopia Lot 01 row | Final packaging asset |
| `SHOP-ETHIOPIA-02` | Ethiopia Lot 02 row | Final packaging asset |
| `SHOP-KILN-01` | Kiln Cup row | Validation can inform |
| `SHOP-DETAIL-MAT` | Optional dispatch/material note | Optional |

### Coffee PDP Template — all four coffees

Each PDP uses the same six-slot structure; one completed low-fi template is reused structurally.

| Lot | Hero | Pack | Origin | Process | Botanical | Ritual |
|---|---|---|---|---|---|---|
| Kenya | `PDP-KENYA-HERO` | `PDP-KENYA-PACK` | `PDP-KENYA-ORIGIN` | `PDP-KENYA-PROCESS` | `PDP-KENYA-BOTANICAL` | `PDP-KENYA-RITUAL` |
| Burundi | `PDP-BURUNDI-HERO` | `PDP-BURUNDI-PACK` | `PDP-BURUNDI-ORIGIN` | `PDP-BURUNDI-PROCESS` | `PDP-BURUNDI-BOTANICAL` | `PDP-BURUNDI-RITUAL` |
| Ethiopia 01 | `PDP-ETH01-HERO` | `PDP-ETH01-PACK` | `PDP-ETH01-ORIGIN` | `PDP-ETH01-PROCESS` | `PDP-ETH01-BOTANICAL` | `PDP-ETH01-RITUAL` |
| Ethiopia 02 | `PDP-ETH02-HERO` | `PDP-ETH02-PACK` | `PDP-ETH02-ORIGIN` | `PDP-ETH02-PROCESS` | `PDP-ETH02-BOTANICAL` | `PDP-ETH02-RITUAL` |

**Placement rule:** Hero/pack support Level 1; origin/process support Level 3; botanical/ritual are optional supporting plates where pacing benefits. Not every PDP must use all six assets simultaneously.

### Kiln Cup

- `CUP-HERO` → object hero / purchase
- `CUP-MATERIAL-MACRO` → material section
- `CUP-HAND-SCALE` → scale/hand-feel section
- `CUP-RITUAL-POUR` → ritual section
- `CUP-BUNDLE` → pairing module
- `CUP-DIMENSION-GRAPHIC` → optional factual/spec graphic; designed manually, not AI-generated text

### Origins Hub

- `ORIGINS-HERO` → optional thesis plate
- `ORIGINS-S5-PLACEHOLDER` → static fallback / future signature slot
- `ORIGINS-CARD-KENYA` → region card
- `ORIGINS-CARD-BURUNDI` → region card
- `ORIGINS-CARD-ETHIOPIA` → region card
- `ORIGINS-CURRENT-COFFEES` → compact harvest bridge; may reuse product imagery

### Origin Dossiers

| Region | Hero | Landscape | Process | Work | Botanical |
|---|---|---|---|---|---|
| Kenya | `ORIGIN-KENYA-HERO` | `ORIGIN-KENYA-LANDSCAPE` | `ORIGIN-KENYA-PROCESS` | `ORIGIN-KENYA-WORK` | `ORIGIN-KENYA-BOTANICAL` |
| Burundi | `ORIGIN-BURUNDI-HERO` | `ORIGIN-BURUNDI-LANDSCAPE` | `ORIGIN-BURUNDI-PROCESS` | `ORIGIN-BURUNDI-WORK` | `ORIGIN-BURUNDI-BOTANICAL` |
| Ethiopia | `ORIGIN-ETHIOPIA-HERO` | `ORIGIN-ETHIOPIA-LANDSCAPE` | `ORIGIN-ETHIOPIA-PROCESS` | `ORIGIN-ETHIOPIA-WORK` | `ORIGIN-ETHIOPIA-BOTANICAL` |

### Editions

**Hub**
- `EDITIONS-HERO` → optional editorial masthead visual
- `EDITIONS-KENYA-CARD`
- `EDITIONS-BURUNDI-CARD`
- `EDITIONS-ETHIOPIA-CARD`

**Kenya article**
- `EDITION-KENYA-LEAD`
- `EDITION-KENYA-PLACE`
- `EDITION-KENYA-PROCESS`
- `EDITION-KENYA-WORK`
- `EDITION-KENYA-INTERLUDE`

**Burundi article**
- `EDITION-BURUNDI-LEAD`
- `EDITION-BURUNDI-PLACE`
- `EDITION-BURUNDI-PROCESS`
- `EDITION-BURUNDI-WORK`
- `EDITION-BURUNDI-INTERLUDE`

**Ethiopia article**
- `EDITION-ETHIOPIA-LEAD`
- `EDITION-ETHIOPIA-PLACE`
- `EDITION-ETHIOPIA-PROCESS`
- `EDITION-ETHIOPIA-WORK`
- `EDITION-ETHIOPIA-INTERLUDE`

### About

- `ABOUT-HERO-MATERIAL` → material-world plate
- `ABOUT-EARTH` → earth/name support
- `ABOUT-COFFEE` → origin/coffee support
- `ABOUT-PORTRAIT` → representation section
- `ABOUT-RITUAL` → ritual/material bridge
- `ABOUT-CLOSING` → optional closing plate

### Global / Utility

- `GLOBAL-FOOTER-TYPO`
- `GLOBAL-NEWSLETTER-MARK`
- `GLOBAL-EMPTY-BAG`
- `GLOBAL-LEGAL-MARK`

### Placement Rules

- Geography-specific assets must be region-appropriate and factually reviewed before public use.
- Generated people must never be presented as real identifiable producers or partners.
- Product photography must preserve consistent final fictional packaging and Kiln Cup geometry.
- Text/labels are applied in design/code, not generated inside photographic assets.
- Section 5 may introduce additional assets only after its concept is selected.

# PART 18 — WIREFRAME PERFORMANCE AUDIT

| Risk | Structural impact | Required fallback / mitigation |
|---|---|---|
| Media-heavy hero and editorial plates | Can dominate mobile loading and LCP | Use responsive image sources and dedicated mobile crops; aggressively optimize final assets; load only the hero eagerly. |
| Ambient video / cinemagraphs | Battery, bandwidth, autoplay and motion concerns | Treat as optional desktop enhancement. Mobile and reduced-motion modes use an approved still. |
| Sticky purchase UI | Can obscure content or create scroll jank | Use the collision rules in Part 1; trigger from element visibility rather than continuous heavy scroll work where possible. |
| Long editorial pages | Large image sequences and excessive client JS can compound | Keep article structure mostly semantic/server-renderable; lazy-load below-the-fold media and enhancements. |
| Metadata disclosures | Over-engineering disclosure behavior adds complexity | Use native/accessible disclosure patterns where practical; hidden content does not need to be unmounted solely for performance. |
| Section 5 signature experience | Could become the heaviest part of the site | Static accessible fallback is mandatory. Load advanced assets/code only when the selected concept requires them. |
| Multiple carousels | Can add JS, accessibility, and touch friction | Prefer vertical flow. Use a carousel only when browser testing proves it meaningfully improves the experience. |

**Performance principle:** Section 4C establishes structural restraint, not arbitrary byte budgets. Concrete performance budgets belong in the technical implementation/QA specification after the final asset and interaction stack are known.

# PART 19 — ACCESSIBILITY STRUCTURAL AUDIT# PART 19 — ACCESSIBILITY STRUCTURAL AUDIT

- **Semantic Heading Hierarchy:** Each page uses one clear `H1` and a logical semantic hierarchy. Heading levels follow document structure rather than visual size; avoid skipped levels where a meaningful intermediate heading is required.

- **Dialog & Drawer Focus Trapping:** Both the Cart Drawer and Mobile Menu implement strict focus trapping (`aria-modal="true"`, `role="dialog"`), return focus to the trigger element on close, and dismiss on `Escape`.

- **Minimum Tap Target Intent:** All interactive buttons, quantity steppers, format selectors, and navigation triggers maintain a minimum touch bounding box of `48px × 48px`.

- **Reduced Motion Compliance (`prefers-reduced-motion`):** Smooth scroll behaviors, ambient cinemagraph loops, and layout transform animations are completely disabled under user reduced-motion settings, falling back to instant state changes.

- **Form & Input Accessibility:** Newsletter inputs use visible labels where practical, accessible names, clear inline errors, and status feedback that is announced appropriately. Editorial images require purposeful alt text; decorative material images use empty alt text.

# PART 20 — PAGE-LENGTH & REDUNDANCY AUDIT

Do not treat ASCII wireframes as reliable pixel-height estimates. These classifications describe **relative narrative length** and must be validated in-browser.

| Page / Experience | Relative length | Pruning / consolidation rule |
|---|---|---|
| Homepage | **LONG-MEDIUM** | One featured coffee + compact supporting products; Continuum and Kiln Cup stay compact. Compress card height before removing story beats. |
| Shop | **SHORT–MEDIUM** | Five products, no filters, no redundant category intro. |
| Coffee PDP | **MEDIUM** | Buying controls first; optional metadata collapsed; related content restrained. |
| Kiln Cup PDP | **SHORT** | Must remain shorter than a coffee PDP and return users to coffee. |
| Origins Hub | **MEDIUM** | Section 5 slot must not make the fallback version feel incomplete. |
| Origin Dossier | **MEDIUM–LONG** | Image/story pacing varies by region; avoid repeating the same explanation from the Origins Hub. |
| Editions Hub | **SHORT** | One featured Edition + two secondary stories; do not simulate a large magazine archive. |
| Edition Article | **LONG** | Long-form reading is intentional; normally one contextual commerce moment. |
| About | **MEDIUM** | Preserve the full approved thesis without repeating homepage copy verbatim. |

### Redundancy rules

- The Homepage introduces the brand; About explains it in greater depth.
- Origins Hub compares regions; dossiers provide regional context.
- PDPs sell coffee first; Editions provide deeper reading.
- The Kiln Cup supports the continuum but never becomes a second product universe.
- Repeated metadata should be shortened rather than copied verbatim across Homepage, Shop, PDP, and Origins.

# PART 21 — SECTION 4C FINAL HANDOFF

## A. Final Low-Fidelity Screen Inventory (18 Master Frames)

1. `FRAME-HOME-MOB-01` (Homepage Mobile)
    
2. `FRAME-HOME-DSK-01` (Homepage Desktop)
    
3. `FRAME-SHOP-MOB-01` (Shop Collection Mobile)
    
4. `FRAME-SHOP-DSK-01` (Shop Collection Desktop)
    
5. `FRAME-PDP-COFFEE-MOB-01` (Coffee PDP Mobile)
    
6. `FRAME-PDP-COFFEE-DSK-01` (Coffee PDP Desktop)
    
7. `FRAME-PDP-CUP-MOB-01` (Kiln Cup PDP Mobile)
    
8. `FRAME-PDP-CUP-DSK-01` (Kiln Cup PDP Desktop)
    
9. `FRAME-ORIGINS-HUB-MOB-01` (Origins Hub Mobile)
    
10. `FRAME-ORIGINS-HUB-DSK-01` (Origins Hub Desktop)
    
11. `FRAME-ORIGIN-DOSSIER-MOB-01` (Regional Dossier Mobile)
    
12. `FRAME-ORIGIN-DOSSIER-DSK-01` (Regional Dossier Desktop)
    
13. `FRAME-EDITIONS-HUB-MOB-01` (The Editions Hub Mobile)
    
14. `FRAME-EDITIONS-HUB-DSK-01` (The Editions Hub Desktop)
    
15. `FRAME-EDITION-ARTICLE-MOB-01` (Edition Article Mobile)
    
16. `FRAME-EDITION-ARTICLE-DSK-01` (Edition Article Desktop)
    
17. `FRAME-ABOUT-MOB-01` (About Page Mobile)
    
18. `FRAME-ABOUT-DSK-01` (About Page Desktop)
    

## B. Primary Mobile Wireframes (Priority Build Order)

1. `FRAME-HOME-MOB-01` → Validates the 7-movement narrative pacing.

2. `FRAME-PDP-COFFEE-MOB-01` → Validates Level 1 buying panel and sticky purchase bar.
    
3. `FRAME-SHOP-MOB-01` → Validates 5-product editorial list without filtering.
    
4. `FRAME-EDITION-ARTICLE-MOB-01` → Validates long-form reading comfort and inline commerce.

## C. Primary Desktop Wireframes

1. `FRAME-HOME-DSK-01` → Asymmetric spatial hero and horizontal continuum.
    
2. `FRAME-PDP-COFFEE-DSK-01` → 58/42 split layout with pinned purchase panel.
    
3. `FRAME-EDITIONS-HUB-DSK-01` → Volume 01 publication-grade asymmetrical spread.

## D. Component Inventory (12 Reusable UI Units)

- `COMP-PROD-CARD`, `COMP-BUY-MODULE`, `COMP-STICKY-BAR`, `COMP-ORIGIN-CARD`, `COMP-EDITION-CARD`, `COMP-INLINE-BUY`, `COMP-METADATA-BLOCK`, `COMP-NEWSLETTER`, `COMP-CART-ITEM`, `COMP-RELATED-CARD`, `COMP-IMAGE-PLATE`, `COMP-S5-SLOT`.

## E. Sticky & Fixed UI Rules

- Header smart-hides on scroll-down; Mobile Buy Bar appears strictly after Level 1 leaves viewport; Cart Drawer locks background interaction; Desktop purchase panel unpins before reaching related products.
    

## F. Asset Placement Summary

- Part 17 now maps the full Section 4B temporary asset system across Homepage, Shop, all coffee PDPs, Kiln Cup, Origins, three regional dossiers, Editions, About, and global utility states. Final production/reuse decisions belong to Section 6.

## G. Accessibility Baseline

- Logical heading tree, focus trapping in modal dialogs, 48px tap targets, and full `prefers-reduced-motion` compliance.

## H. Performance Baseline

- Mobile has a complete static experience; advanced media/interaction is progressive enhancement. Responsive media, below-the-fold lazy loading, reduced-motion fallbacks, and restrained client-side interaction are required. Concrete budgets are defined later once assets and the Section 5 technology are known.
    

## I. Remaining Content Placeholders

- `[PRICE]`, `[ROAST DAY]`, `[DISPATCH WINDOW]`, final fictional product names, verified elevation/cultivar/process details, final grind options, final packaging, and Kiln Cup specifications remain placeholders. `[SUBSCRIPTION SAVING]` is optional/deferred unless subscriptions are later retained.

## J. Open Decisions

- **No unresolved decision blocks low-fidelity wireframing.** The following downstream decisions remain intentionally open: final product names, factual origin copy, exact elevations/cultivars/process details, prices, roast/dispatch cadence, grind options, subscription inclusion, Kiln Cup specifications, final packaging, final visual tokens, motion details, and the Section 5 signature concept.
    

## K. Section 5 Handoff — Signature Experience

- **Primary reserved slot:** `/origins`, between the Origins thesis and regional entries.
- **Static fallback:** three accessible region entry points that fully preserve navigation and understanding without advanced interaction.
- **Homepage:** may link to or preview the selected signature experience later, but no homepage interaction is required by Section 4C.
- **Optional secondary integration:** another page may receive an enhancement only if the selected Section 5 concept genuinely benefits from it. No Kiln Cup light study, 3D model, map, or WebGL treatment is assumed here.
- **Responsive constraint:** mobile must remain complete and performant with the fallback; desktop may receive a richer spatial treatment.
- **Accessibility constraint:** keyboard, touch, reduced-motion, and non-WebGL/static modes must provide equivalent access to the underlying content and destinations.
- **Performance constraint:** advanced Section 5 code/assets must be isolated and progressively loaded rather than becoming a dependency for core navigation or commerce.

## Section 4C Completion Statement

The corrected low-fidelity specification now defines page order, mobile-first hierarchy, desktop expansion, component placement, asset placement, purchase surfaces, accessibility structure, performance fallbacks, and a concept-neutral Section 5 integration boundary. It is ready to serve as the canonical Section 4C source for the next project phase and later code-first art direction.

_End of Section 4C — corrected canonical version._
