# Red Clay Coffee — Implementation Asset Lock

**Document version:** 1.0.0  
**Status:** APPROVED FOR INITIAL IMPLEMENTATION  
**Date:** 2026-08-23  
**Change note:** Section 6A.3 records the creative director's initial asset decisions and converts the discovery pool into a bounded implementation set.

## Authority and interpretation

This document controls initial implementation asset selection. It does not declare every photograph immutable or final for the portfolio case study. Discovery scores and creative-review tiers are historical context; they do not override the states below.

Allowed states:

- `APPROVED_CURRENT` — use now in the stated roles and within the provenance constraints.
- `PROVISIONAL_REPLACEABLE` — use now, but retain a clean replacement path.
- `REFERENCE_ONLY` — informs later custom production; never ship as Red Clay product media.
- `CUSTOM_ASSET_PENDING` — use the temporary media system until approved custom media replaces it.

## Selected implementation archive

Drive root: [Assets / SELECTED_IMPLEMENTATION](https://drive.google.com/drive/folders/1o-dTkDCFb2R1maeOJwX1kyaNAeIK85ZR)

Original discovery files remain in place. The selected archive contains copies or newly retrieved originals. `RITUAL-201` remains a verified linked source with `MANUAL_DOWNLOAD_REQUIRED`; this does not block implementation.

| Candidate | State | Initial use | Selected archive | Mandatory constraint |
|---|---|---|---|---|
| `MAT-CLAY-001` | `APPROVED_CURRENT` | Clay/material planes, transitions and restrained placeholders | `Assets/SELECTED_IMPLEMENTATION/MATERIALS/MAT-CLAY-001.jpg` | CC0 source; do not imply the texture is photographed Red Clay property. |
| `MAT-STONE-102` | `APPROVED_CURRENT` | Basalt/dark-stone surfaces and composite support | `Assets/SELECTED_IMPLEMENTATION/MATERIALS/MAT-STONE-102.jpg` | CC0 diffuse map; retain source texture separately from web derivatives. |
| `MAT-LINEN-101` | `APPROVED_CURRENT` | Linen/fiber surfaces and composite support | `Assets/SELECTED_IMPLEMENTATION/MATERIALS/MAT-LINEN-101.jpg` | CC0 diffuse map; color treatment may change, source identity must remain recorded. |
| `KEN-LAND-001` | `APPROVED_CURRENT` | Kenya coffee context; Folio lead | `Assets/SELECTED_IMPLEMENTATION/KENYA/KEN-LAND-001.jpg` | Kiambu provenance. Do not claim Nyeri or Kirinyaga. |
| `KEN-PROC-001` | `APPROVED_CURRENT` | Major Kenya process/editorial plate; Folio support | `Assets/SELECTED_IMPLEMENTATION/KENYA/KEN-PROC-001.jpg` | Contextual documentary image; never imply a Red Clay employment or sourcing relationship. |
| `KEN-PROC-111` | `APPROVED_CURRENT` | Kenya process/detail | `Assets/SELECTED_IMPLEMENTATION/KENYA/KEN-PROC-111.jpg` | Fairview Estate, Kiambu. CC BY-SA 4.0 attribution and share-alike obligations apply to adaptations. |
| `KEN-PROC-115` | `APPROVED_CURRENT` | Kenya botanical/detail; Folio detail | `Assets/SELECTED_IMPLEMENTATION/KENYA/KEN-PROC-115.jpg` | Fairview Estate, Kiambu. Do not relabel as Nyeri or Kirinyaga. |
| `BUR-LAND-001` | `APPROVED_CURRENT` | Primary Kayanza plate and Folio lead | `Assets/SELECTED_IMPLEMENTATION/BURUNDI/BUR-LAND-001.jpg` | Exact Kayanza context. Preserve required CC BY-SA 3.0 attribution. |
| `BUR-LAND-003` | `APPROVED_CURRENT` | Secondary broader Burundi landscape; Folio support | `Assets/SELECTED_IMPLEMENTATION/BURUNDI/BUR-LAND-003.jpg` | Preserve Banga, Burundi provenance. Do not call it Kayanza in Red Clay copy. |
| `BUR-BOT-001` | `APPROVED_CURRENT` | Burundi botanical support; Folio detail | `Assets/SELECTED_IMPLEMENTATION/BURUNDI/BUR-BOT-001.jpg` | Ngozi provenance. Do not call it Kayanza. |
| `ETH-PROC-103` | `PROVISIONAL_REPLACEABLE` | Initial Ethiopia Folio major plate and dossier lead | `Assets/SELECTED_IMPLEMENTATION/ETHIOPIA/ETH-PROC-103.jpg` | Hawassa process imagery. Never relabel as Guji, Gedeo or Yirgacheffe. |
| `ETH-PROC-104` | `APPROVED_CURRENT` | Ethiopia major process/people support | `Assets/SELECTED_IMPLEMENTATION/ETHIOPIA/ETH-PROC-104.jpg` | Hawassa. `CONTEXTUAL_EDITORIAL_ONLY`; do not imply a Red Clay relationship. |
| `ETH-PROC-105` | `APPROVED_CURRENT` | Ethiopia secondary process/detail | `Assets/SELECTED_IMPLEMENTATION/ETHIOPIA/ETH-PROC-105.jpg` | Country-only context unless the source provides more specificity. Do not infer a southern subregion. |
| `RITUAL-203` | `APPROVED_CURRENT` | Primary domestic ritual plate | `Assets/SELECTED_IMPLEMENTATION/RITUAL/RITUAL-203.jpg` | Generic domestic ritual only; do not imply branded product is pictured. |
| `RITUAL-216` | `APPROVED_CURRENT` | Secondary pour-over/hands plate | `Assets/SELECTED_IMPLEMENTATION/RITUAL/RITUAL-216.jpg` | Contextual person/hands only; no Red Clay identity claim. |
| `RITUAL-201` | `APPROVED_CURRENT` | Third-priority domestic ritual plate | `MANUAL_DOWNLOAD_REQUIRED`; see `SOURCE_RECORDS/RITUAL-201_SOURCE_RECORD.md` | Do not substitute another image under this ID. Use `RITUAL-203` or `RITUAL-216` until retrieved. |
| `ARCH-201` | `PROVISIONAL_REPLACEABLE` | Home brand-world hero prototype, About/material architecture, composite/background | `Assets/SELECTED_IMPLEMENTATION/ARCHITECTURE/ARCH-201.jpg` | Never imply the building is a Red Clay-owned or operated location. |

## Domestic ritual priority

1. `RITUAL-203`
2. `RITUAL-216`
3. `RITUAL-201`

## Earthen Folio family lock

| Chapter | Lead | Support | Detail | Implementation note |
|---|---|---|---|---|
| Central Kenya | `KEN-LAND-001` | `KEN-PROC-001` | `KEN-PROC-115` | Use now; preserve Kiambu/country-level provenance. |
| Kayanza / Burundi | `BUR-LAND-001` | `BUR-LAND-003` | `BUR-BOT-001` | Only the lead carries the approved Kayanza claim; support/detail retain their own locations. |
| Southern Ethiopia | `ETH-PROC-103` | `ETH-PROC-104` | `ETH-PROC-105` | The lead is intentionally provisional. Implement without waiting for a landscape replacement. |

Desktop and mobile may derive crops from these sources while preserving the Section 5 composition rules. A derived crop is not a new provenance record.

## Reference-only assets

| Family | Candidates | State | Restriction |
|---|---|---|---|
| Packaging | `PACK-201`–`PACK-205` | `REFERENCE_ONLY` | Third-party packaging must never appear as Red Clay packaging or product media. |
| Kiln Cup | `CUP-201`–`CUP-205` | `REFERENCE_ONLY` | These inform form, clay, scale and material only; they do not depict The Kiln Cup. |

Reference-only files are not part of `/public/media/red-clay/` and are not copied into the selected implementation archive.

## Custom assets pending

The following families are `CUSTOM_ASSET_PENDING` and are not implementation blockers:

- all fictional coffee packaging;
- all coffee product packshots;
- all alternate product-card images;
- all Kiln Cup product imagery;
- `CUP-DIMENSION-GRAPHIC`;
- product + Cup pairing imagery, including `CUP-BUNDLE`.

Later approved production may use Blender, compositing, controlled generation, or another approved custom method. No method is selected by this lock.

## Temporary product media contract

Codex must use one deliberate temporary media component for every missing fictional product image.

Required behavior:

- preserve the final slot's aspect ratio and layout dimensions;
- expose the canonical asset ID in development builds;
- use simple package or vessel geometry, typography, and clay/bone/basalt material fields;
- remain visually quiet enough for interface art-direction review;
- provide accessible placeholder alt text that identifies the product and states that final media is pending;
- accept a future source path without requiring component-layout changes.

The placeholder must not reproduce another coffee company's packaging, imply final photography, or be presented as a finished Red Clay asset.

## Implementation gate

`ASSET DISCOVERY NO LONGER BLOCKS IMPLEMENTATION.`

Custom assets that can be replaced after the initial build:

- four fictional coffee packaging and packshot families;
- product-card alternate imagery;
- all Kiln Cup product views;
- Kiln Cup dimensions graphic;
- coffee + Kiln Cup pairing imagery;
- `ETH-PROC-103` as the provisional Ethiopia chapter lead;
- `ARCH-201` as provisional architecture/brand-world imagery.

