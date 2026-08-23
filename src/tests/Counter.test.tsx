import { render, screen } from "@testing-library/react";
import Counter from "../Counter";

test("shows the increase button", () => {
  render(<Counter />);
  expect(
    screen.getByRole("button", {
      name: "Increase",
    }),
  ).toBeInTheDocument();
});
