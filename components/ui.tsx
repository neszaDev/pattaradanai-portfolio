import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { profile, type Project } from "@/data/content";

export function ProjectMedia({ project, className = "pcard__media", sizes }: { project: Project; className?: string; sizes: string }) {
  const hero = project.hero;
  if (!hero) {
    return (
      <div className={`${className} pcard__media--flow`}>
        <ol className="flow" aria-hidden="true">{project.flow?.filter((step) => !step.base).map((step) => <li key={step.name}>{step.name}</li>)}</ol>
      </div>
    );
  }
  const phone = hero.height > hero.width;
  return (
    <div className={phone ? `${className} pcard__media--phone` : className}>
      <Image src={hero.src} alt="" width={hero.width} height={hero.height} sizes={sizes} quality={90} />
    </div>
  );
}

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="feature">
      <div style={{ position: "relative" }}>
        <ProjectMedia project={project} className="feature__media" sizes="(max-width: 1023px) 100vw, 1200px" />
        <span className="overlay"><span className="dot dot--sm" aria-hidden="true" />{project.group}</span>
      </div>
      <div className="feature__body">
        <div className="card__top">
          <span className="eyebrow">{project.year ?? "During university"}</span>
          <span className="badge">{project.links.length ? "Source public" : "Source private"}</span>
        </div>
        <h2 className="h-md">{project.title}</h2>
        <p className="muted"><strong>What it does:</strong> {project.summary}</p>
        <p className="muted"><strong>My part:</strong> {project.role}</p>
        <ul className="checks">
          {project.built.slice(0, 2).map((item) => <li key={item}><CheckCircle2 size={16} aria-hidden="true" />{item}</li>)}
        </ul>
        <ul className="chips" aria-label="Stack">{project.stack.slice(0, 4).map((item) => <li className="chip" key={item}>{item}</li>)}</ul>
        <div className="card__foot">
          <span>{project.condition}</span>
          <Link className="btn btn--primary" href={`/projects/${project.slug}`}>Read case study<ArrowRight size={14} className="nudge" aria-hidden="true" /></Link>
        </div>
      </div>
    </article>
  );
}

export function ProjectCards({ items }: { items: Project[] }) {
  return (
    <ul className="grid grid--2">
      {items.map((project) => (
        <li className="pcard" key={project.slug}>
          <div style={{ position: "relative" }}>
            <ProjectMedia project={project} sizes="(max-width: 767px) 100vw, 600px" />
            <span className="pcard__year">{project.year ?? "During university"}</span>
          </div>
          <div className="pcard__body">
            <span className="eyebrow">{project.group}</span>
            <h3 className="h-sm pcard__title"><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
            <p className="body-sm">{project.summary}</p>
            <ul className="chips" aria-label="Stack">{project.stack.slice(0, 4).map((item) => <li className="chip" key={item}>{item}</li>)}</ul>
            <div className="card__foot">
              <span>{project.condition}</span>
              <span className="pcard__more" aria-hidden="true">Case study <ArrowRight size={14} /></span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <span className="status"><span className="dot dot--sm dot--pulse" aria-hidden="true" />Open to developer roles</span>
        <nav className="footer__links" aria-label="Elsewhere">
          <a href={profile.github}>github.com/neszaDev<ArrowUpRight size={12} aria-hidden="true" /></a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </nav>
      </div>
      <div className="wrap footer__bottom">
        <span>© {new Date().getFullYear()} {profile.name}. Full-stack developer, Bangkok.</span>
        <span className="tag">next.js // {profile.location.toLowerCase()}</span>
      </div>
    </footer>
  );
}
