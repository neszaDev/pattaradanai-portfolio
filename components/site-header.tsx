"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/content";

const links = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "experience", href: "/experience" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link className="brand" href="/">
          <span className="dot dot--ring dot--pulse" aria-hidden="true" />
          <span aria-hidden="true">&gt;_</span>
          <span>pattaradanai</span>
          <span className="brand__role">{"//"} full-stack developer</span>
        </Link>
        <nav className="nav" aria-label="Main">
          {links.map((link) => {
            const current = link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return <Link key={link.href} href={link.href} aria-current={current ? "page" : undefined}>{link.label}</Link>;
          })}
        </nav>
        <a className="cv" href={profile.resumePath} download>
          <span className="dot dot--sm" aria-hidden="true" />Resume<ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
