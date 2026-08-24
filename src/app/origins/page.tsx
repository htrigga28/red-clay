import Link from "next/link";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { ScaffoldPage } from "@/components/layout/ScaffoldPage";
import { PageContainer, SectionShell, SectionLabel } from "@/components/layout/PageContainer";
import { origins } from "@/content/origins";
import { redClayAssets } from "@/lib/assets/registry";

const originAssets = [redClayAssets.origins.kenyaLead, redClayAssets.origins.burundiLead, redClayAssets.origins.ethiopiaLead];

export default function OriginsPage() {
  return <ScaffoldPage eyebrow="ORIGINS / THE EARTHEN FOLIO" title="Three chapters in the material character of place." intro="The Earthen Folio is Red Clay’s signature origin experience. This foundation establishes the chapter order and no-JS route to each dossier; the full scroll choreography belongs to a later pass."><SectionShell className="folio-scaffold"><PageContainer><SectionLabel>THE EARTHEN FOLIO</SectionLabel><div className="folio-list">{origins.map((origin, index) => <article className="folio-chapter" key={origin.slug}><MediaFrame asset={originAssets[index]} /><div><span className="mono-label">0{index + 1} / 03</span><h2>{origin.name}</h2><p>{origin.summary}</p><Link className="editorial-link" href={`/origins/${origin.slug}`}>Open the dossier <span aria-hidden="true">↗</span></Link></div></article>)}</div></PageContainer></SectionShell></ScaffoldPage>;
}
