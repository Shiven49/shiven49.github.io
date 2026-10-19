"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    const visuals = document.querySelectorAll<HTMLElement>("[data-scroll-depth]");
    const chapters = document.querySelectorAll<HTMLElement>(".project-panel[id]");
    const chapterLinks = document.querySelectorAll<HTMLAnchorElement>(".chapter-nav a");

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((target) => observer.observe(target));

    const chapterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          chapterLinks.forEach((link) => {
            if (link.hash === `#${entry.target.id}`) {
              link.setAttribute("aria-current", "step");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-38% 0px -48% 0px", threshold: 0 },
    );

    chapters.forEach((chapter) => chapterObserver.observe(chapter));

    let animationFrame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const scrollableHeight = root.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? Math.min(1, window.scrollY / scrollableHeight) : 0;
        root.style.setProperty("--scroll-progress", String(progress));

        visuals.forEach((visual) => {
          const depth = Number(visual.dataset.scrollDepth) || 0;
          const visualCenter = visual.getBoundingClientRect().top + visual.offsetHeight / 2;
          const offset = Math.max(-22, Math.min(22, (window.innerHeight / 2 - visualCenter) * depth));
          visual.style.setProperty("--parallax-offset", `${offset}px`);
        });
      });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      observer.disconnect();
      chapterObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      cancelAnimationFrame(animationFrame);
      root.classList.remove("motion-ready");
      root.style.removeProperty("--scroll-progress");
      visuals.forEach((visual) => visual.style.removeProperty("--parallax-offset"));
    };
  }, []);

  return null;
}