"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { useBag, type BagItem } from "@/components/commerce/BagProvider";
import { formatKes, resolveCartLine } from "@/lib/commerce";

export function CartDrawer() {
  const { isOpen, close, count } = useBag();
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add("bag-open");
    const panel = panelRef.current;
    const focusable = () => Array.from(panel?.querySelectorAll<HTMLElement>("button, a[href], input") ?? []).filter((element) => !element.hasAttribute("disabled"));
    const first = focusable()[0];
    window.setTimeout(() => first?.focus(), 0);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const elements = focusable();
      if (elements.length === 0) return;
      const current = document.activeElement;
      if (event.shiftKey && current === elements[0]) {
        event.preventDefault();
        elements[elements.length - 1].focus();
      } else if (!event.shiftKey && current === elements[elements.length - 1]) {
        event.preventDefault();
        elements[0].focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("bag-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;
  return <>
    <button className="bag-backdrop" type="button" aria-label="Close bag" onClick={close} />
    <aside ref={panelRef} className="bag-drawer" role="dialog" aria-modal="true" aria-labelledby="bag-title">
      <div className="bag-drawer-header"><div><p className="section-label">BAG</p><h2 id="bag-title">Bag <span>({count})</span></h2></div><button className="bag-close" type="button" onClick={close}>Close</button></div>
      <BagContents compact />
    </aside>
  </>;
}

export function BagContents({ compact = false }: { compact?: boolean }) {
  const { items, count, announcement, increment, decrement, remove } = useBag();
  return <div className={`bag-contents ${compact ? "bag-contents--compact" : ""}`}>
    <p className="sr-only" aria-live="polite">{announcement}</p>
    {items.length === 0 ? <div className="bag-empty"><p className="section-label">EMPTY BAG</p><h2>Your bag is empty.</h2><p>Add a coffee or The Kiln Cup to begin.</p><Link className="editorial-link" href="/shop">See all coffees <span aria-hidden="true">↗</span></Link></div> : <>
      <p className="bag-count-label">{count} {count === 1 ? "item" : "items"}</p>
      <ul className="bag-items">
        {items.map((item) => <BagLineItem key={item.lineId} item={item} increment={increment} decrement={decrement} remove={remove} />)}
      </ul>
      <p className="bag-note">Items stay in your bag while you browse.</p>
    </>}
  </div>;
}

function BagLineItem({ item, increment, decrement, remove }: { item: BagItem; increment: (lineId: BagItem["lineId"]) => void; decrement: (lineId: BagItem["lineId"]) => void; remove: (lineId: BagItem["lineId"]) => void }) {
  const resolved = resolveCartLine(item);
  if (!resolved) return <li className="bag-line-item"><div className="bag-line-copy"><p className="product-card-id">Unavailable product option</p><p className="product-card-region">This line cannot be checked out. Remove it to continue.</p><button className="bag-remove" type="button" onClick={() => remove(item.lineId)}>Remove</button></div></li>;
  const { product, format, grindId, unitPriceKes } = resolved;
  return <li className="bag-line-item">
    <Link className="bag-line-media" href={`/shop/${product.slug}`} aria-label={`View ${product.id}`}><ProductMediaPlaceholder assetId={product.media.shopPrimary.id} label={product.id} kind={product.kind} /></Link>
    <div className="bag-line-copy"><p className="product-card-id">{product.id}</p><p className="product-card-region">{product.region}</p><p className="product-card-region">{format.label}{grindId ? ` / ${grindLabel(grindId)}` : ""} / {formatKes(unitPriceKes)}</p><div className="bag-line-controls"><button type="button" aria-label={`Decrease ${product.id} quantity`} onClick={() => decrement(item.lineId)}>-</button><span aria-label={`${item.quantity} ${product.id} quantity`}>{item.quantity}</span><button type="button" aria-label={`Increase ${product.id} quantity`} onClick={() => increment(item.lineId)}>+</button></div><button className="bag-remove" type="button" onClick={() => remove(item.lineId)}>Remove</button></div>
  </li>;
}

function grindLabel(grindId: "whole-bean" | "filter" | "espresso") {
  return grindId === "whole-bean" ? "Whole Bean" : grindId === "filter" ? "Filter Grind" : "Espresso Grind";
}
