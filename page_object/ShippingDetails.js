const Module = require("node:module");

class ShippingDetails{
    constructor(page){
        this.page = page;
        this.firstname = page.locator("#first-name");
        this.lastname = page.locator("#last-name");
        this.postalcode = page.locator("#postal-code");
        this.continuebtn = page.locator("#continue");


    }
    async userdetails(fname,lname,pinnumber){
              await this.firstname.fill(fname);
              await this.lastname.fill(lname);
              await this.postalcode.fill(pinnumber);
   
    }
    async clickcontinue(){
        await this.continuebtn.click();

    }
}
module.exports = ShippingDetails;