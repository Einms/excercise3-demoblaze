import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { LoginPage } from '../pages/loginPage.js';
import { loginTestData } from '../data/loginData.js';

test('TC 1 Login Positive - Login dengan Data Valid', async ({ page }) =>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const validLogin = loginTestData[0];

    await homePage.open();
    await homePage.clickLogin();

    await loginPage.login(validLogin.username, validLogin.password);
    await expect(homePage.welcomeUser).toContainText(loginData.username); // Assertion
});

test('TC 2 Login Negative - Login dengan Username Tidak Terdaftar', async ({ page }) =>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const invalidLogin = loginTestData[1];

    await homePage.open();
    await homePage.clickLogin();

    page.once('dialog', async dailog => {
        expect(dailog.message()).toContain('User does not exist.');
        await dailog.accept();
    });

    await loginPage.login(invalidLogin.username, invalidLogin.password);
});

test('TC 3 Login Negative - Login dengan Password Salah', async ({ page }) =>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const invalidLogin = loginTestData[2];

    await homePage.open();
    await homePage.clickLogin();

    page.once('dialog', async dailog => {
        expect(dailog.message()).toContain('Wrong password.');
        await dailog.accept();
    });

    await loginPage.login(invalidLogin.username, invalidLogin.password);
});

test('TC 4 Login Negative - Login dengan Password Kosong', async ({ page }) =>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const invalidLogin = loginTestData[3];

    await homePage.open();
    await homePage.clickLogin();

    page.once('dialog', async dailog => {
        expect(dailog.message()).toContain('Please fill out Username and Password.');
        await dailog.accept();
    });

    await loginPage.login(invalidLogin.username, invalidLogin.password);
});

test('TC 5 Login Negative - Login dengan Username Kosong', async ({ page }) =>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const invalidLogin = loginTestData[4];

    await homePage.open();
    await homePage.clickLogin();

    page.once('dialog', async dailog => {
        expect(dailog.message()).toContain('Please fill out Username and Password.');
        await dailog.accept();
    });

    await loginPage.login(invalidLogin.username, invalidLogin.password);
});