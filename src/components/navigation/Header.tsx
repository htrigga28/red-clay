"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { type HeroTone, homeHeroToneEvent } from "@/content/homeHero";
import { navigation } from "@/content/navigation";
import { redClayAssets } from "@/lib/assets/registry";
import { useBag } from "@/components/commerce/BagProvider";

type Reveal = "shop" | "origins" | null;

export function Header() {
  const pathname = usePathname();
  const { count } = useBag();
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
  const panelItems = reveal === "shop" ? navigation.shopReveal : navigation.originReveal;
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
            {reveal === "shop" && <RevealPanel id="shop-reveal" eyebrow="COFFEE / OBJECT" items={panelItems} feature="Current harvest" href="/shop" image={redClayAssets.origins.kenyaDetail.src} onClose={() => setReveal(null)} />}
          </div>
          <div className="nav-reveal-wrap">
            <button ref={originButtonRef} className={`nav-link nav-link-button ${isCurrent("/origins") ? "is-current" : ""}`} type="button" aria-expanded={reveal === "origins"} aria-controls="origins-reveal" onClick={() => openReveal("origins")} onPointerEnter={(event) => { if (event.pointerType === "mouse") openReveal("origins"); }}>Origins</button>
            {reveal === "origins" && <RevealPanel id="origins-reveal" eyebrow="THREE CHAPTERS" items={panelItems} feature="The Earthen Folio" href="/origins" image={redClayAssets.origins.burundiLead.src} onClose={() => setReveal(null)} />}
          </div>
          {navigation.primary.slice(2).map((item) => <Link className={`nav-link ${isCurrent(item.href) ? "is-current" : ""}`} key={item.href} href={item.href} onFocus={() => setReveal(null)} onPointerEnter={(event) => { if (event.pointerType === "mouse") setReveal(null); }}>{item.label}</Link>)}
        </nav>
        <Link className="bag-link" href="/bag" aria-label={`Bag, ${count} items`}>Bag <span aria-hidden="true">({count})</span></Link>
      </div>
      {mobileOpen && <MobileNavigation pathname={pathname} close={() => setMobileOpen(false)} />}
    </header>
  );
}

function RevealPanel({ id, eyebrow, items, feature, href, image, onClose }: { id: string; eyebrow: string; items: readonly { label: string; href: string }[]; feature: string; href: string; image?: string; onClose: () => void }) {
  return <div className="reveal-panel" id={id} role="region" aria-label={eyebrow}>
    <div className="reveal-panel-primary">
      <p className="section-label">{eyebrow}</p>
      <ul>{items.map((item) => <li key={item.href}><Link href={item.href} onClick={onClose}>{item.label}</Link></li>)}</ul>
      <Link className="reveal-all-link" href={href} onClick={onClose}>View all <span aria-hidden="true">↗</span></Link>
    </div>
    <Link className="reveal-feature" href={href} onClick={onClose}>
      <span className="reveal-feature-copy"><small>FEATURED</small><strong>{feature}</strong></span>
      {image && <Image src={image} alt="" fill sizes="42vw" />}
    </Link>
  </div>;
}

function MobileNavigation({ pathname, close }: { pathname: string; close: () => void }) {
  return <div className="mobile-navigation" id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Site navigation">
    <div className="mobile-navigation-inner page-container">
      <p className="section-label">RED CLAY / NAVIGATION</p>
      <nav aria-label="Mobile navigation"><ul>{navigation.primary.map((item) => <li key={item.href}><Link className={pathname === item.href ? "is-current" : ""} href={item.href} onClick={close}>{item.label}</Link></li>)}<li><Link href="/bag" onClick={close}>Bag</Link></li></ul></nav>
      <button className="mobile-close" type="button" onClick={close}>Close menu</button>
    </div>
  </div>;
}
