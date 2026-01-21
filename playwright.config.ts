import type { PlaywrightTestConfig } from "@playwright/test";

const PORT = process.env.PORT || "3000";
const baseURL = process.env.PLAYWRIGHT_BASE_URL || `http://127.0.0.1:${PORT}`;

const config: PlaywrightTestConfig = {
  timeout: 60 * 1000,
  use: {
    baseURL,
    headless: true,
    viewport: { width: 1280, height: 720 },
    trace: "off",
    video: "off",
    screenshot: "off",
  },
  webServer: {
    command: `npm run start -- --hostname 0.0.0.0 --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    env: {
      MOCK_EMAIL_MODE: "true",
    },
  },
  expect: {
    timeout: 15000,
  },
};

export default config;
