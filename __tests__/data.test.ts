import { describe, it, expect } from "vitest";
import { nav, socials, projects } from "@/lib/data";

describe("content model", () => {
  it("has nav items with labels and anchor hrefs", () => {
    expect(nav.length).toBeGreaterThan(0);
    for (const item of nav) {
      expect(item.label).toBeTruthy();
      expect(item.href.startsWith("#")).toBe(true);
    }
  });
  it("has projects with a title, tag and link", () => {
    expect(projects.length).toBeGreaterThan(0);
    for (const p of projects) { expect(p.title).toBeTruthy(); expect(p.tag).toBeTruthy(); expect(p.href).toBeTruthy(); }
  });
  it("only uses known social platforms", () => {
    const allowed = ["GitHub", "LinkedIn", "Twitter", "YouTube"];
    for (const s of socials) expect(allowed).toContain(s.name);
  });
});