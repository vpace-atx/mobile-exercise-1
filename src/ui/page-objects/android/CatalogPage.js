const { $ } = require('@wdio/globals');

class CatalogPage {
    get backpackItem() {
        const androidSelector = 'new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(0)';
        return $(`android=${androidSelector}`);
    }

    /**
     * Selects the backpack item from the catalog.
     * @returns {void}
     */
    async selectBackpack() {
        await this.backpackItem.click();
    }
}

module.exports = new CatalogPage();
