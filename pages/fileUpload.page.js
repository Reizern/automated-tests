const Page = require('./page');

class fileUpload extends Page {
    
    get btnSelectFile () { return $('#file-upload') }
    get btnUpload () { return $('#file-submit') }
    get message () { return $('h3=File Uploaded!') }
    
    fileSelection () {
   
        this.btnSelectFile.setValue('D:\\asd.jsx.txt');
    }
    clickUpload () {

      this.btnUpload.click();
         
    }
    
    open () {
        return super.open('upload');
    }
}
module.exports = new fileUpload();