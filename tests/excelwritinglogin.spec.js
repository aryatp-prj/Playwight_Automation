/*const {test,expect} = require("@playwright/test"); 
const ExcelJS = require('exceljs');

test('login',async({page})=>{

    const filepath = 'C:/Users/ARYAThuruthippalli/Downloads/logindata.xlsx'
    const workbook = new ExcelJS.Workbook();//create a workbook object
    await workbook.xlsx.readFile(filepath);
    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.getRow(1).getCell(4).value='Result';
    worksheet.eachRow((row,rownumber)=>{
        if(rownumber>1){
            const expected = row.getCell(3).value;
            if(expected === 'success'){
                row.getCell(4).value='pass'
            }
            else{
                row.getCell(4).value = 'fail'
            }
        }
    })
    await workbook.xlsx.writeFile(filepath);

    
})*/