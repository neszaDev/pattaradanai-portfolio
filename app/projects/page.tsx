import type { Metadata } from "next";
import { FeaturedProject, ProjectCards } from "@/components/ui";
import { groups, projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Product builds, starter repositories, and university work by Pattaradanai Prommanee, with stack, status, and the part he built.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const [featured, ...rest] = projects;

  return (
    <>
      <section className="intro intro--ruled rise">
        <div className="intro__row">
          <div className="intro" style={{ maxWidth: 720 }}>
            <div className="cluster">
              <span className="badge badge--dark">{"//"} 02</span>
              <span className="eyebrow">Project index</span>
              <span className="badge"><span className="dot dot--sm" aria-hidden="true" />{projects.length} case studies</span>
            </div>
            <h1 className="h-xl">Projects</h1>
            <p className="lede">What each project is built with, which part I built, and its current state. None of them is deployed to real users.</p>
          </div>
          <nav className="nav" aria-label="Project groups">
            {groups.map((group) => (
              <a key={group.id} href={`#group-${group.id}`}>{group.name} <span className="muted">{projects.filter((project) => project.group === group.name).length}</span></a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section" aria-label="Featured project">
        <div className="section__head">
          <span className="cluster eyebrow"><span className="dot" aria-hidden="true" />Flagship build</span>
          <span className="eyebrow">Featured // 01</span>
        </div>
        <FeaturedProject project={featured} />
      </section>

      {groups.map((group) => {
        const items = rest.filter((project) => project.group === group.name);
        if (!items.length) return null;
        return (
          <section className="section" key={group.id} id={`group-${group.id}`} aria-labelledby={`group-${group.id}-title`}>
            <div className="section__head" style={{ paddingBottom: 8, borderBottom: "1px solid var(--line)" }}>
              <div className="cluster">
                <span className="dot" style={{ borderRadius: 2, background: "var(--ink)" }} aria-hidden="true" />
                <h2 id={`group-${group.id}-title`} className="h-sm">{group.name}</h2>
                <span className="badge">{items.length} {items.length === 1 ? "project" : "projects"}</span>
              </div>
              <p className="body-sm mono" style={{ fontSize: 12 }}>{group.note}</p>
            </div>
            <ProjectCards items={items} />
          </section>
        );
      })}
    </>
  );
}
