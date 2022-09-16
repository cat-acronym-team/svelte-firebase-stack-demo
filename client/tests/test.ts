import { expect, test } from "@playwright/test";

test("index page has welcome message", async ({ page }) => {
  await page.goto("/");
  expect(await page.textContent("p")).toBe("Welcome to the Firebase Svelte Demo app brought to you by team CAT.");
});
