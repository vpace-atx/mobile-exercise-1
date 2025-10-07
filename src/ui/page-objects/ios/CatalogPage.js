const { $ } = require('@wdio/globals');

class CatalogPage {
    get backpackItem() {
        const selector = 'name == "Product Name" AND label == "Sauce Labs Backpack"';
        return $(`-ios predicate string:${selector}`);
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
