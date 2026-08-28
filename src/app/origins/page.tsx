import type { Metadata } from "next";
import Link from "next/link";
import { OriginFolio } from "@/components/origins/OriginFolio";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { ProductCard } from "@/components/editorial/ProductCard";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";
import { coffees } from "@/content/coffees";
import { editions } from "@/content/editions";
import { origins } from "@/content/origins";
import { redClayAssets } from "@/lib/assets/registry";

export const metadata: Metadata = {
  title: "Origins",
  description: "Compare coffee context from Central Kenya, Kayanza in Burundi, and Southern Ethiopia.",
};

const readingTerms = [
  { term: "Place", copy: "Country and region tell you where a coffee comes from. More local detail is useful when it is known." },
  { term: "Variety", copy: "The plant material behind the fruit. A variety can shape potential, but it does not determine flavor alone." },
  { term: "Process", copy: "How fruit and seed are separated and dried after picking. Washed and natural are starting points, not recipes." },
  { term: "Cup", copy: "The roaster’s sensory references for this coffee. Notes describe associations; they are not added ingredients." },
];

const currentHarvestSlugs = [
  "kiambu-washed-01",
  "kirinyaga-washed-02",
  "kayanza-washed-01",
  "kayanza-natural-02",
  "sidama-washed-01",
  "guji-natural-02",
];

export default function OriginsPage() {
  const featuredEdition = editions[0];

  return (
    <main id="main-content" className="origins-page">
      <section className="origins-thesis">
        <PageContainer className="origins-thesis-grid">
          <SectionLabel>01 / ORIGIN INDEX</SectionLabel>
          <div className="origins-thesis-copy">
            <h1>Three highland regions. Three ways into the coffee.</h1>
            <p className="lead-copy">Compare Central Kenya, Kayanza in Burundi, and Southern Ethiopia by growing context, post-harvest work, and the coffees currently connected to each place.</p>
          </div>
          <div className="origins-thesis-note">
            <span className="mono-label">READING PATH</span>
            <p>Use the Folio for a quick comparison. Choose a region when you want the longer reading.</p>
          </div>
        </PageContainer>
      </section>

      <OriginFolio chapters={origins} />

      <section className="origins-reading" aria-labelledby="origins-reading-title">
        <PageContainer>
          <div className="origins-section-heading origins-section-heading--reading">
            <SectionLabel>03 / FOUR USEFUL TERMS</SectionLabel>
            <div>
              <h2 id="origins-reading-title">Read the label without asking it to predict everything.</h2>
              <p>Place, variety, process, and tasting notes each answer a different question.</p>
            </div>
          </div>
          <dl className="origins-reading-list">
            {readingTerms.map((item) => <div key={item.term}><dt>{item.term}</dt><dd>{item.copy}</dd></div>)}
          </dl>
        </PageContainer>
      </section>

      <section className="origins-coffees" aria-labelledby="origins-coffees-title">
        <PageContainer>
          <div className="origins-section-heading">
            <SectionLabel>04 / CURRENT HARVEST</SectionLabel>
            <div>
              <h2 id="origins-coffees-title">Six coffees, arranged for comparison.</h2>
              <p>Move within one country to compare regions or keep the place fixed and compare washed with natural processing.</p>
            </div>
          </div>
          <div className="origins-coffee-grid">
            {coffees.filter((coffee) => currentHarvestSlugs.includes(coffee.slug)).map((coffee, index) => <ProductCard key={coffee.id} product={coffee} featured={index === 0} />)}
          </div>
        </PageContainer>
      </section>

      <section className="origins-editions" aria-labelledby="origins-editions-title">
        <PageContainer className="origins-editions-grid">
          <div className="origins-editions-media"><MediaFrame asset={redClayAssets.origins.kenyaProcess} sizes="(max-width: 767px) 100vw, 58vw" /></div>
          <div className="origins-editions-copy">
            <SectionLabel>05 / RELATED EDITIONS</SectionLabel>
            <span className="mono-label">{featuredEdition.eyebrow}</span>
            <h2 id="origins-editions-title">{featuredEdition.title}</h2>
            <p>{featuredEdition.relatedBlurb}</p>
            <Link className="editorial-link" href={`/journal/${featuredEdition.slug}`}>Read {featuredEdition.title} <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="origins-editions-list" aria-label="Other Editions">
            {editions.slice(1).map((edition, index) => <Link href={`/journal/${edition.slug}`} key={edition.slug}><span className="mono-label">0{index + 2} / 03</span><strong>{edition.title}</strong><span aria-hidden="true">↗</span></Link>)}
          </div>
        </PageContainer>
      </section>

      <section className="origins-close" aria-labelledby="origins-close-title">
        <PageContainer className="origins-close-inner">
          <SectionLabel>06 / CONTINUE</SectionLabel>
          <h2 id="origins-close-title">Choose a coffee from the current harvest.</h2>
          <Link className="button button--dark" href="/shop">Shop the harvest <span aria-hidden="true">↗</span></Link>
        </PageContainer>
      </section>
    </main>
  );
}
