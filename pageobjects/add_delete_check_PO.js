class add_delete_check_PO{

constructor(page)
{
    this.page= page;
    this.add_btn= page.locator("button[onclick='addElement()']")
    this.delete_btn= page.locator("button[class='added-manually']")


}

async add_btn(add_btn,delete_btn){
    await this.add_btn.click();
}

async delete_btn(dd_btn,delete_btn){
    await delete_btn.click()
}


}

module.exports={add_delete_check_PO};