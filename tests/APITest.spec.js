const {test,expect,request}=require('@playwright/test')

const loginPayload={}

test.beforeAll((){
const apiContext=await request.newContext();
apiContext.post("https://www.saucedemo.com/",)
})

test.beforeEach(()=>{

})