---
name: Pattaradanai Prommanee Portfolio
description: An editorial engineering archive for a practical full-stack developer.
colors:
  ink: "#10203a"
  muted: "#61708a"
  line: "#d9e4f1"
  paper: "#f8fbff"
  paper-strong: "#edf5ff"
  electric-blue: "#2563eb"
  electric-blue-strong: "#1d4ed8"
  rust: "#c56a42"
  blue-pale: "#eaf2ff"
  surface: "#ffffff"
  status-green: "#49a66a"
  project-blue: "#e6f5fb"
  project-rust: "#f0e5de"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 8vw, 7.2rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.065em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 4.8vw, 5rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.06em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(1.7rem, 2.4vw, 2.45rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  pill: "999px"
  dot: "50%"
spacing:
  xs: "6px"
  sm: "9px"
  md: "14px"
  lg: "18px"
  xl: "24px"
  section: "clamp(88px, 12vw, 150px)"
components:
  button-accent:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "48px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "48px"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 0 4px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "0 9px"
    height: "25px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "23px"
---

# Design System: Pattaradanai Prommanee Portfolio

## Overview

**Creative North Star: "The Friendly Engineering Portfolio"**

This is an Experience-mode portfolio with a recruiter-friendly front door: the work and the person should be easy to understand in under a minute. The composition borrows from a light editorial portfolio and a product showcase—large declarative headlines, friendly blue surfaces, compact metadata, visual project placeholders, and clear routes to experience, projects, and contact.

The visual system is bright, calm, and practical. Cool paper and dark ink establish the field; electric blue carries action and active navigation; rust adds a warmer project counterpoint. Rounded surfaces and soft shadows make the interface approachable without becoming decorative. Manrope gives the page a contemporary, humane reading voice, while IBM Plex Mono marks system labels, navigation, dates, stacks, and other evidence-like metadata.

**Key Characteristics:**

- Experience-mode portfolio with a recruiter-friendly project showcase
- Cool paper field, dark ink, clear electric-blue accent, and rust support
- Oversized page titles with a quick-scan rail
- Visual project placeholders, compact tags, timeline experience, workflow strip, and contact close
- Soft rounded surfaces with responsive motion and visible keyboard focus

## Colors

The palette is paper-first and low-noise: dark ink carries hierarchy, cool paper neutrals create separation without cards floating, and the two accents are used as signals rather than decoration.

### Primary

- **Restrained Electric Blue** (`{colors.electric-blue}`): action fill, small directional icons, selection, and high-salience emphasis.
- **Deep Electric Blue** (`{colors.electric-blue-strong}`): readable accent text, focus outlines, links, and status-adjacent details.

### Secondary

- **Rust Support** (`{colors.rust}`): a warm project-world counterpoint; use sparingly for supporting project surfaces and never as the dominant page accent.

### Neutral

- **Dark Ink** (`{colors.ink}`): primary text, dark feature surface, strong button, and high-contrast anchors.
- **Muted Slate** (`{colors.muted}`): supporting copy, metadata, and quiet navigation.
- **Paper** (`{colors.paper}`): page canvas and default card surface.
- **Paper Strong** (`{colors.paper-strong}`): project band and tonal section separation.
- **Rule Gray** (`{colors.line}`): borders, dividers, timeline lines, and structural rules.
- **Status Green** (`{colors.status-green}`): the small availability pulse only.
- **Project Blue Wash** (`{colors.project-blue}`): the blue project-card surface.
- **Project Rust Wash** (`{colors.project-rust}`): the rust project-card surface.
- **Friendly Blue Wash** (`{colors.blue-pale}`): page-intro and home-hero surfaces.
- **White Surface** (`{colors.surface}`): project cards, route guide, and controls.
- **Workspace Surface** (`#15212c`): the illustrative engineering panel in the hero.
- **Workspace Deep** (`#0d1720`): the terminal footer inside the engineering panel.
- **Workspace Line** (`#2d3a45`): borders inside the dark engineering panel.

### Named Rules

**The Accent Scarcity Rule.** Blue is a signal: reserve it for action, direction, status, selection, and readable emphasis. Do not turn the page into a blue brand field.

## Typography

**Display Font:** Manrope (with Arial, sans-serif fallback)

**Body Font:** Manrope (with Arial, sans-serif fallback)

**Label/Mono Font:** IBM Plex Mono (with monospace fallback)

**Character:** Manrope keeps the portfolio direct, modern, and readable while its tight display tracking gives the hero and section titles an editorial edge. IBM Plex Mono makes metadata feel operational and evidence-based without making the page look like a terminal.

### Hierarchy

- **Display** (600, `clamp(3.5rem, 8vw, 7.2rem)`, 0.94): the oversized hero statement; dense, left-led, and allowed to dominate the first viewport.
- **Headline** (600, `clamp(2.4rem, 4.8vw, 5rem)`, 0.98): section titles and the contact close.
- **Title** (600, `clamp(1.7rem, 2.4vw, 2.45rem)`, 0.98): project names and experience roles.
- **Body** (400, `1rem`, 1.6): explanatory copy, with narrower measures for comfortable scanning; ledes may step up in size for emphasis.
- **Label** (500, `12px`, 1.4, `0.04em`): mono navigation, buttons, tags, dates, section eyebrows, and system metadata. Uppercase is reserved for short labels.
- **Workspace micro-label** (400-500, `10px`): mono file names, language markers, and illustrative terminal status inside the hero panel.

### Named Rules

**The System Label Rule.** Use IBM Plex Mono for interface evidence—navigation, status, dates, stack tags, and labels—not for long-form reading.

## Layout

The portfolio uses a shared sticky shell with five focused static routes: Overview, About, Projects, Experience, and Contact. Each route keeps the same visual language while showing only the content needed for that task. The shared shell is centered at a maximum width of `1180px`, with `48px` side gutters on larger screens and `32px` on small screens.

The desktop composition is intentionally asymmetric. The hero, section headings, about content, skills, and contact use a broad left column with a quieter right rail, typically separated by a generous `10%` column gap. The hero begins with large top breathing room (`clamp(96px, 14vw, 180px)`) and ends in a mono scroll rule. Projects use three equal cards; experience uses a metadata column against a larger narrative column; workflow uses a seven-step rule strip.

At `900px` and below, multi-column narrative layouts stack, projects become a single column, and the workflow strip becomes four columns with wrapped rules. At `768px` and below, desktop navigation is replaced by the menu button. At `640px` and below, the shell tightens, hero actions stack, experience metadata moves above its content, skills become one column, the workflow becomes two columns, and the footer stacks. Anchored sections keep a `96px` scroll offset for the sticky header.

## Elevation & Depth

The system is flat by default. Depth comes from paper-tonal shifts, dark ink panels, thin borders, and whitespace rather than persistent shadows. Project cards may lift on hover with a restrained upward translation and ambient shadow; this is a state cue, not a general surface treatment. The sticky header uses a translucent paper mix and blur to preserve context while scrolling.

### Named Rules

**The Flat Archive Rule.** Let rules, tonal paper, and spacing create structure. Shadows appear only as a subtle interactive response on project cards.

## Shapes

The form language is friendly and structured: buttons, hero panels, project cards, and page intros use generous rounded corners (`18px`), soft shadows, and visible one-pixel rules. Tags remain compact pills (`999px`) to read as metadata rather than controls. Status indicators are circular, and focus rings are deliberately more visible than resting borders.

## Components

### Buttons

- **Shape:** square, bordered, and compact (`0px` radius).
- **Primary:** electric-blue fill with dark-ink text, `48px` minimum height, and `18px` horizontal padding.
- **Dark:** dark-ink fill with paper text for the header resume action and mobile resume action.
- **Hover / Focus:** hover lifts the button by `2px`; the accent fill brightens slightly. All interactive controls receive the shared visible focus ring: deep electric blue, `3px`, with `4px` offset.
- **Responsive:** the mobile menu button is a square `48px` control with a transparent fill and rule-gray border.

### Chips

- **Style:** compact mono labels with a transparent background, muted text, and a light rule-gray border.
- **State:** tags are descriptive, not filter controls; keep them short, wrap them naturally, and preserve the pill silhouette.

### Cards / Containers

- **Corner Style:** square (`0px`).
- **Background:** default paper, blue-wash, rust-wash, or dark ink by project accent.
- **Border:** one-pixel structural border; use the accent's supporting border tint where the card has a colored surface.
- **Internal Padding:** `23px` on project cards, with the contribution block pushed toward the bottom to keep the three-card rhythm stable.
- **Signature:** project cards lead with mono index/type metadata, move into a large title and description, then close with contribution, details, and stack tags.

### Navigation

- **Desktop:** sticky translucent paper header with a mono `PP / 26` brand mark, quiet route links, and a dark resume button.
- **Mobile:** a square menu control reveals a stacked navigation panel with generous `44px` link targets and the resume action below.
- **States:** links shift from muted slate to dark ink on hover; focus remains explicit and never relies on color alone.

### Timeline / Experience List

Use a thin top-and-bottom ruled list. Mono period and location metadata sit in a narrow left column; the role, company accent, summary, and bullets occupy the right. On small screens the metadata becomes the first row.

### Workflow Strip

Seven numbered cells—Understand, Design, Implement, Test, Debug, Review, Deploy—turn the working method into a visible horizontal sequence. Each cell uses a structural divider, mono index, bold step name, and a small blue directional icon except the final step.

### Contact Close

Finish with a large Manrope invitation on the left and a ruled list of email, GitHub, location, and phone links on the right. Keep link rows at least `60px` high, use mono labels, and reserve blue for the trailing directional icon.

### Engineering Workspace Panel

The hero panel is an illustrative visual cue for the developer workflow, not a live build report. Keep its dark surface compact, use multiline code with readable contrast, and label status copy as a sample or verification reminder rather than implying a deployment has just run.

## Do's and Don'ts

### Do:

- **Do** let the artifact lead: use oversized left-led statements, quiet metadata, and generous paper around evidence.
- **Do** use thin rules, tonal paper shifts, and whitespace to make hierarchy visible before adding decoration.
- **Do** keep Manrope for display/body reading and IBM Plex Mono for concise system labels.
- **Do** keep electric blue scarce and purposeful; use rust as a supporting project note.
- **Do** preserve the responsive narrative: stack columns at `900px`, switch navigation at `768px`, and tighten the composition at `640px`.
- **Do** provide semantic structure, descriptive link labels, keyboard-visible focus, accessible contrast, and reduced-motion support.

### Don't:

- **Don't** introduce gradients, glassy cards, rounded panels, or decorative imagery that compete with the archive composition.
- **Don't** turn tags into noisy controls or use mono for paragraphs and long-form copy.
- **Don't** use the electric-blue accent as a full-page background or on every interactive element.
- **Don't** hide keyboard focus, remove the sticky-header scroll offset, or depend on hover-only meaning.
- **Don't** animate layout or scrolling when `prefers-reduced-motion: reduce` is active; transitions collapse to near-zero duration.
