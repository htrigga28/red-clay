"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AddToBagButton } from "@/components/commerce/AddToBagButton";
import { ProductCard } from "@/components/editorial/ProductCard";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";
import { coffees, type Coffee } from "@/content/coffees";
import { editions } from "@/content/editions";

export function CoffeePdp({ coffee }: { coffee: Coffee }) {
  const [quantity, setQuantity] = useState(1);
  const [stickyVisible, setStickyVisible] = useState(false);
  const buyModuleRef = useRef<HTMLElement>(null);
  const related = coffees.filter((item) => item.id !== coffee.id).slice(0, 3);
  const edition = coffee.relatedEdition ? editions.find((item) => item.slug === coffee.relatedEdition) : undefined;

  useEffect(() => {
    const target = buyModuleRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setStickyVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0), { threshold: 0.1 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return <main id="main-content" className={`coffee-pdp coffee-pdp--${coffee.slug}`}>
    <section className="pdp-opening page-container" aria-labelledby="pdp-title">
      <section ref={buyModuleRef} className="pdp-zone pdp-zone--purchase" data-pdp-buy>
        <SectionLabel>{coffee.id}</SectionLabel>
        <h1 id="pdp-title">{coffee.id}</h1>
        <p className="pdp-region">{coffee.region}</p>
        {coffee.sensoryStatement && <p className="pdp-sensory-line">{coffee.sensoryStatement}</p>}
        {coffee.notes.length > 0 && <p className="pdp-notes">{coffee.notes.join(" / ")}</p>}
        <div className="pdp-buy-controls"><div className="quantity-control" aria-label={`Quantity for ${coffee.id}`}><button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button><span aria-live="polite">{quantity}</span><button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)}>+</button></div><AddToBagButton product={coffee} quantity={quantity} className="button button--dark pdp-add" /></div>
        <Link className="pdp-return-link" href="/shop">Back to the harvest <span aria-hidden="true">↗</span></Link>
      </section>
      <div className="pdp-zone pdp-zone--media"><ProductMediaPlaceholder assetId={coffee.media.pdpHero.id} label={coffee.id} kind="coffee" /></div>
      <aside className="pdp-zone pdp-zone--context"><SectionLabel>PLACE / PROCESS</SectionLabel>{coffee.media.origin && <MediaFrame asset={coffee.media.origin} className="pdp-context-media" sizes="(max-width: 1023px) 100vw, 24vw" />}<p>{coffee.region}. Contextual imagery is shown broadly and does not identify the lot location.</p></aside>
    </section>

    <section className="pdp-sensory-block" aria-labelledby="sensory-title"><PageContainer><SectionLabel>PRODUCT CHARACTER</SectionLabel><h2 id="sensory-title">{coffee.sensoryStatement ?? "A close reading of coffee, place, and process."}</h2></PageContainer></section>

    <section className="pdp-place-process page-container" aria-labelledby="place-title">
      <div className="pdp-story-copy"><SectionLabel>PLACE</SectionLabel><h2 id="place-title">{coffee.region}</h2><p>{placeCopy(coffee)}</p><Link className="editorial-link" href={`/origins/${originSlug(coffee)}`}>Explore the origin <span aria-hidden="true">↗</span></Link></div>
      {coffee.media.process && <MediaFrame asset={coffee.media.process} className="pdp-story-process" sizes="(max-width: 1023px) 100vw, 58vw" />}
      {coffee.media.botanical && <MediaFrame asset={coffee.media.botanical} className="pdp-story-detail" sizes="(max-width: 1023px) 58vw, 20vw" />}
    </section>

    {edition && <section className="pdp-edition" aria-labelledby="pdp-edition-title"><PageContainer><div className="pdp-edition-grid"><div><SectionLabel>THE EDITIONS</SectionLabel><span className="mono-label">VOL. 01</span></div><div><h2 id="pdp-edition-title">{edition.title}</h2><p>{edition.summary}</p><Link className="editorial-link" href={`/journal/${edition.slug}`}>Read the Edition <span aria-hidden="true">↗</span></Link></div></div></PageContainer></section>}

    <section className="pdp-related" aria-labelledby="related-title"><PageContainer><SectionLabel>RELATED HARVESTS</SectionLabel><h2 className="sr-only" id="related-title">Related coffees</h2><div className="pdp-related-grid">{related.map((item, index) => <ProductCard key={item.id} product={item} featured={index === 0} showQuickAction action="add" />)}</div></PageContainer></section>

    {stickyVisible && <div className="pdp-mobile-buy"><span>{coffee.id}</span><AddToBagButton product={coffee} quantity={quantity} className="button button--dark" /></div>}
  </main>;
}

function placeCopy(coffee: Coffee) {
  if (coffee.id === "KENYA LOT 01") return "Coffee plants and red soil shape the Central Kenya context used for this release.";
  if (coffee.id === "BURUNDI LOT 01") return "Drying-bed geometry and the Kayanza context give this chapter its broad, graphic rhythm.";
  return "A process-led view near Hawassa keeps the Southern Ethiopia context close to hand and attention.";
}

function originSlug(coffee: Coffee) {
  if (coffee.id === "KENYA LOT 01") return "central-kenya";
  if (coffee.id === "BURUNDI LOT 01") return "kayanza-burundi";
  return "southern-ethiopia";
}
