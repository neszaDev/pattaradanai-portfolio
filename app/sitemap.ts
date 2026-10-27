import type { MetadataRoute } from "next";
import { projects, siteUrl } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/experience", "/about", "/contact", ...projects.map((project) => `/projects/${project.slug}`)];
  return routes.map((route) => ({ url: `${siteUrl}${route}` }));
}
