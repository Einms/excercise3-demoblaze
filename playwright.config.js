// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    use: {
        baseURL: 'https://demoblaze.com',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on'
    },

    reporter: 'html'
});