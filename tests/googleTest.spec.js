import { test, expect } from '@playwright/test';

test('Open google website', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});