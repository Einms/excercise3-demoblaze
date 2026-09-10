import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { ProductPage } from '../pages/productPage.js';
import { CartPage } from '../pages/cartPage.js';
import { productData, orderData } from '../data/productData.js'; 
import { LoginPage } from '../pages/loginPage.js';
import { loginTestData } from '../data/loginData.js';

test('TC 1 Shopping Positive - Tambah produk ke Cart', async ({ page }) =>{
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await homePage.open(); // buka homepage

    await page.getByText(productData.productName, { exact: true}).click(); // pilih produk

    page.once('dialog', async dialog => {
        expect (dialog.message()).toContain('Product Added.');
        await dialog.accept();
    });

    await productPage.addToCart();
    await cartPage.open();
    await expect(cartPage.cartProducts).toContainText(productData.productName);
});


test('TC 2 Shopping Positive - Checkout Produk', async ({ page }) =>{

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const validLogin = loginTestData[0];
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await homePage.open(); // buka homepage
    await homePage.clickLogin();

    await loginPage.login(validLogin.username, validLogin.password);
    await page.getByText(productData.productName, { exact: true}).click(); // pilih produk

    page.once('dialog', async dialog => {
        expect (dialog.message()).toContain('Product Added.');
        await dialog.accept();
    });

    await productPage.addToCart();
    await cartPage.open();
    await expect(cartPage.cartProducts).toContainText(productData.productName); // Assertion produk yang dimasukkan
    await cartPage.clickPlaceOrder();

    await cartPage.fillOrder(
        orderData.name,
        orderData.country,
        orderData.city,
        orderData.creditCard,
        orderData.month,
        orderData.year
    );

    // Purchase
    page.once('dialog', async dialog => {
        expect(dialog.message()).toContain('Thank you for your purchase!');
        await dialog.accept();
    });
    await cartPage.purchase();
});
