import type { Metadata } from "next";
import Link from "next/link";
import { editions } from "@/content/editions";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";

export const metadata: Metadata = { title: "The Editions", description: "A small first volume of Red Clay stories on coffee, place, and the morning ritual." };

export default function EditionsPage() {
  const [featured, ...secondary] = editions;
  return <main id="main-content" className="editions-page">
    <section className="editions-opening page-container"><SectionLabel>THE EDITIONS // VOLUME 01</SectionLabel><h1>A small volume on coffee, place, and the morning ritual.</h1><p>Three substantial stories, held close to the current Red Clay world.</p></section>
    <section className="editions-featured page-container"><MediaFrame asset={featured.leadAsset} className="editions-featured-media" priority sizes="(max-width: 767px) 100vw, 70vw" /><div className="editions-featured-copy"><SectionLabel>{featured.region}</SectionLabel><h2>{featured.title}</h2><p>{featured.summary}</p><Link className="editorial-link" href={`/journal/${featured.slug}`}>Read the Edition <span aria-hidden="true">↗</span></Link></div></section>
    <section className="editions-secondary page-container" aria-label="Other editions">{secondary.map((edition, index) => <article key={edition.slug} className={`editions-secondary-item editions-secondary-item--${index + 1}`}><MediaFrame asset={edition.leadAsset} className="editions-secondary-media" sizes="(max-width: 767px) 100vw, 42vw" /><div><SectionLabel>{edition.region}</SectionLabel><h2>{edition.title}</h2><p>{edition.summary}</p><Link className="editorial-link" href={`/journal/${edition.slug}`}>Read the Edition <span aria-hidden="true">↗</span></Link></div></article>)}</section>
    <section className="editions-connected"><PageContainer><div><SectionLabel>CONNECTED COFFEES</SectionLabel><h2>Every story returns to a current release.</h2></div><div className="editions-connected-list">{editions.map((edition) => <Link key={edition.slug} href={`/journal/${edition.slug}`}><span>{edition.region}</span><strong>{edition.connectedCoffeeSlugs.length === 1 ? "One current coffee" : "Two current coffees"}</strong><span aria-hidden="true">↗</span></Link>)}</div></PageContainer></section>
    <section className="editions-archive page-container"><div><SectionLabel>VOLUME / ARCHIVE</SectionLabel><h2>Volume 01 is intentionally concluded at three stories.</h2></div><p>Future volumes will enter when there is a story worth keeping. Until then, this is the complete first edition.</p></section>
  </main>;
}
