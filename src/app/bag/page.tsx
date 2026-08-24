import type { Metadata } from "next";
import { BagPageView } from "@/components/commerce/BagPageView";

export const metadata: Metadata = { title: "Bag" };

export default function BagPage() {
  return <BagPageView />;
}
