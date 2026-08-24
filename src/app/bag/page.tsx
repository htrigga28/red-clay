import { ScaffoldPage } from "@/components/layout/ScaffoldPage";
import { PageContainer, SectionShell, SectionLabel } from "@/components/layout/PageContainer";

export default function BagPage() {
  return <ScaffoldPage eyebrow="BAG / 00 ITEMS" title="Your bag is quiet for now." intro="The cart drawer and purchase states will be connected during the Commerce pass."><SectionShell className="scaffold-content"><PageContainer><SectionLabel>EMPTY STATE</SectionLabel><p className="body-copy">Add a coffee or the Kiln Cup from a product page to begin.</p></PageContainer></SectionShell></ScaffoldPage>;
}
