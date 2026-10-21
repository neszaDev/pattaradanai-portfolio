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

function ProjectVisual({ accent, title }: { accent: string; title: string }) {
  return (
    <div className={`project-card__visual project-card__visual--${accent}`} role="img" aria-label={`${title} visual placeholder`}>
      <svg viewBox="0 0 520 250" aria-hidden="true">
        {accent === "blue" ? (
          <>
            <rect className="visual-window" x="86" y="35" width="300" height="180" rx="18" />
            <rect className="visual-bar" x="108" y="58" width="82" height="10" rx="5" />
            <rect className="visual-line" x="108" y="91" width="212" height="13" rx="6" />
            <rect className="visual-line visual-line--short" x="108" y="118" width="144" height="10" rx="5" />
            <rect className="visual-accent" x="108" y="157" width="94" height="32" rx="10" />
            <rect className="visual-card" x="270" y="145" width="94" height="50" rx="12" />
            <circle className="visual-dot" cx="347" cy="72" r="9" />
          </>
        ) : null}
        {accent === "ink" ? (
          <>
            <rect className="visual-window" x="68" y="42" width="384" height="166" rx="18" />
            <rect className="visual-sidebar" x="68" y="42" width="72" height="166" rx="18" />
            <rect className="visual-bar" x="161" y="67" width="126" height="11" rx="5" />
            <rect className="visual-card" x="161" y="98" width="112" height="67" rx="12" />
            <rect className="visual-card visual-card--alt" x="291" y="98" width="130" height="67" rx="12" />
            <path className="visual-path" d="M184 145h66m68-23h74m-74 23h49" />
            <circle className="visual-dot" cx="97" cy="74" r="9" />
          </>
        ) : null}
        {accent === "rust" ? (
          <>
            <rect className="visual-phone" x="188" y="24" width="144" height="202" rx="24" />
            <rect className="visual-card" x="207" y="56" width="106" height="48" rx="12" />
            <rect className="visual-line" x="207" y="125" width="80" height="11" rx="5" />
            <rect className="visual-line visual-line--short" x="207" y="148" width="58" height="9" rx="4" />
            <circle className="visual-accent" cx="282" cy="187" r="18" />
            <path className="visual-path" d="M118 83h40m-40 30h22m214 0h48" />
          </>
        ) : null}
      </svg>
      <span className="project-card__visual-label">Visual placeholder / {accent === "blue" ? "web app" : accent === "ink" ? "platform" : "mobile flow"}</span>
    </div>
  );
}

export function ProjectCard({ index, title, type, description, contribution, details, stack, accent }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${accent}`}>
      <div className="project-card__topline">
        <span>{index}</span>
        <span>{type}</span>
      </div>
      <ProjectVisual accent={accent} title={title} />
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
