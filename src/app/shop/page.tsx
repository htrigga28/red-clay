import { ProductGrid } from "@/components/editorial/ProductCard";
import { ScaffoldPage } from "@/components/layout/ScaffoldPage";
import { PageContainer, SectionShell, SectionLabel } from "@/components/layout/PageContainer";

export default function ShopPage() {
  return <ScaffoldPage eyebrow="THE SHOP / VOL. 01" title="Four lots. One companion vessel." intro="A calm collection of fictional seasonal releases, presented through origin, process, and sensory character."><SectionShell className="scaffold-content"><PageContainer><SectionLabel>CURRENT HARVEST</SectionLabel><ProductGrid /><p className="dispatch-note">Dispatch details will be stated clearly when the fictional operating model is approved.</p></PageContainer></SectionShell></ScaffoldPage>;
}
