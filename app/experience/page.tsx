import { CheckCircle2, Download, IdCard, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { education, experience, materials, profile } from "@/data/content";

export const metadata: Metadata = {
  title: "Experience",
  description: "Experience and education of Pattaradanai Prommanee, full-stack developer in Bangkok.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  const glance = [
    { label: "Current role", value: experience[0].role, note: `Since ${experience[0].period.split(" – ")[0]}` },
    { label: "Focus", value: "Full stack", note: "Web, API, database, and mobile" },
    { label: "Location", value: profile.location, note: "Open to remote-friendly teams" },
    { label: "Education", value: education.school, note: `${education.degree}, ${education.honours}` },
  ];

  return (
    <>
      <section className="intro rise">
        <div className="intro__meta">
          <span className="crumbs"><b>{"//"}</b><span>career_history</span><span>::</span><span>overview</span></span>
          <span className="status status--plain"><span className="dot dot--sm" aria-hidden="true" />Open to new roles</span>
        </div>
        <div className="intro__row">
          <div className="intro" style={{ gap: 8, maxWidth: 720 }}>
            <h1 className="h-lg">Experience & career history</h1>
            <p className="muted">What I worked on in each role, as on my résumé. Employer code and screens stay with the employer; the case studies on this site are my own projects.</p>
          </div>
          <div className="actions">
            <a className="btn btn--primary" href={profile.resumePath} download><Download size={16} aria-hidden="true" />Download résumé (PDF)</a>
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}><Mail size={16} color="var(--ok)" aria-hidden="true" />Email me</a>
          </div>
        </div>
      </section>

      <section className="card card--lg" aria-labelledby="glance-title">
        <div className="card__top" style={{ paddingBottom: 8, borderBottom: "1px solid var(--line)" }}>
          <h2 id="glance-title" className="cluster h-sm"><IdCard size={18} aria-hidden="true" />At a glance</h2>
          <span className="eyebrow">Candidate summary</span>
        </div>
        <dl className="grid grid--4">
          {glance.map((item) => (
            <div className="inset" key={item.label} style={{ background: "var(--subtle)" }}>
              <dt className="eyebrow">{item.label}</dt>
              <dd className="h-sm" style={{ marginTop: 4 }}>{item.value}</dd>
              <dd className="body-sm" style={{ fontSize: 12, marginTop: 2 }}>{item.note}</dd>
            </div>
          ))}
        </dl>
        <div className="cluster" style={{ paddingTop: 12, borderTop: "1px solid var(--line)" }}>
          <span className="eyebrow">Core skills:</span>
          {materials.slice(0, 7).map((material) => <span className="chip" key={material.name}>{material.name}</span>)}
        </div>
      </section>

      <section className="section" aria-labelledby="roles-title">
        <div className="section__head">
          <h2 id="roles-title" className="h-md">Roles</h2>
          <span className="eyebrow">Most recent first</span>
        </div>
        <ul className="grid">
          {experience.map((role, index) => (
            <li className={index === 0 ? "card card--hover role role--current" : "card card--hover role"} key={role.company}>
              <div className="card__top">
                <span className={index === 0 ? "status" : "status status--plain"}><span className={index === 0 ? "dot dot--sm dot--pulse" : "dot dot--sm dot--off"} aria-hidden="true" />{index === 0 ? "Current" : role.employer ? "Previous" : "Alongside study"}</span>
                <span className="eyebrow">{role.period}</span>
              </div>
              <div className="role__head">
                <h3 className="h-md">{role.role}</h3>
                <span className="mono" style={{ fontWeight: 600, color: "var(--fg-2)" }}>{role.company}</span>
              </div>
              <span className="role__meta"><MapPin size={14} aria-hidden="true" />{role.location}</span>
              <ul className="checks">
                {role.highlights.map((item) => <li key={item}><CheckCircle2 size={16} aria-hidden="true" />{item}</li>)}
              </ul>
              {role.href && <Link className="link mono" style={{ fontSize: 13 }} href={role.href}>See the project →</Link>}
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="edu-title">
        <div className="section__head"><h2 id="edu-title" className="h-md">Education</h2></div>
        <div className="card">
          <div className="card__top">
            <span className="eyebrow">{"//"} Academic record</span>
            <Image src="/mfu-logo.webp" alt="" width={28} height={48} />
          </div>
          <h3 className="h-sm">{education.school}</h3>
          <p className="mono body-sm">{education.degree} · {education.faculty}</p>
          <div className="inset kv" style={{ maxWidth: 420 }}>
            <div><dt>Result</dt><dd className="mono">{education.honours}</dd></div>
          </div>
        </div>
      </section>
    </>
  );
}
