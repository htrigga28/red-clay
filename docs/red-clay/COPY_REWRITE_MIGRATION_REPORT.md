# Red Clay Coffee Copy Rewrite Migration Report

Date: 2026-08-28

This report records the copy-only migration stage. The later approved `RED_CLAY_COMMERCE_PRODUCT_SPEC_FACT_CANON.md` resolves the commercial fields that were deferred here and is the implementation authority for the commerce extension in this branch.

## Product migration

The active shop now has 13 products in four groups.

### Old and new names

| Old name | New name |
| --- | --- |
| KENYA LOT 01 | Kiambu / Washed 01 |
| BURUNDI LOT 01 | Kayanza / Washed 01 |
| ETHIOPIA LOT 01 | Sidama / Washed 01 |
| ETHIOPIA LOT 02 | Guji / Natural 02 |

The Material Series adds Laterite, Basalt, and Linen. Current Harvest adds Kirinyaga / Washed 02 and Kayanza / Natural 02 beside the four migrated products. Other Ways to Drink adds Afterlight, Red Clay Instant — Ethiopia, and Three Regions. The Kiln Cup remains the only active object.

The Earthen Folio remains a future physical edition. It is not active commerce.

### Public routes

The shop now uses these clean routes:

- `/shop/laterite`
- `/shop/basalt`
- `/shop/linen`
- `/shop/kiambu-washed-01`
- `/shop/kirinyaga-washed-02`
- `/shop/kayanza-washed-01`
- `/shop/kayanza-natural-02`
- `/shop/sidama-washed-01`
- `/shop/guji-natural-02`
- `/shop/afterlight`
- `/shop/red-clay-instant`
- `/shop/three-regions`
- `/shop/the-kiln-cup`

### Redirects

The production server returns permanent `308` redirects:

| Old route | New route |
| --- | --- |
| `/shop/kenya-lot-01` | `/shop/kiambu-washed-01` |
| `/shop/burundi-lot-01` | `/shop/kayanza-washed-01` |
| `/shop/ethiopia-lot-01` | `/shop/sidama-washed-01` |
| `/shop/ethiopia-lot-02` | `/shop/guji-natural-02` |
| `/journal/canopy-and-landrace` | `/journal/beyond-heirloom` |

The old names and slugs do not appear in public copy. They remain only in redirect and legacy-route maps.

## Copy deletion

The rewrite removes these internal-language groups from public pages:

- asset approval and placeholder status;
- provenance-control instructions;
- fictional-product qualifiers on each product;
- production-claim warnings;
- archive and visual-record explanations;
- template text that explains component or media reuse.

The footer now holds the one required fictional-brand and image-context disclosure. The exact disclosure appears once.

The rewrite also removes or consolidates these duplicate blocks:

- repeated PDP provenance paragraphs;
- repeated PDP ritual disclaimers;
- repeated Origin hub and regional-page explanations;
- the separate Territories route system on Origins;
- repeated Edition-to-Origin provenance text;
- the customer-facing Dispatch label;
- repeated generic product-card actions.

The audit baseline found 14 meaningful exact-repeat groups and seven large concept clusters. This pass does not treat normal controls such as `Add to Bag`, `Remove`, or `Close` as faults. After the rewrite, the flagged internal phrases and the generic `View coffee` label return zero public-source matches. Shared copy now has a clear job: navigation, commerce control, section orientation, or the one global disclosure.

## CTA changes

### Old patterns

- Cards often had more than one visible route action.
- `View coffee` did not help a reader distinguish products.
- Origins used Folio, chapter, Territories, and dossier actions for similar destinations.
- Edition summaries used the same generic read action.

### New system

- Each product card has one visible route action with the product name.
- `Add to Bag` is an optional commerce action. It does not replace card navigation.
- Shop group actions route to a product or a named comparison anchor.
- Origins actions use `Explore` plus the region name.
- Edition actions use `Read` plus the story title.
- Connected Coffee actions route to canonical PDPs.
- The grouped Shop menu has three groups and one `Shop all` route.

This system reduces duplicate targets without hiding the main path.

### Dominant-word changes

A rendered-text scan covered all 25 public routes after the rewrite. The main house-cadence words now appear at this scale:

- `held`: two uses;
- `close`: one use, in the shared Close control;
- `stillness`: one use;
- `quiet`, `attention`, `process-led`, `chapter`, `frame`, and `rhythm`: zero uses.

The words `place` (49 uses), `process` (52), and `context` (38) remain common because the three long Editions and regional pages discuss those subjects directly. `Material` appears 22 times, mainly in the approved Material Series name and literal Kiln Cup copy. These terms now carry product or editorial information instead of acting as default mood language.

### Remaining copy concerns

- Afterlight's 250g format and water-process decaf wording are approved in the later commerce canon.
- Prices, shipping, and portfolio checkout are resolved by the later commerce canon; availability, inventory, and tax remain outside this copy-only report.
- Final Kiln Cup care copy remains blocked by verified care guidance.
- Custom product and Kiln Cup media are still pending. The current geometry-preserving placeholders must be replaced without relabelling contextual regional images as product-specific evidence.
- The long Editions have a source record, but any future sourcing, harvest, or producer claims will require a new fact check.

## Product differentiation

### Material Series

- Laterite is the balanced and versatile starting point.
- Basalt has more body and deeper sweetness. It supports espresso and milk drinks.
- Linen is the lightest and most floral house profile. It supports filter brewing.

### Kenya pair

- Kiambu / Washed 01 is darker-fruited and more structured.
- Kirinyaga / Washed 02 is brighter, more floral, and more citrus-led.
- Kiambu photography is not relabelled as Kirinyaga.

### Kayanza pair

- Kayanza / Washed 01 is cleaner, floral, and honeyed.
- Kayanza / Natural 02 is rounder, fruitier, and deeper.
- The copy treats process as one factor. It does not treat process as flavor destiny.

### Ethiopia pair

- Sidama / Washed 01 is lighter, floral, and tea-like.
- Guji / Natural 02 is rounder, fruit-driven, and deeper.
- Hawassa process images remain broad Ethiopia context. They are not labelled as Sidama or Guji landscapes.

## Origins

The Origins hub now compares and routes. It no longer repeats full regional explanations or a separate Territories system.

The Folio compares place, process, and cup direction. Each regional page then adds the longer context:

- Central Kenya explains washed processing, selection, and the history of SL28, SL34, and Ruiru 11.
- Kayanza explains hillside delivery, shared stations, washed and natural routes, and active drying work.
- Southern Ethiopia explains Sidama and Guji as distinct places, coffee diversity, variety terms, and washed and natural handling.

The regional pages connect to the correct coffees and the correct Volume 01 story.

## Editions

All three launch stories belong to **Volume 01 — Place**.

| Story | Body count | Sources | Main structure |
| --- | ---: | ---: | --- |
| Water & Time | about 1,022 words | 5 | fruit, washed sequence, Kenya context, variety history, product comparison |
| Along the Kayanza Hills | about 1,158 words | 5 | hillside plots, station delivery, station work, Bourbon context, drying, product comparison |
| Beyond “Heirloom” | about 1,249 words | 6 | trade shorthand, landraces and selections, research, geography, process, product comparison |

Each story has separate card copy, a standfirst, and a related-content blurb. Each story also has:

- a clear narrative sequence;
- image captions that keep the recorded location intact;
- connected coffees that open canonical PDPs;
- a related Origin route;
- a customer-facing Sources & Further Reading section.

The research set includes the Kenya Agriculture and Food Authority, World Coffee Research, the Specialty Coffee Association, Coffee Quality Institute, World Bank Burundi records, Alliance for Coffee Excellence, FAO AGRIS, *Scientific Reports*, and *Heliyon*. Royal Coffee supports only the trade-language discussion around “heirloom.”

The detailed claim, source, limit, and use record is in `docs/red-clay/EDITORIAL_FACT_CHECK.md`.

The route and title migration is:

- old: `/journal/canopy-and-landrace`, **Canopy & Landrace**;
- new: `/journal/beyond-heirloom`, **Beyond “Heirloom”**.

## About

About keeps the core brand lines and rewrites the representation section for customers.

The public page now states that coffee depends on skilled decisions in growing, selection, processing, and drying. It no longer repeats an internal anti-paternalism or image-provenance policy. The footer disclosure carries the project-wide context.

## Deferred

At the copy-only stage, these decisions were still open. The later commerce canon resolves the commercial fields for this branch:

- product prices and currency;
- subtotal, shipping, tax, and checkout;
- final Kiln Cup care claims;
- product availability and inventory policy;
- custom product and Kiln Cup media replacement.

At the copy-only stage, the Bag remained a demo holding state. The later commerce canon adds the approved prices, subtotal, delivery context, and portfolio checkout described by the implementation.

## QA

### Static checks

- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: passed and generated 31 static pages.
- `git diff --check`: passed.
- Impeccable detector on `src/app`, `src/components`, and `src/content`: returned `[]`.

The production build reports that the current ESLint configuration does not expose the Next.js plugin to the build step. The separate project lint command passes.

### Route and link checks

- 25 public routes returned `200`.
- Five old routes returned the correct permanent `308` destination.
- The internal-link crawl reached 25 routes and found zero broken destinations.
- The old product names return zero public-source matches.
- The old public slugs remain only in redirect and legacy-route maps.
- The required footer disclosure appears once.

### Viewport checks

The rendered matrix used these widths:

`320`, `375`, `390`, `430`, `768`, `900`, `1024`, `1100`, `1200`, `1280`, `1366`, `1440`, `1600`, and `1920` pixels.

The matrix tested Home, Shop, a house PDP, a seasonal PDP, Origins, a regional page, a full Edition, About, and Bag at each width. That produced 126 rendered checks.

The first matrix found horizontal overflow on both PDP types at exactly `768px`. The media rule was corrected. Six focused checks at `768`, `900`, and `1024` then passed with no overflow.

Representative full-page captures were also inspected for Shop, a seasonal PDP, a long Edition, and About.

### Interaction checks

- The desktop Shop menu opens with three groups and ten grouped links.
- The mobile menu opens as a dialog and does not overflow.
- Add to Bag opens the Bag drawer and updates the item count.
- Client-side navigation preserves a populated Bag.
- The populated Bag now follows the later commerce canon for price, subtotal, checkout, and shipping claims.
- The browser console and page-error checks returned no errors on the inspected routes.

### Recordings

The final recordings are local QA artifacts under `recordings/`:

- `recordings/red-clay-copy-rewrite-desktop-1366-final.mp4`
  - H.264, `1366×768`, `yuv420p`, 22 seconds.
  - Covers Home, the four Shop movements, representative and paired PDPs, Origins, Kayanza, The Editions, all three long stories, About, The Kiln Cup, a populated Bag, and the footer disclosure.
- `recordings/red-clay-copy-rewrite-mobile-390-final.mp4`
  - H.264, `390×844`, `yuv420p`, 13 seconds.
  - Covers Shop architecture, representative cards, a house PDP, a seasonal PDP, Origins, Beyond “Heirloom,” About, a populated Bag, and the footer disclosure.

`ffprobe` confirmed both output dimensions, codecs, pixel formats, durations, and file sizes.
