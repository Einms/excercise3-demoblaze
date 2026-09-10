export class CartPage {
    constructor(page) {
        this.page = page;

        this.cartProducts = page.locator('#tbodyid tr');
        this.placeOrderButton = page.getByRole('button',{ name: 'Place Order' });

        this.nameInput = page.locator('#name');
        this.countryInput = page.locator('#country');
        this.cityInput = page.locator('#city');
        this.creditCardInput = page.locator('#card');
        this.monthInput = page.locator('#month');
        this.yearInput = page.locator('#year');
        this.purchaseButton = page.getByRole('button', { name: 'Purchase'});
    }

    async open(){
        await this.page.goto('/cart.html');
    }
    async clickPlaceOrder(){
        await this.placeOrderButton.click();
    }
    async fillOrder(name,country, city, creditCard, month, year){
        await this.nameInput.fill(name);
        await this.countryInput.fill(country);
        await this.cityInput.fill(city);
        await this.creditCardInput.fill(creditCard);
        await this.monthInput.fill(month);
        await this.yearInput.fill(year);
    }
    async purchase(){

        await this.purchaseButton.click();
    }
}