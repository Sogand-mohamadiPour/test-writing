import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductSearch } from "../../ProductSearch";

test("shows product while searching", async () => {
  const user = userEvent.setup();

  render(<ProductSearch />);

  const input = screen.getByRole("textbox", { name: "Search" })

  await user.type(input, "Laptop");

  expect(screen.getByText("Laptop")).toBeInTheDocument();
});

test("shows the matching product when searching for it", async () => {
  const user = userEvent.setup();

  render(<ProductSearch />);

  const input = screen.getByRole("textbox", { name: "Search" })

  await user.type(input, "Phone");

  expect(screen.getByText("Phone")).toBeInTheDocument();
});