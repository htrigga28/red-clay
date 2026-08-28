"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CartLineItem } from "@/components/commerce/CartLineItem";
import { useBag } from "@/components/commerce/BagProvider";
import { calculateSubtotal, formatKes, getKenyaDeliveryProgress, resolveCartLine, type ResolvedCartLine } from "@/lib/commerce";

export function CartDrawer() {
  const { isOpen, close, count, items, hasInvalidItems, announcement, increment, decrement, remove } = useBag();
  const panelRef = useRef<HTMLElement>(null);
  const resolvedLines = items.map(resolveCartLine).filter((line): line is ResolvedCartLine => Boolean(line));
  const subtotal = calculateSubtotal(resolvedLines);
  const deliveryProgress = getKenyaDeliveryProgress(subtotal);

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
      <p className="sr-only" aria-live="polite">{announcement}</p>
      <div className="bag-drawer-header"><div><p className="section-label">BAG</p><h2 id="bag-title">Bag <span>({count})</span></h2></div><button className="bag-close" type="button" onClick={close}>Close</button></div>
      <div className="bag-drawer-items" aria-label="Bag items">
        {items.length === 0 ? <EmptyBag /> : <><p className="bag-count-label">{count} {count === 1 ? "item" : "items"}</p><ul className="bag-items">{items.map((item) => <CartLineItem key={item.lineId} item={item} density="compact" increment={increment} decrement={decrement} remove={remove} />)}</ul></>}
      </div>
      {items.length > 0 && <div className="bag-drawer-summary">
        {hasInvalidItems && <p className="bag-summary-warning" id="bag-drawer-invalid">Totals exclude unavailable selections. Remove them before checkout.</p>}
        <dl className="bag-summary-totals"><div><dt>Subtotal</dt><dd>{formatKes(subtotal)}</dd></div></dl>
        <p className="bag-summary-progress">{deliveryProgress.message}</p>
        <div className="bag-summary-actions">
          {hasInvalidItems ? <button className="button button--dark" type="button" disabled aria-describedby="bag-drawer-invalid">Checkout</button> : <Link className="button button--dark" href="/checkout" onClick={close}>Checkout</Link>}
          <Link className="button button--outline" href="/bag" onClick={close}>View bag</Link>
        </div>
      </div>}
    </aside>
  </>;
}

function EmptyBag() {
  return <div className="bag-empty"><p className="section-label">EMPTY BAG</p><h2>Your bag is empty.</h2><p>Add a coffee or The Kiln Cup to begin.</p><Link className="editorial-link" href="/shop">See all coffees <span aria-hidden="true">↗</span></Link></div>;
}
