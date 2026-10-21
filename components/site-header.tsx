"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell flex h-20 items-center justify-between">
        <a className="brand-mark" href="#home" onClick={() => setOpen(false)} aria-label="Pattaradanai Prommanee home">
          <span className="brand-mark__dot" />
          <span>PP / 26</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <a className="button button--small button--dark" href={profile.resumePath} download>
            Download resume
          </a>
        </nav>

        <button
          className="mobile-menu-button md:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-navigation md:hidden" aria-label="Mobile navigation">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="button button--dark" href={profile.resumePath} download onClick={() => setOpen(false)}>
            Download resume
          </a>
        </nav>
      )}
    </header>
  );
}
