"use client";

import { useEffect } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function HomeMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1024px)");
    const hero = document.querySelector<HTMLElement>("[data-home-hero]");
    const continuum = document.querySelector<HTMLElement>("[data-continuum]");
    const edition = document.querySelector<HTMLElement>("[data-edition]");
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-origin-beat], [data-quiet-reveal]"));
    let frame = 0;

    const revealOrigins = () => {
      if (reduceMotion.matches) {
        revealTargets.forEach((target) => target.setAttribute("data-visible", "true"));
        return () => undefined;
      }

      const observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        }),
        { rootMargin: "0px 0px -12%", threshold: 0.16 },
      );
      revealTargets.forEach((target) => observer.observe(target));
      return () => observer.disconnect();
    };

    const update = () => {
      frame = 0;
      if (reduceMotion.matches) return;

      if (hero) {
        const rect = hero.getBoundingClientRect();
        const progress = clamp(-rect.top / Math.max(rect.height * 0.72, 1));
        hero.style.setProperty("--hero-scroll-scale", (1 + progress * 0.025).toFixed(4));
        hero.style.setProperty("--hero-scroll-shift", `${(progress * 8).toFixed(2)}px`);
      }

      if (continuum && desktop.matches) {
        const rect = continuum.getBoundingClientRect();
        const range = Math.max(rect.height - window.innerHeight, 1);
        const progress = clamp(-rect.top / range);
        continuum.dataset.active = String(Math.min(3, Math.floor(progress * 4)));
        continuum.style.setProperty("--continuum-progress", progress.toFixed(4));
      }

      if (edition && desktop.matches) {
        const rect = edition.getBoundingClientRect();
        const range = Math.max(rect.height - window.innerHeight, 1);
        const progress = clamp(-rect.top / range);
        edition.style.setProperty("--edition-clip", `${(22 - progress * 22).toFixed(2)}vw`);
        edition.style.setProperty("--edition-copy-shift", `${((1 - progress) * 26).toFixed(2)}px`);
        edition.style.setProperty("--edition-copy-opacity", String(clamp((progress - 0.28) / 0.4)));
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    root.dataset.homeMotion = "ready";
    const stopRevealObserver = revealOrigins();
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reduceMotion.addEventListener("change", requestUpdate);
    desktop.addEventListener("change", requestUpdate);

    return () => {
      delete root.dataset.homeMotion;
      stopRevealObserver();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduceMotion.removeEventListener("change", requestUpdate);
      desktop.removeEventListener("change", requestUpdate);
    };
  }, []);

  return null;
}
