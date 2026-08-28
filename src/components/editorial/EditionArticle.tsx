import Link from "next/link";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";
import { editions, type Edition } from "@/content/editions";
import { coffees } from "@/content/coffees";

type EditionEndingVariant = "horizontal" | "compact" | "paired" | "standard";

const editionEndingVariants: Record<string, EditionEndingVariant> = {
  "water-and-time": "horizontal",
  "along-the-kayanza-hills": "compact",
  "beyond-heirloom": "paired",
};

export function EditionArticle({ edition }: { edition: Edition }) {
  const products = edition.connectedCoffees
    .map((connection) => ({ connection, product: coffees.find((coffee) => coffee.slug === connection.slug) }))
    .filter((item): item is { connection: (typeof edition.connectedCoffees)[number]; product: (typeof coffees)[number] } => Boolean(item.product));
  const endingVariant = editionEndingVariants[edition.slug] ?? "standard";
  const next = editions[(editions.findIndex((item) => item.slug === edition.slug) + 1) % editions.length];

  return <main id="main-content" className={`edition-article edition-article--${edition.slug}`}>
    <section className="edition-article-masthead page-container">
      <div><SectionLabel>{edition.eyebrow}</SectionLabel><span className="edition-article-region">{edition.region}</span></div>
      <h1>{edition.title}</h1>
      <p className="edition-article-subtitle">{edition.subtitle}</p>
    </section>

    <section className="edition-article-opening page-container">
      <MediaFrame asset={edition.leadAsset} className="edition-article-lead" priority sizes="(max-width: 767px) 100vw, 74vw" />
      <div className="edition-article-thesis"><p>{edition.standfirst}</p></div>
    </section>

    <section className="edition-article-body page-container">
      {edition.sections.map((section, index) => <article key={section.heading} className={`edition-section edition-section--${index + 1}`}>
        <div className="edition-section-copy">
          <SectionLabel>{section.label}</SectionLabel>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        {section.asset && <figure className={`edition-section-figure ${section.assetClass ?? ""}`}>
          <MediaFrame asset={section.asset} sizes="(max-width: 767px) 100vw, 62vw" />
          {section.caption && <figcaption>{section.caption}</figcaption>}
        </figure>}
      </article>)}
    </section>

    <section className={`edition-article-commerce edition-article-ending edition-article-ending--${endingVariant}`} aria-labelledby="edition-commerce-title">
      <PageContainer>
        <div className="edition-commerce-intro edition-article-ending-copy">
          <SectionLabel>CONNECTED COFFEES</SectionLabel>
          <h2 id="edition-commerce-title">{edition.coffeeHeading}</h2>
          <p>{edition.coffeeBlurb}</p>
        </div>
        <div className={`edition-commerce-grid edition-commerce-grid--${endingVariant}`}>
          {products.map(({ connection, product }, index) => <article key={product.id} className={`edition-commerce-product edition-commerce-product--${endingVariant} edition-commerce-product--${index + 1}`}>
            <ProductMediaPlaceholder assetId={product.media.pdpHero.id} label={connection.name} kind="coffee" />
            <div>
              <span className="mono-label">{product.region}</span>
              <h3>{connection.name}</h3>
              <p>{connection.blurb}</p>
              <Link className="editorial-link" href={`/shop/${connection.slug}`}>View {connection.name} <span aria-hidden="true">↗</span></Link>
            </div>
          </article>)}
        </div>
      </PageContainer>
    </section>

    <section className="edition-article-sources page-container" aria-labelledby="edition-sources-title">
      <div>
        <SectionLabel>FURTHER READING</SectionLabel>
        <h2 id="edition-sources-title">Sources &amp; further reading</h2>
      </div>
      <ol>
        {edition.sources.map((source) => <li key={source.url}>
          <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
          <span>{source.organization}</span>
        </li>)}
      </ol>
    </section>

    <section className="edition-article-related page-container">
      <div>
        <SectionLabel>RELATED ORIGIN</SectionLabel>
        <h2>{edition.region}</h2>
        <p>{edition.relatedOriginBlurb}</p>
        <Link className="editorial-link" href={`/origins/${edition.relatedOriginSlug}`}>Explore {edition.region} <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="edition-article-next">
        <SectionLabel>NEXT STORY · {next.storyOrdinal} / 03</SectionLabel>
        <Link href={`/journal/${next.slug}`}><h3>{next.title}</h3><span className="editorial-link">Read next <span aria-hidden="true">↗</span></span></Link>
      </div>
    </section>
  </main>;
}
