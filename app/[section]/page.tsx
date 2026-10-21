import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/portfolio-page";
import { RouteScroll } from "@/components/route-scroll";

const sections = ["about", "projects", "experience", "contact"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;

  if (!sections.includes(section as (typeof sections)[number])) {
    notFound();
  }

  return (
    <>
      <RouteScroll section={section} />
      <PortfolioPage />
    </>
  );
}
