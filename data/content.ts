export const profile = {
  name: "Pattaradanai Prommanee",
  shortName: "Pattaradanai",
  title: "Full-Stack Developer",
  descriptor: "Web & mobile engineering",
  email: "pattaradanai.pnes@gmail.com",
  phone: "+66 92 992 3653",
  github: "https://github.com/neszaDev",
  location: "Bangkok, Thailand",
  resumePath: "/Pattaradanai_Prommanee_Resume.pdf",
};

export const skillGroups = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Java", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap"] },
  { label: "Backend", items: ["Node.js", "Express.js", "Spring Boot", "REST APIs"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { label: "Cloud & DevOps", items: ["Docker", "Nginx", "AWS", "Firebase", "Google Cloud", "CI/CD", "Git"] },
  { label: "Mobile", items: ["Flutter"] },
];

export type ProjectScreenshot = { src: string; alt: string; caption: string };

export type Project = {
  slug: string;
  index: string;
  title: string;
  type: string;
  category: string;
  period?: string;
  description: string;
  contribution: string;
  details: string[];
  stack: string[];
  accent: string;
  thumbnail?: string;
  screenshots?: ProjectScreenshot[];
  problem: string;
  role: string;
  challenge: string;
  learning: string;
  features: string[];
  architecture: string;
  liveUrl?: string;
  repositoryUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "student-loan-application-system",
    index: "01",
    title: "Student Loan Application System",
    type: "Mae Fah Luang University · university project",
    category: "University project",
    period: "University part-time project",
    description: "A loan application portal that separates student and administrator entry points and supports university funding workflows.",
    contribution: "Owned the application from schema design through deployment.",
    details: ["Designed loan and user data models", "Implemented secure file uploads", "Deployed with Docker and Nginx"],
    stack: ["Vue.js", "Node.js", "MySQL", "Docker", "Nginx"],
    accent: "blue",
    thumbnail: "/student_loan.png",
    screenshots: [{ src: "/student_loan.png", alt: "Student loan system landing screen with Student and Admin entry points over the Mae Fah Luang University campus", caption: "The entry screen routes students and administrators into the loan workflow." }],
    problem: "A university loan workflow needed a clear entry point for students and administrators, plus a structured way to collect application data and supporting documents.",
    role: "Full-stack developer on a university part-time project.",
    challenge: "The system had to handle structured application data alongside file uploads and a deployable runtime.",
    learning: "Designing the data model early made the later application and deployment work easier to reason about.",
    features: ["Separate student and administrator entry points", "Loan application data and user records", "Supporting document uploads", "Docker and Nginx deployment"],
    architecture: "Vue.js on the frontend, Node.js for the application layer, MySQL for loan and user data, and Docker/Nginx for deployment.",
  },
  {
    slug: "aureon-crm",
    index: "02",
    title: "Aureon CRM",
    type: "Independent product project",
    category: "CRM platform",
    period: "Current project",
    description: "A multi-user CRM workspace for companies, contacts, leads, deals, tasks, reminders, reports, and audit history.",
    contribution: "Built the CRM frontend across the workspace shell, record flows, pipeline board, and typed API integration.",
    details: ["Workspace roles for owners, admins, managers, and sales reps", "Deals board and list with stage history and ownership", "Dashboard, five reports, tasks, reminders, CSV export, and audit trail"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL"],
    accent: "ink",
    thumbnail: "/aureon-crm-landing.png",
    screenshots: [
      { src: "/aureon-crm-landing.png", alt: "Aureon CRM landing-page capture showing the product hero and deals workspace", caption: "The Aureon landing page introduces the CRM workspace with its deal status story and the board where stages, owners, values, and movement stay visible." },
      { src: "/aureon-dashboard.webp", alt: "Aureon CRM dashboard with open deal counts, won and lost totals, and pipeline value", caption: "The dashboard summarizes open deals, overdue tasks, won/lost totals, and weighted pipeline value." },
      { src: "/aureon-deal.webp", alt: "Aureon CRM deal detail panel showing a deal track and stage history", caption: "A deal record preserves its stage track and the history of who moved it." },
      { src: "/aureon-reports.webp", alt: "Aureon CRM won and lost report with month-by-month results", caption: "Reports turn pipeline activity into views for pipeline, won/lost, funnel, activities, and follow-ups." },
      { src: "/aureon-tasks.webp", alt: "Aureon CRM task list grouped by due date with the reminders inbox", caption: "Tasks and reminders keep follow-up work connected to the rest of the workspace." },
    ],
    problem: "Small and medium-sized teams need one place to track relationships, opportunities, follow-ups, and the history behind each deal.",
    role: "Frontend developer on an independent product project, working across the CRM shell, record workflows, and typed API integration.",
    challenge: "The app coordinates role-based workspaces, URL-driven list state, keyboard-friendly deal movement, reminders, exports, and three languages without exposing backend tokens to the browser.",
    learning: "A shared record model and URL-based state make a CRM easier to navigate, test, and share across a team.",
    features: ["Workspace roles for owners, admins, managers, and sales reps", "Companies, contacts, leads, and deals with searchable lists and lead conversion", "Deals board and list with stage history, ownership, and filters", "Tasks with in-app reminders, activities, dashboard, five reports, CSV export, and audit trail", "English, French, and Thai interfaces with light and dark themes"],
    architecture: "Next.js App Router and React render the frontend. Server actions and typed queries communicate with a Spring Boot API backed by PostgreSQL; access and refresh tokens stay in httpOnly cookies, and API types come from OpenAPI.",
  },
  {
    slug: "jaiyen-hr",
    index: "03",
    title: "Jaiyen HR",
    type: "Independent product project",
    category: "HR platform",
    period: "Jan 2026 — Apr 2026",
    description: "A multi-tenant HR platform for Thai companies, covering people, organisation, documents, leave, attendance, payroll runs, payslips, and exports.",
    contribution: "Worked across web interfaces, Flutter self-service flows, typed APIs, authentication, and data integration.",
    details: ["People, organisation, onboarding, and employee documents", "Leave approvals, attendance corrections, payroll runs, and payslips", "Thai-first interface, English support, and Buddhist-era dates"],
    stack: ["Next.js", "React", "Tailwind CSS", "Flutter", "Spring Boot", "PostgreSQL"],
    accent: "rust",
    thumbnail: "/jaiyen-hr-landing.png",
    screenshots: [
      { src: "/jaiyen-hr-landing.png", alt: "Jaiyen HR landing page describing employee, manager, and payroll workflows", caption: "The landing screen frames the product around employee details, manager approvals, and monthly payroll." },
      { src: "/jaiyen-hr-attendance-leave.png", alt: "Jaiyen HR public feature view showing location-aware clock-in and approved annual leave", caption: "Employees can clock in near a work location, while leave requests show approval status and the remaining annual-leave balance." },
      { src: "/jaiyen-hr-payslip-language.png", alt: "Jaiyen HR public feature view showing a payslip and a Thai-language leave request", caption: "Monthly payslips keep salary, overtime, deductions, and net pay clear, while the product supports complete Thai and English workflows with Buddhist-era dates." },
    ],
    problem: "Thai companies need one tenant-safe place for employee records and organisation data, employee self-service, approvals, attendance, and monthly payroll.",
    role: "Full-stack developer intern working across Next.js, Flutter, Spring Boot APIs, authentication, and database integration.",
    challenge: "The system had to keep tenant boundaries and backend authorization authoritative while supporting employees, managers, HR admins, and platform super admins across Thai payroll rules and Buddhist-era dates.",
    learning: "Working across web, mobile, and Spring Boot made the product boundaries clearer: shared rules belong in the backend, while each client stays focused on its workflow.",
    features: ["Multi-tenant companies, onboarding, people, organisation, and employee documents", "Leave types, balances, requests, approvals, calendars, attendance, corrections, and overtime", "Monthly payroll runs, payslips, bank/SSO/PND.1 exports, and payroll locking", "Role-based access for employees, managers, HR admins, and super admins", "Thai-first and English interfaces with Buddhist-era date support and two-step sign-in"],
    architecture: "Next.js App Router and React provide the web frontend, with Flutter used for mobile self-service. Server components, actions, and typed queries communicate with a Spring Boot API backed by PostgreSQL; authentication uses JWT and rotating refresh tokens in httpOnly cookies.",
  },
];

export const experience = [
  {
    period: "Apr 2026 — Present",
    role: "Full-Stack Developer",
    company: "AnyVet",
    location: "Bangkok, Thailand",
    summary: "Contributing across a veterinary software platform where product, API, and data changes meet real clinic workflows.",
    bullets: [
      "Delivered features across inventory, purchasing, POS/tax, subscriptions, reporting, and clinical workflows.",
      "Implemented backend APIs and business rules for search, pagination, VAT, stock availability, purchase-order history, and subscription grace periods.",
      "Built reusable Next.js and React interfaces, then traced issues end to end to resolve data-integrity gaps.",
      "Contributed to role-based access, hospital-wide 2FA, privacy-by-default consent, CI fixes, and dependency security remediation.",
    ],
  },
  {
    period: "Jan 2026 — Apr 2026",
    role: "Full-Stack Developer Intern",
    company: "iPassion Co., Ltd.",
    location: "Bangkok, Thailand",
    summary: "Worked on an HR management system and supported delivery across web, mobile, API, and database layers.",
    bullets: [
      "Developed web applications with Next.js, React, and Tailwind CSS.",
      "Built Flutter mobile applications for employee self-service and attendance tracking.",
      "Implemented Spring Boot REST APIs, authentication, business logic, and database integration.",
      "Participated in testing, bug fixing, and deployment processes.",
    ],
  },
];

export const workflow = ["Understand", "Design", "Implement", "Test", "Debug", "Review", "Deploy"];
