const AddRemovePage = require('../pages/addRemove.page');


describe('Add/Remove Elements', () => {
    
    it('open page Add/Remove elements', () => {
       
        AddRemovePage.open();

    });
    it('click on “Add Element” three times', () => {
        
        AddRemovePage.TapAdd();
        AddRemovePage.TapAdd();
        AddRemovePage.TapAdd();
           
    });
    it('checking That Three Delete Items Appeared', () => {
        
        expect(AddRemovePage.elements).toHaveChildren(3);
    
    });
    it('сlick on the Delete button', () => {
        
        AddRemovePage.TapDel();
        
    });
    it('сhecking that there are only two Delete items left', () => {
        
        expect(AddRemovePage.elements).toHaveChildren(2);
        
    });
   
});


