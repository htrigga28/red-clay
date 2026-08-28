import type { Metadata } from "next";
import { CheckoutCompleteView } from "@/components/commerce/CheckoutPageView";

export const metadata: Metadata = {
  title: "Demo order complete",
};

export default async function CheckoutCompletePage({ searchParams }: { searchParams: Promise<{ order?: string }> }) {
  const params = await searchParams;
  return <CheckoutCompleteView order={params.order} />;
}
