const { $ } = require('@wdio/globals')
const Page = require('./BasePage');

class CartPage extends Page {
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

    get pricePerItemTextAndroid() {
        return $('[id="com.saucelabs.mydemoapp.android:id/priceTV"]'); // Android

    }

    pricePerItemTextIOS(price) {
        const iosSelector = `**/XCUIElementTypeStaticText[\`name == "$ ${price}"]"\`]`;
        return $(`-ios class chain:${iosSelector}`); // iOS
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
        const iosSelector = `**/XCUIElementTypeStaticText[\`name == "${quantity}"\`]`;
        return  $(`-ios class chain:${iosSelector}`) // iOS
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutBtn.click();
    }

    async subtractOneItem() {
        await this.quantityPlusBtn.click();
    }

    async addOneItem() {
        await this.quantityPlusBtn.click();
    }

    async RemoveItem() {
        await this.removeItemBtn.click();
    }
}

module.exports = new CartPage();
