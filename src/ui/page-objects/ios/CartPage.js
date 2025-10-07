const { $ } = require('@wdio/globals');

class CartPage {
    get proceedToCheckoutBtn() {
        return $('~ProceedToCheckout');
    }

    get quantityPlusBtn() {
        return $('~AddPlus Icons');
    }

    get quantityMinusBtn() {
        return $('~SubtractMinus Icons');
    }

    get removeItemBtn() {
        const selector = '**/XCUIElementTypeStaticText[`name == "Remove Item"`]';
        return $(`-ios class chain:${selector}`);
    }

    get emptyCartText() {
        const selector = '**/XCUIElementTypeStaticText[`name == "Oh no! Your cart is empty. Fill it up with swag to complete your purchase."`]';
        return $(`-ios class chain:${selector}`);
    }

    itemQuantityTextIOS(quantity) {
        const selector = `**/XCUIElementTypeStaticText[\`name == "${quantity}"\`][1]`;
        return $(`-ios class chain:${selector}`);
    }

    totalPriceTextIOS(price) {
        const selector = `**/XCUIElementTypeStaticText[\`name == "$ ${price}"\`]`;
        return $(`-ios class chain:${selector}`);
    }

    totalQuantityTextIOS(quantity) {
        return $(`~${quantity} Items`);
    }

    /**
     * Clicks the Cart tab from the Navigation bar to open the cart page.
     * @returns {void}
     */
    async proceedToCheckout() {
        await this.proceedToCheckoutBtn.click();
    }

    /**
     * Subtracts one of a particular item from cart.
     * @returns {void}
     */
    async subtractOneItem() {
        await this.quantityMinusBtn.click();
    }

    /**
     * Adds one more of a particular item to cart.
     * @returns {void}
     */
    async addOneItem() {
        await this.quantityPlusBtn.click();
    }

    /**
     * Adds number of a particular item to cart. Iterates over loop that number of times to adds item.
     * @param {number} quantity - The number of the item to be added
     * @returns {void}
     */
    async addQuantityOfItem(quantity) {
        for (let i = 0; i < quantity; i++) {
            await this.quantityPlusBtn.click();
        }
    }

    /**
     * Removes particular item (whole quantity) from cart.
     * @returns {void}
     */
    async removeItem() {
        await this.removeItemBtn.click();
    }
}

module.exports = new CartPage();
