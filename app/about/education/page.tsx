import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PortfolioShell } from "@/components/portfolio-page";

export const metadata: Metadata = { title: "Education | Pattaradanai Prommanee", description: "Education and academic background of Pattaradanai Prommanee." };

export default function EducationPage() {
  return <PortfolioShell><main className="detail-page shell"><Link className="back-link" href="/about"><ArrowLeft size={16} aria-hidden="true" /> Back to about</Link><span className="eyebrow">Education</span><h1>Computer Engineering, grounded in practice.</h1><div className="detail-page__block"><h2>Mae Fah Luang University</h2><p>School of Applied Digital Technology · Computer Engineering</p><strong>GPA 3.69 · First-Class Honors</strong></div></main></PortfolioShell>;
}
