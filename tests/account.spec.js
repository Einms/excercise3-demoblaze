import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { LoginPage } from '../pages/loginPage.js';
import { loginData } from '../data/loginData.js';

test ('TC Akun 1 Positive - User Berhasil Login', async ({ page }) =>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    
    await homePage.open();
    await homePage.clickLogin();
    await loginPage.login(loginData.username, loginData.password);
    await expect(homePage.welcomeUser).toContainText(loginData.username);   
});

test ('TC Akun 2 Positive - Logout', async ({ page }) =>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    
    await homePage.open();
    await homePage.clickLogin();
    await loginPage.login(loginData.username, loginData.password);
    await expect(homePage.welcomeUser).toContainText(loginData.username);   
    
    await homePage.logout();
    await expect(homePage.loginMenu).toBeVisible();
});