/*const ExcelJS = require('exceljs'); //IMPORT EXCELJS
async function readExcelFile(){ //function declaration
    const workbook = new ExcelJS.Workbook();//creating a workook object
    await workbook.xlsx.readFile('C:/Users/ARYAThuruthippalli/Downloads/Obsqura Testing.xlsx');//which excel we need to use
    const worksheet = await workbook.getWorksheet('Sheet1');//worksheet object
    worksheet.eachRow((row,rownumber)=>{
        row.eachCell((cell,colnum)=>{
            console.log(cell.value)
        })
    })   
}
readExcelFile();//function call*/


const ExcelJS=require('exceljs')//import exceljs
async function writeExcelFile(filepath,searchvalue,changevalue,change){
const workbook=new ExcelJS.Workbook();
await workbook.xlsx.readFile(filepath)
const worksheet= workbook.getWorksheet("Sheet1");//fun needs await
const output= await readExcelFile(worksheet,searchvalue);//worksheet called in writeexcelfile
const cell= worksheet.getCell(output.row,output.col+change)//when row and col number passes it can access the values ie cell
cell.value=changevalue;
await workbook.xlsx.writeFile(filepath);
}
async function readExcelFile(worksheet,searchvalue){
let output={row:-1,col:-1}
worksheet.eachRow((row,rownumber)=>{//read complete excel sheet
row.eachCell((cell,colnumber)=>{//from this row and col number we get the row and col numbers and stored in row and col number
//console.log(cell.value);
if(cell.value===searchvalue)//when cell.value===airi satou then that corresponding row and coloum prints
{
output.row=rownumber;
output.col=colnumber;
}
})
})
return output
}
//to run/execute file we need to call the function
//readExcelFile()//each row eachcell values reads
writeExcelFile('C:/Users/ARYAThuruthippalli/Downloads/Obsqura Testing.xlsx','Ashton Cox','Software developer1',1);