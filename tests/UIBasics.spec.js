const {test,expect} = require("@playwright/test"); // importing test class for writing test cases
const { promises } = require("node:dns");
test.describe.configure({mode:'parallel'});
//older method of writing test cases
test('First playwright test', async function () {

})
//newer method
test('Browser context playwright test', async({browser}) => {

    const context = await browser.newContext(); // creating context object -
                                                //  represent the entire browser instance
    const page = await context.newPage();
    await page.goto("https://google.com");
    console.log(await page.title());
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standarduser");//  css slector using id
    await page.locator("#password").fill("secret_sauce");// css selector using id
    await page.locator("#login-button").click();
    console.log(await page.locator("h3[data-test='error']").textContent()); // css selector using tag name combined with attribute selector
    await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");//check entier test 
    await expect(page.locator("h3[data-test='error']")).toContainText("Epic sadface"); // partial check
    

    await page.locator("#user-name").fill(""); // for deleting wrongly given user anme
    await page.locator("#user-name").fill("standard_user"); // provided correct user name
    await page.locator("#login-button").click();
    const cardtitle = page.locator(".inventory_item_name ");
    console.log(await cardtitle.first().textContent()); // text content of fisrst element will be printed
    console.log(await cardtitle.nth(1).textContent());
  // to print every element
    console.log(await cardtitle.allTextContents());
    await page.pause();




})



test('page playwright test', async({page}) => {
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});

// new test - how to automate diff UI components

test('UI Controls', async({page})=>{
  await page.goto("https://selenium.qabible.in/index.php");
  await page.locator("//a[normalize-space()='Input Form']").click(); // if the element is link u can use normalize-space() - 
                                                                     // or "//a[text()='Input Form']"
                                                                     //
  await page.locator("//a[normalize-space()='Checkbox Demo']").click();
  await page.locator("#gridCheck").click();
  await expect(page.locator("#gridCheck")).toBeChecked(); // to check the tick is there - it has to be checked - this condition will pass if the check box is checked
  expect(await page.locator("#gridCheck").isChecked()).toBeTruthy();// check the condition(consition mentioned in the exception) is true
                                           // ischecked - return true or false
                                           //tobechecked - assertion method
                                           //ischecked - locators method
  //await page.locator("//[normalize-space()='Radio Buttons Demo']").click();
  await page.locator("a[href='radio-button-demo.php']").click();
  await page.locator("#inlineRadio1").check(); // click() also fine
  await expect(page.locator("#inlineRadio1")).toBeChecked();
  await page.locator("#inlineRadio24").check();
  expect(await page.locator("#inlineRadio24").isChecked()).toBeTruthy();
  await page.locator("a[href='select-input.php']").click();
  await page.locator("#single-input-field").selectOption("Red");
  await expect(page.locator("#message-one")).toHaveText("Selected Color : Red");
  await page.locator("a[href='form-submit.php']").click();
  await page.locator("#validationCustom01").fill("Arya");
  await page.locator("#validationCustom02").fill("TP");
  await page.locator("#validationCustomUsername").fill("aryatp");
  await page.locator("#validationCustom03").fill("Kannur");
  await page.locator("#validationCustom04").fill("Kerala");
  await page.locator("#validationCustom05").fill("670307");
  await page.locator("#invalidCheck").check();
  //await page.locator("//button[normalize-space()='Submit form']").click(); // using xpath // css selector -(text()='Submit form' - this is wrong)
  //await page.locator("text='Submit form'").click();//using playwright locator type
  await page.locator("button[type='submit']").click(); // using CSS selector
  await expect(page.locator("#message-one")).toHaveText("Form has been submitted successfully!");
  await page.locator("//a[normalize-space()='Simple Form Demo']").click();
  await page.locator("#single-input-field").fill("Hellow world");
  await page.locator("#button-one").click();
  await expect(page.locator("#message-one")).toHaveText("Your Message : Hellow world");
  await page.pause();
})

// browser
  test("child window and new tab handling", async({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com");
    const childpage =  await Promise.all([context.waitForEvent('page'),page.evaluate(()=> window.open('https://www.saucedemo.com/'))]); //one method used for open new tab in the window and open that url
    const newtab = await context.newPage();
    await newtab.goto("https://www.github.com/");//another method for creating new tab


  })

  test('special locator',async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php");
    //await page.locator("//a[normalize-space()='Input Form']").click();
    await page.getByRole("link",{name:'Input Form'}).click();
    //await page.locator("//a[normalize-space()='Checkbox Demo']").click();
    await page.getByRole("link",{name:'Checkbox Demo'}).click();
    await page.getByLabel("Click on this check box").check();
    //await page.locator("//a[normalize-space()='Radio Buttons Demo']").click();
    await page.getByRole("link",{name:'Radio Buttons Demo'}).click();
    await page.getByLabel("45 to 60").check();
   //await page.locator("//a[normalize-space()='Select Input']").click();
    await page.getByRole("link",{name:'Select Input'}).click();
    await page.getByLabel("Select Color").selectOption("Red");
    //await page.locator("//a[normalize-space()='Form Submit']").click();
    await page.getByRole("link",{name:'Form Submit',exact:true}).click();
    await page.getByPlaceholder("First name").fill("Arya");
    await page.getByPlaceholder("Last name").fill("tp");
    await page.getByPlaceholder("Username").fill("arya123");
    await page.getByPlaceholder("City").fill("kannur");
    await page.getByPlaceholder("State").fill("kerala");
    await page.getByPlaceholder("Zip").fill("894994");
    await page.getByLabel("Agree to terms and conditions").check();
    await page.getByRole("button",{name:'Submit form'}).click()
    await page.getByRole("link",{name:'Simple Form Demo'}).click();
    await page.getByPlaceholder("Message").fill("Hellow world");
    await page.getByRole("button",{name:'Show Message'}).click();
    await page.getByText("Your Message : Hellow world").isVisible();
    expect(await page.getByText("Your Message : Hellow world").isVisible()).toBeTruthy();
    await page.pause();
  })




