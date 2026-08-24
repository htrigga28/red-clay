import Link from "next/link";
import { editions } from "@/content/editions";
import { ScaffoldPage } from "@/components/layout/ScaffoldPage";
import { PageContainer, SectionShell, SectionLabel } from "@/components/layout/PageContainer";

export default function EditionsPage() {
  return <ScaffoldPage eyebrow="THE EDITIONS" title="Short books on coffee, place, and the morning ritual." intro="A public editorial label for Red Clay’s origin, process, and material studies."><SectionShell className="scaffold-content"><PageContainer><SectionLabel>VOLUME INDEX</SectionLabel><div className="edition-list">{editions.map((edition, index) => <article key={edition.slug}><span className="mono-label">0{index + 1} / 03</span><h2>{edition.title}</h2><p>{edition.summary}</p><Link className="editorial-link" href={`/journal/${edition.slug}`}>Read the Edition <span aria-hidden="true">↗</span></Link></article>)}</div></PageContainer></SectionShell></ScaffoldPage>;
}
