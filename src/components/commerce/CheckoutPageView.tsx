"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type ComponentProps } from "react";
import { useBag } from "@/components/commerce/BagProvider";
import {
  calculateDemoShipping,
  calculateSubtotal,
  formatKes,
  generateDemoOrderId,
  resolveCartLine,
  type ResolvedCartLine,
} from "@/lib/commerce";

type ContactField = "email" | "firstName" | "lastName" | "phone" | "address" | "city" | "county" | "country";
type ContactDetails = Record<ContactField, string>;
type PaymentMethod = "" | "mpesa" | "card";

const initialDetails: ContactDetails = {
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
  city: "",
  county: "",
  country: "Kenya",
};

const fieldLabels: Record<ContactField, string> = {
  email: "Email",
  firstName: "First name",
  lastName: "Last name",
  phone: "Phone",
  address: "Address",
  city: "City / town",
  county: "County / region",
  country: "Country",
};

export function CheckoutPageView() {
  const router = useRouter();
  const { items, hasInvalidItems, remove } = useBag();
  const [details, setDetails] = useState(initialDetails);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("");
  const [errors, setErrors] = useState<Partial<Record<ContactField | "payment", string>>>({});
  const resolvedLines = items.map(resolveCartLine).filter((line): line is ResolvedCartLine => Boolean(line));
  const subtotalKes = calculateSubtotal(resolvedLines);
  const hasLocation = Boolean(details.country.trim() && details.city.trim());
  const shipping = hasLocation ? calculateDemoShipping({ country: details.country, city: details.city, subtotalKes }) : null;

  if (items.length === 0) return <CheckoutUnavailable title="Your bag is empty." description="Add a coffee or The Kiln Cup before you begin this portfolio demo." action="Shop coffees" href="/shop" />;
  if (hasInvalidItems) return <CheckoutUnavailable title="Your bag needs attention." description="Remove unavailable selections before checkout. Totals cannot be submitted while a Bag line is invalid." action="Return to bag" href="/bag" />;

  const updateDetail = (field: ContactField) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetails((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (items.length === 0 || hasInvalidItems) return;

    const nextErrors = validateCheckout(details, paymentMethod);
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0] as ContactField | "payment" | undefined;
    if (firstError) {
      window.requestAnimationFrame(() => document.getElementById(firstError === "payment" ? "payment-mpesa" : firstError)?.focus());
      return;
    }

    const orderId = generateDemoOrderId(new Date(), Math.random);
    items.forEach((item) => remove(item.lineId));
    router.push(`/checkout/complete?order=${encodeURIComponent(orderId)}`);
  };

  return <main id="main-content" className="checkout-page">
    <section className="checkout-intro page-container">
      <p className="section-label">CHECKOUT</p>
      <h1>Complete your demo order.</h1>
      <p>Use this client-only portfolio flow to review a delivery estimate and demo payment choice.</p>
    </section>
    <form className="checkout-form page-container" noValidate onSubmit={onSubmit}>
      <div className="checkout-form-fields">
        <CheckoutSection eyebrow="CONTACT" title="Where we can reach you.">
          <div className="checkout-fields checkout-fields--contact">
            <CheckoutField id="email" label="Email" type="email" value={details.email} error={errors.email} onChange={updateDetail("email")} />
            <CheckoutField id="phone" label="Phone" type="tel" value={details.phone} error={errors.phone} onChange={updateDetail("phone")} />
          </div>
        </CheckoutSection>
        <CheckoutSection eyebrow="DELIVERY" title="Where the demo order would go.">
          <div className="checkout-fields">
            <CheckoutField id="firstName" label="First name" value={details.firstName} error={errors.firstName} onChange={updateDetail("firstName")} />
            <CheckoutField id="lastName" label="Last name" value={details.lastName} error={errors.lastName} onChange={updateDetail("lastName")} />
            <CheckoutField id="address" label="Address" value={details.address} error={errors.address} onChange={updateDetail("address")} />
            <CheckoutField id="city" label="City / town" value={details.city} error={errors.city} onChange={updateDetail("city")} />
            <CheckoutField id="county" label="County / region" value={details.county} error={errors.county} onChange={updateDetail("county")} />
            <CheckoutField id="country" label="Country" value={details.country} error={errors.country} onChange={updateDetail("country")} />
          </div>
        </CheckoutSection>
        <CheckoutSection eyebrow="DELIVERY METHOD" title="Calculated for your location.">
          <div className="checkout-delivery-method" aria-live="polite">
            {shipping ? <><strong>{shipping.label} — {formatKes(shipping.amountKes)}</strong><span>Estimated delivery: {shipping.estimate}.</span></> : <span>Enter your country and city to calculate a delivery method.</span>}
          </div>
          <p className="checkout-quiet">Roasted in Nairobi in small batches. Orders leave the roastery within 1–2 business days.</p>
        </CheckoutSection>
        <aside className="checkout-demo-notice" aria-label="Portfolio demo notice">
          Portfolio demo checkout - no payment is collected and no order is fulfilled.
        </aside>
        <CheckoutSection eyebrow="PAYMENT" title="Choose a demo method.">
          <fieldset className="checkout-payment-options" aria-describedby={errors.payment ? "payment-error" : undefined}>
            <legend className="sr-only">Demo payment method</legend>
            <label className="checkout-choice"><input id="payment-mpesa" type="radio" checked={paymentMethod === "mpesa"} onChange={() => { setPaymentMethod("mpesa"); setErrors((current) => ({ ...current, payment: undefined })); }} /><span><strong>M-Pesa demo</strong><small>Selection only. No STK push or request is sent.</small></span></label>
            <label className="checkout-choice"><input type="radio" checked={paymentMethod === "card"} onChange={() => { setPaymentMethod("card"); setErrors((current) => ({ ...current, payment: undefined })); }} /><span><strong>Card demo</strong><small>Selection only. No card details are collected.</small></span></label>
          </fieldset>
          {errors.payment && <p className="checkout-error" id="payment-error">{errors.payment}</p>}
        </CheckoutSection>
      </div>
      <aside className="checkout-review" aria-labelledby="checkout-review-title">
        <p className="section-label">REVIEW</p>
        <h2 id="checkout-review-title">Your selections.</h2>
        <ul className="checkout-review-lines">
          {resolvedLines.map(({ line, product, format, grindId, unitPriceKes }) => <li key={line.lineId}><span><strong>{product.id}</strong><small>{format.label}{grindId ? ` / ${grindLabel(grindId)}` : ""} · Qty {line.quantity}</small></span><b>{formatKes(line.quantity * unitPriceKes)}</b></li>)}
        </ul>
        <dl className="checkout-totals">
          <div><dt>Subtotal</dt><dd>{formatKes(subtotalKes)}</dd></div>
          <div><dt>Delivery</dt><dd>{shipping ? formatKes(shipping.amountKes) : "Calculated at delivery"}</dd></div>
          <div className="checkout-total"><dt>Total</dt><dd>{formatKes(subtotalKes + (shipping?.amountKes ?? 0))}</dd></div>
        </dl>
        <button className="button button--dark checkout-submit" type="submit">Place demo order</button>
      </aside>
      <section className="checkout-policy" aria-labelledby="checkout-policy-title">
        <p className="section-label">DELIVERY AND RETURNS</p>
        <h2 id="checkout-policy-title">A short note for the demo.</h2>
        <p>Coffee is final sale because it is consumable. Report damaged, incorrect, or materially compromised coffee within 7 days of delivery for a replacement or refund.</p>
        <p>Unused Kiln Cups may be returned within 14 days of delivery. Report transit damage within 7 days with photographs.</p>
      </section>
    </form>
  </main>;
}

function CheckoutUnavailable({ title, description, action, href }: { title: string; description: string; action: string; href: string }) {
  return <main id="main-content" className="checkout-page"><section className="checkout-unavailable page-container"><p className="section-label">CHECKOUT</p><h1>{title}</h1><p>{description}</p><Link className="button button--dark" href={href}>{action}</Link></section></main>;
}

function CheckoutSection({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="checkout-section"><p className="section-label">{eyebrow}</p><h2>{title}</h2>{children}</section>;
}

function CheckoutField({ id, label, type = "text", value, error, onChange }: { id: ContactField; label: string; type?: ComponentProps<"input">["type"]; value: string; error?: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
  return <label className="checkout-field" htmlFor={id}><span>{label}</span><input id={id} type={type} value={value} onChange={onChange} aria-invalid={Boolean(error) || undefined} aria-describedby={error ? `${id}-error` : undefined} />{error && <small className="checkout-error" id={`${id}-error`}>{error}</small>}</label>;
}

function validateCheckout(details: ContactDetails, paymentMethod: PaymentMethod) {
  const errors: Partial<Record<ContactField | "payment", string>> = {};
  (Object.keys(details) as ContactField[]).forEach((field) => {
    if (!details[field].trim()) errors[field] = `Enter your ${fieldLabels[field].toLowerCase()}.`;
  });
  if (details.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) errors.email = "Enter a valid email address.";
  if (!paymentMethod) errors.payment = "Choose a demo payment method.";
  return errors;
}

function grindLabel(grindId: "whole-bean" | "filter" | "espresso") {
  return grindId === "whole-bean" ? "Whole Bean" : grindId === "filter" ? "Filter Grind" : "Espresso Grind";
}
