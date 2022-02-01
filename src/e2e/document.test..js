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

  test('Check if document name exists in nav bar', async ({ page }) => {
    const documentNameElement = await page.waitForSelector('#document-name');
    const documentName = await documentNameElement.innerText();
    await expect(documentName).toBe('Screens');
  });

  test('Check if artboards exist', async ({ page }) => {
    await page.waitForSelector('#artboard-container');
  });
});
