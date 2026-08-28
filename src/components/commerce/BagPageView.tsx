"use client";

import { BagContents } from "@/components/commerce/CartDrawer";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";

export function BagPageView() {
  return <main id="main-content" className="bag-page"><section className="bag-page-intro page-container"><SectionLabel>BAG</SectionLabel><h1>Review your bag.</h1><p>Adjust quantities or return to Shop to keep browsing.</p></section><section className="bag-page-body"><PageContainer><BagContents /></PageContainer></section></main>;
}
