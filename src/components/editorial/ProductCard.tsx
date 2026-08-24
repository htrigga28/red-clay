"use client";

import Link from "next/link";
import { coffees, kilnCup, type Product } from "@/content/coffees";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { useBag } from "@/components/commerce/BagProvider";

type ProductCardProps = {
  product: Product;
  featured?: boolean;
  showQuickAction?: boolean;
  action?: "view" | "add";
};

export function ProductCard({ product, featured = false, showQuickAction = false, action = "view" }: ProductCardProps) {
  const { add } = useBag();
  const isCup = product.id === kilnCup.id;
  const href = `/shop/${product.slug}`;
  const notes = product.notes.join(" / ");
  const label = isCup ? "View The Kiln Cup" : `View ${product.id}`;

  return (
    <article className={`product-card ${isCup ? "product-card--cup" : ""} ${featured ? "product-card--featured" : ""}`}>
      <div className="product-card-media">
        <Link href={href} aria-label={label}>
          <ProductMediaPlaceholder
            assetId={product.media.shopPrimary.id}
            label={product.id}
            kind={isCup ? "kiln-cup" : "coffee"}
            alternate={"shopAlternate" in product.media ? product.media.shopAlternate : undefined}
          />
        </Link>
        {showQuickAction && action === "add" && (
          <button className="product-quick-action" type="button" onClick={(event) => add(product, 1, event.currentTarget)}>
            Add to bag <span aria-hidden="true">↗</span>
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
        <Link className="text-link" href={href}>{isCup ? "View the object" : "View coffee"}<span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}

export function ProductGrid({ includeCup = true, showQuickAction = false, action = "view" }: { includeCup?: boolean; showQuickAction?: boolean; action?: "view" | "add" }) {
  return <div className="product-grid">{coffees.map((coffee, index) => <ProductCard key={coffee.id} product={coffee} featured={index === 0} showQuickAction={showQuickAction} action={action} />)}{includeCup && <ProductCard product={kilnCup} showQuickAction={showQuickAction} action={action} />}</div>;
}
