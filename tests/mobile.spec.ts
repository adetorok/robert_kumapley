import { test, expect } from "@playwright/test";

test.use({
  viewport: { width: 390, height: 844 }, // iPhone 12-ish
});

test("Mobile layout has no horizontal scroll and hero is visible", async ({ page }) => {
  await page.goto("/");

  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const viewportWidth = await page.evaluate(() => window.innerWidth);
  expect(scrollWidth).toBeLessThanOrEqual(viewportWidth + 1);

  await expect(page.getByRole("heading", { level: 1, name: /Robert \(Kwasi\) Kumapley/i })).toBeVisible();
});
