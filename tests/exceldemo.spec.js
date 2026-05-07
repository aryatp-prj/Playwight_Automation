/*const { test, expect } = require('@playwright/test');
const ExcelJS = require('exceljs');
test('excel download and upload', async ({ page }) => {
  await page.goto("https://selenium.qabible.in/index.php");
  await page.getByRole('link', { name: 'Table' }).click();
  await page.getByRole('link', { name: 'Table Data Download' }).click();
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Excel' }).click()
  ]);
  await download.saveAs('C:/Users/ARYAThuruthippalli/Downloads/Obsqura Testing.xlsx');
  const filepath = 'C:/Users/ARYAThuruthippalli/Downloads/Obsqura Testing.xlsx';
  await writeExcelFile(filepath, 'Ashton Cox', 'Software developer', 1);
  await page.goto("https://tiiny.host/");
  const [filechooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('button', { name: 'Upload file', exact: true }).click()
  ]);
  await filechooser.setFiles(filepath);
  await page.getByRole('textbox', { name: 'Email' }).fill('aryarajeevanpnr2017@gmail.com');
  await page.getByRole('button',{name:'Continue',exact:true}).click();
  await expect(page.getByText("Success")).toBeVisible();
  await page.pause();
});
async function writeExcelFile(filepath, searchvalue, changevalue, change) {

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filepath);

  const worksheet = workbook.getWorksheet("Sheet1");

  const output = await readExcelFile(worksheet, searchvalue);

  
  if (output.row === -1 || output.col === -1) {
    console.log("Value not found in Excel");
    return;
  }

  const cell = worksheet.getCell(output.row, output.col + change);
  cell.value = changevalue;

  await workbook.xlsx.writeFile(filepath);
}
async function readExcelFile(worksheet, searchvalue) {
  let output = { row: -1, col: -1 };
  worksheet.eachRow((row, rownumber) => {
    row.eachCell((cell, colnumber) => {
      if (cell.value?.toString().trim() === searchvalue.trim()) {
        output.row = rownumber;
        output.col = colnumber;
      }

    });
  });

  return output;
}*/