const {test,expect} = require('@playwright/test')
const Login = require('../page_object/Login');
const Dashboard = require('../page_object/Dashboard');
const Cart = require('../page_object/Cart');
const ShippingDetails = require('../page_object/ShippingDetails');
const Summary = require('../page_object/Summary');
const { PoManager } = require('../page_object/PoManager');
const testdata = require('../utils/placeOrderTestData.json');
const { customtest } = require('../utils/test-base');
for(const data of testdata){


test(`shopping cart application using POM for the product ${data.productname}`, async({page}) => {
   //const username = "standard_user";
   //const password = "secret_sauce";
   //const productname = "Sauce Labs Backpack";
   const pomanager = new PoManager(page);
   //const login = new Login(page); // creating object
   const login = pomanager.getlogin(); //creating object for login class 
   await login.goTo();
   await login.validLogin(data.username,data.password);
   //const dashboard = new Dashboard(page);
   const dashboard = pomanager.getdashboard();
   await dashboard.searchproduct(data.productname);
   await dashboard.movetocart();
   //const cart = new Cart(page);
   const cart = pomanager.getcart();
   await cart.ClickCheckout();
   //const shippingdetails = new ShippingDetails(page);
   const shippingdetails = pomanager.getshipping();
   await shippingdetails.userdetails("Arya","tp","788687");
   await shippingdetails.clickcontinue();
   //const summary = new Summary(page);
   const summary = pomanager.getsummary();
   await summary.CheckSummary();
   await summary.ClickFinish();
   await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");

})
}

customtest('Customise test case', async({page,testDataForOrder})=>{
   const pomanager = new PoManager(page);
   const login = pomanager.getlogin(); //creating object for login class 
   await login.goTo();
   await login.validLogin(testDataForOrder.username,testDataForOrder.password);
   const dashboard = pomanager.getdashboard();
   await dashboard.searchproduct(testDataForOrder.productname);
   await dashboard.movetocart();
   const cart = pomanager.getcart();
   await cart.ClickCheckout();
})