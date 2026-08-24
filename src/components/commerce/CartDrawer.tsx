"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { useBag, type BagItem } from "@/components/commerce/BagProvider";

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
      <div className="bag-drawer-header"><div><p className="section-label">BAG</p><h2 id="bag-title">Your selections <span>({count})</span></h2></div><button className="bag-close" type="button" onClick={close}>Close</button></div>
      <BagContents compact />
    </aside>
  </>;
}

export function BagContents({ compact = false }: { compact?: boolean }) {
  const { items, count, announcement, increment, decrement, remove } = useBag();
  return <div className={`bag-contents ${compact ? "bag-contents--compact" : ""}`}>
    <p className="sr-only" aria-live="polite">{announcement}</p>
    {items.length === 0 ? <div className="bag-empty"><p className="section-label">EMPTY BAG</p><h2>Your bag is quiet for now.</h2><p>Add a coffee or the companion object to begin.</p><Link className="editorial-link" href="/shop">Explore the harvest <span aria-hidden="true">↗</span></Link></div> : <>
      <p className="bag-count-label">{count} {count === 1 ? "item" : "items"}</p>
      <ul className="bag-items">
        {items.map((item) => <BagLineItem key={item.id} item={item} increment={increment} decrement={decrement} remove={remove} />)}
      </ul>
      <p className="bag-note">Your selections are held here while you continue exploring.</p>
    </>}
  </div>;
}

function BagLineItem({ item, increment, decrement, remove }: { item: BagItem; increment: (id: BagItem["id"]) => void; decrement: (id: BagItem["id"]) => void; remove: (id: BagItem["id"]) => void }) {
  return <li className="bag-line-item">
    <Link className="bag-line-media" href={`/shop/${item.slug}`} aria-label={`View ${item.id}`}><ProductMediaPlaceholder assetId={item.assetId} label={item.id} kind={item.kind} /></Link>
    <div className="bag-line-copy"><p className="product-card-id">{item.id}</p><p className="product-card-region">{item.region}</p><div className="bag-line-controls"><button type="button" aria-label={`Decrease ${item.id} quantity`} onClick={() => decrement(item.id)}>-</button><span aria-label={`${item.quantity} ${item.id} quantity`}>{item.quantity}</span><button type="button" aria-label={`Increase ${item.id} quantity`} onClick={() => increment(item.id)}>+</button></div><button className="bag-remove" type="button" onClick={() => remove(item.id)}>Remove</button></div>
  </li>;
}
