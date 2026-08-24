import { notFound } from "next/navigation";
import { coffees, kilnCup } from "@/content/coffees";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { ScaffoldPage, RouteLinks } from "@/components/layout/ScaffoldPage";
import { PageContainer, SectionShell, SectionLabel } from "@/components/layout/PageContainer";

export function generateStaticParams() { return [...coffees.map((coffee) => ({ "coffee-slug": coffee.slug })), { "coffee-slug": kilnCup.slug }]; }

export default async function ProductPage({ params }: { params: Promise<{ "coffee-slug": string }> }) {
  const { "coffee-slug": slug } = await params;
  const product = [...coffees, kilnCup].find((item) => item.slug === slug);
  if (!product) notFound();
  return <ScaffoldPage eyebrow={product.id} title={product.id === kilnCup.id ? "The Kiln Cup" : product.id} intro={product.id === kilnCup.id ? "A fictional companion object designed around Red Clay’s earth-to-vessel idea." : `${product.region}. ${product.notes}. Product specifications remain intentionally open in this foundation pass.`}><SectionShell className="pdp-scaffold"><PageContainer><div className="pdp-grid"><ProductMediaPlaceholder assetId={product.assetId} label={product.id} kind={product.id === kilnCup.id ? "kiln-cup" : "coffee"} /><div className="pdp-copy"><SectionLabel>PRODUCT CHARACTER</SectionLabel><p className="body-copy">The full purchase module, gallery, and origin story are reserved for the next commerce and editorial passes.</p><RouteLinks links={[{ label: "Return to the Shop", href: "/shop" }, { label: "Explore Origins", href: "/origins" }]} /></div></div></PageContainer></SectionShell></ScaffoldPage>;
}
