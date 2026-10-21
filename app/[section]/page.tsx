import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AboutPage, ContactPage, ExperiencePage, ProjectsPage } from "@/components/portfolio-page";

const sections = ["about", "projects", "experience", "contact"] as const;

const metadataBySection: Record<(typeof sections)[number], Metadata> = {
  about: { title: "About | Pattaradanai Prommanee", description: "About Pattaradanai Prommanee, a practical early-career full-stack developer." },
  projects: { title: "Projects | Pattaradanai Prommanee", description: "Selected web, backend, mobile, and deployment projects by Pattaradanai Prommanee." },
  experience: { title: "Experience | Pattaradanai Prommanee", description: "Full-stack development experience across product workflows, APIs, data, mobile, and deployment." },
  contact: { title: "Contact | Pattaradanai Prommanee", description: "Contact Pattaradanai Prommanee about full-stack, backend, frontend, or mobile development roles." },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  return metadataBySection[section as (typeof sections)[number]] ?? {};
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;

  if (!sections.includes(section as (typeof sections)[number])) {
    notFound();
  }

  if (section === "about") return <AboutPage />;
  if (section === "projects") return <ProjectsPage />;
  if (section === "experience") return <ExperiencePage />;
  return <ContactPage />;
}
