import Link from "next/link";
import { SectionLabel } from "./PageContainer";

export function Footer() {
  return <footer className="site-footer">
    <div className="page-container footer-grid">
      <div className="footer-brand"><p className="footer-wordmark">RED CLAY</p><p>Contemporary African Coffee House</p></div>
      <div><SectionLabel>EXPLORE</SectionLabel><ul className="footer-links"><li><Link href="/shop">Shop</Link></li><li><Link href="/origins">Origins</Link></li><li><Link href="/journal">The Editions</Link></li><li><Link href="/about">About</Link></li></ul></div>
      <div><SectionLabel>THE EDITIONS</SectionLabel><p className="footer-note">Volume 01 follows water and washing in Kenya, hillside work in Kayanza, and coffee diversity in Ethiopia.</p><Link className="editorial-link" href="/journal">Read Volume 01 <span aria-hidden="true">↗</span></Link></div>
    </div>
    <div className="page-container footer-disclosure"><p>Red Clay Coffee is an independently created fictional brand concept. Regional editorial content is informed by researched coffee context. People and locations shown in documentary imagery do not represent commercial Red Clay sourcing relationships.</p></div>
    <div className="page-container footer-bottom"><span>© {new Date().getFullYear()} Red Clay</span><span>East African highland coffees</span></div>
  </footer>;
}
