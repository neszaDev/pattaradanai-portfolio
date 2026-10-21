---
name: Pattaradanai Prommanee Portfolio
description: A friendly product-showcase portfolio for a practical early-career full-stack developer.
colors:
  ink: "#10203a"
  muted: "#5f708a"
  line: "#dce5ef"
  paper: "#fbfcfe"
  surface: "#ffffff"
  sky: "#eaf3ff"
  sky-strong: "#d8eaff"
  blue: "#2563eb"
  blue-dark: "#1d4ed8"
  navy: "#172b48"
  green: "#3e9c72"
  coral: "#e17a62"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(3.1rem, 4.7vw, 4.8rem)"
    fontWeight: 700
    lineHeight: 0.98
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 4vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.02
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  control: "10px"
  card: "16px"
  feature: "18px"
  visual: "20px"
  pill: "999px"
spacing:
  shell: "min(calc(100% - 64px), 1200px)"
  section: "clamp(86px, 10vw, 128px)"
components:
  primary-button:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
    minHeight: "46px"
  outline-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    minHeight: "46px"
  project-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "16px"
---

# Design System: Friendly Product Showcase

## Overview

The portfolio is an Experience-mode surface with a recruiter-friendly front door. It should feel like a clear product showcase: the person, the work, and the route to contact are understandable in one scan.

The redesign replaces the old oversized editorial hero and dark workspace card with a tighter white shell, a compact blue workflow illustration, visual project placeholders, and section-level proof. Palakorn’s portfolio was used as visual inspiration for its friendly product-showcase rhythm and clear project scanning. Its copy, identity, routes, and assets are not reused.

## Visual direction

- White and cool-paper canvas with dark ink for hierarchy.
- Blue carries actions, active navigation, focus, and readable emphasis.
- Navy provides one high-contrast experience band.
- Coral and green appear only inside honest illustrative placeholders.
- Project visuals are code-native SVG placeholders because no verified screenshots were supplied.
- Cards use restrained 16px rounding; large surfaces use 18–20px rounding only where the visual needs a friendly container.
- Avoid gradients, fake metrics, decorative emoji, and terminal cosplay.

## Layout

The shared shell is a centered `1200px` content column with `32px` desktop gutters and `16px` mobile gutters. The header is sticky and route-first. Desktop navigation shows Overview, About, Projects, Experience, and Contact. Mobile navigation collapses to a labelled menu button.

The overview page leads with a concise two-column hero: statement and actions on the left, an honest workflow illustration on the right. Education and location facts live on About, keeping the homepage focused on work and next actions. Selected project cards, current experience, and a contact close follow in the same page so recruiters do not need to guess where proof lives.

Inner routes use a compact title band with a short description and factual scan rail. About combines narrative, a profile placeholder, education, working style, skills, and workflow. Projects use visual cards with contribution-first copy. Experience uses a timeline list. Contact uses one clear CTA and ruled contact rows.

Responsive rules:

- At `980px`, narrative columns stack and project cards reduce to two columns.
- At `760px`, desktop navigation becomes a mobile menu and summary strips stack.
- At `560px`, project cards, skills, and workflow cells become single/two-column mobile compositions.

## Type

Manrope is the display and reading font. IBM Plex Mono is reserved for short metadata: dates, route facts, technology tags, and placeholder labels. Body copy stays at readable size with a `65–75ch` maximum where paragraphs are long.

## Interaction and accessibility

- Internal navigation uses `next/link` and real paths.
- Buttons and menu controls meet a 44px touch target.
- Focus is visible with a blue outline and offset.
- Placeholder visuals have descriptive accessible labels.
- Hover lift is restrained and never required for meaning.
- `prefers-reduced-motion` removes meaningful transitions and smooth scrolling.
- Email, phone, GitHub, and resume actions remain direct links.

## Content rules

Keep all career claims, dates, qualifications, skills, and project details grounded in the supplied resume and personal context. Employer work stays high-level. Never add customer data, proprietary screenshots, unverified outcomes, or project URLs that were not supplied.
