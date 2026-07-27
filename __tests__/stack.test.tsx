import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Stack from "@/components/Stack";

describe("<Stack />", () => {
  it("renders each group label and a known item", () => {
    render(<Stack />);
    expect(screen.getByText("Languages")).toBeTruthy();
    expect(screen.getByText("React")).toBeTruthy();
  });
});