import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/content";
import { projects } from "@/data/content";
import { PortfolioShell } from "@/components/portfolio-page";
import { ProjectGallery } from "@/components/project-gallery";

type ProjectDetailPageProps = { project: Project };

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <PortfolioShell>
      <main className="project-detail shell">
        <Link className="back-link" href="/projects"><ArrowLeft size={16} aria-hidden="true" /> Back to projects</Link>

        <div className="project-detail__header">
          <div>
            <span className="eyebrow">{project.type}</span>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <div className="project-detail__facts">
            <span>{project.category}</span>
            {project.period ? <span>{project.period}</span> : null}
            <strong>{project.contribution}</strong>
            <div className="tag-list" aria-label={`${project.title} technology stack`}>
              {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
          </div>
        </div>

        {project.screenshots?.length ? <ProjectGallery title={project.title} screenshots={project.screenshots} /> : null}

        <div className="project-detail__grid">
          <section><span className="eyebrow">Context</span><h2>What needed to work</h2><p>{project.problem}</p></section>
          <section><span className="eyebrow">Role</span><h2>Where I contributed</h2><p>{project.role}</p></section>
          <section><span className="eyebrow">Features</span><h2>What the product supports</h2><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
          <section><span className="eyebrow">Architecture</span><h2>How the pieces connect</h2><p>{project.architecture}</p></section>
          <section><span className="eyebrow">Challenge</span><h2>Constraints and decisions</h2><p>{project.challenge}</p><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></section>
          <section><span className="eyebrow">Takeaway</span><h2>What I learned</h2><p>{project.learning}</p></section>
        </div>

        {project.liveUrl || project.repositoryUrl ? (
          <div className="project-detail__links" aria-label="Project links">
            {project.liveUrl ? <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Open live project <ArrowUpRight size={16} aria-hidden="true" /></a> : null}
            {project.repositoryUrl ? <a className="text-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} aria-hidden="true" /></a> : null}
          </div>
        ) : null}

        <section className="project-detail__related" aria-labelledby="related-projects-title">
          <div className="section-heading"><div><span className="eyebrow">More context</span><h2 id="related-projects-title">Other projects in the same orbit.</h2></div><p>Compare the product surface, role, and technical focus across the rest of the portfolio.</p></div>
          <div className="project-detail__related-grid">
            {relatedProjects.map((relatedProject) => <Link className="project-detail__related-card" href={`/project/${relatedProject.slug}`} key={relatedProject.slug}><span>{relatedProject.index}</span><strong>{relatedProject.title}</strong><small>{relatedProject.category}</small><ArrowUpRight size={18} aria-hidden="true" /></Link>)}
          </div>
        </section>

        <div className="project-detail__footer"><Link className="button button--accent" href="/contact">Talk about similar work <ArrowUpRight size={16} aria-hidden="true" /></Link><Link className="text-link" href="/experience">See professional experience <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      </main>
    </PortfolioShell>
  );
}
