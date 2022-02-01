const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Go to http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992
  await page.goto('http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992');

  // Click nav:has-text("Screens")
  await page.click('nav:has-text("Screens")');

  // Click text=Xerox altoEtch a SketchAndroidAndroid 4Win 1984Windows VistaWindows PhonwLisaApp
  await page.click('text=Xerox altoEtch a SketchAndroidAndroid 4Win 1984Windows VistaWindows PhonwLisaApp');

  // Click img[alt="Xerox\ alto"]
  await page.click('img[alt="Xerox\\ alto"]');
  // assert.equal(page.url(), 'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/1');

  // Click text=Xerox alto
  await page.click('text=Xerox alto');

  // Click text=116
  await page.click('text=116');

  // Click img[alt="Xerox\ alto"]
  await page.click('img[alt="Xerox\\ alto"]');

  // Click button
  await page.click('button');
  // assert.equal(page.url(), 'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992');

  // Click nav:has-text("Screens")
  await page.click('nav:has-text("Screens")');

  // Click img[alt="Android"]
  await page.click('img[alt="Android"]');
  // assert.equal(page.url(), 'http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992/artboard/3');

  // ---------------------
  await context.close();
  await browser.close();
})();