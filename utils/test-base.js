const _baseTest  = require("@playwright/test");

exports.customtest = _baseTest.test.extend(
    {
    testDataForOrder: {
    username : "standard_user",
    password : "secret_sauce",
    productname: "Sauce Labs Backpack"
    }
})