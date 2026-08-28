"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { getBagLineKey, useBag, type BagItem } from "@/components/commerce/BagProvider";
import { getProductById } from "@/content/coffees";

const formatKes = (value: number | null | undefined) => value == null
  ? "KES —"
  : `KES ${new Intl.NumberFormat("en-KE", { maximumFractionDigits: 0 }).format(value)}`;

const itemPrice = (item: BagItem) => item.price ?? getProductById(item.id)?.price ?? null;

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
  const { items, count, announcement, increment, decrement, remove, undoRemove, close } = useBag();
  const subtotal = items.reduce((total, item) => total + (itemPrice(item) ?? 0) * item.quantity, 0);
  const hasPrices = items.every((item) => itemPrice(item) !== null);
  const freeDeliveryRemaining = Math.max(0, 5000 - subtotal);
  return <div className={`bag-contents ${compact ? "bag-contents--compact" : ""}`}>
    <p className="sr-only" aria-live="polite">{announcement}</p>
    {items.length === 0 ? <div className="bag-empty"><p className="section-label">EMPTY BAG</p><h2>Your bag is empty.</h2><p>Add a coffee or The Kiln Cup to begin.</p><Link className="editorial-link" href="/shop">Browse the collection <span aria-hidden="true">↗</span></Link></div> : <>
      <p className="bag-count-label">{count} {count === 1 ? "item" : "items"}</p>
      <ul className="bag-items">
        {items.map((item) => <BagLineItem key={getBagLineKey(item)} item={item} increment={increment} decrement={decrement} remove={remove} />)}
      </ul>
      <div className="bag-summary" aria-label="Bag summary">
        <div className="bag-summary-row"><span>Subtotal</span><strong>{hasPrices ? formatKes(subtotal) : "KES —"}</strong></div>
        <p className="bag-delivery-note">{hasPrices && freeDeliveryRemaining > 0 ? `${formatKes(freeDeliveryRemaining)} away from free Kenya delivery. Orders leave the roastery within 1–2 business days.` : "Free Kenya delivery at KES 5,000+. Orders leave the roastery within 1–2 business days."}</p>
        <Link className="button button--dark bag-checkout" href="/checkout" onClick={compact ? closeBagAfterCheckout : undefined}>Checkout <span aria-hidden="true">↗</span></Link>
      </div>
      <p className="bag-note">Items stay in your bag while you browse.</p>
    </>}
    {announcement.includes("Undo is available") && <button className="bag-undo" type="button" onClick={undoRemove}>Undo removal</button>}
  </div>;

  function closeBagAfterCheckout() {
    // The drawer should not remain over the checkout route after navigation.
    close();
  }
}

function BagLineItem({ item, increment, decrement, remove }: { item: BagItem; increment: (lineKey: string) => void; decrement: (lineKey: string) => void; remove: (lineKey: string) => void }) {
  const lineKey = getBagLineKey(item);
  return <li className="bag-line-item">
    <Link className="bag-line-media" href={`/shop/${item.slug}`} aria-label={`View ${item.id}`}><CartLineThumbnail item={item} /></Link>
    <div className="bag-line-copy"><div className="bag-line-heading"><p className="product-card-id">{item.id}</p><strong className="bag-line-price">{formatKes(itemPrice(item) === null ? null : itemPrice(item)! * item.quantity)}</strong></div><p className="product-card-region">{item.region}</p>{item.format && <p className="bag-line-variant">{item.format}{item.grind ? ` · ${item.grind}` : ""}</p>}<div className="bag-line-controls"><button type="button" aria-label={`Decrease ${item.id} quantity`} onClick={() => decrement(lineKey)}>-</button><span aria-label={`${item.quantity} ${item.id} quantity`}>{item.quantity}</span><button type="button" aria-label={`Increase ${item.id} quantity`} onClick={() => increment(lineKey)}>+</button></div><button className="bag-remove" type="button" onClick={() => remove(lineKey)}>Remove</button></div>
  </li>;
}

function CartLineThumbnail({ item }: { item: BagItem }) {
  const isCup = item.kind === "kiln-cup";
  return <div className="product-media-stage" aria-label={`${item.id} product image pending`} role="img">
    <div className={`product-placeholder product-placeholder--${item.kind}`}>
      <div className="bag-line-thumb-object" aria-hidden="true" style={{ width: isCup ? "42%" : "62%", minHeight: isCup ? "48%" : "64%", borderRadius: isCup ? "46% 46% 34% 34%" : "0", background: isCup ? "rgba(155, 77, 55, 0.72)" : "rgba(250, 248, 242, 0.42)" }}>
        <span className="placeholder-mark">RED CLAY</span>
        <span className="placeholder-label">{item.id}</span>
      </div>
    </div>
  </div>;
}
