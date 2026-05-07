class Dashboard{
    constructor(page){
        this.page = page;
        this.item = page.locator(".inventory_item_name ");
        this.product = page.locator(".inventory_item");
        this.cart = page.locator(".shopping_cart_link")
    }
    async searchproduct(productname){
        await this.page.waitForLoadState('networkidle');
       //await this.item.first().waitFor(); // for waiting first element for a while
    console.log(await this.item.allTextContents());
   
    //const productname = 'Sauce Labs Backpack';
    const count = await this.item.count();
    console.log(count);
    for(let i =0;i<count;i++){
        if(await this.item.nth(i).textContent()===productname){
            await this.product.nth(i).locator("text=Add to cart").click();
            break;
        }    

      } 
    }
    async movetocart(){
        await this.cart.click();
    }
}

module.exports = Dashboard; 