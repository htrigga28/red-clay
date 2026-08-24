import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CoffeePdp } from "@/components/commerce/CoffeePdp";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";
import { coffees, getProductBySlug, kilnCup } from "@/content/coffees";

export function generateStaticParams() {
  return [...coffees.map((coffee) => ({ "coffee-slug": coffee.slug })), { "coffee-slug": kilnCup.slug }];
}

export async function generateMetadata({ params }: { params: Promise<{ "coffee-slug": string }> }): Promise<Metadata> {
  const { "coffee-slug": slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return { title: product.id === kilnCup.id ? "The Kiln Cup" : product.id, description: product.id === kilnCup.id ? "The companion object in the Red Clay continuum." : `${product.id} from ${product.region}.` };
}

export default async function ProductPage({ params }: { params: Promise<{ "coffee-slug": string }> }) {
  const { "coffee-slug": slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  if (product.id === kilnCup.id) return <main id="main-content" className="cup-placeholder-page"><section className="cup-placeholder-intro page-container"><SectionLabel>THE COMPANION OBJECT</SectionLabel><h1>The Kiln Cup</h1><p>A companion object in raw terracotta and mineral-white glaze.</p><ProductMediaPlaceholder assetId={product.media.pdpHero.id} label={product.id} kind="kiln-cup" /><p><Link className="editorial-link" href="/shop">Return to the harvest <span aria-hidden="true">↗</span></Link></p></section></main>;
  return <CoffeePdp coffee={product} />;
}
