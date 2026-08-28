"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function CheckoutCompleteView() {
  const orderId = useSearchParams().get("order");
  const isValidOrderId = Boolean(orderId && /^RC-DEMO-\d{8}-\d{6}$/.test(orderId));

  return <main id="main-content" className="checkout-page">
    <section className="checkout-complete page-container">
      <p className="section-label">DEMO ORDER</p>
      <h1>{isValidOrderId ? "Your demo order was received." : "This demo order is not available."}</h1>
      {isValidOrderId ? <><p className="checkout-order-id">Order ID: {orderId}</p><p>No payment was collected, and no order will be fulfilled.</p></> : <p>Return to Shop to begin a new portfolio demo.</p>}
      <div className="checkout-complete-actions"><Link className="button button--dark" href="/shop">Return to Shop</Link><Link className="button button--outline" href="/journal">Read The Editions</Link></div>
    </section>
  </main>;
}
