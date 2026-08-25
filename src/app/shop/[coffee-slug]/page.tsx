import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CoffeePdp } from "@/components/commerce/CoffeePdp";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";
import { coffees, getProductBySlug, kilnCup } from "@/content/coffees";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { AddToBagButton } from "@/components/commerce/AddToBagButton";
import { redClayAssets } from "@/lib/assets/registry";

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
  if (product.id === kilnCup.id) return <main id="main-content" className="kiln-cup-page">
    <section className="kiln-cup-opening page-container"><div className="kiln-cup-identity"><SectionLabel>THE COMPANION OBJECT</SectionLabel><h1>The Kiln Cup</h1><p>The singular vessel in the Red Clay coffee world: raw terracotta outside, mineral-white glaze within.</p><div className="kiln-cup-actions"><AddToBagButton product={product} className="button button--dark" /><Link className="editorial-link" href="/shop">Return to coffee <span aria-hidden="true">↗</span></Link></div></div><ProductMediaPlaceholder assetId={product.media.pdpHero.id} label={product.id} kind="kiln-cup" className="kiln-cup-hero-media" /></section>
    <section className="kiln-cup-material"><PageContainer><div className="kiln-cup-material-grid"><div><SectionLabel>FORM / MATERIAL</SectionLabel><h2>Clay outside. Glaze within.</h2><p>The object study keeps the contrast visible without turning an unresolved product detail into a production claim.</p></div><ProductMediaPlaceholder assetId={product.media.pdpHero.id} label={product.id} kind="kiln-cup" aspectRatio="1 / 1" /></div></PageContainer></section>
    <section className="kiln-cup-ritual page-container"><MediaFrame asset={redClayAssets.ritual.pourOver} className="kiln-cup-ritual-media" sizes="(max-width: 767px) 100vw, 65vw" /><div><SectionLabel>RITUAL / COFFEE USE</SectionLabel><h2>The Cup exists for the brew.</h2><p>The approved ritual photograph is domestic context, not a photograph of The Kiln Cup. The vessel returns to coffee, not away from it.</p><Link className="editorial-link" href="/shop/kenya-lot-01">Pair with a current coffee <span aria-hidden="true">↗</span></Link></div></section>
    <section className="kiln-cup-scale"><PageContainer><div><SectionLabel>SCALE / HAND FEEL</SectionLabel><h2>A quieter object study.</h2><p>Final Cup-specific scale and in-hand media remain replaceable. This slot preserves the intended proportion without presenting another vessel as the product.</p></div><ProductMediaPlaceholder assetId={product.media.pdpHero.id} label={product.id} kind="kiln-cup" aspectRatio="16 / 10" /></PageContainer></section>
    <section className="kiln-cup-pairing page-container"><div><SectionLabel>COFFEE PAIRING</SectionLabel><h2>Pair with a Current Coffee.</h2><p>Choose the coffee first. The Cup stays a companion object.</p></div><Link className="editorial-link" href="/shop">View current coffees <span aria-hidden="true">↗</span></Link></section>
  </main>;
  return <CoffeePdp coffee={product} />;
}
