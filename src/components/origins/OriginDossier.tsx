import Link from "next/link";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { ProductCard } from "@/components/editorial/ProductCard";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";
import { coffees } from "@/content/coffees";
import { editions } from "@/content/editions";
import type { Origin } from "@/content/origins";

export function OriginDossier({ origin, nextOrigin }: { origin: Origin; nextOrigin: Origin }) {
  const products = coffees.filter((coffee) => origin.coffeeIds.includes(coffee.id));
  const edition = editions.find((item) => item.slug === origin.editionSlug) ?? editions[Number(origin.number) - 1] ?? editions[0];

  return (
    <main id="main-content" className={`origin-dossier origin-dossier--${origin.slug}`}>
      <section className="dossier-hero">
        <PageContainer className="dossier-hero-grid">
          <div className="dossier-hero-copy">
            <span className="mono-label">{origin.number} / 03 · ORIGIN DOSSIER</span>
            <h1>{origin.name}</h1>
            <p className="dossier-descriptor">{origin.descriptor}</p>
            <p className="lead-copy">{origin.summary}</p>
            <Link className="editorial-link" href="/origins">Back to the Folio <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="dossier-hero-media"><MediaFrame asset={origin.assets.lead} priority sizes="(max-width: 767px) 100vw, 66vw" /><span className="dossier-caption">{origin.assets.lead.alt}</span></div>
        </PageContainer>
      </section>

      <section className="dossier-place" aria-labelledby="dossier-place-title">
        <PageContainer className="dossier-place-grid">
          <div className="dossier-place-copy">
            <SectionLabel>02 / PLACE &amp; LANDSCAPE</SectionLabel>
            <h2 id="dossier-place-title">A place held at the edge of the frame.</h2>
            <p>{origin.place}</p>
          </div>
          <div className="dossier-place-media"><MediaFrame asset={origin.assets.support} sizes="(max-width: 767px) 100vw, 62vw" /><span className="dossier-caption">{origin.assets.support.alt}</span></div>
        </PageContainer>
      </section>

      <section className="dossier-context" aria-labelledby="dossier-context-title">
        <PageContainer className="dossier-context-grid">
          <div className="dossier-context-media"><MediaFrame asset={origin.assets.detail} sizes="(max-width: 767px) 100vw, 42vw" /><span className="dossier-caption">{origin.assets.detail.alt}</span></div>
          <div className="dossier-context-copy">
            <SectionLabel>03 / COFFEE CONTEXT</SectionLabel>
            <h2 id="dossier-context-title">The coffee enters through material detail.</h2>
            <p>{origin.summary} The current release is a fictional Red Clay product expression; the documentary images provide context, not a claim of direct sourcing.</p>
          </div>
        </PageContainer>
      </section>

      <section className="dossier-process" aria-labelledby="dossier-process-title">
        <PageContainer className="dossier-process-grid">
          <div className="dossier-process-copy">
            <SectionLabel>04 / PROCESSING TRADITIONS</SectionLabel>
            <h2 id="dossier-process-title">Work made visible.</h2>
            <p>{origin.process}</p>
          </div>
          <div className="dossier-process-note"><span className="mono-label">A REGIONAL VIEW</span><p>Process language stays specific to the image and the approved context. It is not presented as a universal recipe for the region.</p></div>
        </PageContainer>
      </section>

      <section className="dossier-work" aria-labelledby="dossier-work-title">
        <PageContainer className="dossier-work-grid">
          <div className="dossier-work-media"><MediaFrame asset={origin.assets.lead} sizes="(max-width: 767px) 100vw, 70vw" /><span className="dossier-caption">{origin.assets.lead.alt}</span></div>
          <div className="dossier-work-copy">
            <SectionLabel>05 / AGRICULTURAL WORK</SectionLabel>
            <h2 id="dossier-work-title">Attention, repetition, and skill.</h2>
            <p>People and work remain visible as context. No individual is named or presented as a Red Clay producer; the image stays with the act of making and sorting.</p>
          </div>
        </PageContainer>
      </section>

      <section className="dossier-coffees" aria-labelledby="dossier-coffees-title">
        <PageContainer>
          <div className="dossier-section-heading"><SectionLabel>06 / CURRENT RED CLAY COFFEES</SectionLabel><div><h2 id="dossier-coffees-title">This place, in the current harvest.</h2><p>{origin.cup}</p></div></div>
          <div className="dossier-coffee-grid">{products.map((coffee) => <ProductCard key={coffee.id} product={coffee} />)}</div>
        </PageContainer>
      </section>

      <section className="dossier-edition" aria-labelledby="dossier-edition-title">
        <PageContainer className="dossier-edition-grid">
          <div><SectionLabel>07 / RELATED EDITION</SectionLabel><span className="mono-label">{edition.eyebrow}</span><h2 id="dossier-edition-title">{edition.title}</h2></div>
          <div><p>{edition.summary}</p><Link className="editorial-link" href={`/journal/${edition.slug}`}>Read the Edition <span aria-hidden="true">↗</span></Link></div>
        </PageContainer>
      </section>

      <section className="dossier-facts" aria-labelledby="dossier-facts-title">
        <PageContainer className="dossier-facts-grid">
          <SectionLabel>08 / FACTUAL REFERENCE</SectionLabel>
          <div><h2 id="dossier-facts-title">Context kept in view.</h2><ul>{origin.factualContext.map((fact) => <li key={fact}>{fact}</li>)}</ul></div>
        </PageContainer>
      </section>

      <section className="dossier-next" aria-labelledby="dossier-next-title">
        <PageContainer className="dossier-next-grid">
          <div><SectionLabel>09 / NEXT REGION</SectionLabel><h2 id="dossier-next-title">Continue to {nextOrigin.name}.</h2></div>
          <Link className="editorial-link" href={`/origins/${nextOrigin.slug}`}>Read {nextOrigin.name} <span aria-hidden="true">↗</span></Link>
        </PageContainer>
      </section>
    </main>
  );
}
