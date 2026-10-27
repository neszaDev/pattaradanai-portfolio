"use client";

import { Check, Copy, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "@/data/content";

export function CopyEmail({ className = "copy", label = profile.email }: { className?: string; label?: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setDone(true);
      setTimeout(() => setDone(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <button type="button" className={className} onClick={copy} data-done={done || undefined} aria-label={`Copy ${profile.email}`}>
      {done ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
      <span aria-live="polite">{done ? "Copied" : label}</span>
    </button>
  );
}

// No backend: the form drafts an email in the visitor's mail app.
export function ContactForm() {
  const send = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${data.get("topic")} — ${data.get("company")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className="form" onSubmit={send}>
      <div className="grid grid--2" style={{ gap: 16 }}>
        <div className="field"><label htmlFor="f-name">Your name<span>Required</span></label><input id="f-name" name="name" autoComplete="name" required /></div>
        <div className="field"><label htmlFor="f-email">Work email<span>Required</span></label><input id="f-email" name="email" type="email" autoComplete="email" required /></div>
      </div>
      <div className="field"><label htmlFor="f-company">Company<span>Required</span></label><input id="f-company" name="company" autoComplete="organization" required /></div>
      <div className="field">
        <label htmlFor="f-topic">Role type<span>Select one</span></label>
        <select id="f-topic" name="topic">
          <option>Full-stack role</option>
          <option>Frontend role</option>
          <option>Backend role</option>
          <option>Mobile role</option>
          <option>General chat</option>
        </select>
      </div>
      <div className="field"><label htmlFor="f-message">Message<span>Required</span></label><textarea id="f-message" name="message" rows={5} required placeholder="Role scope, team, stack, and anything else I should know." /></div>
      <div className="form__foot">
        <span className="cluster"><span className="dot dot--sm" aria-hidden="true" />Opens your mail app with this message filled in</span>
        <button className="btn btn--primary" type="submit">Send message<Send size={14} className="nudge" aria-hidden="true" /></button>
      </div>
    </form>
  );
}
