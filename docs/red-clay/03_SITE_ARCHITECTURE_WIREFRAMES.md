# Red Clay Coffee — Site Architecture & Wireframe Handoff

**Document version:** 1.1.0  
**Change note:** Round 1.1 supersedes the desktop horizontal Shop default and fixed PDP split, and adds the restrained desktop editorial reveal-menu prototype.  
**Canonical basis:** Corrected 4B architecture + corrected 4C structural wireframes + Section 5 Earthen Folio. Values are structural references, not final visual tokens.

## Global architecture

### Information model

- Four fictional coffee products, one fictional companion object.
- Three origin regions: Central Kenya, Kayanza / Burundi, Southern Ethiopia.
- Three launch Edition stories, routed under `/journal` and presented publicly as **The Editions**.
- One cart experience; checkout is acknowledged but not art-directed in Round 1.
- Shop has **no filters at launch**. All five items are immediately visible.

### Shared page frame

- Mobile reference: 390 px, 16 px lateral gutter, 4 columns, single-column dominant flow.
- Tablet reference: 768 px, 32 px gutter, 8 columns, 580 px long-form measure.
- Desktop reference: 1440 px, approximately 1320 px active frame / 60 px outer margins, 12 columns, 24 px gutters.
- Long-form desktop measure: approximately 620 px; wide photography: 1200 px to full viewport.
- Full-bleed media is intentional and occasional, not a wrapper around every section.

### Sticky/fixed collision contract

1. Header is the only persistent global layer in ordinary flow.
2. Mobile buy bar appears only after the primary buy module leaves view and must not overlap cart/menu.
3. Cart and mobile menu lock body scroll, trap focus, close on Escape, and restore focus.
4. Desktop PDP purchase panel unpins before related content/footer.
5. Earthen Folio sticky behavior is scoped to its scroll track and releases cleanly.
6. Never stack Folio pinning, cart, menu, and sticky buy UI in competing layers.

## Global components

### Header

- **Purpose:** Brand recognition, direct access to Shop/Origins/Editions/About, bag status.
- **Mobile order:** Menu → centered/clear brand mark → Bag count. Reference height 48 px.
- **Desktop expansion:** Quiet 72 px horizontal header; brand at left/center according to final composition; primary links visible; utilities restrained. Prototype editorial reveal panels for Shop and Origins: short link groups plus one contextual feature image, with clear separation from the current page. Shop exposes four coffees and Kiln Cup; Origins exposes the three regions. This is not a multi-level mega-menu.
- **Behavior:** Mobile smart-hide after meaningful downward scroll and immediate reveal on upward intent. Desktop pinned or smart-hide remains a browser-test decision.
- **Accessibility:** Semantic navigation, current-route indication, 48×48 px touch intent, visible focus, no hover-only submenu.

### Desktop editorial reveal menu — prototype

- Shop panel: `COFFEE` (four working lot IDs), `OBJECT` (The Kiln Cup), and at most one current-harvest/Edition feature.
- Origins panel: Central Kenya, Kayanza / Burundi, Southern Ethiopia, and at most one contextual origin feature.
- Keyboard open/close and focus movement must match pointer behavior; Escape closes and returns focus; route links remain available without enhancement.
- Keep only if browser testing improves discovery without making the launch catalog feel artificially large. Otherwise use the simpler horizontal header.
- Mobile does not inherit this panel; its menu remains Shop, Origins, The Editions, About, and Bag.

### Mobile menu

- Full-screen typographic overlay; four primary links: Shop, Origins, The Editions, About.
- Bag remains accessible; no permanent harvest rail or category maze.
- Optional one quiet current Edition/origin feature may be tested only if it does not clutter launch navigation.
- Focus trap, Escape/close, body lock, focus restoration, reduced-motion opacity fallback.

### Cart

- Mobile: near-full-height bottom sheet (reference 90svh), safe-area aware.
- Tablet/desktop: right drawer, approximately 380/420 px.
- Content: line items, format, quantity, remove, subtotal, dispatch/shipping placeholder, one checkout CTA.
- One optional relevant upsell maximum. No editorial article content.
- States: empty; one coffee; multiple; coffee + cup; optional subscription; concluded item; loading; recoverable error.
- Coffee + cup must not imply a discount until `[BUSINESS MODEL DECISION]` is resolved.

### Footer

- Mobile: stacked Brand, Explore, Support, Dispatch/newsletter groups; avoid accordion unless content expands materially.
- Desktop: four-column architectural directory.
- No unsupported sourcing, impact, payment, shipping, or sustainability claims.

## Route specifications

## `/` — Homepage

**Purpose:** Establish the brand, surface coffee early, open both Reader’s and Purist’s paths.

**Exact section order:**

1. Hero Encounter
2. The Continuum
3. Current Harvest
4. Three Origin Territories
5. Featured Edition
6. Ritual & The Kiln Cup
7. Dispatch / newsletter / footer

**Mobile content order:** Exact order above. Hero proposition and primary CTA appear early. Continuum is compact. Harvest uses one featured coffee, three compact supporting coffees, and a visually distinct compact Cup entry. Origins stack vertically by default. Edition and Cup sections remain concise.

**Desktop expansion:** Asymmetric hero; horizontal four-beat Continuum; editorial product rhythm rather than a uniform five-card grid; three large region plates; split Edition composition; broader object/material study; generous, varied inter-section whitespace.

**Required components:** `Header`, `ImagePlate`, `Continuum`, `ProductCard` variants, `OriginCard`, `EditionCard`, `Newsletter`, `Footer`.

**Sticky behavior:** None required. Optional short image/text pin may be tested in the featured Edition only if it improves reading. No duplicate Folio.

**Commerce surfaces:** Harvest cards, restrained quick-add, featured Edition product link, Kiln Cup link. Essential buying info is never hover-only.

**Assets:** `HOME-HERO-D/M`, `HOME-CONTINUUM-MAT`, `HOME-PROD-01..05`, `HOME-ORIGIN-KENYA/BURUNDI/ETHIOPIA`, `HOME-EDITION-01`, `HOME-KILN-RITUAL`, optional `HOME-KILN-MOTION`, global footer assets.

**Section 5 relationship:** Link or still preview only; optional `01 / 03` motif. No pinned Folio sequence.

**Accessibility:** One H1; early CTA; no essential copy inside images; product actions named by product; full-bleed media has appropriate alt/empty alt; motion-independent content order.

## `/shop` — Collection

**Purpose:** Purist’s Path: scan all launch products and move to purchase with minimal interface.

**Exact section order:** Collection intro → image-led coffee collection → visually distinct Kiln Cup entry → roast/dispatch note → footer.

**Mobile:** One-column list with image/name leading. Vary pacing, not anatomy. Quick-add opens an accessible format sheet if required. No filters, carousel dependency, badges, ratings, or fake scarcity.

**Desktop:** **SUPERSEDED BY ROUND 1.1:** dense horizontal rows/horizontal split cards as the default. **Current baseline:** a Canyon-informed calm image-led grid. Four coffees form the dominant collection with generous whitespace, concise metadata, minimal permanent actions, useful alternate-image hover, and restrained contextual quick-add. The Kiln Cup sits in a secondary row or uses a different span/scale so the five items do not become identical tiles. No filters.

**Required components:** `ProductCard`, `QuickAddSheet/Popover`, availability text, dispatch note, footer.

**Sticky behavior:** None.

**Commerce:** Available, Limited text-only, `Harvest Concluded`, archived editorial access. Subscription only if later approved.

**Assets:** `SHOP-KENYA-01`, `SHOP-BURUNDI-01`, `SHOP-ETHIOPIA-01/02`, `SHOP-KILN-01`, optional `SHOP-DETAIL-MAT`.

**Section 5 relationship:** None.

**Accessibility:** Product grid/list semantics, action labels include product name, quick-add keyboard/touch parity, status not color-only.

## `/shop/[coffee-slug]` — Coffee PDP

**Purpose:** Enable an immediate buying decision, then deepen product character and place.

**Exact section order:** Hero/gallery + purchase → sensory/product character → place & story → related Edition → optional metadata → related products → footer.

**Mobile:** Gallery → name/region/notes → price/options → Add to Bag → dispatch → sensory copy → origin/process → Edition → metadata disclosure → related products. Sticky buy bar appears only after the main buy module is out of view.

**Desktop:** **Primary prototype:** Canyon-informed three-zone opening—A) purchase/identity/tasting/options, B) dominant product image, C) origin/process/dispatch/concise technical metadata. Widths are intentionally unequal and remain browser-tuned. Purchase/details may use bounded sticky behavior and release before the editorial continuation. **Alternate prototype:** the earlier 58/42 media/purchase composition, retained for comparison but no longer canonical default. Information hierarchy remains buying decision → product character → place/story → optional metadata. Below the opening, transition into progressively larger publication-like sensory, image, place/process, Edition, and related-product chapters.

**Required components:** `ProductGallery`, `BuyModule`, `StickyBuyBar`, `MetadataBlock`, `ImagePlate`, `EditionCard`, `RelatedCard`, cart trigger.

**Commerce:** Name, region, provisional notes, `[PRICE]`, size, grind/format, availability, dispatch, Add to Bag. Frequency is omitted unless subscriptions are approved.

**Assets:** Per-lot six-slot families: `PDP-[LOT]-HERO/PACK/ORIGIN/PROCESS/BOTANICAL/RITUAL`; not all optional plates must appear.

**Section 5 relationship:** Links to regional dossier; may reuse folio numbering/rules, never Folio choreography.

**Accessibility:** Native form controls or accessible custom controls; option errors announced; gallery controls labeled; buy bar does not duplicate focus confusingly; metadata disclosure remains keyboard accessible.

## `/shop/the-kiln-cup` — Kiln Cup PDP

**Purpose:** Sell one companion object while reinforcing, not overtaking, the coffee world.

**Exact section order:** Object hero + purchase → form/material → scale/hand feel → ritual/coffee use → coffee pairing → care/specifications → return to coffee → footer.

**Mobile:** Linear, shorter than coffee PDP; photography communicates material and scale; all specifications marked fictional/TBD until validated.

**Desktop:** Larger object/material studies with restrained purchase module. No 3D requirement. A broad image plate can provide object scale.

**Required components:** Product gallery, buy module, image plates, spec disclosure, related coffee/pairing.

**Sticky behavior:** Bounded purchase panel only if useful; no long object showcase pin.

**Commerce:** `[PRICE]`, availability, quantity, Add to Bag. Pairing/bundle and discount remain business decisions.

**Assets:** `CUP-HERO`, `CUP-MATERIAL-MACRO`, `CUP-HAND-SCALE`, `CUP-RITUAL-POUR`, `CUP-BUNDLE`, optional manually designed `CUP-DIMENSION-GRAPHIC`.

**Accessibility:** Do not rely on texture imagery to convey specs; captions/alt text distinguish raw exterior and glazed interior; no unvalidated safety claims.

## `/origins` — Origins hub

**Purpose:** Compare the three regions, host the signature experience, and connect place to coffees and Editions.

**Exact section order:** Origin thesis → Earthen Folio → compact three-region continuation (provisional) → How to Read an Origin → current coffees → related Editions → closing Shop CTA → footer.

**Mobile:** Thesis followed by complete stacked pocket-monograph chapters; normal links; compact educational block; product and Edition bridges. No pinned 250vh experience.

**Desktop:** Thesis approaches a native-scroll Folio track with sticky stage; the stage releases into calm Canyon-like editorial rhythm. Compact region entries remain scaffolded until prototype proves whether they are redundant.

**Required components:** `OriginFolio`, chapter nav, fallback chapters, `OriginCard`, education block, product cards, Edition cards, image plates.

**Sticky behavior:** Folio only, approximately 260–320vh prototype range, eligibility around desktop-class widths and no reduced motion. Exact range remains prototype-driven.

**Commerce:** Current-coffee bridge after education; Folio CTA leads to dossiers, not direct cart by default.

**Assets:** `ORIGINS-HERO`, `ORIGINS-CARD-*`, `ORIGINS-CURRENT-COFFEES`, full `S5-FOLIO-*` family. `ORIGINS-S5-PLACEHOLDER` is superseded by actual Folio scaffolding but may serve as fallback/poster reference.

**Section 5 relationship:** Primary host; governed by `08_SIGNATURE_EXPERIENCE_SPEC.md`.

**Accessibility:** Base DOM is three logical articles; direct nav works without GSAP; no auto-focus; reduced motion uses stacked flow; image failure leaves copy/links usable.

## `/origins/[region-slug]` — Origin dossier

**Purpose:** Provide verified regional context without implying a real Red Clay supplier relationship.

**Exact section order:** Regional hero → place/landscape → coffee context → processing traditions → agricultural work → current Red Clay coffees → related Edition → factual reference block → next region → footer.

**Mobile:** Short chapters, full-width image breaks, optional factual disclosure, natural next-region link.

**Desktop:** Split monograph plates, narrow reading measure, margin metadata, controlled asymmetry. Meaningful variations: Kenya brings process geometry earlier; Burundi emphasizes vertical hillside/work sequence; Ethiopia gives botanical/canopy context more breathing room.

**Required components:** Hero, image plates, chapter text, factual reference block, product card, Edition card, next-region link.

**Sticky behavior:** Optional short bounded text/image pairing only; no repeated Folio.

**Commerce:** Current region’s coffee(s), normally after contextual chapters.

**Assets:** Regional `ORIGIN-[REGION]-HERO/LANDSCAPE/PROCESS/WORK/BOTANICAL` family.

**Section 5 relationship:** Reuse numbering, rules, masks; no signature sequence.

**Accessibility:** Cite/label verified facts; generated people are not named as real producers; captions add context; reading order remains independent of desktop layout.

## `/journal` — The Editions hub

**Purpose:** Present exactly three launch stories as Volume 01, not simulate a large publication archive.

**Exact section order:** Opening → featured Edition → two secondary Editions → connected coffees → archive logic → future-volume note → transition → footer.

**Mobile:** Featured-first stack; no filters; concise excerpts and normal links.

**Desktop:** One dominant featured plate plus two secondary stacked/asymmetric entries; Canyon publication whitespace with selective Onyx-scale confidence.

**Components:** Edition cards, image plates, compact product bridge, footer.

**Sticky behavior:** None required.

**Commerce:** Connected coffees after story discovery; no more than one quick action per card.

**Assets:** `EDITIONS-HERO`, `EDITIONS-KENYA/BURUNDI/ETHIOPIA-CARD`.

**Accessibility:** Article titles are links; excerpt is not duplicated in accessible name; image alt describes content, not article title alone.

## `/journal/[chapter-slug]` — Edition article

**Purpose:** Long-form regional/process storytelling with one contextual path to purchase.

**Exact section order:** Masthead → opening thesis → geographic context → process/craft → visual interlude → human/agricultural perspective → contextual commerce → sensory/roastery reflection → related origin → next Edition → footer.

**Mobile:** 358 px reading measure, full-width image interludes, one compact purchase sheet/card, comfortable section separation.

**Desktop:** 620 px reading measure, oversized images, occasional margin notes/pinned plate only when reading order stays clear.

**Components:** Article header, prose, image plates/captions, `InlineCommerce`, origin link, next Edition.

**Commerce:** Normally one contextual product moment. No sticky buy drawer through the full article.

**Assets:** Per-region `EDITION-[REGION]-LEAD/PLACE/PROCESS/WORK/INTERLUDE`.

**Accessibility:** Semantic article/headings, descriptive link text, caption associations, no generated interview quotes, no scroll-triggered hidden prose.

## `/about` — About

**Purpose:** Explain the brand thesis more deeply without repeating the homepage or asserting real operations.

**Exact section order:** What Red Clay is → why the name → Continuum → why East African origins → representation/agricultural agency → material/design philosophy → coffee/roasting philosophy → closing → footer.

**Mobile:** Concise chapter stack with image breaks; moderate length; no second manifesto hero.

**Desktop:** Strong material plates and asymmetric typography while remaining quieter than the homepage.

**Components:** Image plates, chapter text, Continuum, closing CTA, footer.

**Sticky behavior:** None required.

**Commerce:** Closing may link to current harvest; no inline quick-add required.

**Assets:** `ABOUT-HERO-MATERIAL`, `ABOUT-EARTH`, `ABOUT-COFFEE`, `ABOUT-PORTRAIT`, `ABOUT-RITUAL`, `ABOUT-CLOSING`.

**Accessibility:** Fictional project disclosure where appropriate; representation imagery described without naming invented identities; one H1 and logical chapter headings.

## Structural acceptance baseline

- Every page remains meaningful with JavaScript disabled.
- Every page has one H1 and document-order content that matches mobile order.
- All dialogs/drawers trap and restore focus; all controls have visible focus.
- Touch intent is at least 48×48 px for primary interactive targets.
- Responsive images have explicit dimensions and deliberate crops.
- Only the first necessary hero image is eager; below-fold media is lazy.
- Reduced motion disables extended pinning, scrubbed masks, large transforms, ambient loops, and smooth-scroll dependencies.
