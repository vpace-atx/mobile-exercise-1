const { $ } = require('@wdio/globals')

class NavigationBarComponent {
    get catalogTabBtn() {
        const androidSelector = 'new UiSelector().text("Catalog")';
        return driver.isAndroid
            ? $(`android=${androidSelector}`) // Android
            : $('~Catalog-tab-item'); // iOS
    }

    get cartTabBtn() {
        return driver.isAndroid
            ? $('~Displays number of items in your cart') // Android
            : $('~Cart-tab-item'); // iOS
    }

    get menuTabBtn() {
        return driver.isAndroid
            ? $('~View menu') // Android
            : $('~More-tab-item'); // iOS
    }

    get appLogo() {
        return driver.isAndroid
            ? $('~App logo and name') //Android
            : $('~AppTitle Icons'); // iOS
    }

    /**
     * Clicks the Menu tab from the Navigation bar to open the menu page.
     * @returns {void}
     */
    async openMenu() {
        await this.menuTabBtn.click();
    }

    /**
     * Clicks the Cart tab from the Navigation bar to open the cart page.
     * @returns {void}
     */
    async openCart() {
        await this.cartTabBtn.click();
    }
}

module.exports = new NavigationBarComponent();
