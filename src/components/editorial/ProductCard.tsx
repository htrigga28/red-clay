import Link from "next/link";
import { coffees, kilnCup, type Coffee } from "@/content/coffees";
import { redClayAssets } from "@/lib/assets/registry";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";

export function ProductCard({ product, featured = false, showQuickAction = false }: { product: Coffee | typeof kilnCup; featured?: boolean; showQuickAction?: boolean }) {
  const isCup = product.id === kilnCup.id;
  const asset = isCup ? redClayAssets.pending.kilnCup : ({
    "KENYA LOT 01": redClayAssets.pending.kenyaProduct,
    "BURUNDI LOT 01": redClayAssets.pending.burundiProduct,
    "ETHIOPIA LOT 01": redClayAssets.pending.ethiopia01Product,
    "ETHIOPIA LOT 02": redClayAssets.pending.ethiopia02Product,
  } as const)[product.id];
  const assetId = asset?.id ?? product.assetId;
  const href = isCup ? `/shop/${kilnCup.slug}` : `/shop/${product.slug}`;
  const hasApprovedNotes = !product.notes.toLowerCase().includes("pending");
  return <article className={`product-card ${isCup ? "product-card--cup" : ""} ${featured ? "product-card--featured" : ""}`}>
    <div className="product-card-media">
      <Link href={href} aria-label={`Open ${product.id}`}>
        <ProductMediaPlaceholder assetId={assetId} label={product.id} kind={isCup ? "kiln-cup" : "coffee"} />
      </Link>
      {showQuickAction && <Link className="product-quick-action" href={href}>View coffee <span aria-hidden="true">↗</span></Link>}
    </div>
    <div className="product-card-copy"><p className="product-card-id">{product.id}</p><p className="product-card-region">{product.region}</p>{hasApprovedNotes && <p className="product-card-notes">{product.notes}</p>}<Link className="text-link" href={isCup ? `/shop/${kilnCup.slug}` : `/shop/${product.slug}`}>{isCup ? "View the object" : "View coffee"}<span aria-hidden="true">↗</span></Link></div>
  </article>;
}

export function ProductGrid({ includeCup = true, showQuickAction = false }: { includeCup?: boolean; showQuickAction?: boolean }) {
  return <div className="product-grid">{coffees.map((coffee, index) => <ProductCard key={coffee.id} product={coffee} featured={index === 0} showQuickAction={showQuickAction} />)}{includeCup && <ProductCard product={kilnCup} showQuickAction={showQuickAction} />}</div>;
}
