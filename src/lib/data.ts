import type { NavItem, Social, Skill, StackGroup, Step, Project } from "./types";

export const nav: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const contact = { phone: "+55 11 93618-4473", email: "vinimachadosantana@gmail.com", location: "São Paulo, Brazil" };

export const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/vinimachadosantana" },
  { name: "LinkedIn", href: "https://linkedin.com/in/vinimachadosantana" },
  { name: "Twitter", href: "#" },
  { name: "YouTube", href: "#" },
];

export const hero = {
  eyebrow: "Web Developer",
  name: "Vinicius Machado",
  blurb: "I love solving problems. Give me an unclear problem and a deadline. I'll come back with something that works.",
  badgeText: "Fullstack • Available for work • ",
};

export const skills: Skill[] = [
  { icon: "code", title: "Frontend Development", desc: "Interfaces that are fast, accessible, and maintainable. I care about the details users feel — performance, responsiveness, and clean component architecture." },
  { icon: "server", title: "Fullstack Apps", desc: "Services and APIs built to scale. Data modeling, auth, and the integrations that hold a product together." },
  { icon: "palette", title: "UI & Design Systems", desc: "I own features from problem to production — architecture, build, tests, and deploy. Comfortable making the tradeoffs that ship good software on time." },
];

export const stack: StackGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Ruby", "Kotlin", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js", "Angular", "Tailwind"] },
  { label: "Backend", items: ["Node.js", "Ruby on Rails", "REST APIs"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Prisma"] },
  { label: "Tooling & Practices", items: ["Git", "CI/CD", "Rspec", "Testing Library", "Docker"] },
];

export const steps: Step[] = [
  { n: "01", title: "Understand", desc: "Clarify the problem, users and scope before writing code." },
  { n: "02", title: "Design", desc: "Sketch the data model, API and the UI flow." },
  { n: "03", title: "Build", desc: "Ship in small, tested slices — deploy early and often." },
  { n: "04", title: "Refine", desc: "Measure, fix, and polish performance and accessibility." },
];

export const projects: Project[] = [
  { title: "TaskFlow", tag: "Next.js · Prisma", from: "#6D5EFC", to: "#4F8CFF", href: "#" },
  { title: "PayBoard", tag: "Stripe · RBAC", from: "#4F8CFF", to: "#22D3EE", href: "#" },
  { title: "LiveChat", tag: "WebSockets", from: "#EC4899", to: "#6D5EFC", href: "#" },
  { title: "DocsAI", tag: "RAG · Vector DB", from: "#8B5CF6", to: "#4F8CFF", href: "#" },
  { title: "Bookmarks", tag: "Auth.js · Postgres", from: "#22D3EE", to: "#6D5EFC", href: "#" },
  { title: "Portfolio", tag: "This site", from: "#6D5EFC", to: "#EC4899", href: "#" },
];