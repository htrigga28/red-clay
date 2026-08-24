import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OriginDossier } from "@/components/origins/OriginDossier";
import { getOriginBySlug, origins } from "@/content/origins";

export function generateStaticParams() {
  return origins.map((origin) => ({ "region-slug": origin.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ "region-slug": string }> }): Promise<Metadata> {
  const { "region-slug": slug } = await params;
  const origin = getOriginBySlug(slug);
  return origin ? { title: `${origin.name} — Origin Dossier`, description: origin.summary } : {};
}

export default async function OriginPage({ params }: { params: Promise<{ "region-slug": string }> }) {
  const { "region-slug": slug } = await params;
  const origin = getOriginBySlug(slug);
  if (!origin) notFound();
  const nextOrigin = origins[(origins.findIndex((item) => item.slug === origin.slug) + 1) % origins.length];
  return <OriginDossier origin={origin} nextOrigin={nextOrigin} />;
}
