"use client";

import Link from "next/link";
import { coffees, type Product } from "@/content/coffees";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { useBag } from "@/components/commerce/BagProvider";

type ProductCardProps = {
  product: Product;
  featured?: boolean;
  showQuickAction?: boolean;
  action?: "view" | "add";
  contextual?: boolean;
  showDirection?: boolean;
  anchorId?: string;
};

export function ProductCard({ product, featured = false, showQuickAction = false, action = "view", contextual = false, showDirection = false, anchorId }: ProductCardProps) {
  const { add } = useBag();
  const isCup = product.kind === "kiln-cup";
  const href = `/shop/${product.slug}`;
  const notes = product.notes.join(" / ");
  const label = isCup ? "View The Kiln Cup" : `View ${product.id}`;
  const canAddToBag = product.formats.length > 0;

  return (
    <article id={anchorId} className={`product-card product-card--${product.family} ${isCup ? "product-card--cup" : ""} ${featured ? "product-card--featured" : ""} ${contextual ? "product-card--contextual" : ""}`}>
      <div className="product-card-media">
        <Link href={href} aria-label={label}>
          <ProductMediaPlaceholder
            assetId={product.media.shopPrimary.id}
            label={product.id}
            kind={isCup ? "kiln-cup" : "coffee"}
            className={contextual ? "product-media-stage--contextual" : ""}
            alternate={"shopAlternate" in product.media ? product.media.shopAlternate : undefined}
          />
        </Link>
        {showQuickAction && action === "add" && canAddToBag && (
          <button className="product-quick-action" type="button" onClick={(event) => add(product, 1, event.currentTarget)}>
            Add to Bag <span aria-hidden="true">↗</span>
          </button>
        )}
        {showQuickAction && action === "view" && (
          <Link className="product-quick-action" href={href}>
            {isCup ? "View the object" : "View coffee"} <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
      <div className="product-card-copy">
        <p className="product-card-id">{product.id}</p>
        <p className="product-card-region">{product.region}</p>
        {notes && <p className="product-card-notes">{notes}</p>}
        {showDirection && <p className="product-card-direction">{product.customerDirection}</p>}
        <Link className="text-link" href={href}>{label}<span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}

export function ProductGrid({ items = coffees, showQuickAction = false, action = "view", showDirection = false, className = "", anchorIds = [] }: { items?: readonly Product[]; showQuickAction?: boolean; action?: "view" | "add"; showDirection?: boolean; className?: string; anchorIds?: readonly (string | undefined)[] }) {
  return <div className={`product-grid ${className}`}>{items.map((product, index) => <ProductCard key={product.id} product={product} featured={index === 0} showQuickAction={showQuickAction} action={action} showDirection={showDirection} anchorId={anchorIds[index]} />)}</div>;
}
