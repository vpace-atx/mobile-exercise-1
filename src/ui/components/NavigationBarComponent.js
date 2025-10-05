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

    async openMenu() {
        await this.menuTabBtn.click();
    }

    async openCart() {
        await this.cartTabBtn.click();
    }

    async openCatalog() {
        driver.isAndroid
            ? await this.menuTabBtn.click().catalogTabBtn.click()
            : await this.catalogTabBtn.click();
    }
}

module.exports = new NavigationBarComponent();
