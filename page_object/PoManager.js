const Cart = require("./Cart");
const Dashboard = require("./Dashboard");
const Login = require("./Login");
const ShippingDetails = require("./ShippingDetails");
const Summary = require("./Summary");

class PoManager{ //this class for object creation - for creating objects for cass
    constructor(page){
        this.page = page;
        this.login = new Login(page);
        this.dashboard = new Dashboard(page);
        this.cart = new Cart(page);
        this.shippingdetails = new ShippingDetails(page);
        this.summary = new Summary(page);
    }
    getlogin(){
        return this.login; //return the login object


    }
    getdashboard(){
        return this.dashboard;
    }
    getcart(){
        return this.cart;
    }
    getshipping(){
        return this.shippingdetails;
    }
    getsummary(){
        return this.summary;
    }
     
}
module.exports = {PoManager}