"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AddToBagButton } from "@/components/commerce/AddToBagButton";
import { ProductCard } from "@/components/editorial/ProductCard";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";
import { getProductById, type Coffee, type Product } from "@/content/coffees";
import { editions } from "@/content/editions";

export function CoffeePdp({ coffee }: { coffee: Coffee }) {
  const [quantity, setQuantity] = useState(1);
  const [stickyVisible, setStickyVisible] = useState(false);
  const buyModuleRef = useRef<HTMLElement>(null);
  const related = coffee.relatedProducts
    .map((id) => getProductById(id))
    .filter((product): product is Product => Boolean(product));
  const edition = coffee.relatedEdition ? editions.find((item) => item.slug === coffee.relatedEdition) : undefined;
  const facts = [
    coffee.formats.length > 0 ? { term: "Format", value: coffee.formats.join(" / ") } : null,
    coffee.process ? { term: "Process", value: coffee.process } : null,
    coffee.uses.length > 0 ? { term: "Best for", value: coffee.uses.join(" / ") } : null,
  ].filter((fact): fact is { term: string; value: string } => Boolean(fact));

  useEffect(() => {
    const target = buyModuleRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setStickyVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0), { threshold: 0.1 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return <main id="main-content" className={`coffee-pdp coffee-pdp--${coffee.family} coffee-pdp--${coffee.slug}`}>
    <section className="pdp-opening page-container" aria-labelledby="pdp-title">
      <section ref={buyModuleRef} className="pdp-zone pdp-zone--purchase" data-pdp-buy>
        <SectionLabel>{coffee.role}</SectionLabel>
        <h1 id="pdp-title">{coffee.id}</h1>
        <p className="pdp-region">{coffee.origin}</p>
        <p className="pdp-sensory-line">{coffee.sensoryStatement}</p>
        {coffee.notes.length > 0 && <p className="pdp-notes">{coffee.notes.join(" / ")}</p>}
        {facts.length > 0 && <dl className="pdp-facts">{facts.map((fact) => <div key={fact.term}><dt>{fact.term}</dt><dd>{fact.value}</dd></div>)}</dl>}
        <div className="pdp-buy-controls"><div className="quantity-control" aria-label={`Quantity for ${coffee.id}`}><button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button><span aria-live="polite">{quantity}</span><button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)}>+</button></div><AddToBagButton product={coffee} quantity={quantity} className="button button--dark pdp-add" /></div>
        <Link className="pdp-return-link" href="/shop">Back to Shop <span aria-hidden="true">↗</span></Link>
      </section>
      <div className="pdp-zone pdp-zone--media"><ProductMediaPlaceholder assetId={coffee.media.pdpHero.id} label={coffee.id} kind="coffee" /></div>
      <aside className="pdp-zone pdp-zone--context"><SectionLabel>AT A GLANCE</SectionLabel><p className="pdp-context-character">{coffee.character}</p><p>{coffee.customerDirection}</p></aside>
    </section>

    <section className="pdp-sensory-block" aria-labelledby="sensory-title"><PageContainer><SectionLabel>CHARACTER</SectionLabel><h2 id="sensory-title">{coffee.shortDescription}</h2></PageContainer></section>

    <section className={`pdp-place-process page-container ${coffee.media.process ? "" : "pdp-place-process--text-only"}`} aria-labelledby="place-title">
      <div className="pdp-story-copy"><SectionLabel>{coffee.family === "material-series" ? "HOUSE PROFILE" : coffee.family === "other-ways-to-drink" ? "HOW IT FITS" : "PLACE / PROCESS"}</SectionLabel><h2 id="place-title">{coffee.placeHeading}</h2><p>{coffee.placeCopy}</p>{coffee.relatedOrigin && <Link className="editorial-link" href={`/origins/${coffee.relatedOrigin}`}>{originLinkLabel(coffee.relatedOrigin)} <span aria-hidden="true">↗</span></Link>}</div>
      {coffee.media.process && <MediaFrame asset={coffee.media.process} className="pdp-story-process" sizes="(max-width: 1023px) 100vw, 58vw" />}
      {coffee.media.botanical && <MediaFrame asset={coffee.media.botanical} className="pdp-story-detail" sizes="(max-width: 1023px) 58vw, 20vw" />}
    </section>

    {edition && <section className="pdp-edition" aria-labelledby="pdp-edition-title"><PageContainer><div className="pdp-edition-grid">{coffee.media.secondaryProcess && <MediaFrame asset={coffee.media.secondaryProcess} className="pdp-edition-media" sizes="(max-width: 767px) 100vw, 55vw" />}<div className="pdp-edition-meta"><SectionLabel>THE EDITIONS</SectionLabel><span className="mono-label">VOLUME 01 — PLACE</span></div><div className="pdp-edition-copy"><h2 id="pdp-edition-title">{edition.title}</h2><p>{editionLinkCopy(coffee)}</p><Link className="editorial-link" href={`/journal/${edition.slug}`}>Read {edition.title} <span aria-hidden="true">↗</span></Link></div></div></PageContainer></section>}

    <section className="pdp-comparison" aria-labelledby="comparison-title"><PageContainer><div className="pdp-comparison-grid"><SectionLabel>COMPARE</SectionLabel><div><h2 id="comparison-title">Choose by contrast.</h2><p>{coffee.comparison}</p>{coffee.discoveryGuide && <dl className="pdp-discovery-guide">{coffee.discoveryGuide.map((item) => <div key={item.name}><dt>{item.name}</dt><dd>{item.direction}</dd></div>)}</dl>}</div></div></PageContainer></section>

    <section className="pdp-related" aria-labelledby="related-title"><PageContainer><SectionLabel>RELATED COFFEES</SectionLabel><h2 id="related-title">Continue from {displayName(coffee.id)}.</h2><div className="pdp-related-grid">{related.map((item, index) => <ProductCard key={item.id} product={item} featured={index === 0} showQuickAction action="add" />)}</div></PageContainer></section>

    {stickyVisible && <div className="pdp-mobile-buy"><span>{coffee.id}</span><AddToBagButton product={coffee} quantity={quantity} className="button button--dark" /></div>}
  </main>;
}

function originLinkLabel(slug: string) {
  if (slug === "central-kenya") return "Explore Central Kenya";
  if (slug === "kayanza-burundi") return "Explore Kayanza";
  return "Explore Southern Ethiopia";
}

function editionLinkCopy(coffee: Coffee) {
  if (coffee.relatedEdition === "water-and-time") return "Read how washing, selection, and drying became part of Kenya's specialty-coffee identity, then return to the contrast between Kiambu and Kirinyaga.";
  if (coffee.relatedEdition === "along-the-kayanza-hills") return "Follow coffee from hillside plots to washing stations and raised drying beds, then compare Red Clay's two Kayanza profiles.";
  return "Look beyond one convenient variety label and consider region, local selections, and process as separate parts of an Ethiopian coffee's identity.";
}

function displayName(id: string) {
  return id.split(" / ")[0].replace("RED CLAY INSTANT — ETHIOPIA", "Instant").replace("THE KILN CUP", "The Kiln Cup").toLowerCase().replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
}
