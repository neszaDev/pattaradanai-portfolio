import { ArrowDown, ArrowUpRight, Code2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { experience, profile, projects, skillGroups, workflow } from "@/data/content";

export function PortfolioPage() {
  return (
    <main>
      <SiteHeader />

      <section id="home" className="hero shell">
        <div className="hero__copy">
          <p className="eyebrow">Available for early-career opportunities</p>
          <h1>Building the parts of software that make products work.</h1>
          <p className="hero__intro">I build and maintain web and mobile applications, working across frontend interfaces, backend APIs, databases, and deployment workflows.</p>
          <div className="hero__actions">
            <Link className="button button--accent" href="/projects">View selected work <ArrowDown size={16} /></Link>
            <a className="text-link" href={profile.resumePath} download>Download resume <ArrowUpRight size={16} /></a>
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
            <span className="hero__identity-label">01 / identity</span>
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

      <div className="shell hero__rule" aria-hidden="true"><span>SCROLL TO EXPLORE</span><span className="hero__rule-line" /></div>

      <section id="about" className="section section--about shell">
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

      <section id="projects" className="section section--projects">
        <div className="shell">
          <SectionHeading title="Work with a reason behind it." description="A small selection of systems and product work. Each one is described by the part I contributed, not by inflated outcomes." />
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.index} {...project} />)}
          </div>
        </div>
      </section>

      <section id="experience" className="section section--experience shell">
        <SectionHeading title="Experience in real workflows." description="The interesting part is rarely one screen or one endpoint. It is how the pieces behave together." />
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={`${item.company}-${item.period}`}>
              <div className="experience-item__meta"><span>{item.period}</span><span>{item.location}</span></div>
              <div className="experience-item__main">
                <h3>{item.role} <span>- {item.company}</span></h3>
                <p className="experience-item__summary">{item.summary}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--skills">
        <div className="shell skills-layout">
          <div><span className="eyebrow">Current toolkit</span><h2>Tools I use to move a feature from idea to delivery.</h2></div>
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

      <section id="contact" className="contact shell">
        <div className="contact__copy"><span className="eyebrow">Have a role in mind?</span><h2>Let&apos;s talk about the work that needs doing.</h2><p>I&apos;m looking for a team where I can contribute, learn from experienced engineers, and keep strengthening the fundamentals.</p></div>
        <div className="contact__links">
          <a className="contact-link" href={`mailto:${profile.email}?subject=Portfolio%20conversation`}><Mail size={19} /><span>{profile.email}</span><ArrowUpRight size={16} /></a>
          <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer"><Code2 size={19} /><span>github.com/neszaDev</span><ArrowUpRight size={16} /></a>
          <span className="contact-link contact-link--static"><MapPin size={19} /><span>{profile.location}</span></span>
          <a className="contact-link" href={`tel:${profile.phone.replaceAll(" ", "")}`}><Phone size={19} /><span>{profile.phone}</span><ArrowUpRight size={16} /></a>
        </div>
      </section>

      <footer className="footer shell"><span>Copyright {new Date().getFullYear()} Pattaradanai Prommanee</span><span>Built for the next useful problem.</span></footer>
    </main>
  );
}




