class dropdown{


    constructor(page1){
        this.page1= page1;
        this.dropdown_btn= page1.locator("select[id='dropdown']");
    }

    gotoUrl(){
        this.page1.goto("https://the-internet.herokuapp.com/dropdown");
    }

    select_option1(){
        this.dropdown_btn.selectOption("Option 1");
    }

    select_option2(){
        this.dropdown_btn.selectOption("Option 2");
    }


}
module.exports={dropdown}