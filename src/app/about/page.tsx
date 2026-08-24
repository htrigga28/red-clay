import { ScaffoldPage, RouteLinks } from "@/components/layout/ScaffoldPage";
import { PageContainer, SectionShell, SectionLabel } from "@/components/layout/PageContainer";

export default function AboutPage() {
  return <ScaffoldPage eyebrow="ABOUT RED CLAY" title="A contemporary African coffee house built around the material character of place." intro="Red Clay follows the continuum from earth to coffee, vessel, and ritual. It is a fictional portfolio project with its factual and commercial decisions clearly marked for later review."><SectionShell className="scaffold-content"><PageContainer><SectionLabel>THESIS / CONTEXT / DISCLOSURE</SectionLabel><p className="article-copy">The full About composition will develop Red Clay’s creative thesis, representation guardrails, and material philosophy without inventing sourcing relationships or unsupported claims.</p><RouteLinks links={[{ label: "Explore Origins", href: "/origins" }, { label: "View the Shop", href: "/shop" }]} /></PageContainer></SectionShell></ScaffoldPage>;
}
