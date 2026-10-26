import type { MetadataRoute } from "next";
import { projects } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const routes = ["", "/about", "/about/education", "/about/skills", "/projects", "/experience", "/contact"];
  return [...routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date() })), ...projects.flatMap((project) => [
    { url: `${siteUrl}/project/${project.slug}`, lastModified: new Date() },
    { url: `${siteUrl}/projects/${project.slug}`, lastModified: new Date() },
  ])];
}
