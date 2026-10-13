import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login';

test('Validate Dashboard', async ({ page }) => {

    await page.goto(
        'https://deepakrao64.github.io/SB/MutualFundClient/FinVersePortal/index.html'
    );
});