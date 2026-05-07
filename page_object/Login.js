class Login{
    constructor(page){
        this.page = page
        this.username = page.locator("#user-name")
        this.password = page.locator("#password")
        this.loginbutton = page.locator("#login-button")
    }
   async goTo(){
    await this.page.goto("https://www.saucedemo.com/");
   } 
   async validLogin(user,pass){
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginbutton.click();
   }

}
module.exports = Login;