
**Document version:** 2.0 — corrected and consolidated  
**Status:** Approved baseline for Section 4C low-fidelity wireframing  
**Project:** Red Clay Coffee — Earthen Monograph  
**Scope:** Page architecture, provisional copy, commerce surfaces, asset placeholders, responsive hierarchy  
**Not in scope:** Final visual design, final product names, final brand copy, final factual copy, signature interaction design, production-ready asset prompts

---

## 0. SOURCE-OF-TRUTH RULES

This document replaces the earlier Section 4B draft and its appended correction pass. It resolves duplicated sections, contradictory decisions, unsupported commercial claims, overly deterministic coffee-science language, incomplete secondary-page blueprints, incomplete asset mapping, and incomplete 4C handoff material.

### 0.1 Approved brand foundation

Red Clay is a contemporary African coffee house built around the material character of place.

**Conceptual continuum:**

> **EARTH → COFFEE → VESSEL → RITUAL**

Coffee remains the primary product. Architecture, clay, materiality, editorial storytelling, and the Kiln Cup support the coffee world rather than compete with it.

**Approved visual hierarchy:**

- **Core:** Contemporary Monograph
- **Support:** Mineral Architecture
- **Warmth:** Luminous Editorial

### 0.2 Fictional-brand boundary

Red Clay is a fictional portfolio brand.

Real geography, cultivar history, regional coffee traditions, and other researched agricultural context may be used when verified. The website must not imply a real commercial relationship with an identifiable real producer, cooperative, washing station, exporter, or agronomist unless such a relationship actually exists.

Do not fabricate:

- direct-trade claims;
- producer payments or premiums;
- sourcing contracts;
- interviews or quotations attributed to real people;
- partnership histories;
- verified impact or sustainability outcomes;
- live inventory, logistics, or harvest telemetry presented as real.

### 0.3 Product naming rule

The previous names `Gichathaini`, `Kibira Ridge`, `Hafursa Waro`, and `Benti Nenka` are retained only as **legacy working references**. They must not be treated as final Red Clay products because some correspond to real places/entities and can imply a sourcing relationship.

For wireframing, use:

- **KENYA LOT 01** — final fictional product name TBD
- **BURUNDI LOT 01** — final fictional product name TBD
- **ETHIOPIA LOT 01** — final fictional product name TBD
- **ETHIOPIA LOT 02** — final fictional product name TBD
- **THE KILN CUP** — fictional companion object

Final product naming is a content decision that should be resolved before high-fidelity design, not before low-fidelity wireframing.

### 0.4 Coffee-copy rule

Use:

> **Sensory storytelling supported by factual specificity.**

Describe where coffee is grown, how it is processed, and what it tastes like without claiming that a single soil, elevation, or process variable directly causes a specific tasting note.

Preferred:

> “Grown at high elevation in Central Kenya and processed using a washed method. In the cup: blackcurrant, plum, and cane sugar.”

Avoid:

> “Iron-rich soil creates blackcurrant acidity.”

### 0.5 Provisional operating details

The following remain placeholders:

- `[PRICE]`
- `[ROAST DAY]`
- `[DISPATCH WINDOW]`
- `[SUBSCRIPTION SAVING]`
- `[SHIPPING THRESHOLD]`
- exact inventory quantities;
- exact release counts;
- final bag size(s);
- final roast profile(s);
- final grind options.

### 0.6 Section 5 boundary

Section 4 defines where a signature experience may live, but does not select or design it.

Use:

> `[SECTION 5 SIGNATURE EXPERIENCE SLOT]`

Do not assume that this will be a map, WebGL terrain, elevation profiler, 3D vessel, or light study. Those remain candidates for Section 5.

---

# PART 1 — HOMEPAGE BLUEPRINT

## 1.1 Narrative spine

```text
01 HERO ENCOUNTER
↓
02 THE CONTINUUM — Earth → Coffee → Vessel → Ritual
↓
03 CURRENT HARVEST
↓
04 THREE ORIGIN TERRITORIES
↓
05 FEATURED EDITION
↓
06 RITUAL & THE KILN CUP
↓
07 DISPATCH / TRUST / NEWSLETTER / FOOTER
```

The seven movements are narrative beats, not seven mandatory full-screen sections.

---

## 1.2 Movement 01 — Hero Encounter

**Narrative job:** Establish Red Clay as a coffee brand first, while introducing place, tactile materiality, and morning ritual.

**Eyebrow:** `EAST AFRICAN HIGHLAND COFFEES`

**Provisional headline:**  
**Coffee from the highlands of East Africa. Roasted for the stillness of early light.**

**Provisional body copy:**  
Four seasonal single-origin releases from Kenya, Burundi, and Ethiopia, presented through place, craft, and the ritual of brewing.

**Primary CTA:** `Explore the Harvest` → Section 03 or `/shop`  
**Secondary CTA:** `Read the Editions` → `/journal`

**Assets:**

- `HOME-HERO-D` — wide environmental hero, desktop
- `HOME-HERO-M` — tactile ritual hero, mobile

**Mobile:** Dedicated vertical crop/composition; headline and primary CTA visible without requiring a long initial scroll.

**Desktop:** Asymmetric image/text composition with generous negative space. Architecture may frame the coffee world but must not read as resort or property advertising.

**Motion opportunity:** Optional short ambient steam/light loop. Static image must remain a complete fallback.

**Do not use:** discount badges, promotional banners, autoplay-heavy film, generic café imagery.

**Status:** Essential.

---

## 1.3 Movement 02 — The Continuum

**Narrative job:** Explain the Red Clay name and conceptual system quickly.

**Eyebrow:** `THE CONTINUUM`

**Headline:**  
**From highland earth to the morning vessel.**

**Four beats:**

- **Earth:** Highland soils, rain, and elevation form the conditions in which coffee grows.
- **Coffee:** Washed and natural lots selected for clarity, sweetness, and character.
- **Vessel:** A terracotta companion object designed around the daily brew.
- **Ritual:** The deliberate practice of brewing, holding, and drinking.

**CTA:** None.

**Asset:** `HOME-CONTINUUM-MAT` — material study, optional.

**Mobile:** Compact vertical sequence, one line per beat.  
**Desktop:** Four-column typographic strip.

**Do not use:** chemistry diagrams, data visualization, long manifesto paragraphs.

**Status:** Essential, compact.

---

## 1.4 Movement 03 — Current Harvest

**Narrative job:** Put the actual coffee collection in front of high-intent buyers early.

**Eyebrow:** `CURRENT HARVEST // VOL. 01`

**Headline:**  
**Four single-origin releases. One companion vessel.**

**Body copy:**  
A concise collection spanning Central Kenya, Kayanza in Burundi, and the southern Ethiopian highlands. Each coffee is presented through origin, process, and sensory character.

**Products:**

1. `KENYA LOT 01`
2. `BURUNDI LOT 01`
3. `ETHIOPIA LOT 01`
4. `ETHIOPIA LOT 02`
5. `THE KILN CUP`

**Card hierarchy:**

1. Product image
2. Product name
3. Region / country
4. Three tasting notes
5. One metadata row: elevation / process / variety when verified
6. Price placeholder
7. `View Coffee` and/or `Quick Add`

**Assets:** `HOME-PROD-01` through `HOME-PROD-05`

**Mobile:** One-column editorial list. Avoid stacking five visually identical oversized cards; alternate image crop, spacing, or compactness while retaining consistent card anatomy.

**Desktop:** Editorial grid/list. Hover may reveal secondary metadata, but essential product information must not depend on hover.

**Status:** Essential.

---

## 1.5 Movement 04 — Three Origin Territories

**Narrative job:** Introduce the geographic framework without turning the homepage into a geography lesson.

**Eyebrow:** `ORIGIN INDEX`

**Headline:**  
**Three East African highland landscapes.**

**Provisional body copy:**  
Central Kenya, Kayanza, and the southern Ethiopian highlands each carry distinct histories of cultivation, processing, landscape, and cup character.

### Territory previews

**Central Kenya**  
`1,800–2,100m range — verify for final copy`  
Red highland soils, cooperative processing traditions, and Kenyan varieties such as SL28 and SL34 as regional context.

**Kayanza, Burundi**  
`elevation range — verify for final copy`  
Steep highland landscapes, smallholder coffee systems, washing stations, and Bourbon-related varieties as regional context.

**Southern Ethiopia**  
`elevation range — verify for final copy`  
Guji and Gedeo/Yirgacheffe highlands, forest and garden coffee systems, and diverse Ethiopian landrace populations.

**CTA:** `Explore Origins` → `/origins`

**Assets:**

- `HOME-ORIGIN-KENYA`
- `HOME-ORIGIN-BURUNDI`
- `HOME-ORIGIN-ETHIOPIA`

**Mobile:** Prefer a vertically stacked 3-card sequence or a very obvious snap carousel. Do not require horizontal swiping to understand the page.

**Desktop:** Three generous regional plates with distinct image character.

**Status:** Essential.

---

## 1.6 Movement 05 — Featured Edition

**Narrative job:** Demonstrate the “stories are storefronts” principle without fabricating interviews or sourcing relationships.

**Eyebrow:** `HARVEST EDITION // VOL. 01`

**Working headline:**  
**Water & Time: Washed coffee in the Central Kenya highlands.**

This replaces the previous “72-Hour Double Wash” title until an exact duration and a specific real-world context are verified.

**Provisional excerpt:**  
Central Kenya’s cooperative washing tradition is known for careful cherry selection, fermentation, washing, and raised-bed drying. This Edition looks at the craft as regional context, then connects it to Red Clay’s fictional Kenya release.

**Primary CTA:** `Read the Edition`  
**Secondary CTA:** `View Kenya Lot 01`

**Asset:** `HOME-EDITION-01`

**Mobile:** Image → title → short excerpt → product link.  
**Desktop:** Split editorial composition; pinned imagery is optional.

**Do not use:** invented quotes, “we visited” language unless framed as fictional concept copy, or exact process durations that have not been verified.

**Status:** Essential.

---

## 1.7 Movement 06 — Ritual & The Kiln Cup

**Narrative job:** Bring origin back into the domestic coffee ritual without letting ceramics take over the brand.

**Eyebrow:** `THE COMPANION OBJECT`

**Headline:**  
**Raw terracotta. Mineral-white glaze. A vessel for the daily brew.**

**Provisional body copy:**  
The Kiln Cup is a fictional companion object designed around Red Clay’s earth-to-vessel idea: a tactile terracotta exterior, a light glazed interior, and a compact form for filter coffee.

**Primary CTA:** `View the Kiln Cup`  
**Secondary CTA:** Optional `Pair with Coffee`

**Assets:**

- `HOME-KILN-OBJECT`
- `HOME-KILN-RITUAL`
- `HOME-KILN-MOTION` — optional

**Mobile:** Compact section.  
**Desktop:** May expand into object/material study.

**Physical-performance claims:** Do not state heat retention, food safety, dishwasher safety, or ergonomic performance as facts until validated.

**Status:** Essential but compact.

---

## 1.8 Movement 07 — Dispatch, Trust, Newsletter & Footer

**Narrative job:** Close with operational clarity and retention.

**Headline:**  
**Roasted in small batches. Dispatch details, clearly stated.**

**Provisional body copy:**  
Current roast and dispatch timing will be shown here once the fictional operating model is finalized. The footer also carries newsletter sign-up, navigation, and sourcing/fiction disclosures where appropriate.

**Newsletter CTA:** `Join the Dispatch`

**Asset:** Primarily typographic. `GLOBAL-FOOTER-TYPO`

**Mobile:** Stacked.  
**Desktop:** Structured multi-column footer.

**Do not claim:** transparent trade partnerships, premium producer payments, or verified impact.

**Status:** Essential.

---

# PART 2 — SHOP / COLLECTION BLUEPRINT

## 2.1 Final filtering decision

**Decision: No filters at launch.**

With four coffees and one Kiln Cup, origin filters create more interface than utility. All five products should be visible immediately.

If the catalog grows materially later, filtering can be introduced without changing the underlying product-card system.

## 2.2 Page sequence

```text
01 COLLECTION INTRO
02 FIVE-PRODUCT EDITORIAL HARVEST LIST
03 ROAST / DISPATCH NOTE
04 FOOTER
```

### 01 Collection intro

**Eyebrow:** `CURRENT HARVEST // VOL. 01`

**Headline:**  
**Single-origin releases and one companion object.**

**Copy:**  
Four coffees from three East African highland regions, presented through concise sensory and origin information.

### 02 Editorial Harvest List

**Coffee card fields:**

- product name;
- region;
- three tasting notes;
- `[ELEVATION]`;
- `[PROCESS]`;
- `[VARIETY, IF VERIFIED]`;
- `[PRICE]`;
- bag size;
- `View Coffee`;
- optional `Quick Add`.

**Kiln Cup card fields:**

- object name;
- material;
- capacity `[FICTIONAL SPEC]`;
- price;
- `View Object`.

**Quick-add principle:**  
Do not force grind selection onto every card at rest. `Quick Add` may open a compact sheet/popover for purchase options.

### 03 Product states

**Available:** normal card.  
**Limited:** clear text label, no urgency gimmicks.  
**Sold out:** `Harvest Concluded` + `Read the Edition` or `Notify Me`.  
**Archived:** remains accessible editorially but not purchasable.

### 04 Mobile

One-column editorial list. Product image and name should lead; specs stay concise.

### 05 Desktop

Generous horizontal or staggered cards. No empty four-column grid.

### Asset IDs

- `SHOP-INTRO-STILL` — optional
- `SHOP-KENYA-01`
- `SHOP-BURUNDI-01`
- `SHOP-ETHIOPIA-01`
- `SHOP-ETHIOPIA-02`
- `SHOP-KILN-01`

---

# PART 3 — COFFEE PDP TEMPLATE

## 3.1 Information hierarchy

### Level 1 — Immediate buying decision

- product name;
- region;
- tasting notes;
- `[PRICE]`;
- size;
- purchase format/grind options;
- purchase frequency if subscriptions remain in scope;
- availability;
- roast/dispatch note;
- Add to Bag.

**Goal:** A buyer can decide and add to cart without reading editorial content.

### Level 2 — Product character

- 1–2 short sensory paragraphs;
- process;
- variety if verified;
- elevation if verified;
- roast direction;
- one useful brew recommendation.

### Level 3 — Place & story

- regional context;
- landscape;
- processing tradition;
- relationship to the relevant Origin page;
- relationship to a relevant Edition.

### Level 4 — Optional metadata

Only show fields that are known and meaningful:

- region;
- elevation;
- variety/cultivar;
- process;
- harvest period;
- roast profile;
- storage guidance;
- grade only if verified and useful.

Do not create a technical dashboard.

---

## 3.2 Provisional PDP copy pattern

**Eyebrow:** `[REGION] // [ELEVATION]`

**Title:** `[FINAL PRODUCT NAME TBD]`

**Tasting notes:** `[NOTE 1] • [NOTE 2] • [NOTE 3]`

**Sensory copy:**  
A highland coffee from `[REGION]`, presented with `[sensory character]`. The processing method and regional context are described factually, while tasting notes remain sensory observations rather than claims of simple cause and effect.

**Origin CTA:** `Explore [Region]`  
**Edition CTA:** `Read the Related Edition`

---

## 3.3 Mobile PDP

```text
Product image gallery
↓
Name / region / tasting notes
↓
Price + purchase options
↓
Add to Bag
↓
Sensory description
↓
Origin / process
↓
Related Edition
↓
Optional metadata accordion
↓
Related products
↓
Footer
```

A sticky buy bar may appear only after the main purchase module scrolls out of view.

## 3.4 Desktop PDP

Recommended baseline:

- Left: image / editorial content stream
- Right: purchase module that may become sticky within its section
- Avoid pinning the purchase panel through the entire page if it competes with editorial content.

## 3.5 PDP asset convention

For each coffee:

- `PDP-[LOT]-HERO`
- `PDP-[LOT]-PACK-DETAIL`
- `PDP-[LOT]-ORIGIN`
- `PDP-[LOT]-PROCESS`
- `PDP-[LOT]-RITUAL` — optional
- `PDP-[LOT]-BOTANICAL` — optional

Specific IDs are listed in Part 14.

---

# PART 4 — KILN CUP PDP

## 4.1 Page sequence

```text
01 OBJECT HERO + PURCHASE
02 FORM & MATERIAL
03 SCALE & HAND FEEL
04 RITUAL / COFFEE USE
05 COFFEE PAIRING
06 CARE & SPECIFICATIONS
07 RETURN TO COFFEE
08 FOOTER
```

### 01 Object Hero + Purchase

**Eyebrow:** `COMPANION OBJECT`

**Headline:**  
**The Kiln Cup**

**Copy:**  
A fictional handleless terracotta cup developed as Red Clay’s companion object: raw exterior texture, light glazed interior, and a compact form intended for filter coffee.

**CTA:** `Add to Bag — [PRICE]`

**Asset:** `CUP-HERO`

### 02 Form & Material

**Headline:**  
**Clay outside. Glaze within.**

Focus on visual/material contrast rather than unverified performance claims.

**Asset:** `CUP-MATERIAL-MACRO`

### 03 Scale & Hand Feel

Show the cup in hand to communicate scale.

**Asset:** `CUP-HAND-SCALE`

### 04 Ritual / Coffee Use

Show pouring and drinking context.

**Asset:** `CUP-RITUAL-POUR`

### 05 Coffee Pairing

Offer an optional bundle with one current coffee.

**CTA:** `Pair with a Coffee`

**Asset:** `CUP-BUNDLE`

### 06 Care & Specifications

All values remain fictional product specifications until prototyped.

- Capacity: `[280ml — FICTIONAL SPEC]`
- Dimensions: `[TBD — FICTIONAL SPEC]`
- Weight: `[TBD — FICTIONAL SPEC]`
- Material: `[TBD — FICTIONAL SPEC]`
- Food-safety status: `[REQUIRES VALIDATION]`
- Dishwasher status: `[REQUIRES VALIDATION]`
- Care guidance: `[REQUIRES MATERIAL TESTING]`

### 07 Return to Coffee

**CTA:** `Back to the Collection`

### Mobile

Linear product story; no 3D required.

### Desktop

May support a larger object/material composition. Any interactive light or 3D treatment is deferred to Section 5.

---

# PART 5 — ORIGINS LANDING PAGE

## 5.1 Page sequence

```text
01 ORIGIN THESIS
02 [SECTION 5 SIGNATURE EXPERIENCE SLOT]
03 THREE REGIONAL TERRITORIES
04 HOW TO READ AN ORIGIN
05 CURRENT COFFEES BY REGION
06 RELATED EDITIONS
07 CLOSING TRANSITION
08 FOOTER
```

### 01 Origin Thesis

**Eyebrow:** `ORIGIN INDEX`

**Headline:**  
**Three highland regions. Three ways into the coffee.**

**Copy:**  
Red Clay’s launch world is organized around Central Kenya, Kayanza in Burundi, and the southern Ethiopian highlands. Each region is introduced through landscape, cultivation and processing context, current coffee, and editorial story.

**Asset:** `ORIGINS-HERO`

### 02 Signature slot

`[SECTION 5 SIGNATURE EXPERIENCE SLOT]`

For wireframes, represent this as a bounded content region with:

- short title;
- fallback static regional selector;
- three region entry points;
- accessible non-interactive path.

No map, WebGL, 3D, or motion concept is selected in Section 4.

### 03 Regional territories

Three region cards/plates:

- `ORIGINS-CARD-KENYA`
- `ORIGINS-CARD-BURUNDI`
- `ORIGINS-CARD-ETHIOPIA`

### 04 How to read an origin

A compact educational block:

- **Place:** where the coffee grows;
- **Variety:** botanical lineage when verified;
- **Process:** how fruit is removed and coffee is dried;
- **Cup:** sensory description.

Avoid implying that these four fields form a deterministic flavor equation.

### 05 Current coffees

Use product-card variants connected to the regions.

### 06 Related Editions

Show the three launch Edition stories.

### 07 Closing transition

**CTA:** `Shop the Current Harvest`

### Mobile

The page must work perfectly if the Section 5 slot is only a static three-region selector.

### Desktop

The Section 5 slot may expand, but the rest of the page should not depend on it.

---

# PART 6 — ORIGIN DETAIL TEMPLATE

## 6.1 Reusable sequence

```text
01 REGIONAL HERO
02 PLACE & LANDSCAPE
03 COFFEE CONTEXT
04 PROCESSING TRADITIONS
05 AGRICULTURAL WORK
06 CURRENT RED CLAY COFFEES
07 RELATED EDITION
08 FACTUAL REFERENCE BLOCK
09 NEXT REGION
10 FOOTER
```

### 01 Regional Hero

Use verified region and country labels; elevation range remains fact-checkable copy.

### 02 Place & Landscape

Describe topography, climate, soils, vegetation, and agricultural setting at an accessible level.

### 03 Coffee Context

Regional cultivar/variety history and general cup traditions may be included when verified.

### 04 Processing Traditions

Describe regional practices without imposing one exact process on every producer.

### 05 Agricultural Work

Focus on expertise and systems rather than anonymous “farmer” imagery.

No fabricated quotes or invented biographies.

### 06 Current Red Clay Coffees

Clearly fictional Red Clay product modules. Do not imply named real stations supply them.

### 07 Related Edition

One relevant editorial story.

### 08 Factual Reference Block

Small optional reference section for terms such as Nitisol, SL28, washed process, Bourbon-related varieties, or Ethiopian landraces.

This is not a scientific data dashboard.

### 09 Next Region

Simple sequential navigation.

---

## 6.2 Regional narrative variation

### A. Central Kenya

**Narrative character:** Structured, high-contrast, precise.

**Factual themes to verify before final copy:**

- Central Kenyan coffee highlands around Nyeri/Kirinyaga;
- Nitisols as an important soil group in Kenyan highlands;
- Kenyan SL varieties including SL28 and SL34;
- cooperative/washing-station processing traditions;
- Kenyan grade terminology only when relevant.

**Avoid:** treating “72 hours” as a universal processing rule.

### B. Kayanza, Burundi

**Narrative character:** Steep hills, close-scale agriculture, washing-station networks, soft mist and layered ridges.

**Factual themes to verify before final copy:**

- elevation range;
- locally important varieties;
- washed processing context;
- smallholder production structures.

**Avoid:** claiming all Burundi coffee is a single Red Bourbon type or that every lot follows identical processing.

### C. Southern Ethiopia

**Narrative character:** Botanical depth, forest/garden coffee context, shade, density, layered landscape.

**Factual themes to verify before final copy:**

- Ethiopia as the native home of Coffea arabica;
- high genetic diversity;
- local landrace populations;
- Guji and Gedeo/Yirgacheffe regional specificity.

**Avoid:** presenting “heirloom” or a few local variety names as if they describe all Ethiopian coffee.

---

# PART 7 — THE EDITIONS LANDING PAGE

## 7.1 Launch model

Three finished stories are enough for launch if the page is designed as a deliberate first volume rather than a large empty blog.

**Working label:**  
`THE EDITIONS // VOLUME 01`

## 7.2 Page sequence

```text
01 EDITORIAL OPENING
02 FEATURED EDITION
03 TWO SECONDARY EDITIONS
04 CONNECTED COFFEES
05 ARCHIVE / CONCLUDED HARVEST LOGIC
06 FUTURE VOLUME NOTE
07 SHOP / ORIGINS TRANSITION
08 FOOTER
```

### Edition 01 — Central Kenya

**Working title:**  
**Water & Time: Washed coffee in the Central Kenya highlands**

**Asset:** `EDITION-KENYA-LEAD`

### Edition 02 — Burundi

**Working title:**  
**Along the Kayanza Hills**

**Asset:** `EDITION-BURUNDI-LEAD`

### Edition 03 — Ethiopia

**Working title:**  
**Canopy & Landrace: Coffee diversity in the southern Ethiopian highlands**

**Asset:** `EDITION-ETHIOPIA-LEAD`

All titles remain provisional until factual copy is verified.

## 7.3 Archive behavior

If a fictional Red Clay coffee concludes, the Edition remains readable. Product modules change from purchase to `View Current Coffees` or `Join the Next Release`.

---

# PART 8 — EDITION ARTICLE TEMPLATE

## 8.1 Sequence

```text
01 MASTHEAD
02 OPENING THESIS + LEAD IMAGE
03 GEOGRAPHIC CONTEXT
04 PROCESS / CRAFT
05 VISUAL INTERLUDE
06 HUMAN / AGRICULTURAL PERSPECTIVE
07 CONTEXTUAL COMMERCE
08 SENSORY / ROASTERY REFLECTION
09 RELATED ORIGIN
10 NEXT EDITION
11 FOOTER
```

### 01 Masthead

- Edition/volume label;
- title;
- region;
- reading time;
- publication date if useful.

### 02 Opening thesis

Approx. 80–120 words. Explain why the subject matters.

### 03 Geographic context

Approx. 120–180 words. Factual and readable.

### 04 Process / craft

Approx. 180–300 words. Avoid one-size-fits-all claims.

### 05 Visual interlude

One large image or short sequence.

### 06 Human / agricultural perspective

Approx. 100–180 words.

Use:

- verified public facts;
- observational description;
- general role-based context.

Do not fabricate direct quotes or biographies.

### 07 Contextual commerce

One product module where the narrative naturally reaches the current Red Clay release.

If the release is archived, use a current-coffee or origin CTA instead.

### 08 Sensory / roastery reflection

Approx. 80–120 words of fictional Red Clay sensory language. Clearly part of the brand’s product world, not an attributed quote from a real producer.

### 09 Related origin

Link to regional dossier.

### 10 Next Edition

Sequential editorial navigation.

### Mobile

Single-column reading, generous image breaks, no floating purchase UI over body text.

### Desktop

May use editorial asymmetry, margin notes, or a restrained pinned plate. Reading comfort takes priority.

---

# PART 9 — ABOUT PAGE

## 9.1 Sequence

```text
01 WHAT RED CLAY IS
02 WHY THE NAME
03 EARTH → COFFEE → VESSEL → RITUAL
04 WHY EAST AFRICAN ORIGINS
05 REPRESENTATION & AGRICULTURAL AGENCY
06 MATERIAL & DESIGN PHILOSOPHY
07 COFFEE / ROASTING PHILOSOPHY
08 CLOSING STATEMENT
09 FOOTER
```

### 01 What Red Clay Is

**Headline:**  
**A coffee house built around the material character of place.**

**Copy:**  
Red Clay is a fictional specialty-coffee brand and portfolio world focused on East African origins, tactile materials, editorial storytelling, and the domestic ritual of brewing.

For the public-facing fictional brand site, the phrase “fictional portfolio world” may be omitted, but the site must still avoid false claims about real-world commercial relationships.

### 02 Why the Name

**Headline:**  
**The earth underfoot. The fired vessel in your hand.**

**Copy:**  
Red Clay connects the red highland soils that appear across parts of East Africa with the terracotta companion object at the center of its material world.

Do not imply that one soil type applies to every origin.

### 03 Continuum

**Headline:**  
**Earth. Coffee. Vessel. Ritual.**

Keep to four concise statements.

### 04 Why East African Origins

**Headline:**  
**Three regions, each with its own coffee history.**

**Copy:**  
Ethiopia is the native home of Coffea arabica. Kenya and Burundi have developed their own important highland coffee traditions. Red Clay uses these distinct regional contexts as the foundation for its launch collection.

### 05 Representation & Agricultural Agency

**Headline:**  
**Agricultural expertise, not charity framing.**

**Copy:**  
The brand’s editorial approach treats coffee producers, washing-station teams, quality specialists, and other professionals as skilled participants in a complex agricultural and trade system. Human imagery should emphasize agency, expertise, and contemporary dignity.

### 06 Material & Design Philosophy

**Headline:**  
**Tactile substance in a digital experience.**

**Copy:**  
Rammed earth, basalt, linen, paper fiber, terracotta, coffee, shadow, and morning light form the material vocabulary.

### 07 Coffee / Roasting Philosophy

**Headline:**  
**Clarity before spectacle.**

**Copy:**  
The fictional product world favors roast language that supports origin and sensory clarity. Exact roast curves, operating cadence, and production claims remain placeholders until the fictional business model is finalized.

### 08 Closing

**Headline:**  
**Coffee for the stillness of early light.**

**CTA:** `Explore the Current Harvest`

---

# PART 10 — CART DRAWER

## 10.1 Core content

- `Your Bag ([COUNT])`
- item image
- product name
- size
- grind/format
- purchase frequency
- quantity
- price
- edit/remove
- subtotal
- dispatch note
- checkout CTA

## 10.2 States

**Empty:** `Your bag is empty.` + `Explore the Harvest`  
**Loading:** compact skeletons, no fake totals  
**Error:** preserve item state and show retry  
**Unavailable:** explain change and require user acknowledgment before checkout  
**Quantity update:** optimistic if safe, recover cleanly on error  
**Bundle:** show coffee and cup as separate line items or a clearly grouped bundle  
**Subscription:** display cadence unambiguously  
**Checkout transition:** disable duplicate submit, show clear progress

## 10.3 Upsell limit

At most one low-pressure Kiln Cup or coffee-pairing suggestion. Do not turn the cart into a content surface.

## 10.4 Responsive

**Mobile:** near-full-height bottom sheet or full-screen sheet; easy thumb reach; visible close control.  
**Desktop:** right-side drawer.

## 10.5 Accessibility

- trap focus while open;
- Escape closes on desktop;
- return focus to trigger;
- clear accessible labels;
- background inert while open;
- respect reduced motion.

---

# PART 11 — MOBILE MENU

## 11.1 Final decision

**Remove the Direct Harvest Rail by default.**

Four top-level links plus Bag already provide enough navigation. Product shortcuts make the menu busier and can become stale as harvests change.

A single campaign/featured-release link may be added later if it has a clear editorial purpose.

## 11.2 Hierarchy

```text
RED CLAY                      Close

Shop
Origins
The Editions
About

Shipping / Legal
Newsletter
Social links

Bag [count]
```

## 11.3 Behavior

- full-screen or near-full-screen overlay;
- body scroll locked;
- visible close control;
- focus trapped;
- active page indicated;
- Bag remains accessible;
- reduced-motion mode uses simple opacity transition.

---

# PART 12 — GLOBAL FOOTER

## 12.1 Desktop groups

**Brand**
- Red Clay
- short descriptor
- copyright

**Explore**
- Shop
- Origins
- The Editions
- About

**Support**
- Shipping
- Legal
- Sourcing / project disclosure as appropriate

**Dispatch**
- newsletter field
- roast/dispatch placeholder if still useful
- social links

## 12.2 Mobile

Stacked groups. Avoid deep accordions unless the footer becomes materially longer.

## 12.3 Copy rule

No unverified trade, payment, or impact claims.

---

# PART 13 — PRELIMINARY COPY SYSTEM

## 13.1 Brand descriptor

**Primary working descriptor:**  
**Contemporary African Coffee House**

Supporting alternatives:

- `East African Origins, Material Craft, Daily Ritual`
- `Specialty Coffee from an Earthen Monograph World`

Do not use “companion hardware” as a primary brand descriptor; it is too technical and overstates the Kiln Cup.

## 13.2 Headline character

- short to medium length;
- tactile and specific;
- editorial rather than ad-like;
- avoids faux-scientific causality;
- avoids generic luxury language;
- avoids pan-African generalization.

### Example headline territories

1. Coffee from the highlands of East Africa.
2. The earth underfoot. The vessel in your hand.
3. Four releases. Three highland regions.
4. Morning light, dark coffee, raw clay.
5. Washed, natural, and grounded in place.
6. A coffee house built around material character.
7. Three regions, each with its own coffee history.
8. From origin to the daily brew.
9. Tactile objects for an unhurried ritual.
10. Coffee for the stillness of early light.

## 13.3 CTA vocabulary

Use plain, confident actions:

- `Explore the Harvest`
- `Shop the Collection`
- `View Coffee`
- `Add to Bag`
- `Quick Add`
- `Explore Origins`
- `Read the Edition`
- `View the Kiln Cup`
- `Pair with Coffee`
- `Join the Dispatch`
- `Continue to Checkout`

Avoid “Acquire,” “Unlock,” or overly precious language as the default.

## 13.4 Product naming

For 4C use generic working IDs. Final naming must:

- avoid falsely implying a real sourcing relationship;
- remain memorable;
- support origin context;
- avoid turning technical metadata into the product name.

## 13.5 Origin naming

Working labels:

- `Central Kenya — Nyeri & Kirinyaga`
- `Kayanza — Burundi`
- `Southern Ethiopia — Guji & Gedeo/Yirgacheffe`

Final phrasing should be fact-checked for geographic precision.

## 13.6 Edition naming

Pattern:

> `[Poetic/Editorial Title]`  
> `[Descriptive subtitle or regional label]`

Example:

> **Water & Time**  
> Washed coffee in the Central Kenya highlands

## 13.7 Metadata

Use consistent units and avoid shouting every field in uppercase.

Example:

`Central Kenya · 2,050 MASL · Washed · [Variety] · 250 g`

Use `MASL` only if the audience benefits from it; `2,050 m` may be clearer in prose.

## 13.8 Sold-out language

Primary: `Harvest Concluded`  
Secondary: `Read the Edition` / `View Current Coffees` / `Notify Me`

Avoid theatrical scarcity language.

## 13.9 Microcopy tone

Clear, calm, useful.

Examples:

- `Added to your bag.`
- `Choose a grind before adding.`
- `This release has concluded.`
- `Dispatch timing: [DISPATCH WINDOW].`
- `You're on the Dispatch list.`
- `We couldn't update your bag. Try again.`

---

# PART 14 — TEMPORARY ASSET-ID SYSTEM

These IDs are for wireframing and later asset planning. They are not the final Section 6 production inventory.

## 14.1 Homepage

| ID | Purpose | Media | Ratio | Status |
|---|---|---|---|---|
| `HOME-HERO-D` | Desktop hero | Still/video | 16:9 or wider | Validation asset can inform; final likely new |
| `HOME-HERO-M` | Mobile hero | Still | 9:16 | Validation asset reusable/reference |
| `HOME-CONTINUUM-MAT` | Material transition | Still | 16:9 / 4:5 | Validation asset reusable |
| `HOME-PROD-01` | Kenya product | Product still | 3:4 | Final packaging asset required |
| `HOME-PROD-02` | Burundi product | Product still | 3:4 | Final packaging asset required |
| `HOME-PROD-03` | Ethiopia product 1 | Product still | 3:4 | Final packaging asset required |
| `HOME-PROD-04` | Ethiopia product 2 | Product still | 3:4 | Final packaging asset required |
| `HOME-PROD-05` | Kiln Cup | Product still | 3:4 | Validation asset can inform |
| `HOME-ORIGIN-KENYA` | Kenya origin | Landscape | 4:5 / 16:9 | New/final |
| `HOME-ORIGIN-BURUNDI` | Burundi origin | Landscape | 4:5 / 16:9 | New |
| `HOME-ORIGIN-ETHIOPIA` | Ethiopia origin | Landscape | 4:5 / 16:9 | New |
| `HOME-EDITION-01` | Featured Edition | Environmental/editorial | 4:5 / 16:9 | Validation asset can inform |
| `HOME-KILN-RITUAL` | Cup in use | Ritual still | 4:5 / 9:16 | Validation asset reusable/reference |
| `HOME-KILN-MOTION` | Optional ambience | Short video | responsive | Optional |

## 14.2 Shop

| ID | Purpose |
|---|---|
| `SHOP-KENYA-01` | Kenya product card |
| `SHOP-BURUNDI-01` | Burundi product card |
| `SHOP-ETHIOPIA-01` | Ethiopia product card 1 |
| `SHOP-ETHIOPIA-02` | Ethiopia product card 2 |
| `SHOP-KILN-01` | Kiln Cup card |
| `SHOP-DETAIL-MAT` | Optional packaging/material detail |

## 14.3 Coffee PDPs

Use the same six-part pattern for each lot.

### Kenya

- `PDP-KENYA-HERO`
- `PDP-KENYA-PACK`
- `PDP-KENYA-ORIGIN`
- `PDP-KENYA-PROCESS`
- `PDP-KENYA-BOTANICAL`
- `PDP-KENYA-RITUAL`

### Burundi

- `PDP-BURUNDI-HERO`
- `PDP-BURUNDI-PACK`
- `PDP-BURUNDI-ORIGIN`
- `PDP-BURUNDI-PROCESS`
- `PDP-BURUNDI-BOTANICAL`
- `PDP-BURUNDI-RITUAL`

### Ethiopia Lot 01

- `PDP-ETH01-HERO`
- `PDP-ETH01-PACK`
- `PDP-ETH01-ORIGIN`
- `PDP-ETH01-PROCESS`
- `PDP-ETH01-BOTANICAL`
- `PDP-ETH01-RITUAL`

### Ethiopia Lot 02

- `PDP-ETH02-HERO`
- `PDP-ETH02-PACK`
- `PDP-ETH02-ORIGIN`
- `PDP-ETH02-PROCESS`
- `PDP-ETH02-BOTANICAL`
- `PDP-ETH02-RITUAL`

## 14.4 Kiln Cup

- `CUP-HERO`
- `CUP-MATERIAL-MACRO`
- `CUP-HAND-SCALE`
- `CUP-RITUAL-POUR`
- `CUP-BUNDLE`
- `CUP-DIMENSION-GRAPHIC` — designed graphic, not AI text

## 14.5 Origins hub

- `ORIGINS-HERO`
- `ORIGINS-S5-PLACEHOLDER`
- `ORIGINS-CARD-KENYA`
- `ORIGINS-CARD-BURUNDI`
- `ORIGINS-CARD-ETHIOPIA`
- `ORIGINS-CURRENT-COFFEES`

## 14.6 Origin dossiers

### Kenya

- `ORIGIN-KENYA-HERO`
- `ORIGIN-KENYA-LANDSCAPE`
- `ORIGIN-KENYA-PROCESS`
- `ORIGIN-KENYA-WORK`
- `ORIGIN-KENYA-BOTANICAL`

### Burundi

- `ORIGIN-BURUNDI-HERO`
- `ORIGIN-BURUNDI-LANDSCAPE`
- `ORIGIN-BURUNDI-PROCESS`
- `ORIGIN-BURUNDI-WORK`
- `ORIGIN-BURUNDI-BOTANICAL`

### Ethiopia

- `ORIGIN-ETHIOPIA-HERO`
- `ORIGIN-ETHIOPIA-LANDSCAPE`
- `ORIGIN-ETHIOPIA-PROCESS`
- `ORIGIN-ETHIOPIA-WORK`
- `ORIGIN-ETHIOPIA-BOTANICAL`

## 14.7 Editions

### Hub

- `EDITIONS-HERO`
- `EDITIONS-KENYA-CARD`
- `EDITIONS-BURUNDI-CARD`
- `EDITIONS-ETHIOPIA-CARD`

### Kenya article

- `EDITION-KENYA-LEAD`
- `EDITION-KENYA-PLACE`
- `EDITION-KENYA-PROCESS`
- `EDITION-KENYA-WORK`
- `EDITION-KENYA-INTERLUDE`

### Burundi article

- `EDITION-BURUNDI-LEAD`
- `EDITION-BURUNDI-PLACE`
- `EDITION-BURUNDI-PROCESS`
- `EDITION-BURUNDI-WORK`
- `EDITION-BURUNDI-INTERLUDE`

### Ethiopia article

- `EDITION-ETHIOPIA-LEAD`
- `EDITION-ETHIOPIA-PLACE`
- `EDITION-ETHIOPIA-PROCESS`
- `EDITION-ETHIOPIA-WORK`
- `EDITION-ETHIOPIA-INTERLUDE`

## 14.8 About

- `ABOUT-HERO-MATERIAL`
- `ABOUT-EARTH`
- `ABOUT-COFFEE`
- `ABOUT-PORTRAIT`
- `ABOUT-RITUAL`
- `ABOUT-CLOSING`

## 14.9 Global/utility

- `GLOBAL-FOOTER-TYPO`
- `GLOBAL-NEWSLETTER-MARK`
- `GLOBAL-EMPTY-BAG`
- `GLOBAL-LEGAL-MARK`

### Asset sensitivity rules

- Geography-specific assets require region-appropriate prompting and later verification.
- Human images must not be presented as real identifiable producers unless they actually are.
- Product images must use consistent fictional packaging and Kiln Cup geometry.
- Designed text/labels should be added manually, not generated inside photographic assets.
- Section 5 may add new interaction-specific assets after its concept is selected.

---

# PART 15 — PAGE-BY-PAGE MOBILE AUDIT

| Experience | Mobile hierarchy / risk | Resolution |
|---|---|---|
| Homepage | Long seven-beat page | Keep Continuum and Kiln sections compact; get products into first third of page |
| Shop | Five large cards can feel repetitive | Vary pacing while preserving card anatomy; no filters |
| Coffee PDP | Purchase controls + long story | Buy module first; sticky bar only after module leaves view; metadata collapsible |
| Kiln Cup PDP | Object story could overtake coffee | Keep page shorter than coffee PDP; strong return-to-coffee CTA |
| Origins | Signature slot could become too heavy | Static three-region fallback must be fully functional |
| Origin dossier | Long educational copy | Short chapters, image breaks, optional factual accordion |
| Editions hub | Only three stories | Treat as Volume 01; one featured + two secondary cards |
| Edition article | Reading fatigue | Narrow measure, image interludes, one contextual commerce moment |
| About | Manifesto repetition | Avoid repeating homepage copy; keep sections concise |
| Cart | Limited viewport | Single primary CTA; no editorial content; one upsell max |
| Mobile menu | Navigation clutter | Four primary links; no permanent harvest rail |
| Footer | Long stacked utility content | Keep to four logical groups; minimal legal preview |

### Mobile interaction rules

- Avoid hover-only affordances.
- Avoid stacking multiple fixed UI layers.
- Respect safe areas.
- Use dedicated mobile imagery when desktop crops fail.
- Reduce or remove ambient motion under `prefers-reduced-motion`.
- Prioritize content order over desktop visual parity.

---

# PART 16 — PAGE-BY-PAGE DESKTOP EXPANSION

| Experience | Desktop opportunity | Keep simple when… |
|---|---|---|
| Homepage | Asymmetric hero, editorial product rhythm, large origin plates | effects compete with product discovery |
| Shop | Horizontal editorial cards, richer hover metadata | hover duplicates visible information |
| Coffee PDP | Image/story column + sticky purchase module | sticky behavior becomes distracting |
| Kiln Cup PDP | Large material/object studies | 3D adds little beyond photography |
| Origins | Signature slot can expand substantially | Section 5 concept is not yet validated |
| Origin dossier | Split editorial plates, margin metadata | reading becomes fragmented |
| Editions hub | One large featured story + two secondary plates | three equal columns feel like generic blog cards |
| Edition article | Wider photo plates, margin notes, occasional pinned imagery | reading measure suffers |
| About | Strong material plates and typographic spacing | it starts feeling like a second homepage |
| Cart | Right-side drawer | no need for spectacle |
| Navigation | Quiet horizontal header | mega-menu unnecessary for tiny catalog |
| Footer | Four-column architectural grid | content count does not justify extra columns |

---

# PART 17 — CONTENT PRODUCTION REALITY CHECK

| Item | Effort | Research need | New assets | Portfolio value | Decision |
|---|---:|---:|---:|---:|---|
| Homepage core | Medium | Low–Medium | Medium | Very High | KEEP |
| Four coffee PDPs | High | Medium | High | High | KEEP, share template |
| Kiln Cup PDP | Medium | Low | Medium | High | KEEP |
| Origins hub | Medium | Medium | Medium | Very High | KEEP |
| Three origin dossiers | High | High | High | High | KEEP, concise |
| Three Edition stories | High | High | High | Very High | KEEP, limit to 3 |
| About | Medium | Medium | Low–Medium | Medium | KEEP, concise |
| Full ecommerce edge cases | Medium | Low | Low | Medium | IMPLEMENT core states only |
| Subscription system | Medium–High | Business decision | Low | Medium | DEFER if not needed |
| Complex scientific visualizations | High | High | High | Low | REMOVE |
| Real producer biographies/interviews | Very High | Very High | Very High | Risky | REMOVE |
| Dedicated dispatch page | Medium | Low | Low | Low | REMOVE |
| Signature interaction | TBD | TBD | TBD | Potentially Very High | SECTION 5 |
| WebGL/3D vessel | High | Low | High | Unclear | SECTION 5 candidate only |
| Full video library | High | Low | High | Medium | DEFER; use selective loops |

---

# PART 18 — SECTION 4C WIREFRAME HANDOFF

## 18.1 Final page list

1. `/` — Homepage
2. `/shop` — Collection
3. `/shop/[coffee-slug]` — Coffee PDP template
4. `/shop/the-kiln-cup` — Kiln Cup PDP
5. `/origins` — Origins hub
6. `/origins/[region-slug]` — Origin dossier template
7. `/journal` — The Editions hub
8. `/journal/[chapter-slug]` — Edition article template
9. `/about` — About / Red Clay thesis
10. Global Cart Drawer
11. Global Mobile Menu
12. Global Footer
13. Checkout is acknowledged as a commerce utility but is not a bespoke Section 4 editorial experience.

## 18.2 Section order

### Homepage
Hero → Continuum → Current Harvest → Origins → Featured Edition → Kiln Cup/Ritual → Dispatch/Footer

### Shop
Collection intro → Five-product editorial list → Dispatch note → Footer

### Coffee PDP
Hero/purchase → Product character → Place/story → Related Edition → Optional metadata → Related products → Footer

### Kiln Cup
Hero/purchase → Material → Scale → Ritual → Pairing → Specs → Return to coffee → Footer

### Origins
Origin thesis → Section 5 slot → Three regions → How to read origin → Current coffees → Editions → Closing → Footer

### Origin dossier
Hero → Place → Coffee context → Processing → Agricultural work → Current coffees → Edition → Reference block → Next region → Footer

### Editions
Opening → Featured Edition → Two secondary Editions → Connected coffees → Archive logic → Future-volume note → Transition → Footer

### Edition article
Masthead → Opening → Geography → Process → Visual interlude → Human/agricultural perspective → Contextual commerce → Sensory reflection → Related origin → Next Edition → Footer

### About
What Red Clay is → Name → Continuum → Why East African origins → Representation → Material design → Coffee philosophy → Closing → Footer

## 18.3 Required reusable components

| Component | Used on | Mobile role | Desktop role |
|---|---|---|---|
| Global Header | all pages | compact sticky/smart-hide | quiet horizontal nav |
| Mobile Menu | global | full-screen navigation | n/a |
| Cart Drawer | global | bottom/full-height sheet | right drawer |
| Product Card | home/shop/origins | vertical | horizontal/editorial variants |
| Product Buy Module | PDPs | inline + optional sticky bar | sticky within section |
| Origin Card | home/origins | stack or snap | large regional plate |
| Edition Card | home/journal/origins | vertical | featured/secondary variants |
| Inline Commerce Card | Edition article | inline / sheet | inline or side card |
| Metadata Block | PDP/origin | accordion/stack | tabular |
| Image Plate | editorial pages | full width | asymmetric/oversized |
| Newsletter Form | home/footer | inline | inline |
| Footer | global | stacked | multi-column |

## 18.4 Mobile-first hierarchy

The exact mobile content order for every page is the section order above. Section 4C should wireframe mobile first before any desktop expansion.

## 18.5 Desktop expansion

Desktop may reinterpret composition but must preserve information hierarchy and task completion.

## 18.6 Required content before high-fidelity design

### Brand copy
- final homepage headline;
- concise About thesis;
- Continuum statements;
- newsletter copy.

### Product copy
- final fictional names;
- tasting notes;
- region/process/variety/elevation fields;
- prices and size;
- purchase options;
- roast/dispatch rules.

### Origin copy
- verified regional descriptions;
- verified terminology and elevation ranges;
- verified cultivar/process context.

### Editions
- three final article titles;
- three article outlines;
- enough draft copy to validate page length.

### Commerce microcopy
- cart states;
- availability;
- sold-out/archive;
- shipping/dispatch;
- error/success.

### Utility/legal
- placeholders only until implementation requirements are known.

## 18.7 Unresolved decisions

| Decision | Recommended default | Blocks 4C? |
|---|---|---|
| Final coffee names | Use generic lot IDs in 4C | No |
| Final prices | Placeholder | No |
| Subscription at launch | Exclude from core wireframe unless explicitly desired | No |
| Final grind options | Generic selector placeholder | No |
| Final roast/dispatch cadence | Placeholder | No |
| Kiln Cup physical specs | Treat as fictional/TBD | No |
| Exact factual origin copy | Fact-check before high-fidelity copy | No |
| Section 5 signature concept | Neutral placeholder | No |
| Final packaging design | Blank geometry / placeholder | No |

## 18.8 Deferred to Section 5

- selection of the signature origin/material interaction;
- map vs non-map decision;
- terrain/elevation interaction;
- advanced scroll choreography;
- WebGL;
- 3D product interactions;
- dynamic material/light effects;
- interaction-specific motion and asset requirements.

No Section 5 candidate is pre-approved by this document.

---

# PART 19 — FACTUAL VERIFICATION NOTES FOR LATER COPY

The corrected architecture intentionally removes or softens claims that were too specific for the available evidence.

Before high-fidelity copy, verify:

1. exact elevation ranges used for each regional page;
2. any station- or lot-specific fermentation duration;
3. any product-specific cultivar claim;
4. Burundi variety claims;
5. precise Guji/Gedeo/Yirgacheffe geographic terminology;
6. any screen-grade or harvest-period claim;
7. any product performance/care claim for the Kiln Cup.

Stable high-level anchors that can inform later fact-checking include:

- Coffea arabica is native to Ethiopia.
- SL28 and SL34 were selected/developed in Kenya.
- Nitisols are an established soil group in Kenya and are important in humid tropical agriculture.

These anchors do not justify deterministic flavor claims.

---

# SECTION 4B COMPLETENESS AUDIT

| Deliverable | Status |
|---|---|
| Homepage blueprint | COMPLETE |
| Shop blueprint | COMPLETE |
| Coffee PDP template | COMPLETE |
| Kiln Cup PDP | COMPLETE |
| Origins landing | COMPLETE |
| Origin dossier template | COMPLETE |
| Editions landing | COMPLETE |
| Edition article template | COMPLETE |
| About page | COMPLETE |
| Cart drawer | COMPLETE |
| Mobile menu | COMPLETE |
| Global footer | COMPLETE |
| Preliminary copy system | COMPLETE FOR WIREFRAMING; NOT FINAL COPY |
| Temporary asset system | COMPLETE FOR WIREFRAMING; FINAL PRODUCTION INVENTORY DEFERRED |
| Mobile audit | COMPLETE |
| Desktop expansion audit | COMPLETE |
| Production reality check | COMPLETE |
| 4C handoff | COMPLETE |
| Signature interaction | INTENTIONALLY DEFERRED TO SECTION 5 |
| Final factual copy | INTENTIONALLY DEFERRED TO HIGH-FIDELITY CONTENT PASS |

**Section 4B is ready to proceed to Section 4C — Low-Fidelity Wireframe Specification.**
