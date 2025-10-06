const { $ } = require('@wdio/globals');
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

    /**
     * Fills out the shipping address form with valid user data then clicks button to proceed to payment page.
     * @param {Object} userData - user data to be entered into Shipping/Billing Address form.
     * @returns {void}
     */
    async enterShippingAddress(userData) {
        await this.populateForm(userData)
        await this.clickToPaymentBtn();
    }

    /**
     * Clicks button to proceed to payment page.
     * @returns {void}
     */
    async clickToPaymentBtn() {
        await this.toPaymentBtn.click();
    }

    /**
     * Clicks button to place order and proceed to order confirmation page
     * @returns {void}
     */
    async placeOrder() {
        await this.placeOrderBtn.click();
    }
}

module.exports = new CheckoutPage();
