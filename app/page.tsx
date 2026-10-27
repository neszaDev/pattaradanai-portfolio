import { BadgeCheck, Download, FlaskConical, Layers, Mail, MapPin, ScanSearch, Sparkles } from "lucide-react";
import Link from "next/link";
import { FeaturedProject, ProjectCards } from "@/components/ui";
import { education, experience, profile, projects } from "@/data/content";

const metrics = [
  { label: "Case studies", value: `${projects.length} projects`, note: "Two products built end to end, plus starters and university work" },
  { label: "API surface", value: "71 endpoints", note: "Versioned Spring Boot API in Aureon CRM, described with OpenAPI" },
  { label: "Web app scope", value: "50 pages", note: "Jaiyen HR web app, with 72 server actions behind them" },
  { label: "Education", value: "GPA 3.69", note: `First-Class Honours, ${education.degree}` },
];

const principles = [
  { icon: Layers, title: "Across the stack", body: "Interface, API, and database in the same week. I trace a workflow through every layer it touches.", tag: "End to end" },
  { icon: ScanSearch, title: "Read first", body: "I read the existing behaviour before changing it, so the next change lands reliably.", tag: "Careful changes" },
  { icon: FlaskConical, title: "Test what changed", body: "Unit, end-to-end, and accessibility tests on the paths I touch, run in CI.", tag: "Quality" },
  { icon: Sparkles, title: "AI, owned", body: "AI tools help me move faster. Understanding the code, checking it, and owning the result stay with me.", tag: "Ownership" },
];

export default function HomePage() {
  const [featured, ...rest] = projects;

  return (
    <>
      <section className="intro rise" aria-labelledby="hero-title">
        <div className="intro__meta">
          <div className="cluster">
            <span className="status"><span className="dot dot--pulse" aria-hidden="true" />Open to full-stack, frontend, backend & mobile roles</span>
            <span className="eyebrow">Bangkok or remote-friendly</span>
          </div>
          <span className="cluster eyebrow"><MapPin size={14} aria-hidden="true" />{profile.location}</span>
        </div>
        <div className="intro__row">
          <div className="intro" style={{ gap: 8, maxWidth: 820 }}>
            <div className="cluster">
              <h1 id="hero-title" className="h-xl">Hi, I’m Pattaradanai</h1>
              <span className="badge">Full-stack developer</span>
            </div>
            <p className="h-md muted" style={{ fontWeight: 500 }}>Product features, end to end.</p>
            <p className="lede">Next.js and React interfaces, Spring Boot APIs, Flutter apps, and the PostgreSQL underneath. Every project here says exactly which part I built.</p>
          </div>
          <div className="actions" style={{ flexDirection: "column", minWidth: 240 }}>
            <a className="btn btn--primary" href={`mailto:${profile.email}`}><Mail size={16} aria-hidden="true" />Get in touch</a>
            <a className="btn btn--ghost" href={profile.resumePath} download><Download size={16} aria-hidden="true" />Download résumé (PDF)</a>
          </div>
        </div>
      </section>

      <ul className="grid grid--4 rise" style={{ "--d": 1 } as React.CSSProperties} aria-label="At a glance">
        {metrics.map((metric) => (
          <li className="card card--hover" key={metric.label}>
            <div className="card__top"><span className="eyebrow">{metric.label}</span><BadgeCheck size={18} color="var(--ok)" aria-hidden="true" /></div>
            <div>
              <p className="metric__value">{metric.value}</p>
              <p className="body-sm" style={{ marginTop: 4 }}>{metric.note}</p>
            </div>
          </li>
        ))}
      </ul>

      <section className="section" aria-label="Featured project">
        <div className="section__head">
          <span className="cluster eyebrow"><span className="dot" aria-hidden="true" />Featured project</span>
          <span className="eyebrow">Case study // 01</span>
        </div>
        <FeaturedProject project={featured} />
      </section>

      <section className="section" aria-labelledby="more-title">
        <div className="section__head">
          <div><span className="eyebrow">{"//"} Selected work</span><h2 id="more-title" className="h-md">More projects</h2></div>
          <Link className="link mono" style={{ fontSize: 13 }} href="/projects">All projects →</Link>
        </div>
        <ProjectCards items={rest.slice(0, 2)} />
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="section__head">
          <div><span className="eyebrow">{"//"} How I work</span><h2 id="work-title" className="h-md">Habits I bring to a team</h2></div>
        </div>
        <ul className="grid grid--4">
          {principles.map(({ icon: Icon, title, body, tag }) => (
            <li className="card" key={title}>
              <span className="icon-tile"><Icon size={18} aria-hidden="true" /></span>
              <h3 className="h-sm">{title}</h3>
              <p className="body-sm">{body}</p>
              <span className="eyebrow" style={{ marginTop: "auto" }}>{tag}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="exp-title">
        <div className="section__head">
          <div><span className="eyebrow">{"//"} Track record</span><h2 id="exp-title" className="h-md">Experience snapshot</h2></div>
          <a className="link mono cluster" style={{ fontSize: 13 }} href={profile.resumePath} download><Download size={14} aria-hidden="true" />Full résumé</a>
        </div>
        <ul className="grid">
          {experience.map((role, index) => (
            <li className="card" key={role.company} style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 24px" }}>
              <div style={{ display: "grid", gap: 4 }}>
                <span className="cluster h-sm"><span className={index === 0 ? "dot" : "dot dot--off"} aria-hidden="true" />{role.company}</span>
                <span className="body-sm">{role.role}</span>
              </div>
              <div style={{ display: "grid", gap: 6, justifyItems: "end", textAlign: "right" }}>
                <span className="eyebrow">{role.period} · {role.location}</span>
                {role.href && <Link className="link mono" style={{ fontSize: 13 }} href={role.href}>See the project →</Link>}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
