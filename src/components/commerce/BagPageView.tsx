"use client";

import Link from "next/link";
import { CartLineItem } from "@/components/commerce/CartLineItem";
import { useBag } from "@/components/commerce/BagProvider";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";
import { calculateSubtotal, formatKes, getKenyaDeliveryProgress, resolveCartLine, type ResolvedCartLine } from "@/lib/commerce";

export function BagPageView() {
  const { items, count, hasInvalidItems, increment, decrement, remove } = useBag();
  const resolvedLines = items.map(resolveCartLine).filter((line): line is ResolvedCartLine => Boolean(line));
  const subtotal = calculateSubtotal(resolvedLines);
  const deliveryProgress = getKenyaDeliveryProgress(subtotal);

  return <main id="main-content" className="bag-page">
    <section className="bag-page-intro page-container"><SectionLabel>BAG</SectionLabel><h1>Review your bag.</h1><p>Adjust quantities, confirm your selections, or return to Shop to keep browsing.</p></section>
    <section className="bag-page-body"><PageContainer>
      {items.length === 0 ? <BagEmptyState /> : <div className="bag-review-grid">
        <section className="bag-review-items" aria-labelledby="bag-items-title">
          <div className="bag-review-heading"><p className="section-label">ITEMS</p><h2 id="bag-items-title">{count} {count === 1 ? "item" : "items"} in your bag</h2></div>
          <ul className="bag-items">{items.map((item) => <CartLineItem key={item.lineId} item={item} density="review" increment={increment} decrement={decrement} remove={remove} />)}</ul>
        </section>
        <aside className="bag-review-summary" aria-labelledby="bag-summary-title">
          <p className="section-label">ORDER SUMMARY</p><h2 id="bag-summary-title">Before checkout.</h2>
          {hasInvalidItems && <p className="bag-summary-warning" id="bag-page-invalid">Totals exclude unavailable selections. Remove them before checkout.</p>}
          <dl className="bag-summary-totals"><div><dt>Subtotal</dt><dd>{formatKes(subtotal)}</dd></div></dl>
          <p className="bag-summary-progress">{deliveryProgress.message}</p>
          <div className="bag-summary-actions">
            {hasInvalidItems ? <button className="button button--dark" type="button" disabled aria-describedby="bag-page-invalid">Checkout</button> : <Link className="button button--dark" href="/checkout">Checkout</Link>}
            <Link className="button button--outline" href="/shop">Continue shopping</Link>
          </div>
        </aside>
      </div>}
    </PageContainer></section>
  </main>;
}

function BagEmptyState() {
  return <div className="bag-empty bag-empty--page"><p className="section-label">EMPTY BAG</p><h2>Your bag is empty.</h2><p>Add a coffee or The Kiln Cup, then return here to review it.</p><Link className="button button--dark" href="/shop">Shop coffees</Link></div>;
}
