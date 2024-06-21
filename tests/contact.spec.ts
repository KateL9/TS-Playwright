import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import { faker } from '@faker-js/faker';

let contactPage: ContactPage;

test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigate();
})

test.describe('Contact', () => {
    test('Open Contact page, fill in the form and assert the success message', async ({ page }) => {

        // fill in the form and submit
        await contactPage.enterNameField(faker.person.firstName());
        await contactPage.enterEmailField(faker.internet.email());
        await contactPage.enterPhoneField(faker.phone.number());
        await contactPage.enterMessageField(faker.lorem.paragraph());
        await contactPage.clickSubmitButton();

        // asert the success message
        await expect(contactPage.successSubmittingMessage).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })
})