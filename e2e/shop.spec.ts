import { test, expect } from "@playwright/test";

test("user can search for a product and add it to the cart", async ({ page, }) => {
    await page.goto("/");

    const searchInput = page.getByLabel("Search products");
    await searchInput.fill("Laptop");

    await expect(page.getByRole("heading", { name: "Laptop" })).toBeVisible();
    await page.getByRole("button", { name: "Add to cart", }).click();

    await expect(page.getByText("Cart: 1")).toBeVisible();
    await expect(page.getByText("Laptop").last()).toBeVisible();
});