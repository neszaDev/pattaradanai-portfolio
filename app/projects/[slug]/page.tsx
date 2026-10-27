import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type Credit, type Shot, projects } from "@/data/content";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.summary, url: `/projects/${project.slug}`, images: ["/opengraph-image"] },
  };
}

const creditLabel: Record<Credit, string> = { mine: "Built by me", team: "Built by teammates", external: "Outside service", upstream: "Open-source starting point", private: "Private repository, not shown" };

function Figure({ shot, priority }: { shot: Shot; priority?: boolean }) {
  const phone = shot.height > shot.width;
  return (
    <figure>
      <div className={phone ? "shot shot--phone" : "shot"}>
        <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes={phone ? "300px" : "(max-width: 1240px) 100vw, 1200px"} quality={90} priority={priority} />
      </div>
      {shot.caption && <figcaption>{shot.title ? `${shot.title}. ` : ""}{shot.caption}</figcaption>}
    </figure>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <>
      <header className="intro rise">
        <nav className="crumbs" aria-label="Breadcrumb"><Link className="back" href="/projects">projects</Link><span>/</span><b>{project.slug}</b></nav>
        <div className="cluster"><span className="badge">{project.group}</span><span className="badge">{project.year ?? "During university"}</span></div>
        <h1 className="h-xl">{project.title}</h1>
        <p className="lede">{project.summary}</p>
        <ul className="chips" aria-label="Stack">{project.stack.map((item) => <li className="chip" key={item}>{item}</li>)}</ul>
      </header>

      <dl className="facts rise" style={{ "--d": 2 } as React.CSSProperties}>
        <div><dt className="eyebrow">Role</dt><dd>{project.role}</dd></div>
        <div><dt className="eyebrow">Year</dt><dd>{project.year ?? "During university"}</dd></div>
        <div><dt className="eyebrow">Status</dt><dd>{project.condition}</dd></div>
        <div>
          <dt className="eyebrow">Source</dt>
          <dd>{project.links.length ? <ul>{project.links.map((link) => <li key={link.href}><a className="link" href={link.href}>{link.label}</a></li>)}</ul> : "Not public"}</dd>
        </div>
      </dl>

      {project.flow ? (
        <section aria-labelledby="flow">
          <h2 id="flow" className="sr-only">Sign-in flow</h2>
          <ol className="steps">
            {project.flow.map((step) => (
              <li key={step.name}>
                <strong>{step.name}</strong>
                <span className="muted">{step.note}{step.mine ? " (my part)" : ""}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : (
        project.hero && <Figure shot={project.hero} priority />
      )}

      <div className="case-body">
        <section className="prose" aria-labelledby="context">
          <h2 id="context" className="h-md">Context</h2>
          {project.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>

        <section className="prose" aria-labelledby="built">
          <h2 id="built" className="h-md">What I built</h2>
          <ul>{project.built.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section aria-labelledby="layers">
          <h2 id="layers" className="h-md">Who built which layer</h2>
          <ul className="layers">
            {project.layers.map((layer) => (
              <li className="layer" key={layer.name} data-credit={layer.credit}>
                <span><strong>{layer.name}</strong><span className="badge">{creditLabel[layer.credit]}</span></span>
                <span className="muted">{layer.what}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.decisions.length > 0 && (
          <section aria-labelledby="decisions">
            <h2 id="decisions" className="h-md">Decisions</h2>
            <div className="grid grid--2">
              {project.decisions.map((decision) => (
                <div className="card" key={decision.title}><h3 className="h-sm">{decision.title}</h3><p className="body-sm">{decision.body}</p></div>
              ))}
            </div>
          </section>
        )}

        {project.quality.length > 0 && (
          <section className="prose" aria-labelledby="quality">
            <h2 id="quality" className="h-md">Testing and delivery</h2>
            <ul>{project.quality.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        )}

        <section className="prose" aria-labelledby="evidence">
          <h2 id="evidence" className="h-md">Evidence</h2>
          <p className="muted">{project.evidence}</p>
        </section>

        {project.shots.length > 0 && (
          <section aria-labelledby="screens">
            <h2 id="screens" className="h-md">More screens</h2>
            <div className="gallery">{project.shots.map((shot) => <Figure key={shot.src} shot={shot} />)}</div>
          </section>
        )}
      </div>

      <nav className="pager" aria-label="More projects">
        {previous ? <Link href={`/projects/${previous.slug}`}><span className="eyebrow">Previous</span><strong className="h-sm">{previous.title}</strong></Link> : <Link href="/projects"><span className="eyebrow">Back to</span><strong>All projects</strong></Link>}
        {next ? <Link href={`/projects/${next.slug}`}><span className="eyebrow">Next</span><strong className="h-sm">{next.title}</strong></Link> : <Link href="/projects"><span className="eyebrow">Back to</span><strong>All projects</strong></Link>}
      </nav>
    </>
  );
}
