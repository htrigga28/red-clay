# RED CLAY COFFEE — COMMERCE, PRODUCT SPEC & FACT CANON

**Status:** APPROVED WORKING CANON — IMPLEMENTATION AUTHORITY  
**Version:** 1.0  
**Date:** 2026-08-28  
**Precedence:** Read after `PRODUCT_CONTENT_CANON.md` and before implementation copy/assets where the subjects below are concerned.

---

## 1. PURPOSE

This document resolves the commercial and factual fields intentionally deferred during the site-wide copy rewrite:

- operating location and currency;
- prices;
- package formats;
- roast/use positioning;
- checkout behavior;
- delivery and returns;
- Kiln Cup dimensions/material/care;
- decaf process language;
- public coffee variety/process fields;
- geographic distinctions;
- factual language for the three launch Editions.

These are fictional Red Clay brand facts unless explicitly identified as real-world regional facts.

Real-world agricultural claims must still remain supported by the editorial source log.

---

# 2. OPERATING FICTION

## Base

**Nairobi, Kenya**

Red Clay is now canonically presented as a contemporary African coffee house and fictional specialty roastery based in Nairobi.

This is a brand-world decision, not a claim that the portfolio project represents an operating company.

## Public operational line

**Roasted in Nairobi in small batches.**

Where shipping context is required:

**Orders leave the roastery within 1–2 business days.**

Do not invent a street address.

## Currency

**KES / Kenyan Shillings**

Customer-facing price style:

`KES 1,900`

Do not use simultaneous USD conversion in the primary UI.

International checkout may quote another currency later, but currency conversion is out of scope for the current implementation.

---

# 3. PRICING POSITION

Red Clay should sit above mainstream Kenyan retail coffee and within the premium specialty range.

Benchmark context used to set the fictional prices:

- Nairobi specialty roasters commonly sell 250g bags around KES 1,100–1,800.
- Some premium Kenyan specialty offerings reach roughly USD 22–26 per 250g.
- International design-led specialty roasters commonly sit around USD 20–25+ for approximately 250–340g.
- Premium stoneware mugs commonly sit around USD 40–45.

Red Clay should feel premium but still plausible as an African direct-to-consumer brand.

---

# 4. APPROVED RETAIL PRICES

## THE MATERIAL SERIES

| Product | 250g | 1kg |
|---|---:|---:|
| LATERITE | KES 1,600 | KES 5,600 |
| BASALT | KES 1,700 | KES 6,000 |
| LINEN | KES 1,800 | KES 6,400 |

The 1kg price is a format price, not a promotional discount.

Do not display `Save X%`.

---

## CURRENT HARVEST

Current Harvest coffees launch in **250g** only.

| Product | Price |
|---|---:|
| KIAMBU / WASHED 01 | KES 1,950 |
| KIRINYAGA / WASHED 02 | KES 2,100 |
| KAYANZA / WASHED 01 | KES 1,900 |
| KAYANZA / NATURAL 02 | KES 2,050 |
| SIDAMA / WASHED 01 | KES 2,100 |
| GUJI / NATURAL 02 | KES 2,200 |

Do not create fake scarcity or sale pricing.

---

## OTHER WAYS TO DRINK

| Product | Format | Price |
|---|---|---:|
| AFTERLIGHT | 250g | KES 2,200 |
| RED CLAY INSTANT — ETHIOPIA | 6 sachets | KES 2,300 |
| THREE REGIONS | 3 × 100g | KES 2,800 |

`THREE REGIONS` is not positioned as a discounted bundle.

Its value is guided discovery.

---

## OBJECT

| Product | Price |
|---|---:|
| THE KILN CUP | KES 5,900 |

The physical Earthen Folio remains a future product and should not yet display a price or Add-to-Bag action.

---

# 5. FORMAT & GRIND OPTIONS

## Material Series

Sizes:

- 250g
- 1kg

Preparation:

- Whole Bean
- Filter Grind
- Espresso Grind

## Current Harvest

Size:

- 250g

Preparation:

- Whole Bean
- Filter Grind

Do not offer pre-ground espresso on the Current Harvest at launch. These coffees are presented as filter-first seasonal releases, though customers may brew them however they prefer.

## Afterlight

- 250g
- Whole Bean
- Filter Grind
- Espresso Grind

## Instant

- 6 single-serve sachets
- no grind option

## Three Regions

- 3 × 100g
- Whole Bean
- Filter Grind

---

# 6. ROAST POSITIONING

Avoid pretending roast level predicts flavor completely.

Use roast level as practical orientation.

| Product | Roast direction | Primary use |
|---|---|---|
| LATERITE | Medium-light | Filter / batch / espresso |
| BASALT | Medium | Espresso / moka / milk |
| LINEN | Light | Filter / batch |
| KIAMBU / WASHED 01 | Light | Filter-first |
| KIRINYAGA / WASHED 02 | Light | Filter-first |
| KAYANZA / WASHED 01 | Light | Filter-first |
| KAYANZA / NATURAL 02 | Light | Filter-first |
| SIDAMA / WASHED 01 | Light | Filter-first |
| GUJI / NATURAL 02 | Light | Filter-first |
| AFTERLIGHT | Medium-light | Filter / espresso |

For Instant, omit roast level unless production later requires it.

---

# 7. CHECKOUT MODEL

## Status

**APPROVED — PORTFOLIO DEMO CHECKOUT**

Red Clay should have a complete believable ecommerce journey without accepting real payment.

Do not leave a populated Bag as a dead end.

## Bag

Bag should show:

- products;
- selected format;
- selected grind;
- quantity;
- line price;
- subtotal;
- delivery threshold message;
- `Checkout`.

## Checkout route

Create:

`/checkout`

## Required checkout steps

### 1. CONTACT
- email

### 2. DELIVERY
- first name
- last name
- phone
- address
- city/town
- county/region
- country

### 3. DELIVERY METHOD
Resolved after address selection.

### 4. PAYMENT METHOD
Display demo choices:

- M-Pesa
- Card

### 5. REVIEW
- items
- shipping
- subtotal
- total
- `Place demo order`

## Critical disclosure

The checkout page must clearly state:

> **Portfolio demo checkout — no payment is collected and no order is fulfilled.**

Do not ask for or persist real card numbers.

For the Card choice, use a clearly non-sensitive simulated card-state component rather than editable real card-number fields.

For M-Pesa, do not trigger a real STK push.

## Completion

After `Place demo order`, show:

`/checkout/complete`

with a fictional order number generated client-side.

Example:

`RC-260828-1847`

State clearly that the demo order has not been charged or submitted for fulfilment.

Do not persist personal checkout data beyond what is necessary for the current browser session.

---

# 8. SHIPPING CANON

## Kenya

### Nairobi

`KES 300`

Typical presentation:

**Nairobi delivery — 1–2 business days**

### Rest of Kenya

`KES 500`

Typical presentation:

**Kenya delivery — 2–4 business days**

### Free shipping

**Free Kenya delivery at KES 5,000+**

This threshold applies to merchandise total before shipping.

Do not display countdown urgency.

A useful Bag message is:

> `KES 1,250 away from free Kenya delivery.`

Only calculate this when the shipping country is Kenya or before country selection as a clearly Kenya-specific benefit.

## International

Use:

**International delivery calculated at checkout.**

For the current demo checkout, use a fictional flat placeholder only after selecting an international country:

`KES 3,500`

Label it:

**International demo rate**

Do not imply this is a real carrier quotation.

Duties and import taxes are not included.

---

# 9. ORDER / ROAST / DISPATCH LANGUAGE

Approved:

> **Roasted in Nairobi in small batches. Orders leave the roastery within 1–2 business days.**

Do not claim:

- roasted to order;
- a fixed weekly roast day;
- same-day roast;
- guaranteed roast age;

unless later deliberately added to the canon.

---

# 10. RETURN / DAMAGE POLICY

## Coffee

Coffee is final sale because it is a consumable product.

If an order arrives:

- damaged;
- incorrect;
- materially compromised in transit;

the customer may report it within **7 days of delivery** for replacement or refund.

## Kiln Cup

Unused Kiln Cups may be returned within **14 days of delivery**.

Customer is responsible for return shipping for change-of-mind returns.

Damage in transit should be reported within **7 days**, with photographs.

For the portfolio demo, this policy is customer-facing brand canon but there is no actual returns backend.

---

# 11. KILN CUP — FINAL WORKING SPEC

## Product

**THE KILN CUP**

## Price

**KES 5,900**

## Material

**High-fired iron-rich stoneware**

## Exterior

**Exposed red stoneware body**

## Interior

**Warm mineral-white satin glaze**

## Glaze status

Food-contact glaze is canonically:

**lead-free and food-safe**

This is fictional product canon. If a physical prototype is ever manufactured, the claim must be validated by the actual ceramic manufacturer/testing process.

## Form

- gently tapered cylindrical body;
- compact loop handle;
- restrained foot;
- comfortable everyday coffee cup.

## Capacity

**300ml comfortable fill**

**340ml to brim**

## Dimensions

**Approx. 82mm rim diameter × 94mm high**

## Working weight

**Approx. 360g**

Do not create false precision beyond these working specifications.

## Care

Customer-facing approved care:

- Dishwasher safe.
- Microwave safe.
- Avoid open flame, stovetop use, and sudden thermal shock.
- Hand washing is optional if the customer wants to preserve the appearance of the exposed exterior for as long as possible.

## Important production note

These are approved fictional product specifications.

If a real Kiln Cup is ever produced, dimensions, glaze safety, microwave safety, and dishwasher performance must be validated against the final production body/glaze/firing combination.

---

# 12. AFTERLIGHT — DECAF PROCESS

## Public name

**AFTERLIGHT**

## Product label

**ETHIOPIA DECAF**

## Price

**KES 2,200 / 250g**

## Process language

Use:

**Water-process decaf**

Do NOT use `Swiss Water®` as a Red Clay supplier/process claim unless Red Clay later deliberately establishes that fictional vendor relationship.

## Profile

- plum;
- cocoa;
- honey.

## Public character

A full coffee experience without framing decaf as a compromise.

Approved direction:

> Plum, cocoa, and honey for the cup that comes after the day has slowed down.

---

# 13. COFFEE FACT CANON — KENYA

The following are approved fictional lot compositions built from real varieties used in Kenya.

Real variety background is supported by World Coffee Research.

## KIAMBU / WASHED 01

Country:
**Kenya**

Region:
**Kiambu County**

Process:
**Washed**

Varieties:
- SL28
- SL34
- Ruiru 11

Profile:
- Blackcurrant
- Plum
- Cane sugar

Roast:
**Light**

Public factual boundary:

Do not name a farm, factory, cooperative, producer, altitude, or sourcing partner.

Do not claim the current documentary images depict this fictional lot.

---

## KIRINYAGA / WASHED 02

Country:
**Kenya**

Region:
**Kirinyaga County**

Process:
**Washed**

Varieties:
- SL28
- SL34
- Batian

Profile:
- Red currant
- Hibiscus
- Pomelo

Roast:
**Light**

Asset boundary:

Do not label existing Kiambu imagery as Kirinyaga.

This product requires Kirinyaga-appropriate imagery during the asset phase.

---

# 14. KENYA VARIETY FACTS — APPROVED EDITORIAL USE

The following real-world claims are safe when properly sourced:

- SL28 was selected in Kenya at Scott Agricultural Laboratories in the 1930s and has a Bourbon-related genetic background.
- SL34 was selected in Kenya in the late 1930s and has a Typica-like genetic background.
- Ruiru 11 is a compact high-yielding composite F1 hybrid developed and released in Kenya, with resistance/tolerance characteristics connected to coffee berry disease and coffee leaf rust.
- Batian is a Kenyan composite variety released in 2010, developed with resistance to coffee berry disease and coffee leaf rust.

Do not claim every Kenyan farm grows all of these.

Do not use variety to predict exact tasting notes.

---

# 15. WASHED PROCESS — APPROVED EDITORIAL USE

For explanatory writing, basic wet/washed processing may be described as a sequence in which:

- coffee cherry is depulped;
- fermentation helps remove mucilage;
- coffee is washed;
- parchment is then dried.

This is a simplified educational explanation, not a universal recipe.

Processing protocols vary by producer, station, water use, equipment, fermentation method, soaking, drying environment, and target.

Do not claim that washed processing automatically creates a specific flavor.

---

# 16. COFFEE FACT CANON — BURUNDI

## KAYANZA / WASHED 01

Country:
**Burundi**

Region:
**Kayanza Province**

Process:
**Washed**

Variety:
**Red Bourbon**

Profile:
- Red apple
- Honey
- Orange blossom

Roast:
**Light**

---

## KAYANZA / NATURAL 02

Country:
**Burundi**

Region:
**Kayanza Province**

Process:
**Natural**

Variety:
**Red Bourbon**

Profile:
- Raspberry
- Black tea
- Brown sugar

Roast:
**Light**

## Approved editorial context

Real Kayanza specialty coffee examples exist in both washed and natural processing.

Natural Kayanza coffees can legitimately be discussed as whole-cherry coffees dried on raised beds.

Raised-bed drying and washing-station infrastructure are well documented in Kayanza.

Do not claim Red Clay works with any real named washing station.

Do not reuse a real station's exact production story as the fictional product's story.

---

# 17. COFFEE FACT CANON — ETHIOPIA

## Editorial geography rule

The site's `Southern Ethiopia` chapter is a **broad editorial grouping**, not an administrative-region label.

Public product geography must remain specific.

### SIDAMA / WASHED 01

Country:
**Ethiopia**

Region:
**Sidama**

Process:
**Washed**

Variety language:
**Ethiopian landrace selections**

Profile:
- Jasmine
- Yellow peach
- Lemon tea

Roast:
**Light**

### GUJI / NATURAL 02

Country:
**Ethiopia**

Region:
**Guji Zone, Oromia**

Process:
**Natural**

Variety language:
**Ethiopian landrace selections**

Profile:
- Strawberry
- Apricot
- Cacao nib

Roast:
**Light**

## Critical geography correction

Do not write as though Sidama and Guji are one administrative region.

They may be compared together within Red Clay's broad Southern Ethiopia editorial chapter because of the project's storytelling architecture.

## Hawassa imagery

Existing process imagery near Hawassa may remain captioned:

**Near Hawassa, Ethiopia**

Do not relabel it as:

- Guji;
- Yirgacheffe;
- Gedeo;
- a dedicated Sidama farm;
- the location of a fictional Red Clay lot.

---

# 18. ETHIOPIAN DIVERSITY — APPROVED EDITORIAL USE

For `Beyond “Heirloom”`, the following factual direction is approved:

- southwestern Ethiopian montane rainforests are a primary centre of diversity for Coffea arabica and central to the species' origin history;
- Ethiopia contains extensive Arabica genetic diversity;
- `Ethiopian landrace` is a legitimate genetic/variety-group term;
- many commercial Ethiopian lots are mixtures of locally adapted varieties/selections rather than simple single-variety lots;
- `heirloom` is an imprecise commercial shorthand and should not be treated as a precise botanical identification.

Do not turn `landrace` into another equally vague label.

Where a lot's exact genetic identity is unknown, say so.

---

# 19. PROCESS / FLAVOR GUARDRAIL

The fictional tasting notes are approved Red Clay product canon.

The following causal statements remain prohibited:

- washed process causes blackcurrant;
- natural process causes strawberry;
- high elevation causes florality;
- red soil causes fruit notes;
- Bourbon causes honey;
- Guji tastes fruity because it is Guji.

Use process, geography, variety, roast, and harvest as **context**, not deterministic flavor explanations.

---

# 20. ARTICLE FACT STATUS

## WATER & TIME

Approved factual foundations:

- basic wet-process sequence;
- SL28 / SL34 historical selection in Kenya;
- Ruiru 11's Kenyan breeding history;
- process is one variable among many;
- washing should not be reduced to a flavor shorthand.

## ALONG THE KAYANZA HILLS

Approved factual foundations:

- Kayanza specialty coffee is strongly connected to smallholder production and washing-station infrastructure;
- Red Bourbon/Bourbon cultivars are common in Burundi;
- washed and natural coffees are both produced in Kayanza;
- raised drying beds are used;
- natural processing may involve drying whole cherry on raised beds.

Do not generalize one station's timing/protocol to all Kayanza coffee.

## BEYOND “HEIRLOOM”

Approved factual foundations:

- Ethiopia is central to the origin and genetic diversity of Coffea arabica;
- Ethiopian coffee populations contain extensive genetic variation;
- Ethiopian landrace is a legitimate genetic-group term;
- exact variety identification is often more complex than bag labels imply;
- Sidama and Guji should not be treated as universal flavor categories.

---

# 21. ASSET PHASE FACT FLAGS

During the next asset audit, explicitly flag:

- KIRINYAGA / WASHED 02 — dedicated region media needed;
- GUJI / NATURAL 02 — dedicated region media needed;
- SIDAMA / WASHED 01 — current Hawassa/process media is contextual, not a dedicated fictional-lot image;
- all Material Series products — custom packaging/product media needed;
- Afterlight — custom decaf packaging;
- Instant — box + sachet system;
- Three Regions — discovery packaging;
- Kiln Cup — final object renders and dimensional graphic.

Do not solve these by mislabeling current stock photography.

---

# 22. IMPLEMENTATION ORDER

The next Codex correction should:

1. add all approved prices;
2. update format/grind controls;
3. add subtotal calculations;
4. add free-delivery progress copy;
5. implement `/checkout`;
6. implement demo order completion;
7. update Kiln Cup specs/care;
8. update Afterlight to `Water-process decaf`;
9. update public variety/process fields;
10. correct Sidama/Guji geographic language;
11. update metadata and structured product data;
12. keep the site-level fictional-brand disclosure;
13. preserve all current approved visual architecture.

Do not begin the full asset audit until this canon patch is implemented and visually checked.

---

# 23. SOURCE BENCHMARKS / FACT REFERENCES

These references informed the working canon. They are research benchmarks, not Red Clay sourcing partners.

## Pricing / ecommerce benchmarks

- Canyon Coffee — Beachwood, Gedeb, Instant, shipping/cart conventions.
- Onyx Coffee Lab — Monarch, Geometry, Southern Weather, cart conventions.
- THE BARN — Elemental, Genesis, core collection and shipping conventions.
- SEY Coffee — 250g subscription and current coffee transparency pages.
- Terrani Coffee, Nairobi — Kenyan specialty retail pricing and Nairobi delivery.
- Spring Valley / Nairobi retail listings — Kenyan specialty retail pricing.
- East Fork — 10oz high-fired stoneware mug pricing, dimensions and care benchmark.

## Coffee facts

- World Coffee Research — SL28, SL34, Ruiru 11, Batian, Bourbon varieties and Ethiopian landrace definitions.
- Specialty Coffee Association — wet-processing / fermentation explanation.
- Peer-reviewed research on Coffea arabica genetic diversity in Ethiopia.
- Current Kayanza natural/washed green and roasted coffee references from reputable specialty suppliers/roasters.

---

# 24. FINAL STATUS

The following fields are now resolved for portfolio implementation:

- operating city;
- currency;
- all active product prices;
- active product sizes;
- grind options;
- roast direction;
- Kenya delivery model;
- international demo shipping;
- Bag subtotal;
- checkout behavior;
- payment-demo behavior;
- returns policy;
- Kiln Cup price;
- Kiln Cup capacity;
- Kiln Cup dimensions;
- Kiln Cup material;
- Kiln Cup care;
- Afterlight public decaf process;
- Kenya variety compositions;
- Kayanza variety/process fields;
- Sidama/Guji product geography;
- Ethiopian variety wording;
- launch-Edition factual boundaries.

The next unresolved major category is now:

**ASSETS.**
