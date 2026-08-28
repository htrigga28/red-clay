# Red Clay asset audit browser evidence

Date: 2026-08-29  
Target: local Next.js app at `http://localhost:3001` (fresh dev server; port 3000 served a stale unstyled process)  
Viewports exercised: 390×844, 768×1024, 1366×768, and 1440×900.

## Key evidence

The Shop Current Harvest section is placeholder-heavy: the three visible product cards in `shop-current-harvest-1366x768.png` are neutral geometry-preserving panels with only RED CLAY/name labels and no photography. This is a confirmed asset gap rather than a browser failure.

The 390px Ethiopia capture uses the intended `object-fit: cover` crop and remains undistorted. No mobile crop defect was confirmed on the fresh server.

Desktop Shop and Origins reveal panels work, and the mobile Menu opens with `aria-expanded="true"` and a Site navigation dialog. Add to Bag controls are present on PDPs and are reachable on the styled server.

The earlier `:3000` pass is superseded and is not represented in this folder. Port 3000 returned a 404 for its CSS bundle and made all pages appear image-only; all captures listed below were re-recorded from the styled `:3001` server.

## Route checks

- `/` loaded with the styled shell, hero, and section content in the DOM; the hero image occupies its intended media frame.
- `/shop` loaded with the styled shell; the Current Harvest first viewport is visibly placeholder-heavy. Decorative navigation images use empty alt text as intended.
- Active coffee PDPs loaded: `/shop/kiambu-washed-01`, `/shop/kayanza-washed-01`, `/shop/sidama-washed-01`, `/shop/guji-natural-02`. Add to Bag controls are present and reachable on the styled server.
- Companion PDP `/shop/the-kiln-cup` loaded.
- `/origins`, `/origins/central-kenya`, `/origins/kayanza-burundi`, and `/origins/southern-ethiopia` loaded.
- `/journal` loaded and links to the three implemented editions: `/journal/water-and-time`, `/journal/along-the-kayanza-hills`, and `/journal/beyond-heirloom`. Each edition loaded with an h1 and four images.
- `/about`, `/bag`, `/checkout`, and `/checkout/complete` loaded. Empty bag/checkout states are readable in the DOM.
- The guessed slugs `/journal/hillside-intervals` and `/journal/heirloom-question` returned empty pages; these are not the implemented edition URLs.

## Captures

- `home-desktop-1366x768.png`
- `home-desktop-1440x900.png`
- `home-tablet-768x1024.png`
- `home-mobile-390x844.png`
- `shop-desktop-1366x768.png`
- `shop-current-harvest-1366x768.png`
- `ethiopia-origin-desktop-1366x768.png`
- `ethiopia-origin-mobile-390x844.png`
- `about-desktop-1366x768.png`

`shop-products-1366x768.png` is an additional mid-scroll product-grid capture.

No source code or asset files were changed during this pass.
