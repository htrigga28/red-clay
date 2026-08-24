# Red Clay Coffee — Content & Copy Deck Scaffold

**Status:** Structure for final content pass. Provisional copy is preserved only where canonical sources support it. Placeholders must remain visibly unresolved in authoring data; production UI should not expose raw tags.

## Placeholder legend

- `[TBD]` — editorial decision not yet made.
- `[VERIFY]` — factual statement requires authoritative verification.
- `[FICTIONAL PRODUCT DECISION]` — product name/spec/attribute to be invented and approved as fiction.
- `[BUSINESS MODEL DECISION]` — pricing, operations, subscription, shipping, dispatch, inventory, bundle, or policy.
- `[FACT CHECK REQUIRED]` — paragraph/claim cannot publish until checked.

## Global content

### Brand constants

- Brand: `Red Clay`
- Working descriptor: `Contemporary African Coffee House`
- Thesis: `Red Clay is a contemporary African coffee house built around the material character of place.`
- Continuum labels: `Earth`, `Coffee`, `Vessel`, `Ritual`
- Public editorial label: `The Editions`
- Signature label: `The Earthen Folio`

### Navigation

- `Shop`
- `Origins`
- `The Editions`
- `About`
- `Bag ([COUNT])`
- Mobile triggers: `Menu`, `Close menu`, `Close bag`
- Search: `[TBD — NOT REQUIRED AT LAUNCH]`

### Product constants

| Working ID | Final name | Region | Notes | Process | Elevation | Variety | Size | Price | Status |
|---|---|---|---|---|---|---|---|---|---|
| `KENYA LOT 01` | `[FICTIONAL PRODUCT DECISION]` | Central Kenya `[VERIFY]` | blackcurrant / plum / cane sugar `[TBD]` | washed `[VERIFY]` | `[VERIFY]` | `[VERIFY]` | `[BUSINESS MODEL DECISION]` | `[BUSINESS MODEL DECISION]` | `[BUSINESS MODEL DECISION]` |
| `BURUNDI LOT 01` | `[FICTIONAL PRODUCT DECISION]` | Kayanza, Burundi `[VERIFY]` | red apple / honey / orange blossom `[TBD]` | `[VERIFY]` | `[VERIFY]` | `[VERIFY]` | `[BUSINESS MODEL DECISION]` | `[BUSINESS MODEL DECISION]` | `[BUSINESS MODEL DECISION]` |
| `ETHIOPIA LOT 01` | `[FICTIONAL PRODUCT DECISION]` | Southern Ethiopia `[VERIFY]` | `[TBD]` | washed/natural `[VERIFY]` | `[VERIFY]` | `[VERIFY]` | `[BUSINESS MODEL DECISION]` | `[BUSINESS MODEL DECISION]` | `[BUSINESS MODEL DECISION]` |
| `ETHIOPIA LOT 02` | `[FICTIONAL PRODUCT DECISION]` | Southern Ethiopia `[VERIFY]` | `[TBD]` | washed/natural `[VERIFY]` | `[VERIFY]` | `[VERIFY]` | `[BUSINESS MODEL DECISION]` | `[BUSINESS MODEL DECISION]` | `[BUSINESS MODEL DECISION]` |
| `THE KILN CUP` | `The Kiln Cup` | Companion object | raw terracotta / light glazed interior `[FICTIONAL PRODUCT DECISION]` | n/a | n/a | n/a | capacity `[FICTIONAL PRODUCT DECISION]` | `[BUSINESS MODEL DECISION]` | `[BUSINESS MODEL DECISION]` |

## `/` — Homepage

### Hero Encounter

- Eyebrow: `EAST AFRICAN HIGHLAND COFFEES`
- H1 working copy: `Coffee from the highlands of East Africa. Roasted for the stillness of early light.`
- Body working copy: `Four seasonal single-origin releases from Kenya, Burundi, and Ethiopia, presented through place, craft, and the ritual of brewing.`
- Primary CTA: `Explore the Harvest` → `/shop` or Harvest anchor `[TBD]`
- Secondary CTA: `Read the Editions` → `/journal`
- Image alt/caption: `[TBD AFTER ASSET SELECTION]`
- Disclosure risk: “Roasted” implies an operating roastery; confirm fictional-site presentation language `[BUSINESS MODEL DECISION]`.

### The Continuum

- Eyebrow: `THE CONTINUUM`
- H2: `From highland earth to the morning vessel.`
- Earth: `Highland soils, rain, and elevation form the conditions in which coffee grows.` `[FACT CHECK REQUIRED for any added specificity]`
- Coffee: `Washed and natural lots selected for clarity, sweetness, and character.` `[FICTIONAL PRODUCT DECISION]`
- Vessel: `A terracotta companion object designed around the daily brew.`
- Ritual: `The deliberate practice of brewing, holding, and drinking.`
- CTA: none.

### Current Harvest

- Eyebrow: `CURRENT HARVEST // VOL. 01`
- H2: `Four single-origin releases. One companion vessel.`
- Intro: `A concise collection spanning Central Kenya, Kayanza in Burundi, and the southern Ethiopian highlands. Each coffee is presented through origin, process, and sensory character.` `[VERIFY]`
- Card slots: global product constants + `View Coffee`, `Quick Add`, `View Object`.
- Status copy: `Available`, `Limited` `[BUSINESS MODEL DECISION]`, `Harvest Concluded`, `Notify Me` `[BUSINESS MODEL DECISION]`.
- Dispatch line: `[ROAST DAY] / [DISPATCH WINDOW] [BUSINESS MODEL DECISION]`.

### Origin Territories

- Eyebrow: `ORIGIN INDEX`
- H2: `Three East African highland landscapes.`
- Intro: `Central Kenya, Kayanza, and the southern Ethiopian highlands each carry distinct histories of cultivation, processing, landscape, and cup character.` `[FACT CHECK REQUIRED]`
- Central Kenya: title + `[ELEVATION VERIFY]` + 1–2 sentence preview `[FACT CHECK REQUIRED]`.
- Kayanza / Burundi: title + `[ELEVATION VERIFY]` + preview `[FACT CHECK REQUIRED]`.
- Southern Ethiopia: title + `[ELEVATION VERIFY]` + preview `[FACT CHECK REQUIRED]`.
- CTA: `Explore Origins` → `/origins`.

### Featured Edition

- Eyebrow: `HARVEST EDITION // VOL. 01`
- Working title: `Water & Time`
- Working subtitle: `Washed coffee in the Central Kenya highlands.` `[VERIFY]`
- Excerpt: `[TBD — regional processing context; no invented visit/interview or fixed duration]`
- CTA: `Read the Edition` → `[chapter slug TBD]`
- Product CTA: `View Kenya Lot 01` → `[final slug TBD]`

### Kiln Cup / Ritual

- Eyebrow: `THE COMPANION OBJECT`
- H2 working: `Raw terracotta. Mineral-white glaze. A vessel for the daily brew.` `[FICTIONAL PRODUCT DECISION]`
- Body: `The Kiln Cup is a fictional companion object designed around Red Clay’s earth-to-vessel idea: a tactile terracotta exterior, a light glazed interior, and a compact form for filter coffee.`
- CTAs: `View the Kiln Cup`; optional `Pair with Coffee` `[BUSINESS MODEL DECISION]`.

### Dispatch / Newsletter

- H2 working: `Roasted in small batches. Dispatch details, clearly stated.` `[BUSINESS MODEL DECISION]`
- Body: `[ROAST DAY]`, `[DISPATCH WINDOW]`, `[SHIPPING THRESHOLD]`.
- Newsletter title: `Join the Dispatch`
- Newsletter body: `[TBD]`
- Email label: `Email address`
- CTA: `Join the Dispatch`
- Success: `You're on the Dispatch list.`
- Error: `We couldn't add you to the list. Try again.`
- Consent/privacy: `[LEGAL / BUSINESS MODEL DECISION]`

## `/shop` — Collection

### Intro

- Eyebrow: `CURRENT HARVEST // VOL. 01`
- H1: `Single-origin releases and one companion object.`
- Body: `Four coffees from three East African highland regions, presented through concise sensory and origin information.` `[VERIFY]`

### Product list

- Consume global product constants.
- Card CTA: `View Coffee` / `View Object`.
- Quick add: `Quick Add`; option prompt: `Choose a grind before adding.`
- Success: `Added to your bag.`
- Sold out: `Harvest Concluded`; secondary `Read the Edition`, `View Current Coffees`, or `Notify Me` `[BUSINESS MODEL DECISION]`.

### Dispatch note

- Heading/body: `[BUSINESS MODEL DECISION]`
- Do not publish fake urgency, live stock, roast clock, or shipping promise.

## `/shop/[coffee-slug]` — Coffee PDP template

### Level 1: purchase

- Eyebrow: `[REGION] // [ELEVATION VERIFY]`
- H1: `[FICTIONAL PRODUCT DECISION]`
- Notes: `[NOTE 1] • [NOTE 2] • [NOTE 3] [TBD]`
- Price: `[BUSINESS MODEL DECISION]`
- Size options: `[BUSINESS MODEL DECISION]`
- Grind/format options: `[BUSINESS MODEL DECISION]`
- Frequency/subscription: `[BUSINESS MODEL DECISION — OMIT BY DEFAULT]`
- Availability/status: `[BUSINESS MODEL DECISION]`
- Dispatch: `[ROAST DAY] / [DISPATCH WINDOW]`
- CTA: `Add to Bag`
- Validation: `Choose a [size/grind/format] before adding.`
- Error: `We couldn't add this coffee. Try again.`

### Level 2: product character

- H2/sensory statement: `[TBD]`
- Sensory paragraphs: `[TBD — observations, not causal claims]`
- Roast direction: `[FICTIONAL PRODUCT DECISION]`
- Brew recommendation: `[FICTIONAL PRODUCT DECISION / VERIFY if technical]`

### Level 3: place and story

- Region introduction: `[FACT CHECK REQUIRED]`
- Landscape paragraph: `[FACT CHECK REQUIRED]`
- Process context: `[FACT CHECK REQUIRED]`
- Origin CTA: `Explore [Region]`
- Edition CTA: `Read the Related Edition`

### Level 4: optional metadata

- Heading: `Coffee Details` or `[TBD]`
- Region `[VERIFY]`; elevation `[VERIFY]`; variety `[VERIFY]`; process `[VERIFY]`; harvest period `[VERIFY]`; roast `[FICTIONAL PRODUCT DECISION]`; storage `[TBD]`; grade only if useful/verified.

### Related

- Heading: `Related Coffees` or `[TBD]`
- Maximum three product entries; relationship rule `[TBD]`.

## `/shop/the-kiln-cup`

### Hero / purchase

- Eyebrow: `COMPANION OBJECT`
- H1: `The Kiln Cup`
- Body working: `A fictional handleless terracotta cup developed as Red Clay’s companion object: raw exterior texture, light glazed interior, and a compact form intended for filter coffee.`
- Price/status: `[BUSINESS MODEL DECISION]`
- CTA: `Add to Bag`

### Form and material

- H2: `Clay outside. Glaze within.`
- Body: `[FICTIONAL PRODUCT DECISION]`

### Scale / hand feel

- H2/body/caption: `[TBD — visual scale; no ergonomic performance claim]`

### Ritual

- H2/body: `[TBD — coffee use without safety/heat claims]`

### Pairing

- Heading: `[TBD]`
- CTA: `Pair with a Coffee`
- Bundle contents/discount: `[BUSINESS MODEL DECISION]`

### Care/specification

- Capacity, dimensions, weight, material: `[FICTIONAL PRODUCT DECISION]`
- Food safety, dishwasher status, care, durability: `[VERIFY / REQUIRES MATERIAL TESTING]`
- Return CTA: `Back to the Collection`.

## `/origins` — Origins hub

### Thesis

- Eyebrow: `ORIGIN INDEX`
- H1: `Three highland regions. Three ways into the coffee.`
- Body: `Red Clay’s launch world is organized around Central Kenya, Kayanza in Burundi, and the southern Ethiopian highlands. Each region is introduced through landscape, cultivation and processing context, current coffee, and editorial story.` `[FACT CHECK REQUIRED]`

### Earthen Folio chapter model

For each chapter provide:

- `chapterNumber`
- `regionName`
- `country`
- `shortDescriptor [TBD]`
- `elevationLabel [VERIFY]`
- `placeStatement [FACT CHECK REQUIRED]`
- `processContext [FACT CHECK REQUIRED]`
- `cupNotes [TBD]`
- `primaryCoffeeLabel [FICTIONAL PRODUCT DECISION]`
- `dossierHref`
- `altText [AFTER ASSET]`

CTAs: `Explore Central Kenya`, `Explore Kayanza`, `Explore Southern Ethiopia`.

### How to Read an Origin

- H2: `How to read an origin`
- Place: `[TBD]`
- Variety: `[TBD / FACT CHECK REQUIRED]`
- Process: `[TBD / FACT CHECK REQUIRED]`
- Cup: `[TBD — sensory description]`
- Closing caution: do not present fields as a deterministic formula.

### Current coffees / Editions / close

- Product/card copy from global constants.
- Edition titles/excerpts: `[TBD]`
- CTA: `Shop the Current Harvest`.

## `/origins/[region-slug]` — Dossier template

### Required slots

1. Regional hero: region/country, descriptor, elevation `[VERIFY]`.
2. Place & landscape: 1–2 chapters `[FACT CHECK REQUIRED]`.
3. Coffee context: history/agricultural framing `[FACT CHECK REQUIRED]`.
4. Processing traditions: regional, non-universal language `[FACT CHECK REQUIRED]`.
5. Agricultural work: agency/skill-focused copy; no invented person `[FACT CHECK REQUIRED]`.
6. Current Red Clay coffees: fictional product data.
7. Related Edition: title/excerpt `[TBD]`.
8. Factual reference block: sources/citations `[TBD]`.
9. Next region: normal navigation.

### Region-specific open items

- Central Kenya: Nyeri/Kirinyaga precision, elevations, SL28/SL34 context, processing terminology `[VERIFY]`.
- Kayanza/Burundi: elevation, smallholder/washing-station terminology, Bourbon-related varieties, `colline` use `[VERIFY]`.
- Southern Ethiopia: Guji/Gedeo/Yirgacheffe geography, landrace terminology, forest/garden systems, washed/natural scope `[VERIFY]`.

## `/journal` — The Editions

- Eyebrow: `THE EDITIONS // VOL. 01`
- H1: `[TBD]`
- Intro: `[TBD — three launch chapters]`
- Featured Edition: `Water & Time` provisional; subtitle/excerpt `[VERIFY/TBD]`.
- Burundi Edition title/subtitle/excerpt: `[TBD]`.
- Ethiopia Edition title/subtitle/excerpt: `[TBD]`.
- Reading time: `[TBD — derive from final manuscript, not invent]`.
- Connected coffee labels: `[FICTIONAL PRODUCT DECISION]`.
- Archive/future volume copy: `[TBD — do not simulate existing archive]`.

## `/journal/[chapter-slug]` — Edition article

### Manuscript slots

1. Volume/region label.
2. H1 title and descriptive subtitle.
3. Standfirst/opening thesis.
4. Geographic context `[FACT CHECK REQUIRED]`.
5. Process/craft chapter `[FACT CHECK REQUIRED]`.
6. Image/caption interlude `[AFTER ASSET / FACT CHECK REQUIRED]`.
7. Human/agricultural agency chapter `[FACT CHECK REQUIRED; NO FAKE INTERVIEW]`.
8. Contextual product card `[FICTIONAL PRODUCT DECISION / BUSINESS MODEL DECISION]`.
9. Sensory/roastery reflection `[TBD; avoid real operating claim unless framed]`.
10. Related origin CTA.
11. Next Edition CTA.

## `/about`

1. **What Red Clay is:** thesis; fictional portfolio framing `[TBD presentation level]`.
2. **Why the name:** earth + fired vessel; avoid universal soil claims `[FACT CHECK REQUIRED]`.
3. **Continuum:** canonical four beats.
4. **Why East African origins:** culturally grounded rationale `[FACT CHECK REQUIRED]`.
5. **Representation and agency:** anti-paternalism stance; no claim of real relationships.
6. **Material/design philosophy:** laterite, basalt, bone, linen, terracotta.
7. **Coffee/roasting philosophy:** sensory + factual specificity; operational language `[BUSINESS MODEL DECISION]`.
8. **Closing:** `[TBD]`; CTA `Explore the Harvest`.

## Cart states

| State | Required copy |
|---|---|
| Empty | `Your bag is currently empty.` + `Explore the Harvest` |
| Added | `Added to your bag.` |
| Option missing | `Choose a grind before adding.` or field-specific equivalent |
| Quantity update | `Quantity updated.` `[optional live announcement]` |
| Update error | `Unable to update quantity. Try again.` Preserve contents. |
| Concluded item | `Harvest Concluded` + `Remove Item` |
| Loading | Accessible `Updating your bag…` status; visual skeleton not sole signal |
| Subtotal | `Subtotal` + `[PRICE]` |
| Shipping/dispatch | `[BUSINESS MODEL DECISION]` |
| Checkout | `Continue to Checkout` |
| Coffee + Cup | Normal line items; discount text only after `[BUSINESS MODEL DECISION]` |

## Error, empty, and utility states

- Page not found: heading/body/links `[TBD]`.
- Product unavailable: `This release is not currently available.` + current harvest path `[BUSINESS MODEL DECISION]`.
- Image failure: no user-facing claim required; text/CTA remain.
- Newsletter invalid email: `Enter a valid email address.`
- Newsletter error: `We couldn't add you to the list. Try again.`
- Cart load failure: `[TBD — recover/refetch behavior must be truthful]`.
- No-JS Folio: normal region cards/chapters and dossier links; no error wording.
- Offline/connection: `[TBD if app implements offline messaging]`.

## Footer / legal / disclosure placeholders

- Brand descriptor and copyright year.
- Shop, Origins, The Editions, About.
- Shipping `[BUSINESS MODEL DECISION]`.
- Returns `[BUSINESS MODEL DECISION]`.
- Privacy/terms/cookies `[LEGAL DECISION]`.
- Sourcing/project disclosure `[TBD — must clarify fictional portfolio context where required]`.
- Social links `[BUSINESS MODEL DECISION]`.
- Newsletter consent/privacy link `[LEGAL DECISION]`.

## Final-copy readiness checklist

- Final fictional names and slugs approved.
- All product/operating fields resolved or intentionally removed.
- Regional facts cited and checked.
- No real producer/station relationship implied.
- No universal duration or causal soil/elevation/flavor claim.
- Edition manuscripts complete enough to validate page length.
- Image captions/alt text written against final assets.
- Cart, newsletter, product, and 404 states covered.
- Fictional project disclosure and legal placeholder strategy approved.
