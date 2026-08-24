import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Counter from "../Counter";

test("increase display", () => {

  render(<Counter onCountChange={() => { }} />);

  const button = screen.getByRole("button", {
    name: "Increase",
  });

  expect(button).toBeInTheDocument();
});

test("decrease display", () => {

  render(<Counter onCountChange={() => { }} />);

  const button = screen.getByRole("button", {
    name: "Decrease",
  });

  expect(button).toBeInTheDocument();
});