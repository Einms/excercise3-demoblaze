import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { LoginPage } from '../pages/loginPage.js';
import { loginTestData } from '../data/loginData.js';

test ('TC Akun 1 Positive - User Berhasil Login', async ({ page }) =>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const validLogin = loginTestData[0];
    
    await homePage.open();
    await homePage.clickLogin();
    await loginPage.login(validLogin.username, validLogin.password);
    await expect(homePage.welcomeUser).toContainText(validLogin.username);   
});

test ('TC Akun 2 Positive - Logout', async ({ page }) =>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const validLogin = loginTestData[0];
    
    await homePage.open();
    await homePage.clickLogin();
    await loginPage.login(validLogin.username, validLogin.password);
    await expect(homePage.welcomeUser).toContainText(validLogin.username);   
    
    await homePage.logout();
    await expect(homePage.loginMenu).toBeVisible();
});