export class RegisterPage {
    constructor(page){
        this.page = page;

        this.usernameInput = page.locator('#sign-username');
        this.passwordInput = page.locator('#sign-password');
        this.signUpButton = page.getByRole('button', { name: 'Sign up'});
    }
    async register(username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signUpButton.click();
    }
}