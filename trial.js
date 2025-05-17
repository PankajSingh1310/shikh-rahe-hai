const login = require('./login');
const { test, expect } = require('@playwright/test');   
const { chromium } = require('playwright');

test('test', async ({ page }) => {
    // Launch the browser
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Perform login
    await login(page, 'username', 'password');

    // Close the browser
    await browser.close();
});