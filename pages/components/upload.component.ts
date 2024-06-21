import { Page, Locator } from '@playwright/test';

class UploadComponent {
    private page: Page;
    inputFile: string;
    uploadBtn: Locator;
    headerMessage: Locator;
    constructor(page) {
        this.page = page;
        this.inputFile = 'input#upfile_1';
        //this.inputFile = document.querySelector('input#upfile_1');
        this.uploadBtn = page.locator('#upload_1');
        this.headerMessage = page.locator('#wfu_messageblock_header_1_1');
    }

    async uploadFile(filePath: string) {
        // upload test file
        await this.page.setInputFiles(this.inputFile, filePath)
        // click the submit button
        await this.uploadBtn.click();
    }
}

export default UploadComponent;