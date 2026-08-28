"use client";

import type { Product } from "@/content/coffees";
import { useBag, type BagVariant } from "@/components/commerce/BagProvider";

export function AddToBagButton({ product, quantity = 1, className = "button button--dark", variant }: { product: Product; quantity?: number; className?: string; variant?: BagVariant }) {
  const { add } = useBag();
  return <button className={className} type="button" onClick={(event) => add(product, quantity, event.currentTarget, variant)}>Add to Bag</button>;
}
