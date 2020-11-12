const Page = require('./page');

class JSAlert extends Page {

    get alert () { return $('button=Click for JS Alert') }
    get confirm () { return $('button=Click for JS Confirm') }
    get prompt () { return $('button=Click for JS Prompt') }
    get result () { return $('#result') }

    ClickAlert () {

        this.alert.click(); 
        browser.acceptAlert()
    }
    ClickConfirm () {

        this.confirm.click(); 
        browser.dismissAlert()
    }
    ClickPrompt (value) {
        this.prompt.click();
        browser.sendAlertText(value)
        
    }
    open () {
        return super.open('javascript_alerts');
    }
}

module.exports = new JSAlert();