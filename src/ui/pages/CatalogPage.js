const { $ } = require('@wdio/globals')
const Page = require('./BasePage');

class CatalogPage extends Page {
    get backpackItem() {
        const iosSelector = 'name == "Product Name" AND label == "Sauce Labs Backpack"';
        const androidSelector = 'new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(0)';
        return driver.isAndroid
            ? $(`android=${androidSelector}`) // Android
            : $(`-ios predicate string:${iosSelector}`); // iOS
    }

    async selectBackpack() {
        await this.backpackItem.click();
    }
}

module.exports = new CatalogPage();
