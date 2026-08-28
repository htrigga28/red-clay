# Commerce Canon Integration Report

Date: 2026-08-28
Scope: commerce canon integration, Bag surfaces, checkout demo, factual review, and browser evidence.

## Result

The commerce integration is complete for the defined portfolio scope. The Bag, `/bag`, product detail pages, and demo checkout use the approved commerce model. The final browser checks found no horizontal overflow in the required PDP matrix. The final recordings and screenshots use settled Bag drawers.

No asset work was performed. No physical Kiln Cup prototype or manufacturing test was performed.

## Root Causes And Corrections

### Bag

The former drawer used one full-height scroll area. It mixed item content and drawer actions. It also used the full product placeholder inside a small cart area. This caused large unused space for one item, weak action placement, and thumbnail text pressure.

The rebuilt drawer separates the item scroll area from the summary and uses a cart-specific thumbnail. The summary has a clear Checkout link. Invalid lines show a Remove action and block Checkout.

Final visual review found one extra issue. The full-height drawer still left a large empty area for one item. The correction adds a content-height one-item drawer with `max-height: 100dvh`. It has a scroll fallback. Short mobile viewports reduce only the drawer spacing. At 488 × 496, the thumbnail, product selection, price, quantity controls, Remove action, and Checkout action are visible.

### AFTERLIGHT

The desktop purchase column used four of twelve grid columns. `AFTERLIGHT` did not have enough inline space and could leave the final `T` on its own line. The desktop purchase column now uses five columns. The evidence test checks every required viewport. It also checks that no AFTERLIGHT line has one character and that the title has one line at 1200px and wider.

### Sidama And The PDP Edition Block

The related edition block caused the remaining PDP overflow. At 1024px, its 16:10 media had a `25rem` minimum height inside a five-column span. The intrinsic width then exceeded the viewport. At 1440px, the edition heading for Sidama and Guji needed about 394px, but the old three-column copy span was about 315px. This made the document 19px wider than the viewport.

The correction removes the media minimum height, gives the wide copy one more desktop column, and uses a two-column edition layout from 1024px through 1399px. This is a layout correction. It does not hide overflow.

## Canon And Editorial Fact State

The factual review found no further change that was required in this task.

- The 12 coffees and The Kiln Cup use the approved integer-KES prices, formats, and grinds.
- Kenya products use their county and approved variety data. Kayanza products use Kayanza Province and Red Bourbon.
- Sidama remains Sidama. Guji uses Guji Zone, Oromia. Hawassa remains an image-caption location only.
- AFTERLIGHT uses Ethiopia, water-process decaf, and medium-light roast.
- The Beyond “Heirloom” article keeps the approved statement that the term is not one coffee variety. It also keeps the caution against fixed Sidama-versus-Guji flavour claims.
- The Kiln Cup page keeps the portfolio disclosure. Its working specifications are not production claims.

## Commerce And Checkout State

Bag lines contain product ID, format ID, optional grind ID, and quantity. The catalog resolves price and display data. The same exact variant increases quantity. A different format or grind creates a separate line.

The Bag and `/bag` show subtotal and the KES 5,000 free-Kenya-delivery progress. Demo delivery is KES 300 in Nairobi below the threshold, KES 500 in the rest of Kenya below the threshold, free in Kenya at or above the threshold, and KES 3,500 for the international demo rate.

Checkout is client-only. Contact values are transient React state. The flow sends no payment request, POST request, analytics call, beacon, or storage write. M-Pesa and card are selection-only demo methods. The clearly labeled `Place demo order` action clears the Bag only after form validation and routes to `/checkout/complete`.

The checkout canary test verifies that personal-data canaries do not occur in URLs, request headers or bodies, storage, console output, beacons, analytics, or `PaymentRequest` data.

## Browser, Accessibility, And Static Validation

The full Playwright evidence run used one worker and passed 18 tests. It checked all 13 purchasable PDPs at these viewports:

`320×844`, `375×844`, `390×844`, `430×844`, `768×900`, `900×900`, `1024×900`, `1100×900`, `1200×900`, `1280×900`, `1366×768`, and `1440×900`.

Each PDP check asserts `html.scrollWidth === html.clientWidth` and that `main` does not extend past the viewport. The fact check covers the required product facts, Kiln Cup disclosure, and Beyond “Heirloom” wording.

Focused final checks passed:

- `npx playwright test tests/bag-surfaces.spec.ts tests/commerce-evidence.spec.ts --grep "Bag controls|valid Bag drawer|settled one-item" --reporter=line` — 3 passed.
- The valid drawer Checkout link is visible and enabled. The test clicks it, fills the demo form, places the demo order, and verifies the visible completion heading.
- The drawer focus starts at Close. Escape closes it. Quantity and Remove controls meet the 44px target in the 320px check. The active dialog has `aria-modal`, a title, live Bag announcements, and keyboard focus containment.
- Checkout labels, radio controls, review data, and demo disclosure are present. The privacy canary test is part of the checkout suite.
- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm run build` passed. Next.js reported the existing multiple-lockfile warning and the existing ESLint Next.js-plugin configuration warning. Neither warning failed the build.

## Visual Evidence

Required screenshots:

```text
C:\Users\ASUS\Desktop\projects\red-clay\.forest\worktrees\feat\commerce-canon-integration\recordings\commerce-canon-integration\screenshots\1366\afterlight-opening.png
C:\Users\ASUS\Desktop\projects\red-clay\.forest\worktrees\feat\commerce-canon-integration\recordings\commerce-canon-integration\screenshots\1366\sidama-opening.png
C:\Users\ASUS\Desktop\projects\red-clay\.forest\worktrees\feat\commerce-canon-integration\recordings\commerce-canon-integration\screenshots\1366\bag-drawer-1-item.png
C:\Users\ASUS\Desktop\projects\red-clay\.forest\worktrees\feat\commerce-canon-integration\recordings\commerce-canon-integration\screenshots\1366\bag-drawer-4-items.png
C:\Users\ASUS\Desktop\projects\red-clay\.forest\worktrees\feat\commerce-canon-integration\recordings\commerce-canon-integration\screenshots\1366\bag-review.png
C:\Users\ASUS\Desktop\projects\red-clay\.forest\worktrees\feat\commerce-canon-integration\recordings\commerce-canon-integration\screenshots\1366\checkout-review.png
C:\Users\ASUS\Desktop\projects\red-clay\.forest\worktrees\feat\commerce-canon-integration\recordings\commerce-canon-integration\screenshots\390\bag-drawer.png
C:\Users\ASUS\Desktop\projects\red-clay\.forest\worktrees\feat\commerce-canon-integration\recordings\commerce-canon-integration\screenshots\390\bag-review.png
C:\Users\ASUS\Desktop\projects\red-clay\.forest\worktrees\feat\commerce-canon-integration\recordings\commerce-canon-integration\screenshots\390\checkout-delivery-payment.png
```

Visual inspection also covered a settled one-item drawer at 1366 × 768, 390 × 844, and 488 × 496. The settled drawer is opaque. Page content does not show through it. AFTERLIGHT was inspected at 1366 × 768 and 1920 × 1025. It is one composed line at both desktop widths.

## Recording Evidence

Raw recordings are retained:

```text
C:\Users\ASUS\Desktop\projects\red-clay\.forest\worktrees\feat\commerce-canon-integration\recordings\commerce-canon-integration\desktop-1366x768.raw.webm
C:\Users\ASUS\Desktop\projects\red-clay\.forest\worktrees\feat\commerce-canon-integration\recordings\commerce-canon-integration\mobile-390x844.raw.webm
```

Adjacent H.264 compressed copies are retained:

```text
C:\Users\ASUS\Desktop\projects\red-clay\.forest\worktrees\feat\commerce-canon-integration\recordings\commerce-canon-integration\desktop-1366x768.raw_compressed.mp4
C:\Users\ASUS\Desktop\projects\red-clay\.forest\worktrees\feat\commerce-canon-integration\recordings\commerce-canon-integration\mobile-390x844.raw_compressed.mp4
```

The desktop recording covers Shop, Sidama, AFTERLIGHT, one-item and four-item Bag drawers, `/bag`, checkout review, demo completion, and the Kiln Cup disclosure. The mobile recording covers selection, mobile Bag drawer, `/bag`, delivery/payment, and demo completion.

`ffprobe` used the required absolute executable and absolute input paths. Results:

| File | Codec | Pixel format | Dimensions | Duration | Size |
| --- | --- | --- | --- | --- | --- |
| `desktop-1366x768.raw_compressed.mp4` | h264 | yuv420p | 1366 × 768 | 17.520000s | 1,077,654 bytes |
| `mobile-390x844.raw_compressed.mp4` | h264 | yuv420p | 390 × 844 | 8.240000s | 394,630 bytes |

## Limits And Unresolved Issues

There are no known unresolved issues in the implemented scope.

This is a portfolio demonstration. It does not process payment, persist a cart or order, submit customer data, perform fulfilment, or verify a physical product. Asset creation, asset replacement, and physical manufacturing validation were out of scope and were not performed.
