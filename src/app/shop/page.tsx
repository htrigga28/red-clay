import type { Metadata } from "next";
import Link from "next/link";
import { AddToBagButton } from "@/components/commerce/AddToBagButton";
import { ProductGrid } from "@/components/editorial/ProductCard";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { SectionLabel } from "@/components/layout/PageContainer";
import { currentHarvest, kilnCup, materialSeries, otherWaysToDrink } from "@/content/coffees";

export const metadata: Metadata = {
  title: "Shop Coffee",
  description: "Shop Red Clay house coffees, six Current Harvest releases, decaf, instant coffee, the Three Regions discovery box, and The Kiln Cup.",
};

export default function ShopPage() {
  return <main id="main-content" className="shop-page">
    <section className="shop-intro page-container" aria-labelledby="shop-title">
      <h1 id="shop-title">Choose by cup, then by place.</h1>
      <p>Begin with a familiar house profile or move into the Current Harvest to compare region and process. The smaller collection below covers decaf, instant, discovery, and one cup made for coffee.</p>
    </section>

    <section className="shop-movement shop-material-series" aria-labelledby="material-series-title">
      <div className="page-container">
        <div className="shop-movement-heading">
          <SectionLabel>THE MATERIAL SERIES</SectionLabel>
          <div><h2 id="material-series-title">Three house profiles to return to.</h2><p>Laterite is balanced. Basalt brings more body and deeper sweetness. Linen is the lightest and most floral.</p></div>
        </div>
        <ProductGrid items={materialSeries} showQuickAction action="add" showDirection className="product-grid--material" />
      </div>
    </section>

    <section className="shop-movement shop-current-harvest" aria-labelledby="current-harvest-title">
      <div className="page-container">
        <div className="shop-movement-heading">
          <SectionLabel>CURRENT HARVEST</SectionLabel>
          <div><h2 id="current-harvest-title">Six coffees, with contrast built in.</h2><p>Choose vivid Kiambu or lifted Kirinyaga; floral Kayanza Washed or deeper Kayanza Natural; tea-like Sidama or fruit-driven Guji.</p></div>
        </div>
        <div className="shop-comparison" aria-label="Current Harvest comparison">
          <p id="kenya-coffees"><strong>KENYA</strong><span>Kiambu is darker-fruited and structured. Kirinyaga is brighter and more floral.</span></p>
          <p id="kayanza-coffees"><strong>KAYANZA</strong><span>Washed is clean and honeyed. Natural is rounder and fruitier.</span></p>
          <p id="ethiopia-coffees"><strong>ETHIOPIA</strong><span>Sidama is light and tea-like. Guji is fuller and fruit-driven.</span></p>
        </div>
        <ProductGrid items={currentHarvest} showQuickAction action="add" showDirection className="product-grid--harvest" />
      </div>
    </section>

    <section className="shop-movement shop-other-ways" aria-labelledby="other-ways-title">
      <div className="page-container">
        <div className="shop-movement-heading">
          <SectionLabel>OTHER WAYS TO DRINK</SectionLabel>
          <div><h2 id="other-ways-title">Decaf, travel, and discovery.</h2><p>Afterlight keeps decaf serious. Instant travels without the brew setup. Three Regions helps you compare before choosing a full bag.</p></div>
        </div>
        <ProductGrid items={otherWaysToDrink} showQuickAction action="add" showDirection className="product-grid--other" />
      </div>
    </section>

    <section className="shop-companion" aria-labelledby="kiln-cup-title">
      <div className="page-container shop-companion-grid">
        <div className="shop-companion-media"><ProductMediaPlaceholder assetId={kilnCup.media.shopPrimary.id} label={kilnCup.id} kind="kiln-cup" /></div>
        <div className="shop-companion-copy"><SectionLabel>THE KILN CUP</SectionLabel><h2 id="kiln-cup-title">Clay outside. Glaze within.</h2><p>Iron-rich high-fired stoneware, a warm mineral-white satin glaze, and an approximate 300ml / 10oz capacity. The cup remains a companion to coffee.</p><div className="shop-companion-actions"><AddToBagButton product={kilnCup} /><Link className="editorial-link" href={`/shop/${kilnCup.slug}`}>View The Kiln Cup <span aria-hidden="true">↗</span></Link></div></div>
      </div>
    </section>
  </main>;
}
