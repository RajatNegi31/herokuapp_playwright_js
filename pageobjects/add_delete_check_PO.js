class add_delete_check_PO{

constructor(page)
{
    this.page= page;
    this.add_btn= page.locator("button[onclick='addElement()']")
    this.delete_btn= page.locator("button[class='added-manually']")
}

async LandOnPage(){
    await this.page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
}

async add_btn(){
    await this.add_btn.click();
}

async delete_btn(){
    await this.delete_btn.click()
}
}

module.exports={add_delete_check_PO};