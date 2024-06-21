import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToHomePage();
})


test.describe('Home', () => {

    test('Open Home page and verify title', async ({ page }) => {
        // verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })

    test('Open About us page and verify title', async ({page}) => {
        await page.goto('/about')
        
        // verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })
    
    test('Click get started button using CSS Selector', async({ page }) => {

        // click the button
        await homePage.getStarted.click()

        //verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/)
    })

    test('Verify heading text is visible using text Selector', async({ page }) => {
        //verify heading text is visible
        await expect(homePage.headingText).toBeVisible();
    })

    //Text and CSS Selector
    test('Verify heading text via CSS and text Selector', async({ page }) => {
        //verify home text is visible
        await expect(homePage.homeText).toBeVisible();
})

    // XPath
    //Text and CSS Selector
    test('Verify Search icon is visible via XPath Selector', async({ page }) => {
       //verify search icon is visible
        await expect(homePage.search).toBeVisible();
    })

        // Multiple elements
    test('Verify text of all nav links', async({ page }) => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ]
        // find the nav links
        homePage.navLinks;

        //verify nav links text
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    })
})