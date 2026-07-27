import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "@/components/Skills";
import { skills } from "@/lib/data";

describe("<Skills />", () => {
  it("renders the heading and one card per skill", () => {
    render(<Skills />);
    expect(screen.getByRole("heading", { name: /what i do/i })).toBeTruthy();
    for (const s of skills) expect(screen.getByText(s.title)).toBeTruthy();
  });
});