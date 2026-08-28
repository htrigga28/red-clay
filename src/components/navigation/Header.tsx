"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { type HeroTone, homeHeroToneEvent } from "@/content/homeHero";
import { navigation } from "@/content/navigation";
import { redClayAssets } from "@/lib/assets/registry";
import { useBag } from "@/components/commerce/BagProvider";

gsap.registerPlugin(SplitText);

type Reveal = "shop" | "origins" | null;

export function Header() {
  const pathname = usePathname();
  const { count, open: openBag } = useBag();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reveal, setReveal] = useState<Reveal>(null);
  const [heroTone, setHeroTone] = useState<HeroTone>("light");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelButtonRef = useRef<HTMLButtonElement>(null);
  const originButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    setMobileOpen(false);
    setReveal(null);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) return;

    const onHeroTone = (event: Event) => {
      const tone = (event as CustomEvent<HeroTone>).detail;
      if (tone === "light" || tone === "dark") setHeroTone(tone);
    };

    const initialTone = document.documentElement.dataset.homeHeroTone;
    if (initialTone === "light" || initialTone === "dark") setHeroTone(initialTone);
    document.addEventListener(homeHeroToneEvent, onHeroTone);
    return () => document.removeEventListener(homeHeroToneEvent, onHeroTone);
  }, [isHome]);

  useEffect(() => {
    if (!mobileOpen) return;
    lastFocusedRef.current = document.activeElement as HTMLElement;
    document.body.classList.add("menu-open");
    document.querySelector<HTMLElement>("#mobile-navigation a, #mobile-navigation button")?.focus();
    return () => {
      document.body.classList.remove("menu-open");
      lastFocusedRef.current?.focus();
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (mobileOpen) setMobileOpen(false);
        if (reveal) {
          setReveal(null);
          (reveal === "shop" ? panelButtonRef : originButtonRef).current?.focus();
        }
      }
      if (mobileOpen && event.key === "Tab") {
        const focusable = Array.from(document.querySelectorAll<HTMLElement>("#mobile-navigation a, #mobile-navigation button"));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, reveal]);

  useEffect(() => {
    if (!reveal) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!target.parentElement?.closest(".nav-reveal-wrap")) setReveal(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [reveal]);

  const isCurrent = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const openReveal = (nextReveal: Exclude<Reveal, null>) => setReveal(nextReveal);

  return (
    <header
      className={`site-header ${isHome ? "site-header--home" : ""}`}
      data-tone={isHome ? heroTone : undefined}
      data-reveal-open={Boolean(reveal)}
      data-mobile-open={mobileOpen}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setReveal(null);
      }}
    >
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="header-inner page-container">
        <button ref={menuButtonRef} className="mobile-menu-trigger" type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((open) => !open)}>
          <span className="menu-icon" aria-hidden="true"><i /><i /></span>
          <span className="sr-only">{mobileOpen ? "Close menu" : "Menu"}</span>
        </button>
        <Link className="wordmark" href="/" aria-label="Red Clay home">RED CLAY</Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-reveal-wrap">
            <button ref={panelButtonRef} className={`nav-link nav-link-button ${isCurrent("/shop") ? "is-current" : ""}`} type="button" aria-expanded={reveal === "shop"} aria-controls="shop-reveal" onClick={() => openReveal("shop")} onPointerEnter={(event) => { if (event.pointerType === "mouse") openReveal("shop"); }}>Shop</button>
            {reveal === "shop" && <ShopRevealPanel onClose={() => setReveal(null)} />}
          </div>
          <div className="nav-reveal-wrap">
            <button ref={originButtonRef} className={`nav-link nav-link-button ${isCurrent("/origins") ? "is-current" : ""}`} type="button" aria-expanded={reveal === "origins"} aria-controls="origins-reveal" onClick={() => openReveal("origins")} onPointerEnter={(event) => { if (event.pointerType === "mouse") openReveal("origins"); }}>Origins</button>
            {reveal === "origins" && <RevealPanel id="origins-reveal" eyebrow="ORIGINS" allLabel="Explore all origins" items={navigation.originReveal} feature="The Earthen Folio" href="/origins" image={redClayAssets.origins.burundiLead.src} onClose={() => setReveal(null)} />}
          </div>
          {navigation.primary.slice(2).map((item) => <Link className={`nav-link ${isCurrent(item.href) ? "is-current" : ""}`} key={item.href} href={item.href} onFocus={() => setReveal(null)} onPointerEnter={(event) => { if (event.pointerType === "mouse") setReveal(null); }}>{item.label}</Link>)}
        </nav>
        <Link className="bag-link" href="/bag" aria-label={`Bag, ${count} items`} onClick={(event) => { event.preventDefault(); openBag(event.currentTarget); }}>Bag <span aria-hidden="true">({count})</span></Link>
      </div>
      {mobileOpen && <MobileNavigation pathname={pathname} close={() => setMobileOpen(false)} />}
    </header>
  );
}

function ShopRevealPanel({ onClose }: Readonly<{ onClose: () => void }>) {
  return <section className="reveal-panel reveal-panel--shop" id="shop-reveal" aria-label="Shop">
    <div className="reveal-panel-primary">
      <p className="section-label">SHOP</p>
      <Link className="reveal-all-link" href="/shop" onClick={onClose}>Shop all <span aria-hidden="true">↗</span></Link>
      <div className="reveal-groups">{navigation.shopRevealGroups.map((group) => <section className="reveal-group" key={group.label} aria-labelledby={`shop-group-${group.label.toLowerCase().replaceAll(" ", "-")}`}><h2 id={`shop-group-${group.label.toLowerCase().replaceAll(" ", "-")}`}>{group.label}</h2><ul>{group.items.map((item) => <li key={item.href}><Link href={item.href} onClick={onClose}>{item.label}</Link></li>)}</ul></section>)}</div>
    </div>
    <Link className="reveal-feature" href="/shop/three-regions" onClick={onClose}>
      <span className="reveal-feature-copy"><small>START HERE</small><strong>Three Regions</strong></span>
      <Image src={redClayAssets.origins.kenyaDetail.src!} alt="" fill sizes="42vw" />
    </Link>
  </section>;
}

function RevealPanel({ id, eyebrow, allLabel, items, feature, href, image, onClose }: Readonly<{ id: string; eyebrow: string; allLabel: string; items: readonly { label: string; href: string }[]; feature: string; href: string; image?: string; onClose: () => void }>) {
  return <div className="reveal-panel" id={id} role="region" aria-label={eyebrow}>
    <div className="reveal-panel-primary">
      <p className="section-label">{eyebrow}</p>
      <Link className="reveal-all-link" href={href} onClick={onClose}>{allLabel} <span aria-hidden="true">↗</span></Link>
      <ul>{items.map((item) => <li key={item.href}><Link href={item.href} onClick={onClose}>{item.label}</Link></li>)}</ul>
    </div>
    <Link className="reveal-feature" href={href} onClick={onClose}>
      <span className="reveal-feature-copy"><small>FEATURED</small><strong>{feature}</strong></span>
      {image && <Image src={image} alt="" fill sizes="42vw" />}
    </Link>
  </div>;
}

function MobileNavigation({ pathname, close }: Readonly<{ pathname: string; close: () => void }>) {
  const navigationRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = navigationRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const splitTargets = Array.from(root.querySelectorAll<HTMLElement>(".mobile-navigation .section-label, .mobile-navigation li a, .mobile-close"));
    const splits = splitTargets.map((target) => SplitText.create(target, { type: "words", wordsClass: "mobile-menu-word", aria: "auto" }));
    const words = splits.flatMap((split) => split.words);
    const tween = gsap.fromTo(words, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out", stagger: 0.055, clearProps: "transform,opacity" });

    return () => {
      tween.kill();
      splits.forEach((split) => split.revert());
    };
  }, []);

  return <div ref={navigationRef} className="mobile-navigation" id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Site navigation">
    <div className="mobile-navigation-inner page-container">
      <p className="section-label">RED CLAY / NAVIGATION</p>
      <nav aria-label="Mobile navigation"><ul>{navigation.primary.map((item) => <li key={item.href}><Link className={pathname === item.href ? "is-current" : ""} href={item.href} onClick={close}>{item.label}</Link></li>)}<li><Link href="/bag" onClick={close}>Bag</Link></li></ul></nav>
      <button className="mobile-close" type="button" onClick={close}>Close menu</button>
    </div>
  </div>;
}
