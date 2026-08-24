import { expect, test } from "vitest";
import { calculateTotal } from "../../calculateTotal";

test("calculates total price", () => {
  expect(calculateTotal(10, 3)).toBe(30);
});