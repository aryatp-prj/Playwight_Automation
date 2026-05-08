const {test,expect} = require("@playwright/test"); // importing test class for writing test cases
//older method of writing test cases
test('@web client app login', async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.waitForLoadState('networkidle');//load state ne wait cheyyan network ne idle akkunu for some time
    await page.locator(".inventory_item_name ").first().waitFor(); // for waiting first element for a while
    console.log(await page.locator(".inventory_item_name ").allTextContents());
    const product = page.locator(".inventory_item");
    const productname = 'Sauce Labs Backpack';
    const count = await page.locator(".inventory_item_name ").count();
    console.log(count);
    for(let i =0;i<count;i++){
        if(await page.locator(".inventory_item_name ").nth(i).textContent()===productname){
            await product.nth(i).locator("text=Add to cart").click();
            break;
        }    

      }
      await page.locator(".shopping_cart_link").click();
      await page.locator(".inventory_item_name").waitFor();
      await page.locator("#checkout").click();
      await page.locator("#first-name").fill("Arya");
      await page.locator("#last-name").fill("TP");
      await page.locator("#postal-code").fill("670307");
      await page.locator("#continue").click();
      await page.locator(".summary_info").waitFor();
      await expect(page.locator(".summary_subtotal_label")).toHaveText("Item total: $29.99");
      await page.locator("#finish").click();
      await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");
      
    

// code generated from codegen - inbuild feature of playwright
//Codegen is a Playwright feature that records user interactions and 
// automatically generates test scripts, which can be further refined 
// for automation.

/*test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="login-password"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standdard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('svg').nth(1).click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('ary');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('ty');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('5567');
  await page.locator('.error-message-container').click();
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
});*/

})