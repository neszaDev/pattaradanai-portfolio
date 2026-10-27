# Pattaradanai Prommanee Portfolio

A static portfolio built with Next.js (App Router) and TypeScript, styled with one plain CSS file: a dark product-launch look in Hanken Grotesk with an amber accent and light motion. Each project shows a real screenshot, its stack and status, and which part I built.

## Routes

| Route | Content |
|---|---|
| `/` | Name and positioning, contact links, three featured projects, experience |
| `/projects` | Every project, grouped as product builds, foundations, and university work |
| `/projects/[slug]` | Case study: context, what I built, a layer-by-layer credit list, decisions, testing |
| `/experience` | Roles (employers as title and dates only) and education |
| `/about` | How I work, tools mapped to the projects that use them, education |
| `/contact` | Email, phone, GitHub, résumé |

Old URLs redirect permanently: `/project/:slug` → `/projects/:slug`, and `/about/education` and `/about/skills` → `/about` (see `next.config.ts`).

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

Every route is prerendered at build time; there is no server code, database, or environment secret.

## Deploy to Vercel (Hobby)

1. Import the repository in Vercel. The detected Next.js defaults work as they are.
2. Optional: set `NEXT_PUBLIC_SITE_URL` (for example `https://your-domain.com`) once you have a custom domain. Without it, canonical URLs, the sitemap, and `robots.txt` use Vercel's production URL automatically (`VERCEL_PROJECT_PRODUCTION_URL`), and local builds use `http://localhost:3000`.

Images go through Next.js image optimisation, which is included in the Hobby plan's limits; the site ships about a dozen images.

## Editing content

All copy lives in `data/content.ts`:

- `projects`: one record per case study. A new record creates `/projects/<slug>`, adds it to the projects page and the sitemap, and joins the previous/next navigation. Every claim should be checkable against a repository or the résumé; say what was reviewed in `evidence`.
- `experience`, `education`, `materials` (tools and where they appear), and `profile` (contact details).

Screenshots live in `public/`. Each one carries a note of where it came from (embedded in the image, or in a `.json` file beside WebP images).

The design system is documented in `DESIGN.md`; product context is in `PRODUCT.md`.
