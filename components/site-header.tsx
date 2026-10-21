"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/content";

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
      <div className="shell flex h-20 items-center justify-between">
        <Link className="brand-mark" href="/" onClick={() => setOpen(false)} aria-label="Pattaradanai Prommanee home">
          <span className="brand-mark__dot" />
          <span>PP / 26</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link className={`nav-link ${pathname === link.href ? "nav-link--active" : ""}`} href={link.href} key={link.href}>
              {link.label}
            </Link>
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
            <Link className={pathname === link.href ? "mobile-navigation__active" : ""} href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a className="button button--dark" href={profile.resumePath} download onClick={() => setOpen(false)}>
            Download resume
          </a>
        </nav>
      )}
    </header>
  );
}
