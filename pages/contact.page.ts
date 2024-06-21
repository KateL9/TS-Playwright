import { Locator, Page } from '@playwright/test';

class ContactPage {
    private page: Page;
    emailField: Locator;
    nameField: Locator;
    phoneField: Locator;
    messageField: Locator;
    submitButton: Locator;
    successSubmittingMessage: Locator;
    
    constructor(page) {
        this.page = page;
        this.emailField = page.locator('.contact-email input');
        this.nameField = page.locator('.contact-name input');
        this.phoneField = page.locator('.contact-phone input');
        this.messageField = page.locator('.contact-message textarea');
        this.submitButton = page.locator('button[type = submit]');
        this.successSubmittingMessage = page.locator('div[role = "alert"]');
    }
    async navigate() {
        await this.page.goto('/contact')
    }
    async submitForm(email:string, name:string, phone:string, message:string) {
        await this.emailField.fill(email)
        await this.nameField.fill(name)
        await this.phoneField.fill(phone)
        await this.messageField.fill(message)
        await this.submitButton.click()
    };
    async enterEmailField(email:string) {
        await this.emailField.fill(email)
    }
    async enterNameField(name:string) {
        await this.nameField.fill(name)
    }
    async enterPhoneField(phone:string) {
        await this.phoneField.fill(phone)
    }
    async enterMessageField(message:string) {
        await this.messageField.fill(message)
    }
    async clickSubmitButton() {
        await this.submitButton.click()
    }
}

export default ContactPage;