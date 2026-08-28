import type { Metadata } from "next";
import { CheckoutPageView } from "@/components/commerce/CheckoutPageView";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete a Red Clay portfolio demo order.",
};

export default function CheckoutPage() {
  return <CheckoutPageView />;
}
