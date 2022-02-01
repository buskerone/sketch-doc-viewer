const { test, expect } = require('@playwright/test');

test.describe('Document', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Check if user has been redirected to document url', async ({ page }) => {
    await expect(page).toHaveURL(
      'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992'
    );
  });

  test('Check if main container exists', async ({ page }) => {
    await page.waitForSelector('#document-main-container');
  });
});
