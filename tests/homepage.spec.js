const {test, expect}=require('@playwright/test')

test('homepage_test',async ({browser})=>{

    const context= await browser.newContext();
    const page=await context.newPage();

    const url="https://the-internet.herokuapp.com/";

    await page.goto(url);
    //const homepageassert=expect (await page.locator("h1[class='heading'])").toBeVisible());
   // console.log(homepageassert);



});