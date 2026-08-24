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
  title: "Origins — The Earthen Folio",
  description: "A three-chapter origin monograph moving through Central Kenya, Kayanza / Burundi, and Southern Ethiopia.",
};

const readingTerms = [
  { term: "Place", copy: "The landscape and working context represented by a chapter." },
  { term: "Variety", copy: "Plant context, included only when current verified information supports it." },
  { term: "Process", copy: "The work between cherry, drying surface, and green coffee; regional, never universal." },
  { term: "Cup", copy: "The sensory direction of a current Red Clay release, not a promise about every coffee from a place." },
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
            <p className="lead-copy">Red Clay’s launch world is organized around Central Kenya, Kayanza in Burundi, and the southern Ethiopian highlands. Each region is introduced through landscape, cultivation and processing context, current coffee, and editorial story.</p>
          </div>
          <div className="origins-thesis-note">
            <span className="mono-label">READING PATH</span>
            <p>Enter the Folio, choose a chapter directly, or continue into a regional dossier.</p>
          </div>
        </PageContainer>
      </section>

      <OriginFolio chapters={origins} />

      <section className="origins-continuation" aria-labelledby="origins-continuation-title">
        <PageContainer>
          <div className="origins-section-heading">
            <SectionLabel>03 / TERRITORIES</SectionLabel>
            <div>
              <h2 id="origins-continuation-title">Three doors into the longer reading.</h2>
              <p>Each dossier stays close to its place, process, and current coffee. The Folio is the passage; these chapters are the rooms beyond it.</p>
            </div>
          </div>
          <div className="origins-continuation-list">
            {origins.map((origin) => (
              <article className={`origins-continuation-entry origins-continuation-entry--${origin.slug}`} key={origin.slug}>
                <MediaFrame asset={origin.assets.support} sizes="(max-width: 767px) 100vw, 48vw" />
                <div>
                  <span className="mono-label">{origin.number} / 03 · {origin.country}</span>
                  <h3>{origin.name}</h3>
                  <p>{origin.summary}</p>
                  <Link className="editorial-link" href={`/origins/${origin.slug}`}>Read the dossier <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="origins-reading" aria-labelledby="origins-reading-title">
        <PageContainer>
          <div className="origins-section-heading origins-section-heading--reading">
            <SectionLabel>04 / A SMALL VOCABULARY</SectionLabel>
            <div>
              <h2 id="origins-reading-title">How to read an origin.</h2>
              <p>These four words are a way into the story, not a formula for predicting a cup.</p>
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
            <SectionLabel>05 / CURRENT COFFEES</SectionLabel>
            <div>
              <h2 id="origins-coffees-title">The current harvest, read through place.</h2>
              <p>Four lots from the three chapters. Product detail remains quiet; the coffee stays connected to its wider context.</p>
            </div>
          </div>
          <div className="origins-coffee-grid">
            {coffees.map((coffee, index) => <ProductCard key={coffee.id} product={coffee} featured={index === 0} />)}
          </div>
        </PageContainer>
      </section>

      <section className="origins-editions" aria-labelledby="origins-editions-title">
        <PageContainer className="origins-editions-grid">
          <div className="origins-editions-media"><MediaFrame asset={redClayAssets.origins.kenyaProcess} sizes="(max-width: 767px) 100vw, 58vw" /></div>
          <div className="origins-editions-copy">
            <SectionLabel>06 / RELATED EDITIONS</SectionLabel>
            <span className="mono-label">{featuredEdition.eyebrow}</span>
            <h2 id="origins-editions-title">{featuredEdition.title}</h2>
            <p>{featuredEdition.summary}</p>
            <Link className="editorial-link" href={`/journal/${featuredEdition.slug}`}>Read the Edition <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="origins-editions-list" aria-label="Other Editions">
            {editions.slice(1).map((edition, index) => <Link href={`/journal/${edition.slug}`} key={edition.slug}><span className="mono-label">0{index + 2} / 03</span><strong>{edition.title}</strong><span aria-hidden="true">↗</span></Link>)}
          </div>
        </PageContainer>
      </section>

      <section className="origins-close" aria-labelledby="origins-close-title">
        <PageContainer className="origins-close-inner">
          <SectionLabel>07 / CONTINUE THE PATH</SectionLabel>
          <h2 id="origins-close-title">Carry the reading into the current harvest.</h2>
          <Link className="button button--dark" href="/shop">Shop the Current Harvest <span aria-hidden="true">↗</span></Link>
        </PageContainer>
      </section>
    </main>
  );
}
