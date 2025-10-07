const { $ } = require('@wdio/globals');

class ProductPage {
    get addToCartBtn() {
        return $('~Tap to add product to cart');
    }

    /**
     * Adds a specific item to the cart.
     * @returns {void}
     */
    async addItemToCart() {
        await this.addToCartBtn.click();
    }
}

module.exports = new ProductPage();
