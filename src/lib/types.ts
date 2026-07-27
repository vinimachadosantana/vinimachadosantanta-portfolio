export type NavItem = { label: string; href: string };
export type Social = { name: "GitHub" | "LinkedIn" | "Twitter" | "YouTube"; href: string };
export type Skill = { icon: "code" | "server" | "palette"; title: string; desc: string };
export type StackGroup = { label: string; items: string[] };
export type About = { eyebrow: string; title: string; paragraphs: string[]; currently?: string };
export type Project = { title: string; tag: string; from: string; to: string; href: string };