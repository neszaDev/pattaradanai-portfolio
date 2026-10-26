import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PortfolioShell } from "@/components/portfolio-page";
import { skillGroups } from "@/data/content";

export const metadata: Metadata = { title: "Skills | Pattaradanai Prommanee", description: "Technical skills across frontend, backend, data, cloud, and mobile development." };

export default function SkillsPage() {
  return <PortfolioShell><main className="detail-page shell"><Link className="back-link" href="/about"><ArrowLeft size={16} aria-hidden="true" /> Back to about</Link><span className="eyebrow">Technical skills</span><h1>A practical toolkit across the stack.</h1><div className="skills-detail-grid">{skillGroups.map((group) => <section key={group.label}><h2>{group.label}</h2><div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></section>)}</div></main></PortfolioShell>;
}
