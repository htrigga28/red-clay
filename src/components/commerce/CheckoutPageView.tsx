"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getBagLineKey, useBag, type BagItem } from "@/components/commerce/BagProvider";
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

const createDemoOrderId = () => {
  const date = new Date().toISOString().slice(2, 10).replaceAll("-", "");
  const token = globalThis.crypto.randomUUID().replaceAll("-", "").slice(0, 4).toUpperCase();
  return `RC-${date}-${token}`;
};

const shippingFor = (country: string, subtotal: number, isNairobi: boolean) => {
  if (country !== "Kenya") return 3500;
  if (subtotal >= FREE_DELIVERY_THRESHOLD) return 0;
  return isNairobi ? 300 : 500;
};

function CheckoutEmptyView() {
  return <main id="main-content" className="checkout-page"><PageContainer><div className="checkout-empty"><SectionLabel>CHECKOUT</SectionLabel><h1>Your bag is empty.</h1><p>Add something from the collection before you check out.</p><Link className="button button--dark" href="/shop">Browse the collection <span aria-hidden="true">↗</span></Link></div></PageContainer></main>;
}

function ContactFields() {
  return <fieldset className="checkout-section"><legend><span>01</span> Contact</legend><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label></fieldset>;
}

function DeliveryFields({ country, region, onCountryChange, onRegionChange }: Readonly<{ country: string; region: string; onCountryChange: (value: string) => void; onRegionChange: (value: string) => void }>) {
  return <fieldset className="checkout-section"><legend><span>02</span> Delivery</legend><div className="checkout-two-up"><label>First name<input name="firstName" autoComplete="given-name" required /></label><label>Last name<input name="lastName" autoComplete="family-name" required /></label></div><label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label><label>Address<input name="address" autoComplete="street-address" required /></label><div className="checkout-two-up"><label>City / town<input name="city" autoComplete="address-level2" required /></label><label>County / region<input name="region" autoComplete="address-level1" required value={region} onChange={(event) => onRegionChange(event.target.value)} /></label></div><label>Country<select name="country" value={country} onChange={(event) => onCountryChange(event.target.value)}><option>Kenya</option><option value="International">International</option></select></label></fieldset>;
}

function DeliveryMethod({ country, isNairobi, shipping }: Readonly<{ country: string; isNairobi: boolean; shipping: number }>) {
  const isKenya = country === "Kenya";
  const name = isKenya ? "Kenya delivery" : "International demo rate";
  const deliveryWindow = isNairobi ? "1–2" : "2–4";
  const shippingLabel = shipping === 0 ? "Free" : money(shipping);
  const details = isKenya ? `${deliveryWindow} business days · ${shippingLabel}` : "Calculated at checkout · KES 3,500";
  const finalName = isNairobi && isKenya ? "Nairobi delivery" : name;
  return <fieldset className="checkout-section"><legend><span>03</span> Delivery method</legend><div className="checkout-method"><strong>{finalName}</strong><span>{details}</span></div></fieldset>;
}

function PaymentMethod({ payment, onPaymentChange }: Readonly<{ payment: string; onPaymentChange: (value: string) => void }>) {
  return <fieldset className="checkout-section"><legend><span>04</span> Payment method</legend><div className="checkout-choice"><input id="payment-mpesa" aria-label="M-Pesa" type="radio" name="payment" value="mpesa" checked={payment === "mpesa"} onChange={() => onPaymentChange("mpesa")} /><label htmlFor="payment-mpesa"><strong>M-Pesa</strong><small>Demo confirmation only. No STK push is sent.</small></label></div><div className="checkout-choice"><input id="payment-card" aria-label="Card" type="radio" name="payment" value="card" checked={payment === "card"} onChange={() => onPaymentChange("card")} /><label htmlFor="payment-card"><strong>Card</strong><small>Demo card state. Do not enter a real card number.</small></label></div>{payment === "card" && <output className="checkout-card-demo" aria-live="polite">Card details are simulated for this portfolio checkout.</output>}</fieldset>;
}

function CheckoutSummary({ items, count, country, subtotal, shipping, hasPrices }: Readonly<{ items: BagItem[]; count: number; country: string; subtotal: number; shipping: number; hasPrices: boolean }>) {
  const total = subtotal + shipping;
  const isKenya = country === "Kenya";
  return <aside className="checkout-summary" aria-label="Order summary"><SectionLabel>REVIEW</SectionLabel><h2>{count} {count === 1 ? "item" : "items"}</h2><ul>{items.map((item) => <li key={getBagLineKey(item)}><span>{item.id}<small>{item.quantity} × {[item.format, item.grind].filter(Boolean).join(" · ") || item.region}</small></span><strong>{money(linePrice(item))}</strong></li>)}</ul><div className="checkout-total-row"><span>Subtotal</span><strong>{hasPrices ? money(subtotal) : "KES —"}</strong></div><div className="checkout-total-row"><span>Shipping</span><strong>{shipping === 0 ? "Free" : money(shipping)}</strong></div><div className="checkout-total-row checkout-total-row--grand"><span>Total</span><strong>{hasPrices ? money(total) : "KES —"}</strong></div>{isKenya && subtotal < FREE_DELIVERY_THRESHOLD && hasPrices && <p className="checkout-summary-note">{money(FREE_DELIVERY_THRESHOLD - subtotal)} away from free Kenya delivery.</p>}<Link className="editorial-link" href="/bag">Back to bag <span aria-hidden="true">↗</span></Link></aside>;
}

export function CheckoutPageView() {
  const router = useRouter();
  const { items, count } = useBag();
  const [country, setCountry] = useState("Kenya");
  const [region, setRegion] = useState("");
  const [payment, setPayment] = useState("mpesa");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + (linePrice(item) ?? 0), 0), [items]);
  const hasPrices = items.every((item) => linePrice(item) !== null);
  const isNairobi = region.trim().toLowerCase().includes("nairobi");
  const shipping = shippingFor(country, subtotal, isNairobi);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (items.length === 0 || isSubmitting) return;
    setIsSubmitting(true);
    setError("");
    const order = createDemoOrderId();
    router.push(`/checkout/complete?order=${encodeURIComponent(order)}`);
  }

  if (items.length === 0) {
    return <CheckoutEmptyView />;
  }

  return <main id="main-content" className="checkout-page">
    <PageContainer>
      <div className="checkout-heading"><SectionLabel>CHECKOUT</SectionLabel><h1>One considered step at a time.</h1><p className="checkout-disclosure"><strong>Portfolio demo checkout — no payment is collected and no order is fulfilled.</strong></p></div>
      <form className="checkout-layout" onSubmit={submit}>
        <div className="checkout-form">
          <ContactFields />
          <DeliveryFields country={country} region={region} onCountryChange={setCountry} onRegionChange={setRegion} />
          <DeliveryMethod country={country} isNairobi={isNairobi} shipping={shipping} />
          <PaymentMethod payment={payment} onPaymentChange={setPayment} />
          {error && <p className="checkout-error" role="alert">{error}</p>}
          <button className="button button--dark checkout-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "Placing demo order…" : "Place demo order"} <span aria-hidden="true">↗</span></button>
        </div>
        <CheckoutSummary items={items} count={count} country={country} subtotal={subtotal} shipping={shipping} hasPrices={hasPrices} />
      </form>
    </PageContainer>
  </main>;
}

export function CheckoutCompleteView({ order }: Readonly<{ order?: string }>) {
  return <main id="main-content" className="checkout-page"><PageContainer><div className="checkout-complete"><SectionLabel>DEMO ORDER</SectionLabel><h1>Thank you for making time for coffee.</h1><p>Your demo order <strong>{order || "RC-DEMO"}</strong> has not been charged or submitted for fulfilment.</p><p className="checkout-complete-note">This is a portfolio checkout. No payment details or personal delivery information were saved.</p><Link className="button button--dark" href="/shop">Continue browsing <span aria-hidden="true">↗</span></Link></div></PageContainer></main>;
}
