const {test}=require('@playwright/test');
const { dropdown } = require('../pageobjects/dropdown');

test('test2',({browser})=>{

   const context1= browser.newContext();
   const  page1=context1.newPage();

   const dropdown = new dropdown(page1);

   dropdown.gotoUrl();


   

})