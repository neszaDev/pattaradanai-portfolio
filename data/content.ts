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

export const projects = [
  {
    index: "01",
    title: "Student Loan Application System",
    type: "Independent university project",
    description:
      "A full-stack application for managing student loan applications, user data, and supporting documents.",
    contribution: "Owned the application from schema design through deployment.",
    details: ["Designed loan and user data models", "Implemented secure file uploads", "Deployed with Docker and Nginx"],
    stack: ["Vue.js", "Node.js", "MySQL", "Docker", "Nginx"],
    accent: "blue",
  },
  {
    index: "02",
    title: "Veterinary Platform Work",
    type: "AnyVet · professional experience",
    description:
      "Product features across inventory, purchasing, POS and tax, subscriptions, reporting, and clinical workflows.",
    contribution: "Worked across Next.js interfaces, backend APIs, business rules, and data integrity.",
    details: ["Search, pagination, VAT, and stock availability", "Reusable forms, tables, and modals", "Access control, privacy, CI, and dependency security"],
    stack: ["Next.js", "React", "APIs", "Business rules"],
    accent: "ink",
  },
  {
    index: "03",
    title: "HR Management System",
    type: "iPassion · internship",
    description:
      "Web and mobile workflows for attendance, overtime, leave requests, and financial requests.",
    contribution: "Built interfaces, mobile self-service flows, APIs, authentication, and database integration.",
    details: ["Next.js, React, and Tailwind CSS web UI", "Flutter employee self-service app", "Spring Boot REST APIs and deployment"],
    stack: ["Next.js", "Flutter", "Spring Boot", "REST APIs"],
    accent: "rust",
  },
];

export const experience = [
  {
    period: "Apr 2026 — Present",
    role: "Full-Stack Developer",
    company: "AnyVet",
    location: "Bangkok, Thailand",
    summary:
      "Contributing across a veterinary software platform where product, API, and data changes meet real clinic workflows.",
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
    summary:
      "Worked on an HR management system and supported delivery across web, mobile, API, and database layers.",
    bullets: [
      "Developed web applications with Next.js, React, and Tailwind CSS.",
      "Built Flutter mobile applications for employee self-service and attendance tracking.",
      "Implemented Spring Boot REST APIs, authentication, business logic, and database integration.",
      "Participated in testing, bug fixing, and deployment processes.",
    ],
  },
];

export const workflow = ["Understand", "Design", "Implement", "Test", "Debug", "Review", "Deploy"];
