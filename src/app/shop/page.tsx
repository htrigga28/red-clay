import type { Metadata } from "next";
import Link from "next/link";
import { AddToBagButton } from "@/components/commerce/AddToBagButton";
import { ProductGrid } from "@/components/editorial/ProductCard";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";
import { kilnCup } from "@/content/coffees";
import { redClayAssets } from "@/lib/assets/registry";

export const metadata: Metadata = {
  title: "Shop the Current Harvest",
  description: "Four seasonal coffees from Kenya, Burundi, and Ethiopia, with The Kiln Cup as companion object.",
};

export default function ShopPage() {
  return <main id="main-content" className="shop-page">
    <section className="shop-intro page-container" aria-labelledby="shop-title">
      <SectionLabel>CURRENT HARVEST // VOL. 01</SectionLabel>
      <h1 id="shop-title">Four coffees from three East African highland regions.</h1>
      <p>Presented through concise sensory and origin information. The Kiln Cup follows as a companion object.</p>
    </section>
    <section className="shop-coffee-collection" aria-labelledby="coffee-collection-title">
      <div className="page-container"><h2 className="sr-only" id="coffee-collection-title">Current coffees</h2><ProductGrid includeCup={false} showQuickAction action="add" /></div>
    </section>
    <section className="shop-editorial-break" aria-labelledby="shop-editorial-title">
      <div className="page-container shop-editorial-break-grid">
        <MediaFrame asset={redClayAssets.origins.kenyaProcess} className="shop-editorial-break-media" sizes="(max-width: 767px) 100vw, 68vw" />
        <div className="shop-editorial-break-copy"><SectionLabel>FROM THE CURRENT HARVEST</SectionLabel><h2 id="shop-editorial-title">Coffee is carried by place, people, and patient process.</h2><p>Contextual process imagery sits alongside the release wall without standing in for product packaging.</p></div>
      </div>
    </section>
    <section className="shop-companion" aria-labelledby="kiln-cup-title">
      <div className="page-container shop-companion-grid">
        <div className="shop-companion-media"><ProductMediaPlaceholder assetId={kilnCup.media.shopPrimary.id} label={kilnCup.id} kind="kiln-cup" /></div>
        <div className="shop-companion-copy"><SectionLabel>THE COMPANION OBJECT</SectionLabel><h2 id="kiln-cup-title">The Kiln Cup</h2><p>Raw terracotta and a mineral-white interior shape a compact vessel for the daily brew.</p><div className="shop-companion-actions"><AddToBagButton product={kilnCup} /><Link className="editorial-link" href={`/shop/${kilnCup.slug}`}>View the object <span aria-hidden="true">↗</span></Link></div></div>
      </div>
    </section>
  </main>;
}
