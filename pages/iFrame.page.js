const Page = require('./page');

class iFrame extends Page {
    
    get btnFile () { return $('#mceu_15-open') }
    get btnND () { return $('#mceu_32') }
    get entryField () { return $('#mce_0_ifr') }
    
    Request () {
   
        browser.url('http://jsonplaceholder.typicode.com/todos?_start=0&_limit=5');
        browser.waitForVisible('body pre');
        let json = JSON.parse(browser.getHTML('body pre', false));
    }
    textInput () {

        this.btnFile.click();
        this.btnND.click();
        this.entryField.setValue(json[0].title+'\n'+json[1].title+'\n'+json[2].title+'\n'+json[3].title+'\n'+json[4].title);
         
    }
    
    open () {
        return super.open('iframe');
    }
}

module.exports = new iFrame();