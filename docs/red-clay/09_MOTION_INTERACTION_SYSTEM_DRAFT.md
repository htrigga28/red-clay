# Red Clay Coffee — Global Motion & Interaction System Draft

**Document version:** 1.1.0  
**Change note:** Round 1.1 adds restrained desktop editorial reveal-menu motion without increasing global animation density.  
**Scope:** Quieter site-wide motion surrounding—but not duplicating—the Earthen Folio. Exact durations/easing remain open until browser prototypes exist.

## Motion thesis

Motion clarifies hierarchy, reveals material, and bridges editorial chapters. It does not perform personality on every element. The site should feel calm at rest; authored motion is concentrated in a few moments.

Default vocabulary: rectangular masks, controlled translation, short opacity changes, fine-rule movement, image swap, bounded sticky state, and occasional material-plane transition. No bounce, overshoot, decorative rotation, universal fade-up, particle field, scroll-jacking, or smooth-scroll dependency.

## Global principles

- Native scrolling is the source of truth.
- The initial rendered state is meaningful; motion enhances it.
- Animate transform/opacity/clip where practical; avoid layout thrash and filter-heavy effects.
- Do not animate every child. One section may resolve as one composition.
- Input state feedback is faster than editorial choreography.
- Mobile uses fewer layers, shorter travel, and no hover substitute.
- Reduced motion removes decorative travel, scrubbing, parallax, ambient loops, and extended pinning.
- Motion never delays Add to Bag, menu/cart access, or reading.

## Motion families

### Hero

**Purpose:** Establish calm presence and guide eye from image to proposition/action.  
**Trigger:** Initial render after critical media is ready; avoid blocking content.  
**Mobile:** Static first frame; optional small image settle or single mask; copy is already readable.  
**Desktop:** 1–2% image settling, controlled copy/rule resolution, optional subtle natural texture/light layer.  
**Reduced motion:** Static image and copy; no transition required.  
**Performance risk:** LCP delay, large transformed image, autoplay media.  
**Avoid:** Word-by-word cascade, full-screen loading intro, dramatic zoom, looping camera move.

### Continuum — Earth → Coffee → Vessel → Ritual

**Purpose:** Clarify conceptual progression.  
**Trigger:** Section intersection or normal reading scroll.  
**Mobile:** Static stacked beats; optional active rule/label as each enters.  
**Desktop:** A fine rule/progress marker travels or emphasis shifts across four fixed beats; content is visible before animation.  
**Reduced motion:** All beats visible with static rule.  
**Performance risk:** Scroll listener overwork for a tiny effect.  
**Avoid:** Icon morphing, data visualization, four cards flying in, forced horizontal scroll.

### Product cards

**Purpose:** Reveal a secondary product context and expose a purchase shortcut.  
**Trigger:** Pointer hover/focus within eligible desktop card; explicit tap/button on touch.  
**Mobile:** Primary image and action visible; no hover simulation. Optional second image appears only in explicit gallery/sheet.  
**Desktop:** Alternate image crossfade or rectangular clip; quick-add bar/action resolves within image plane; card geometry does not move.  
**Reduced motion:** Instant image swap/action visibility, or keep primary image.  
**Performance risk:** Preloading all alternate images, layout shift, hover flicker between descendants.  
**Avoid:** Lift, scale, bounce, 3D tilt, cursor trail, auto-cycling product images.

### Quick-add sheet/popover

**Purpose:** Gather required format/grind without navigating away.  
**Trigger:** Explicit Quick Add.  
**Mobile:** Bottom sheet with focus trap, safe area, fast vertical transition.  
**Desktop:** Compact anchored popover or small modal/sheet based on option complexity.  
**Reduced motion:** Instant open/close with backdrop state.  
**Performance risk:** duplicate cart state, focus loss, nested scroll.  
**Avoid:** Silent default selection, swipe-only dismissal, celebratory animation.

### Editorial images and plates

**Purpose:** Introduce a chapter, reveal tactile detail, or create visual release.  
**Trigger:** When a significant plate approaches viewport; not every image.  
**Mobile:** Simple clip/opacity, short travel, or no motion. Full-width expansion is layout, not animation.  
**Desktop:** Rectangular mask, restrained vertical/lateral translation, occasional contained-to-wide expansion where the DOM and aspect ratio support it.  
**Reduced motion:** Final image visible immediately.  
**Performance risk:** oversized layers, clip-path complexity, layout shift, scroll-linked continuous scaling.  
**Avoid:** parallax on every plate, blurred reveals, rotation, image distortion, hidden captions.

### Featured Edition / publication chapter

**Purpose:** Mark the shift from commerce to reading.  
**Trigger:** Featured Edition enters viewport or article navigation.  
**Mobile:** Image appears, folio/volume rule resolves, title remains stable.  
**Desktop:** One plate mask and an offset masthead/rule transition; optional brief pinned image only if prototype proves value.  
**Reduced motion:** Static spread.  
**Performance risk:** long pin for little content, duplicated page transition.  
**Avoid:** Onyx-style promo barrage, multiple staggered text lines, fake magazine page turn.

### PDP gallery and buy module

**Purpose:** Make image selection, options, and purchase state legible.  
**Trigger:** Thumbnail/select/variant action; buy module crossing viewport boundary.  
**Mobile:** Gallery crossfade/slide with user control; sticky bar appears only after main module exits and disappears when it returns/cart opens.  
**Desktop:** Image crossfade/clip; purchase panel uses CSS sticky and releases before related content.  
**Reduced motion:** Instant image/state change; sticky behavior may remain if not cinematic.  
**Performance risk:** duplicate focusable controls, sticky collision, high-resolution gallery preload.  
**Avoid:** spinning product, auto-advancing gallery, full-page pinned buy module, animated price counting.

### Related products

**Purpose:** Continue curation after PDP/article.  
**Trigger:** Normal section entry and card interaction.  
**Mobile:** Static compact list/grid; no forced carousel.  
**Desktop:** Cards use the shared alternate-image behavior; section itself does not animate as a group.  
**Reduced motion:** Static.  
**Performance risk:** extra image downloads late in page.  
**Avoid:** infinite carousel, autoplay, aggressive cross-sell drawer.

### Navigation header

**Purpose:** Maintain access while minimizing visual occupation.  
**Trigger:** Menu action; meaningful scroll direction; route state.  
**Mobile:** Smart-hide only after threshold; reveal promptly on upward intent; full-screen menu opens with fast opacity/clip/translate.  
**Desktop:** Pinned or smart-hide after prototype; active route uses rule/underline. The Shop and Origins editorial reveal panels open as one restrained field using a short height/clip/opacity transition and subdued page separation. One contextual image may resolve with the field; link groups do not cascade individually. Close on Escape, route selection, or outside action and restore focus.  
**Reduced motion:** Header and panel state changes are instant or opacity-only; no spatial stagger.  
**Performance risk:** noisy scroll handlers, header jitter, content jump, backdrop blur, delayed asset loading, or focus loss between trigger and panel.  
**Avoid:** delayed access, elaborate menu stagger, giant taxonomy motion, promotional tile cascade, navigation sounds, glassmorphism dependence. Reduce to the simple header if testing makes the catalog feel artificially large.

### Page transition exploration

**Purpose:** Provide continuity between editorial/commerce routes only if routing architecture supports reliable progressive enhancement.  
**Trigger:** Internal navigation after immediate feedback.  
**Mobile:** Default browser/app transition unless a very short opacity treatment adds value.  
**Desktop:** Optional material plane or image-continuity prototype; content must never be blocked by animation failure.  
**Reduced motion:** Instant route change.  
**Performance risk:** delayed navigation, stale scroll position, hydration complexity, accessibility confusion.  
**Avoid:** mandatory transition layer, long branded loader, hijacked back navigation.  
**Status:** Exploration only; not a Round-1 requirement.

### Cart drawer

**Purpose:** Confirm and edit purchase without losing page context.  
**Trigger:** Bag/add action.  
**Mobile:** Fast bottom-sheet translate; backdrop; body lock; focus trap; safe-area padding.  
**Desktop:** Right drawer translate with restrained backdrop opacity.  
**Reduced motion:** Instant drawer/backdrop state.  
**Performance risk:** scroll locking bugs, focus loss, layout shift from scrollbar removal.  
**Avoid:** spring bounce, confetti, slow staged line items, swipe-only close.

### Form and cart feedback

**Purpose:** Make state change truthful and immediately understandable.  
**Trigger:** Submit, option selection, add/update/remove.  
**Mobile/Desktop:** Button loading state preserves size; inline status/error; quantity changes are localized; no full-page animation.  
**Reduced motion:** Same behavior.  
**Performance risk:** optimistic state that lies, duplicate announcements.  
**Avoid:** animated counters disconnected from server/cart state, disappearing errors, success animation instead of text.

### Footer/newsletter

**Purpose:** Provide a calm close and clear form feedback.  
**Trigger:** Link hover/focus and newsletter submit only.  
**Mobile/Desktop:** Rule/arrow hover and localized success/error.  
**Reduced motion:** Instant.  
**Performance risk:** none significant.  
**Avoid:** newsletter modal, marquee, social-feed auto-scroll.

## Earthen Folio boundary

The Folio is the only approved extended scroll-linked choreography. Its rules live in `08_SIGNATURE_EXPERIENCE_SPEC.md`. Global motion must become quieter before and after it. Do not reuse its full sticky stage, three-chapter timing, or material-plane transitions elsewhere.

## Prototype variables to tune in browser

- Duration bands for utility versus editorial transitions.
- Final cubic-bezier/easing tokens; character must have no overshoot or bounce.
- Image-mask geometry and travel distances.
- Smart-hide thresholds and header behavior on desktop.
- Quick-add reveal behavior with real product copy.
- Sticky buy intersection thresholds and collision with browser safe areas.
- Whether any article/featured-Edition pin materially improves composition.

Do not declare these final in source tokens before screenshot review at 390, 768, 1366×768, and 1440 widths plus reduced-motion mode.

## Motion QA checklist

- [ ] Content and actions are present before enhancement.
- [ ] No interaction depends only on hover, swipe, or animation completion.
- [ ] Reduced motion removes decorative and extended choreography.
- [ ] No transition delays navigation or cart completion.
- [ ] Sticky elements enter/release without overlap or scroll trap.
- [ ] Image swaps do not cause layout shift.
- [ ] Animations stay smooth without loading unnecessary desktop media on mobile.
- [ ] Motion is absent where it adds no hierarchy, feedback, or material meaning.
