import { ArrowRight, ArrowUpRight, Check, Code2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { experience, profile, projects, skillGroups, workflow } from "@/data/content";

type PortfolioShellProps = { children: ReactNode };

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <main>
      <SiteHeader />
      {children}
      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Pattaradanai Prommanee</span>
        <span>Built for useful work.</span>
      </footer>
    </main>
  );
}

function WorkflowIllustration() {
  return (
    <figure className="workflow-art" aria-label="Illustrative software workflow placeholder">
      <div className="workflow-art__topline"><span>Illustrative workflow</span><span>01 — 04</span></div>
      <svg viewBox="0 0 620 430" aria-hidden="true">
        <path className="workflow-art__path" d="M104 115h118v86h118v-86h118" />
        <path className="workflow-art__path workflow-art__path--secondary" d="M222 287h118v-86h118v86h58" />
        <circle className="workflow-art__node" cx="104" cy="115" r="24" />
        <circle className="workflow-art__node workflow-art__node--blue" cx="222" cy="201" r="24" />
        <circle className="workflow-art__node workflow-art__node--coral" cx="340" cy="115" r="24" />
        <circle className="workflow-art__node workflow-art__node--green" cx="458" cy="201" r="24" />
        <circle className="workflow-art__node workflow-art__node--blue" cx="222" cy="287" r="24" />
        <circle className="workflow-art__node" cx="340" cy="201" r="24" />
        <circle className="workflow-art__node workflow-art__node--coral" cx="458" cy="287" r="24" />
        <circle className="workflow-art__node workflow-art__node--green" cx="516" cy="287" r="24" />
        <g className="workflow-art__labels">
          <text x="104" y="166">understand</text><text x="222" y="252">implement</text><text x="340" y="166">test</text><text x="458" y="252">review</text><text x="516" y="338">ship</text>
        </g>
      </svg>
      <figcaption>From requirements to verified delivery.</figcaption>
    </figure>
  );
}

function PageIntro({ title, description, facts }: { title: string; description: string; facts: string[] }) {
  return (
    <section className="page-intro shell">
      <div><h1>{title}</h1><p>{description}</p></div>
      <div className="page-intro__facts">{facts.map((fact) => <span key={fact}>{fact}</span>)}</div>
    </section>
  );
}

function ContactLinks() {
  return (
    <div className="contact-links">
      <a className="contact-link" href={`mailto:${profile.email}?subject=Portfolio%20conversation`}><Mail size={18} aria-hidden="true" /><span>{profile.email}</span><ArrowUpRight size={16} aria-hidden="true" /></a>
      <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer"><Code2 size={18} aria-hidden="true" /><span>github.com/neszaDev</span><ArrowUpRight size={16} aria-hidden="true" /></a>
      <span className="contact-link contact-link--static"><MapPin size={18} aria-hidden="true" /><span>{profile.location}</span></span>
      <a className="contact-link" href={`tel:${profile.phone.replaceAll(" ", "")}`}><Phone size={18} aria-hidden="true" /><span>{profile.phone}</span><ArrowUpRight size={16} aria-hidden="true" /></a>
    </div>
  );
}

function ProfilePlaceholder() {
  return <div className="profile-placeholder" role="img" aria-label="Abstract profile placeholder"><div className="profile-placeholder__ring" /><strong>PP</strong><span>Computer Engineering</span></div>;
}

export function HomePage() {
  return (
    <PortfolioShell>
      <section className="home-hero shell">
        <div className="home-hero__copy">
          <h1>Full-stack developer for real product work.</h1>
          <p className="home-hero__intro">I build and maintain web and mobile applications across frontend interfaces, backend APIs, databases, and deployment workflows.</p>
          <div className="hero-actions"><Link className="button button--accent" href="/projects">View selected work <ArrowRight size={16} aria-hidden="true" /></Link><Link className="button button--outline" href="/experience">See experience <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        </div>
        <WorkflowIllustration />
      </section>

      <section className="section section--featured shell" aria-labelledby="featured-title">
        <SectionHeading title="Selected work, made easy to scan." description="A quick view of the product surfaces, responsibilities, and technologies behind my work." />
        <div className="project-grid project-grid--home">{projects.map((project) => <ProjectCard key={project.index} {...project} />)}</div>
        <div className="section-link"><Link className="text-link" href="/projects">View all project context <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      </section>

      <section className="home-experience"><div className="shell home-experience__inner"><div><h2>Useful across the delivery cycle.</h2><p>From clarifying requirements to tracing bugs and verifying data, I work across the layers a feature depends on.</p><Link className="text-link" href="/experience">Read professional experience <ArrowUpRight size={16} aria-hidden="true" /></Link></div><div className="home-experience__role"><span>Currently</span><strong>{experience[0].role}</strong><p>{experience[0].company} · {experience[0].location}</p><span className="role-status"><i /> {experience[0].period}</span></div></div></section>
      <section className="home-cta shell"><div><h2>Have a product problem to solve?</h2><p>Let’s compare notes about the role, team, or workflow you are building.</p></div><Link className="button button--dark" href="/contact">Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></Link></section>
    </PortfolioShell>
  );
}

export function AboutPage() {
  return (
    <PortfolioShell>
      <PageIntro title="An engineer who follows the workflow through." description="I like working where product requirements become real software: tracing a workflow, understanding its data, and making the next reliable change." facts={["Full-stack developer", "Web + mobile engineering", "Open to early-career roles"]} />
      <section className="section shell about-layout"><div className="about-story"><h2>Practical, curious, accountable.</h2><p className="about-story__lead">My work spans Next.js and React interfaces, REST APIs, databases, Flutter mobile apps, and the delivery systems around them.</p><p>I am early in my career, but I take ownership seriously: understand the existing behavior, implement carefully, test the path, debug what breaks, and review what ships.</p></div><div className="about-side"><ProfilePlaceholder /><div className="about-note"><span>Education</span><strong>B.Eng. Computer Engineering</strong><p>Mae Fah Luang University<br />First-Class Honors · GPA 3.69</p></div><div className="about-note"><span>Working style</span><strong>Understand before changing.</strong><p>AI tools can accelerate implementation; comprehension, verification, and responsibility stay with me.</p></div></div></section>
      <section className="skills-band"><div className="shell skills-layout"><div><h2>A toolkit across the delivery cycle.</h2><p>Broad enough to follow a feature from interface to API, data, testing, and deployment.</p></div><div className="skills-grid">{skillGroups.map((group) => <div className="skill-group" key={group.label}><h3>{group.label}</h3><div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>)}</div></div></section>
      <section className="section shell workflow-section"><SectionHeading title="How I work." description="A repeatable loop for making changes understandable and shippable." /><div className="workflow-grid">{workflow.map((step, index) => <div className="workflow-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < workflow.length - 1 ? <ArrowRight size={16} aria-hidden="true" /> : <Check size={16} aria-hidden="true" />}</div>)}</div></section>
    </PortfolioShell>
  );
}

export function ProjectsPage() {
  return <PortfolioShell><PageIntro title="Work with the contribution made clear." description="A concise view of systems and product work across web, backend, mobile, and deployment. No inflated outcomes, just the part I worked on." facts={["03 projects", "Web · API · mobile", "Visuals are placeholders"]} /><section className="section shell projects-section"><SectionHeading title="Three useful signals." description="Look for ownership, the technical surface touched, and the workflow problem each project helped solve." /><div className="project-grid">{projects.map((project) => <ProjectCard key={project.index} {...project} />)}</div><div className="section-link"><Link className="text-link" href="/experience">See the professional context <ArrowUpRight size={16} aria-hidden="true" /></Link></div></section></PortfolioShell>;
}

export function ExperiencePage() {
  return <PortfolioShell><PageIntro title="Experience in real product workflows." description="The interesting part is rarely one screen or one endpoint. It is how the pieces behave together under real requirements." facts={["Frontend + backend + data", "Feature delivery", "Debugging + verification"]} /><section className="section shell experience-section"><div className="experience-summary" aria-label="Experience summary"><div><span>Current role</span><strong>Full-Stack Developer</strong><p>AnyVet</p></div><div><span>Previous role</span><strong>Full-Stack Developer Intern</strong><p>iPassion Co., Ltd.</p></div><div><span>Working range</span><strong>Web, API, mobile, data</strong><p>Feature delivery and debugging</p></div></div><div className="experience-list">{experience.map((item) => <article className="experience-item" key={`${item.company}-${item.period}`}><div className="experience-item__meta"><span>{item.period}</span><span>{item.location}</span></div><div className="experience-item__main"><h2>{item.role} <span>· {item.company}</span></h2><p className="experience-item__summary">{item.summary}</p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div></section></PortfolioShell>;
}

export function ContactPage() {
  return <PortfolioShell><PageIntro title="Let’s talk about the work that needs doing." description="I am looking for a team where I can contribute, learn from experienced engineers, and keep strengthening the fundamentals." facts={["Full-stack", "Backend", "Frontend + mobile"]} /><section className="section shell contact-layout"><div className="contact-card"><div className="contact-card__mark" aria-hidden="true">✦</div><h2>Ready to compare notes?</h2><p>Whether the role is full-stack, backend, frontend, or mobile, I would be glad to talk about the problems your team is solving.</p><a className="button button--dark" href={`mailto:${profile.email}?subject=Portfolio%20conversation`}>Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></a></div><ContactLinks /></section><section className="resume-callout shell"><div><strong>Prefer the short version?</strong><p>Download the resume for education, experience, skills, and contact details in one document.</p></div><a className="button button--accent" href={profile.resumePath} download>Download resume <ArrowUpRight size={16} aria-hidden="true" /></a></section></PortfolioShell>;
}
