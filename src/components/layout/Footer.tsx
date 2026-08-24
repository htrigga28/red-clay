import Link from "next/link";
import { SectionLabel } from "./PageContainer";

export function Footer() {
  return <footer className="site-footer">
    <div className="page-container footer-grid">
      <div className="footer-brand"><p className="footer-wordmark">RED CLAY</p><p>Contemporary African Coffee House</p><p className="footer-note">Coffee, place, vessel, and ritual.</p></div>
      <div><SectionLabel>EXPLORE</SectionLabel><ul className="footer-links"><li><Link href="/shop">Shop</Link></li><li><Link href="/origins">Origins</Link></li><li><Link href="/journal">The Editions</Link></li><li><Link href="/about">About</Link></li></ul></div>
      <div><SectionLabel>THE DISPATCH</SectionLabel><p className="footer-note">Notes on seasonal coffee and the material world around it.</p></div>
    </div>
    <div className="page-container footer-bottom"><span>© {new Date().getFullYear()} Red Clay</span><span>East African highland coffees</span></div>
  </footer>;
}
