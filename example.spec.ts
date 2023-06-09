import { test, expect } from '@playwright/test';

test.describe('has title @smoke', () => {
  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  });

  test('has 12123', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  });
});
