import type { Metadata } from "next";
import { CheckoutPageView } from "@/components/commerce/CheckoutPageView";

export const metadata: Metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return <CheckoutPageView />;
}
