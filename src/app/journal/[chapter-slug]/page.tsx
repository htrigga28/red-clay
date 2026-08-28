import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { editions, getEditionBySlug, legacyEditionSlugs } from "@/content/editions";
import { EditionArticle } from "@/components/editorial/EditionArticle";

export function generateStaticParams() { return [...editions.map((edition) => ({ "chapter-slug": edition.slug })), ...Object.keys(legacyEditionSlugs).map((slug) => ({ "chapter-slug": slug }))]; }

export async function generateMetadata({ params }: { params: Promise<{ "chapter-slug": string }> }): Promise<Metadata> {
  const { "chapter-slug": slug } = await params;
  const edition = getEditionBySlug(slug);
  return edition ? { title: `${edition.title} — The Editions`, description: edition.standfirst } : {};
}

export default async function EditionPage({ params }: { params: Promise<{ "chapter-slug": string }> }) {
  const { "chapter-slug": slug } = await params;
  const canonicalSlug = legacyEditionSlugs[slug];
  if (canonicalSlug) permanentRedirect(`/journal/${canonicalSlug}`);

  const edition = getEditionBySlug(slug);
  if (!edition) notFound();
  return <EditionArticle edition={edition} />;
}
