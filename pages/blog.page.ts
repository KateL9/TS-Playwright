import { Locator, Page } from '@playwright/test';

class BlogPage {
    private page: Page;
    postList: Locator;
    
    constructor(page) {
        this.page = page;
        this. postList = page.locator('#recent-posts-3 ul li');
    }
    async navigate() {
        await this.page.goto('/blog')
    }
    totalLength() {
        return this.postList.count()
    }
}

export default BlogPage;