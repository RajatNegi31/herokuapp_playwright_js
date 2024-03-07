const {test, expect}=require('@playwright/test')
const {add_delete_check_PO}=require('../pageobjects/add_delete_check_PO');


const url= "https://the-internet.herokuapp.com/add_remove_elements/";
test('Test_1', async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();

    //const add_btn=await page.locator("button[onclick='addElement()']")
    //const delete_btn=await page.locator("button[class='added-manually']")

    const add_delete_check_PO=new add_delete_check_PO(page);

    await add_delete_check_PO.LandOnPage();
    await add_delete_check_PO.add_btn();
    await add_delete_check_PO.delete_btn();
}
)