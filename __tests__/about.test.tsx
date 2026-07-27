import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "@/components/About";
import { about } from "@/lib/data";

describe("<About />", () => {
  it("renders the heading and every paragraph", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: about.title })).toBeTruthy();
    for (const p of about.paragraphs) expect(screen.getByText(p)).toBeTruthy();
  });
});