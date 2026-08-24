import { notFound } from "next/navigation";
import { origins } from "@/content/origins";
import { ScaffoldPage, RouteLinks } from "@/components/layout/ScaffoldPage";
import { PageContainer, SectionShell, SectionLabel } from "@/components/layout/PageContainer";
import { redClayAssets } from "@/lib/assets/registry";

export function generateStaticParams() { return origins.map((origin) => ({ "region-slug": origin.slug })); }

export default async function OriginPage({ params }: { params: Promise<{ "region-slug": string }> }) {
  const { "region-slug": slug } = await params;
  const origin = origins.find((item) => item.slug === slug);
  if (!origin) notFound();
  const asset = origin.leadAssetId === "KEN-LAND-001" ? redClayAssets.origins.kenyaLead : origin.leadAssetId === "BUR-LAND-001" ? redClayAssets.origins.burundiLead : redClayAssets.origins.ethiopiaLead;
  return <ScaffoldPage eyebrow={`ORIGIN DOSSIER / ${origin.region}`} title={origin.name} intro={origin.summary}><SectionShell className="scaffold-content"><PageContainer><div className="dossier-lead"><img src={asset.src} alt={asset.alt} /><div><SectionLabel>PLACE / PROCESS / CONTEXT</SectionLabel><p className="body-copy">This chapter gathers landscape, coffee context, processing traditions, and a factual reference block.</p><RouteLinks links={[{ label: "Back to Origins", href: "/origins" }, { label: "View the Shop", href: "/shop" }]} /></div></div></PageContainer></SectionShell></ScaffoldPage>;
}
