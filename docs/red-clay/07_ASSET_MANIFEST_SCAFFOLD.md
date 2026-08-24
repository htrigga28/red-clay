# Red Clay Coffee — Asset Manifest Scaffold

**Document version:** 1.4.0  
**Change note:** Section 6A.3 adds the approved initial implementation lock, four-state production authorization, the selected Drive archive, and explicit custom-pending families.  
**Status:** Operational Section-6 asset manifest. Initial implementation sources are locked; custom product media remains pending but does not block implementation.  
**Evidence note:** The original supplied visual files remain 10 Canyon screenshots and 2 Onyx screenshots used by the reference atlas. Section 6A additionally archived external source candidates in Google Drive. Those files are candidates—not supplied Red Clay validation imagery and not approved production assets. The Validation Pack defines target asset concepts (Assets 01–13), so `Spec` below means a written validation specification exists.

## Status vocabulary

- `OPEN` — slot required or optional; no final file selected.
- `REUSE TEST` — first test a related asset family before generating another file.
- `OPTIONAL` — produce only if browser composition requires it.
- `SUPERSEDED SLOT` — structural placeholder replaced by an approved experience; retain only for fallback/poster logic.
- `FINAL REQUIRED` — final coherent product/region asset will be necessary, but is not approved yet.
- `APPROVED_CURRENT` — selected for immediate implementation within its provenance constraints.
- `PROVISIONAL_REPLACEABLE` — usable now with a deliberate later replacement path.
- `REFERENCE_ONLY` — visual research only; never ship as Red Clay production media.
- `CUSTOM_ASSET_PENDING` — final fictional product media remains to be produced; use the canonical temporary-media contract.

## Asset authorization state — mandatory interpretation

Every manifest row has three independent states:

| Field | Meaning | Round 1.1 state |
|---|---|---|
| `SPEC_EXISTS` | A written target/specification exists in a canonical document. | Read from the existing `Validation spec?` or `Existing validation asset?` column; this does **not** identify a file. |
| `SOURCE_FILE_SUPPLIED` | A specific source file is assigned and archived for implementation. | `YES` for selected archived sources; `MANUAL_DOWNLOAD_REQUIRED` for `RITUAL-201`; `NO` for custom-pending and reference-only production slots. |
| `PRODUCTION_APPROVAL` | Current implementation authorization. | One of `APPROVED_CURRENT`, `PROVISIONAL_REPLACEABLE`, `REFERENCE_ONLY`, or `CUSTOM_ASSET_PENDING`. Do not reduce this to YES/NO. |

The legacy table labels `Existing validation asset?` and `Validation spec?` still mean only `SPEC_EXISTS`. Current file assignment and authorization come from the Section 6A.3 overlay below and [assets/IMPLEMENTATION_ASSET_LOCK.md](assets/IMPLEMENTATION_ASSET_LOCK.md). Never infer approval from a written spec, candidate score, or `FINAL REQUIRED` label.

## Section 6A.3 implementation authorization overlay

This overlay supersedes earlier “no approvals” statements for implementation state. Full role mapping and repository paths are in [assets/CODEX_ASSET_MAP.md](assets/CODEX_ASSET_MAP.md).

| Candidate / family | SOURCE_FILE_SUPPLIED | PRODUCTION_APPROVAL | Selected archive / implementation note |
|---|---|---|---|
| `MAT-CLAY-001` | YES | `APPROVED_CURRENT` | `Assets/SELECTED_IMPLEMENTATION/MATERIALS/MAT-CLAY-001.jpg` |
| `MAT-STONE-102` | YES | `APPROVED_CURRENT` | `Assets/SELECTED_IMPLEMENTATION/MATERIALS/MAT-STONE-102.jpg` |
| `MAT-LINEN-101` | YES | `APPROVED_CURRENT` | `Assets/SELECTED_IMPLEMENTATION/MATERIALS/MAT-LINEN-101.jpg` |
| `KEN-LAND-001` | YES | `APPROVED_CURRENT` | Kiambu context; not Nyeri/Kirinyaga. |
| `KEN-PROC-001` | YES | `APPROVED_CURRENT` | Major contextual process/editorial plate. |
| `KEN-PROC-111` | YES | `APPROVED_CURRENT` | Kiambu process/detail. |
| `KEN-PROC-115` | YES | `APPROVED_CURRENT` | Kiambu botanical/detail. |
| `BUR-LAND-001` | YES | `APPROVED_CURRENT` | Primary Kayanza/Folio lead. |
| `BUR-LAND-003` | YES | `APPROVED_CURRENT` | Banga, Burundi; do not call Kayanza. |
| `BUR-BOT-001` | YES | `APPROVED_CURRENT` | Ngozi botanical support; do not call Kayanza. |
| `ETH-PROC-103` | YES | `PROVISIONAL_REPLACEABLE` | Hawassa process image serving as initial Folio lead. |
| `ETH-PROC-104` | YES | `APPROVED_CURRENT` | Hawassa process/people support. |
| `ETH-PROC-105` | YES | `APPROVED_CURRENT` | Ethiopia country-only process/detail. |
| `RITUAL-203` | YES | `APPROVED_CURRENT` | Priority 1 ritual source. |
| `RITUAL-216` | YES | `APPROVED_CURRENT` | Priority 2 ritual source. |
| `RITUAL-201` | `MANUAL_DOWNLOAD_REQUIRED` | `APPROVED_CURRENT` | Priority 3; exact source record retained. Omit until retrieved rather than substitute. |
| `ARCH-201` | YES | `PROVISIONAL_REPLACEABLE` | Home/About architecture prototype; not a Red Clay location. |
| `PACK-201`–`PACK-205` | NO for production | `REFERENCE_ONLY` | Never use third-party packaging in the Red Clay product experience. |
| `CUP-201`–`CUP-205` | NO for production | `REFERENCE_ONLY` | Form/material reference only; not The Kiln Cup. |
| Fictional coffee packaging, packshots and alternates | NO | `CUSTOM_ASSET_PENDING` | Use temporary product-media component. |
| Kiln Cup imagery and `CUP-DIMENSION-GRAPHIC` | NO | `CUSTOM_ASSET_PENDING` | Use temporary media; never invent dimensions. |
| Product + Cup pairing imagery, including `CUP-BUNDLE` | NO | `CUSTOM_ASSET_PENDING` | Use temporary media; do not imply a discount. |

`ASSET DISCOVERY NO LONGER BLOCKS IMPLEMENTATION.`

## Section 6A sourcing fields

The per-asset sourcing overlay is maintained in [assets/ASSET_SOURCING_MATRIX.md](assets/ASSET_SOURCING_MATRIX.md). It records every canonical asset ID with:

`SOURCE_STRATEGY`, `SOURCE_PROVIDER`, `SOURCE_URL`, `CREATOR`, `LICENSE`, `ATTRIBUTION_REQUIRED`, `ATTRIBUTION_TEXT`, `CANDIDATE_ID`, `DRIVE_PATH`, `RELEVANCE_SCORE`, `LICENSE_CONFIDENCE`, `GEOGRAPHIC_CONFIDENCE`, `SOURCE_STATUS`, and `NOTES`.

Allowed `SOURCE_STATUS` values:

- `NOT_SEARCHED`
- `NO_SUITABLE_FREE_ASSET_FOUND`
- `CANDIDATES_FOUND`
- `SOURCE_IDENTIFIED_MANUAL_DOWNLOAD`
- `DOWNLOADED_TO_DRIVE`
- `SELECTED_CANDIDATE`
- `REQUIRES_CUSTOM_PRODUCTION`

`SELECTED_CANDIDATE` remains a historical sourcing status. Current authorization is controlled by the Section 6A.3 production states above.

## Section 6A candidate pool

**SUPERSEDED BY SECTION 6A.1 FOR CANDIDATE BREADTH.** The compact table below is the historical first-pass shortlist and must not be interpreted as the complete current library. The authoritative expanded pool is [assets/ASSET_CANDIDATE_CATALOG.md](assets/ASSET_CANDIDATE_CATALOG.md); family counts and canonical-role implications are in [assets/ASSET_SOURCING_MATRIX.md](assets/ASSET_SOURCING_MATRIX.md); exact license records are in [assets/LICENSES_AND_PROVENANCE.md](assets/LICENSES_AND_PROVENANCE.md).

Historical Section 6A.1 discovery state:

- unique candidate records: **282**;
- unique current-pool source candidates archived in Drive: **54**;
- valid linked/manual-download candidates: **228**;
- production approvals at that time: **0**;
- `SELECTED` folders populated at that time: **NO**.

| Candidate ID | Source strategy | Provider / creator | License | Score | Geographic confidence | Source status | Drive path / note |
|---|---|---|---|---:|---:|---|---|
| `KEN-LAND-001` | Documentary photography | Wikimedia Commons / Lebu Ayiga | CC BY 4.0 | 7.9 | 8.0 | DOWNLOADED_TO_DRIVE | `Assets/01_ORIGINS/KENYA/CANDIDATES/`; Kiambu backup, not Nyeri/Kirinyaga |
| `KEN-LAND-002` | Documentary photography | Wikimedia Commons / Lebu Ayiga | CC BY 4.0 | 7.7 | 8.0 | DOWNLOADED_TO_DRIVE | Same family; visually near-duplicate backup |
| `KEN-PROC-001` | Documentary photography | Wikimedia Commons / Kamweti wa Mutu | CC BY-SA 4.0 | 8.2 | 8.0 | DOWNLOADED_TO_DRIVE | Contextual Kenya work; never imply Red Clay relationship |
| `KEN-PROC-002` | Public-domain archive | Wikimedia Commons / Matson Collection | Public domain | 7.8 | 8.0 | DOWNLOADED_TO_DRIVE | Historical 1936 process image; not a contemporary Folio lead |
| `BUR-LAND-001` | Documentary photography | Wikimedia Commons / Hubert Schonberg | CC BY-SA 3.0 | 8.9 | 10.0 | DOWNLOADED_TO_DRIVE | Exact Kayanza agriculture/process landscape |
| `BUR-LAND-003` | Documentary photography | Wikimedia Commons / Christine Vaufrey | CC BY 2.0 | 8.1 | 10.0 | DOWNLOADED_TO_DRIVE | Exact Banga, Kayanza landscape backup |
| `BUR-BOT-001` | Documentary botanical | Wikimedia Commons / Edouard mhg | CC0 1.0 | 8.5 | 7.0 | DOWNLOADED_TO_DRIVE | Burundi, labelled Ngozi—not Kayanza |
| `BUR-BOT-002` | Documentary botanical | Wikimedia Commons / Edouard mhg | CC0 1.0 | 8.4 | 7.0 | SOURCE_IDENTIFIED_MANUAL_DOWNLOAD | Original request rate-limited |
| `BUR-BOT-003` | Documentary botanical | Wikimedia Commons / Edouard mhg | CC0 1.0 | 8.1 | 7.0 | DOWNLOADED_TO_DRIVE | Burundi, labelled Ngozi—not Kayanza |
| `ETH-PROC-001` | Documentary process | Wikimedia Commons / Niels Van Iperen | CC BY-SA 4.0 | 8.7 | 8.5 | SOURCE_IDENTIFIED_MANUAL_DOWNLOAD | Near Hawassa; original request rate-limited |
| `ETH-PROC-002` | Documentary process/work | Wikimedia Commons / Niels Van Iperen | CC BY-SA 4.0 | 8.6 | 8.5 | SOURCE_IDENTIFIED_MANUAL_DOWNLOAD | Contextual people review required |
| `MAT-CLAY-001` | CC0 material library | Poly Haven | CC0 1.0 | 9.3 | 10.0 | DOWNLOADED_TO_DRIVE | `Assets/07_MATERIALS/CLAY/` |
| `MAT-CLAY-002` | CC0 material library | Poly Haven | CC0 1.0 | 8.9 | 10.0 | DOWNLOADED_TO_DRIVE | `Assets/07_MATERIALS/CLAY/` |
| `MAT-STONE-001` | CC0 material library | Poly Haven | CC0 1.0 | 8.2 | 10.0 | DOWNLOADED_TO_DRIVE | `Assets/07_MATERIALS/STONE/`; tile pattern may be too literal |
| `RITUAL-STEAM-001` | Free stock still | Unsplash / Karina Syrotiuk | Unsplash License | 7.5 provisional | n/a | SOURCE_IDENTIFIED_MANUAL_DOWNLOAD | Full-resolution visual review pending |
| `RITUAL-POUR-001` | Free stock still | Pexels / Ron Lach | Pexels License | 7.4 provisional | n/a | SOURCE_IDENTIFIED_MANUAL_DOWNLOAD | Outdoor setting may be off-direction |
| `ARCH-EARTH-001` | Free architecture still | Unsplash / Adish (AJ) | Unsplash License | 7.6 provisional | n/a | SOURCE_IDENTIFIED_MANUAL_DOWNLOAD | Reject if it reads as resort marketing |
| `VIDEO-POUR-001` | Free stock video | Pexels / Grigorii Shcheglov | Pexels License | 7.8 provisional | n/a | SOURCE_IDENTIFIED_MANUAL_DOWNLOAD | Full clip review pending |

Exact URLs, attribution text, modification rights, access dates, and original filenames are recorded in [assets/LICENSES_AND_PROVENANCE.md](assets/LICENSES_AND_PROVENANCE.md).

## Reuse families and production restraint

1. **Product master family:** One final coherent pack master per coffee may feed `HOME-PROD-*`, `SHOP-*`, `PDP-*-HERO/PACK`, cart thumbnails, and related cards through intentional crops—not separate generations for every slot.
2. **Regional lead family:** Test whether each `S5-FOLIO-*-LEAD-D/M` can also serve `ORIGINS-CARD-*`, `ORIGIN-*-HERO`, `HOME-ORIGIN-*`, or Edition leads. Do not force reuse when crop/content purpose conflicts.
3. **Regional supporting family:** Process/work/botanical plates may support both dossiers and Editions when the same factual context is intended. Captions and identity claims remain page-specific.
4. **Kiln Cup master family:** Preserve one geometry across `HOME-PROD-05`, `SHOP-KILN-01`, `CUP-*`, cart, and pairing imagery. Material macro and hand/ritual scenes remain separate views.
5. **Material family:** A final material study may support Continuum, About, transitions, and optional Folio plane; use crops/texture treatments rather than many near-duplicates.
6. **Never bake type into images.** Packaging labels, folio numbers, captions, metadata, and marks are added in code/design.

## Manifest fields

`D/M ratio` are composition targets, not immutable exports. `Geo` and `People` values indicate mandatory sensitivity review. `Final file` remains `[TBD]` until Section 6.

### Homepage

| Asset ID | Page / section | Role / subject | Media | D ratio | M ratio | Dedicated M? | Existing validation asset? | New required? | Folio dependency | Geo | People | Final file | Status / notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `HOME-HERO-D` | Home / Hero | Desktop brand-world hero; coffee/place/ritual | Still; optional loop source | 16:9+ | n/a | Paired with M | Spec: Asset 11 | Likely | No | High | If present | `[TBD]` | FINAL REQUIRED; avoid resort/property reading |
| `HOME-HERO-M` | Home / Hero | Intimate coffee/hand/Cup hero | Still | n/a | 9:16 | Yes | Spec: Asset 12/05 | Likely | No | Low–Med | High if hands | `[TBD]` | FINAL REQUIRED; deliberate top copy safety |
| `HOME-CONTINUUM-MAT` | Home / Continuum | Earth/clay/basalt/linen/coffee material bridge | Still/texture | 16:9 | 4:5 | Optional crop | Spec: Asset 09 | Test | No | Low | No | `[TBD]` | REUSE TEST with About/Folio plane |
| `HOME-PROD-01` | Home / Harvest | Kenya coffee master card | Product still | 3:4 | 3:4/compact | No | Spec: Asset 06 geometry | Yes | No | Low | No | `[TBD]` | FINAL REQUIRED; reuse Kenya pack master |
| `HOME-PROD-02` | Home / Harvest | Burundi coffee master card | Product still | 3:4 | compact | No | Spec: Asset 06 geometry | Yes | No | Low | No | `[TBD]` | FINAL REQUIRED; reuse Burundi pack master |
| `HOME-PROD-03` | Home / Harvest | Ethiopia Lot 01 card | Product still | 3:4 | compact | No | Spec: Asset 06 geometry | Yes | No | Low | No | `[TBD]` | FINAL REQUIRED; reuse ETH01 pack master |
| `HOME-PROD-04` | Home / Harvest | Ethiopia Lot 02 card | Product still | 3:4 | compact | No | Spec: Asset 06 geometry | Yes | No | Low | No | `[TBD]` | FINAL REQUIRED; reuse ETH02 pack master |
| `HOME-PROD-05` | Home / Harvest | Kiln Cup product card | Product still | 3:4 | compact/1:1 | No | Spec: Asset 08 | Yes | No | No | No | `[TBD]` | FINAL REQUIRED; Cup master family |
| `HOME-ORIGIN-KENYA` | Home / Origins | Central Kenya preview | Landscape/editorial | 16:9 | 4:5 | Preferred | No file; regional spec only | Test | Related | High | Possible | `[TBD]` | REUSE TEST from Folio/Dossier lead |
| `HOME-ORIGIN-BURUNDI` | Home / Origins | Kayanza preview | Landscape/editorial | 16:9 | 4:5 | Preferred | Spec: Asset 01 concept | Test | Related | High | Possible | `[TBD]` | REUSE TEST from Folio/Dossier lead |
| `HOME-ORIGIN-ETHIOPIA` | Home / Origins | Southern Ethiopia preview | Landscape/botanical | 16:9 | 4:5 | Preferred | No file; regional spec only | Test | Related | High | Possible | `[TBD]` | REUSE TEST from Folio/Dossier lead |
| `HOME-EDITION-01` | Home / Edition | Featured Kenya Edition plate | Editorial still | 16:9 | 4:5 | Preferred | Spec: Assets 04/01 concepts | Test | No | High | Possible | `[TBD]` | REUSE TEST from Kenya Edition family |
| `HOME-KILN-OBJECT` | Home / Kiln | Standalone Cup/object study | Product still | 4:5 | 1:1/4:5 | No | Spec: Asset 08 | Test | No | No | No | `[TBD]` | REUSE TEST from `CUP-HERO` |
| `HOME-KILN-RITUAL` | Home / Kiln | Cup in coffee ritual | Editorial still | 4:5 | 9:16/4:5 | Preferred | Spec: Asset 05 | Likely | No | Low | Hands possible | `[TBD]` | FINAL REQUIRED; reuse `CUP-RITUAL-POUR` if suitable |
| `HOME-KILN-MOTION` | Home / Kiln | Steam/light ambience | Short loop + poster | 16:9 | still only default | Yes if motion ships | Spec: Asset 13-M | Optional | No | No | No | `[TBD]` | OPTIONAL; desktop enhancement, static fallback |

### Shop

| Asset ID | Page / section | Role / subject | Media | D ratio | M ratio | Dedicated M? | Existing validation asset? | New required? | Folio dep. | Geo | People | Final file | Status / notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `SHOP-INTRO-STILL` | Shop / Intro | Optional collection/material opening | Still | 16:9/4:5 | 4:5 | Maybe | Material specs only | Optional | No | Low | No | `[TBD]` | OPTIONAL; omit if it delays products |
| `SHOP-KENYA-01` | Shop / List | Kenya primary/alternate product image | Product pair | 3:4/1:1 | 3:4 | No | Packaging spec only | Yes | No | Low | No | `[TBD]` | FINAL REQUIRED; crop from pack master + alternate |
| `SHOP-BURUNDI-01` | Shop / List | Burundi product image pair | Product pair | 3:4/1:1 | 3:4 | No | Packaging spec only | Yes | No | Low | No | `[TBD]` | FINAL REQUIRED |
| `SHOP-ETHIOPIA-01` | Shop / List | Ethiopia 01 product image pair | Product pair | 3:4/1:1 | 3:4 | No | Packaging spec only | Yes | No | Low | No | `[TBD]` | FINAL REQUIRED |
| `SHOP-ETHIOPIA-02` | Shop / List | Ethiopia 02 product image pair | Product pair | 3:4/1:1 | 3:4 | No | Packaging spec only | Yes | No | Low | No | `[TBD]` | FINAL REQUIRED |
| `SHOP-KILN-01` | Shop / List | Cup image pair | Product pair | 3:4/1:1 | 3:4 | No | Spec: Asset 08 | Yes | No | No | No | `[TBD]` | FINAL REQUIRED; Cup geometry lock |
| `SHOP-DETAIL-MAT` | Shop / Dispatch | Optional pack/material macro | Still | 16:9/1:1 | 1:1 | No | Spec: Asset 07/09 | Optional | No | No | No | `[TBD]` | REUSE TEST; omit if decorative only |

### Coffee PDP — Central Kenya

| Asset ID | Page / section | Role / subject | Media | D ratio | M ratio | Dedicated M? | Validation spec? | New required? | Folio dep. | Geo | People | Final file | Status / notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `PDP-KENYA-HERO` | Kenya PDP / Hero | Dominant product/pack view | Product still | 4:5/1:1 | 4:5 | Maybe crop | Asset 06 concept | Yes | No | Low | No | `[TBD]` | FINAL REQUIRED |
| `PDP-KENYA-PACK` | Kenya PDP / Gallery | Packaging detail/opened pack | Product still | 1:1/4:5 | 1:1 | No | Asset 07 concept | Yes | No | No | No | `[TBD]` | FINAL REQUIRED; may provide Shop alternate |
| `PDP-KENYA-ORIGIN` | Kenya PDP / Place | Regional landscape | Editorial still | 16:9 | 4:5 | Preferred | Regional spec | Test | Related | High | Possible | `[TBD]` | REUSE TEST from Kenya lead family |
| `PDP-KENYA-PROCESS` | Kenya PDP / Process | Washing/drying context | Editorial still | 3:2/16:9 | 4:5 | Maybe | Asset 04 concept | Test | No | High | High if worker | `[TBD]` | REUSE TEST with dossier/Edition |
| `PDP-KENYA-BOTANICAL` | Kenya PDP / Optional | Cherry/plant/soil context | Macro | 1:1/4:5 | 1:1 | No | Asset 10 concept | Optional | No | High | No | `[TBD]` | OPTIONAL; fact/caption sensitivity |
| `PDP-KENYA-RITUAL` | Kenya PDP / Optional | Brew/use scene | Editorial still | 4:5/16:9 | 4:5 | Maybe | Asset 05 concept | Optional | No | Low | Hands possible | `[TBD]` | OPTIONAL; product-specific only if coherent |

### Coffee PDP — Burundi

| Asset ID | Page / section | Role / subject | Media | D ratio | M ratio | Dedicated M? | Validation spec? | New required? | Folio dep. | Geo | People | Final file | Status / notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `PDP-BURUNDI-HERO` | Burundi PDP / Hero | Dominant product view | Product still | 4:5/1:1 | 4:5 | Maybe | Asset 06 concept | Yes | No | Low | No | `[TBD]` | FINAL REQUIRED |
| `PDP-BURUNDI-PACK` | Burundi PDP / Gallery | Packaging detail | Product still | 1:1/4:5 | 1:1 | No | Asset 07 concept | Yes | No | No | No | `[TBD]` | FINAL REQUIRED |
| `PDP-BURUNDI-ORIGIN` | Burundi PDP / Place | Kayanza hillside | Editorial still | vertical/16:9 | 4:5 | Preferred | Asset 01 concept | Test | Related | High | Possible | `[TBD]` | REUSE TEST from Burundi lead family |
| `PDP-BURUNDI-PROCESS` | Burundi PDP / Process | Regional process context | Editorial still | 3:2/16:9 | 4:5 | Maybe | Regional spec | Test | No | High | High if worker | `[TBD]` | REUSE TEST |
| `PDP-BURUNDI-BOTANICAL` | Burundi PDP / Optional | Cherry/canopy detail | Macro | 1:1/4:5 | 1:1 | No | Asset 10 generic concept | Optional | No | High | No | `[TBD]` | OPTIONAL |
| `PDP-BURUNDI-RITUAL` | Burundi PDP / Optional | Brew scene | Editorial still | 4:5/16:9 | 4:5 | Maybe | Asset 05 concept | Optional | No | Low | Hands possible | `[TBD]` | OPTIONAL |

### Coffee PDP — Ethiopia Lot 01

| Asset ID | Page / section | Role / subject | Media | D ratio | M ratio | Dedicated M? | Validation spec? | New required? | Folio dep. | Geo | People | Final file | Status / notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `PDP-ETH01-HERO` | ETH01 PDP / Hero | Dominant product view | Product still | 4:5/1:1 | 4:5 | Maybe | Asset 06 concept | Yes | No | Low | No | `[TBD]` | FINAL REQUIRED |
| `PDP-ETH01-PACK` | ETH01 PDP / Gallery | Packaging detail | Product still | 1:1/4:5 | 1:1 | No | Asset 07 concept | Yes | No | No | No | `[TBD]` | FINAL REQUIRED |
| `PDP-ETH01-ORIGIN` | ETH01 PDP / Place | Southern Ethiopia landscape | Editorial still | 16:9 | 4:5 | Preferred | Regional spec | Test | Related | High | Possible | `[TBD]` | REUSE TEST from Ethiopia lead |
| `PDP-ETH01-PROCESS` | ETH01 PDP / Process | Appropriate washed/natural context `[VERIFY]` | Editorial still | 3:2/16:9 | 4:5 | Maybe | Regional spec | Test | No | High | High if worker | `[TBD]` | REUSE TEST; do not mix processes |
| `PDP-ETH01-BOTANICAL` | ETH01 PDP / Optional | Canopy/coffee plant | Macro/editorial | 1:1/4:5 | 1:1/4:5 | Maybe | Regional spec | Optional | No | High | No | `[TBD]` | OPTIONAL |
| `PDP-ETH01-RITUAL` | ETH01 PDP / Optional | Brew scene | Editorial still | 4:5/16:9 | 4:5 | Maybe | Asset 05 concept | Optional | No | Low | Hands possible | `[TBD]` | OPTIONAL |

### Coffee PDP — Ethiopia Lot 02

| Asset ID | Page / section | Role / subject | Media | D ratio | M ratio | Dedicated M? | Validation spec? | New required? | Folio dep. | Geo | People | Final file | Status / notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `PDP-ETH02-HERO` | ETH02 PDP / Hero | Dominant product view | Product still | 4:5/1:1 | 4:5 | Maybe | Asset 06 concept | Yes | No | Low | No | `[TBD]` | FINAL REQUIRED |
| `PDP-ETH02-PACK` | ETH02 PDP / Gallery | Packaging detail | Product still | 1:1/4:5 | 1:1 | No | Asset 07 concept | Yes | No | No | No | `[TBD]` | FINAL REQUIRED |
| `PDP-ETH02-ORIGIN` | ETH02 PDP / Place | Southern Ethiopia landscape | Editorial still | 16:9 | 4:5 | Preferred | Regional spec | Test | Related | High | Possible | `[TBD]` | REUSE TEST; may share lead if story remains distinct |
| `PDP-ETH02-PROCESS` | ETH02 PDP / Process | Appropriate washed/natural context `[VERIFY]` | Editorial still | 3:2/16:9 | 4:5 | Maybe | Regional spec | Test | No | High | High if worker | `[TBD]` | REUSE TEST; distinguish from ETH01 process |
| `PDP-ETH02-BOTANICAL` | ETH02 PDP / Optional | Canopy/cherry detail | Macro/editorial | 1:1/4:5 | 1:1/4:5 | Maybe | Regional spec | Optional | No | High | No | `[TBD]` | OPTIONAL |
| `PDP-ETH02-RITUAL` | ETH02 PDP / Optional | Brew scene | Editorial still | 4:5/16:9 | 4:5 | Maybe | Asset 05 concept | Optional | No | Low | Hands possible | `[TBD]` | OPTIONAL |

### Kiln Cup

| Asset ID | Page / section | Role / subject | Media | D ratio | M ratio | Dedicated M? | Validation spec? | New required? | Folio dep. | Geo | People | Final file | Status / notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `CUP-HERO` | Cup PDP / Hero | Canonical Cup geometry | Product still | 4:5/1:1 | 4:5/1:1 | Maybe crop | Asset 08 | Yes | No | No | No | `[TBD]` | FINAL REQUIRED; geometry source of truth |
| `CUP-MATERIAL-MACRO` | Cup PDP / Material | Raw exterior / glazed interior | Macro | 1:1/4:5 | 1:1 | No | Assets 08/09 concepts | Yes | No | No | No | `[TBD]` | FINAL REQUIRED |
| `CUP-HAND-SCALE` | Cup PDP / Scale | Cup held for visual scale | Editorial still | 4:5 | 4:5/9:16 | Preferred | Asset 12 concept | Yes | No | No | High (hands) | `[TBD]` | FINAL REQUIRED; no ergonomic claim |
| `CUP-RITUAL-POUR` | Cup PDP / Ritual | Coffee poured/served | Editorial still | 16:9/4:5 | 9:16/4:5 | Preferred | Asset 05 | Yes | No | No | Hands possible | `[TBD]` | FINAL REQUIRED; candidate Home reuse |
| `CUP-BUNDLE` | Cup PDP / Pairing | Cup + one current coffee | Product/editorial | 16:9/4:5 | 4:5 | Maybe | Product specs | Optional | No | No | No | `[TBD]` | BUSINESS MODEL dependent; no baked discount |
| `CUP-DIMENSION-GRAPHIC` | Cup PDP / Specs | Dimensions/capacity graphic | Designed SVG | responsive | responsive | No | None | Optional | No | No | No | `[TBD]` | OPTIONAL; manual design after specs validated |

### Origins hub and Earthen Folio

| Asset ID | Page / section | Role / subject | Media | D ratio | M ratio | Dedicated M? | Validation spec? | New required? | Folio dep. | Geo | People | Final file | Status / notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `ORIGINS-HERO` | Origins / Thesis | Optional origin-world lead | Still | 16:9 | 4:5/9:16 | Preferred | Regional specs | Optional | Related | High | Possible | `[TBD]` | REUSE TEST; omit if Folio approach is stronger |
| `ORIGINS-S5-PLACEHOLDER` | Origins / S5 | Old static slot/poster | Still/fallback | 16:9 | 4:5 | Maybe | None | No | Yes | High | Possible | `[TBD]` | SUPERSEDED SLOT; use only fallback/poster mapping |
| `ORIGINS-CARD-KENYA` | Origins / Region entry | Kenya compact plate | Still | 16:9/4:5 | 4:5 | Preferred | Regional spec | Test | Related | High | Possible | `[TBD]` | REUSE TEST from Folio lead |
| `ORIGINS-CARD-BURUNDI` | Origins / Region entry | Burundi compact plate | Still | 16:9/4:5 | 4:5 | Preferred | Asset 01 concept | Test | Related | High | Possible | `[TBD]` | REUSE TEST from Folio lead |
| `ORIGINS-CARD-ETHIOPIA` | Origins / Region entry | Ethiopia compact plate | Still | 16:9/4:5 | 4:5 | Preferred | Regional spec | Test | Related | High | Possible | `[TBD]` | REUSE TEST from Folio lead |
| `ORIGINS-CURRENT-COFFEES` | Origins / Commerce | Product bridge | Product composite/cards | responsive | responsive | No | Packaging specs | Test | No | Low | No | `[TBD]` | Prefer reuse of product masters |
| `S5-FOLIO-KENYA-LEAD-D` | Origins / Folio 01 | Kenya dominant chapter plate | Still | wide/editorial | n/a | Paired | Regional spec | Yes unless reuse succeeds | Yes | High | Possible | `[TBD]` | FINAL REQUIRED or approved reuse |
| `S5-FOLIO-KENYA-LEAD-M` | Origins / Folio 01 | Dedicated Kenya pocket-monograph lead | Still | n/a | 4:5/9:16 | Yes | Regional spec | Yes unless reuse succeeds | Yes | High | Possible | `[TBD]` | FINAL REQUIRED or focal-safe reuse |
| `S5-FOLIO-KENYA-DETAIL` | Origins / Folio 01 | Process/material/detail inset | Still | 1:1/4:5 | optional | No | Asset 04/10 concepts | Optional target | Yes | High | Possible | `[TBD]` | REUSE TEST with dossier |
| `S5-FOLIO-BURUNDI-LEAD-D` | Origins / Folio 02 | Vertical/layered Kayanza plate | Still | wide with vertical subject | n/a | Paired | Asset 01 concept | Yes unless reuse succeeds | Yes | High | Possible | `[TBD]` | FINAL REQUIRED or approved reuse |
| `S5-FOLIO-BURUNDI-LEAD-M` | Origins / Folio 02 | Dedicated Burundi mobile lead | Still | n/a | 4:5/9:16 | Yes | Asset 01 concept | Yes unless reuse succeeds | Yes | High | Possible | `[TBD]` | FINAL REQUIRED or focal-safe reuse |
| `S5-FOLIO-BURUNDI-DETAIL` | Origins / Folio 02 | Hill/process/work inset | Still | 1:1/4:5 | optional | No | Regional spec | Optional target | Yes | High | Possible | `[TBD]` | REUSE TEST with dossier |
| `S5-FOLIO-ETHIOPIA-LEAD-D` | Origins / Folio 03 | Broad botanical/canopy plate | Still | wide/editorial | n/a | Paired | Regional spec | Yes unless reuse succeeds | Yes | High | Possible | `[TBD]` | FINAL REQUIRED or approved reuse |
| `S5-FOLIO-ETHIOPIA-LEAD-M` | Origins / Folio 03 | Dedicated Ethiopia mobile lead | Still | n/a | 4:5/9:16 | Yes | Regional spec | Yes unless reuse succeeds | Yes | High | Possible | `[TBD]` | FINAL REQUIRED or focal-safe reuse |
| `S5-FOLIO-ETHIOPIA-DETAIL` | Origins / Folio 03 | Botanical/process inset | Still | 1:1/4:5 | optional | No | Regional spec | Optional target | Yes | High | Possible | `[TBD]` | REUSE TEST with dossier |
| `S5-FOLIO-MATERIAL-PLANE` | Origins / Folio transitions | Subtle material texture | Texture/still | wide | crop | No | Asset 09 concept | Optional | Yes | No | No | `[TBD]` | OPTIONAL; can reuse Continuum material |
| `S5-FOLIO-POSTER` | Case study / fallback | Static three-chapter composition | Designed still | 16:9/poster | 4:5 optional | Maybe | None | Optional | Yes | High | Possible | `[TBD]` | OPTIONAL / portfolio documentation |

### Origin dossiers

| Asset ID | Page / section | Role / subject | Media | D ratio | M ratio | Dedicated M? | Validation spec? | New required? | Folio dep. | Geo | People | Final file | Status / notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `ORIGIN-KENYA-HERO` | Kenya dossier / Hero | Regional lead | Still | 16:9/editorial | 4:5 | Preferred | Regional spec | Test | Related | High | Possible | `[TBD]` | REUSE TEST from Folio lead |
| `ORIGIN-KENYA-LANDSCAPE` | Kenya / Place | Highland landscape | Still | 16:9 | 4:5 | Maybe | Regional spec | Yes/Test | No | High | Possible | `[TBD]` | FINAL REQUIRED if lead cannot cover |
| `ORIGIN-KENYA-PROCESS` | Kenya / Process | Washing/drying context | Still | 3:2/16:9 | 4:5 | Maybe | Asset 04 concept | Yes/Test | No | High | High if people | `[TBD]` | REUSE with PDP/Edition |
| `ORIGIN-KENYA-WORK` | Kenya / Work | Skilled agricultural/QC action | Still | 3:2/4:5 | 4:5 | Maybe | Asset 04 concept | Yes | No | High | High | `[TBD]` | Never identify generated person as real |
| `ORIGIN-KENYA-BOTANICAL` | Kenya / Reference | Plant/cherry/soil detail | Macro | 1:1/4:5 | 1:1 | No | Asset 10 concept | Optional/Test | No | High | No | `[TBD]` | Fact/caption review |
| `ORIGIN-BURUNDI-HERO` | Burundi dossier / Hero | Kayanza vertical lead | Still | vertical/editorial | 4:5 | Preferred | Asset 01 concept | Test | Related | High | Possible | `[TBD]` | REUSE TEST from Folio lead |
| `ORIGIN-BURUNDI-LANDSCAPE` | Burundi / Place | Hillside scale | Still | 16:9/vertical | 4:5 | Maybe | Asset 01 concept | Yes/Test | No | High | Possible | `[TBD]` | Preserve montane geography |
| `ORIGIN-BURUNDI-PROCESS` | Burundi / Process | Regional washing context | Still | 3:2/16:9 | 4:5 | Maybe | Regional spec | Yes/Test | No | High | High if people | `[TBD]` | Avoid invented station branding |
| `ORIGIN-BURUNDI-WORK` | Burundi / Work | Skilled smallholder/QC action | Still | 3:2/4:5 | 4:5 | Maybe | People directive | Yes | No | High | High | `[TBD]` | Agency, no pity framing |
| `ORIGIN-BURUNDI-BOTANICAL` | Burundi / Reference | Coffee plant/cherry detail | Macro | 1:1/4:5 | 1:1 | No | Asset 10 generic | Optional/Test | No | High | No | `[TBD]` | Regional accuracy review |
| `ORIGIN-ETHIOPIA-HERO` | Ethiopia dossier / Hero | Broad canopy/botanical lead | Still | 16:9/editorial | 4:5 | Preferred | Regional spec | Test | Related | High | Possible | `[TBD]` | REUSE TEST from Folio lead |
| `ORIGIN-ETHIOPIA-LANDSCAPE` | Ethiopia / Place | Montane/garden/forest context | Still | 16:9 | 4:5 | Maybe | Regional spec | Yes/Test | No | High | Possible | `[TBD]` | Geography precision required |
| `ORIGIN-ETHIOPIA-PROCESS` | Ethiopia / Process | Correct washed/natural context | Still | 3:2/16:9 | 4:5 | Maybe | Regional spec | Yes/Test | No | High | High if people | `[TBD]` | Do not universalize one method |
| `ORIGIN-ETHIOPIA-WORK` | Ethiopia / Work | Skilled agricultural action | Still | 3:2/4:5 | 4:5 | Maybe | People directive | Yes | No | High | High | `[TBD]` | Agency, no invented identity |
| `ORIGIN-ETHIOPIA-BOTANICAL` | Ethiopia / Reference | Canopy/plant diversity | Macro/editorial | 1:1/4:5 | 1:1/4:5 | Maybe | Regional spec | Yes/Test | No | High | Possible | `[TBD]` | Botanically/geographically reviewed |

### Editions hub and articles

| Asset ID | Page / section | Role / subject | Media | D ratio | M ratio | Dedicated M? | Validation spec? | New required? | Folio dep. | Geo | People | Final file | Status / notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `EDITIONS-HERO` | Editions / Opening | Optional Volume 01 masthead plate | Still | 16:9/editorial | 4:5 | Maybe | Editorial specs | Optional | No | Medium | Possible | `[TBD]` | Omit if featured card supplies opening |
| `EDITIONS-KENYA-CARD` | Editions / Featured | Kenya article card lead | Still | 16:9/4:5 | 4:5 | Preferred | Regional specs | Test | Related | High | Possible | `[TBD]` | REUSE TEST from article lead |
| `EDITIONS-BURUNDI-CARD` | Editions / Secondary | Burundi article card lead | Still | 4:5/16:9 | 4:5 | Preferred | Asset 01 concept | Test | Related | High | Possible | `[TBD]` | REUSE TEST |
| `EDITIONS-ETHIOPIA-CARD` | Editions / Secondary | Ethiopia article card lead | Still | 4:5/16:9 | 4:5 | Preferred | Regional specs | Test | Related | High | Possible | `[TBD]` | REUSE TEST |
| `EDITION-KENYA-LEAD` | Kenya article / Masthead | Primary Edition lead | Still | 16:9/editorial | 4:5 | Preferred | Regional specs | Yes/Test | Related | High | Possible | `[TBD]` | Candidate Homepage/Hub reuse |
| `EDITION-KENYA-PLACE` | Kenya article / Geography | Landscape/place | Still | 16:9 | 4:5 | Maybe | Regional specs | Yes/Test | No | High | Possible | `[TBD]` | Reuse with dossier if same chapter |
| `EDITION-KENYA-PROCESS` | Kenya article / Process | Process/craft | Still | 3:2/16:9 | 4:5 | Maybe | Asset 04 concept | Yes/Test | No | High | High if people | `[TBD]` | Caption factual review |
| `EDITION-KENYA-WORK` | Kenya article / Agency | Skilled work | Still | 4:5/3:2 | 4:5 | Maybe | People directive | Yes | No | High | High | `[TBD]` | No invented interview subject |
| `EDITION-KENYA-INTERLUDE` | Kenya article / Interlude | Material/botanical visual release | Still | full/wide | 4:5/full | Maybe | Asset 09/10 concepts | Optional/Test | No | High | Possible | `[TBD]` | Only if manuscript needs it |
| `EDITION-BURUNDI-LEAD` | Burundi article / Masthead | Primary Edition lead | Still | vertical/editorial | 4:5 | Preferred | Asset 01 concept | Yes/Test | Related | High | Possible | `[TBD]` | Candidate Hub reuse |
| `EDITION-BURUNDI-PLACE` | Burundi article / Geography | Hillside/place | Still | 16:9/vertical | 4:5 | Maybe | Asset 01 concept | Yes/Test | No | High | Possible | `[TBD]` | Reuse with dossier if appropriate |
| `EDITION-BURUNDI-PROCESS` | Burundi article / Process | Process context | Still | 3:2/16:9 | 4:5 | Maybe | Regional spec | Yes/Test | No | High | High if people | `[TBD]` | No invented station branding |
| `EDITION-BURUNDI-WORK` | Burundi article / Agency | Skilled work | Still | 4:5/3:2 | 4:5 | Maybe | People directive | Yes | No | High | High | `[TBD]` | No invented identity |
| `EDITION-BURUNDI-INTERLUDE` | Burundi article / Interlude | Material/water/hill detail | Still | full/wide | 4:5/full | Maybe | Regional spec | Optional/Test | No | High | Possible | `[TBD]` | Only if manuscript needs it |
| `EDITION-ETHIOPIA-LEAD` | Ethiopia article / Masthead | Primary Edition lead | Still | 16:9/editorial | 4:5 | Preferred | Regional spec | Yes/Test | Related | High | Possible | `[TBD]` | Candidate Hub reuse |
| `EDITION-ETHIOPIA-PLACE` | Ethiopia article / Geography | Canopy/landscape | Still | 16:9 | 4:5 | Maybe | Regional spec | Yes/Test | No | High | Possible | `[TBD]` | Geography precision required |
| `EDITION-ETHIOPIA-PROCESS` | Ethiopia article / Process | Washed/natural context `[VERIFY]` | Still | 3:2/16:9 | 4:5 | Maybe | Regional spec | Yes/Test | No | High | High if people | `[TBD]` | Match manuscript method |
| `EDITION-ETHIOPIA-WORK` | Ethiopia article / Agency | Skilled work | Still | 4:5/3:2 | 4:5 | Maybe | People directive | Yes | No | High | High | `[TBD]` | No invented identity/interview |
| `EDITION-ETHIOPIA-INTERLUDE` | Ethiopia article / Interlude | Botanical/material release | Still | full/wide | 4:5/full | Maybe | Regional spec | Optional/Test | No | High | Possible | `[TBD]` | Only if manuscript needs it |

### About and global utility

| Asset ID | Page / section | Role / subject | Media | D ratio | M ratio | Dedicated M? | Validation spec? | New required? | Folio dep. | Geo | People | Final file | Status / notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `ABOUT-HERO-MATERIAL` | About / Opening | Material-world thesis | Still | 16:9/editorial | 4:5 | Maybe | Assets 02/09 | Test | No | Low | No | `[TBD]` | REUSE TEST from material family |
| `ABOUT-EARTH` | About / Name | Laterite/earth context | Macro/editorial | 16:9/4:5 | 4:5/1:1 | Maybe | Assets 09/10 | Test | No | Medium | No | `[TBD]` | Fact/caption review |
| `ABOUT-COFFEE` | About / Coffee | Coffee/product/agricultural subject | Still | 16:9/4:5 | 4:5 | Maybe | Multiple specs | Test | No | Medium | Possible | `[TBD]` | Coffee remains primary |
| `ABOUT-PORTRAIT` | About / Representation | Contemporary African editorial portrait | Portrait | 4:5 | 4:5 | No | Asset 03 concept | Likely | No | Medium | High | `[TBD]` | Generated archetype, not named producer |
| `ABOUT-RITUAL` | About / Continuum | Domestic coffee ritual | Still | 16:9/4:5 | 9:16/4:5 | Preferred | Asset 05/12 concepts | Test | No | Low | Hands possible | `[TBD]` | REUSE TEST from ritual family |
| `ABOUT-CLOSING` | About / Close | Optional full-bleed brand-world release | Still | 16:9+ | 4:5/9:16 | Preferred | Asset 11/12 concepts | Optional | No | Medium | Possible | `[TBD]` | Omit if redundant with Hero/Home |
| `GLOBAL-FOOTER-TYPO` | Global / Footer | Designed typographic/mark treatment | SVG/type | responsive | responsive | No | None | Optional | No | No | No | `[TBD]` | Prefer live type/SVG; no AI text |
| `GLOBAL-NEWSLETTER-MARK` | Global / Newsletter | Optional small mark | SVG | responsive | responsive | No | None | Optional | No | No | No | `[TBD]` | Omit if decorative only |
| `GLOBAL-EMPTY-BAG` | Global / Cart | Optional empty-state material/object mark | SVG/still | 1:1 | 1:1 | No | None | Optional | No | No | No | `[TBD]` | Keep cart useful without it |
| `GLOBAL-LEGAL-MARK` | Global / Legal/disclosure | Optional project/disclosure mark | SVG/type | responsive | responsive | No | None | Optional | No | No | No | `[TBD]` | Content/legal decision first |

## Section 6 readiness gates

- [ ] Final product geometry and packaging identity approved before product-family generation.
- [ ] Final coffee names are not required inside images; code-applied labels remain preferred.
- [ ] Folio lead reuse study completed before creating separate Home/Origins/Dossier/Edition landscapes.
- [ ] Regional subject/caption briefs fact-checked before geographic generation.
- [ ] People imagery has identity/representation disclosure rules and no real-person implication.
- [ ] Dedicated mobile crops identified from actual focal tests, not ratio assumptions alone.
- [ ] Optional assets are tied to a validated page composition; no “asset because slot exists” production.
- [ ] Final file naming, formats, dimensions, compression, and rights/provenance fields added in Section 6.
