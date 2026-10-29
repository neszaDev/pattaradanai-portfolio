# Content evidence

Where every public claim in `data/content.ts` comes from, checked on 2026-10-26. Re-check the counts before changing the copy; they drift as the repositories change.

- **Verified**: read in source, docs, commit history, CI runs, or stated by the owner (résumé, or in conversation).
- **Interpretation**: a cautious reading of the evidence, worded on the site so it does not overclaim.
- **Unknown**: not stated on the site.

Employer roles (AnyVet, iPassion) list the highlights from the published résumé, by the owner's decision (2026-10-29). Company repositories (AnyVet, PIMS, HRMS) were not used.

## Aureon CRM

Sources: local copy of `aureon-crm-web` (feat/crm, no `.git`), GitHub `neszaDev/aureon-crm-web` and `neszaDev/aureon-crm-api` on `feat/crm`.

Verified
- Web: 234 commits ahead of `main`, all by Pattaradanai Prommanee; API: 118 commits ahead, all his, 2026-10-17 to 2026-10-24.
- Next.js 16, React 19, TypeScript; locales en, fr, th; 71 `/api/v1` paths in `src/libs/api/schema.d.ts`; five reports (Activity, Follow-up, Funnel, Pipeline, Won/lost) with `ChartTable`.
- Tokens in httpOnly cookies with shared refresh (`src/proxy.ts`); dnd-kit board with keyboard and "Move to…" (`DealBoard.tsx`); version/409 handling (`AGENTS.md`); CSV export route with `Sec-Fetch-Site` and HEAD refusal.
- Web tests: 201 unit/UI test files, 22 Playwright specs, `Journey.e2e.ts` with 10 `test.step`s, axe checks.
- Web CI on 2026-10-24: Security audit and "E2E, accessibility & visual" failed; lint/types, unit, UI, build passed.
- API: Spring Boot 3.5.16, Java 21, PostgreSQL with Testcontainers; 21 Flyway migrations incl. V19 refresh-token families and V20 token version; `@TenantId` on `WorkspaceOwnedEntity`; append-only audit (`AuditEvent`, non-updatable columns); `TenantIsolationIT`, `OpenApiIT`; 104 test files (59 `*IT`, 41 `*Test`, 4 support).
- API CI on `feat/crm` succeeded 2026-10-22 and 2026-10-24.
- Sample product, not deployed (README, PRODUCT.md); screenshots are Playwright captures of fictional demo data.

Interpretation
- "Sole developer": all commits on both feature branches are his; base scaffold from his own starters and, for the web app, ixartz's Next.js Boilerplate (MIT, credited).

## Jaiyen HR

Sources: local copy `hr-web-dev` (no `.git`); GitHub lists `hr-web` and `hr-api` as private repositories on the owner's account. The owner confirmed both are his personal project.

Verified
- 50 `page.tsx` routes; 72 exported server actions in 18 files; locales th and en.
- `PayrollExport.ts` (bank, social-security, pnd1); `ThaiId.ts` mod-11 check; `Geo.ts` haversine with the backend's Earth radius; 412 stale handling (`Stale.ts`); TOTP 2FA (`TwoFactorActions.ts`).
- 35 unit/UI test files with 141 cases; 28 Playwright specs; e2e job disabled in CI ("TEMPORARILY DISABLED").
- Learning project, not deployed; payroll not for real pay (PRODUCT.md).
- Screenshots are from its public landing page; the panels there are labelled SAMPLE.

Interpretation
- Buddhist-era dates: dates go through next-intl `format.dateTime` with the Thai locale (Buddhist calendar by default), plus explicit handling in the tax table.

Unknown
- The API's code (private, not reviewed); shown as "Private repository, not shown".

## Full-stack starter kit

Sources: GitHub `spring-postgres-boilerplate`, `nextjs-boilerplate`, `flutter-boilerplate` (all public).

Verified
- Spring: migrations V1–V5 (refresh tokens, stored files); 18 test files (8 `*IT`, 9 `*Test`); rate limiting package; `CI/CD - main` failed 2026-10-20.
- Next.js: 55 test files, 8 e2e specs, visual baselines; `CI/CD - main` failed 2026-10-20 on "Security audit"; fix branch `fix/source-map-js-advisory` passed 2026-10-21, not merged.
- Flutter: Riverpod, go_router, dio, flutter_secure_storage, local_auth, mobile_scanner, geolocator; 83 test files + 1 integration test; no CI runs yet.
- All human commits are the owner's (August–October 2026).

## ThaiD WiFi login

Sources: public re-upload `thaiD-face-auth-wifi` (1 commit) and the private team repository `senior_project` history.

Verified
- Team of five contributors; 34 of 229 commits are the owner's (student account), touching `clearpassService.ts`, `corsMiddleware.ts`, `nginx.conf`, and Docker Compose files.
- Architecture and flow from the README: ThaiD OAuth 2.0, face-api.js embeddings, AES-256-CBC, Aruba ClearPass, Nginx, Docker Compose.
- No automated test suite or CI (one manual `backend/test-scan.js`).
- The diagram on the site is drawn from the README, not a screenshot.

## Student Loan Application System

Sources: résumé and one screenshot.

Verified (owner-stated)
- Vue.js, Node.js, MySQL, Docker, Nginx; schema design; secure data handling and uploads; deployment (résumé).

Unknown
- Source code and dates; the site says so.

## Not featured

- `HR/` (HRMS): company-related, excluded by the owner.
- Rent-Room-Project (early coursework), `Resume` job-search CLI (personal data, very new), rj-international (client mockup, private), line-bot (empty), the Tunnel workshop (third-party code).
