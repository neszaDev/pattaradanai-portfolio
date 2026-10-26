# Pattaradanai Prommanee Portfolio

Production-ready, static-first portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

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

## Deploy to Vercel

Import this repository into Vercel. The default Next.js settings work without environment variables, a database, or a server-side contact form.

The public resume lives at `/Pattaradanai_Prommanee_Resume.pdf` and is linked from the header and hero.

Set `NEXT_PUBLIC_SITE_URL` in Vercel after choosing the final domain. It powers sitemap and robots URLs; local development falls back to `http://localhost:3000`.

Project content lives in `data/content.ts`. Add a project slug and its verified case-study fields to create static `/project/[slug]` and backwards-compatible `/projects/[slug]` pages. Local screenshots belong in `public/` and are referenced from the project record.
