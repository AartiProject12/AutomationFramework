import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

    page: Page;
    userName: Locator;
    password: Locator;
    signInSecurlyBtn: Locator;
    welcomeHeader: Locator;
    portfolioValueCard: Locator;

    constructor(page: Page) {

        this.page = page;

        this.userName = page.getByTestId('login-username');

        this.password = page.getByTestId('login-password');

        this.signInSecurlyBtn = page.getByTestId('login-button');

        this.welcomeHeader = page.getByText('Welcome');

        this.portfolioValueCard = page.getByText('Portfolio Value');
    }


    async enterUserName() {
        await this.userName.fill('deepak');
    }


    async enterPassword() {
        await this.password.fill('Password@123');
    }


    async clickOnSignInSecurely() {
        await this.signInSecurlyBtn.click();
    }


    async validateWelComeheaderDisplayed() {
        await expect(this.welcomeHeader).toBeVisible();
    }


    async validatePortfolioValueCardDisplayed() {
        await expect(this.portfolioValueCard).toBeVisible();
    }
}