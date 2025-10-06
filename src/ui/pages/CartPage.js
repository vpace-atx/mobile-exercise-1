const { $ } = require('@wdio/globals');

class CartPage {
    get proceedToCheckoutBtn() {
        return driver.isAndroid
            ? $('~Confirms products for checkout') // Android
            : $('~ProceedToCheckout'); // iOS
    }

    get quantityPlusBtn() {
        return driver.isAndroid
            ? $('~Increase item quantity') // Android
            : $('~AddPlus Icons'); // iOS
    }

    get quantityMinusBtn() {
        return driver.isAndroid
            ? $('~Decrease item quantity') // Android
            : $('~SubtractMinus Icons'); // iOS
    }

    get removeItemBtn() {
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "Remove Item"`]';
        return driver.isAndroid
            ? $('~Removes product from cart') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get emptyCartText() {
        const androidSelector = 'new UiSelector().text("Oh no! Your cart is empty. Fill it up with swag to complete your purchase.")'
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "Oh no! Your cart is empty. Fill it up with swag to complete your purchase."`]'
        return driver.isAndroid
            ? $(`android=${androidSelector}`) // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get itemQuantityTextAndroid() {
        return $('[id="com.saucelabs.mydemoapp.android:id/noTV"]'); // Android
    }

    itemQuantityTextIOS(quantity) {
        const iosSelector = `**/XCUIElementTypeStaticText[\`name == "${quantity}"\`][1]`;
        return $(`-ios class chain:${iosSelector}`) // iOS
    }

    get totalPriceTextAndroid() {
        return  $('[id="com.saucelabs.mydemoapp.android:id/totalPriceTV"]'); // Android
    }

    totalPriceTextIOS(price) {
        const iosSelector = `**/XCUIElementTypeStaticText[\`name == "$ ${price}"\`]`;
        return  $(`-ios class chain:${iosSelector}`) // iOS
    }

    get totalQuantityTextAndroid() {
        return  $('[id="com.saucelabs.mydemoapp.android:id/itemsTV"]'); // Android
    }

    totalQuantityTextIOS(quantity) {
        return  $(`~${quantity} Items`) // iOS
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
