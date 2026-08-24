"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealMode = "plate" | "copy" | "sequence";

/** A small, opt-in viewport reveal for editorial plates. */
export function RevealOnView({
  children,
  className = "",
  mode = "plate",
}: {
  children: ReactNode;
  className?: string;
  mode?: RevealMode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.setAttribute("data-reveal-state", "pending");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element?.setAttribute("data-revealed", "true");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.setAttribute("data-revealed", "true");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal-on-view reveal-on-view--${mode} ${className}`}>{children}</div>;
}
