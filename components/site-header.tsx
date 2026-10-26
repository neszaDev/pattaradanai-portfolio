"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Overview", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand-mark" href="/" onClick={() => setOpen(false)} aria-label="Pattaradanai Prommanee home">
          <span className="brand-mark__dot" aria-hidden="true">p</span>
          <span>Pattaradanai</span>
        </Link>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          {links.map((link) => (
            <Link className={`nav-link ${pathname === link.href ? "nav-link--active" : ""}`} href={link.href} key={link.href} aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="mobile-menu-button"
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
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link className={pathname === link.href ? "mobile-navigation__active" : ""} href={link.href} key={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
