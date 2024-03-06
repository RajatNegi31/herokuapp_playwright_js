const {test,expect}=require('@playwright/test')
const {adminpwd, add_delete_element_PO}=require('../pageobjects/add_delete_element_PO')

const adminUrl="https://the-internet.herokuapp.com/add_remove_elements/";

test('admin_check', async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();

    add_element_button= await page.locator("button[onclick='addElement()']");
    delete_button=await page.locator("button[class='added-manually']");
    const add_delete_element_PO= new add_delete_element_PO(page);

    await add_delete_element_PO.goTo();
    await add_delete_element_PO.add_element_button();
    await add_delete_element_PO.delete_button();
    await add_delete_element_PO.add_delete_button();
    


    //await page.goto(adminUrl);




})