import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { LoginPage } from '../pages/loginPage.js';
import { loginTestData } from '../data/loginData.js';

for (const data of loginTestData){
    test(`Login Data Driven - ${data.username}`, async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await homePage.open();
        await homePage.clickLogin();

        if(data.expected === 'success'){
            await loginPage.login(data.username, data.password);
            await expect(homePage.welcomeUser).toContainText(data.username);
        } else {
            page.once('dialog', async dialog => {
                if(data.expected === 'wrong password'){
                     expect(dialog.message()).toContain('Wrong password.');
                } else if (data.expected === 'User does not exist'){
                    expect(dialog.message()).toContain('User does not exist.');
                }else if (
                    data.expected === 'username kosong' || data.expected === 'passsword kosong'
                ){
                    expect(dialog.message()).toContain('Please fill out Username and Password.');
                }
                await dialog.accept();
            });

            await loginPage.login(data.username, data.password);
        }
    });
}