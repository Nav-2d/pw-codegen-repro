import { test, expect } from '@playwright/test';

test('run global setup', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log('global setup ran');
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
});
