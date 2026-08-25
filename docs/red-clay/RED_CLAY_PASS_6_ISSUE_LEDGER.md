# Red Clay Pass 6 Issue Ledger

Status: implementation complete for the approved Pass 6 scope.

## Route ledger

| Surface | Pass 6 result | Evidence or limit |
| --- | --- | --- |
| Home `/` | Fixed | Shared motion tokens, hero timer restart, and stable hero layers. |
| Shop `/shop` | Preserved and checked | Product hover keeps one alternate media layer per card. |
| Kenya PDP `/shop/kenya-lot-01` | Fixed | Intermediate media height is capped; purchase flow remains sticky where approved. |
| Burundi PDP `/shop/burundi-lot-01` | Fixed | Intermediate media height is capped; dossier-specific layout is unchanged. |
| Ethiopia PDPs `/shop/ethiopia-lot-01`, `/shop/ethiopia-lot-02` | Fixed | Intermediate media height is capped; paired release content remains distinct. |
| Kiln Cup `/shop/the-kiln-cup` | Preserved and checked | Responsive and spacing paths pass; custom packaging media remains deferred. |
| Origins `/origins` | Preserved and checked | Mobile Folio stays static; desktop transition layers retain offset sequencing. |
| Kenya dossier `/origins/central-kenya` | Preserved and checked | No verified crop or spacing defect remained. |
| Burundi dossier `/origins/kayanza-burundi` | Preserved and checked | No verified crop or spacing defect remained. |
| Ethiopia dossier `/origins/southern-ethiopia` | Preserved and checked | No verified crop or spacing defect remained. |
| Editions `/journal` | Preserved and checked | Archive rhythm and navigation remain intact. |
| Kenya article `/journal/water-and-time` | Fixed | Release and commerce use one horizontal ending composition. |
| Burundi article `/journal/along-the-kayanza-hills` | Fixed | Release and commerce use one compact ending composition. |
| Ethiopia article `/journal/canopy-and-landrace` | Fixed | Release and commerce use one paired two-product composition. |
| Legacy article aliases | Preserved | Existing slug alias contract remains unchanged. |
| About `/about` | Preserved and checked | No verified agency or material defect required an architecture change. |
| Bag `/bag` | Fixed | Quantity and remove controls meet the 44px touch target; cinematic treatment was not expanded. |
| Navigation | Preserved and checked | One mega-menu panel remains mounted during rapid Shop/Origins switching. |
| Footer | Preserved and checked | Footer approach and links remain stable across the route matrix. |

## Cross-site checks

- Motion uses the existing quiet easing with 180ms micro, 420ms standard, and 760ms major tokens. The hero keeps its five-second cycle. Reduced motion keeps autoplay and choreographed layers disabled.
- Full breakpoint matrix checked at 320, 375, 390, 430, 768, 900, 1024, 1100, 1200, 1280, 1366, 1440, 1600, and 1920px on representative Home, PDP, Origins, Article, and Bag paths.
- Full route checks at 390, 1100, and 1366px covered overflow, loaded-image failures, heading structure, footer presence, sticky behavior, direct article navigation, and Bag focus restoration.
- No unresolved UI bug was found in this pass.
- Packaging and Kiln Cup custom media remain `DEFERRED — CUSTOM MEDIA`.
