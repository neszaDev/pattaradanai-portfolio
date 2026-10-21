import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  index: string;
  title: string;
  type: string;
  description: string;
  contribution: string;
  details: string[];
  stack: string[];
  accent: string;
};

export function ProjectCard({ index, title, type, description, contribution, details, stack, accent }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${accent}`}>
      <div className="project-card__topline">
        <span>{index}</span>
        <span>{type}</span>
      </div>
      <div className="project-card__body">
        <div>
          <h3>{title}</h3>
          <p className="project-card__description">{description}</p>
        </div>
        <ArrowUpRight className="project-card__arrow" aria-hidden="true" size={22} />
      </div>
      <div className="project-card__contribution">
        <span>Contribution</span>
        <p>{contribution}</p>
      </div>
      <ul className="project-card__details">
        {details.map((detail) => <li key={detail}>{detail}</li>)}
      </ul>
      <div className="tag-list" aria-label={`${title} technology stack`}>
        {stack.map((item) => <span className="tag" key={item}>{item}</span>)}
      </div>
    </article>
  );
}
