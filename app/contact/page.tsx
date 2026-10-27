import { ArrowUpRight, Code2, FileText, Mail, Phone, Zap } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm, CopyEmail } from "@/components/client";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email, phone, GitHub, and résumé for Pattaradanai Prommanee, full-stack developer in Bangkok.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="intro intro--ruled rise">
        <div className="intro__meta">
          <span className="status"><span className="dot dot--sm dot--pulse" aria-hidden="true" />Open to new roles & conversations</span>
          <span className="status status--plain">Email is the fastest way to reach me</span>
        </div>
        <div className="intro__row">
          <div className="intro" style={{ gap: 8, maxWidth: 680 }}>
            <h1 className="h-xl">Let’s connect</h1>
            <p className="lede">Open to full-stack, frontend, backend, and mobile roles, in Bangkok or with remote-friendly teams. I’d like to hear about your team and what it’s building.</p>
          </div>
          <dl className="facts-box kv">
            <div><dt>Location</dt><dd>{profile.location}</dd></div>
            <div><dt>Work preference</dt><dd>Bangkok or remote-friendly</dd></div>
            <div><dt>Roles</dt><dd>Full-stack, web, API, mobile</dd></div>
          </dl>
        </div>
      </section>

      <div className="split split--contact">
        <section className="panel" aria-labelledby="quick-title">
          <div className="panel__head">
            <h2 id="quick-title" className="eyebrow"><Zap size={14} aria-hidden="true" />Quick actions</h2>
            <span className="cluster eyebrow" style={{ color: "var(--ok-ink)" }}><span className="dot dot--sm" aria-hidden="true" />Available</span>
          </div>
          <div className="panel__body">
            <div className="inset" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 6, border: "1px solid var(--line)", background: "var(--subtle)" }}>
              <div className="card__top"><span className="eyebrow">Direct email</span><span className="eyebrow" style={{ color: "var(--ok-ink)" }}></span></div>
              <div className="card__top" style={{ flexWrap: "nowrap" }}>
                <a className="h-sm" style={{ display: "block", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} href={`mailto:${profile.email}`}>{profile.email}</a>
                <CopyEmail label="Copy" />
              </div>
            </div>
            <a className="action" href={`tel:${profile.phone.replaceAll(" ", "")}`}>
              <div><span className="icon-tile"><Phone size={18} aria-hidden="true" /></span><div><strong>Phone</strong><small>{profile.phone}</small></div></div>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="action" href={profile.github}>
              <div><span className="icon-tile"><Code2 size={18} aria-hidden="true" /></span><div><strong>GitHub profile</strong><small>github.com/neszaDev · public starters and source</small></div></div>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="action" href={profile.resumePath} download>
              <div><span className="icon-tile" style={{ background: "var(--ok-bg)", color: "var(--ok-ink)" }}><FileText size={18} aria-hidden="true" /></span><div><strong>Download résumé (PDF)</strong><small>Experience, skills, and education</small></div></div>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="panel" aria-labelledby="form-title">
          <div className="panel__head">
            <h2 id="form-title" className="eyebrow"><Mail size={14} aria-hidden="true" />Send a message</h2>
            <span className="eyebrow">Direct to Pattaradanai</span>
          </div>
          <ContactForm />
        </section>
      </div>
    </>
  );
}
