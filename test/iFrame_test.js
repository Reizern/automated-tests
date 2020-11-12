const iFrame = require('../pages/iFrame.page');


describe('Add/Remove Elements', () => {
    
    it('open page iFrame', () => {
       
        iFrame.open();

    });
    it('execute a GET request', () => {
        
       iFrame.Request();
           
    });
    it('entering all titles in the text field via \ n', () => {
        
        iFrame.textInput();
    
    });
    
   
});


