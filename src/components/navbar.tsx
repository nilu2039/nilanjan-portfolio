"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#works", label: "Experience" },
  { href: "#about", label: "About" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <div className="shell nav-inner">
        <a href="#" className="wordmark" aria-label="Nilanjan Mandal, home" onClick={() => setOpen(false)}>
          <span className="monogram">nm<span>.</span></span>
          <span className="wordmark-name">Nilanjan Mandal</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button ref={menuButton} className="icon-button menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav shell" aria-label="Mobile navigation">
          {[...links, { href: "#contact", label: "Let’s talk" }].map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} aria-hidden="true" /></a>
          ))}
        </nav>
      )}
    </header>
  );
}
