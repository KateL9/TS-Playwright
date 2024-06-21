import { Page, Locator } from "@playwright/test";

class HomePage {
    page: Page;
    getStarted: Locator ;
    headingText: Locator;
    homeText: Locator;
    search: Locator;
    navLinks: Locator;
    constructor(page:Page) {
        this.page = page;
        this.getStarted = page.locator('#get-started');
        this.headingText = page.locator('text = Think different. Make different.');
        this.homeText = page.locator('#zak-primary-menu:has-text("Home")');
        this.search = page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-search__toggle"]');
        this.navLinks = page.locator('#zak-primary-menu li[id*=menu]');
    }

    async navigateToHomePage() {
        await this.page.goto('/')
    }
    getNavLinksText () {
        return this.navLinks.allTextContents()
    }
}

export default HomePage;