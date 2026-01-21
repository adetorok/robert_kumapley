import { test, expect } from "@playwright/test";

const routes: Array<{ path: string; heading: string }> = [
  { path: "/", heading: "Robert (Kwasi) Kumapley, PE, MASCE, LEED AP" },
  { path: "/about", heading: "Executive Summary" },
  { path: "/services", heading: "Services" },
  { path: "/speaking", heading: "Speaking" },
  { path: "/case-highlights", heading: "Confidentiality-safe outcomes" },
  { path: "/media", heading: "Media, podcasts, and appearances" },
  { path: "/mygoal", heading: "MYGOAL, Inc." },
  { path: "/resources", heading: "Resources & downloadables" },
  { path: "/insights", heading: "Thought leadership" },
  { path: "/contact", heading: "Contact" },
  { path: "/speaker-kit", heading: "Speaker kit & press" },
  { path: "/hire", heading: "Hire Robert" },
  { path: "/privacy", heading: "Privacy Notice" },
  { path: "/terms", heading: "Terms of Use" },
];

test.describe("Smoke routes", () => {
  for (const route of routes) {
    test(`loads ${route.path} and finds heading`, async ({ page }) => {
      const response = await page.goto(route.path);
      expect(response?.ok()).toBeTruthy();
      await expect(page.getByRole("heading", { name: route.heading, exact: false })).toBeVisible();
    });
  }
});

test("Lead form submits in mock mode", async ({ page }) => {
  await page.goto("/contact");

  const form = page.locator("form").first();

  await form.getByLabel("Full name").fill("Test User");
  await form.getByLabel("Organization").fill("Test Org");
  await form.getByLabel("Role/Title").fill("QA Engineer");
  await form.getByLabel("Email").fill("qa@example.com");
  await form.getByLabel("Engagement type").selectOption("Assessment");
  await form.getByLabel("Key challenge").selectOption({ label: "Data standards / governance" });
  await form.getByLabel("Timeline").selectOption("30–60 days");
  await form.getByRole("button", { name: "Submit" }).click();

  await expect(page.getByText("Thanks — we’ll get back to you shortly.", { exact: true })).toBeVisible();
});
