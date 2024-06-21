import { test, expect } from '@playwright/test';
const path = require('path');
import CartPage from '../pages/cart.page';

test.describe('Upload', () => {
    let fileName = ['attachment.png', 'output-onlinepngtools.png'];
    for (let name of fileName) {
        test(`Open Cart page and upload ${name}`, async ({ page }) => {
            const cartPage = new CartPage(page);
            // Open URL
            await page.goto('/cart')
            
            // store test file path
            const filePath = path.join(__dirname, `../data/${name}`);

            //upload a file
            cartPage.uploadComponent().uploadFile(filePath);

            //assertion
            await expect(cartPage.uploadComponent().headerMessage).toContainText('uploaded successfully')
})
    }
})
