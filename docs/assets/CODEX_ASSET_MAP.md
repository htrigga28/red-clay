# Red Clay Coffee — Codex Asset Map

**Document version:** 1.0.0  
**Status:** APPROVED FOR INITIAL IMPLEMENTATION  
**Date:** 2026-08-23  
**Source authority:** `IMPLEMENTATION_ASSET_LOCK.md`

## Repository convention

Expected paths are future implementation targets only. This document does not move files into a repository.

Root: `/public/media/red-clay/`

Codex may create responsive AVIF/WebP derivatives later, but must preserve an untouched source outside the web-optimized output and retain candidate ID/provenance linkage.

## Currently usable media

| Canonical role(s) | Source candidate | Expected repo path | Status | Provenance constraint | Alt-text guidance | Replacement allowed? |
|---|---|---|---|---|---|---|
| `HOME-CONTINUUM-MAT`, `SHOP-INTRO-STILL`, `SHOP-DETAIL-MAT`, `S5-FOLIO-MATERIAL-PLANE`, material interludes | `MAT-CLAY-001` | `/public/media/red-clay/materials/mat-clay-001.jpg` | `APPROVED_CURRENT` | Poly Haven, CC0 1.0. Treat as a material source, not a photographed Red Clay site. | Decorative uses: empty alt. Informative uses: “Cracked red earth texture.” | YES, without blocking layout. |
| Basalt/dark-stone surfaces and composite support | `MAT-STONE-102` | `/public/media/red-clay/materials/mat-stone-102.jpg` | `APPROVED_CURRENT` | Poly Haven / Amal Kumar, CC0 1.0. | Decorative uses: empty alt. Informative uses: “Dark fractured stone texture.” | YES. |
| Linen/fiber surfaces and composite support | `MAT-LINEN-101` | `/public/media/red-clay/materials/mat-linen-101.jpg` | `APPROVED_CURRENT` | Poly Haven / colormass and Rico Cilliers, CC0 1.0. | Decorative uses: empty alt. Informative uses: “Close woven linen texture.” | YES. |
| `S5-FOLIO-KENYA-LEAD-D/M`, `ORIGIN-KENYA-HERO`, `ORIGIN-KENYA-LANDSCAPE`, `HOME-ORIGIN-KENYA`, `PDP-KENYA-ORIGIN` | `KEN-LAND-001` | `/public/media/red-clay/origins/kenya/ken-land-001.jpg` | `APPROVED_CURRENT` | Kiambu County, Kenya; CC BY 4.0. Never label Nyeri/Kirinyaga. | “Coffee plants near Kawaida Falls in Kiambu County, Kenya.” | YES, but not required for initial implementation. |
| `S5` Kenya support, `ORIGIN-KENYA-WORK`, `PDP-KENYA-PROCESS`, Edition process/work | `KEN-PROC-001` | `/public/media/red-clay/origins/kenya/ken-proc-001.jpg` | `APPROVED_CURRENT` | Kenya, country-only; CC BY-SA 4.0. Real people are contextual only. | “Farmers sorting coffee cherries in Kenya.” | YES. |
| Kenya process/detail modules | `KEN-PROC-111` | `/public/media/red-clay/origins/kenya/ken-proc-111.jpg` | `APPROVED_CURRENT` | Fairview Estate, Kiambu; CC BY-SA 4.0. | “Coffee beans drying on raised racks at Fairview Estate in Kiambu, Kenya.” | YES. |
| `S5-FOLIO-KENYA-DETAIL`, `ORIGIN-KENYA-BOTANICAL`, `PDP-KENYA-BOTANICAL` | `KEN-PROC-115` | `/public/media/red-clay/origins/kenya/ken-proc-115.jpg` | `APPROVED_CURRENT` | Fairview Estate, Kiambu; CC BY-SA 4.0. Never label Nyeri/Kirinyaga. | “Ripe coffee cherries on a plant at Fairview Estate in Kiambu, Kenya.” | YES. |
| `S5-FOLIO-BURUNDI-LEAD-D/M`, `ORIGIN-BURUNDI-HERO`, `HOME-ORIGIN-BURUNDI`, `PDP-BURUNDI-ORIGIN` | `BUR-LAND-001` | `/public/media/red-clay/origins/burundi/bur-land-001.jpg` | `APPROVED_CURRENT` | Kayanza, Burundi; CC BY-SA 3.0. | “Coffee processing landscape in Kayanza, Burundi.” | YES. |
| Burundi Folio support, `ORIGIN-BURUNDI-LANDSCAPE`, Edition place | `BUR-LAND-003` | `/public/media/red-clay/origins/burundi/bur-land-003.jpg` | `APPROVED_CURRENT` | Banga, Burundi; CC BY 2.0. Do not call Kayanza. | “Hillside landscape in Banga, Burundi.” | YES. |
| `S5-FOLIO-BURUNDI-DETAIL`, `ORIGIN-BURUNDI-BOTANICAL`, `PDP-BURUNDI-BOTANICAL` | `BUR-BOT-001` | `/public/media/red-clay/origins/burundi/bur-bot-001.jpg` | `APPROVED_CURRENT` | Ngozi, Burundi; CC0. Do not call Kayanza. | “Coffee cherries and leaves in Ngozi, Burundi.” | YES. |
| `S5-FOLIO-ETHIOPIA-LEAD-D/M`, `ORIGIN-ETHIOPIA-HERO`, `HOME-ORIGIN-ETHIOPIA`, Edition lead | `ETH-PROC-103` | `/public/media/red-clay/origins/ethiopia/eth-proc-103.jpg` | `PROVISIONAL_REPLACEABLE` | Hawassa process imagery; CC BY-SA 4.0. Never label Guji, Gedeo or Yirgacheffe. | “A coffee worker examining beans during sorting near Hawassa, Ethiopia.” | YES; retain stable slot dimensions. |
| Ethiopia Folio support, `ORIGIN-ETHIOPIA-WORK`, `PDP-ETH01/02-PROCESS`, Edition work | `ETH-PROC-104` | `/public/media/red-clay/origins/ethiopia/eth-proc-104.jpg` | `APPROVED_CURRENT` | Hawassa; CC BY-SA 4.0. People are contextual only. | “Workers sorting coffee beans by size in Hawassa, Ethiopia.” | YES. |
| `S5-FOLIO-ETHIOPIA-DETAIL`, Ethiopia process/detail modules | `ETH-PROC-105` | `/public/media/red-clay/origins/ethiopia/eth-proc-105.jpg` | `APPROVED_CURRENT` | Ethiopia, country-only; CC BY 2.0. Do not infer a subregion. | “Coffee beans being sifted during quality sorting in Ethiopia.” | YES. |
| Primary Home/About/Edition ritual plate | `RITUAL-203` | `/public/media/red-clay/ritual/ritual-203.jpg` | `APPROVED_CURRENT` | Unsplash / Madeline Liu. Generic domestic ritual, not Red Clay product photography. | “Glass pour-over dripper and server casting shadows in morning light.” | YES. |
| Secondary Home/About/Edition ritual plate | `RITUAL-216` | `/public/media/red-clay/ritual/ritual-216.jpg` | `APPROVED_CURRENT` | Unsplash / Khanh Do. Person is contextual only. | “Hot water being poured into a coffee dripper.” | YES. |
| Third-priority ritual plate | `RITUAL-201` | `/public/media/red-clay/ritual/ritual-201.jpg` | `APPROVED_CURRENT`; `MANUAL_DOWNLOAD_REQUIRED` | Pexels / dogadakisakal. Do not substitute another file under this ID. | “Coffee filtering through paper into a glass server.” | YES; omit initially while retaining the path contract. |
| `HOME-HERO-D` prototype, About/material architecture, composites | `ARCH-201` | `/public/media/red-clay/architecture/arch-201.jpg` | `PROVISIONAL_REPLACEABLE` | Unsplash / Adish (AJ). The building is not Red Clay property. | “Contemporary rammed-earth walls beneath a timber pergola.” | YES; preserve hero dimensions and focal-position controls. |

## Reference-only records

| Candidates | Canonical role | Expected repo path | Status | Rule |
|---|---|---|---|---|
| `PACK-201`–`PACK-205` | Packaging art-direction reference | — | `REFERENCE_ONLY` | Do not place third-party packaging photographs in the product experience or repository media bundle. |
| `CUP-201`–`CUP-205` | Kiln Cup form/material reference | — | `REFERENCE_ONLY` | Do not present these vessels as The Kiln Cup or ship them as product media. |

## Custom-pending media and placeholder paths

| Canonical role family | Temporary repo contract | Status | Replacement rule |
|---|---|---|---|
| `HOME-PROD-01`–`04`, `SHOP-KENYA-01`, `SHOP-BURUNDI-01`, `SHOP-ETHIOPIA-01/02`, coffee `PDP-*-HERO/PACK`, related/cart thumbnails | `/public/media/red-clay/placeholders/coffee/{canonical-asset-id}.svg` | `CUSTOM_ASSET_PENDING` | Use the temporary product-media component; replace source without changing layout. |
| Product-card alternate images | `/public/media/red-clay/placeholders/coffee/{canonical-asset-id}-alternate.svg` | `CUSTOM_ASSET_PENDING` | Hover/focus logic may ship with the same placeholder or no swap until custom media exists. |
| `HOME-PROD-05`, `HOME-KILN-OBJECT`, `SHOP-KILN-01`, `CUP-HERO`, `CUP-MATERIAL-MACRO`, `CUP-HAND-SCALE`, `CUP-RITUAL-POUR` | `/public/media/red-clay/placeholders/kiln-cup/{canonical-asset-id}.svg` | `CUSTOM_ASSET_PENDING` | Never substitute reference vessels. |
| `CUP-DIMENSION-GRAPHIC` | `/public/media/red-clay/placeholders/kiln-cup/cup-dimension-graphic.svg` | `CUSTOM_ASSET_PENDING` | Show no invented dimensions; use a labelled development placeholder only. |
| `CUP-BUNDLE` and other coffee + Cup pairing media | `/public/media/red-clay/placeholders/pairing/{canonical-asset-id}.svg` | `CUSTOM_ASSET_PENDING` | Do not imply a bundle discount or final product geometry. |

## Component requirement

The temporary media component must accept at least: `assetId`, `aspectRatio`, `label`, `kind`, `className`, and an optional future `src`. In development, show `assetId`; in production previews, retain an accessible “Final product media pending” description without presenting the placeholder as finished packaging.

`ASSET DISCOVERY NO LONGER BLOCKS IMPLEMENTATION.`

