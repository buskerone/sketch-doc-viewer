const { test, expect } = require('@playwright/test');

test.describe('Artboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
