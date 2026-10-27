# Design

Dark "product launch" style.

- **Type:** Hanken Grotesk (via `next/font`), 16px body, 800-weight headlines with tight tracking.
- **Color:** near-black `#0d0f14` with a soft spotlight at the top, panels `#141824`, hairlines `#242a3b`, text `#eceef4`, muted `#a9afc1`. Amber `#ffb547` for primary buttons, focus, active nav and the accent word in the hero.
- **Home:** pill with name and role, headline, two buttons, then a 3D-tilted stack of real screenshots (CRM board, HR app, phone app) that fans out on hover; a four-project quick strip; project cards; experience rows; a contact band.
- **Cards:** screenshot inset in a rounded panel, title and year, summary, up to four stack tags, status line. Whole card is the link; hover lifts it.
- **Motion:** staggered rise on load, screenshots "dealt" into place, scroll-driven reveal for sections (Chromium; elsewhere content is simply visible), hover lifts. All motion off with `prefers-reduced-motion`.
- **Breakpoints:** 960px stacks the hero; 760px single-column cards and rows; 480px single-column strip and facts.
