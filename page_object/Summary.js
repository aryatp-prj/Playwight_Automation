class Summary{
    constructor(page){
        this.page = page;
        this.summaryinfo = page.locator(".summary_info");
        this.summarysubtotal =page.locator(".summary_subtotal_label");
        this.finish = page.locator("#finish");
    }
    async CheckSummary(){
        await this.summaryinfo.waitFor();
        console.log(await this.summarysubtotal.textContent());
            
    }
    async ClickFinish(){
          await this.finish.click();

    }
}
module.exports = Summary;