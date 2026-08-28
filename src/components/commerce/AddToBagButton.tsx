"use client";

import type { Product } from "@/content/coffees";
import { useBag } from "@/components/commerce/BagProvider";
import type { ProductSelection } from "@/lib/commerce";

export function AddToBagButton({ product, selection, quantity = 1, className = "button button--dark", children = "Add to Bag" }: { product: Product; selection: ProductSelection; quantity?: number; className?: string; children?: React.ReactNode }) {
  const { add } = useBag();
  return <button className={className} type="button" onClick={(event) => add(product, selection, quantity, event.currentTarget)}>{children}</button>;
}
