const { $ } = require('@wdio/globals');

class ProductPage {
    get addToCartBtn() {
        return driver.isAndroid
            ? $('~Tap to add product to cart') // Android
            : $('~Add To Cart'); // iOS

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
