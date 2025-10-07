const { $ } = require('@wdio/globals');
const ShippingBillingAddressForm = require('../../components/forms/ShippingBillingAddressForm');

class CheckoutPage extends ShippingBillingAddressForm {
    get toPaymentBtn() {
        const selector = '**/XCUIElementTypeButton[`name == "To Payment"`]';
        return $(`-ios class chain:${selector}`);
    }

    get placeOrderBtn() {
        const selector = '**/XCUIElementTypeButton[`name == "Place Order"`]';
        return $(`-ios class chain:${selector}`);
    }

    /**
     * Fills out the shipping address form with valid user data then clicks button to proceed to payment page on IOS.
     * @param {Object} userData - user data to be entered into Shipping/Billing Address form.
     * @returns {void}
     */
    async enterShippingAddressIos(userData) {
        await this.populateFormIos(userData);
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
