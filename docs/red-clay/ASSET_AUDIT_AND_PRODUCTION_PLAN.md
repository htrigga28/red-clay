# Red Clay Coffee — Full Asset Audit & Production Plan

**Status:** `FULL ASSET AUDIT — PRODUCTION PLAN READY FOR CREATIVE REVIEW`  
**Audit date:** 2026-08-29  
**Scope:** Current implementation, selected production media, provenance, route usage, responsive slots, and the smallest coherent future production set.  
**Boundary:** This document does not source, generate, render, crop, grade, replace, or delete assets.

## Executive conclusion

Red Clay has a strong documentary and material foundation, but the commerce experience is still visibly provisional. All 13 active products use CSS geometry in their primary Shop/PDP media. The Material Series, six Current Harvest coffees, Afterlight, Instant, Three Regions, and The Kiln Cup need custom product media before the site can read as portfolio-final. The Ethiopia chapter is the weakest editorial family: `ETH-PROC-103` is a compelling process close-up but has low geographic authority, is only 1200 × 1600, and is reused as the Ethiopia lead on Home, Origins, the dossier, and the Edition.

The smallest coherent launch set is **17 new custom files plus 2 targeted regional/editorial files** (19 files). This uses one high-resolution package master per active product, derives card/PDP/cart crops from those masters, and replaces only the most damaging documentary gaps. The ideal portfolio set is **31 new files** (19 minimum plus 12 alternates/detail/group/campaign enhancements). Existing documentary work can mostly remain when captions, provenance, crop, and reuse limits are respected.

## Authority and interpretation

The later `PRODUCT_CONTENT_CANON.md` and `RED_CLAY_COMMERCE_PRODUCT_SPEC_FACT_CANON.md` override older four-coffee and `KENYA/BURUNDI/ETHIOPIA LOT` scaffolding. The 2026-08-28 copy migration confirms 13 active products and canonical routes. `IMPLEMENTATION_ASSET_LOCK.md` controls current production authorization; `LICENSES_AND_PROVENANCE.md` supplies rights records but is itself a candidate ledger. A written specification is not a file. `SPEC_EXISTS`, `SOURCE_FILE_SUPPLIED`, and `PRODUCTION_APPROVAL` remain independent fields.

Production authorization remains four-way:

`APPROVED_CURRENT` · `PROVISIONAL_REPLACEABLE` · `REFERENCE_ONLY` · `CUSTOM_ASSET_PENDING`

This audit adds an independent disposition:

`KEEP_FINAL` · `KEEP_CURRENT` · `KEEP_CONTEXT_ONLY` · `REPLACE_PRIORITY` · `NEW_CUSTOM_REQUIRED` · `NEW_EDITORIAL_REQUIRED` · `OPTIONAL_ENHANCEMENT` · `RETIRE`

## Current implementation snapshot

| Measure | Finding |
| --- | --- |
| Production files audited | 17 files under `public/media/red-clay/`: 16 JPGs and one `RITUAL-201_SOURCE_RECORD.md` |
| Image bytes | 89,715,454 bytes (85.56 MiB), before Next image derivatives |
| `APPROVED_CURRENT` image files | 14 |
| `PROVISIONAL_REPLACEABLE` image files | 2 (`ARCH-201`, `ETH-PROC-103`) |
| Approved but missing source bytes | `RITUAL-201` (`MANUAL_DOWNLOAD_REQUIRED`) |
| Current product placeholders | 13 products × Shop/PDP primary; product alternates and cart thumbnails are also provisional |
| Active products | 13 (3 Material Series, 6 Current Harvest, 3 Other Ways to Drink, The Kiln Cup) |
| Reference-only media shipped | 0; `PACK-201`–`205` and `CUP-201`–`205` are not in the public tree |
| Responsive source variants | 0; all images use one JPG URL with CSS `object-fit: cover` |
| Generated derivatives | 0 committed AVIF/WebP files; Next optimizes on demand |
| Duplicate image hashes | 0 |

The expected placeholder SVG paths in `CODEX_ASSET_MAP.md` are not present. The implementation uses `ProductMediaPlaceholder` CSS geometry instead. `pendingPlaceholderPath()` is currently unreferenced.

## Complete file inventory

Sizes are actual file bytes. Ratios are width ÷ height. `D/M` describes the current desktop/mobile treatment, not a separate source file.

| ID | File (actual path) | Type · dimensions · bytes · ratio | Source / rights | Production approval | Audit disposition | Current routes and component roles | Alt/caption and crop notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ARCH-201 | `public/media/red-clay/ARCHITECTURE/ARCH-201.jpg` | JPG · 3000×4500 · 1,560,195 · 0.6667 | Unsplash / Adish (AJ), Unsplash License; ledger ID is `ARCH-EARTH-001` and needs reconciliation | `PROVISIONAL_REPLACEABLE` | `RETIRE` from production; retain as reference | No rendered route; only registry entry | “Contemporary rammed-earth walls beneath a timber pergola.” If reused for a prototype, never imply a Red Clay property. |
| MAT-CLAY-001 | `public/media/red-clay/MATERIALS/MAT-CLAY-001.jpg` | JPG · 4096×4096 · 10,740,544 · 1.0000 | Poly Haven, CC0 1.0 | `APPROVED_CURRENT` | `KEEP_CURRENT` | Home Continuum Earth; About material clay | “Cracked red earth texture.” Use as material texture, not product or place evidence; square crop is safe. |
| MAT-STONE-102 | `public/media/red-clay/MATERIALS/MAT-STONE-102.jpg` | JPG · 4096×4096 · 9,601,413 · 1.0000 | Poly Haven / Amal Kumar, CC0 1.0 | `APPROVED_CURRENT` | `KEEP_CURRENT` | Home Continuum Vessel | “Dark fractured stone texture.” Keep as basalt support; do not force it into a packshot. |
| MAT-LINEN-101 | `public/media/red-clay/MATERIALS/MAT-LINEN-101.jpg` | JPG · 4096×4105 · 13,064,750 · 0.9978 | Poly Haven / colormass and Rico Cilliers, CC0 1.0 | `APPROVED_CURRENT` | `KEEP_CURRENT` | Home ritual material; About material linen | “Close woven linen texture.” Square/4:5 crops survive; avoid visible tiling. |
| KEN-LAND-001 | `public/media/red-clay/KENYA/KEN-LAND-001.jpg` | JPG · 1600×1200 · 681,782 · 1.3333 | Wikimedia Commons / Lebu Ayiga; Kiambu County, CC BY 4.0; attribution required | `APPROVED_CURRENT` | `KEEP_FINAL` for Central Kenya context; `KEEP_CURRENT` for hero after crop test | Home hero Place; Home Kenya origin beat; Central Kenya Folio/dossier lead; Water & Time lead/section; related Kenya context | “Coffee plants near Kawaida Falls in Kiambu County, Kenya.” Never label Kirinyaga. Full-viewport desktop and 16:10/DPR2 uses are resolution-limited; protect the red-soil foreground. |
| KEN-PROC-001 | `public/media/red-clay/KENYA/KEN-PROC-001.jpg` | JPG · 1371×2048 · 2,741,137 · 0.6694 | Wikimedia / Kamweti wa Mutu; Kenya, CC BY-SA 4.0; attribution and share-alike for adaptations | `APPROVED_CURRENT` | `KEEP_CONTEXT_ONLY` | Home Edition plate; Origins related Edition; About origins; Central Kenya dossier support/process/work; Kiambu PDP process; Water & Time process section | “Farmers sorting coffee cherries in Kenya.” Portrait source is aggressively cropped in wide, full-height Home Edition; people are contextual only. |
| KEN-PROC-111 | `public/media/red-clay/KENYA/KEN-PROC-111.jpg` | JPG · 7360×4912 · 32,194,697 · 1.4984 | Wikimedia / Daniel Case; Fairview Estate, Kiambu, CC BY-SA 4.0 | `APPROVED_CURRENT` | `KEEP_FINAL` for drying detail; `KEEP_CURRENT` elsewhere | Kiambu PDP secondary process; Water & Time section; Kenya dossier/Edition detail | “Coffee beans drying on raised racks at Fairview Estate in Kiambu, Kenya.” Excellent crop latitude; create web derivative later because the source is 32 MB. |
| KEN-PROC-115 | `public/media/red-clay/KENYA/KEN-PROC-115.jpg` | JPG · 2564×3980 · 5,592,612 · 0.6442 | Wikimedia / Daniel Case; Fairview Estate, Kiambu, CC BY-SA 4.0 | `APPROVED_CURRENT` | `KEEP_FINAL` for Kiambu botanical/detail; `REPLACE_PRIORITY` where used as product/Three Regions media | Home Continuum Coffee; Home Kenya secondary; desktop Shop reveal feature; Kiambu alternate/botanical | “Ripe coffee cherries on a plant at Fairview Estate in Kiambu, Kenya.” Never label Kirinyaga or Three Regions; tall crop is strong. |
| BUR-LAND-001 | `public/media/red-clay/BURUNDI/BUR-LAND-001.jpg` | JPG · 3264×2448 · 1,946,139 · 1.3333 | Wikimedia / Mheidegger / Hubert Schonberg; Kayanza, CC BY-SA 3.0 | `APPROVED_CURRENT` | `KEEP_FINAL` for Kayanza lead; limit repeated lead use | Home hero Process; Home Burundi origin; Origins Folio/dossier lead; Along the Kayanza Hills lead/section; Origins navigation feature | “Coffee processing landscape in Kayanza, Burundi.” Strongest Kayanza authority; keep captions exact. |
| BUR-LAND-003 | `public/media/red-clay/BURUNDI/BUR-LAND-003.jpg` | JPG · 1772×1181 · 1,350,570 · 1.5004 | Wikimedia / Christine Vaufrey; Banga, Burundi, CC BY 2.0 | `APPROVED_CURRENT` | `KEEP_CONTEXT_ONLY` | Kayanza Folio/dossier support/process/work; Along the Kayanza Hills section | “Hillside landscape in Banga, Burundi.” Do not call it Kayanza; borderline for wide DPR2. |
| BUR-BOT-001 | `public/media/red-clay/BURUNDI/BUR-BOT-001.jpg` | JPG · 1984×2976 · 4,253,740 · 0.6667 | Wikimedia / Edouard mhg; Ngozi, CC0 1.0 | `APPROVED_CURRENT` | `KEEP_CONTEXT_ONLY`; `REPLACE_PRIORITY` as product alternate | Kayanza Folio/dossier detail; Kayanza PDP alternate/botanical; Along the Kayanza Hills detail; desktop product-card hovers | “Coffee cherries and leaves in Ngozi, Burundi.” Botanical support only; do not relabel Kayanza or package media. |
| ETH-PROC-103 | `public/media/red-clay/ETHIOPIA/ETH-PROC-103.jpg` | JPG · 1200×1600 · 816,380 · 0.7500 | Wikimedia / Niels Van Iperen; near Hawassa, CC BY-SA 4.0 | `PROVISIONAL_REPLACEABLE` | `REPLACE_PRIORITY` | Home Ethiopia origin lead; Southern Ethiopia Folio/dossier lead; Beyond “Heirloom” lead/section; Sidama/Guji origin context | “A coffee worker examining beans during sorting near Hawassa, Ethiopia.” Compelling process close-up, but not a place lead, not Sidama/Guji evidence, and soft at 64–68svh desktop/DPR2. |
| ETH-PROC-104 | `public/media/red-clay/ETHIOPIA/ETH-PROC-104.jpg` | JPG · 1600×1200 · 667,489 · 1.3333 | Wikimedia / Niels Van Iperen; Hawassa, CC BY-SA 4.0 | `APPROVED_CURRENT` | `KEEP_CONTEXT_ONLY` | Home Ethiopia secondary; Folio/dossier support/work; Sidama process; Guji secondary; Beyond “Heirloom” section | “Workers sorting coffee beans by size in Hawassa, Ethiopia.” People are contextual only; not a Sidama/Guji lot image. |
| ETH-PROC-105 | `public/media/red-clay/ETHIOPIA/ETH-PROC-105.jpg` | JPG · 3888×2592 · 1,676,748 · 1.5000 | Wikimedia / DFID UK; Ethiopia country-only, CC BY 2.0 | `APPROVED_CURRENT` | `KEEP_CONTEXT_ONLY` | Folio/dossier detail; Guji alternate/process; Beyond “Heirloom” detail | “Coffee beans being sifted during quality sorting in Ethiopia.” Do not infer a southern subregion. |
| RITUAL-203 | `public/media/red-clay/RITUAL/RITUAL-203.jpg` | JPG · 3000×4500 · 977,393 · 0.6667 | Unsplash / Madeline Liu per asset lock; creator is unresolved in ledger; Unsplash License | `APPROVED_CURRENT` | `KEEP_CONTEXT_ONLY` after Cup media arrives | Home Continuum Ritual; The Kiln Cup ritual PDP | “Glass pour-over dripper and server casting shadows in morning light.” Never call the vessel The Kiln Cup; verify creator record before final rights lock. |
| RITUAL-216 | `public/media/red-clay/RITUAL/RITUAL-216.jpg` | JPG · 3000×4524 · 1,849,865 · 0.6631 | Unsplash / Khanh Do, Unsplash License; depicted person is contextual only | `APPROVED_CURRENT` | `KEEP_CONTEXT_ONLY` | Home hero Ritual; Home ritual primary | “Hot water being poured into a coffee dripper.” Strong ritual context; not product photography. |
| RITUAL-201 | `public/media/red-clay/RITUAL/RITUAL-201_SOURCE_RECORD.md` | Markdown source record · 971 bytes | Pexels / dogadakisakal; Pexels License; source page and rights recorded, original retrieval blocked | `APPROVED_CURRENT`; `SOURCE_FILE_SUPPLIED=MANUAL_DOWNLOAD_REQUIRED` | `KEEP_CURRENT` as a path contract; no use until exact JPG is archived | No rendered route; `RITUAL-203`/`RITUAL-216` are the approved substitutes | Record says “Coffee filtering through paper into a glass server.” Never substitute another image under this ID. |

### Dead, stale, and reference-only records

- `ARCH-201` is in the registry but has no rendered consumer. It is a polished but non-owned building image; stop using it in production and retain only as a reference.
- `RITUAL-201` has a verified source record but no source bytes. Do not create a same-ID substitute.
- `pendingPlaceholderPath()` and the documented `/public/media/red-clay/placeholders/**/*.svg` paths have no files or current callers. The CSS placeholder component is the live temporary system.
- `PACK-201`–`PACK-205` and `CUP-201`–`CUP-205` are `REFERENCE_ONLY`, not public assets.
- No duplicate JPG hashes were found. `docs/references/canyon/` contains 12 PNG reference screenshots and is not production media.
- `00_MASTER_IMPLEMENTATION_BRIEF.md` and historical manifest rows still contain old four-lot IDs. They are documentation conflicts, not current product media; do not revive them.

## Actual route and component audit

### Home (`/`)

The three hero slides are real context: `KEN-LAND-001` (Place), `BUR-LAND-001` (Process), and `RITUAL-216` (Ritual). They feel like one authored family, but none is a custom product/brand campaign image. Continuum uses `MAT-CLAY-001`, `KEN-PROC-115`, `MAT-STONE-102`, and `RITUAL-203`; the Vessel state is a stone texture while the Cup itself remains a placeholder. The four Current Harvest cards are pending placeholders. The three origin beats reuse each Folio family. The Edition plate uses the narrow `KEN-PROC-001` portrait in a wide, tall crop. The ritual section reuses `RITUAL-216`, `MAT-LINEN-101`, and a Cup placeholder.

**Home disposition:** keep the current hero as an interim documentary sequence; produce product masters and a Cup hero before portfolio review; replace or reframe the Ethiopia beat lead; treat a custom campaign hero as P1, not a launch blocker, if the documentary hero remains clearly contextual.

### Shop (`/shop`)

There are **12 coffee product cards plus one Cup companion**, all using temporary CSS geometry for their primary media. The three Material Series cards, six Current Harvest cards, and three Other Ways cards are placeholders; the Cup companion is a 4:3 placeholder. Kiambu, both Kayanza coffees, and Guji currently pass documentary images into card hover slots, which risks confusing place evidence with package media. The desktop Shop reveal feature labelled “START HERE / Three Regions” uses `KEN-PROC-115` (Kiambu cherries), which is materially wrong for a three-region box.

**Shop disposition:** P0 packaging masters for all 13 products; P1 replace documentary hovers with pack-derived alternates; P1 replace the Three Regions reveal feature with an opened-box/group asset or neutral material field.

### PDPs (`/shop/[coffee-slug]`)

All 12 coffee PDPs have a pending 4:5 primary hero. Kiambu has current process, secondary drying, botanical, and a documentary hover alternate. Kayanza Washed/Natural share current Burundi support and a Ngozi botanical hover alternate. Sidama and Guji share Hawassa process material; Guji uses `ETH-PROC-105` as a product-card alternate. Kirinyaga, Afterlight, Instant, and Three Regions are text-only below the pending hero. The Cup PDP has three pending object stages and one generic ritual plate; its pairing is text-only.

**PDP disposition:** product master + pack-detail view is P0 for every product; contextual regional support can remain where provenance is explicit; Kirinyaga and Guji need dedicated editorial consideration, not relabelled Kenya/Hawassa photography.

### Origins hub and regional dossiers

The Folio sequence is structurally complete: Central Kenya uses `KEN-LAND-001` / `KEN-PROC-115`, Kayanza uses `BUR-LAND-001` / `BUR-BOT-001`, and Southern Ethiopia uses `ETH-PROC-103` / `ETH-PROC-105`. The dossiers add support/process/work plates, but several sections repeat the same support image. Central Kenya is the most authoritative sequence. Kayanza is strong at the lead but its Banga/Ngozi support must retain those labels. Southern Ethiopia has process/detail variation but lacks a convincing geographic lead.

**Origins disposition:** keep Central Kenya and Kayanza families; P0/P1 replace Southern Ethiopia lead with one sourced place/botanical image; do not create separate desktop/mobile files unless focal content is cut.

### Editions and About

All three launch Editions have a masthead and inline section images. Water & Time is the strongest sequence (Kiambu landscape, Kenya work, raised-bed drying). Along the Kayanza Hills has a strong Kayanza lead plus valid Banga/Ngozi context, but repeats the same family as the dossier. Beyond “Heirloom” is the weakest masthead because its lead is Hawassa process imagery, not geographic place. It may benefit from one restrained terminology/variety diagram only if it replaces explanatory prose; no pseudo-scientific graphic is needed.

About uses `KEN-PROC-001` for origins and the two material textures for the material philosophy. The imagery is sufficient for a quiet thesis-led page; the Kenya work photo is repeated and should remain contextual, not a company relationship claim.

### Bag, checkout, navigation, and footer

Bag line thumbnails are CSS-derived pending geometry with an explicit “product image pending” label. They should later derive from each product master; no unique thumbnail file is needed. Checkout is utility-first and currently needs no decorative image; a tiny crop from the same product master is optional if the final checkout design adds one. Desktop navigation uses `KEN-PROC-115` for the Shop feature and `BUR-LAND-001` for the Origins feature. Mobile navigation has no media. The footer has no media.

## Exact implementation slot ratios and delivery guidance

The following values come from the current CSS, including breakpoint overrides. When a slot is height-driven on desktop, the ratio is `auto` and the fixed height is listed.

| Slot | Current effective ratio / behavior | Recommended final export |
| --- | --- | --- |
| Home hero | 4:3 below 640px and in the current static hero; canonical campaign target 16:9+ desktop / 9:16 mobile | HERO/FULL BLEED: 2400px wide desktop master; dedicated 1350×2400 vertical only when focal crop fails |
| Home Continuum Earth / Ritual | 4:3 mobile; 5:4 Earth and Ritual at ≥640px; desktop height 72vh (`auto` ratio) | 2200px long edge; text-free focal-safe master |
| Home Continuum Coffee | 4:5 mobile/desktop; desktop height 72vh | 2200px long edge; portrait-safe product/detail view |
| Home Continuum Vessel | 4:5 placeholder on mobile/desktop; Cup custom view | Product PDP master, 2400px long edge |
| Home Harvest cards | 4:5 at current `harvest-wall` override; first card no longer 4:3 | Product card crop derived from 2400px package master |
| Shop product card / hover | 4:5 current implementation; hover is same stage and may show an alternate | Product card 1200×1500 derivative plus one alternate crop derived from master |
| Shop Cup companion | 4:3 | Cup master crop; 2200px long edge |
| PDP product hero | 4:5 at 390/768; desktop `auto` with max 70svh between 768–1279, 4:5 at ≥1280 in the current grid | Product PDP: 2400px long edge, centered package and safe label margins |
| PDP process | 4:3 mobile/tablet; 5:4 default desktop; Kayanza 16:10; Ethiopia pair 4:5 | Large editorial plate: 2000px long edge; region/process-specific crop |
| PDP detail/botanical | 3:4 default; 1:1 in Folio/dossier details | Detail: 1600px square or portrait derivative |
| PDP Edition bridge | 16:10 | Large editorial plate: 2000px long edge |
| Folio chapter lead | 4:5 base; enhanced desktop fixed 68svh Central, 74svh Kayanza, 64svh Ethiopia (`auto`) | 2200px long edge; dedicated 4:5/9:16 only when focal subject cannot survive crop |
| Folio detail | 1:1 | 1600×1600 |
| Dossier hero | 4:5 mobile; 5:4 tablet; desktop fixed 68svh or 58svh (`auto`) | 2200px long edge; safe focal zone |
| Dossier place | 16:10 Central; 4:5 Kayanza; 3:2 Ethiopia | 2000px long edge |
| Dossier context | 1:1 | 1600×1600 |
| Dossier work | 16:10 | 2000px long edge |
| Edition masthead / featured | 16:10 base; featured card 16:10; secondary card 4:5 except item 2 at 16:10 | 2200px long edge; 4:5 mobile crop where needed |
| Edition inline plate | 4:3 default; 16:10 wide; 4:5 tall | 1800–2200px long edge |
| About origins | 16:10 | 2000px long edge |
| About material clay / linen | 1:1 / 4:5 | 1600px long edge; texture source retained |
| Kiln Cup hero / material / scale | 4:5 hero; material square; ritual 16:10; scale 16:10; ≥1024 Cup hero 5:4 | Cup master family 2400px long edge; separate macro/hand/ritual views |
| Bag thumbnail | 1:1 outer thumbnail; inner stage fills it (`aspect-ratio:auto`) | Derive 600×600 transparent/package crop; no unique render |
| Checkout thumbnail | No current image slot | Optional 320×320 derived crop only if UI adds one |

Use AVIF/WebP/JPEG for photography and PNG/WebP with alpha for transparent product renders. Use SVG for a dimensions or terminology graphic. Preserve untouched JPG sources and rights links outside derivatives. Generate package text in design/code, never in an AI image.

## Asset reuse heatmap

Counts below are route-level appearances in the current source, not browser impression counts. Reuse is acceptable when the role and geographic claim remain the same; repeated lead use is flagged for fatigue.

| Asset | Home | Shop/nav | PDP | Origins/dossiers | Editions | About | Approx. uses | Audit note |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| KEN-LAND-001 | 3 | 0 | context metadata | Folio + dossier | Water & Time | 0 | 7+ | Strong, but repeated as hero/lead; cap as Central Kenya lead. |
| KEN-PROC-001 | 1 | 0 | Kiambu process | dossier + related | Water & Time | 1 | 6+ | Portrait-to-wide crop fatigue; keep contextual. |
| KEN-PROC-111 | 0 | 0 | Kiambu secondary | dossier support | Water & Time | 0 | 3+ | High quality; use for drying detail. |
| KEN-PROC-115 | 3 | Shop feature | Kiambu alternate/botanical | Folio/dossier detail | 0 | 0 | 7+ | Overloaded as both detail and product hover; remove latter. |
| BUR-LAND-001 | 2 | Origins nav | context metadata | Folio + dossier | Along Kayanza | 0 | 7+ | Strong Kayanza lead; vary article/dossier support. |
| BUR-LAND-003 | 0 | 0 | Kayanza process | dossier/Folio support | Along Kayanza | 0 | 4+ | Keep Banga caption. |
| BUR-BOT-001 | 0 | 0 | Kayanza alternate/botanical | Folio/dossier detail | Along Kayanza | 0 | 5+ | Ngozi only; do not use as package alternate. |
| ETH-PROC-103 | 1 | 0 | context metadata | Folio/dossier lead | Beyond lead/section | 0 | 7+ | Most urgent reuse/geographic weakness. |
| ETH-PROC-104 | 1 | 0 | Sidama/Guji process | Folio/dossier support | Beyond section | 0 | 5+ | Hawassa contextual only. |
| ETH-PROC-105 | 0 | 0 | Guji alternate/process | Folio/dossier detail | Beyond section | 0 | 4+ | Country-only caption. |
| RITUAL-203 | 1 | 0 | Cup ritual | 0 | 0 | 0 | 2 | Keep as generic ritual until Cup photography. |
| RITUAL-216 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | Do not imply Red Clay product. |
| MAT-CLAY-001 | 1 | 0 | 0 | 0 | 0 | 1 | 2 | Good texture support; no packshot role. |
| MAT-LINEN-101 | 2 | 0 | 0 | 0 | 0 | 1 | 3 | Good material bridge; watch repetition. |

## Product requirements matrix

`CURRENT` means an approved contextual or current source is present. `MISSING` means the fictional product role is pending. `DERIVE` means derive a crop from the future master. `NOT REQUIRED` means no dedicated file is justified by the current layout.

| Product | Shop Primary | Shop Alt | PDP Hero | PDP Support | Cart | Context | Group | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LATERITE | MISSING | MISSING | MISSING | NOT REQUIRED | DERIVE | NOT REQUIRED | P1 Material trio | P0 |
| BASALT | MISSING | MISSING | MISSING | NOT REQUIRED | DERIVE | NOT REQUIRED | P1 Material trio | P0 |
| LINEN | MISSING | MISSING | MISSING | NOT REQUIRED | DERIVE | NOT REQUIRED | P1 Material trio | P0 |
| KIAMBU / WASHED 01 | MISSING | CURRENT | MISSING | CURRENT | DERIVE | CURRENT | P2 Kenya pair | P0 |
| KIRINYAGA / WASHED 02 | MISSING | MISSING | MISSING | MISSING (text-only today) | DERIVE | MISSING dedicated regional media | P2 Kenya pair | P0 custom + P1 editorial |
| KAYANZA / WASHED 01 | MISSING | CURRENT | MISSING | CURRENT | DERIVE | CURRENT | P2 Kayanza pair | P0 |
| KAYANZA / NATURAL 02 | MISSING | CURRENT | MISSING | CURRENT | DERIVE | CURRENT | P2 Kayanza pair | P0 |
| SIDAMA / WASHED 01 | MISSING | MISSING | MISSING | CURRENT Hawassa process/detail | DERIVE | PARTIAL; no Sidama place proof | P2 Ethiopia pair | P0 custom + P1 editorial review |
| GUJI / NATURAL 02 | MISSING | CURRENT | MISSING | CURRENT | DERIVE | MISSING dedicated Guji media | P2 Ethiopia pair | P0 custom + P1 editorial |
| AFTERLIGHT | MISSING | MISSING | MISSING | MISSING | DERIVE | NOT REQUIRED today | P2 Other Ways | P0 |
| RED CLAY INSTANT — ETHIOPIA | MISSING box | MISSING box+sachet | MISSING | MISSING (text-only today) | DERIVE box crop | OPTIONAL travel/office only if layout adds it | P2 Other Ways | P0 |
| THREE REGIONS | MISSING outer box | MISSING opened box | MISSING | MISSING (text-only today) | DERIVE box crop | NOT REQUIRED | P1 opened-box group | P0 |
| THE KILN CUP | MISSING | MISSING | MISSING | MISSING macro/detail | DERIVE | CURRENT generic ritual only | P1 coffee + Cup | P0 |

## Master production matrix

This is the mechanical hand-off for later creative production. `Current approval` is the existing four-state authorization; `Audit disposition` is the independent judgement for this pass.

| ID / slot | Route(s) | Role | Current file | Current approval | Audit disposition | Final needed? | Method | Ratio | Priority | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HOME-HERO | `/` | Place / process / ritual hero sequence | KEN-LAND-001; BUR-LAND-001; RITUAL-216 | APPROVED_CURRENT | KEEP_CURRENT | Optional campaign | Existing asset edit; later composite | 4:3 current; 16:9+ target | P1 | Keep documentary context; no baked text |
| HOME-CONTINUUM | `/` | Earth / coffee / vessel / ritual bridge | MAT-CLAY-001; KEN-PROC-115; MAT-STONE-102; RITUAL-203 | APPROVED_CURRENT | KEEP_CURRENT | Cup view missing | Existing asset edit + 3D render | 5:4 / 4:5 | P0/P2 | Vessel must become the real Cup |
| HOME-HARVEST | `/` | Four Current Harvest cards | CSS placeholders | CUSTOM_ASSET_PENDING | NEW_CUSTOM_REQUIRED | Yes | 3D render + graphic design | 4:5 | P0 | Derive from six seasonal masters |
| SHOP-MATERIAL | `/shop` | Laterite / Basalt / Linen cards | CSS placeholders | CUSTOM_ASSET_PENDING | NEW_CUSTOM_REQUIRED | Yes | 3D render + graphic design | 4:5 | P0 | One permanent family |
| SHOP-HARVEST | `/shop` | Six seasonal cards | CSS placeholders | CUSTOM_ASSET_PENDING | NEW_CUSTOM_REQUIRED | Yes | 3D render + graphic design | 4:5 | P0 | One shared template |
| SHOP-OTHER | `/shop` | Afterlight / Instant / Three Regions | CSS placeholders | CUSTOM_ASSET_PENDING | NEW_CUSTOM_REQUIRED | Yes | 3D render + graphic design | 4:5 | P0 | Box/sachet differs from coffee bag |
| SHOP-CUP | `/shop` | Cup companion card | CSS placeholder | CUSTOM_ASSET_PENDING | NEW_CUSTOM_REQUIRED | Yes | 3D render | 4:3 | P0 | Same Cup geometry as PDP |
| SHOP-NAV-THREE-REGIONS | Desktop Shop reveal | Discovery-box feature | KEN-PROC-115 | APPROVED_CURRENT | REPLACE_PRIORITY | Yes | 3D render + graphic design | 4:3 / 4:5 | P1 | Replace Kiambu cherry with opened box |
| PDP-PACK-MASTERS | All 12 coffee PDPs | Primary product hero | CSS placeholders | CUSTOM_ASSET_PENDING | NEW_CUSTOM_REQUIRED | Yes | 3D render + graphic design | 4:5 | P0 | One master per SKU |
| PDP-KIRINYAGA-PLACE | `/shop/kirinyaga-washed-02` | Dedicated regional context | Missing | — | NEW_EDITORIAL_REQUIRED | Yes | Stock / documentary source | 16:9 / 4:5 | P1 | Never relabel Kiambu |
| PDP-GUJI-PLACE | `/shop/guji-natural-02` | Dedicated regional context | Missing | — | NEW_EDITORIAL_REQUIRED | Yes | Stock / documentary source | 16:9 / 4:5 | P1 | Never relabel Hawassa |
| PDP-CUP-HERO | `/shop/the-kiln-cup` | Canonical Cup hero | CSS placeholder | CUSTOM_ASSET_PENDING | NEW_CUSTOM_REQUIRED | Yes | 3D render | 5:4 / 4:5 | P0 | Geometry source of truth |
| PDP-CUP-MACRO | Cup PDP | Exterior / glaze detail | CSS placeholder | CUSTOM_ASSET_PENDING | NEW_CUSTOM_REQUIRED | Yes | 3D render | 1:1 | P1 | Material proof, not copy |
| PDP-CUP-HAND-RITUAL | Cup PDP / Home optional | Scale and coffee use | RITUAL-203 context only | CUSTOM_ASSET_PENDING | NEW_CUSTOM_REQUIRED | Yes | Photo composite | 4:5 / 16:10 | P1 | Glass dripper is not the Cup |
| FOLIO-KENYA | `/origins/central-kenya` | Lead / support / detail | KEN-LAND-001; KEN-PROC-001; KEN-PROC-115 | APPROVED_CURRENT | KEEP_FINAL | Derive | Existing asset edit | wide / auto / 4:5 | P2 | Strongest sequence |
| FOLIO-KAYANZA | `/origins/kayanza-burundi` | Lead / support / detail | BUR-LAND-001; BUR-LAND-003; BUR-BOT-001 | APPROVED_CURRENT | KEEP_CURRENT | Derive | Existing asset edit | wide / auto / 4:5 | P2 | Preserve Banga/Ngozi labels |
| FOLIO-ETHIOPIA | `/origins/southern-ethiopia` | Place-authoritative lead | ETH-PROC-103 | PROVISIONAL_REPLACEABLE | REPLACE_PRIORITY | Yes | Stock / documentary source | wide / auto / 4:5 | P0/P1 | Process-only lead is weak |
| DOSSIER-REGIONAL | Three regional dossiers | Hero / place / process / work | Current regional families | Mixed | KEEP_CURRENT + one replacement | Yes for Ethiopia lead | Existing edit + documentary source | 4:5 / 16:10 / 3:2 | P1 | Product cards still pending |
| EDITION-WATER | `/journal/water-and-time` | Kenya place / washed sequence | KEN-LAND-001; KEN-PROC-001; KEN-PROC-111 | APPROVED_CURRENT | KEEP_CURRENT | Derive | Existing asset edit | 16:10 / 4:3 | P2 | No diagram unless instructional |
| EDITION-KAYANZA | `/journal/along-the-kayanza-hills` | Hills / station / botanical | BUR-LAND-001; BUR-BOT-001; BUR-LAND-003 | APPROVED_CURRENT | KEEP_CURRENT | Optional | Existing edit; documentary source | 4:5 / 4:3 | P2 | Watch reuse fatigue |
| EDITION-ETHIOPIA | `/journal/beyond-heirloom` | Place / process / diversity | ETH-PROC-103; ETH-PROC-104; ETH-PROC-105 | PROVISIONAL_REPLACEABLE | REPLACE_PRIORITY | Yes | Documentary source | 16:10 / 4:3 | P1 | Share new Ethiopia lead |
| ABOUT | `/about` | Origin work + material philosophy | KEN-PROC-001; MAT-CLAY-001; MAT-LINEN-101 | APPROVED_CURRENT | KEEP_CURRENT | Derive | Existing asset edit | 16:10 / 1:1 / 4:5 | P2 | Keep page quiet |
| BAG | `/bag`, CartDrawer | Compact product thumb | CSS pending geometry | CUSTOM_ASSET_PENDING | NEW_CUSTOM_REQUIRED | Derive | Existing asset edit | 1:1 | P1 | Derive from product master |
| CHECKOUT | `/checkout` | Utility thumbnail | None | — | OPTIONAL_ENHANCEMENT | No | — | none | P2 | Do not add campaign media |

### Approved package information for later design

Render these fields in graphic design/code, not generated pixels: product name, `RED CLAY`, role/format/weight; for Current Harvest, exact region/process/release/country and 250g; for Afterlight, `ETHIOPIA DECAF` and `WATER-PROCESS DECAF`; for Instant, `6 SACHETS`; for Three Regions, `3 × 100g` and the Kiambu/Kayanza/Sidama contents; for the Cup, exact material/form fields and approximate dimensions from the commerce canon. Never add supplier, farm, station, certification, impact, or direct-trade text.

## Editorial requirements matrix

| Surface | Required visual roles | Current files | Duplication / geographic risk | Final status |
| --- | --- | --- | --- | --- |
| Home | Hero trio; Continuum Earth/Coffee/Vessel/Ritual; four product cards; three origin beats; Edition plate; Cup ritual/object | Current documentary/material set + 4 harvest placeholders + Cup placeholder | KEN-LAND/BUR-LAND/ETH lead reuse; KEN-PROC wide crop; Cup not real | `REPLACE_PRIORITY` product media; keep context families |
| Central Kenya Folio | Lead, process, botanical/detail, variation across chapter | KEN-LAND-001, KEN-PROC-001/115 | Strong authority; Kiambu-only labels must remain | `KEEP_FINAL` with crop discipline |
| Kayanza Folio | Kayanza lead, hills/support, botanical/detail, work/drying | BUR-LAND-001/003, BUR-BOT-001 | Banga/Ngozi cannot be called Kayanza; lead repeats | `KEEP_CURRENT`; add only if comparison needs a process-specific plate |
| Southern Ethiopia Folio | Geographic lead, process/work, botanical/detail | ETH-PROC-103/104/105 | Process-heavy; ETH-PROC-103 is provisional and low-res | `REPLACE_PRIORITY` lead |
| Central Kenya dossier | Hero, place, context, process, work | KEN-LAND-001, KEN-PROC-001/111/115 | Portrait work repeated in Home/About | `KEEP_CURRENT`; reuse with captions |
| Kayanza dossier | Hero, hills, station/process, botanical/work | BUR-LAND-001/003/001 | Support/detail provenance differs from Kayanza | `KEEP_CURRENT`; no relabelling |
| Southern Ethiopia dossier | Hero, place, sorting/process, detail/work | ETH-PROC-103/104/105 | No southern place lead; Hawassa is contextual | `REPLACE_PRIORITY` hero; keep supports |
| Water & Time | Kenya lead, washed/process sequence, drying detail, product bridge | KEN-LAND-001, KEN-PROC-001/111 | Moderate repetition with Kenya dossier/PDP | `KEEP_CURRENT`; no diagram needed unless it reduces prose |
| Along the Kayanza Hills | Lead, hills, station/process, botanical/detail, product bridge | BUR-LAND-001/003/BOT-001 | Repeats Folio/dossier; valid if captions remain exact | `KEEP_CURRENT`; optional one station/drying plate P2 |
| Beyond “Heirloom” | Lead with place, sorting/process, botanical/detail, product bridge; optional terminology diagram | ETH-PROC-103/104/105 | Lead lacks place authority; repeated across all Ethiopia surfaces | `REPLACE_PRIORITY` lead; diagram `OPTIONAL_ENHANCEMENT` |
| About | Thesis material, origin/work, material philosophy, quiet close | KEN-PROC-001, MAT-CLAY-001, MAT-LINEN-101 | Work plate repeats; material texture is coherent | `KEEP_CURRENT`; no portrait required at launch |

## Route asset health scores

Scores are production-planning judgements, not usability metrics. `Final-readiness` includes the visible effect of pending product media.

| Route | Existing quality | Product completeness | Geographic specificity | Variety | Responsive crop | Final-readiness | Why |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `/` | 4 | 1 | 4 | 4 | 3 | 2 | Strong documentary sequence, but four harvest cards and Cup are placeholders; KEN-PROC-001 wide crop is weak. |
| `/shop` | 2 | 1 | 3 | 2 | 4 | 1 | 13 primary product slots are pending; documentary hover substitutions blur product/place roles. |
| Material Series PDPs | 1 | 1 | 2 | 1 | 4 | 1 | No fictional packaging or product detail exists. |
| Current Harvest PDPs | 2 | 1 | 3 | 2 | 4 | 1 | Kiambu/Kayanza/Sidama/Guji have contextual support; Kirinyaga is text-only. |
| Other Ways PDPs | 1 | 1 | 2 | 1 | 4 | 1 | Afterlight, Instant, and Three Regions have no support media. |
| `/shop/the-kiln-cup` | 2 | 1 | 2 | 2 | 4 | 1 | Canon is clear, but every object view is pending and ritual image is a different vessel. |
| `/origins` | 4 | 1 | 4 | 4 | 4 | 3 | Folio sequence works; Ethiopia lead lowers authority. |
| Central Kenya dossier | 4 | 1 | 5 | 4 | 4 | 3 | Best regional family; product cards remain placeholders. |
| Kayanza dossier | 4 | 1 | 4 | 4 | 4 | 3 | Strong lead and variation; strict Banga/Ngozi captions required. |
| Southern Ethiopia dossier | 2 | 1 | 2 | 3 | 3 | 2 | Process-rich but not place-rich; lead is provisional/low resolution. |
| `/journal` | 3 | 1 | 4 | 3 | 4 | 2 | Cards are coherent, but Ethiopia lead and all connected commerce cards are pending. |
| Water & Time | 4 | 1 | 5 | 4 | 4 | 3 | Sufficient sequence; current product bridge is the blocker. |
| Along the Kayanza Hills | 4 | 1 | 4 | 4 | 4 | 3 | Good contextual sequence; moderate reuse fatigue. |
| Beyond “Heirloom” | 2 | 1 | 2 | 3 | 3 | 2 | Needs a place-authoritative lead; process images can remain contextual. |
| `/about` | 3 | 1 | 3 | 3 | 4 | 3 | Quiet and sufficient; Kenya work image is repeated but relevant. |
| `/bag` / `/checkout` | 1 | 2 | n/a | 2 | 4 | 3 | Utility flow works; thumbnails are intentionally pending and checkout needs no campaign media. |

## Replace before final portfolio

1. **All 13 product primary masters** — every Shop/PDP product image is CSS geometry. Replace with one coherent master per SKU using 3D-rendered product geometry plus graphic-designed labels. **Method:** `3D_RENDER + GRAPHIC_DESIGN`. **Priority:** P0.
2. **Material Series packaging family** — Laterite, Basalt, and Linen currently have no packaging, alternate, or detail views. Produce a permanent trio with frontal pack, angled/reverse view, and one shared macro/detail language. **P0.**
3. **Six Current Harvest package masters** — use one seasonal architecture with controlled region/process/release variation, not six unrelated brands. **P0.**
4. **Afterlight package** — needs an ownable evening/decaf distinction without generic blue/green decaf cues. **P0.**
5. **Instant box + sachet system** — outer carton, one sachet, and multi-sachet/opened view. **P0.**
6. **Three Regions box** — outer box, opened box with three mini packs, and one derived Shop/cart crop. **P0.**
7. **Kiln Cup hero family** — canonical 3D geometry, 3/4 view, glaze macro, and one hand/ritual view. **P0.**
8. **Southern Ethiopia lead** — `ETH-PROC-103` is process-only, low-resolution, provisional, and reused across Home/Folio/dossier/Edition. Source one real, geographically supported Southern Ethiopia landscape/botanical lead. **Method:** `STOCK_SOURCE / DOCUMENTARY SOURCE`. **P0/P1.**
9. **Kirinyaga context** — do not relabel Kiambu. Source only the roles used by the actual route: one landscape/place lead is the minimum; add washed-process/botanical only if the PDP/dossier sequence needs it. **P1.**
10. **Guji context** — do not relabel Hawassa. Source one Guji environment/place image; add natural-drying detail only if the final PDP or Edition needs a second Guji-specific plate. **P1.**

## Assets worth protecting

| Asset | Best role | Constraints |
| --- | --- | --- |
| `KEN-LAND-001` | Central Kenya/Kiambu lead | Never Kirinyaga; attribution required; avoid too many hero repeats. |
| `BUR-LAND-001` | Kayanza lead | Exact Kayanza claim; attribution/share-alike; vary supporting roles. |
| `KEN-PROC-111` | Kiambu drying/process detail | 32 MB source; create derivative later; preserve Fairview/Kiambu caption. |
| `KEN-PROC-115` | Kiambu cherry/botanical detail | Never use as product packaging or Three Regions evidence. |
| `BUR-LAND-003` | Banga/Burundi landscape support | Caption Banga; not Kayanza. |
| `BUR-BOT-001` | Ngozi botanical support | Caption Ngozi; not Kayanza or package media. |
| `MAT-CLAY-001`, `MAT-STONE-102`, `MAT-LINEN-101` | Material planes and transitions | Texture sources only; do not imply Red Clay ownership or product origin. |
| `RITUAL-203`, `RITUAL-216` | Generic domestic ritual | Keep context-only after Cup photography; glass vessels are not The Kiln Cup. |

## Retire / stop using

| Asset or use | Reason |
| --- | --- |
| `ARCH-201` in any production route | Unused, provisional, and depicts a non-Red-Clay building; architecture should remain a restrained language. |
| `KEN-PROC-115` as Shop reveal “Three Regions” feature | Kiambu botanical image cannot represent a Kenya/Burundi/Ethiopia discovery box. |
| `KEN-PROC-115` / `BUR-BOT-001` / `ETH-PROC-105` as product-card hovers | Documentary context is being presented in a fictional product slot; replace with package-derived alternates. |
| Any Kiambu image relabelled Kirinyaga | Provenance mismatch. |
| Any Hawassa image relabelled Sidama or Guji | Geographic mismatch; current files are contextual Ethiopia/Hawassa only. |
| `RITUAL-201` substitute under the same ID | Violates the exact-source contract; keep the record pending retrieval. |
| Reference-only `PACK-*` or `CUP-*` in product media | Third-party objects/packaging must not read as Red Clay products. |

## New assets required

### Product — P0

- 3 Material Series package masters, plus one derived alternate/detail crop for the family.
- 6 Current Harvest package masters using one shared seasonal template.
- Afterlight 250g package master.
- Instant outer carton, sachet, and box+sachet view.
- Three Regions outer/opened box with three 100g contents.
- One high-resolution Cup hero master.

### Region — P1

- Kirinyaga landscape/place lead; optional washed-process or botanical only if the final sequence proves it necessary.
- Guji environment/place lead; optional natural-drying detail only if required.
- One Southern Ethiopia place/botanical lead replacing `ETH-PROC-103`.
- Sidama place/botanical review; current Hawassa process can remain contextual if no stronger role is added.

### Editorial — P1/P2

- Cup 3/4, glaze/interior macro, hand scale, and coffee-filled ritual views.
- Optional Kayanza washing-station/drying plate if article comparison needs a non-repeated process image.
- Optional Water & Time process diagram only if it removes explanatory prose.

### Object — P0/P1

- Cup hero, 3/4, macro, hand scale, ritual pour; dimensions graphic is P1 only after specs are validated for the production object.

### Graphic / diagram — P2

- A restrained “heirloom” terminology relationship diagram may help Beyond “Heirloom”; no genotype visualization or invented map.

### Campaign — P1/P2

- One custom text-free Home campaign still with a coffee-first focal zone and a controlled 9:16 companion only if the current documentary hero fails final crop testing.

## Production method recommendations

### Packaging

Use a hybrid **3D render + graphic design** pipeline. Model one repeatable bag/carton geometry per family, render a high-resolution neutral master, and apply exact approved fields in design/code. Derive Shop, hover, PDP, related, Bag, and checkout crops from that master. Use `PHOTO_COMPOSITE` or controlled `AI_GENERATION` only for fictional campaign environments after product geometry is locked. Do not use AI to render package text or documentary claims.

The Material Series should share permanent geometry and typography while differentiating through material-informed form, finish, and restrained tonal architecture—not pasted clay/stone/linen textures. Current Harvest should share one seasonal bag system and encode region, process, release number, country, and tasting direction through measured layout changes.

### The Kiln Cup

Use a **modeled 3D render** as the source of truth. The canon fixes iron-rich high-fired stoneware, exposed red exterior, warm mineral-white satin glaze, tapered cylinder, compact loop handle, 300ml comfortable fill, and approximate dimensions. Add controlled `PHOTO_COMPOSITE` hand/ritual scenes only after the model is consistent. AI-only production is not reliable enough for this geometry or the dimensions graphic.

### Real regions and process

Use `STOCK_SOURCE / DOCUMENTARY SOURCE` with verified provenance, license, creator, and geography. Do not AI-generate Kirinyaga farms, Guji landscapes, Sidama place evidence, Kayanza stations, or producer identities. Existing images may receive `EXISTING_ASSET_EDIT` for a later crop/grade pass; that is not part of this audit.

## Home hero decision

The final site does **not require a custom hero campaign to launch** if the current three-slide documentary sequence remains clearly contextual and the first viewport introduces coffee quickly. It **does require one P1 campaign still for portfolio distinction** if final product masters expose the gap between documentary context and fictional product identity. The campaign role is one coffee-first desktop 16:9+ still plus a separate 9:16 mobile composition only when a safe focal zone cannot be preserved. Keep all text out of the image.

## Visual coherence decision

Replacing temporary product media alone will make the storefront coherent, but the whole portfolio will still feel uneven because Southern Ethiopia is process-heavy and `ETH-PROC-103` is a repeated low-resolution lead. The smallest additional editorial replacement set is **three real regional files**: one Southern Ethiopia place/botanical lead, one Kirinyaga place lead, and one Guji place lead. With those three files and strict Banga/Ngozi/Hawassa captions, the documentary library can otherwise remain mostly intact.

## Minimum viable final asset production

**19 new files:**

- 3 Material Series package masters;
- 6 Current Harvest package masters;
- 1 Afterlight master;
- 3 Instant/Three Regions files (Instant box+sachet; Three Regions outer/opened box);
- 1 Kiln Cup hero master;
- 3 regional editorial leads (Southern Ethiopia, Kirinyaga, Guji);
- 2 Cup support views (glaze macro and hand/ritual composite).

All card, hover, PDP, related, Bag, and checkout slots derive from these masters. The current documentary and material files remain in their approved roles.

## Ideal portfolio asset set

**31 new files:** the 19-file minimum plus:

- 3 Material Series alternates/detail/trio views;
- 3 Current Harvest collection/pair views (Kenya, Kayanza, Ethiopia);
- 2 additional Cup views (3/4 and coffee-filled ritual);
- 2 dedicated Kirinyaga/Guji process or botanical supports;
- 1 Beyond “Heirloom” terminology diagram;
- 1 text-free Home campaign mobile companion.

The physical Earthen Folio remains future/P3: cover, open spread, page detail, scale, and coffee+publication still life are not launch blockers.

## Production batches

| Batch | Scope | Priority |
| --- | --- | --- |
| A — Packaging system foundation | Material Series, shared Current Harvest template, six harvest masters, key product crops | P0 |
| B — Commerce extensions | Afterlight, Instant carton/sachet, Three Regions box/opened view | P0 |
| C — Kiln Cup | 3D geometry, hero, macro, hand/ritual, optional dimension graphic | P0/P1 |
| D — Regional gaps | Southern Ethiopia lead, Kirinyaga lead, Guji lead; Sidama review | P1 |
| E — Editorial enhancements | Kayanza process variation, process/terminology diagrams only where instructional | P2 |
| F — Campaign/polish | Home campaign still, collection groups, physical Earthen Folio | P1/P3 |

Approximate production load:

```text
P0 new custom: 15 files
P0/P1 new regional/editorial: 3 files
P1 custom support: 3 files
P2 optional: 10 files
```

## Responsive and mobile-first decisions

- Start with one high-resolution, text-free master and test CSS crop at 390, 768, 1366×768, and 1440×900.
- Add a dedicated 9:16 or 4:5 file only when the focal subject, package label, or overlay safe zone is destroyed by crop.
- Package masters need generous top/bottom label margins and a safe central focal zone for 4:5 and 1:1 derivatives.
- Documentary leads should preserve people, work surfaces, and geographic cues; do not let `object-fit: cover` remove the evidence that makes a caption true.
- Cart thumbnails derive from the primary master. Checkout remains utility-first and needs no campaign image.

## Browser evidence

The bounded review captured high-value examples in [`docs/red-clay/asset-audit-evidence/`](./asset-audit-evidence/):

- `home-desktop-1366x768.png`, `home-mobile-390x844.png` — current hero/Continuum/product-placeholder state;
- `shop-desktop-1366x768.png`, `shop-settled-1366x768.png` — placeholder-heavy Shop and settled card state;
- `ethiopia-origin-desktop-1366x768.png`, `ethiopia-origin-mobile-390x844.png` — process-heavy Ethiopia lead and mobile crop;
- `about-desktop-1366x768.png` — About material/work reuse.

These are audit evidence only, not production assets. The required viewport set was 390, 768, 1366×768, and 1440×900; the saved captures are representative high-value examples, with the source/CSS ratio audit covering the full slot behavior.

## Implementation verification at audit time

- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: failed while collecting page data for `/_not-found` with `PageNotFoundError: Cannot find module for page: /_not-found`. This is a current implementation/build issue, not an asset approval. The build also reports that the Next.js ESLint plugin is not detected in the project ESLint configuration.
- `git diff --check`: passed for the audit deliverables. Existing unrelated `.gitignore` and `.impeccable/critique/` changes were not modified.
- Browser evidence was captured against the styled local server at `http://localhost:3001`; an earlier stale `:3000` process was explicitly superseded in `asset-audit-evidence/BROWSER_EVIDENCE.md` and is not used for conclusions.

## Completion checklist

- [x] Current files, dimensions, bytes, ratios, hashes, routes, components, approvals, provenance, and crop behavior inventoried.
- [x] Dead/unused/stale/reference-only records identified without deletion.
- [x] Expanded 13-product canon audited; old four-lot IDs not restored.
- [x] Material Series, Current Harvest, Afterlight, Instant, Three Regions, Cup, and future Earthen Folio covered.
- [x] Home, Shop, PDPs, Origins/Folio, dossiers, Editions, About, Bag, checkout, nav, and footer traced.
- [x] Ratios, resolution guidance, file formats, reuse heatmap, health scores, replacement/keep/retire/gap lists included.
- [x] Production methods, package fields, mobile variants, batches, minimum/ideal counts, and hero/coherence decisions included.
- [x] No generation, sourcing, rendering, replacement, crop, grade, or deletion performed.
