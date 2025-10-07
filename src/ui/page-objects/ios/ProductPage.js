const { $ } = require('@wdio/globals');

class ProductPage {
    get addToCartBtn() {
        return $('~Add To Cart');
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
