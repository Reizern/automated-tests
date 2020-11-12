const JSAlert = require('../pages/JSAlert.page');


describe('JavaScript Alerts', () => {
    
    it('open page JavaScript Alerts', () => {
       
        JSAlert.open();

    });
    it('click on Click for JS Alert and click OK on alert', () => {
        
        JSAlert.ClickAlert();
           
    });
    it('checking that the result is "You successfuly click on alert"', () => {
        
        expect(JSAlert.result).toHaveTextContaining('You successfuly clicked an alert');
    
    });
    it('click on Click for Click for JS Confirm and click Cancel on alert', () => {
        
        JSAlert.ClickConfirm();
        
    });
    it('checking that the result is "You clicked: Cancel"', () => {
        
        expect(JSAlert.result).toHaveTextContaining('You clicked: Cancel');
        
    });
    it('click on click for JS Prompt Introduce any word and click OK on alert', () => {
        
        JSAlert.ClickPrompt('asd');
        
    });
    it('checking that the result is "You entered: asd"', () => {
        
        expect(JSAlert.result).toHaveTextContaining('You entered: asd');
        
    });
   
});

