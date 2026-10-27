import { MapPin, Wrench } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { education, materials, profile } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description: "About Pattaradanai Prommanee: how he works, the tools he uses and where each shows up in his projects, and his education.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="intro__row rise">
        <div className="intro" style={{ gap: 8 }}>
          <span className="crumbs"><b>pattaradanai</b><span>/</span><span>profile</span><span>/</span><b>about.md</b></span>
          <span className="eyebrow">{"//"} Candidate profile & how I work</span>
          <h1 className="h-lg">About Pattaradanai — full-stack developer</h1>
        </div>
        <div className="cluster">
          <span className="badge"><span className="dot dot--sm dot--pulse" aria-hidden="true" />Open to new roles</span>
          <span className="badge badge--dark">Full-stack / Frontend / Backend / Mobile</span>
          <span className="badge"><MapPin size={12} aria-hidden="true" />{profile.location}</span>
        </div>
      </section>

      <div className="split">
        <section className="card card--lg" aria-labelledby="work-title">
          <div className="card__top">
            <span className="badge"><Wrench size={12} aria-hidden="true" />How I work</span>
            <span className="eyebrow">Interface · API · Database</span>
          </div>
          <h2 id="work-title" className="h-md">From a requirement to something real</h2>
          <div className="prose">
            <p>I’m Pattaradanai, a full-stack developer in Bangkok. I like the part of software where a requirement turns into something real: tracing a workflow, understanding the data it touches, and making the next change reliably. That usually means working across the interface, the API, and the database in the same week.</p>
            <p>I’m early in my career and take ownership seriously. I read the existing behaviour before changing it, test the path I changed, debug what breaks, and review what ships.</p>
            <p>I use AI coding tools to move faster. Understanding the code, checking it, and owning the result stay with me, which is why every project here says exactly which part I built.</p>
          </div>
        </section>

        <section className="card card--lg" aria-labelledby="edu-title">
          <div className="card__top">
            <span className="eyebrow">{"//"} Education</span>
            <Image src="/mfu-logo.webp" alt="" width={28} height={48} />
          </div>
          <h2 id="edu-title" className="h-sm">{education.school}</h2>
          <p className="mono body-sm">{education.degree}</p>
          <p className="body-sm">{education.faculty}</p>
          <dl className="inset kv" style={{ marginTop: "auto", fontSize: 12 }}>
            <div><dt>Result</dt><dd className="mono">{education.honours}</dd></div>
          </dl>
        </section>
      </div>

      <section className="section" aria-labelledby="tools-title">
        <div className="section__head">
          <div><span className="eyebrow">{"//"} Capabilities inventory</span><h2 id="tools-title" className="h-lg">Tools, and where they show up</h2></div>
          <span className="eyebrow">Each one traced to a project</span>
        </div>
        <ul className="grid grid--3" style={{ alignItems: "start" }}>
          {materials.map((material) => (
            <li className="card" key={material.name}>
              <h3 className="h-sm">{material.name}</h3>
              <div className="skill">
                <b>{material.items}</b>
                <span>{material.where}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
