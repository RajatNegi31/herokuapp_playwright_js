class add_delete_element_PO
{

constructor(page){
    this.page=page;
    this.add_element_button= page.locator("button[onclick='addElement()']");
    this.delete_button=page.locator("button[class='added-manually']");
}

async goTo(){
    this.page.goTo("https://the-internet.herokuapp.com/add_remove_elements/");
}

async add_element_button(add_element_button,delete_button){
   // await this.add_element_button.click();   
    await this.add_element_button.click();
}

async delete_button(add_element_button,delete_button){
    await this.delete_button.click();
}

async add_delete_button(add_element_button,delete_button){
    await this.add_element_button.click();
    await this.delete_button.click();
}


}
module.exports={add_delete_element_PO};