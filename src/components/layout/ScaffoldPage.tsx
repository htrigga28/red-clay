import Link from "next/link";
import { PageContainer, SectionLabel } from "./PageContainer";

export function ScaffoldPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: React.ReactNode }) {
  return <main id="main-content"><section className="scaffold-hero page-container"><SectionLabel>{eyebrow}</SectionLabel><h1>{title}</h1><p className="lead-copy">{intro}</p></section>{children}</main>;
}

export function RouteLinks({ links }: { links: { label: string; href: string }[] }) {
  return <div className="route-links">{links.map((link) => <Link className="editorial-link" key={link.href} href={link.href}>{link.label}<span aria-hidden="true">↗</span></Link>)}</div>;
}
