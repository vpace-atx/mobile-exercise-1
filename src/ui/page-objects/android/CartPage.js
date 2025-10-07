const { $ } = require('@wdio/globals');

class CartPage {
    get proceedToCheckoutBtn() {
        return $('~Confirms products for checkout');
    }

    get quantityPlusBtn() {
        return $('~Increase item quantity');
    }

    get quantityMinusBtn() {
        return $('~Decrease item quantity');
    }

    get removeItemBtn() {
        return $('~Removes product from cart');
    }

    get emptyCartText() {
        const selector = 'new UiSelector().text("Oh no! Your cart is empty. Fill it up with swag to complete your purchase.")';
        return $(`android=${selector}`);
    }

    get itemQuantityTextAndroid() {
        return $('[id="com.saucelabs.mydemoapp.android:id/noTV"]');
    }

    get totalPriceTextAndroid() {
        return $('[id="com.saucelabs.mydemoapp.android:id/totalPriceTV"]');
    }

    get totalQuantityTextAndroid() {
        return $('[id="com.saucelabs.mydemoapp.android:id/itemsTV"]');
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

    async removeItem() {
        await this.removeItemBtn.click();
    }
}

module.exports = new CartPage();
