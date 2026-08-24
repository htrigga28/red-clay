import { notFound } from "next/navigation";
import { editions } from "@/content/editions";
import { ScaffoldPage, RouteLinks } from "@/components/layout/ScaffoldPage";
import { PageContainer, SectionShell, SectionLabel } from "@/components/layout/PageContainer";

export function generateStaticParams() { return editions.map((edition) => ({ "chapter-slug": edition.slug })); }

export default async function EditionPage({ params }: { params: Promise<{ "chapter-slug": string }> }) {
  const { "chapter-slug": slug } = await params;
  const edition = editions.find((item) => item.slug === slug);
  if (!edition) notFound();
  return <ScaffoldPage eyebrow={edition.eyebrow} title={edition.title} intro={edition.summary}><SectionShell className="article-scaffold"><PageContainer><SectionLabel>EDITORIAL MANUSCRIPT</SectionLabel><p className="article-copy">A close reading of coffee, place, and the morning ritual, with contextual imagery and a commerce bridge.</p><RouteLinks links={[{ label: "Back to The Editions", href: "/journal" }, { label: "Explore Origins", href: "/origins" }]} /></PageContainer></SectionShell></ScaffoldPage>;
}
