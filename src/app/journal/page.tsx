import type { Metadata } from "next";
import Link from "next/link";
import { editions } from "@/content/editions";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";

export const metadata: Metadata = {
  title: "The Editions",
  description: "Volume 01 — Place: three long-form stories on coffee processing, Kayanza, and Ethiopian coffee diversity.",
};

export default function EditionsPage() {
  const [featured, ...secondary] = editions;

  return <main id="main-content" className="editions-page">
    <section className="editions-opening page-container">
      <SectionLabel>THE EDITIONS</SectionLabel>
      <h1>Volume 01 — Place</h1>
      <p>Three stories about what a region can tell us, what it cannot, and the work that sits between coffee fruit and cup.</p>
    </section>

    <section className="editions-featured page-container">
      <MediaFrame asset={featured.leadAsset} className="editions-featured-media" priority sizes="(max-width: 767px) 100vw, 70vw" />
      <div className="editions-featured-copy">
        <SectionLabel>STORY {featured.storyOrdinal} / 03 · {featured.region}</SectionLabel>
        <h2>{featured.title}</h2>
        <p>{featured.cardDeck}</p>
        <Link className="editorial-link" href={`/journal/${featured.slug}`}>Read {featured.title} <span aria-hidden="true">↗</span></Link>
      </div>
    </section>

    <section className="editions-secondary page-container" aria-label="More stories from Volume 01">
      {secondary.map((edition, index) => <article key={edition.slug} className={`editions-secondary-item editions-secondary-item--${index + 1}`}>
        <MediaFrame asset={edition.leadAsset} className="editions-secondary-media" sizes="(max-width: 767px) 100vw, 42vw" />
        <div>
          <SectionLabel>STORY {edition.storyOrdinal} / 03 · {edition.region}</SectionLabel>
          <h2>{edition.title}</h2>
          <p>{edition.cardDeck}</p>
          <Link className="editorial-link" href={`/journal/${edition.slug}`}>Read {edition.title} <span aria-hidden="true">↗</span></Link>
        </div>
      </article>)}
    </section>

    <section className="editions-connected">
      <PageContainer>
        <div>
          <SectionLabel>CONNECTED COFFEES</SectionLabel>
          <h2>Continue from the story to the cup.</h2>
          <p>Each link opens a coffee, not another article.</p>
        </div>
        <div className="editions-connected-list">
          {editions.flatMap((edition) => edition.connectedCoffees.map((coffee) => (
            <Link key={coffee.slug} href={`/shop/${coffee.slug}`}>
              <span>{edition.region}</span>
              <strong>{coffee.name}</strong>
              <span aria-hidden="true">↗</span>
            </Link>
          )))}
        </div>
      </PageContainer>
    </section>
  </main>;
}
