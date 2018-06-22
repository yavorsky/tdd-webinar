const puppeteer = require('puppeteer');

describe('App e2e', () => {
  let browser;
  let page;
  beforeEach(async () => {
    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();
  })
  afterEach(async () => {
    browser.close();
  });

  it('should load the page', async () => {
    await page.goto('http://localhost:3000', {waitUntil: 'networkidle2'});
    await page.click('[data-hook="hi-button"]');
    const value = await page.$eval('[data-hook="hi-form-description"]', (el) => el.innerHTML);
    expect(value).toBe('Please, fill the form');
  })
});
