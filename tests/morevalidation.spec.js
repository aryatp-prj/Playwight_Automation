const {test,expect} = require("@playwright/test"); 
test("popup validations",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await expect(page.locator(".error-message-container error")).toBeHidden();
    await page.getByRole("button",{name:'Login'}).click();
    await expect(page.locator(".error-message-container.error")).toBeVisible();// class name cant be separated by spaces so added with .
    await page.goto("https://selenium.qabible.in/index.php")
    await page.getByRole("link",{name:'Alerts and Modals'}).click();
    await page.getByRole("link",{name:'Javascript Alert'}).click();
    page.on('dialog', async dialog=>{ //page.once is more common - becs it will avaoid multiple trigger
        await expect(dialog.message()).toBe("Press a button!");
        await dialog.accept();
    })
        await page.locator(".btn.btn-warning").click();

    await page.getByRole("link",{name:'Others'}).hover();
    await page.goto("https://demoqa.com/frames");
    const framepage = page.frameLocator("#frame1");
    console.log(await framepage.locator("#sampleHeading").textContent())
    await expect(framepage.locator("#sampleHeading")).toHaveText("This is a sample page")
    await expect(framepage.getByText("This is a sample page")).toBeVisible(); // both assertions are fine
    await page.pause();
})

test("screenshots",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page.locator(".error-message-container.error")).toBeHidden();
    await page.getByRole("button",{name:'Login'}).click();
    await page.locator(".error-message-container.error").screenshot({path:'error.png'})
    await expect(page.locator(".error-message-container.error")).toBeVisible();
    await page.screenshot({path:'error1.png'});
    await page.pause();
})

test("visual comparison", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    expect(await page.screenshot()).toMatchSnapshot('saucedemo.png');//first time fail



})