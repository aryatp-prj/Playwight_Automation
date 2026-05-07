/*const {test,expect} = require("@playwright/test");

test("practice", async({page})=>{
  const products = ['Sauce Labs Backpack','Sauce Labs Bike Light'];
  await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'Login'}).click();
  for(let product of products){
    await page.getByTestId('inventory-item').filter({hasText:product}).
    getByRole("button",{name:'Add to cart'}).click();
  }
  await expect(page.getByTestId('shopping-cart-badge')).toHaveText('2');
})

test("frame", async({page})=>{
  await page.goto("https://demoqa.com/frames");
  const frame1 = page.frameLocator("#frame1");
  await expect(frame1.getByText("This is a sample page")).toBeVisible();
})*/