import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { RegisterPage } from '../pages/registerPage.js';
import { registerData } from '../data/registerData.js';


test(' TC 1 Regis - Daftar Akun dengan Data Valid', async ({ page }) =>{
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    const username = `user${Date.now()}`;
    const password = registerData.password;

    await homePage.open();
    await homePage.clickSignUp();

    page.once('dialog', async dialog =>{
        expect(dialog.message()).toContain('Sign up successful');
        await dialog.accept();
    });
        
    await registerPage.register(username, password);
});

test ('TC 2 Regis - Daftar Akun dengan Username Kosong', async({ page }) => {
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    const username = '';
    const password = registerData.password;

    await homePage.open();
    await homePage.clickSignUp();

    page.once('dialog', async dialog => {
        expect(dialog.message()).toContain('Please fill out Username and Password.');
        await dialog.accept();
    });
    await registerPage.register(username, password);
});

test ('TC 3 Regis - Daftar Akun dengan Password Kosong', async({ page }) => {
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    const username = `user${Date.now()}`;
    const password = '';

    await homePage.open();
    await homePage.clickSignUp();

    page.once('dialog', async dialog => {
        expect(dialog.message()).toContain('Please fill out Username and Password.');
        await dialog.accept();
    });
    await registerPage.register(username, password);
});