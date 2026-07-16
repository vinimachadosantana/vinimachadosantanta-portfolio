import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/components/Navbar";

describe("<Navbar />", () => {
  it("toggles the mobile menu when the button is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    expect(screen.getAllByText("Skills")).toHaveLength(1);
    await user.click(screen.getByRole("button", { name: /toggle menu/i }));
    expect(screen.getAllByText("Skills")).toHaveLength(2);
  });
});