import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Counter from "../Counter";
import userEvent from "@testing-library/user-event";

test("increase display test and increase the counter", async () => {
  const user = userEvent.setup();
  render(<Counter />);
  const button = screen.getByRole("button", { name: "Increase" });
  expect(button).toBeInTheDocument();

  await user.click(button);
  expect(screen.getByText("1")).toBeInTheDocument();
});

test("decrease display test and decrease the counter", async () => {
  const user = userEvent.setup();
  render(<Counter />);
  const button = screen.getByRole("button", { name: "decrease" });
  expect(button).toBeInTheDocument();
  await user.click(button);
  expect(screen.getByText("-1")).toBeInTheDocument();
});
