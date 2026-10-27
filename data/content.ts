// Every claim here is checked against the résumé, the project repositories, or their commit history.
// Projects without public source say so in `evidence`; nothing is deployed unless `condition` says it is.

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const profile = {
  name: "Pattaradanai Prommanee",
  email: "pattaradanai.pnes@gmail.com",
  phone: "+66 92 992 3653",
  github: "https://github.com/neszaDev",
  location: "Bangkok, Thailand",
  resumePath: "/Pattaradanai_Prommanee_Resume.pdf",
};

export type Shot = { src: string; width: number; height: number; alt: string; title?: string; caption?: string };

export type Credit = "mine" | "team" | "external" | "upstream" | "private";
export type Layer = { name: string; what: string; credit: Credit; creditText: string };

export type Project = {
  slug: string;
  title: string;
  year?: string;
  group: "Product builds" | "Foundations" | "University work";
  summary: string;
  medium: string;
  credit: string;
  condition: string;
  role: string;
  stack: string[];
  links: { label: string; href: string }[];
  evidence: string;
  // Projects without a real screenshot omit hero and show their flow instead.
  hero?: Shot;
  // Projects without screenshots hang an HTML flow diagram instead, so its text stays real and readable on phones.
  flow?: { name: string; note: string; mine?: boolean; base?: boolean }[];
  shots: Shot[];
  context: string[];
  built: string[];
  layers: Layer[];
  decisions: { title: string; body: string }[];
  quality: string[];
};

export const groups = [
  { id: "products", name: "Product builds", note: "Complete products I built end to end on my own time. Neither is deployed; both run locally against a real API." },
  { id: "foundations", name: "Foundations", note: "Public starter repositories the product builds grew out of." },
  { id: "university", name: "University work", note: "Built at Mae Fah Luang University, as part of a capstone team and as a part-time job." },
] as const;

export const projects: Project[] = [
  {
    slug: "aureon-crm",
    title: "Aureon CRM",
    year: "2026",
    group: "Product builds",
    summary: "A multi-tenant CRM for small sales teams: companies, contacts, leads, a deals pipeline, tasks with reminders, reports, and an audit trail, in English, French, and Thai.",
    medium: "Next.js 16, React 19, TypeScript; Spring Boot 3.5 API on Java 21 and PostgreSQL",
    credit: "Web app and API built by Pattaradanai, on his own starter repositories.",
    condition: "Sample product. Runs locally; not deployed.",
    role: "Sole developer: API, database schema, web app, tests, and CI.",
    stack: ["Next.js 16, React 19, TypeScript", "Tailwind CSS 4, shadcn/ui, Recharts", "next-intl (English, French, Thai)", "Spring Boot 3.5, Java 21", "PostgreSQL 17, Flyway", "Vitest, Playwright, axe-core", "Testcontainers", "GitHub Actions, Docker"],
    links: [
      { label: "Web app source", href: "https://github.com/neszaDev/aureon-crm-web/tree/feat/crm" },
      { label: "API source", href: "https://github.com/neszaDev/aureon-crm-api/tree/feat/crm" },
    ],
    evidence: "Reviewed the web app's source, docs, and tests, and the API's public repository and history. All 234 web and 118 API commits on the feat/crm branches are mine (October 2026).",
    hero: { src: "/aureon-board.webp", width: 2880, height: 1606, alt: "Aureon CRM deals board for the fictional Northwind Supply workspace, with deals grouped under Qualification, Needs analysis, Proposal, and Negotiation" },
    shots: [
      { src: "/aureon-dashboard.webp", width: 2128, height: 1508, alt: "Aureon CRM dashboard with open deals, overdue tasks, won and lost totals, and weighted pipeline value", title: "Dashboard", caption: "Open deals, overdue tasks, won and lost totals, and weighted pipeline value." },
      { src: "/aureon-deal.webp", width: 2000, height: 1800, alt: "Aureon CRM deal record panel with its stage track and history", title: "Deal record", caption: "Each deal keeps its stage track and who moved it there." },
      { src: "/aureon-reports.webp", width: 2128, height: 1098, alt: "Aureon CRM won and lost report by month", title: "Reports", caption: "Five reports; every chart has a data table beside it." },
      { src: "/aureon-tasks.webp", width: 2128, height: 1520, alt: "Aureon CRM tasks grouped by due date with the reminders inbox open", title: "Tasks and reminders", caption: "Follow-ups by due date, with in-app reminders." },
    ],
    context: [
      "Small sales teams often track customers in spreadsheets and chat threads, so it is hard to see where a deal stands and who should act next. Aureon puts companies, contacts, leads, deals, and follow-up tasks in one workspace, with a record of who changed what.",
      "It is a sample product, built to prove my starter kit on a realistic domain. The demo data is fictional and the app has not served real customers. Screenshots are real captures of the running app.",
    ],
    built: [
      "A multi-tenant Spring Boot API: workspaces with owner, admin, manager, and sales-rep roles, tenant filtering through Hibernate's @TenantId, and an append-only audit trail.",
      "The PostgreSQL schema, grown through 21 Flyway migrations, including refresh-token families and token versioning.",
      "The Next.js web app: lists whose search, sort, and filters live in the URL, a deals board and list, and record panels that open beside the list.",
      "A dashboard and five reports with Recharts, each chart paired with a data table.",
      "Streaming CSV export, tasks with in-app reminders, light and dark themes, and English, French, and Thai interfaces.",
    ],
    layers: [
      { name: "Browser", what: "React client components. They never see an access or refresh token.", credit: "mine", creditText: "Built by me" },
      { name: "Next.js server", what: "Server actions for writes, typed queries for reads, and a proxy that refreshes sessions and guards routes.", credit: "mine", creditText: "Built by me" },
      { name: "Spring Boot API", what: "71 versioned endpoints described with OpenAPI. Roles and permissions are enforced here; the UI only hides what a role can't do.", credit: "mine", creditText: "Built by me" },
      { name: "PostgreSQL", what: "Tenant-scoped tables with composite foreign keys, versioned by Flyway.", credit: "mine", creditText: "Built by me" },
      { name: "Web scaffold", what: "The Next.js project started from ixartz's open-source Next.js Boilerplate (MIT) by way of my own starter.", credit: "upstream", creditText: "Open-source starting point" },
    ],
    decisions: [
      { title: "Tokens never reach the browser", body: "Access and rotating refresh tokens live in httpOnly cookies, and the Next.js server calls the API on the user's behalf. Concurrent requests share one refresh, so two open tabs don't race the rotation and sign the user out." },
      { title: "A board that works without a mouse", body: "Deals move by drag, by keyboard, or from a “Move to…” menu, with screen-reader announcements. A card moves at once and goes back with a message if the server refuses; dropping a deal on Lost asks for a reason." },
      { title: "Edits can't silently overwrite each other", body: "Every update sends the record's version. If someone saved first, the API answers 409 and the app offers to reload instead of overwriting their change." },
      { title: "Exports that can't be triggered from another site", body: "The CSV export route streams the API's file, refuses cross-site requests using the Sec-Fetch-Site header, and rejects HEAD requests so a prefetch can't start an export." },
    ],
    quality: [
      "API: 104 test files, 59 of them integration tests against a real PostgreSQL through Testcontainers, including a tenant-isolation test. The feature branch's CI passed on October 22 and 24, 2026.",
      "Web: about 200 unit and component test files (Vitest) and 22 Playwright specs that run against the real API, including an axe accessibility baseline and a ten-step user journey.",
      "One CI gate per pull request: commit lint, lint, types, unit, UI, build, dependency audit, end-to-end, visual regression, and a Trivy image scan. On the latest web runs (October 24, 2026) the dependency-audit and end-to-end jobs fail; the rest pass.",
      "Multi-stage Docker images that run as a non-root user. The publish workflows are written but switched off, since nothing is deployed.",
    ],
  },
  {
    slug: "jaiyen-hr",
    title: "Jaiyen HR",
    year: "2026",
    group: "Product builds",
    summary: "A multi-tenant HR and payroll web app for small Thai companies: people and organisation, leave, attendance with location check-in, monthly payroll, and payslips. Thai first, with full English.",
    medium: "Next.js 16, React 19, TypeScript; Spring Boot API in a private repository",
    credit: "Web app built by Pattaradanai. The API is in his private repository and isn't shown.",
    condition: "Learning project. Runs locally; not deployed. Payroll is not for real pay.",
    role: "Built the web app. The companion API is a private repository on my account.",
    stack: ["Next.js 16, React 19, TypeScript", "Tailwind CSS 4, shadcn/ui", "next-intl (Thai, English)", "Leaflet, Recharts", "Vitest, Playwright, axe-core", "GitHub Actions, Docker"],
    links: [],
    evidence: "Reviewed a local copy of the web app's source, docs, and tests; that copy has no git history. The API repository is private and wasn't reviewed for this page.",
    hero: { src: "/jaiyen-hr-employees-list.webp", width: 2880, height: 1800, alt: "Jaiyen HR employees directory for a fictional company: 14 staff with code, department, position, and status, with search and a department filter" },
    shots: [
      { src: "/jaiyen-hr-leave-approvals.webp", width: 2880, height: 1800, alt: "Jaiyen HR leave approvals queue with four waiting requests, each with dates, reason, and Approve and Reject buttons", title: "Leave approvals", caption: "Managers approve or reject requests; half-day leave is counted as 0.5 days." },
      { src: "/jaiyen-hr-attendance-team-today.webp", width: 2880, height: 1800, alt: "Jaiyen HR team attendance for one day, with each employee's present, late, on-leave, or absent status and clock-in time", title: "Team attendance", caption: "Who is in today, who clocked in late and by how much, and who is on leave." },
      { src: "/jaiyen-hr-payroll-run.webp", width: 2880, height: 1800, alt: "Jaiyen HR October payroll run with company totals for gross pay, social security, provident fund, tax, and net pay, above a per-employee table", title: "Payroll run", caption: "A monthly run with company totals and a per-employee breakdown; the table scrolls sideways at this width." },
      { src: "/jaiyen-hr-payslip.webp", width: 2880, height: 1800, alt: "Jaiyen HR payslip with earnings, deductions, and net pay for one employee, with masked ID and bank account numbers", title: "Payslip", caption: "A printable payslip. The “not for real pay” notice is part of the app." },
      { src: "/jaiyen-hr-org-chart.webp", width: 2880, height: 1800, alt: "Jaiyen HR org chart in list view, from the managing director down to each team", title: "Org chart", caption: "Reporting lines with a head count under each manager." },
      { src: "/jaiyen-hr-landing.webp", width: 2880, height: 1800, alt: "Jaiyen HR landing page: People, leave and payroll in one place", title: "Landing page", caption: "The public landing page, in English." },
    ],
    context: [
      "HR software for Thai companies has to follow local rules: Buddhist-era dates, social-security contributions, PND.1 withholding-tax files, and Thai national ID numbers.",
      "Jaiyen HR is a learning project that takes on that domain end to end. Employees, managers, HR admins, and a platform super-admin each get their own view. The in-app screenshots show the web app running locally against a stand-in for its private API, signed in as an HR admin of an invented company; names and payroll figures are sample data.",
    ],
    built: [
      "50 pages: employees with CSV import, departments, positions, an org chart, documents, leave, attendance, payroll runs, payslips, users, audit, and notifications.",
      "A platform console for the super-admin to manage tenants and payroll settings.",
      "Payroll export files for bank transfers, social security (SSO), and PND.1 tax filing.",
      "Clock-in on a map that checks the employee is within range of a work location.",
      "A Thai-first interface with full English, Buddhist-era dates, and API error messages translated into both languages.",
      "Two-step sign-in with authenticator apps: QR-code setup and recovery codes.",
    ],
    layers: [
      { name: "Browser", what: "Client components only. They never call the API directly.", credit: "mine", creditText: "Built by me" },
      { name: "Next.js server", what: "Server actions for every write (72 of them), typed queries for reads, and session refresh in the proxy. API types are generated from its OpenAPI spec.", credit: "mine", creditText: "Built by me" },
      { name: "Spring Boot API", what: "Business rules, payroll, and data. Separate private repository.", credit: "private", creditText: "Private repository, not shown" },
      { name: "Web scaffold", what: "Started from ixartz's open-source Next.js Boilerplate (MIT).", credit: "upstream", creditText: "Open-source starting point" },
    ],
    decisions: [
      { title: "A failed refresh doesn't sign everyone out", body: "Parallel requests rotate the refresh token, so a failed refresh never clears the session outright. A refused session drops only the access cookie, and the next request can recover." },
      { title: "Stale edits are caught", body: "When a record changed after it was loaded, the API answers 412 and the app shows that the record was updated, instead of overwriting it." },
      { title: "Thai IDs are checked before they're sent", body: "National and tax ID numbers are validated in the browser with the official mod-11 check digit." },
      { title: "One distance formula on both sides", body: "The clock-in check uses the same haversine formula and Earth radius as the API, so the map and the server agree about who is in range." },
    ],
    quality: [
      "About 140 unit and component test cases (Vitest) and 28 Playwright spec files with axe accessibility checks.",
      "CI runs commit lint, lint, types, unused-code and translation checks, unit and UI tests, build, and a dependency audit. The end-to-end job is switched off in CI because it needs the private API image.",
    ],
  },
  {
    slug: "starter-kit",
    title: "Full-stack starter kit",
    year: "2026",
    group: "Foundations",
    summary: "Three public starter repositories with one sample product and one sign-in model: a Spring Boot API, a Next.js web app, and a Flutter phone app, so a product can start on all three at once.",
    medium: "Spring Boot and PostgreSQL; Next.js; Flutter",
    credit: "Built by Pattaradanai; the web starter began from an open-source template.",
    condition: "Public templates; not deployed.",
    role: "Sole developer of all three repositories.",
    stack: ["Spring Boot 3.5, Java 21", "PostgreSQL 17, Flyway", "jjwt, bucket4j, springdoc", "Testcontainers, JaCoCo", "Next.js 16, React 19, TypeScript", "Vitest, Playwright, Storybook", "Flutter, Dart, Riverpod, go_router", "GitHub Actions, Docker, GHCR"],
    links: [
      { label: "spring-postgres-boilerplate", href: "https://github.com/neszaDev/spring-postgres-boilerplate" },
      { label: "nextjs-boilerplate", href: "https://github.com/neszaDev/nextjs-boilerplate" },
      { label: "flutter-boilerplate", href: "https://github.com/neszaDev/flutter-boilerplate" },
    ],
    evidence: "Reviewed the three public repositories, their history, and their CI runs on GitHub. All human commits are mine (August to October 2026).",
    hero: { src: "/starter-flutter-overview.png", width: 414, height: 900, alt: "Flutter sample app on a phone: an overview screen with test-result totals and the most recent results" },
    shots: [
      { src: "/starter-flutter-test-results.png", width: 414, height: 900, alt: "Flutter sample app: list of test results with scores", title: "Test results", caption: "The sample product's main list: add, edit, swipe to delete, infinite scroll." },
      { src: "/starter-flutter-phone-features.png", width: 414, height: 900, alt: "Flutter sample app: phone features list with fingerprint, shake, motion sensors, camera, QR scanner, and location", title: "Phone features", caption: "Each phone feature has a working example and asks for permission when it needs it." },
    ],
    context: [
      "Every new product starts with the same weeks of plumbing: sign-in, sessions, roles, an API contract, tests, and a pipeline. I built that plumbing once, for the three platforms I work on, around a small sample product called Marksheet, a report card for test results.",
      "The three repositories share the same screens, texts, and URLs, so one feature can be built on all of them in parallel. Aureon CRM is built on the API and web starters.",
    ],
    built: [
      "API: JWT sign-in with refresh tokens stored on the server, rate limiting, file uploads, OpenAPI docs, and five Flyway migrations.",
      "Web: httpOnly-cookie sessions, a typed API client generated from the API's OpenAPI spec, and end-to-end tests against the real API image.",
      "Phone: an Android and iOS app with a single shared token refresh, tokens kept in Keychain and Keystore, permission-based roles, a biometric app lock, camera, QR scanning, location, and English and French.",
      "CI and CD workflows in each repository that build, test, and publish Docker images to GitHub's container registry.",
    ],
    layers: [
      { name: "Flutter app", what: "Riverpod state, go_router navigation, and a dio client that refreshes once for all waiting requests.", credit: "mine", creditText: "Built by me" },
      { name: "Next.js app", what: "Server actions and a proxy keep tokens out of the browser.", credit: "mine", creditText: "Built by me" },
      { name: "Spring Boot API", what: "Sign-in, roles, rate limits, and files, documented with OpenAPI.", credit: "mine", creditText: "Built by me" },
      { name: "PostgreSQL", what: "Flyway migrations, tested against a real database through Testcontainers.", credit: "mine", creditText: "Built by me" },
      { name: "Web scaffold", what: "The Next.js project started from ixartz's open-source Next.js Boilerplate (MIT).", credit: "upstream", creditText: "Open-source starting point" },
    ],
    decisions: [
      { title: "One contract, three clients", body: "The web app generates its API types from the API's OpenAPI spec, and CI fails when they drift. The phone app checks its models against the same spec." },
      { title: "Integration tests on a real database", body: "API tests run against PostgreSQL in Testcontainers instead of an in-memory stand-in, so migrations and queries are tested the way they run." },
      { title: "Secrets kept where each platform keeps them", body: "Session tokens sit in httpOnly cookies on the web and in Keychain or Keystore on the phone." },
    ],
    quality: [
      "API: 18 test files, unit and Testcontainers integration tests, with JaCoCo coverage and Spotless formatting.",
      "Web: 55 unit and component test files, 8 Playwright end-to-end specs, and visual-regression baselines.",
      "Phone: 83 test files and an integration test.",
      "Current state: the latest main-branch pipelines of the API and web starters failed in October 2026 (the web one on its dependency audit, with a fix waiting on a branch), and the Flutter pipeline has not run yet.",
    ],
  },
  {
    slug: "thaid-wifi-login",
    title: "ThaiD WiFi login",
    year: "2025",
    group: "University work",
    summary: "Campus WiFi sign-in for Mae Fah Luang University that verifies identity with Thailand's ThaiD digital ID and a face scan, then grants network access through Aruba ClearPass.",
    medium: "Next.js 15, React 18; Express 5, TypeScript; MongoDB; Docker Compose, Nginx",
    credit: "Senior project by a team of five. Pattaradanai built the ClearPass integration and the Docker and Nginx setup.",
    condition: "University capstone prototype. Not in service; no automated tests.",
    role: "Team member: network-access integration and deployment setup.",
    stack: ["Next.js 15, React 18, Tailwind CSS", "face-api.js", "Node.js, Express 5, TypeScript", "MongoDB, Mongoose", "Aruba ClearPass API", "Docker Compose, Nginx"],
    links: [{ label: "Public copy of the code", href: "https://github.com/neszaDev/thaiD-face-auth-wifi" }],
    evidence: "Reviewed the public copy's README and code, and the team repository's history: 34 of its 229 commits are mine, covering the ClearPass service, CORS, Nginx, and Docker Compose files.",
    flow: [
      { name: "Device on campus WiFi", note: "Picks the campus or the hospital" },
      { name: "ThaiD sign-in", note: "Government OAuth 2.0 (DOPA)" },
      { name: "Face check", note: "face-api.js turns the face into a 128-number embedding in the browser" },
      { name: "Express API and MongoDB", note: "Matches embeddings stored with AES-256" },
      { name: "Aruba ClearPass", note: "Turns on guest internet access", mine: true },
      { name: "Nginx and Docker Compose", note: "Under every step: Nginx routes /api to the backend, in development and production", mine: true, base: true },
    ],
    hero: { src: "/thaid-campus-landing.webp", width: 828, height: 1792, alt: "MFU-WIFI campus sign-in screen on a phone, with a face-mesh logo and a red Scan Face button" },
    shots: [
      { src: "/thaid-campus-landing.webp", width: 828, height: 1792, alt: "MFU-WIFI campus sign-in screen on a phone, with a face-mesh logo and a red Scan Face button", title: "Captive portal", caption: "What a phone sees after joining the campus WiFi." },
      { src: "/thaid-sign-in.webp", width: 828, height: 1792, alt: "ThaiD identity step with a configuration check and a Sign in with ThaiD button", title: "ThaiD sign-in", caption: "Hands off to the government ThaiD sign-in before the face step." },
      { src: "/thaid-face-scan-in-progress.webp", width: 828, height: 1792, alt: "Face registration screen with a circular camera view, a full progress bar, and a status line sending the face data for checking", title: "Face registration", caption: "The camera here is faked with the app's own cartoon icon; face-api.js still detects it." },
      { src: "/thaid-wifi-connected-success.webp", width: 828, height: 1792, alt: "Registration success screen granting one hour of free WiFi, with a masked citizen ID and a sign-out button", title: "Access granted", caption: "After the ClearPass call, the device gets an hour of guest WiFi." },
      { src: "/thaid-admin-faces-dashboard.webp", width: 2880, height: 1800, alt: "Admin table of registered faces with masked citizen IDs, level badges, campus or hospital location, and Thai-format timestamps", title: "Admin view", caption: "Registered faces by location, with IDs masked." },
    ],
    context: [
      "Guest WiFi on a university campus has to know who is connecting. This project ties network access to Thailand's government digital ID and a face check, for both the campus and the university hospital.",
      "A visitor signs in with ThaiD, registers or scans their face in the browser, and the system then lets their device onto the network. The team stored encrypted face embeddings rather than photos. The screenshots show the team's front end running locally against a mock backend, with masked, invented IDs.",
    ],
    built: [
      "The service that registers a device with Aruba ClearPass and enables guest internet access after a successful scan.",
      "Docker Compose setups for development and production, with Nginx routing /api to the Express backend.",
      "CORS and session fixes between the Next.js front end and the API.",
    ],
    layers: [
      { name: "Next.js front end", what: "Location choice, ThaiD sign-in, face registration and scan. face-api.js turns a face into a 128-number embedding on the device.", credit: "team", creditText: "Built by teammates" },
      { name: "ThaiD", what: "Government OAuth 2.0 sign-in run by the Department of Provincial Administration.", credit: "external", creditText: "Outside service" },
      { name: "Express API and MongoDB", what: "Exchanges the ThaiD code, stores embeddings encrypted with AES-256, and matches returning faces.", credit: "team", creditText: "Built by teammates" },
      { name: "ClearPass integration", what: "Submits the device to Aruba ClearPass and turns on guest access.", credit: "mine", creditText: "Built by me" },
      { name: "Nginx and Docker Compose", what: "Reverse proxy and container setups for development and production.", credit: "mine", creditText: "Built by me" },
    ],
    decisions: [],
    quality: ["No automated test suite or CI; the repository has one manual scan script (backend/test-scan.js). The system ran through Docker Compose, with separate development and production files."],
  },
  {
    slug: "student-loan-application-system",
    title: "Student Loan Application System",
    group: "University work",
    summary: "An online application system for Mae Fah Luang University's Student Loan Fund (กยศ.), with separate entry points for students and university staff.",
    medium: "Vue.js, Node.js, MySQL; Docker, Nginx",
    credit: "Built by Pattaradanai as a university part-time job.",
    condition: "Built for the university; source not public.",
    role: "Full-stack developer, part-time job at Mae Fah Luang University.",
    stack: ["Vue.js 3, Bootstrap 5", "Node.js, Express", "MySQL", "Docker, Nginx"],
    links: [],
    evidence: "Based on my résumé and a local copy of the source (Vue front end and Express API), which isn't public. The screenshots show that front end running locally with its API mocked and invented student data.",
    hero: { src: "/studentloan-staff-review-dashboard.webp", width: 2880, height: 1800, alt: "Staff review table of loan applicants with student ID, name, faculty, program, colour-coded workflow status, notes, and bulk actions" },
    shots: [
      { src: "/studentloan-login-role-select.webp", width: 2880, height: 1800, alt: "Student loan system sign-in with Student and Admin buttons over an aerial photo of the Mae Fah Luang University campus", title: "Sign-in", caption: "Separate entry points for students and staff." },
      { src: "/studentloan-student-application-status.webp", width: 2880, height: 1800, alt: "Student home listing past loan applications by semester with colour-coded status", title: "Student home", caption: "Each semester's application and where it stands." },
      { src: "/studentloan-student-loan-form.webp", width: 2880, height: 1800, alt: "Five-step loan application form on its first step, with education level, faculty, program, and GPAX filled in", title: "Application form", caption: "A five-step form: education, personal details, parents or guardian, confirmation." },
    ],
    context: [
      "Students applying to the Student Loan Fund (กยศ.) submit forms and supporting documents to university staff. This system takes those applications online for Mae Fah Luang University, with one entry point for students and another for staff.",
      "The interface is in Thai. Names and IDs in the screenshots are invented.",
    ],
    built: [
      "The database schema for loan applications and user accounts.",
      "The application in Vue.js and Node.js, including secure handling of applicant data and document uploads.",
      "The deployment, with Docker behind Nginx.",
    ],
    layers: [
      { name: "Vue.js front end", what: "Student and staff entry points and the application forms.", credit: "mine", creditText: "Built by me" },
      { name: "Node.js API", what: "Application data and document uploads.", credit: "mine", creditText: "Built by me" },
      { name: "MySQL", what: "Loan application and user tables.", credit: "mine", creditText: "Built by me" },
      { name: "Docker and Nginx", what: "Containers behind an Nginx reverse proxy.", credit: "mine", creditText: "Built by me" },
    ],
    decisions: [],
    quality: [],
  },
];

// Employer work stays with the employer: title, company, and dates only, by the owner's decision.
export const experience: { period: string; role: string; company: string; location: string; employer: boolean; summary?: string; href?: string }[] = [
  { period: "Apr 2026 – present", role: "Full-Stack Developer", company: "AnyVet", location: "Bangkok", employer: true },
  { period: "Jan – Apr 2026", role: "Full-Stack Developer Intern", company: "iPassion", location: "Bangkok", employer: true },
  {
    period: "Part-time, during university",
    role: "Developer",
    company: "Mae Fah Luang University",
    location: "Chiang Rai",
    employer: false,
    summary: "Built the university's Student Loan Fund application system: schema, application, document uploads, and deployment with Docker and Nginx.",
    href: "/projects/student-loan-application-system",
  },
];

export const education = {
  degree: "Computer Engineering",
  school: "Mae Fah Luang University",
  faculty: "School of Applied Digital Technology",
  honours: "GPA 3.69, First-Class Honours",
};

export const materials = [
  { name: "Languages", items: "TypeScript, JavaScript, Java, Dart, SQL", where: "TypeScript in Aureon CRM, Jaiyen HR, and the Next.js starter; Java in the Aureon API and the Spring starter; Dart in the Flutter starter; SQL in the Flyway migrations" },
  { name: "Web front end", items: "React, Next.js, Vue.js, Tailwind CSS", where: "Next.js and React in both product builds and the Next.js starter; Vue.js in the student loan system" },
  { name: "Back end", items: "Spring Boot, Node.js, Express, REST APIs", where: "Spring Boot in the Aureon API and the Spring starter; Node.js in the student loan system; Express in the ThaiD WiFi login" },
  { name: "Data", items: "PostgreSQL, MySQL, MongoDB", where: "PostgreSQL and Flyway in the Aureon API; MySQL in the student loan system; MongoDB in the ThaiD WiFi login" },
  { name: "Mobile", items: "Flutter", where: "The Flutter starter for Android and iOS" },
  { name: "Testing", items: "Vitest, Playwright, axe-core, Testcontainers", where: "Unit, end-to-end, and accessibility tests in both web apps; integration tests on a real database in the Spring projects" },
  { name: "Delivery", items: "Docker, Nginx, GitHub Actions", where: "Docker images and GitHub Actions pipelines in every recent project; Nginx in the ThaiD WiFi login and the student loan system" },
  { name: "Coursework", items: "Python, PyTorch", where: "A U-Net for brain-tumour MRI segmentation, trained in a university notebook" },
  { name: "Also on my résumé", items: "AWS, Firebase, Google Cloud, Bootstrap", where: "Used before; not part of the projects on this site" },
];
