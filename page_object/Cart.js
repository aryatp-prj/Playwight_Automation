class Cart{
    constructor(page){
        this.page = page;
        this.item = page.locator(".inventory_item_name");
        this.checkout = page.locator("#checkout");

    }
    async ClickCheckout(){
        await this.item.waitFor();
      await this.checkout.click();
    }
}
module.exports = Cart;  // exporting class Cart