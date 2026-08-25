"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { homeHeroSlides, homeHeroToneEvent } from "@/content/homeHero";

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const activeSlide = homeHeroSlides[activeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % homeHeroSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, reducedMotion]);

  useEffect(() => {
    document.documentElement.dataset.homeHeroTone = activeSlide.headerTone;
    document.dispatchEvent(new CustomEvent(homeHeroToneEvent, { detail: activeSlide.headerTone }));

    return () => {
      delete document.documentElement.dataset.homeHeroTone;
    };
  }, [activeSlide.headerTone]);

  return (
    <section
      className={`home-hero-cover home-hero-cover--${activeSlide.headerTone}`}
      aria-labelledby="home-title"
      data-home-hero
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
      }}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setIsPaused(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setIsPaused(false);
      }}
    >
      <div className="home-hero-media" aria-live="polite">
        {homeHeroSlides.map((slide, index) => (
          <div
            className={`home-hero-slide ${index === activeIndex ? "is-active" : ""}`}
            key={slide.id}
            aria-hidden={index !== activeIndex}
          >
            <Image
              className="home-hero-image"
              src={slide.image}
              alt={index === activeIndex ? slide.alt : ""}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{ objectPosition: slide.objectPosition }}
            />
          </div>
        ))}
      </div>

      <div className="home-hero-copy">
        <h1 id="home-title">Coffee, held by place.</h1>
        <p>Four seasonal single-origin releases from Kenya, Burundi, and Ethiopia, presented through place, craft, and the ritual of brewing.</p>
        <div className="home-hero-actions">
          <Link href="/shop">Explore the harvest</Link>
          <Link href="/origins">Read the origins <span aria-hidden="true">↗</span></Link>
        </div>
      </div>

      <div className="home-hero-controls page-container" role="group" aria-label="Choose a hero story">
        {homeHeroSlides.map((slide, index) => (
          <button
            className="home-hero-selector"
            type="button"
            key={slide.id}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setActiveIndex(index);
            }}
          >
            <span className="home-hero-selector-number" aria-hidden="true">0{index + 1}</span>
            <span className="home-hero-selector-copy">
              <span>{slide.label}</span>
              {slide.secondaryLabel && <small>{slide.secondaryLabel}</small>}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
