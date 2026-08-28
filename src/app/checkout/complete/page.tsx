import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutCompleteView } from "@/components/commerce/CheckoutCompleteView";

export const metadata: Metadata = { title: "Demo order complete" };

export default function CheckoutCompletePage() {
  return <Suspense><CheckoutCompleteView /></Suspense>;
}
