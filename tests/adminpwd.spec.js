const {test,expect}=require('@playwright/test')

const adminUrl="https://the-internet.herokuapp.com/basic_auth";

test('admin_check', async({browser})=>{

    const context=browser.newContext();
    const page=await context.newPage();

    
    


})