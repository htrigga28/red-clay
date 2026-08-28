"use client";

import type { Product } from "@/content/coffees";
import { useBag } from "@/components/commerce/BagProvider";

export function AddToBagButton({ product, quantity = 1, className = "button button--dark" }: { product: Product; quantity?: number; className?: string }) {
  const { add } = useBag();
  return <button className={className} type="button" onClick={(event) => add(product, quantity, event.currentTarget)}>Add to Bag</button>;
}
