"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useBag, type BagItem } from "@/components/commerce/BagProvider";
import { getProductById } from "@/content/coffees";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";

const FREE_DELIVERY_THRESHOLD = 5000;

const money = (value: number | null | undefined) => value == null
  ? "KES —"
  : `KES ${new Intl.NumberFormat("en-KE", { maximumFractionDigits: 0 }).format(value)}`;

const itemPrice = (item: BagItem) => item.price ?? getProductById(item.id)?.price ?? null;

function linePrice(item: BagItem) {
  const price = itemPrice(item);
  return price == null ? null : price * item.quantity;
}

export function CheckoutPageView() {
  const router = useRouter();
  const { items, count } = useBag();
  const [country, setCountry] = useState("Kenya");
  const [region, setRegion] = useState("");
  const [payment, setPayment] = useState("mpesa");
  const [error, setError] = useState("");
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + (linePrice(item) ?? 0), 0), [items]);
  const hasPrices = items.every((item) => linePrice(item) !== null);
  const isNairobi = region.trim().toLowerCase().includes("nairobi");
  const shipping = country === "Kenya" ? (subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : isNairobi ? 300 : 500) : 3500;
  const total = subtotal + shipping;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (items.length === 0) return;
    setError("");
    const order = `RC-${new Date().toISOString().slice(2, 10).replaceAll("-", "")}-${Math.floor(1000 + Math.random() * 9000)}`;
    router.push(`/checkout/complete?order=${encodeURIComponent(order)}`);
  }

  if (items.length === 0) {
    return <main id="main-content" className="checkout-page"><PageContainer><div className="checkout-empty"><SectionLabel>CHECKOUT</SectionLabel><h1>Your bag is empty.</h1><p>Add something from the collection before you check out.</p><Link className="button button--dark" href="/shop">See all coffees <span aria-hidden="true">↗</span></Link></div></PageContainer></main>;
  }

  return <main id="main-content" className="checkout-page">
    <PageContainer>
      <div className="checkout-heading"><SectionLabel>CHECKOUT</SectionLabel><h1>One considered step at a time.</h1><p className="checkout-disclosure"><strong>Portfolio demo checkout — no payment is collected and no order is fulfilled.</strong></p></div>
      <form className="checkout-layout" onSubmit={submit}>
        <div className="checkout-form">
          <fieldset className="checkout-section"><legend><span>01</span> Contact</legend><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label></fieldset>
          <fieldset className="checkout-section"><legend><span>02</span> Delivery</legend><div className="checkout-two-up"><label>First name<input name="firstName" autoComplete="given-name" required /></label><label>Last name<input name="lastName" autoComplete="family-name" required /></label></div><label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label><label>Address<input name="address" autoComplete="street-address" required /></label><div className="checkout-two-up"><label>City / town<input name="city" autoComplete="address-level2" required /></label><label>County / region<input name="region" autoComplete="address-level1" required value={region} onChange={(event) => setRegion(event.target.value)} /></label></div><label>Country<select name="country" value={country} onChange={(event) => setCountry(event.target.value)}><option>Kenya</option><option value="International">International</option></select></label></fieldset>
          <fieldset className="checkout-section"><legend><span>03</span> Delivery method</legend><div className="checkout-method"><strong>{country === "Kenya" ? (isNairobi ? "Nairobi delivery" : "Kenya delivery") : "International demo rate"}</strong><span>{country === "Kenya" ? `${isNairobi ? "1–2" : "2–4"} business days · ${shipping === 0 ? "Free" : money(shipping)}` : "Calculated at checkout · KES 3,500"}</span></div></fieldset>
          <fieldset className="checkout-section"><legend><span>04</span> Payment method</legend><label className="checkout-choice"><input type="radio" name="payment" value="mpesa" checked={payment === "mpesa"} onChange={() => setPayment("mpesa")} /><span><strong>M-Pesa</strong><small>Demo confirmation only. No STK push is sent.</small></span></label><label className="checkout-choice"><input type="radio" name="payment" value="card" checked={payment === "card"} onChange={() => setPayment("card")} /><span><strong>Card</strong><small>Demo card state. Do not enter a real card number.</small></span></label>{payment === "card" && <div className="checkout-card-demo" role="status">Card details are simulated for this portfolio checkout.</div>}</fieldset>
          {error && <p className="checkout-error" role="alert">{error}</p>}
          <button className="button button--dark checkout-submit" type="submit">Place demo order <span aria-hidden="true">↗</span></button>
        </div>
        <aside className="checkout-summary" aria-label="Order summary"><SectionLabel>REVIEW</SectionLabel><h2>{count} {count === 1 ? "item" : "items"}</h2><ul>{items.map((item) => <li key={item.id}><span>{item.id}<small>{item.quantity} × {item.format ?? item.region}</small></span><strong>{money(linePrice(item))}</strong></li>)}</ul><div className="checkout-total-row"><span>Subtotal</span><strong>{hasPrices ? money(subtotal) : "KES —"}</strong></div><div className="checkout-total-row"><span>Shipping</span><strong>{shipping === 0 ? "Free" : money(shipping)}</strong></div><div className="checkout-total-row checkout-total-row--grand"><span>Total</span><strong>{hasPrices ? money(total) : "KES —"}</strong></div>{country === "Kenya" && subtotal < FREE_DELIVERY_THRESHOLD && hasPrices && <p className="checkout-summary-note">{money(FREE_DELIVERY_THRESHOLD - subtotal)} away from free Kenya delivery.</p>}<Link className="editorial-link" href="/bag">Back to bag <span aria-hidden="true">↗</span></Link></aside>
      </form>
    </PageContainer>
  </main>;
}

export function CheckoutCompleteView({ order }: { order?: string }) {
  return <main id="main-content" className="checkout-page"><PageContainer><div className="checkout-complete"><SectionLabel>DEMO ORDER</SectionLabel><h1>Thank you for making time for coffee.</h1><p>Your demo order <strong>{order || "RC-DEMO"}</strong> has not been charged or submitted for fulfilment.</p><p className="checkout-complete-note">This is a portfolio checkout. No payment details or personal delivery information were saved.</p><Link className="button button--dark" href="/shop">Continue browsing <span aria-hidden="true">↗</span></Link></div></PageContainer></main>;
}
