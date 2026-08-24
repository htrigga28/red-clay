import Link from "next/link";
import { coffees } from "@/content/coffees";
import { editions } from "@/content/editions";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { ProductCard } from "@/components/editorial/ProductCard";
import { ProductMediaPlaceholder } from "@/components/media/ProductMediaPlaceholder";
import { HomeMotion } from "@/components/home/HomeMotion";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { SectionLabel } from "@/components/layout/PageContainer";
import { redClayAssets } from "@/lib/assets/registry";

export default function HomePage() {
  const featuredEdition = editions[0];

  return <>
    <HomeMotion />
    <main id="main-content">
      <HeroCarousel />

      <section className="home-continuum" aria-labelledby="continuum-title" data-continuum data-active="0">
        <h2 className="sr-only" id="continuum-title">Earth, coffee, vessel, ritual.</h2>
        <div className="continuum-sticky">
          <div className="continuum-kicker page-container"><SectionLabel>THE CONTINUUM</SectionLabel></div>
          <div className="continuum-states page-container">
            <article className="continuum-state" data-continuum-state="0">
              <div className="continuum-state-copy"><span className="continuum-number">01 / 04</span><h3>Earth</h3><p>Laterite, stone, and linen set the quiet material register for the work.</p></div>
              <MediaFrame asset={redClayAssets.materials.clay} className="continuum-state-media continuum-state-media--earth" sizes="(max-width: 1023px) 100vw, 66vw" />
            </article>
            <article className="continuum-state" data-continuum-state="1">
              <div className="continuum-state-copy"><span className="continuum-number">02 / 04</span><h3>Coffee</h3><p>Fruit, water, and patient process gather into four seasonal lots.</p></div>
              <MediaFrame asset={redClayAssets.origins.kenyaDetail} className="continuum-state-media continuum-state-media--coffee" sizes="(max-width: 1023px) 100vw, 66vw" />
            </article>
            <article className="continuum-state" data-continuum-state="2">
              <div className="continuum-state-copy"><span className="continuum-number">03 / 04</span><h3>Vessel</h3><p>Earth becomes a companion object for the everyday ceremony of coffee.</p></div>
              <MediaFrame asset={redClayAssets.materials.stone} className="continuum-state-media continuum-state-media--vessel" sizes="(max-width: 1023px) 100vw, 66vw" />
            </article>
            <article className="continuum-state" data-continuum-state="3">
              <div className="continuum-state-copy"><span className="continuum-number">04 / 04</span><h3>Ritual</h3><p>The final measure is time: a slower morning, held in the hand.</p></div>
              <MediaFrame asset={redClayAssets.ritual.pourOver} className="continuum-state-media continuum-state-media--ritual" sizes="(max-width: 1023px) 100vw, 66vw" />
            </article>
          </div>
          <div className="continuum-progress page-container" aria-hidden="true"><span /></div>
        </div>
      </section>

      <section className="home-harvest" aria-labelledby="harvest-title">
        <div className="page-container">
          <header className="harvest-intro">
            <SectionLabel>CURRENT HARVEST // VOL. 01</SectionLabel>
            <h2 id="harvest-title">Four coffees, held in season.</h2>
            <p>A quiet collection from Central Kenya, Kayanza in Burundi, and the southern Ethiopian highlands.</p>
          </header>
          <div className="harvest-wall">
            {coffees.map((coffee, index) => <ProductCard key={coffee.id} product={coffee} featured={index === 0} showQuickAction />)}
          </div>
        </div>
      </section>

      <section className="home-origins" aria-labelledby="origins-title">
        <header className="origins-intro page-container">
          <SectionLabel>ORIGIN INDEX // 03 CHAPTERS</SectionLabel>
          <h2 id="origins-title">Place changes the shape of every cup.</h2>
        </header>

        <article className="origin-beat origin-beat--kenya page-container" data-origin-beat>
          <MediaFrame asset={redClayAssets.origins.kenyaLead} className="origin-beat-primary" sizes="(max-width: 1023px) 100vw, 64vw" />
          <MediaFrame asset={redClayAssets.origins.kenyaDetail} className="origin-beat-secondary" sizes="(max-width: 1023px) 44vw, 16vw" />
          <div className="origin-beat-copy">
            <span className="mono-label">01 / KENYA</span>
            <h3>Central Kenya</h3>
            <p>Coffee plants, red soil, and process hold the opening chapter.</p>
            <Link className="editorial-link" href="/origins/central-kenya">Read the chapter <span aria-hidden="true">↗</span></Link>
          </div>
        </article>

        <article className="origin-beat origin-beat--burundi page-container" data-origin-beat>
          <MediaFrame asset={redClayAssets.origins.burundiLead} className="origin-beat-primary" sizes="(max-width: 1023px) 100vw, 58vw" />
          <MediaFrame asset={redClayAssets.origins.burundiSupport} className="origin-beat-secondary" sizes="(max-width: 1023px) 44vw, 23vw" />
          <div className="origin-beat-copy">
            <span className="mono-label">02 / BURUNDI</span>
            <h3>Kayanza / Burundi</h3>
            <p>Drying-bed geometry gives the Kayanza chapter its broad, graphic rhythm.</p>
            <Link className="editorial-link" href="/origins/kayanza-burundi">Read the chapter <span aria-hidden="true">↗</span></Link>
          </div>
        </article>

        <article className="origin-beat origin-beat--ethiopia page-container" data-origin-beat>
          <MediaFrame asset={redClayAssets.origins.ethiopiaLead} className="origin-beat-primary" sizes="(max-width: 1023px) 100vw, 56vw" />
          <MediaFrame asset={redClayAssets.origins.ethiopiaSupport} className="origin-beat-secondary" sizes="(max-width: 1023px) 44vw, 24vw" />
          <div className="origin-beat-copy">
            <span className="mono-label">03 / ETHIOPIA</span>
            <h3>Southern Ethiopia</h3>
            <p>A closer process view near Hawassa shifts the chapter from landscape to hand and attention.</p>
            <Link className="editorial-link" href="/origins/southern-ethiopia">Read the chapter <span aria-hidden="true">↗</span></Link>
          </div>
        </article>
      </section>

      <section className="home-edition" aria-labelledby="edition-title" data-edition>
        <div className="edition-sticky">
          <div className="edition-image-stage">
            <MediaFrame asset={redClayAssets.origins.kenyaProcess} className="edition-image" sizes="100vw" />
          </div>
          <div className="edition-publication page-container">
            <div className="edition-metadata"><SectionLabel>THE EDITIONS</SectionLabel><span className="mono-label">VOL. 01</span></div>
            <div className="edition-title-block"><span className="mono-label">{featuredEdition.eyebrow}</span><h2 id="edition-title">{featuredEdition.title}</h2></div>
            <div className="edition-deck"><p>{featuredEdition.summary}</p><Link className="editorial-link" href={`/journal/${featuredEdition.slug}`}>Read the Edition <span aria-hidden="true">↗</span></Link></div>
          </div>
        </div>
      </section>

      <section className="home-ritual" aria-labelledby="ritual-title" data-quiet-reveal>
        <div className="ritual-composition page-container">
          <MediaFrame asset={redClayAssets.ritual.hands} className="ritual-primary" sizes="(max-width: 1023px) 100vw, 50vw" />
          <div className="ritual-copy">
            <SectionLabel>THE COMPANION OBJECT</SectionLabel>
            <h2 id="ritual-title">A cup belongs to the ritual.</h2>
            <p>The Kiln Cup brings raw terracotta and mineral-white glaze into the everyday ceremony of making coffee.</p>
            <Link className="editorial-link" href="/shop/the-kiln-cup">Meet the Kiln Cup <span aria-hidden="true">↗</span></Link>
          </div>
          <MediaFrame asset={redClayAssets.materials.linen} className="ritual-material" sizes="(max-width: 1023px) 42vw, 18vw" />
          <div className="ritual-object">
            <ProductMediaPlaceholder assetId="SHOP-KILN-01" label="THE KILN CUP" kind="kiln-cup" />
            <span className="mono-label">OBJECT STUDY / 01</span>
          </div>
        </div>
      </section>

      <section className="home-dispatch" aria-labelledby="dispatch-title">
        <div className="dispatch-composition page-container">
          <SectionLabel>THE DISPATCH</SectionLabel>
          <div><h2 id="dispatch-title">Notes from the coffee world.</h2><p>Seasonal coffee, place, and the material life around a cup.</p></div>
          <Link className="editorial-link" href="/journal">Read the Editions <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  </>;
}
