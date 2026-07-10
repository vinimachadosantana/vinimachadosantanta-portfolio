import type { NavItem, Social, Skill, Step, Project } from "./types";

export const nav: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const contact = { phone: "+55 11 93618-4473", email: "vinimachadosantana@gmail.com", location: "São Paulo, Brazil" };

export const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/vinimachadosantana" },
  { name: "LinkedIn", href: "https://linkedin.com/in/vinimachadosantana" },
];

export const hero = {
  eyebrow: "Developer",
  name: "Vinicius Machado",
  blurb: "I build fast, accessible web apps with React, Next.js and TypeScript — from the database to a polished UI.",
  badgeText: "Fullstack Developer • Available for work • ",
};

export const skills: Skill[] = [
  { icon: "code", title: "Frontend Development", desc: "React, Next.js & TypeScript. Responsive, accessible interfaces that feel fast." },
  { icon: "server", title: "Fullstack Apps", desc: "APIs, auth, databases with Node & Postgres. Shipping the whole product." },
  { icon: "palette", title: "UI & Design Systems", desc: "Clean layouts, reusable components, and a consistent look with Tailwind." },
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