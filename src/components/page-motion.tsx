"use client";

import { useEffect } from "react";

export default function PageMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;

    const sections = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("reveal-pending");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.05 });
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top >= window.innerHeight) {
        section.classList.add("reveal-pending");
        observer.observe(section);
      }
    });

    const tagline = document.querySelector<HTMLElement>(".tagline-text");
    const words = Array.from(document.querySelectorAll<HTMLElement>(".tagline-word"));
    words.forEach((word) => word.classList.add("word-pending"));
    let frame: number | null = null;
    function revealWords() {
      frame = null;
      if (!tagline) return;
      const progress = (window.innerHeight * 0.8 - tagline.getBoundingClientRect().top) / (window.innerHeight * 0.45);
      const visible = Math.floor(Math.max(0, Math.min(1, progress)) * words.length);
      words.slice(0, visible).forEach((word) => word.classList.remove("word-pending"));
    }
    function scheduleReveal() {
      if (frame === null) frame = window.requestAnimationFrame(revealWords);
    }
    function showWithoutMotion() {
      if (!preference.matches) return;
      sections.forEach((section) => section.classList.remove("reveal-pending"));
      words.forEach((word) => word.classList.remove("word-pending"));
    }
    revealWords();
    window.addEventListener("scroll", scheduleReveal, { passive: true });
    window.addEventListener("resize", scheduleReveal);
    preference.addEventListener("change", showWithoutMotion);
    return () => {
      observer.disconnect();
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleReveal);
      window.removeEventListener("resize", scheduleReveal);
      preference.removeEventListener("change", showWithoutMotion);
      sections.forEach((section) => section.classList.remove("reveal-pending"));
      words.forEach((word) => word.classList.remove("word-pending"));
    };
  }, []);

  return null;
}
