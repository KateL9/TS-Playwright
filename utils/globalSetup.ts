import { Browser, FullConfig, chromium } from "@playwright/test";

async function globalSetup(config: FullConfig) {
        const browser = await chromium.launch();
        let page = await browser.newPage();

        await page.goto('https://practice.sdetunicorns.com/my-account/');
        await page.context().storageState({path: 'notLoggedInState.json'})

        // login
        await page.locator('input#username').fill('practiceuser1');
        await page.locator('form.login input[name = "password"]').fill('PracticePass1!');
        await page.locator('button[name="login"]').click();

        // save signed-in state to 'loggedInState.json
        await page.context().storageState({ path: 'loggedInState.json'})
        await browser.close();
}

export default globalSetup