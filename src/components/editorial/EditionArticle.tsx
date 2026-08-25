import Link from "next/link";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";
import { editions, type Edition } from "@/content/editions";
import { coffees } from "@/content/coffees";

export function EditionArticle({ edition }: { edition: Edition }) {
  const products = edition.connectedCoffeeSlugs.map((slug) => coffees.find((coffee) => coffee.slug === slug)).filter(Boolean);
  const next = editions[(editions.findIndex((item) => item.slug === edition.slug) + 1) % editions.length];
  return <main id="main-content" className={`edition-article edition-article--${edition.slug}`}>
    <section className="edition-article-masthead page-container">
      <div><SectionLabel>{edition.eyebrow}</SectionLabel><span className="edition-article-region">{edition.region}</span></div>
      <h1>{edition.title}</h1><p className="edition-article-subtitle">{edition.subtitle}</p>
    </section>
    <section className="edition-article-opening page-container">
      <MediaFrame asset={edition.leadAsset} className="edition-article-lead" priority sizes="(max-width: 767px) 100vw, 74vw" />
      <div className="edition-article-thesis"><SectionLabel>OPENING THESIS</SectionLabel><p>{edition.summary}</p></div>
    </section>
    <section className="edition-article-body page-container">
      {edition.sections.map((section, index) => <article key={section.heading} className={`edition-section edition-section--${index + 1}`}>
        <div className="edition-section-copy"><SectionLabel>{index === 0 ? "PLACE / CONTEXT" : index === 1 ? "PROCESS / CRAFT" : "RED CLAY RELEASE"}</SectionLabel><h2>{section.heading}</h2><p>{section.body}</p></div>
        {section.asset && <figure className={`edition-section-figure ${section.assetClass ?? ""}`}><MediaFrame asset={section.asset} sizes="(max-width: 767px) 100vw, 62vw" />{section.caption && <figcaption>{section.caption}</figcaption>}</figure>}
      </article>)}
    </section>
    <section className="edition-article-commerce" aria-labelledby="edition-commerce-title"><PageContainer><div className="edition-commerce-intro"><SectionLabel>CONTEXTUAL COMMERCE</SectionLabel><h2 id="edition-commerce-title">The release that carries this chapter.</h2><p>Return to the current coffee without leaving the story behind.</p></div><div className="edition-commerce-grid">{products.map((product) => product && <article key={product.id} className="edition-commerce-product"><ProductMediaPlaceholder assetId={product.media.pdpHero.id} label={product.id} kind="coffee" /><div><span className="mono-label">{product.region}</span><h3>{product.id}</h3><p>{product.sensoryStatement}</p><Link className="editorial-link" href={`/shop/${product.slug}`}>View Coffee <span aria-hidden="true">↗</span></Link></div></article>)}</div></PageContainer></section>
    <section className="edition-article-related page-container"><div><SectionLabel>RELATED ORIGIN</SectionLabel><h2>{edition.region}</h2><p>The editorial chapter and the regional dossier share one visual record, with provenance kept close to the image.</p><Link className="editorial-link" href={`/origins/${edition.relatedOriginSlug}`}>Explore the origin <span aria-hidden="true">↗</span></Link></div><div className="edition-article-next"><SectionLabel>NEXT EDITION</SectionLabel><Link href={`/journal/${next.slug}`}><h3>{next.title}</h3><span className="editorial-link">Read next <span aria-hidden="true">↗</span></span></Link></div></section>
  </main>;
}
