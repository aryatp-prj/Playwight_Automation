/*const {test,expect} = require("@playwright/test"); 
const ExcelJS = require('exceljs');

test('login',async({page})=>{

    const filepath = 'C:/Users/ARYAThuruthippalli/Downloads/logindata.xlsx'
    const workbook = new ExcelJS.Workbook();//create a workbook object
    await workbook.xlsx.readFile(filepath);
    const worksheet = workbook.getWorksheet('Sheet1');

    const testdata = [];
    //read each row
    worksheet.eachRow((row,rownumber)=>{
        if(rownumber>1){ //for avoiding header
            testdata.push({
                username: row.getCell(1).value,
                password: row.getCell(2).value,
                expected: row.getCell(3).value,

            })       
        }
    })
    console.log(testdata)

    for(const data of testdata){
        await page.goto("https://www.saucedemo.com/");
        await page.getByPlaceholder("Username").fill(data.username);
        await page.getByPlaceholder("Password").fill(data.password);
        await page.getByRole('button',{name: 'Login'}).click();
        if(data.expected === 'success'){


            await expect(page).toHaveURL(/inventory/);

        }
        else{
            await expect(page.locator(".error-message-container.error")).toBeVisible();
        }
    }
    

})





*/