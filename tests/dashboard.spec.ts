import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login';

test('Validate Dashboard', async ({ page }) => {

    await page.goto(
        'https://deepakrao64.github.io/SB/MutualFundClient/FinVersePortal/index.html'
    );

    // Create object of LoginPage
    const loginPage = new LoginPage(page);

    // Login
    await loginPage.enterUserName();
    await loginPage.enterPassword();
    await loginPage.clickOnSignInSecurely();

    // Validate Dashboard
    await loginPage.validateWelComeheaderDisplayed();
    await loginPage.validatePortfolioValueCardDisplayed();
});


test('Validate Portfolio Value In Dashboard', async ({ page }) => {

    await page.goto(
        'https://deepakrao64.github.io/SB/MutualFundClient/FinVersePortal/index.html'
    );

    // Create object of page class
    const loginPage = new LoginPage(page);

    // Login
    await loginPage.enterUserName();
    await loginPage.enterPassword();
    await loginPage.clickOnSignInSecurely();

    // Validate
    await loginPage.validateWelComeheaderDisplayed();
    await loginPage.validatePortfolioValueCardDisplayed();
});


test('Validate Asset Allocation In Dashboard', async ({ page }) => {

    await page.goto(
        'https://deepakrao64.github.io/SB/MutualFundClient/FinVersePortal/index.html'
    );

    // Create object of page class
    const loginPage = new LoginPage(page);

    // Login
    await loginPage.enterUserName();
    await loginPage.enterPassword();
    await loginPage.clickOnSignInSecurely();

    // Validate Asset Allocation
    await expect(page.getByText('Debt20%')).toBeVisible();
    await expect(page.getByText('Equity60%')).toBeVisible();
    await expect(page.getByText('Gold10%')).toBeVisible();
    await expect(page.getByText('Liquid10%')).toBeVisible();
});