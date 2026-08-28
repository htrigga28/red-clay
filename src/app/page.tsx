import Link from "next/link";
import { currentHarvest } from "@/content/coffees";
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
  const homeHarvest = currentHarvest.filter((coffee) => [
    "KIAMBU / WASHED 01",
    "KAYANZA / WASHED 01",
    "SIDAMA / WASHED 01",
    "GUJI / NATURAL 02",
  ].includes(coffee.id));

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
              <div className="continuum-state-copy"><span className="continuum-number">01 / 04</span><h3>Earth</h3><p>Where coffee begins.</p></div>
              <MediaFrame asset={redClayAssets.materials.clay} className="continuum-state-media continuum-state-media--earth" sizes="(max-width: 1023px) 100vw, 66vw" />
            </article>
            <article className="continuum-state" data-continuum-state="1">
              <div className="continuum-state-copy"><span className="continuum-number">02 / 04</span><h3>Coffee</h3><p>What each harvest becomes.</p></div>
              <MediaFrame asset={redClayAssets.origins.kenyaDetail} className="continuum-state-media continuum-state-media--coffee" sizes="(max-width: 1023px) 100vw, 66vw" />
            </article>
            <article className="continuum-state" data-continuum-state="2">
              <div className="continuum-state-copy"><span className="continuum-number">03 / 04</span><h3>Vessel</h3><p>A cup made for the brew.</p></div>
              <MediaFrame asset={redClayAssets.materials.stone} className="continuum-state-media continuum-state-media--vessel" sizes="(max-width: 1023px) 100vw, 66vw" />
            </article>
            <article className="continuum-state" data-continuum-state="3">
              <div className="continuum-state-copy"><span className="continuum-number">04 / 04</span><h3>Ritual</h3><p>Make, taste, adjust, return.</p></div>
              <MediaFrame asset={redClayAssets.ritual.pourOver} className="continuum-state-media continuum-state-media--ritual" sizes="(max-width: 1023px) 100vw, 66vw" />
            </article>
          </div>
          <div className="continuum-progress page-container" aria-hidden="true"><span /></div>
        </div>
      </section>

      <section className="home-harvest" aria-labelledby="harvest-title">
        <div className="page-container">
          <header className="harvest-intro">
            <SectionLabel>CURRENT HARVEST</SectionLabel>
            <h2 id="harvest-title">Four ways into the current harvest.</h2>
            <p>Vivid Kiambu, floral Kayanza, tea-like Sidama, and the deeper fruit of Guji.</p>
          </header>
          <div className="harvest-wall">
            {homeHarvest.map((coffee, index) => <ProductCard key={coffee.id} product={coffee} featured={index === 0} showQuickAction />)}
          </div>
          <Link className="editorial-link harvest-all-link" href="/shop#current-harvest">See all coffees <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="home-origins" aria-labelledby="origins-title">
        <header className="origins-intro page-container">
          <SectionLabel>ORIGINS // 03 REGIONS</SectionLabel>
          <h2 id="origins-title">Place changes the shape of every cup.</h2>
        </header>

        <article className="origin-beat origin-beat--kenya page-container" data-origin-beat>
          <MediaFrame asset={redClayAssets.origins.kenyaLead} className="origin-beat-primary" sizes="(max-width: 1023px) 100vw, 64vw" />
          <MediaFrame asset={redClayAssets.origins.kenyaDetail} className="origin-beat-secondary" sizes="(max-width: 1023px) 44vw, 16vw" />
          <div className="origin-beat-copy">
            <span className="mono-label">01 / KENYA</span>
            <h3>Central Kenya</h3>
            <p>Cultivated highlands, washed-coffee traditions, and two Kenyan profiles built around vivid fruit.</p>
            <Link className="editorial-link" href="/origins/central-kenya">Explore Central Kenya <span aria-hidden="true">↗</span></Link>
          </div>
        </article>

        <article className="origin-beat origin-beat--burundi page-container" data-origin-beat>
          <MediaFrame asset={redClayAssets.origins.burundiLead} className="origin-beat-primary" sizes="(max-width: 1023px) 100vw, 58vw" />
          <MediaFrame asset={redClayAssets.origins.burundiSupport} className="origin-beat-secondary" sizes="(max-width: 1023px) 44vw, 23vw" />
          <div className="origin-beat-copy">
            <span className="mono-label">02 / BURUNDI</span>
            <h3>Kayanza / Burundi</h3>
            <p>Steep coffee-growing hills, shared stations, careful drying, and two contrasting Kayanza profiles.</p>
            <Link className="editorial-link" href="/origins/kayanza-burundi">Explore Kayanza <span aria-hidden="true">↗</span></Link>
          </div>
        </article>

        <article className="origin-beat origin-beat--ethiopia page-container" data-origin-beat>
          <MediaFrame asset={redClayAssets.origins.ethiopiaLead} className="origin-beat-primary" sizes="(max-width: 1023px) 100vw, 56vw" />
          <MediaFrame asset={redClayAssets.origins.ethiopiaSupport} className="origin-beat-secondary" sizes="(max-width: 1023px) 44vw, 24vw" />
          <div className="origin-beat-copy">
            <span className="mono-label">03 / ETHIOPIA</span>
            <h3>Southern Ethiopia</h3>
            <p>Exceptional coffee diversity, represented here by a floral washed profile and a fruit-driven natural.</p>
            <Link className="editorial-link" href="/origins/southern-ethiopia">Explore Southern Ethiopia <span aria-hidden="true">↗</span></Link>
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
            <div className="edition-deck"><p>{featuredEdition.cardDeck}</p><Link className="editorial-link" href={`/journal/${featuredEdition.slug}`}>Read {featuredEdition.title} <span aria-hidden="true">↗</span></Link></div>
          </div>
        </div>
      </section>

      <section className="home-ritual" aria-labelledby="ritual-title" data-quiet-reveal>
        <div className="ritual-composition page-container">
          <MediaFrame asset={redClayAssets.ritual.hands} className="ritual-primary" sizes="(max-width: 1023px) 100vw, 50vw" />
          <div className="ritual-copy">
            <SectionLabel>THE COMPANION OBJECT</SectionLabel>
            <h2 id="ritual-title">A cup made for coffee.</h2>
            <p>High-fired stoneware with exposed red clay and a mineral-white glaze, shaped for an everyday cup.</p>
            <Link className="editorial-link" href="/shop/the-kiln-cup">View the Kiln Cup <span aria-hidden="true">↗</span></Link>
          </div>
          <MediaFrame asset={redClayAssets.materials.linen} className="ritual-material" sizes="(max-width: 1023px) 42vw, 18vw" />
          <div className="ritual-object">
            <ProductMediaPlaceholder assetId="SHOP-KILN-01" label="THE KILN CUP" kind="kiln-cup" />
            <span className="mono-label">THE KILN CUP</span>
          </div>
        </div>
      </section>

      <section className="home-dispatch" aria-labelledby="dispatch-title">
        <div className="dispatch-composition page-container">
          <SectionLabel>THE EDITIONS // VOLUME 01 — PLACE</SectionLabel>
          <div><h2 id="dispatch-title">Three questions worth following.</h2><p>Water and washing in Kenya, hillside work in Kayanza, and the limits of “heirloom” in Ethiopia.</p></div>
          <Link className="editorial-link" href="/journal">See all Editions <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  </>;
}
