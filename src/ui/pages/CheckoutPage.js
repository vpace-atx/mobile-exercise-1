const { $ } = require('@wdio/globals')
const Page = require('./BasePage');
const ShippingBillingAddressForm = require('../components/forms/ShippingBillingAddressForm');

class CheckoutPage extends ShippingBillingAddressForm {

    get toPaymentBtn() {
        const iosSelector = '**/XCUIElementTypeButton[`name == "To Payment"`]';
        return driver.isAndroid
            ? $('~Saves user info for checkout') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }



    get placeOrderBtn() {
        const iosSelector = '**/XCUIElementTypeButton[`name == "Place Order"`]';
        return driver.isAndroid
            ? $('~Completes the process of checkout') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    async enterShippingAddress(userData) {
        await this.populateForm(userData)
        await this.clickToPaymentBtn();
    }

    async clickToPaymentBtn() {
        await this.toPaymentBtn.click();
    }

    async placeOrder() {
        await this.placeOrderBtn.click();
    }
}

module.exports = new CheckoutPage();
