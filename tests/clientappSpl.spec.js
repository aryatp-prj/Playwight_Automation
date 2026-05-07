const {test,expect} = require('@playwright/test')

test("@web Spetial locator",async ({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'Login'}).click();
    await page.waitForLoadState('networkidle');//load state ne wait cheyyan network ne idle akkunu for some time
    //await page.locator(".inventory_item_name ").first().waitFor(); // for waiting first element for a while
    await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
    console.log(await page.getByTestId('inventory-item-name').allTextContents());
    const product = page.getByTestId('inventory-item');
    const productname = 'Sauce Labs Backpack';
    const count = await page.getByTestId('inventory-item-name').count();
    console.log(count);
    await page.getByTestId('inventory-item').
    filter({hasText: productname}).
    getByRole('button',{name:'Add to cart'}).click();
      await page.getByTestId('shopping-cart-link').click();
      await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
      await page.getByRole("button",{name:'Checkout'}).click();
      await page.getByPlaceholder('First Name').fill("Arya");
      await page.getByPlaceholder('Last Name').fill("TP");
      await page.getByPlaceholder('Zip/Postal Code').fill("670307");
      await page.getByRole("button",{name:'Continue'}).click();
      await expect(page.locator(".summary_info")).toBeVisible();
      await expect(page.getByTestId('subtotal-label')).toHaveText("Item total: $29.99");   
      await page.getByRole("button",{name:'Finish'}).click();
      await expect(page.getByTestId('complete-header')).toHaveText("Thank you for your order!");
      
      await page.pause();
})
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
})*/


