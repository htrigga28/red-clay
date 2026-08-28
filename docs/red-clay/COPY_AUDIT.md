# Red Clay Coffee — Site-Wide Copy Audit

**Status:** SITE-WIDE COPY AUDIT — EDITORIAL REVIEW REQUIRED
**Audit date:** 2026-08-28
**Scope:** Current implemented customer-facing copy only. No UI copy was changed in this pass.

## 1. Executive Summary

Red Clay has a clear voice and a strong editorial identity. Its best copy is calm, tactile, specific, and useful. The main problem is not a lack of good lines. The main problem is that too many lines repeat the same brand ideas or explain internal production safeguards to the customer.

The audit covered 17 routes and all shared customer-facing surfaces. The rendered route sample contained 908 text instances. It contained 277 unique main-content text blocks after repeated global header and footer copy was removed. The audit also covered metadata, alt text, captions, empty states, bag announcements, navigation labels, mega menus, product controls, and visible placeholder text.

The most important findings are:

1. Unresolved product, regional, and Kiln Cup facts appear as finished customer claims.
2. Internal asset, provenance, fictional-product, and creative-direction language appears on customer pages.
3. Product pages do not yet give enough information for a confident choice.
4. Ethiopia Lot 01 and Ethiopia Lot 02 are not sufficiently different.
5. Dossiers and coffee pages reveal their templates through exact repeated prose.
6. The words and ideas around place, process, attention, material, quiet, and chapters have reached diminishing returns.
7. The site uses 141 customer-facing action labels. `View` is the most common action verb.
8. The Origins hub repeats much of the dossier copy before the visitor enters a dossier.
9. The Edition articles are attractive summaries, but they do not yet deliver the depth implied by “substantial stories.”
10. About is the right home for philosophy, but parts of it read as an internal representation and art-direction policy.

### Audit totals

| Measure | Result |
| --- | ---: |
| Routes audited | 17 |
| Rendered route-level text instances | 908 |
| Unique main-content text blocks | 277 |
| Visible action labels | 113 |
| Product-media accessibility action labels | 28 |
| Total customer-facing action labels | 141 |
| Meaningful exact repetition groups for review | 14 |
| Major conceptual repetition clusters | 7 |
| P0 issues | 5 |
| P1 issues | 12 |
| P2 issues | 13 |
| P3 issues | 6 |
| Total issues in the issue register | 36 |

The counts are editorial prioritization tools. They are not claims of mathematical copy quality.

## 2. Method

The implementation was the primary source. The audit inspected:

- all route components under `src/app`;
- shared navigation, footer, bag, product, origin, and Edition components;
- `src/content/coffees.ts`, `src/content/origins.ts`, `src/content/editions.ts`, `src/content/homeHero.ts`, and `src/content/navigation.ts`;
- customer-facing asset alt text and placeholder text in `src/lib/assets/registry.ts`;
- metadata in route and layout files;
- the canonical copy scaffold, master implementation brief, source-of-truth registry, brand direction, asset lock, and asset map.

All 17 routes were rendered locally. The rendered output was used to count text instances and action labels. Automated matching supported the exact-repetition and CTA counts. Editorial judgment determined whether repetition was useful, intentional, or harmful.

### Count rules

- A copy block is one rendered heading, paragraph, label, caption, term, helper message, action label, or significant control label.
- The 908 total counts a shared header and footer on every rendered route because a visitor encounters them on every route.
- The 277 unique-main-block total removes global header and footer repetition and de-duplicates identical main-content strings.
- CTA counts exclude global header and footer navigation. They include content links, commerce buttons, linked content cards, and customer-facing `aria-label` values on product-media links.
- Normal shared UI terms such as `Shop`, `Bag`, `Close`, and quantity controls are not treated as editorial repetition faults.

### Motif versus redundancy

A motif creates recognition and returns in a new context. A redundancy repeats the same idea without adding information or changing the visitor’s next decision. `Earth → Coffee → Vessel → Ritual` is a valid motif. Repeating the same Edition summary six times is redundancy.

## 3. Site-Wide Copy Inventory Summary

### Route coverage and rendered block counts

| Route | Main copy job | Rendered blocks | Primary source |
| --- | --- | ---: | --- |
| `/` | Brand entry, desire, routing | 83 | `src/app/page.tsx`, `HeroCarousel.tsx`, content files |
| `/shop` | Collection choice | 52 | `src/app/shop/page.tsx`, `ProductCard.tsx` |
| `/shop/kenya-lot-01` | Kenya product choice | 60 | `CoffeePdp.tsx`, `coffees.ts` |
| `/shop/burundi-lot-01` | Burundi product choice | 56 | `CoffeePdp.tsx`, `coffees.ts` |
| `/shop/ethiopia-lot-01` | Ethiopia product choice | 59 | `CoffeePdp.tsx`, `coffees.ts` |
| `/shop/ethiopia-lot-02` | Ethiopia product choice | 59 | `CoffeePdp.tsx`, `coffees.ts` |
| `/shop/the-kiln-cup` | Companion object and return to coffee | 37 | `src/app/shop/[coffee-slug]/page.tsx` |
| `/origins` | Region index and exploration | 100 | `src/app/origins/page.tsx`, `OriginFolio.tsx`, `origins.ts` |
| `/origins/central-kenya` | Central Kenya dossier | 52 | `OriginDossier.tsx`, `origins.ts` |
| `/origins/kayanza-burundi` | Kayanza dossier | 52 | `OriginDossier.tsx`, `origins.ts` |
| `/origins/southern-ethiopia` | Southern Ethiopia dossier | 55 | `OriginDossier.tsx`, `origins.ts` |
| `/journal` | Edition entry and selection | 41 | `src/app/journal/page.tsx`, `editions.ts` |
| `/journal/water-and-time` | Central Kenya story | 42 | `EditionArticle.tsx`, `editions.ts` |
| `/journal/along-the-kayanza-hills` | Burundi story | 42 | `EditionArticle.tsx`, `editions.ts` |
| `/journal/canopy-and-landrace` | Ethiopia story | 45 | `EditionArticle.tsx`, `editions.ts` |
| `/about` | Brand thesis and philosophy | 48 | `src/app/about/page.tsx` |
| `/bag` | Cart review and empty state | 25 | `BagPageView.tsx`, `CartDrawer.tsx`, `BagProvider.tsx` |

### Shared copy inventory

| Surface | Customer-facing copy | Source | Shared? |
| --- | --- | --- | --- |
| Desktop header | `Skip to content`; `RED CLAY`; `Shop`; `Origins`; `The Editions`; `About`; `Bag (count)` | `src/components/navigation/Header.tsx` | Yes |
| Shop mega menu | `COFFEE / OBJECT`; `All shop`; four coffee IDs; `THE KILN CUP`; `FEATURED`; `Current harvest` | `Header.tsx`, `navigation.ts` | Yes |
| Origins mega menu | `THREE CHAPTERS`; `All origins`; three region names; `The Earthen Folio`; `FEATURED` | `Header.tsx`, `navigation.ts` | Yes |
| Mobile navigation | `RED CLAY / NAVIGATION`; primary navigation; `Bag`; `Close menu`; open/close labels | `Header.tsx` | Yes |
| Product cards | Product ID; region; notes if present; `View coffee` or `View the object`; optional `Add to bag`; product-media accessibility label | `ProductCard.tsx`, `coffees.ts` | Yes |
| Product placeholder | `RED CLAY`; product ID; visible `Material study`; product role has the product name | `ProductMediaPlaceholder.tsx` | Yes |
| Bag drawer | `BAG`; `Your selections (count)`; `Close`; count; quantity controls; `Remove`; holding note | `CartDrawer.tsx` | Yes |
| Empty bag | `EMPTY BAG`; `Your bag is quiet for now.`; `Add a coffee or the companion object to begin.`; `Explore the harvest` | `CartDrawer.tsx` | Yes |
| Bag announcements | `[product] added to your bag.`; `[product] removed from your bag.` | `BagProvider.tsx` | Yes |
| Footer | `RED CLAY`; `Contemporary African Coffee House`; `Coffee, place, vessel, and ritual.`; navigation; Dispatch note; copyright; `East African highland coffees` | `Footer.tsx` | Yes |

The detailed route inventory is in section 15.

## 4. Copy Worth Protecting

### Strong headlines

- **KEEP:** `Coffee, held by place.` It states the brand idea in four words and still identifies coffee.
- **KEEP:** `Three highland regions. Three ways into the coffee.` It is direct, structured, and useful.
- **KEEP:** `Clay outside. Glaze within.` It is concise and tactile. Keep only after the material specification is approved.
- **KEEP:** `Clarity before spectacle.` It is a strong brand principle in the correct About context.
- **KEEP:** `Water & Time` and `Along the Kayanza Hills`. Both titles are distinct and easy to remember.

### Strong product and regional language

- **KEEP, VERIFY:** `A bright, fruit-led cup with a clear sweetness.` This gives a clear sensory direction.
- **KEEP, VERIFY:** `Blackcurrant / plum / cane sugar` and `Red apple / honey / orange blossom`. These are the strongest decision aids on the collection page.
- **KEEP, VERIFY:** `Coffee plants and red soil shape the Central Kenya context used for this release.` It is concise and product-linked.
- **KEEP:** `Three locations, kept distinct.` It states the Burundi provenance discipline without a long disclaimer.
- **KEEP:** `Sorting work, seen near Hawassa.` It is specific, restrained, and honest about the image.

### Strong actions

- **KEEP:** `Shop the Current Harvest` on the Origins close. The action matches the journey.
- **KEEP:** `Pair with a current coffee` on the Kiln Cup page. It protects the coffee-first hierarchy.
- **KEEP:** Region-specific actions such as `Explore Central Kenya` on the Folio.
- **KEEP:** `Back to the harvest` and `Back to the Folio`. Both give clear orientation.

### Strong recurring motif

- **KEEP AND LIMIT:** `Earth → Coffee → Vessel → Ritual`. It is the clearest brand system. Give its full explanation to About. Use only short echoes on Home and the Kiln Cup page.

## 5. Top 10 Problems

### #1 — Unresolved facts appear as approved product and commercial copy

**Affected:** Home, Shop, all PDPs, Origins, dossiers, Editions, Kiln Cup, Bag
**Severity:** P0
**Classification:** VERIFY
**Problem:** The canonical copy deck marks region, sensory notes, Kenya’s washed process, all final product attributes, pricing, availability, and Kiln Cup specifications as unresolved or subject to approval. The implementation publishes many of them as finished facts and allows `Add to bag`.
**Strategy:** Resolve the business and fact-check decisions before the rewrite. Keep unresolved fields absent or clearly non-commercial in any public preview.

### #2 — Customer copy explains internal safeguards and implementation state

**Affected:** Shop, PDPs, dossiers, Edition articles, About, Kiln Cup
**Severity:** P1
**Classification:** REWRITE / REMOVE
**Examples:** `The object study keeps the contrast visible without turning an unresolved product detail into a production claim.`; `The current visual record is process-led`; `with provenance kept close to the image`; `The current release is a fictional Red Clay product expression`.
**Strategy:** Keep provenance and fictional-project controls in documentation, captions where disclosure is required, or a clear portfolio disclosure. Do not make each content section explain the production process.

### #3 — Coffee pages do not yet support a confident choice

**Affected:** Shop and all four coffee PDPs
**Severity:** P1
**Classification:** REWRITE / VERIFY
**Problem:** The purchase modules omit price, size, availability, roast, format, and other approved decision details. Two products have no tasting-note list. Most of the remaining page explains imagery or brand context.
**Strategy:** Resolve approved product facts, then order copy as identity → sensory character → purchase facts → place/process → deeper story.

### #4 — Ethiopia Lot 01 and Ethiopia Lot 02 are not meaningfully distinct

**Affected:** Shop, both Ethiopia PDPs, Southern Ethiopia dossier, `Canopy & Landrace`
**Severity:** P1
**Classification:** DIFFERENTIATE / VERIFY
**Problem:** Both products use the same region, the same place paragraph, the same process-detail section, the same ritual section, and no tasting-note list. Their sensory lines differ, but both use `process-led`, `sorting`, `attention`, and `open/tactile` language.
**Strategy:** Approve a distinct product basis for each lot before rewriting. Do not invent the distinction from current imagery.

### #5 — Shared templates repeat entire explanatory paragraphs

**Affected:** Four PDPs, three dossiers, three Edition articles
**Severity:** P1
**Classification:** CONSOLIDATE / DIFFERENTIATE
**Problem:** The same provenance, process, agricultural-work, ritual, and related-origin paragraphs repeat on every template instance. The customer sees the scaffold.
**Strategy:** Use one concise site-level disclosure. Replace template prose with region- or product-specific information only where supported.

### #6 — The Origins hub duplicates the dossiers

**Affected:** `/origins` and all dossier routes
**Severity:** P1
**Classification:** CONSOLIDATE
**Problem:** The Folio already contains full place, process, and cup paragraphs. The Territories section then repeats summaries and links. The dossier repeats the same source strings again.
**Strategy:** Let the hub compare and route. Reserve full regional explanation for dossiers. Reassess whether the post-Folio Territories section earns its place.

### #7 — Edition summaries substitute for narrative progression

**Affected:** Home, Origins, Journal, Kenya PDP, dossiers, Edition articles
**Severity:** P1
**Classification:** REWRITE / CONSOLIDATE
**Problem:** The `Water & Time` summary appears six times. The Burundi and Ethiopia summaries each appear three times. Article openings repeat the archive summary instead of advancing the story.
**Strategy:** Use a short archive deck, a different article standfirst, and contextual related-content copy. Do not reuse one string for all three jobs.

### #8 — The dominant lexicon has become self-referential

**Affected:** 16 of 17 routes
**Severity:** P2
**Classification:** TIGHTEN / DIFFERENTIATE
**Problem:** `place`, `process`, `context`, `sorting`, `attention`, `held`, `close`, `quiet`, `chapter`, and `material` appear across most route families. The language explains Red Clay’s editorial system more often than it helps the visitor notice a coffee.
**Strategy:** Keep the strongest brand uses on Home and About. Use concrete product, regional, and reader-orientation language elsewhere.

### #9 — Product-card actions create unnecessary CTA volume

**Affected:** Home, Shop, PDP related grids, Origins, dossiers
**Severity:** P1
**Classification:** CONSOLIDATE
**Problem:** The site has 66 `View` action labels when visible and accessibility labels are counted. On Home, each product card has two visible `View coffee` actions plus a linked media target.
**Strategy:** Give each product card one clear visible action. Keep a precise accessible name on the linked media only if the media remains a separate target.

### #10 — Several pages claim an editorial depth that the copy does not deliver

**Affected:** Journal and all three Edition articles
**Severity:** P1
**Classification:** REWRITE
**Problem:** The archive promises `Three substantial stories`, but each article has two short narrative paragraphs, one release paragraph, and repeated related-content scaffolding. `OPENING THESIS`, `PLACE / CONTEXT`, and `PROCESS / CRAFT` sound more like a content template than an authored story.
**Strategy:** Decide whether these are short essays or full Editions. Then align the archive promise, labels, and article depth.

## 6. Exact Repetition

### Repetition groups worth review

| Phrase or pattern | Count | Locations | Classification | Severity | Assessment |
| --- | ---: | --- | --- | --- | --- |
| `A study of water, sorting, and the clear sweetness held in a Central Kenya release.` | 6 | Home; Kenya PDP; Origins; Central Kenya dossier; Journal; `Water & Time` | Accidental content reuse | P1 | One summary performs six different jobs. |
| `The chapter returns to the daily brew without presenting this vessel as The Kiln Cup.` | 4 | All coffee PDPs | Template repetition | P1 | Internal asset clarification replaces product-specific ritual copy. |
| Kenya sensory statement | 3 | Twice on Kenya PDP; `Water & Time` commerce | Shared data overexposure | P2 | The PDP repeats its own strongest line. |
| Burundi sensory statement | 3 | Twice on Burundi PDP; Burundi article commerce | Shared data overexposure | P2 | Same issue. |
| Ethiopia Lot 01 sensory statement | 3 | Twice on its PDP; Ethiopia article commerce | Shared data overexposure | P2 | Same issue. |
| Ethiopia Lot 02 sensory statement | 3 | Twice on its PDP; Ethiopia article commerce | Shared data overexposure | P2 | Same issue. |
| `Process language stays specific to the image and the approved context...` | 3 | All dossiers | Template repetition | P1 | Internal editorial control appears as customer prose. |
| `People and work remain visible as context...` | 3 | All dossiers | Template repetition | P1 | Flattens three regions into one policy statement. |
| `The editorial chapter and the regional dossier share one visual record...` | 3 | All Edition articles | Template repetition | P1 | Explains component/content reuse rather than story value. |
| Burundi Edition summary | 3 | Journal; Burundi dossier; Burundi article | Accidental content reuse | P2 | Archive, related module, and opening need different jobs. |
| Ethiopia Edition summary | 3 | Journal; Ethiopia dossier; Ethiopia article | Accidental content reuse | P2 | Same issue. |
| Ethiopia place paragraph | 2 | Both Ethiopia PDPs | Product interchangeability | P1 | The products need a supported difference. |
| `People, material, and patient process keep the release grounded...` | 2 | Both Ethiopia PDPs | Product interchangeability | P1 | Same section and body on both products. |
| Origin place/process/summary strings reused from Folio to dossier | 2 each | Origins hub and matching dossier | Structural reuse | P2 | Useful source consistency, but weak page progression. |

### Intentional repetition that should not be treated as a fault

- `Add to bag`, quantity controls, `Remove`, and standard navigation labels are normal shared UI.
- Product IDs, regions, and approved tasting notes should stay consistent.
- `Earth → Coffee → Vessel → Ritual` can recur as a limited brand motif.
- `The Editions`, `The Earthen Folio`, and `Current Harvest` can be stable public labels after terminology decisions are confirmed.

## 7. Conceptual Repetition

Automated clustering found the following scale. Counts show rendered instances, then unique blocks and route coverage.

| Concept | Instances | Unique blocks | Routes | Assessment | Recommendation |
| --- | ---: | ---: | ---: | --- | --- |
| Place / process / context / sorting / attention / work | 127 | 82 | 16 | Core subject, but overused as abstract framing | Replace generic uses with supported specifics or remove them. |
| Material / ritual / earth / vessel / clay / object | 103 | 59 | 17 | Valid motif with too much site-wide spread | Concentrate full philosophy on About and Home. |
| Chapter / Edition / dossier / Folio / monograph / story / archive | 78 | 47 | 13 | Publication identity is clear but over-signalled | Use the proper content name; remove metaphor where plain orientation is better. |
| Held / close / quiet / stillness / calm | 61 | 42 | 15 | Cadence has become predictable | Protect two or three anchor uses; rewrite or remove derivatives. |
| Fictional / approved / provenance / archive / claim / replaceable | 29 | 22 | 14 | Mostly internal language | Move to documentation or one disclosure system. |
| Morning / early light / daily brew / ritual / stillness | 24 | 17 | 10 | Recognizable motif, now near saturation | Reserve strongest early-light line for About or Home, not both. |
| Rhythm / geometry / structure / layers / frame / architecture | 20 | 17 | 8 | Often describes layouts or images instead of coffee | Use only when it communicates a real regional or process distinction. |

### Generic editorial copy test

| Copy | Why it is generic | Failed section job | Recommendation |
| --- | --- | --- | --- |
| `A quiet domestic close.` | Could lead a design, interiors, or lifestyle feature | Does not add brew or product information | REMOVE or replace with useful brew context after approval. |
| `At close range.` | Could introduce any detail image | Does not explain Ethiopia Lot 01 or 02 | REMOVE or make product-specific. |
| `A chapter written in layers.` | Describes editorial composition, not Kayanza | Does not deepen regional understanding | REWRITE. |
| `A quieter object study.` | Describes page art direction | Does not answer scale or hand-feel questions | REWRITE after product facts are approved. |
| `Three substantial stories, held close to the current Red Clay world.` | Makes an unsupported quality claim and uses house vocabulary | Does not help the reader choose a story | TIGHTEN with distinct story value. |
| `The world around the cup is quiet, tactile, and useful.` | Could appear on many premium lifestyle sites | Does not explain the material system by itself | Keep only with the concrete list that follows, or consolidate. |
| `A close reading, without overclaiming.` | Describes editorial intent | Does not provide the factual reference promised by the section | REWRITE or REMOVE. |

## 8. CTA Audit

### CTA totals

| Action family | Count | Notes |
| --- | ---: | --- |
| View | 66 | 38 visible labels plus 28 product-media accessibility labels |
| Read | 23 | Includes three `Read next` labels |
| Add | 22 | All are `Add to bag`; no price is shown |
| Explore | 14 | Mostly origin and harvest transitions |
| Back | 7 | Four harvest returns and three Folio returns |
| Shop | 1 | `Shop the Current Harvest` |
| Meet | 1 | `Meet the Kiln Cup` |
| Pair | 1 | `Pair with a current coffee` |
| Return | 1 | `Return to coffee` |
| Non-verb content links | 5 | Three connected-coffee links and two Edition-title links |
| **Total** | **141** | Excludes global header/footer navigation |

### Most repeated exact labels

| Label | Count | Quality |
| --- | ---: | --- |
| `View coffee` | 36 visible | ACCEPTABLE in isolation; excessive because cards repeat it |
| Product-media `View [product ID]` | 28 accessibility labels | STRONG accessible naming; review separate-target need |
| `Add to bag` | 22 | CLEAR, but commercial state is unresolved |
| `Read the Edition` | 9 | ACCEPTABLE; generic in repeated related modules |
| `Explore the origin` | 7 | ACCEPTABLE; could name the destination region |
| `Back to the harvest` | 4 | STRONG |
| `Back to the Folio` | 3 | STRONG |
| `Read the chapter` | 3 | GENERIC; destination is a dossier, not an Edition |
| `Read the dossier` | 3 | CLEAR but repeated after the Folio already links to the same pages |
| `Read next` | 3 | ACCEPTABLE because the next title is adjacent |
| `Explore the harvest` | 2 | ACCEPTABLE; `Shop` is clearer on commerce surfaces |

### Route and destination inventory

Grouped counts represent every rendered instance.

| Route | Label and count | Destination |
| --- | --- | --- |
| `/` | `Explore the harvest` ×1 | `/shop` |
| `/` | `Read the origins` ×1 | `/origins` |
| `/` | `View coffee` ×8 plus product-media labels ×4 | Four PDPs; two visible actions and one media label per card |
| `/` | `Read the chapter` ×3 | Three dossiers |
| `/` | `Read the Edition` ×1 | `/journal/water-and-time` |
| `/` | `Meet the Kiln Cup` ×1 | `/shop/the-kiln-cup` |
| `/` | `Read the Editions` ×1 | `/journal` |
| `/shop` | `Add to bag` ×5 | Bag drawer; four coffees and Cup |
| `/shop` | `View coffee` ×4; `View the object` ×1; media labels ×4 | Five PDPs; Cup media label is supplied by a non-linked placeholder |
| Each coffee PDP | Purchase `Add to bag` ×1; `Back to the harvest` ×1; `Explore the origin` ×1 | Bag; `/shop`; matching dossier |
| Kenya PDP | `Read the Edition` ×1 | `/journal/water-and-time` |
| Each coffee PDP | Related products: `Add to bag` ×3; `View coffee` ×3; media labels ×3 | Bag and three related PDPs |
| Kiln Cup | `Add to bag`; `Return to coffee`; `Pair with a current coffee`; `View current coffees` | Bag; `/shop`; Kenya PDP; `/shop` |
| `/origins` | Region-specific `Explore` ×3; `Read the dossier` ×3 | Three dossiers; same destinations repeated |
| `/origins` | `View coffee` ×4 plus media labels ×4 | Four PDPs |
| `/origins` | `Read the Edition` ×1; two bare Edition-title links | Three Edition articles |
| `/origins` | `Shop the Current Harvest` ×1 | `/shop` |
| Each dossier | `Back to the Folio`; `Read the Edition`; next-region `Read [region]` | `/origins`; matching Edition; next dossier |
| Central Kenya dossier | `View coffee` ×1 plus media label ×1 | Kenya PDP |
| Kayanza dossier | `View coffee` ×1 plus media label ×1 | Burundi PDP |
| Ethiopia dossier | `View coffee` ×2 plus media labels ×2 | Two Ethiopia PDPs |
| `/journal` | `Read the Edition` ×3 | Three Edition articles |
| `/journal` | Region + coffee-count link ×3 | Three Edition articles; labels do not state an action |
| Each Edition article | `Explore the origin`; `Read next` | Matching dossier; next Edition |
| Kenya and Burundi articles | `View Coffee` ×1 | Matching PDP |
| Ethiopia article | `View Coffee` ×2 | Two Ethiopia PDPs |
| `/about` | `Explore the origins`; `Explore the current harvest` | `/origins`; `/shop` |
| `/bag` empty state | `Explore the harvest` | `/shop` |

### CTA quality findings

- **STRONG:** `Shop the Current Harvest`, region-specific Folio actions, `Back to the harvest`, `Back to the Folio`, `Pair with a current coffee`.
- **ACCEPTABLE:** `Read the Edition`, `Explore the origin`, `Read next` when the destination title is adjacent.
- **GENERIC:** `View coffee` and `Read the dossier` at their current volume.
- **UNCLEAR:** Journal connected-coffee links use labels such as `Central Kenya / One current coffee` but open an Edition, not a coffee.
- **MISLEADING:** `Add to bag` implies a purchasable item even though price, availability, size, and checkout decisions are unresolved.
- **CTA GAP:** Journal cards do not give a direct path to the connected coffee despite the `CONNECTED COFFEES` heading.

### High-value CTA gaps

| From | Intended next path | Existing CTA | Quality | Gap? |
| --- | --- | --- | --- | --- |
| Home harvest | Coffee PDP | Repeated `View coffee` | Generic and duplicated | No path gap; consolidation needed |
| Shop comparison | Distinct coffee choice | Product links and Add | Clear action, weak decision value | Content gap |
| PDP sensory section | Purchase facts | No approved facts | — | Yes, business decision required |
| Burundi/Ethiopia PDP | Related Edition | None | — | Yes, if an approved relationship exists |
| Dossier | Current coffee | `View coffee` | Acceptable | No |
| Edition article | Current coffee | `View Coffee` | Acceptable | No |
| Edition article | Related origin | `Explore the origin` | Acceptable | No |
| Journal connected coffees | Coffee PDP | Link goes to article | Unclear | Yes |
| About | Origins and Shop | Both present | Strong | No |
| Kiln Cup | Coffee | Two routes to coffee | Strong but slightly redundant | No |
| Footer Dispatch | Subscribe or read Dispatch | No action | — | Yes; decide whether Dispatch is a newsletter or Journal label |
| Non-empty bag | Checkout | None | — | Yes, business decision required |

## 9. Utility and Page-Job Audit

| Route family | Poetic / atmospheric | Informational | Action / utility | Assessment |
| --- | --- | --- | --- | --- |
| Home | High | Medium | Medium-high | Strong entry, but Continuum and ritual ideas compete with product/origin routing. |
| Shop | Medium | Medium-low | High | Clear collection, but product comparison relies on two approved note lists and generic region labels. |
| Coffee PDPs | Medium | Low-medium | Medium-high | Buying action is prominent. Buying information is not. |
| Kiln Cup | Medium | Low | High | Three sections explain unresolved media or intent instead of the product. |
| Origins | High | High | Medium-high | Useful vocabulary and routing, but too much content repeats dossiers. |
| Dossiers | High | Medium | Medium | Regional structure is clear; customer utility is reduced by disclaimers and repeated templates. |
| Journal | High | Low-medium | Medium | Strong publication identity; weak story differentiation and coffee routing. |
| Edition articles | High | Medium-low | Medium | Short summaries do not yet reward the promised long-form reading. |
| About | High | Medium | Medium | Philosophy is correctly placed. Internal policy language needs a customer-facing form. |
| Bag | Low-medium | High | High when populated, incomplete for checkout | Clear orientation. The empty-state poetry is not harmful but can be more direct. |

### Section-level low or questionable utility

- **REMOVE or REWRITE:** Shop editorial break. It explains why contextual imagery sits near product placeholders.
- **CONSOLIDATE:** Origins Territories section after the full Folio.
- **REMOVE or REWRITE:** All PDP ritual sections until they add supported brew or product value.
- **REMOVE or REWRITE:** Dossier process disclaimer and agricultural-work policy paragraph repeated on all three routes.
- **REWRITE:** Edition article related-origin paragraph about shared visual records.
- **REWRITE:** Kiln Cup material, ritual, and scale paragraphs that describe unresolved production or media state.
- **REMOVE or REWRITE:** Journal archive conclusion unless there is a real editorial reason to announce that a volume is closed.

## 10. Voice and Personality Audit

Red Clay often sounds assured and literate. It sounds least human when it narrates its own content system. A knowledgeable host would tell the visitor what to notice, why two coffees differ, or where to continue. The current copy often tells the visitor how the team limited a claim or composed an image.

### Internal-documentation language

| Example | Diagnosis | Action |
| --- | --- | --- |
| `Contextual process imagery sits alongside the release wall without standing in for product packaging.` | Production and layout explanation | REMOVE |
| `The current release is a fictional Red Clay product expression...` | Portfolio/legal disclosure inserted into regional narrative | Move to one disclosure system; REWRITE section |
| `The current visual record is process-led` | Asset-library language | REWRITE as factual image caption if needed |
| `The object study keeps the contrast visible...` | Art-direction rationale | REMOVE |
| `This slot preserves the intended proportion...` | Layout-spec language | REMOVE |
| `with provenance kept close to the image` | Internal content-governance language | REMOVE or place in a concise disclosure |
| `Agricultural expertise, not charity framing.` | Internal representation principle | Reframe for customers or keep in project documentation |
| `Its visual language is layered, tactile, and deliberately open.` | Design critique inside an article | REWRITE with story information |

### Humanity and orientation opportunities

- Shop needs a calm way to explain where to begin and how the four coffees differ.
- Both Ethiopia PDPs need a clear comparison before any deeper story.
- Dossiers can tell the reader what to notice in the region instead of explaining what the copy avoids claiming.
- Journal cards can state the distinct question or perspective in each Edition.
- Bag can state what happens next after pricing and checkout decisions are approved.

### `We / our / us` audit

Source search found:

- `we`: 0
- `our`: 0
- `us`: 0
- `Red Clay believes`: 0
- `Red Clay is`: 1, in a section label
- `the brand`: 1
- `Red Clay`: 29 source occurrences, or 65 route-rendered occurrences because shared templates and placeholders repeat it

The problem is not first-person marketing. The problem is institutional third-person and system language. `Red Clay` often appears to explain the brand, release, visual record, or sourcing disclaimer instead of focusing on the coffee or reader.

## 11. Product Differentiation

| Product | Current strengths | Current weaknesses | Classification |
| --- | --- | --- | --- |
| Kenya Lot 01 | Best sensory line; three notes; washed-story link; distinct origin paragraph | Sensory line repeats on its PDP; washed and notes need verification | KEEP / VERIFY / TIGHTEN |
| Burundi Lot 01 | Distinct floral/honeyed direction; three notes; strong drying-bed visual idea | No Edition link from PDP; imagery language substitutes for product facts | VERIFY / REWRITE |
| Ethiopia Lot 01 | `clean, open finish` gives a possible direction | No note list; same place/process/ritual copy as Lot 02; `tactile process-led` is vague | DIFFERENTIATE / VERIFY |
| Ethiopia Lot 02 | Mentions fruit and sorting | No note list; same context as Lot 01; wording can swap with Lot 01 without obvious mismatch | DIFFERENTIATE / VERIFY |

### Swap test

- Kenya and Burundi statements would not swap cleanly because their notes and cup directions are distinct.
- Ethiopia Lot 01 and Ethiopia Lot 02 can swap most PDP sections with no visible mismatch.
- All four products share the same product-page hierarchy and ritual close. The structure is acceptable, but the copy does not earn four separate long pages yet.

### Product decision gaps

The implementation does not resolve price, size, grind/format, availability, dispatch, roast direction, or approved brew guidance. Do not invent these details in the rewrite. The business must decide which fields exist.

## 12. Regional Differentiation

### Central Kenya

**Strengths:** Clear connection to Kiambu context; strongest note set; water/washed story gives it a distinct editorial axis.
**Weaknesses:** `held`, `measured`, `quiet`, and `close` soften specific information. `Washed` still needs verification.
**Protect:** Kiambu naming where supported, fruit-led clarity, water and sorting.

### Kayanza / Burundi

**Strengths:** Drying-bed geometry, vertical landscape, and floral/honeyed cup language form the most distinct regional identity.
**Weaknesses:** `approved plate`, `broader context`, and repeated provenance warnings interrupt the story. `washing-station geometry` needs factual and image-context review.
**Protect:** Hills, drying beds, lifted floral direction, and the three-location distinction.

### Southern Ethiopia

**Strengths:** The copy is honest that the current library is process-led and near Hawassa.
**Weaknesses:** The site labels the subject `Southern Ethiopia`, but most copy is about the limits of the available archive. Both coffees use the same sorting/attention language. `Canopy & Landrace` promises botanical diversity that the article does not substantively explain.
**Protect:** Honest Hawassa image context and human sorting detail.
**Need:** A verified regional and product basis before stronger differentiation is written.

### Shared structural problem

All three regions are described through the same four-part grammar: place, process, work, and cup. This is a useful information model. It becomes a problem when every region also uses the same `held`, `close`, `attention`, `rhythm`, and `chapter` cadence.

## 13. Terminology

| Terms | Finding | Recommendation |
| --- | --- | --- |
| `The Editions` / `Journal` | Public UI consistently uses `The Editions`; `/journal` is only the route. This is acceptable. | KEEP public label. Avoid `Journal` in future customer copy unless it names a different object. |
| `Origin` / `Origins` / `origin dossier` / `Folio` / `chapter` / `territory` | Too many names describe regional exploration. | Keep `Origins` for the section, `The Earthen Folio` for the signature index, and `dossier` only if readers benefit from it. Remove `territories` and excess `chapter` metaphors. |
| `Current Harvest` / `current release` / `current coffee` / `seasonal lot` | These terms imply overlapping but different commercial states. | Define one collection term and one product-state term after business approval. |
| `lot` / `coffee` / `release` / `study` | Variation often hides unresolved product definition. | Use `coffee` for customer choice. Use `lot` only when factually accurate. Use `release` for approved commercial state. |
| `The Kiln Cup` / `The Cup` / `cup` / `vessel` / `companion object` | Editorial variation is understandable, but capitalization changes and `object` language can feel institutional. | Use `The Kiln Cup` as the product name, `cup` in ordinary prose, and `companion object` sparingly. |
| `sensory` / `notes` / `product character` / `cup` | The information hierarchy is not explicit. | Use one clear tasting-notes label and one short sensory description. |
| `The Dispatch` | Home and footer treat it as editorial/newsletter language, but there is no signup or distinct Dispatch content. | Decide whether it is a newsletter. If it is only a Journal link, name that action directly. |
| `Volume 01` / `first edition` | The archive calls Volume 01 the `complete first edition`, which confuses Edition stories with a volume. | Use `volume` for the collection and `Edition` for each story. |

## 14. Factual and Business Risk

All items in this section are `FACT CHECK / BUSINESS DECISION REQUIRED`.

### Implementation versus canonical copy controls

| Subject | Canonical control | Current implementation | Audit result |
| --- | --- | --- | --- |
| Home hero H1 | Working line names East African highlands and early light | `Coffee, held by place.` | Intentional-looking drift. The implemented line is stronger, but approval should be recorded. |
| Home secondary hero action | Copy deck proposes `Read the Editions` | `Read the origins` | Useful journey change. Record as an approved content decision if retained. |
| Product notes and process | Notes are TBD; Kenya `Washed` is VERIFY; other product fields remain unresolved | Notes and washed language appear as finished copy | VERIFY before publication. |
| Product commerce | Price, size, availability, dispatch, and product state are business decisions | `Add to bag` is active while those fields remain null | Business decision required. |
| Kiln Cup | Material, form, capacity, safety, price, and availability are fictional or verify decisions | Terracotta/glaze/form statements appear as final | VERIFY or remove until approved. |
| Origin dossiers | Factual chapters and citations remain fact-check/TBD fields | Short factual-reference bullets exist, but there are no cited sources in the customer page or source data | Complete the internal fact-check record before rewrite. |
| Edition manuscripts | Canonical deck says manuscripts and regional facts are incomplete | Archive calls the three pieces `substantial stories` | Either complete the manuscripts or reduce the promise. |
| About representation | Canonical source defines an anti-paternalism production rule | The rule is copied into the customer page almost directly | Reframe for customers or keep it internal. |
| Dispatch/newsletter | Canonical deck defines a newsletter title, form, consent, success, and error states | Home Dispatch links to The Editions; footer has no action | Decide the content object before copy work. |
| Bag | Canonical deck includes subtotal, checkout, status, and error-state copy after business decisions | Current bag only holds items and has no checkout route | Do not add copy until the commerce model is approved. |

| ID | Risk | Locations | Severity | Required decision |
| --- | --- | --- | --- | --- |
| P0-01 | Region, sensory notes, cup claims, and product identities are published although the canonical deck marks several as verify/TBD/fictional decisions. | Home, Shop, PDPs, Origins, dossiers, Editions | P0 | Approve each product field and its public framing. |
| P0-02 | `raw terracotta`, `mineral-white glaze`, `compact vessel`, `Clay outside. Glaze within.` and related form statements read as final Kiln Cup specifications. | Home, Shop, Kiln Cup, About | P0 | Approve material and form or remove these claims. |
| P0-03 | `Add to bag` is live for all five products while price, availability, size, fulfilment, and checkout are unresolved. | Shop, PDPs, related cards, Kiln Cup | P0 | Define whether this is a functional store, a portfolio demo, or a non-commercial preview. |
| P0-04 | `seasonal`, `current harvest`, `current release`, `current lot`, and `four seasonal lots` imply active inventory and release state. | Metadata, Home, Shop, Origins, Editions, footer | P0 | Approve the commercial fiction and state model. |
| P0-05 | `washed coffee`, `washing-station geometry`, Kiambu/Kayanza/Hawassa framing, regional process language, and botanical/landrace positioning lack visible sources in the factual-reference sections. | Editions, Origins, dossiers, PDPs | P0 | Fact-check and cite internally before publication. Add customer citations only where useful. |

### Claims not found

The implementation does not claim direct trade, premiums, certifications, sustainability outcomes, named Red Clay producer partnerships, personal visits, interviews, shipping thresholds, discounts, subscriptions, roast schedules, or dispatch windows. This restraint should be protected.

### Placeholder exposure

- No literal `TBD`, `TODO`, `VERIFY`, `PENDING`, or raw asset ID is visible in rendered customer copy.
- Product placeholder cards visibly say `Material study`. This exposes development state and repeats throughout commerce surfaces.
- Product assets use pending data internally. Some registry alt strings contain `product media pending`, but the current placeholder component uses the product label as its customer-facing `aria-label` instead.
- The Kiln Cup page directly states `unresolved`, `replaceable`, and `This slot preserves...`. These are customer-facing internal placeholders in prose and are high-priority rewrite/remove items.

## 15. Route-by-Route Audit

### Shared score scale

Scores run from 1 to 5. They support prioritization and are not objective measures.

### `/`

**Inventory by section**

- Hero — H1 `Coffee, held by place.`; body with four seasonal single-origin releases; CTAs `Explore the harvest` and `Read the origins`; three selector labels: Place/Kiambu, Process/Kayanza, Ritual/morning pour.
- Continuum — `THE CONTINUUM`; Earth, Coffee, Vessel, Ritual; four short material/process/ritual statements.
- Current Harvest — `Four coffees, held in season.`; regional introduction; four shared product cards.
- Origin Index — `Place changes the shape of every cup.`; three region titles, descriptions, and `Read the chapter` links.
- Featured Edition — `Water & Time`; shared Edition summary; `Read the Edition`.
- Companion object — `A cup belongs to the ritual.`; Kiln Cup material statement; `Meet the Kiln Cup`; `OBJECT STUDY / 01`.
- Dispatch — `Notes from the coffee world.`; material-world deck; `Read the Editions`.
- Metadata — root title and description from `src/app/layout.tsx`.

**Utility:** Moderate-high. The hero and harvest route well. The Continuum is almost entirely atmospheric.
**Main action:** Keep the hero. Tighten the Continuum and remove duplicate card actions.
**Score:** Clarity 4; Utility 4; Specificity 3; Personality 4; CTA quality 4; Repetition control 3; Page-job alignment 4.

### `/shop`

**Inventory by section**

- Intro — `CURRENT HARVEST // VOL. 01`; `Four coffees from three East African highland regions.`; body about concise sensory/origin information and the Cup.
- Collection — four shared product cards with notes for Kenya and Burundi only; each has `Add to bag`, `View coffee`, and a media accessibility label.
- Editorial break — `Coffee is carried by place, people, and patient process.`; packaging/context disclaimer.
- Companion object — Kiln Cup title, material/form line, `Add to bag`, `View the object`.
- Metadata — `Shop the Current Harvest`; description names four seasonal coffees and the Cup.

**Utility:** Moderate. It shows the collection but does not explain the choice between all four coffees.
**Main action:** Remove the production disclaimer. Resolve product data and add concise comparison utility.
**Score:** Clarity 4; Utility 3; Specificity 3; Personality 4; CTA quality 4; Repetition control 4; Page-job alignment 3.

### Coffee PDP shared template

**Shared inventory**

- Purchase — product ID twice, region, sensory line, optional notes, quantity, `Add to bag`, `Back to the harvest`.
- Context aside — `PLACE / PROCESS`; region plus the same imagery disclaimer.
- Product character — repeats the same sensory line used above.
- Place — region heading, short place paragraph, `Explore the origin`.
- Optional process detail — `At close range.` plus shared people/material/process line.
- Optional Edition — title, shared summary, `Read the Edition`.
- Ritual — `A quiet domestic close.` plus the same vessel disclaimer.
- Related harvests — three product cards, each with Add, View, and media-link actions.

#### `/shop/kenya-lot-01`

Variable copy: `A bright, fruit-led cup with a clear sweetness.`; `Blackcurrant / plum / cane sugar`; Central Kenya place line; `Water & Time` summary.
**Assessment:** Strongest PDP, but it repeats its best sensory line and publishes unverified washed/notes context.
**Score:** Clarity 4; Utility 3; Specificity 4; Personality 3; CTA quality 4; Repetition control 2; Page-job alignment 3.

#### `/shop/burundi-lot-01`

Variable copy: `A lifted, floral cup with soft fruit and honeyed depth.`; `Red apple / honey / orange blossom`; Kayanza drying-bed line.
**Assessment:** Distinct sensory start. It has no related Edition module even though a Burundi Edition exists.
**Score:** Clarity 4; Utility 3; Specificity 4; Personality 3; CTA quality 4; Repetition control 2; Page-job alignment 3.

#### `/shop/ethiopia-lot-01`

Variable copy: `A tactile process-led release with a clean, open finish.`; no note list; shared Hawassa place and process-detail copy.
**Assessment:** Low decision utility and weak distinction from Lot 02.
**Score:** Clarity 3; Utility 2; Specificity 2; Personality 3; CTA quality 4; Repetition control 1; Page-job alignment 2.

#### `/shop/ethiopia-lot-02`

Variable copy: `A close, process-led study of fruit, sorting, and attention.`; no note list; same Hawassa place and process-detail copy as Lot 01.
**Assessment:** The weakest coffee PDP because its vocabulary describes process intent more than cup character.
**Score:** Clarity 3; Utility 2; Specificity 2; Personality 3; CTA quality 4; Repetition control 1; Page-job alignment 2.

### `/shop/the-kiln-cup`

**Inventory by section**

- Opening — companion-object label; product name; terracotta/glaze claim; Add; return to coffee.
- Form/material — `Clay outside. Glaze within.`; unresolved-product disclaimer.
- Ritual — `The Cup exists for the brew.`; approved-photo disclaimer; pairing link.
- Scale/hand feel — `A quieter object study.`; replaceable-media and slot-proportion explanation.
- Pairing — `Pair with a Current Coffee.`; coffee-first sentence; Shop link.

**Utility:** Low. Three of five sections explain the placeholder, image, or design intent.
**Main action:** Verify the product. Keep the page short. Retain one clear return to coffee.
**Score:** Clarity 3; Utility 1; Specificity 2; Personality 2; CTA quality 4; Repetition control 2; Page-job alignment 2.

### `/origins`

**Inventory by section**

- Thesis — Origin Index; three-region headline and explanation; Folio reading-path note.
- Earthen Folio — monograph heading, cross-region deck, chapter index; for each region: name, descriptor, full place, full process, cup, captions, and region-specific Explore action.
- Territories — three region summaries and three dossier actions.
- Vocabulary — Place, Variety, Process, and Cup definitions.
- Current Coffees — heading/deck and four product cards.
- Related Editions — `Water & Time` summary/action and two title-only Edition links.
- Close — `Carry the reading into the current harvest.`; Shop action.
- Metadata — `Origins — The Earthen Folio`; three-chapter monograph description.

**Utility:** High, but the page performs both index and dossier jobs.
**Main action:** Keep the thesis, comparison, vocabulary, and transition. Consolidate Folio and Territories repetition.
**Score:** Clarity 4; Utility 4; Specificity 4; Personality 4; CTA quality 4; Repetition control 2; Page-job alignment 3.

### Origin dossier shared template

**Shared inventory**

- Hero — number, `ORIGIN DOSSIER`, name, descriptor, summary, Folio return, image alt caption.
- Place — region-specific heading and place body.
- Coffee context — region-specific heading, repeated summary, and fictional/direct-sourcing disclaimer.
- Processing traditions — region-specific heading/body plus the same regional-view disclaimer.
- Agricultural work — region heading plus the same no-producer/identity policy paragraph.
- Current coffees — region heading, cup line, product cards.
- Related Edition — title, summary, action.
- Factual reference — heading and two data bullets. The rendered server inventory did not count list items, but source inspection included them.
- Next region — next-region heading and action.

#### `/origins/central-kenya`

Distinct copy includes `Precision in the highlands.`, Kiambu framing, sorting/drying, and the strongest complete note set.
**Assessment:** Best dossier for product connection. It still repeats hub copy and template disclaimers.
**Score:** Clarity 3; Utility 3; Specificity 4; Personality 3; CTA quality 4; Repetition control 2; Page-job alignment 3.

#### `/origins/kayanza-burundi`

Distinct copy includes vertical rhythm, drying beds, three named image locations, and a floral cup direction.
**Assessment:** Strongest regional differentiation. Internal asset language interrupts it.
**Score:** Clarity 3; Utility 3; Specificity 4; Personality 4; CTA quality 4; Repetition control 2; Page-job alignment 3.

#### `/origins/southern-ethiopia`

Distinct copy includes Hawassa sorting work, two coffees, archive limitations, and a process-led cup direction.
**Assessment:** Honest but too focused on what the archive cannot support. It does not yet provide a distinct Southern Ethiopia dossier.
**Score:** Clarity 3; Utility 3; Specificity 3; Personality 3; CTA quality 4; Repetition control 2; Page-job alignment 3.

### `/journal`

**Inventory by section**

- Opening — volume label; `A small volume on coffee, place, and the morning ritual.`; `Three substantial stories...`.
- Featured and secondary Editions — region, title, shared summary, `Read the Edition`.
- Connected coffees — headline and three region/coffee-count links that point back to articles.
- Archive — Volume 01 conclusion and future-volume statement.
- Metadata — `The Editions`; description repeats coffee/place/morning ritual.

**Utility:** Moderate-low. It identifies three stories but does not clearly state why each is worth reading.
**Main action:** Give each story a distinct reader value. Make connected-coffee links go to coffees or rename the module.
**Score:** Clarity 4; Utility 2; Specificity 3; Personality 4; CTA quality 3; Repetition control 3; Page-job alignment 3.

### Edition article shared template

**Shared inventory**

- Masthead — volume, region, title, subtitle.
- Opening — `OPENING THESIS` plus the same archive summary.
- Two narrative sections — `PLACE / CONTEXT` and `PROCESS / CRAFT`, heading, body, optional caption.
- Commerce ending — `RED CLAY RELEASE`, release heading/body, one or two product summaries, `View Coffee`.
- Related origin — region, repeated shared-record/provenance paragraph, Explore action.
- Next Edition — title and `Read next`.

#### `/journal/water-and-time`

Distinct copy covers cultivated highland context, washed-process clarity, and Kenya notes.
**Assessment:** Strongest article because title, process, and cup form one line of thought. It still needs verified depth.
**Score:** Clarity 4; Utility 3; Specificity 4; Personality 4; CTA quality 4; Repetition control 3; Page-job alignment 3.

#### `/journal/along-the-kayanza-hills`

Distinct copy covers steep landscape, drying/washing geometry, botanical detail, and floral notes.
**Assessment:** Regionally distinct, but `approved plate` and `broader context` sound like an asset review.
**Score:** Clarity 4; Utility 3; Specificity 4; Personality 4; CTA quality 4; Repetition control 3; Page-job alignment 3.

#### `/journal/canopy-and-landrace`

Distinct copy covers Hawassa sorting, botanical depth, and two Ethiopia products.
**Assessment:** The title and subtitle promise coffee diversity and landrace context, but the body mostly discusses image limits and process texture.
**Score:** Clarity 3; Utility 3; Specificity 3; Personality 4; CTA quality 4; Repetition control 3; Page-job alignment 2.

### `/about`

**Inventory by section**

- Opening — `WHAT RED CLAY IS`; brand thesis; `WHY THE NAME`; earth/vessel/ritual explanation.
- Continuum — four beats and one short line each.
- East African Origins — three-region rationale and Origins action.
- Representation/agency — anti-charity heading and no-fictional-identity policy.
- Material/design — quiet/tactile/useful heading and material list.
- Coffee/roasting philosophy — `Clarity before spectacle.` and sensory-language statement.
- Closing — `Coffee for the stillness of early light.` and harvest action.
- Metadata — About title and material-thesis description.

**Utility:** Moderate. Philosophy is in the right place. Representation copy reads as internal policy.
**Main action:** Keep the thesis, name, Continuum, and coffee philosophy. Reframe representation for customers and remove duplicate early-light language elsewhere.
**Score:** Clarity 4; Utility 3; Specificity 3; Personality 4; CTA quality 4; Repetition control 3; Page-job alignment 4.

### `/bag` and cart drawer

**Inventory by state**

- Page opening — `BAG`; `Your selections.`; review instruction.
- Drawer header — `BAG`; `Your selections (count)`; Close.
- Empty state — quiet-bag headline, add instruction, harvest action.
- Populated state — count, product ID/region, quantity controls, Remove, holding note.
- Announcements — added and removed messages.
- Metadata — `Bag`.

**Utility:** High for orientation. It is incomplete as commerce because no subtotal, price, or checkout action exists.
**Main action:** Keep simple utility language. Resolve the commerce model before adding checkout copy.
**Score:** Clarity 5; Utility 4; Specificity 4; Personality 4; CTA quality 5 for empty state; Repetition control 4; Page-job alignment 4 pending commerce decisions.

## 16. Repetition Heatmap

| Concept | Home | Shop | PDP | Origins | Dossiers | Editions | About | Kiln | Assessment |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | --- |
| Place / process / context | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  | Overused; core idea needs route-specific detail |
| Held / close / quiet | ✓ |  | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Overused cadence |
| Earth / vessel / ritual | ✓ | ✓ | ✓ |  |  | ✓ | ✓ | ✓ | Valid motif; concentrate it |
| Chapter / story / dossier | ✓ |  | ✓ | ✓ | ✓ | ✓ |  |  | Publication metaphor is over-signalled |
| Asset/provenance disclaimers |  | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Customer-facing internal language |
| Early light / morning stillness | ✓ |  | ✓ |  |  | ✓ | ✓ |  | Strong motif, used too broadly |
| Rhythm / geometry / frame |  |  | ✓ | ✓ | ✓ | ✓ |  |  | Helpful for Burundi; generic elsewhere |
| Current harvest / release | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Commercial terminology needs definition |

## 17. CTA Journey Heatmap

| From | Intended next path | Existing action | Quality | Gap? |
| --- | --- | --- | --- | --- |
| Home hero | Shop / Origins | Two specific actions | Strong | No |
| Home harvest | Product choice | Multiple View targets per card | Generic and duplicated | Consolidate |
| Shop | Compare / buy | Product cards and Add | Clear action, weak comparison copy | Content gap |
| Coffee PDP | Buy | Add | Misleading until commerce facts resolve | Business gap |
| Coffee PDP | Origin | Explore origin | Acceptable | No |
| Coffee PDP | Edition | Kenya only | Inconsistent | Possible gap |
| Origins Folio | Dossier | Region-specific Explore | Strong | No |
| Origins Territories | Dossier | Read dossier | Duplicate path | Consolidate |
| Dossier | Coffee | View coffee | Acceptable | No |
| Dossier | Edition | Read Edition | Acceptable | No |
| Journal story card | Article | Read Edition | Acceptable | No |
| Journal connected coffees | Coffee | Opens article instead | Unclear | Yes |
| Edition article | Coffee | View Coffee | Acceptable | No |
| Edition article | Dossier | Explore origin | Acceptable | No |
| About | Origins / Shop | Two specific actions | Strong | No |
| Kiln Cup | Coffee | Pair and View current | Strong but repetitive | Consolidate lightly |
| Footer Dispatch | Newsletter or Editions | None | Missing | Yes |
| Bag populated | Checkout | None | Missing | Yes, after business decision |

## 18. Recommended Rewrite Priorities

1. Resolve all P0 product, regional, Kiln Cup, and commerce decisions.
2. Create one clear fictional-portfolio and provenance disclosure system. Remove internal safeguards from ordinary page prose.
3. Define product facts and differentiate all four coffees, especially the two Ethiopia lots.
4. Rewrite PDP purchase and product-character copy around customer choice.
5. Consolidate repeated Folio/dossier and archive/article copy.
6. Rewrite the Edition articles to match the promised depth, or reduce the promise and template language.
7. Remove duplicate product-card actions and repair connected-coffee destinations.
8. Concentrate full brand philosophy on About. Keep short motifs on Home and the Kiln Cup page.
9. Replace generic editorial filler with supported specifics, useful orientation, or nothing.
10. Perform a final terminology, cadence, capitalization, and microcopy pass.

The rewrite should preserve “poetry with purpose.” It should not convert Red Clay into generic ecommerce copy.

## 19. Deferred Questions and Decisions

### Editorial

- Are the three Edition pages intended to be full essays or short editorial notes?
- Which route owns the full `Earth → Coffee → Vessel → Ritual` explanation?
- Should `dossier` remain a public word, or should the UI use `origin` and region names?
- Should `The Dispatch` be a newsletter, a Journal label, or removed?
- Is the post-Folio Territories section still required after browser review?

### Product and business

- Are product IDs final public names or working identifiers?
- Which origin, process, variety, elevation, harvest, roast, note, price, size, and availability fields are approved?
- What fact separates Ethiopia Lot 01 from Ethiopia Lot 02?
- Is `Add to bag` a real purchase path, a portfolio interaction, or a future feature?
- What should a populated bag do next?
- Which Kiln Cup material, form, capacity, safety, care, price, and availability details are approved?

### Factual and disclosure

- What source file or citation log supports every published regional statement?
- Is `washed coffee` approved for Kenya Lot 01?
- Is `washing-station geometry` supported by the Kayanza asset and factual record?
- Does `Canopy & Landrace` have enough verified botanical context to support its title and subtitle?
- What single disclosure is required to explain the fictional portfolio without repeating that fact on every page?

## 20. Audit Completion Summary

The full implementation copy has been inventoried and evaluated. No customer-facing UI copy was changed.

The copy system has a strong foundation. The highest-value work is not a broad tone replacement. It is a controlled edit that resolves facts, removes internal production language, improves product choice, differentiates regions and products, and lets the strongest Red Clay motifs appear less often and with more force.

The central rewrite test should remain:

> Why does this sentence need to exist here, for this visitor, at this exact point in their journey?

If a sentence cannot answer that question, remove it, consolidate it, make it specific, or give it a clear customer job.

## Issue Register

This register sets the reported issue totals.

### P0 — 5

1. P0-01 — Unapproved product facts published as final.
2. P0-02 — Unapproved Kiln Cup material and form claims.
3. P0-03 — Live Add-to-bag language with unresolved commerce state.
4. P0-04 — Unapproved seasonal/current-harvest availability claims.
5. P0-05 — Regional and process claims need fact-check support.

### P1 — 12

1. P1-01 — Internal documentation language across customer pages.
2. P1-02 — Repeated PDP provenance and ritual template prose.
3. P1-03 — Repeated dossier process and agricultural policy prose.
4. P1-04 — Repeated Edition related-origin provenance prose.
5. P1-05 — Product decision utility is incomplete.
6. P1-06 — Ethiopia lots are not sufficiently distinct.
7. P1-07 — Origins hub duplicates dossier content.
8. P1-08 — Edition summaries repeat instead of advancing the journey.
9. P1-09 — Edition depth does not match archive promise.
10. P1-10 — Product-card actions create excessive View CTA volume.
11. P1-11 — Visible placeholder and slot language leaks development state.
12. P1-12 — About representation copy reads as internal policy.

### P2 — 13

1. P2-01 — Held/close/quiet cadence is overused.
2. P2-02 — Place/process/context language is too abstract and frequent.
3. P2-03 — Publication metaphors are over-signalled.
4. P2-04 — Early-light and morning ritual motifs are near saturation.
5. P2-05 — Product sensory lines repeat within PDPs.
6. P2-06 — Region summaries repeat from hub to dossier.
7. P2-07 — `Current`/`seasonal`/`release` terms lack a defined system.
8. P2-08 — Origin/Folio/dossier/chapter/territory terms compete.
9. P2-09 — Journal connected-coffee links do not match their destination.
10. P2-10 — Dispatch has no defined action or content object.
11. P2-11 — Headline cadence is too uniformly poetic.
12. P2-12 — Institutional third-person language limits warmth.
13. P2-13 — Bag has no populated-state next action.

### P3 — 6

1. P3-01 — `Add to bag` capitalization should be standardized in documentation and UI.
2. P3-02 — Dynamic region sentences render a space before a period in several places.
3. P3-03 — `All shop` is less natural than the other navigation labels.
4. P3-04 — `complete first edition` conflicts with the Volume/Edition terminology model.
5. P3-05 — `Current Coffee` capitalization varies on the Kiln Cup page.
6. P3-06 — `Your selections` repeats as page and drawer identity without adding orientation.

## Appendix A — Complete Source Copy Inventory

This appendix records dynamic copy that the route summaries reference. It prevents shared content data from being hidden behind a template name.

### Product data rendered across Shop, PDPs, Origins, dossiers, Editions, cards, and Bag

| Product | Region | Sensory statement | Notes | Process | Price / currency / availability | Source |
| --- | --- | --- | --- | --- | --- | --- |
| `KENYA LOT 01` | `Central Kenya` | `A bright, fruit-led cup with a clear sweetness.` | `Blackcurrant`; `plum`; `cane sugar` | `Washed` | All null | `src/content/coffees.ts` |
| `BURUNDI LOT 01` | `Kayanza / Burundi` | `A lifted, floral cup with soft fruit and honeyed depth.` | `Red apple`; `honey`; `orange blossom` | Not supplied | All null | `src/content/coffees.ts` |
| `ETHIOPIA LOT 01` | `Southern Ethiopia` | `A tactile process-led release with a clean, open finish.` | None | Not supplied | All null | `src/content/coffees.ts` |
| `ETHIOPIA LOT 02` | `Southern Ethiopia` | `A close, process-led study of fruit, sorting, and attention.` | None | Not supplied | All null | `src/content/coffees.ts` |
| `THE KILN CUP` | `Companion object` | None | `Raw terracotta`; `mineral-white glaze` | Not applicable | All null | `src/content/coffees.ts` |

The source stores `price`, `currency`, and `availability` as null for every item. The UI still renders `Add to bag`.

### Origin content data

#### Central Kenya — `/origins/central-kenya`

| Field | Exact copy |
| --- | --- |
| Descriptor | `Precision in the highlands.` |
| Summary | `A chapter of coffee plants, rain, and the quiet work of sorting.` |
| Place | `Central Kenya opens through Kiambu County context: a green, cultivated highland view held at the edge of the coffee plant.` |
| Process | `Sorting, drying, and plant work appear as a sequence of careful material decisions rather than a single regional formula.` |
| Cup | `Blackcurrant, plum, and cane sugar.` |
| Place heading | `Kiambu, held in a measured frame.` |
| Context heading | `Sorting gives the chapter its close grain.` |
| Process heading | `A rhythm built one surface at a time.` |
| Work heading | `The ordered work of a green highland.` |
| Coffees heading | `One release, held close to its place.` |
| Facts heading | `A close reading, without overclaiming.` |
| Factual reference 1 | `Lead place context: Kiambu County, Kenya.` |
| Factual reference 2 | `Process and botanical images are contextual documentary photographs; they do not imply a Red Clay sourcing relationship.` |

#### Kayanza / Burundi — `/origins/kayanza-burundi`

| Field | Exact copy |
| --- | --- |
| Descriptor | `Hills held in vertical rhythm.` |
| Summary | `A landscape of drying geometry, hillside movement, and red-fruited brightness.` |
| Place | `The lead plate carries an approved Kayanza context. A wider Burundi landscape and a botanical detail broaden the chapter without collapsing their locations into one claim.` |
| Process | `Raised drying beds and careful sorting make the work visible as a shared rhythm of attention, movement, and time.` |
| Cup | `Red apple, honey, and orange blossom.` |
| Place heading | `Drying beds set the vertical rhythm.` |
| Context heading | `Fruit and surface, held in detail.` |
| Process heading | `Raised beds, repeated attention.` |
| Work heading | `A chapter written in layers.` |
| Coffees heading | `The current lot, between hill and bed.` |
| Facts heading | `Three locations, kept distinct.` |
| Factual reference 1 | `Lead place context: Kayanza, Burundi.` |
| Factual reference 2 | `The broader landscape is Banga, Burundi; the botanical detail is from Ngozi, Burundi.` |

#### Southern Ethiopia — `/origins/southern-ethiopia`

| Field | Exact copy |
| --- | --- |
| Descriptor | `Process, people, and open attention.` |
| Summary | `A close process-led chapter built from sorting, material detail, and breathing room.` |
| Place | `The current visual record is process-led: the lead plate shows sorting work near Hawassa, Ethiopia, and is used as broad context rather than a claim about a specific Southern Ethiopia landscape.` |
| Process | `Hands, beans, and sorting surfaces carry the chapter. The sequence stays close to the work without inventing a single processing story for every lot.` |
| Cup | `A clean, open finish with a tactile process character.` |
| Place heading | `Sorting work, seen near Hawassa.` |
| Context heading | `Hands and beans at close range.` |
| Process heading | `A process built from small decisions.` |
| Work heading | `Open attention, material and human.` |
| Coffees heading | `Two releases, kept open to the archive.` |
| Facts heading | `What the current archive can support.` |
| Factual reference 1 | `Lead and support context: Hawassa, Ethiopia, used for process and people imagery.` |
| Factual reference 2 | `The current archive does not provide a dedicated Southern Ethiopia landscape plate, so no narrower landscape claim is made.` |

### Edition content data

#### `Water & Time` — `/journal/water-and-time`

| Field | Exact copy |
| --- | --- |
| Eyebrow | `THE EDITIONS // VOLUME 01` |
| Subtitle | `Washed coffee in the Central Kenya highlands.` |
| Summary / opening thesis | `A study of water, sorting, and the clear sweetness held in a Central Kenya release.` |
| Section 1 heading | `A highland held in green` |
| Section 1 body | `Central Kenya opens through a cultivated highland context: coffee plants, red earth, and a working landscape held at the edge of the frame.` |
| Section 2 heading | `The clarity of a washed lot` |
| Section 2 body | `Water gives the process its quiet architecture. Sorting and drying make the work visible without turning it into spectacle.` |
| Caption | `Kenya process context. The image is used broadly and does not identify the fictional lot location.` |
| Release heading | `A release for early light` |
| Release body | `Red Clay’s Kenya release is bright, fruit-led, and clear in the cup: blackcurrant, plum, and cane sugar held in a precise line.` |

#### `Along the Kayanza Hills` — `/journal/along-the-kayanza-hills`

| Field | Exact copy |
| --- | --- |
| Eyebrow | `THE EDITIONS // VOLUME 02` |
| Subtitle | `Hills, washing-station geometry, and a lifted Burundi cup.` |
| Summary / opening thesis | `An intimate chapter on vertical landscapes, drying beds, and the patient shape of a Burundi release.` |
| Section 1 heading | `A landscape with vertical rhythm` |
| Section 1 body | `The approved Kayanza plate carries the chapter: hills, processing geometry, and a sense of work moving across a steep horizon.` |
| Section 2 heading | `Detail before declaration` |
| Section 2 body | `Coffee cherries and leaves bring the story closer. The broader Burundi support plate remains broader context, not a Kayanza-specific claim.` |
| Caption | `Burundi botanical context from Ngozi.` |
| Release heading | `Lifted, floral, honeyed` |
| Release body | `The fictional Burundi release holds red apple, honey, and orange blossom in a soft, lifted line that returns the chapter to the cup.` |

#### `Canopy & Landrace` — `/journal/canopy-and-landrace`

| Field | Exact copy |
| --- | --- |
| Eyebrow | `THE EDITIONS // VOLUME 03` |
| Subtitle | `Coffee diversity in the southern Ethiopian highlands.` |
| Summary / opening thesis | `A process-led look at botanical depth, sorting work, and the open finish of Southern Ethiopia releases.` |
| Section 1 heading | `Process as close landscape` |
| Section 1 body | `The current Ethiopian library is strongest at close range: sorting work, hands, and coffee moving through attention near Hawassa. It gives the story texture without claiming a narrower landscape than the archive supports.` |
| Section 2 heading | `Botanical depth` |
| Section 2 body | `The chapter stays with coffee diversity and process detail. Its visual language is layered, tactile, and deliberately open.` |
| Caption | `Southern Ethiopia process context.` |
| Release heading | `Two studies, one continuum` |
| Release body | `The two Ethiopia releases are close studies of fruit, sorting, and attention: a clean, open finish in one; a more tactile process-led line in the other.` |

### Customer-facing image text

The following alt strings also appear as visible dossier or Folio captions in some contexts.

| Asset role | Exact alt text | Status in registry |
| --- | --- | --- |
| Home architecture prototype | `Contemporary rammed-earth walls beneath a timber pergola.` | Provisional replaceable |
| Clay material | `Cracked red earth texture.` | Approved current |
| Stone material | `Dark fractured stone texture.` | Approved current |
| Linen material | `Close woven linen texture.` | Approved current |
| Central Kenya lead | `Coffee plants near Kawaida Falls in Kiambu County, Kenya.` | Approved current |
| Kenya process | `Farmers sorting coffee cherries in Kenya.` | Approved current |
| Kenya drying | `Coffee beans drying on raised racks at Fairview Estate in Kiambu, Kenya.` | Approved current |
| Kenya botanical | `Ripe coffee cherries on a plant at Fairview Estate in Kiambu, Kenya.` | Approved current |
| Kayanza lead | `Coffee processing landscape in Kayanza, Burundi.` | Approved current |
| Burundi support | `Hillside landscape in Banga, Burundi.` | Approved current |
| Burundi botanical | `Coffee cherries and leaves in Ngozi, Burundi.` | Approved current |
| Ethiopia lead | `A coffee worker examining beans during sorting near Hawassa, Ethiopia.` | Provisional replaceable |
| Ethiopia support | `Workers sorting coffee beans by size in Hawassa, Ethiopia.` | Approved current |
| Ethiopia detail | `Coffee beans being sifted during quality sorting in Ethiopia.` | Approved current |
| Ritual pour-over | `Glass pour-over dripper and server casting shadows in morning light.` | Approved current |
| Ritual hands | `Hot water being poured into a coffee dripper.` | Approved current |

Pending registry alt strings say `[product] product media pending`, but the current placeholder component exposes the product label instead. The visible placeholder copy is `RED CLAY`, the product label, and `Material study`.

### Metadata inventory

| Route or scope | Title | Description |
| --- | --- | --- |
| Global | `Red Clay — Contemporary African Coffee House` | `A contemporary African coffee house built around the material character of place.` |
| `/shop` | `Shop the Current Harvest` | `Four seasonal coffees from Kenya, Burundi, and Ethiopia, with The Kiln Cup as companion object.` |
| Coffee PDPs | Product ID | `[product ID] from [region].` |
| Kiln Cup | `The Kiln Cup` | `The companion object in the Red Clay continuum.` |
| `/origins` | `Origins — The Earthen Folio` | `A three-chapter origin monograph moving through Central Kenya, Kayanza / Burundi, and Southern Ethiopia.` |
| Dossiers | `[region] — Origin Dossier` | Region summary from `origins.ts` |
| `/journal` | `The Editions` | `A small first volume of Red Clay stories on coffee, place, and the morning ritual.` |
| Edition articles | Edition title | Edition summary from `editions.ts` |
| `/about` | `About Red Clay` | `The material thesis behind Red Clay coffee, place, vessel, and ritual.` |
| `/bag` | `Bag` | Global description can remain in inherited metadata contexts |

### Accessibility and utility microcopy

| Surface | Exact copy or pattern |
| --- | --- |
| Skip link | `Skip to content` |
| Wordmark | `Red Clay home` |
| Header bag | `Bag, [count] items` |
| Menu trigger | `Open menu`; `Close menu`; hidden `Menu` |
| Navigation regions | `Primary navigation`; `Mobile navigation`; `Site navigation`; mega-menu eyebrow used as region label |
| Hero control group | `Choose a hero story`; selector state uses `aria-pressed` |
| Origin Folio navigation | `Origin chapters`; active chapter uses `aria-current="step"` |
| Edition links group | `Other Editions` |
| Product media links | `View [product ID]` or `View The Kiln Cup` |
| Quantity control | `Quantity for [product]`; `Decrease quantity`; `Increase quantity` |
| Bag backdrop | `Close bag` |
| Bag item media | `View [product ID]` |
| Bag line controls | `Decrease [product] quantity`; `[number] [product] quantity`; `Increase [product] quantity` |
| Live bag status | `[product] added to your bag.`; `[product] removed from your bag.` |
