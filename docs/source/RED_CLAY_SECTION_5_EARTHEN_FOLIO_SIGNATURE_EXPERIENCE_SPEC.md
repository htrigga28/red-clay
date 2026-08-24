# RED CLAY — SECTION 5 SIGNATURE EXPERIENCE SPECIFICATION

**Document Version:** 1.0.0 — Canonical Direction  
**Project:** Red Clay Coffee — Earthen Monograph  
**Phase:** Section 5 — Signature Digital Experience  
**Selected Concept:** **The Earthen Folio**  
**Status:** Approved concept; specification ready for Section 6 asset planning and later Codex implementation  
**Primary Location:** `/origins`  
**Implementation Philosophy:** Progressive enhancement, native scroll, mobile-first completeness, desktop spatial expansion

---

## 0. DECISION SUMMARY

Red Clay's signature digital experience is **The Earthen Folio**: an interactive origin monograph in which the three launch regions — Central Kenya, Kayanza / Burundi, and Southern Ethiopia — unfold as three distinct editorial chapters.

The experience is intentionally **not**:

- a map;
- a terrain explorer;
- an elevation simulator;
- a WebGL scene;
- a 3D book;
- a literal page-turn animation;
- a scientific data visualization;
- a scroll-jacked presentation.

It is a **publication-inspired spatial sequence** built from photography, typography, editorial metadata, architectural rules, masks, and restrained scroll-linked motion.

The core idea:

> **Canyon-like restraint at rest; Red Clay-specific authorship in motion.**

The signature should feel sophisticated because the rest of the website is calm.

---

# PART 1 — EXPERIENCE THESIS

## 1.1 One-sentence concept

**The Earthen Folio turns Red Clay's three origin territories into three spatial editorial chapters that reveal place, process context, cup character, and the path into each regional dossier as the user moves naturally through the page.**

## 1.2 Why this is the right signature for Red Clay

The concept directly expresses Red Clay's approved identity:

- **Contemporary Monograph** becomes interaction rather than merely typography.
- **Mineral Architecture** informs the geometry, planes, rules, clipping, and weight.
- **Luminous Editorial** supplies photography, warmth, and breathing room.
- Origin storytelling remains central.
- Coffee remains the destination rather than the animation itself.
- The experience complements the restrained, image-led Canyon Coffee reference direction instead of fighting it.
- It does not require WebGL or a heavyweight rendering layer.
- Mobile can preserve the complete story without reproducing the desktop spectacle.

## 1.3 Intended user reaction

Not:

> "This website has lots of animations."

Instead:

> "The way Red Clay presents its origins feels like moving through a beautifully designed publication."

---

# PART 2 — ROLE WITHIN THE SITE

## 2.1 Primary integration

The Earthen Folio occupies the canonical Section 5 slot on:

`/origins`

It sits between:

```text
01 ORIGIN THESIS
↓
02 THE EARTHEN FOLIO
↓
03 THREE REGIONAL TERRITORIES / CONTINUATION
↓
04 HOW TO READ AN ORIGIN
↓
05 CURRENT COFFEES
↓
06 RELATED EDITIONS
↓
07 CLOSING
```

The existing three-region territory cards may be:

1. retained after the Folio in a more compact form;
2. partially absorbed into the Folio if browser prototyping proves them redundant.

The Folio must not remove the ability to reach each regional dossier directly.

## 2.2 Homepage relationship

The homepage does **not** receive a duplicate Folio.

Allowed later:

- a quiet "Explore Origins" transition;
- a still or cropped preview from one Folio asset;
- a small folio-number motif such as `01 / 03`.

Not allowed:

- a second pinned Folio sequence;
- duplicate region choreography;
- forcing the signature interaction into the homepage.

## 2.3 Secondary page relationship

Origin dossier pages may reuse:

- folio numbering;
- fine editorial rules;
- chapter labels;
- image-mask language.

They must not reproduce the full signature sequence.

---

# PART 3 — CONTENT MODEL

Each Folio chapter must communicate only enough information to create desire and orientation.

## 3.1 Required chapter fields

```text
chapterNumber
regionName
country
shortDescriptor
elevationLabel [VERIFY]
placeStatement
processContext
cupNotes
primaryCoffeeLabel
dossierHref
leadAsset
detailAsset [optional]
altText
```

## 3.2 Working chapter content

### 01 / 03 — Central Kenya

**Region:** Central Kenya  
**Sub-region:** Nyeri / Kirinyaga context where appropriate and verified  
**Elevation:** `[VERIFY]`  
**Editorial character:** Structured, precise, high-contrast  
**Place:** Highland coffee landscapes and red-soil agricultural context  
**Process:** Regional washed-coffee and cooperative processing traditions, described without universalizing one exact method  
**Cup:** Provisional Red Clay sensory direction — blackcurrant, plum, cane sugar  
**Connected product:** `KENYA LOT 01` — final fictional name TBD  
**CTA:** `Explore Central Kenya`

### 02 / 03 — Kayanza / Burundi

**Region:** Kayanza  
**Country:** Burundi  
**Elevation:** `[VERIFY]`  
**Editorial character:** Layered, vertical, intimate  
**Place:** Steep highland hills and smallholder coffee systems  
**Process:** Regional washing-station context, stated carefully and factually  
**Cup:** Provisional Red Clay sensory direction — red apple, honey, orange blossom  
**Connected product:** `BURUNDI LOT 01` — final fictional name TBD  
**CTA:** `Explore Kayanza`

### 03 / 03 — Southern Ethiopia

**Region:** Southern Ethiopia  
**Sub-regions:** Guji / Gedeo-Yirgacheffe context only where geographically precise  
**Elevation:** `[VERIFY]`  
**Editorial character:** Layered, botanical, open  
**Place:** Montane, forest, and garden coffee landscapes  
**Process:** Regional washed and natural traditions described without implying one method across the region  
**Cup:** May acknowledge the two fictional Red Clay releases without collapsing them into one profile  
**Connected products:** `ETHIOPIA LOT 01`, `ETHIOPIA LOT 02` — final fictional names TBD  
**CTA:** `Explore Southern Ethiopia`

## 3.3 Content restraint

The Folio is not the full dossier.

Each active chapter should expose approximately:

- region name;
- one short place statement;
- one short process statement;
- one sensory line;
- one primary CTA;
- optional verified elevation label.

No long paragraphs, soil chemistry, dashboards, producer biographies, invented sourcing relationships, or large specification tables.

---

# PART 4 — DESKTOP EXPERIENCE

## 4.1 Activation threshold

Enhanced spatial behavior is intended primarily for:

- viewport width approximately `>= 1024px`;
- pointer or desktop-class input where available;
- users who have not requested reduced motion.

This is an implementation guideline, not a hard product breakpoint.

Below this threshold, use the mobile/tablet editorial flow.

## 4.2 Stage architecture

The experience contains:

1. **scroll track** — supplies native vertical scroll distance;
2. **sticky Folio stage** — remains in view while chapters transition;
3. **chapter layer** — region-specific image, title, metadata and CTA;
4. **folio index** — `01 / 03`, `02 / 03`, `03 / 03`;
5. **progress rule** — subtle indicator of position;
6. **static navigation** — direct entry points to each dossier.

Recommended stage:

- full-width background;
- interior frame aligned with the site's desktop content system;
- visual height approximately `calc(100svh - header offset)`;
- minimum stage height should preserve comfortable composition on shorter laptops.

Recommended scroll-track duration:

- approximately `260vh–320vh` total;
- validate in browser rather than locking a fixed value before prototyping.

The experience must never feel as if scrolling has stopped responding.

---

# PART 5 — DESKTOP COMPOSITION

## 5.1 Base composition

```text
┌────────────────────────────────────────────────────────────────────────────┐
│ ORIGIN INDEX                                             01 / 03           │
│                                                                            │
│ CENTRAL                                                                    │
│ KENYA                           ┌───────────────────────────────────────┐   │
│                                 │                                       │   │
│                                 │            LEAD IMAGE                 │   │
│                                 │                                       │   │
│                                 └───────────────────────────────────────┘   │
│                                                                            │
│ PLACE                      PROCESS                         CUP              │
│ short statement            short statement                notes            │
│                                                                            │
│                                                      Explore region →      │
└────────────────────────────────────────────────────────────────────────────┘
```

This is a compositional starting point rather than a final visual design.

## 5.2 Layout priorities

1. Photography dominates.
2. Region name provides the main typographic counterweight.
3. Metadata remains compact.
4. CTA remains immediately discoverable.
5. Empty space is intentional.
6. UI chrome is almost absent.

Do not surround the stage with cards.

---

# PART 6 — DESKTOP MOTION CHOREOGRAPHY

The sequence uses native scroll progress. No wheel hijacking and no forced snapping.

## 6.1 Phase 0 — Approach

Before the Folio pins:

- Origin thesis remains in normal document flow.
- A quiet chapter index appears below the thesis.
- The first image may be partially visible as an invitation.
- No large reveal should fire before the experience is actually near the viewport.

## 6.2 Phase 1 — Folio entry

As the stage becomes sticky:

- the primary photographic plate settles into position;
- `01 / 03` resolves;
- `CENTRAL KENYA` appears without a generic fade-up stack;
- thin editorial rules establish the composition;
- metadata arrives after the region identity, not simultaneously.

Suggested motion character:

- controlled;
- architectural;
- zero overshoot;
- minimal scale change;
- mostly opacity, translation and clip/mask transitions.

## 6.3 Chapter 01 — Central Kenya

Motion language:

**precision / lateral structure**

- lead image enters through a clean horizontal or vertical rectangular mask;
- title maintains strong static weight;
- metadata aligns into a crisp grid;
- optional detail image enters as a small folio inset rather than a carousel;
- progress rule advances quietly.

Do not use spinning, perspective flips, floating cards, dramatic parallax, or artificial topographic graphics.

## 6.4 Transition 01 → 02

The transition must feel like moving to another spread, not flipping a fake digital book.

Recommended choreography:

1. Kenya metadata withdraws first.
2. Kenya image holds for a fraction longer.
3. A basalt/bone editorial plane crosses or clips through the composition.
4. `01` changes to `02`.
5. Burundi imagery rises into the new composition.
6. Kayanza title resolves after the image has established place.

The image and typography should not all animate on identical timing.

## 6.5 Chapter 02 — Kayanza / Burundi

Motion language:

**vertical layering / hill rhythm**

- composition becomes slightly more vertical;
- supporting image or crop can sit above/below rather than beside the main image;
- metadata may stack more tightly;
- subtle stagger can imply layered ridges without literal terrain animation.

The chapter should feel related to Kenya but not templated.

## 6.6 Transition 02 → 03

Recommended choreography:

1. Burundi's structured vertical layers loosen.
2. the image field broadens;
3. a botanical/detail layer appears briefly as the visual bridge;
4. `02` transitions to `03`;
5. Southern Ethiopia enters with more visual breathing room and softer overlap.

## 6.7 Chapter 03 — Southern Ethiopia

Motion language:

**layered botanical depth / openness**

- primary image may occupy a broader canvas;
- optional botanical detail may overlap the edge of the main plate;
- typography can become slightly less rigid while remaining within the same grid system;
- the transition should imply density and shade without floating-leaf effects.

## 6.8 Folio exit

After the final CTA:

- pinned behavior releases naturally;
- folio framing/rules recede;
- the page returns to ordinary document scroll;
- `HOW TO READ AN ORIGIN` appears in the site's quieter Canyon-like editorial rhythm.

The user should feel a clear:

> **entrance → authored moment → release**

The signature interaction must not infect the rest of the page.

---

# PART 7 — SCROLL STATE MODEL

Suggested normalized progress model:

```text
0.00–0.08  Approach / entry
0.08–0.31  Chapter 01 — Central Kenya
0.31–0.40  Transition 01 → 02
0.40–0.63  Chapter 02 — Kayanza
0.63–0.72  Transition 02 → 03
0.72–0.95  Chapter 03 — Southern Ethiopia
0.95–1.00  Release / exit
```

These values are prototyping defaults only.

No chapter should require excessive scrolling after its content is already understood.

---

# PART 8 — DIRECT REGION NAVIGATION

The Folio must not require scrolling through all three chapters to reach a desired region.

## 8.1 Enhanced desktop navigation

Provide a small region index:

```text
01 Central Kenya
02 Kayanza / Burundi
03 Southern Ethiopia
```

A user may click or keyboard-activate a chapter label.

Enhanced behavior may scroll the native document to that chapter's position.

## 8.2 No-JS behavior

Without enhancement, the same region names behave as normal links to:

- `/origins/central-kenya`
- `/origins/kayanza-burundi`
- `/origins/southern-ethiopia`

Navigation must never depend on GSAP.

---

# PART 9 — MOBILE EXPERIENCE

Mobile does **not** reproduce the pinned desktop sequence.

The brand should feel like an **intimate pocket monograph**.

## 9.1 Mobile structure

```text
ORIGIN INDEX

Three highland regions.
Three ways into the coffee.

────────────────────

01 / 03
CENTRAL KENYA

[LEAD IMAGE — dedicated mobile crop]

Place
short context

Process
short context

Cup
sensory notes

[ Explore Central Kenya → ]

────────────────────

02 / 03
KAYANZA / BURUNDI

[LEAD IMAGE]

...

────────────────────

03 / 03
SOUTHERN ETHIOPIA

[LEAD IMAGE]

...

────────────────────

HOW TO READ AN ORIGIN
```

## 9.2 Mobile motion

Allowed:

- restrained image mask reveal as a chapter enters;
- folio number/progress update;
- subtle text resolution;
- small material-rule movement.

Avoid:

- pinned 250vh sequences;
- horizontal swipe dependency;
- simulated page turning;
- large parallax;
- cursor-equivalent gimmicks;
- forced carousels.

## 9.3 Mobile interaction

Primary touch interaction is ordinary vertical scroll.

The CTA is a normal link/button.

No gesture should be required to understand or navigate the experience.

## 9.4 Mobile image strategy

Each lead image should either:

1. have a dedicated mobile crop; or
2. be generated/framed with enough focal safety for a portrait crop.

Do not simply center-crop a desktop landscape when it destroys the subject.

---

# PART 10 — TABLET EXPERIENCE

Tablet should not be treated as a shrunken desktop.

Recommended default:

- normal document scroll;
- wider editorial image/text pairs;
- no long pinned Folio stage below approximately desktop-class widths;
- optional two-column composition for each chapter;
- same chapter numbering and editorial transition language.

A short sticky treatment at larger tablet widths may be tested later, but is not required.

---

# PART 11 — STATIC FALLBACK

The static fallback is a complete experience, not an error state.

## 11.1 Required fallback content

Three region entries containing:

- region name;
- image;
- one-sentence place context;
- one-sentence process context;
- sensory line;
- link to dossier.

## 11.2 Fallback conditions

Use the static/stacked version when:

- JavaScript is unavailable;
- motion enhancement fails;
- `prefers-reduced-motion: reduce` is active and the richer sequence would be distracting;
- device capability or viewport makes the pinned experience inappropriate;
- runtime feature detection determines the enhanced sequence is unsafe.

The user must lose no destination or essential meaning.

---

# PART 12 — REDUCED MOTION

For `prefers-reduced-motion: reduce`:

- disable scrubbed clip/mask choreography;
- disable large scroll-linked translations;
- disable decorative parallax;
- do not pin for an extended cinematic sequence;
- present chapters as clear stacked editorial sections;
- preserve region index, images, content and dossier links;
- simple opacity changes are optional but not necessary.

No content may remain visually hidden waiting for animation.

---

# PART 13 — KEYBOARD & ACCESSIBILITY

## 13.1 Semantic structure

Recommended semantics:

```html
<section aria-labelledby="origins-folio-title">
  <header>...</header>
  <nav aria-label="Origin chapters">...</nav>
  <article>Central Kenya...</article>
  <article>Kayanza...</article>
  <article>Southern Ethiopia...</article>
</section>
```

## 13.2 Requirements

- one logical heading hierarchy;
- region index keyboard accessible;
- visible focus states;
- chapter CTA remains a real link;
- no hover-only information;
- meaningful photography has useful alt text;
- decorative masks and planes are hidden from assistive technology;
- active chapter may expose `aria-current` or equivalent where appropriate;
- focus must not jump as scroll-linked states change;
- no automatic focus changes on chapter transition;
- no audio.

## 13.3 Screen reader principle

Screen readers should encounter the three region chapters in logical document order regardless of visual layering.

---

# PART 14 — VISUAL MOTION LANGUAGE

## 14.1 Motion vocabulary

Use:

- rectangular masks;
- clipped photographic plates;
- fine rules;
- controlled translation;
- carefully offset timing;
- restrained opacity;
- low-amplitude depth;
- occasional material-plane transitions.

Avoid:

- generic fade-up on every element;
- elastic easing;
- springy UI;
- card explosions;
- rotation;
- 3D page flips;
- exaggerated zoom;
- particle effects;
- animated maps;
- decorative paths without purpose;
- scroll snapping that takes control from the user.

## 14.2 Easing character

Motion should feel architectural rather than playful:

- smooth acceleration/deceleration;
- controlled cubic curves;
- no overshoot;
- no bounce.

Final easing tokens belong to the global Motion & Interaction Spec later.

---

# PART 15 — ASSET REQUIREMENTS

The Folio should be visually rich without becoming asset-prohibitive.

## 15.1 Minimum production set

### Central Kenya

- `S5-FOLIO-KENYA-LEAD-D`
- `S5-FOLIO-KENYA-LEAD-M`
- `S5-FOLIO-KENYA-DETAIL`

### Kayanza / Burundi

- `S5-FOLIO-BURUNDI-LEAD-D`
- `S5-FOLIO-BURUNDI-LEAD-M`
- `S5-FOLIO-BURUNDI-DETAIL`

### Southern Ethiopia

- `S5-FOLIO-ETHIOPIA-LEAD-D`
- `S5-FOLIO-ETHIOPIA-LEAD-M`
- `S5-FOLIO-ETHIOPIA-DETAIL`

### Shared

- `S5-FOLIO-MATERIAL-PLANE` — optional subtle material texture
- `S5-FOLIO-POSTER` — optional static composition for documentation/case study

## 15.2 Asset count target

**Minimum:** 6 lead assets if dedicated mobile versions are necessary.  
**Comfortable target:** 9 region assets including one detail plate per region.

Do not create dozens of animation frames.

## 15.3 Existing-asset reuse

Section 6 should first test whether existing Origin and validation assets can serve as Folio sources before generating dedicated imagery.

## 15.4 Asset rules

- do not bake typography into images;
- region-specific assets require geographic/art-direction verification;
- people must not be presented as identifiable real producers unless true;
- no invented real station branding;
- preserve Canyon-like photographic breathing room while using Red Clay's laterite/basalt/material identity;
- mobile crops must be intentionally composed.

---

# PART 16 — TECHNICAL IMPLEMENTATION DIRECTION

This is a preferred implementation approach for Codex, not a final global stack decision.

## 16.1 Preferred technology

Use:

- semantic HTML;
- responsive CSS;
- React/Next.js page structure;
- GSAP + ScrollTrigger for enhanced desktop choreography;
- CSS `position: sticky`;
- transforms, opacity and clip/mask techniques;
- native links and buttons.

Do **not** introduce WebGL or Three.js for The Earthen Folio unless later browser prototyping proves a specific visual requirement cannot reasonably be achieved otherwise.

The current concept does not require them.

## 16.2 Progressive-enhancement architecture

```text
BASE DOM
= complete stacked three-chapter experience

        ↓ feature / viewport / motion eligibility

ENHANCED DESKTOP MODE
= same content transformed into sticky Folio stage
```

Do not create a completely separate inaccessible desktop application.

## 16.3 Suggested component model

```text
OriginFolio
├── OriginFolioHeader
├── OriginFolioNav
├── OriginFolioStage
│   ├── OriginChapter
│   │   ├── OriginChapterMedia
│   │   ├── OriginChapterTitle
│   │   ├── OriginChapterMeta
│   │   └── OriginChapterCTA
│   ├── OriginChapter
│   └── OriginChapter
├── FolioProgress
└── Base-flow / fallback behavior
```

Avoid excessive component fragmentation if simple composition is clearer.

## 16.4 Suggested data shape

```ts
type OriginFolioChapter = {
  id: string;
  number: "01" | "02" | "03";
  region: string;
  country: string;
  descriptor: string;
  elevation?: string;
  place: string;
  process: string;
  cupNotes: string[];
  coffeeLabels: string[];
  href: string;
  leadDesktop: string;
  leadMobile?: string;
  detail?: string;
  alt: string;
};
```

## 16.5 GSAP architecture

Preferred:

- scope animation to the Folio component;
- use framework-appropriate GSAP cleanup;
- use responsive match-media handling;
- destroy triggers cleanly on unmount;
- avoid global timeline state;
- derive active chapter from scroll progress;
- use native scrolling;
- do not require smooth-scroll middleware for correctness.

Lenis, if used globally later, must remain optional.

---

# PART 17 — PERFORMANCE STRATEGY

## 17.1 Principles

- The signature experience must not delay core page content.
- Load only the first necessary Folio visual eagerly if it is near the viewport; lazy-load later chapter media.
- Use responsive AVIF/WebP where appropriate.
- Supply explicit media dimensions/aspect ratios to avoid layout shift.
- Do not ship WebGL.
- Do not autoplay video as part of the core Folio.
- Code-split enhancement logic where practical.
- Avoid continuous high-cost JavaScript work on every scroll event.
- Avoid large blurred layers and expensive filter animation.

## 17.2 Performance validation

Test:

- mid-range mobile device profile;
- throttled mobile network;
- 1366×768 laptop;
- 1440 desktop;
- high-DPI desktop;
- reduced-motion mode.

If the Folio causes obvious frame drops, reduce layers/masks before reducing content.

---

# PART 18 — FAILURE & DEGRADATION MODEL

If enhanced JavaScript fails:

> stacked editorial chapters remain.

If one image fails:

> region title, text and dossier link remain usable.

If motion is disabled:

> chapter hierarchy remains complete.

If viewport orientation changes:

> enhanced mode may rebuild or drop back to standard flow rather than preserve a broken pinned state.

If browser support for a mask technique is weak:

> use opacity/translation or a simple clipped container.

The static experience is always acceptable.

---

# PART 19 — CONTENT & FACTUAL SAFETY

The Folio inherits Red Clay's canonical fictional-brand rules.

Do not imply:

- real Red Clay sourcing from named stations;
- verified producer partnerships;
- real premiums/payments;
- real interviews;
- universal processing rules;
- deterministic soil/elevation → flavor causality.

Mark for verification before final production copy:

- exact elevation ranges;
- specific cultivar claims;
- processing durations;
- regional terminology;
- station-level details.

The Folio's job is storytelling and orientation, not scientific proof.

---

# PART 20 — DESIGN ANTI-PATTERNS

Reject implementations that look like:

- three generic cards inside a pinned container;
- a SaaS feature section;
- a bento grid;
- a literal book with page-curl animation;
- an interactive tourist map;
- a coffee-science dashboard;
- full-screen text animations with no product relevance;
- endless parallax photography;
- a generic Awwwards scroll demo disconnected from commerce;
- a clone of Canyon Coffee's layouts;
- an Onyx-style maximalist promo wall.

The visual system should borrow **restraint and clarity** from the references while remaining unmistakably Red Clay.

---

# PART 21 — PROTOTYPE ORDER

## Prototype 1 — Mechanics

Use placeholder blocks/images.

Validate:

- native scroll distance;
- sticky stage;
- chapter timing;
- direct region navigation;
- clean release at the end;
- responsive mode switching.

## Prototype 2 — Composition

Use representative Red Clay assets.

Validate:

- image dominance;
- text positioning;
- chapter differentiation;
- negative space;
- viewport edge cases.

## Prototype 3 — Motion language

Add:

- masks;
- material planes;
- stagger;
- region-specific transitions.

Validate restraint.

## Prototype 4 — Accessibility/performance

Validate:

- keyboard;
- no-JS;
- reduced motion;
- mobile fallback;
- frame rate;
- lazy loading;
- resize/orientation behavior.

Only then should the Folio receive final assets and visual polish.

---

# PART 22 — CODEX IMPLEMENTATION ACCEPTANCE CRITERIA

## Functional

- [ ] `/origins` works with JavaScript disabled.
- [ ] All three dossier links are reachable without completing the animated sequence.
- [ ] Enhanced desktop mode uses native scrolling.
- [ ] The sticky stage enters and exits without trapping scroll.
- [ ] Direct chapter navigation works.
- [ ] Resize/orientation changes do not leave broken pinned states.
- [ ] The rest of the Origins page continues normally after the Folio.

## Mobile

- [ ] Mobile uses a natural stacked editorial sequence.
- [ ] No long pinned scroll sequence is required.
- [ ] No hover dependency exists.
- [ ] Dedicated crops are used where desktop assets do not work.
- [ ] All three chapters remain fully understandable.

## Accessibility

- [ ] Keyboard access reaches region navigation and all CTAs.
- [ ] Focus is never moved automatically by scroll transitions.
- [ ] Reduced-motion mode removes extended scroll choreography.
- [ ] Screen-reader order remains logical.
- [ ] Decorative animation layers are hidden from assistive technology.
- [ ] Meaningful images have appropriate alt text.

## Performance

- [ ] No WebGL/Three.js dependency is introduced for this concept.
- [ ] Below-the-fold chapter imagery is lazy-loaded.
- [ ] Media dimensions prevent layout shift.
- [ ] Animation remains smooth on target desktop hardware.
- [ ] Mobile loads the non-cinematic experience without desktop-only asset waste.
- [ ] Enhancement code is isolated from core commerce/navigation.

## Visual / Art Direction

- [ ] The experience resembles an interactive editorial monograph, not a slideshow.
- [ ] Photography dominates UI chrome.
- [ ] Each region has distinct rhythm while remaining part of one system.
- [ ] Transitions are architectural and restrained.
- [ ] There is no literal page-turn effect.
- [ ] Canyon influence is visible as restraint, not imitation.
- [ ] Red Clay's laterite, basalt, tactile materials and origin identity remain unmistakable.

---

# PART 23 — SECTION 6 ASSET HANDOFF

Section 6 must now account for The Earthen Folio.

Add:

```text
S5-FOLIO-KENYA-LEAD-D
S5-FOLIO-KENYA-LEAD-M
S5-FOLIO-KENYA-DETAIL

S5-FOLIO-BURUNDI-LEAD-D
S5-FOLIO-BURUNDI-LEAD-M
S5-FOLIO-BURUNDI-DETAIL

S5-FOLIO-ETHIOPIA-LEAD-D
S5-FOLIO-ETHIOPIA-LEAD-M
S5-FOLIO-ETHIOPIA-DETAIL

S5-FOLIO-MATERIAL-PLANE        [OPTIONAL]
S5-FOLIO-POSTER                [OPTIONAL / CASE STUDY]
```

Before producing new imagery, compare these needs with the existing Origin and validation assets to minimize redundant production.

---

# PART 24 — SECTION 7 CODE-FIRST ART DIRECTION HANDOFF

The future code-first interface art-direction phase must define:

- final Folio typography scale;
- final grid coordinates;
- laterite/basalt/bone surface states;
- exact mask geometry;
- chapter-specific image crops;
- transition easing/durations;
- border/rule treatment;
- folio index styling;
- CTA styling;
- visual relationship to Canyon-inspired site restraint;
- browser visual-target screenshots.

These details are intentionally not overlocked in Section 5.

---

# PART 25 — FINAL LOCK

## Approved

**Signature Experience:** The Earthen Folio

**Primary location:** `/origins`

**Core behavior:** Three origin chapters expressed as a spatial editorial monograph using native scroll, sticky desktop composition, photographic plates, restrained typography, architectural masks, and region-specific transition rhythms.

**Mobile:** Natural stacked pocket-monograph flow.

**Static/reduced-motion fallback:** Complete three-region editorial sequence with direct dossier links.

**Preferred technology:** CSS + semantic HTML + GSAP/ScrollTrigger progressive enhancement.

**Explicitly not required:** WebGL, Three.js, map, elevation simulator, 3D vessel, video, scroll-jacking, page-turn simulation.

## Section 5 Completion Statement

The concept, placement, responsive behavior, choreography, content model, asset requirements, accessibility model, fallback behavior, technical direction, performance principles, prototype order, and implementation acceptance criteria are now defined sufficiently for Section 6 asset planning and later Codex implementation.

**Section 5 — Signature Digital Experience: COMPLETE.**
