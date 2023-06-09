import { test, expect } from '@playwright/test';

test('run global teardown', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log('global teardown ran');
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
});
