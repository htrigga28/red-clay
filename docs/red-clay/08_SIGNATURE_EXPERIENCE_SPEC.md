# Red Clay Coffee — Earthen Folio Engineering Specification

**Canonical concept:** The Earthen Folio  
**Primary route:** `/origins`  
**Status:** Approved concept consolidated for engineering; not redesigned here.

## Purpose and boundaries

The Earthen Folio presents Central Kenya, Kayanza / Burundi, and Southern Ethiopia as three spatial editorial chapters. It should feel like moving through a beautifully designed publication, not noticing “lots of animation.” Coffee and dossier discovery are the destination.

It is not a map, terrain/elevation tool, WebGL scene, 3D book, literal page turn, data visualization, slideshow, or scroll-jacked presentation.

## Placement

`Origin Thesis → Earthen Folio → compact region continuation [prototype decision] → How to Read an Origin → Current Coffees → Related Editions → Shop close`

Homepage may show one still/crop, `01 / 03`, or a quiet Origins transition. It must not reproduce the sequence. Dossiers may reuse numbering, rules, and masks only.

## Content contract

```ts
type OriginFolioChapter = {
  id: string;
  number: "01" | "02" | "03";
  region: string;
  country: string;
  descriptor: string;
  elevation?: string; // [VERIFY]
  place: string; // fact-check
  process: string; // fact-check; regional, not universal
  cupNotes: string[]; // provisional sensory direction
  coffeeLabels: string[]; // final fictional names TBD
  href: string;
  leadDesktop: string;
  leadMobile?: string;
  detail?: string;
  alt: string;
};
```

Each active chapter exposes region, one short place statement, one short process statement, one sensory line, one CTA, and optional verified elevation. Long prose and technical tables belong in dossiers.

## Base DOM and progressive enhancement

The base document is a complete stacked sequence:

```html
<section aria-labelledby="origins-folio-title">
  <header>...</header>
  <nav aria-label="Origin chapters">...</nav>
  <article id="central-kenya">...</article>
  <article id="kayanza-burundi">...</article>
  <article id="southern-ethiopia">...</article>
</section>
```

The same content is visually transformed in eligible desktop mode. Do not build a separate inaccessible desktop application. Without JS, region nav entries are normal dossier links.

## Desktop eligibility

Prototype enhanced mode around:

- approximately `min-width: 1024px`;
- suitable viewport height and pointer/device capability;
- no `prefers-reduced-motion: reduce`;
- successful feature detection.

This is an eligibility policy, not a final hard breakpoint. Tablet and short/unsafe viewports fall back to ordinary editorial flow.

## Desktop stage architecture

- Native vertical scroll track, provisional total `260vh–320vh`.
- Sticky stage height near `calc(100svh - header offset)` with minimum height for short laptops.
- Interior aligns to the desktop 12-column frame.
- Layer inventory: chapter media, region title, compact metadata, CTA, `01 / 03` index, progress rule, optional detail plate, optional material plane.
- Photography dominates; UI chrome is almost absent; no surrounding card shell.
- Direct chapter nav can scroll the native document to chapter progress positions.

## Scroll state model

Prototype defaults only:

| Progress | State |
|---|---|
| `0.00–0.08` | Approach / entry |
| `0.08–0.31` | Central Kenya |
| `0.31–0.40` | Kenya → Burundi transition |
| `0.40–0.63` | Kayanza / Burundi |
| `0.63–0.72` | Burundi → Ethiopia transition |
| `0.72–0.95` | Southern Ethiopia |
| `0.95–1.00` | Release / exit |

Do not force extra scrolling after a chapter is understood. Exact progress is tuned against real composition and short-laptop testing.

## Choreography

### Approach and entry

- Thesis remains normal flow.
- Direct chapter index is already usable.
- First image edge may invite entry.
- No reveal fires before the component approaches viewport.
- On pin: lead plate settles, `01 / 03` resolves, region title establishes weight, then metadata arrives with offset timing.

### Central Kenya — precision / lateral structure

- Clean rectangular mask; crisp grid; title carries static weight.
- Optional detail is a folio inset, not carousel.
- No topographic decoration, spin, perspective, or dramatic parallax.

### Transition 01 → 02

- Metadata withdraws before lead image.
- Basalt/Bone plane clips across.
- `01` becomes `02`.
- Burundi image rises/establishes place; title follows.
- Do not animate every element on the same beat.

### Kayanza / Burundi — vertical layering / hill rhythm

- More vertical composition; detail may sit above/below main plate.
- Metadata may stack more tightly.
- Stagger implies layered ridges without literal terrain animation.

### Transition 02 → 03

- Vertical layers loosen and image field broadens.
- Brief botanical/detail bridge.
- `02` becomes `03`.
- Ethiopia enters with more breathing room and softer overlap.

### Southern Ethiopia — botanical depth / openness

- Broader primary canvas; optional botanical detail may overlap plate edge.
- Typography is slightly less rigid but remains on the shared grid.
- No floating-leaf effect.

### Release

- Pin releases naturally.
- Rules/planes recede.
- Ordinary page scroll resumes into `How to Read an Origin`.
- Clear entrance → authored interval → release.

## Mobile and tablet

Mobile is a stacked pocket monograph:

`thesis → 01 image/place/process/cup/CTA → 02... → 03... → How to Read an Origin`

- Natural vertical scroll; no long pin, swipe dependency, carousel, page turn, or cursor substitute.
- Dedicated lead crop when landscape center-crop fails.
- Allowed motion: one restrained image mask, folio-number update, subtle text/rule resolution.
- Tablet defaults to the same flow with wider image/text pairs; optional two-column chapters, no long pin.

## Reduced motion and static fallback

When reduced motion is active or enhancement is unsafe:

- no extended pinning;
- no scrubbed masks, large translations, parallax, or hidden waiting content;
- render all chapters in normal flow with index, images, complete text, and dossier links;
- simple opacity is optional, not required.

Fallback is a complete designed state, not an error state.

## Accessibility

- Logical DOM/heading order independent of layered visuals.
- Region nav keyboard accessible and visually focused.
- CTA is a real link; no hover-only information.
- No automatic focus movement or chapter announcements that overwhelm users.
- Active chapter may use `aria-current` where appropriate.
- Decorative planes/masks are hidden from assistive technology.
- Meaningful images have accurate alt; failed image never removes title/text/link.
- No audio.

## Asset requirements

| Region | Desktop lead | Mobile lead | Detail |
|---|---|---|---|
| Central Kenya | `S5-FOLIO-KENYA-LEAD-D` | `S5-FOLIO-KENYA-LEAD-M` | `S5-FOLIO-KENYA-DETAIL` |
| Kayanza/Burundi | `S5-FOLIO-BURUNDI-LEAD-D` | `S5-FOLIO-BURUNDI-LEAD-M` | `S5-FOLIO-BURUNDI-DETAIL` |
| Southern Ethiopia | `S5-FOLIO-ETHIOPIA-LEAD-D` | `S5-FOLIO-ETHIOPIA-LEAD-M` | `S5-FOLIO-ETHIOPIA-DETAIL` |

Shared: optional `S5-FOLIO-MATERIAL-PLANE`; optional case-study `S5-FOLIO-POSTER`.

Section 6 must test reuse from existing Origin/validation families before new production. Do not bake type into imagery. All geography/people sensitivity rules apply.

## GSAP direction

- Preferred: CSS sticky + scoped GSAP/ScrollTrigger progressive enhancement.
- Use framework-safe setup/cleanup and responsive match-media handling.
- Destroy triggers/timelines on unmount and rebuild/drop to base flow on resize/orientation changes.
- Derive active chapter from normalized progress; keep state local to Folio.
- Use transforms, opacity, and simple clip/mask containers; provide fallback for weak mask support.
- No global timeline state and no smooth-scroll middleware dependency. Lenis, if used elsewhere, remains optional.
- Direct navigation maps to native scroll positions; correctness cannot depend on GSAP.

## Performance

- Core `/origins` content is not blocked by enhancement code.
- Eager-load only the first necessary Folio image when near viewport; lazy-load later chapters.
- Use responsive AVIF/WebP where appropriate and explicit dimensions/aspect ratios.
- Do not send desktop-only images or enhancement JS to mobile when avoidable.
- No WebGL/Three.js or core autoplay video.
- Avoid large blur/filter animations and continuous expensive scroll handlers.
- Test mid-range mobile/throttled network, 1366×768, 1440, high-DPI, reduced motion, resize/orientation.
- If frames drop, reduce layers/masks before removing content.

## Failure modes

| Failure | Required behavior |
|---|---|
| JS/enhancement fails | Stacked chapters remain complete. |
| One image fails | Region identity, text, and dossier link remain. |
| Mask unsupported | Simple clipped container or opacity/translation. |
| Resize/orientation changes | Rebuild safely or fall back; never leave broken pin/spacer. |
| Direct nav before enhancement ready | Normal dossier link or native anchor remains usable. |
| Reduced motion toggles | Tear down extended choreography and show normal flow. |

## Acceptance criteria

### Functional

- [ ] `/origins` works without JS.
- [ ] All dossier links are reachable without completing scroll choreography.
- [ ] Native scrolling is preserved; stage never traps scroll.
- [ ] Stage enters and releases cleanly.
- [ ] Direct chapter navigation works.
- [ ] Resize/orientation leaves no stale pin/spacer state.
- [ ] Page continues normally after Folio.

### Mobile/accessibility

- [ ] Natural stacked sequence; no long pin/hover dependency.
- [ ] Dedicated crops where necessary; no desktop asset waste.
- [ ] Keyboard reaches index/CTAs; focus is not auto-moved.
- [ ] Screen-reader order is logical.
- [ ] Reduced motion removes extended choreography.
- [ ] Decorative layers are hidden; meaningful alt is present.

### Performance/visual

- [ ] No WebGL/Three.js dependency.
- [ ] Later media is lazy and dimensioned.
- [ ] Enhancement is isolated from commerce/navigation.
- [ ] The result reads as an interactive monograph, not slideshow/cards/book/map.
- [ ] Each region has distinct rhythm within one system.
- [ ] Canyon influence appears as restraint; Red Clay remains unmistakable.

## Prototype order

1. Mechanics with placeholders: native track, pin, timing, direct nav, release, mode switching.
2. Composition with representative assets: dominance, negative space, viewport edge cases.
3. Motion language: masks, planes, stagger, region differentiation.
4. Accessibility/performance: keyboard, no-JS, reduced motion, mobile, frame rate, lazy load, resize.

Final imagery and timing polish follow these validations; this is not authorization to begin implementation in Round 1.
