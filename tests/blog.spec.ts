import { test, expect } from '@playwright/test';
import BlogPage from '../pages/blog.page';

let blogPage: BlogPage;

test.beforeEach(async ({ page }) => {
    blogPage = new BlogPage(page);
    await blogPage.navigate()
})

test.describe('Blog', () => {
    test('Open Blog page count and verify the length of each list item', async ({ page }) => {
                const blogPage = new BlogPage(page);
                
                // loop through the list and assert the char length < 10
                 for (const el of await blogPage.postList.elementHandles()) {
                    //console.log((await el.textContent()).length);
                    let textContent = await el.textContent();
                    let trimmedLenght = textContent?.trim().length;
                    expect(trimmedLenght).toBeGreaterThan(10);
                }

                 // assert the total length = 5
                expect(await blogPage.totalLength()).toEqual(5)
    })
})
