const { test, expect } = require('@playwright/test');

test.describe('Artboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('img[alt="Android"]');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Check if artboard name exists in nav bar', async ({ page }) => {
    const artboardNameElement = await page.waitForSelector('#artboard-name');
    const artboardName = await artboardNameElement.innerText();
    await expect(artboardName).toBe('Android');
  });

  test('Check if artboard main container exists', async ({ page }) => {
    await page.waitForSelector('#artboard-main-container');
  });

  test('Check if artboard image exists', async ({ page }) => {
    await page.waitForSelector('#artboard-image');
  });
});
