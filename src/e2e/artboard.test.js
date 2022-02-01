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

  test('Check if users can navigate through artboards (back)', async ({ page }) => {
    await page.locator('#prev-button').click();
    await expect(page).toHaveURL(
      'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/2'
    );

    const artboardNameElement = await page.waitForSelector('#artboard-name');
    const artboardName = await artboardNameElement.innerText();
    await expect(artboardName).toBe('Etch a Sketch');
  });

  test('Check if users can navigate through artboards (next)', async ({ page }) => {
    await page.locator('#next-button').click();
    await expect(page).toHaveURL(
      'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/4'
    );

    const artboardNameElement = await page.waitForSelector('#artboard-name');
    const artboardName = await artboardNameElement.innerText();
    await expect(artboardName).toBe('Android 4');
  });

  test('Check if users can go back to document by clicking on close button', async ({ page }) => {
    await page.locator('#close-button').click();
    await expect(page).toHaveURL(
      'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992'
    );

    const documentNameElement = await page.waitForSelector('#document-name');
    const documentName = await documentNameElement.innerText();
    await expect(documentName).toBe('Screens');
  });
});
