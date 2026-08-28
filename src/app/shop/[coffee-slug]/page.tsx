import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CoffeePdp } from "@/components/commerce/CoffeePdp";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";
import { allActiveProducts, getProductBySlug } from "@/content/coffees";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { AddToBagButton } from "@/components/commerce/AddToBagButton";
import { redClayAssets } from "@/lib/assets/registry";

export function generateStaticParams() {
  return allActiveProducts.map((product) => ({ "coffee-slug": product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ "coffee-slug": string }> }): Promise<Metadata> {
  const { "coffee-slug": slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: titleCaseProduct(product.id),
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ "coffee-slug": string }> }) {
  const { "coffee-slug": slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  if (product.kind === "kiln-cup") return <main id="main-content" className="kiln-cup-page">
    <section className="kiln-cup-opening page-container">
      <div className="kiln-cup-identity"><SectionLabel>THE COMPANION OBJECT</SectionLabel><h1>The Kiln Cup</h1><p>{product.shortDescription}</p><dl className="kiln-cup-facts"><div><dt>Material</dt><dd>Iron-rich high-fired stoneware</dd></div><div><dt>Interior</dt><dd>Warm mineral-white satin glaze</dd></div><div><dt>Capacity</dt><dd>Approx. 300ml / 10oz</dd></div></dl><div className="kiln-cup-actions"><AddToBagButton product={product} className="button button--dark" /><Link className="editorial-link" href="/shop">Back to Shop <span aria-hidden="true">↗</span></Link></div></div>
      <ProductMediaPlaceholder assetId={product.media.pdpHero.id} label={product.id} kind="kiln-cup" className="kiln-cup-hero-media" />
    </section>
    <section className="kiln-cup-material"><PageContainer><div className="kiln-cup-material-grid"><div><SectionLabel>FORM / MATERIAL</SectionLabel><h2>Clay outside. Glaze within.</h2><p>An exposed red clay exterior gives way to a warm satin glaze inside. The contrast is tactile, simple, and made to sit beside coffee rather than compete with it.</p></div><ProductMediaPlaceholder assetId={product.media.pdpHero.id} label={product.id} kind="kiln-cup" aspectRatio="1 / 1" /></div></PageContainer></section>
    <section className="kiln-cup-ritual page-container"><MediaFrame asset={redClayAssets.ritual.pourOver} className="kiln-cup-ritual-media" sizes="(max-width: 767px) 100vw, 65vw" /><div><SectionLabel>COFFEE USE</SectionLabel><h2>Made for the daily brew.</h2><p>Use it for filter coffee, a long black, or the coffee you return to every day.</p><Link className="editorial-link" href="/shop/laterite">Pair with Laterite <span aria-hidden="true">↗</span></Link></div></section>
    <section className="kiln-cup-scale"><PageContainer><div><SectionLabel>FORM</SectionLabel><h2>A compact, gently tapered cup.</h2><p>The cylindrical body has a compact loop handle and an approximate capacity of 300ml / 10oz.</p></div><ProductMediaPlaceholder assetId={product.media.pdpHero.id} label={product.id} kind="kiln-cup" aspectRatio="16 / 10" /></PageContainer></section>
    <section className="kiln-cup-pairing page-container"><div><SectionLabel>COFFEE FIRST</SectionLabel><h2>Begin with the cup you like to drink.</h2><p>Choose balanced Laterite, floral Linen, or one of six coffees from the Current Harvest.</p></div><Link className="editorial-link" href="/shop">See all coffees <span aria-hidden="true">↗</span></Link></section>
  </main>;
  return <CoffeePdp coffee={product} />;
}

function titleCaseProduct(id: string) {
  return id.toLowerCase().replace(/(^|[\s—/])\p{L}/gu, (letter) => letter.toUpperCase());
}
