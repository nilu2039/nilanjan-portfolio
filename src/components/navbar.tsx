"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#works", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Let’s talk" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("intro");
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    dialog.current?.close();
    setOpen(false);
    menuButton.current?.focus();
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    }, { rootMargin: "-15% 0px -55% 0px" });
    document.querySelectorAll("#intro, #projects, #works, #about, #contact").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 701px)");
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) {
        dialog.current?.close();
        setOpen(false);
      }
    }
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="nav-inner">
          <a href="#intro" className="wordmark" aria-label="Nilanjan Mandal, home" aria-current={active === "intro" ? "page" : undefined}>
            <span className="monogram heading-4">nm<span>.</span></span>
            <span className="wordmark-name title-4">Nilanjan Mandal</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => <a className="title-4" key={link.href} href={link.href} aria-current={active === link.href.slice(1) ? "location" : undefined}>{link.label}</a>)}
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <button ref={menuButton} type="button" className={`icon-button menu-toggle ${open ? "is-open" : ""}`} aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { dialog.current?.showModal(); setOpen(true); }}>
              <span className="menu-lines" aria-hidden="true"><span /><span /></span>
            </button>
          </div>
        </div>
      </header>
      <dialog ref={dialog} id="mobile-navigation" className="mobile-menu" aria-labelledby="mobile-menu-title" onCancel={() => setOpen(false)} onClose={() => setOpen(false)}>
        <div className="mobile-menu-top">
          <p id="mobile-menu-title" className="title-3">Nilanjan Mandal</p>
          <button type="button" className="icon-button is-open" aria-label="Close navigation" onClick={closeMenu}><span className="menu-lines" aria-hidden="true"><span /><span /></span></button>
        </div>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => <a className="heading-3" key={link.href} href={link.href} aria-current={active === link.href.slice(1) ? "location" : undefined} onClick={closeMenu}>{link.label}<ArrowUpRightIcon size={32} aria-hidden="true" /></a>)}
        </nav>
        <p className="mobile-menu-note body-3">Thoughtful code. Useful things.<br />Web, mobile, and the systems in between.</p>
      </dialog>
    </>
  );
}
