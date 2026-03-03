import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "./Badge";

describe("Badge Component", () => {
  it("renders the label correctly", () => {
    render(<Badge variant="success" label="Approved" />);
    expect(screen.getByText("Approved")).toBeInTheDocument();
  });

  it("applies success variant styles", () => {
    render(<Badge variant="success" label="Approved" />);
    const badge = screen.getByText("Approved");

    expect(badge).toHaveClass("bg-accent-green-100");
    expect(badge).toHaveClass("text-accent-green");
  });

  it("applies pending variant styles", () => {
    render(<Badge variant="pending" label="Pending" />);
    const badge = screen.getByText("Pending");

    expect(badge).toHaveClass("bg-accent-yellow-100");
    expect(badge).toHaveClass("text-accent-yellow");
  });

  it("applies rejected variant styles", () => {
    render(<Badge variant="rejected" label="Rejected" />);
    const badge = screen.getByText("Rejected");

    expect(badge).toHaveClass("bg-accent-red");
    expect(badge).toHaveClass("text-accent-red");
  });

  it("applies draft variant styles", () => {
    render(<Badge variant="draft" label="Draft" />);
    const badge = screen.getByText("Draft");

    expect(badge).toHaveClass("bg-gray-100");
    expect(badge).toHaveClass("text-secondary");
  });

  it("applies fallback styles for unknown variant", () => {
    render(<Badge variant="unknown" label="Unknown" />);
    const badge = screen.getByText("Unknown");

    expect(badge).toHaveClass("bg-blue-50");
    expect(badge).toHaveClass("text-blue-600");
  });
});