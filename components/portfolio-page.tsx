import { ArrowDown, ArrowUpRight, Code2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { experience, profile, projects, skillGroups, workflow } from "@/data/content";

type PortfolioShellProps = {
  children: ReactNode;
};

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <main>
      <SiteHeader />
      {children}
      <footer className="footer shell"><span>Copyright {new Date().getFullYear()} Pattaradanai Prommanee</span><span>Built for the next useful problem.</span></footer>
    </main>
  );
}

function PageIntro({ title, description, asideTitle, asideText }: { title: string; description: string; asideTitle: string; asideText: string }) {
  return (
    <section className="page-hero shell">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="page-hero__aside">
        <span>Quick scan</span>
        <strong>{asideTitle}</strong>
        <p>{asideText}</p>
      </div>
    </section>
  );
}

function ContactLinks() {
  return (
    <div className="contact__links">
      <a className="contact-link" href={`mailto:${profile.email}?subject=Portfolio%20conversation`}><Mail size={19} /><span>{profile.email}</span><ArrowUpRight size={16} /></a>
      <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer"><Code2 size={19} /><span>github.com/neszaDev</span><ArrowUpRight size={16} /></a>
      <span className="contact-link contact-link--static"><MapPin size={19} /><span>{profile.location}</span></span>
      <a className="contact-link" href={`tel:${profile.phone.replaceAll(" ", "")}`}><Phone size={19} /><span>{profile.phone}</span><ArrowUpRight size={16} /></a>
    </div>
  );
}

export function HomePage() {
  return (
    <PortfolioShell>
      <section className="hero shell">
        <div className="hero__copy">
          <h1>Full-stack developer building reliable product workflows.</h1>
          <p className="hero__intro">I build and maintain web and mobile applications across frontend interfaces, backend APIs, databases, and deployment workflows.</p>
          <div className="hero__actions">
            <Link className="button button--accent" href="/experience">View experience <ArrowDown size={16} /></Link>
            <Link className="text-link" href="/projects">Selected projects <ArrowUpRight size={16} /></Link>
          </div>
          <div className="home-proof" aria-label="Quick profile facts">
            <div><strong>First-Class Honors</strong><span>Computer Engineering</span></div>
            <div><strong>GPA 3.69</strong><span>Mae Fah Luang University</span></div>
            <div><strong>Bangkok, Thailand</strong><span>Open to early-career roles</span></div>
          </div>
        </div>

        <div className="hero__aside" aria-label="Profile summary">
          <div className="signal-line"><span className="signal-line__pulse" />Open to build, learn, and ship.</div>
          <div className="workspace-panel" aria-label="Engineering workflow sample">
            <div className="workspace-panel__bar"><span>pattaradanai / workspace</span><span>{`{ }`}</span></div>
            <div className="workspace-panel__tab"><span>workflow.ts</span><span>TypeScript</span></div>
            <pre className="workspace-panel__code"><code>{["const change = {", "  understand: true,", "  test: true,", "  review: true,", "  deploy: \"ready\",", "};"].join("\n")}</code></pre>
            <div className="workspace-panel__terminal"><span>&gt; verify --production</span><strong>Workflow sample / verify before shipping</strong></div>
          </div>
          <div className="hero__identity">
            <span className="hero__identity-label">Profile</span>
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
            <span>{profile.descriptor}</span>
          </div>
          <div className="hero__aside-footer">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
            <a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="home-route-guide shell" aria-labelledby="home-route-guide-title">
        <div><h2 id="home-route-guide-title">A quick route through the work.</h2><p>Start with experience for context, projects for evidence, or the resume for a one-page summary.</p></div>
        <div className="home-route-guide__links">
          <Link href="/experience"><span>01</span><strong>Experience</strong><ArrowUpRight size={16} /></Link>
          <Link href="/projects"><span>02</span><strong>Projects</strong><ArrowUpRight size={16} /></Link>
          <Link href={profile.resumePath} download><span>03</span><strong>Resume PDF</strong><ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </PortfolioShell>
  );
}

export function AboutPage() {
  return (
    <PortfolioShell>
      <PageIntro title="About the engineer behind the work." description="A practical full-stack developer who likes understanding how product requirements, APIs, data, and user workflows connect." asideTitle="Junior / early-career developer" asideText="Interested in full-stack, backend, frontend, and mobile roles with teams that value fundamentals and steady growth." />

      <section className="section section--about shell">
        <SectionHeading title="A practical engineer, across the stack." description="I like working where product requirements become real software: tracing a workflow, understanding its data, and making the next reliable change." />
        <div className="about-grid">
          <div className="about-lede">
            <p>My work spans Next.js and React interfaces, REST APIs, databases, Flutter mobile apps, and the delivery systems around them.</p>
            <p>I am early in my career, but I take ownership seriously: understand the existing behavior, implement carefully, test the path, debug what breaks, and review what ships.</p>
          </div>
          <div className="about-notes">
            <div><span>Education</span><strong>B.Eng. Computer Engineering</strong><p>Mae Fah Luang University / First-Class Honors / GPA 3.69</p></div>
            <div><span>Working style</span><strong>Curious, grounded, accountable</strong><p>AI tools can accelerate the work; comprehension, verification, and responsibility stay with me.</p></div>
          </div>
        </div>
      </section>

      <section className="section section--skills">
        <div className="shell skills-layout">
          <div><h2>A toolkit across the delivery cycle.</h2><p>Enough breadth to follow a feature from interface to API, data, testing, and deployment.</p></div>
          <div className="skills-grid">
            {skillGroups.map((group) => <div className="skill-group" key={group.label}><h3>{group.label}</h3><div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>)}
          </div>
        </div>
      </section>

      <section className="section section--workflow shell">
        <SectionHeading title="How I work." description="A practical loop for making changes understandable and shippable." />
        <div className="workflow-grid">
          {workflow.map((step, index) => <div className="workflow-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < workflow.length - 1 ? <ArrowUpRight size={16} aria-hidden="true" /> : null}</div>)}
        </div>
      </section>
    </PortfolioShell>
  );
}

export function ProjectsPage() {
  return (
    <PortfolioShell>
      <PageIntro title="Selected work, with the contribution made clear." description="A concise view of the systems and product work I have built or contributed to across web, backend, mobile, and deployment." asideTitle="Three useful signals" asideText="Look for ownership, the technical surface touched, and the workflow problem each project helped solve." />
      <section className="section section--projects">
        <div className="shell">
          <div className="project-overview" aria-label="Project overview"><span>03 PROJECTS</span><span>WEB · BACKEND · MOBILE · CLOUD</span><span>OPEN FOR REVIEW</span></div>
          <SectionHeading title="Work with a reason behind it." description="Each project is described by the part I contributed, not by inflated outcomes." />
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.index} {...project} />)}
          </div>
          <div className="page-note"><strong>Want the context around these projects?</strong><Link className="text-link" href="/experience">See professional experience <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>
    </PortfolioShell>
  );
}

export function ExperiencePage() {
  return (
    <PortfolioShell>
      <PageIntro title="Experience in real product workflows." description="The interesting part is rarely one screen or one endpoint. It is how the pieces behave together under real requirements." asideTitle="Frontend + backend + data" asideText="I work across the affected layers, investigate failures, and verify the final behavior instead of stopping at the first visible screen." />
      <section className="section section--experience shell">
        <div className="experience-summary" aria-label="Experience summary">
          <div><span>Current role</span><strong>Full-Stack Developer</strong><p>AnyVet</p></div>
          <div><span>Previous role</span><strong>Full-Stack Developer Intern</strong><p>iPassion Co., Ltd.</p></div>
          <div><span>Working range</span><strong>Web, API, mobile, data</strong><p>Feature delivery and debugging</p></div>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={`${item.company}-${item.period}`}>
              <div className="experience-item__meta"><span>{item.period}</span><span>{item.location}</span></div>
              <div className="experience-item__main">
                <h2>{item.role} <span>- {item.company}</span></h2>
                <p className="experience-item__summary">{item.summary}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PortfolioShell>
  );
}

export function ContactPage() {
  return (
    <PortfolioShell>
      <PageIntro title="Let’s talk about the work that needs doing." description="I am looking for a team where I can contribute, learn from experienced engineers, and keep strengthening the fundamentals." asideTitle="Best next step" asideText="Email is the fastest way to start a conversation. The resume has the compact version of this profile." />
      <section className="contact shell">
        <div className="contact__copy"><h2>Ready to compare notes?</h2><p>Whether the role is full-stack, backend, frontend, or mobile, I would be glad to talk about the problems your team is solving.</p><a className="button button--accent" href={`mailto:${profile.email}?subject=Portfolio%20conversation`}>Start a conversation <ArrowUpRight size={16} /></a></div>
        <ContactLinks />
      </section>
      <section className="resume-callout shell"><div><strong>Prefer the short version?</strong><p>Download the resume for education, experience, skills, and contact details in one document.</p></div><a className="button button--dark" href={profile.resumePath} download>Download resume <ArrowUpRight size={16} /></a></section>
    </PortfolioShell>
  );
}
