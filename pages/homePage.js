export class HomePage {
    constructor(page){
        this.page = page;

        this.signUpMenu = page.locator('#signin2');
        this.loginMenu = page.locator('#login2');
        this.cartMenu = page.locator('#cartmenu');
        this.logoutMenu = page.locator('#logout2');
        this.welcomeUser = page.locator('#nameofuser'); 
    }

    async open(){
        await this.page.goto('/');
    }

    async clickSignUp(){
        await this.signUpMenu.click();
    }

    async clickLogin(){
        await this.loginMenu.click();
    }

    async clickCart(){
        await this.cartMenu.click();
    }

    async logout(){
        await this.logoutMenu.click();
    }
}