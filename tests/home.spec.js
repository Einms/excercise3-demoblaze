import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';

test('Open Demoblaze Homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('STORE');
});