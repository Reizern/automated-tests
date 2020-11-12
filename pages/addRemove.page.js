const Page = require('./page');

class addRemovePage extends Page {
    
    get btnAdd () { return $('button') }
    get btnDelete () { return $('.added-manually') }
    get elements () { return $('#elements') }
    
    TapAdd () {
   
        this.btnAdd.click(); 
    }
    TapDel () {

        this.btnDelete.click(); 
    }
    
    open () {
        return super.open('add_remove_elements/');
    }
}

module.exports = new addRemovePage();