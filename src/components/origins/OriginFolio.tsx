"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MediaFrame } from "@/components/editorial/MediaFrame";
import { PageContainer, SectionLabel } from "@/components/layout/PageContainer";
import type { Origin } from "@/content/origins";

gsap.registerPlugin(ScrollTrigger);

const stateAtProgress = (progress: number) => {
  if (progress < 0.4) return 0;
  if (progress < 0.72) return 1;
  return 2;
};

export function OriginFolio({ chapters }: { chapters: Origin[] }) {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const [enhanced, setEnhanced] = useState(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 1024px) and (min-height: 620px) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      setEnhanced(true);
      const trigger = ScrollTrigger.create({
        trigger: track,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const nextChapter = stateAtProgress(self.progress);
          setActiveChapter((current) => current === nextChapter ? current : nextChapter);
          root.style.setProperty("--folio-progress", String(self.progress));
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => {
        trigger.kill();
        root.style.removeProperty("--folio-progress");
        setEnhanced(false);
        setActiveChapter(0);
      };
    });

    return () => media.revert();
  }, []);

  const goToChapter = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    if (!enhanced) return;
    const track = trackRef.current;
    if (!track) return;

    event.preventDefault();
    const trackStart = track.getBoundingClientRect().top + window.scrollY;
    const scrollDistance = Math.max(track.offsetHeight - window.innerHeight, 0);
    const progress = index === 0 ? 0.1 : index === 1 ? 0.44 : 0.76;
    window.scrollTo({ top: trackStart + scrollDistance * progress, behavior: "smooth" });
  };

  return (
    <section ref={rootRef} className="origins-folio" aria-labelledby="origins-folio-title" data-enhanced={enhanced ? "true" : undefined} data-active-chapter={activeChapter}>
      <PageContainer className="origins-folio-head">
        <SectionLabel>02 / THE EARTHEN FOLIO</SectionLabel>
        <div className="origins-folio-headline">
          <h2 id="origins-folio-title">A monograph of place, held in three chapters.</h2>
          <p>Move from the precise structure of Central Kenya through Burundi’s vertical rhythm and into the open process fields of Southern Ethiopia.</p>
        </div>
        <nav className="folio-index" aria-label="Origin chapters">
          <p className="section-label">CHAPTER INDEX</p>
          <ol>
            {chapters.map((chapter, index) => (
              <li key={chapter.slug}>
                <Link href={`/origins/${chapter.slug}`} onClick={(event) => goToChapter(event, index)} aria-current={enhanced && activeChapter === index ? "step" : undefined}>
                  <span>{chapter.number}</span>
                  <span>{chapter.name}</span>
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </PageContainer>

      <div className="folio-track" ref={trackRef}>
        <div className="folio-stage page-container">
          <div className="folio-stage-rule" aria-hidden="true" />
          <div className="folio-stage-readout" aria-hidden="true">
            <span>{chapters[activeChapter]?.number} / 03</span>
            <span>{chapters[activeChapter]?.name}</span>
          </div>
          <div className="folio-stage-plane" aria-hidden="true" />
          <div className="folio-chapters">
            {chapters.map((chapter, index) => (
              <article key={chapter.slug} className={`folio-chapter folio-chapter--${chapter.slug}`} data-chapter-index={index} data-active={activeChapter === index} aria-labelledby={`folio-${chapter.slug}-title`} aria-hidden={enhanced && activeChapter !== index}>
                <div className="folio-chapter-media">
                  <MediaFrame asset={chapter.assets.lead} priority={index === 0} sizes="(max-width: 1023px) 100vw, 64vw" />
                  <span className="folio-chapter-caption">{chapter.assets.lead.alt}</span>
                </div>
                <div className="folio-chapter-copy">
                  <span className="mono-label">{chapter.number} / 03 · {chapter.country}</span>
                  <h3 id={`folio-${chapter.slug}-title`}>{chapter.name}</h3>
                  <p className="folio-chapter-descriptor">{chapter.descriptor}</p>
                  <div className="folio-meta-grid">
                    <div><span className="section-label">PLACE</span><p>{chapter.place}</p></div>
                    <div><span className="section-label">PROCESS</span><p>{chapter.process}</p></div>
                    <div><span className="section-label">CUP</span><p>{chapter.cup}</p></div>
                  </div>
                  <Link className="editorial-link" href={`/origins/${chapter.slug}`}>Explore {chapter.name} <span aria-hidden="true">↗</span></Link>
                </div>
                <div className="folio-chapter-detail">
                  <MediaFrame asset={chapter.assets.detail} sizes="(max-width: 1023px) 45vw, 18vw" />
                  <span>{chapter.assets.detail.alt}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="folio-progress" aria-hidden="true"><span /></div>
        </div>
      </div>
    </section>
  );
}
