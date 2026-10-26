import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/content";

type ProjectCardProps = Pick<Project, "index" | "slug" | "title" | "type" | "description" | "contribution" | "details" | "stack" | "accent" | "thumbnail">;

function ProjectVisual({ thumbnail, title, accent }: Pick<ProjectCardProps, "thumbnail" | "title" | "accent">) {
  if (thumbnail) {
    return <div className={`project-card__visual project-card__visual--${accent}`}>
      <Image className="project-card__screenshot" src={thumbnail} alt={`${title} screenshot`} fill sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 33vw" />
    </div>;
  }

  return <div className="project-card__visual project-card__visual--empty" role="img" aria-label={`${title}: no public screenshot available`}><span>No public screenshot available</span></div>;
}

export function ProjectCard({ index, slug, title, type, description, contribution, details, stack, accent, thumbnail }: ProjectCardProps) {
  return <article className={`project-card project-card--${accent}`}>
    <div className="project-card__topline"><span>{index}</span><span>{type}</span></div>
    <ProjectVisual accent={accent} thumbnail={thumbnail} title={title} />
    <div className="project-card__body"><div><h3><Link href={`/project/${slug}`}>{title}</Link></h3><p className="project-card__description">{description}</p></div><Link href={`/project/${slug}`} aria-label={`Read case study: ${title}`}><ArrowUpRight className="project-card__arrow" aria-hidden="true" size={22} /></Link></div>
    <div className="project-card__contribution"><span>Contribution</span><p>{contribution}</p></div>
    <ul className="project-card__details">{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
    <div className="tag-list" aria-label={`${title} technology stack`}>{stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
  </article>;
}
