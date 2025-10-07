const { expect } = require('@wdio/globals');
const LoginPage = require('../../../ui/page-objects/android/LoginPage');
const MenuPage = require('../../../ui/page-objects/android/MenuPage');
const LogoutModal = require('../../../ui/components/modals/LogoutModal');
const NavigationBar = require('../../../ui/components/navigation/NavigationBarComponent');

describe('Successful login page tests', () => {
    beforeEach(async () => {
        await driver.relaunchActiveApp();
        await NavigationBar.openMenu();
        await MenuPage.clickLoginBtn();
    });

    it('should allow user to login with valid credentials', async () => {
        await LoginPage.validLogin();
        await expect(await NavigationBar.appLogo).toBeDisplayed();
        await NavigationBar.openMenu();
        await expect(await MenuPage.logoutBtn).toBeDisplayed();
    })

    afterEach(async () => {
        await NavigationBar.openMenu();
        await MenuPage.logout();
        await LogoutModal.confirmLogout();
    })
})

describe('Unsuccessful login page tests', () => {
    beforeEach(async () => {
        await driver.relaunchActiveApp();
        await NavigationBar.openMenu();
        await MenuPage.clickLoginBtn();
    });

    it('should not allow locked out user to successfully login', async () => {
        await LoginPage.invalidLogin();
        await expect(LoginPage.passwordRequiredErrorMessage).toHaveText('Sorry this user has been locked out.');
    })

    it('should not allow user without password to login', async () => {
        await LoginPage.attemptLoginWithoutPassword();
        await expect(LoginPage.passwordRequiredErrorMessage).toHaveText('Enter Password');
    })
})