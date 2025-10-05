const { expect } = require('@wdio/globals');
const LoginPage = require('../ui/pages/LoginPage');
const MenuPage = require('../ui/pages/MenuPage');
const LogoutModal = require('../ui/components/modals/LogoutModal');
const NavigationBar = require('../ui/components/NavigationBarComponent');

describe('Cart workflow tests', () => {
    beforeEach(async () => {
        await NavigationBar.openMenu();
        await MenuPage.clickLoginBtn();
        await LoginPage.validLogin();

    });

    it.only('user can add and remove item from cart', async () => {
        // await NavigationBar.openMenu();
        // await expect(await MenuPage.logoutBtn).toBeDisplayed();
    })

    it('cart contents and price accurately reflect what user added', async () => {
        // await NavigationBar.openMenu();
        // await expect(await MenuPage.logoutBtn).toBeDisplayed();
    })

    afterEach(async () => {
        await MenuPage.logout();
        if (driver.isAndroid) await LogoutModal.confirmLogout();
    })
})

