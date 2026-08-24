import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";
import CounterWrapper from "../CounterWrapper";

test("update the display count when the counter is clicked", async () => {
    render(<CounterWrapper />);
    const user = userEvent.setup();
    const increaseButton = screen.getByRole('button', { name: "Increase" });
    const decreaseButton = screen.getByRole('button', { name: "Decrease" });

    await user.click(increaseButton);
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
    await user.click(decreaseButton);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
});