import { test, expect } from '@playwright/test';

test.describe('Account', () => {
    
    test('Access Order', async ({ page }) => {
        await page.goto('/my-account/')
        await page.locator('.woocommerce-MyAccount-navigation-link--orders').click();
        await expect(page).toHaveURL(/.*orders/)
    })

    test('Access Download', async ({ page }) => {
        await page.goto('/my-account/');
        await page.locator('.woocommerce-MyAccount-navigation-link--downloads').click();
        await expect(page).toHaveURL(/.*downloads/)
    })
    
})

test.describe('Account Page', () => {
    test.use({ storageState: 'notLoggedInState.json'})

    test('Verify login and register button', async ({ page }) => {
        await page.goto('/my-account/')
        await expect(page.locator('button[name="login"]')).toBeVisible();
        await expect(page.locator('button[name="register"]')).toBeVisible()
    })
    
})

