import Link from "next/link";

export default function NotFound() {
  return (
    <section className="intro">
      <span className="eyebrow">{"//"} 404</span>
      <h1 className="h-xl">Page not found</h1>
      <p className="lede">This page doesn’t exist. It may have moved when the site was reorganised.</p>
      <p><Link className="btn btn--primary" href="/projects">See all projects</Link></p>
    </section>
  );
}
