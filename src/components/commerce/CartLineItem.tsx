import Link from "next/link";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { formatKes, resolveCartLine, type CartLine } from "@/lib/commerce";

type CartLineItemProps = {
  item: CartLine;
  density: "compact" | "review";
  increment: (lineId: CartLine["lineId"]) => void;
  decrement: (lineId: CartLine["lineId"]) => void;
  remove: (lineId: CartLine["lineId"]) => void;
};

export function CartLineItem({ item, density, increment, decrement, remove }: CartLineItemProps) {
  const resolved = resolveCartLine(item);

  if (!resolved) {
    const selection = [item.productId, item.formatId, item.grindId].filter(Boolean).join(" / ");
    return <li className={`cart-line cart-line--${density} cart-line--invalid`}>
      <div className="cart-line-copy">
        <p className="product-card-id">Unavailable product option</p>
        <p className="product-card-region">{selection}</p>
        <p className="cart-line-status" role="status">This selection is no longer available. Checkout is blocked until you remove it.</p>
      </div>
      <div className="cart-line-actions"><button className="bag-remove" type="button" onClick={() => remove(item.lineId)}>Remove</button></div>
    </li>;
  }

  const { product, format, grindId, unitPriceKes } = resolved;
  return <li className={`cart-line cart-line--${density}`}>
    <Link className="cart-line-media" href={`/shop/${product.slug}`} aria-label={`View ${product.id}`}>
      <ProductMediaPlaceholder assetId={product.media.shopPrimary.id} label={product.id} kind={product.kind} variant="cart" />
    </Link>
    <div className="cart-line-copy">
      <p className="product-card-id">{product.id}</p>
      <p className="product-card-region">{product.role}</p>
      <p className="cart-line-selection">{format.label}{grindId ? ` / ${grindLabel(grindId)}` : ""}</p>
      <p className="cart-line-price">{formatKes(unitPriceKes)} each</p>
    </div>
    <div className="cart-line-actions">
      <div className="bag-line-controls" aria-label={`Quantity for ${product.id}`}>
        <button type="button" aria-label={`Decrease ${product.id} quantity`} onClick={() => decrement(item.lineId)}>−</button>
        <span aria-live="polite">{item.quantity}</span>
        <button type="button" aria-label={`Increase ${product.id} quantity`} onClick={() => increment(item.lineId)}>+</button>
      </div>
      <button className="bag-remove" type="button" onClick={() => remove(item.lineId)}>Remove</button>
    </div>
  </li>;
}

function grindLabel(grindId: "whole-bean" | "filter" | "espresso") {
  return grindId === "whole-bean" ? "Whole Bean" : grindId === "filter" ? "Filter Grind" : "Espresso Grind";
}
