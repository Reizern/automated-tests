const FileUpload = require('../pages/fileUpload.page');


describe('FileUpload', () => {
    
    it('open page FileUpload', () => {

        FileUpload.open();

    });
    it('selecting any file from PC', () => {
        
       FileUpload.fileSelection();
           
    });
    it('click Upload', () => {
        
        FileUpload.clickUpload();
    
    });
    it('сhecking that the "File Uploaded" message is displayed', () => {
        
        expect(FileUpload.message).toHaveTextContaining('File Uploaded!');
    
    });
   
});

