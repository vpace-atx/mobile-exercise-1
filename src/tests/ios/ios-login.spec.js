const { expect } = require('@wdio/globals');
const LoginPage = require('../../ui/pages/LoginPage');
const MenuPage = require('../../ui/pages/MenuPage');
const NavigationBar = require('../../ui/components/navigation/NavigationBarComponent');

describe('Successful login page tests on iOS device', () => {
    beforeEach(async () => {
        await driver.relaunchActiveApp();
        await NavigationBar.openMenu();
        await MenuPage.clickLoginBtn();
    });

    it('should allow user to login with valid credentials on iOS device', async () => {
        await LoginPage.validLogin();
        await expect(await NavigationBar.appLogo).toBeDisplayed();
        await NavigationBar.openMenu();
        await expect(await MenuPage.logoutBtn).toBeDisplayed();
    })

    afterEach(async () => {
        await NavigationBar.openMenu();
        await MenuPage.logout();
    })
})

describe('Unsuccessful login page tests on iOS device', () => {
    beforeEach(async () => {
        await driver.relaunchActiveApp();
        await NavigationBar.openMenu();
        await MenuPage.clickLoginBtn();
    });

    it('should not allow user without password to login on iOS device', async () => {
        await LoginPage.attemptLoginWithoutPassword();
        await expect(LoginPage.passwordRequiredErrorMessage).toHaveText('Password is required');
    })
})