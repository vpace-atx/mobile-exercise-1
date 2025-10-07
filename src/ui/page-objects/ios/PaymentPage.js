const { $ } = require('@wdio/globals');
const ShippingBillingAddressForm = require('../../components/forms/ShippingBillingAddressForm');

class PaymentPage extends ShippingBillingAddressForm {
    get cardNameInput() {
        const selector = '**/XCUIElementTypeTextField[`value == "Maxim Winter"`]';
        return $(`-ios class chain:${selector}`);
    }

    get cardNumberInput() {
        const selector = '**/XCUIElementTypeTextField[`value == "3258 1265 7568 7896"`]';
        return $(`-ios class chain:${selector}`);
    }

    get expirationDateInput() {
        const selector = '**/XCUIElementTypeTextField[`value == "03/25"`]';
        return $(`-ios class chain:${selector}`);
    }

    get securityCodeInput() {
        const selector = '**/XCUIElementTypeTextField[`value == "123"`]';
        return $(`-ios class chain:${selector}`);
    }

    get billingShippingSameChkBx() {
        const selector = '**/XCUIElementTypeOther[`name == "Payment-screen"`]/XCUIElementTypeOther[2]/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeButton[1]';
        return $(`-ios class chain:${selector}`);
    }

    get reviewOrderBtn() {
        const selector = '**/XCUIElementTypeStaticText[`name == "Review Order"`]';
        return $(`-ios class chain:${selector}`);
    }

    get errorMsgCardName() {
        const selector = '**/XCUIElementTypeStaticText[`name == "Value looks invalid."`]';
        return $(`-ios class chain:${selector}`);
    }

    /**
     * Fills out the payment information form with valid user data.
     * @param {Object} userData - user data to be entered into Shipping/Billing Address form.
     * @returns {void}
     */
    async enterPaymentInfo(userData) {
        await this.cardNameInput.setValue(userData.name);
        await this.cardNumberInput.setValue(userData.cardNumber);
        await this.expirationDateInput.setValue(userData.expirationDate);
        await this.securityCodeInput.setValue(userData.securityCode);
        await $('~Hide keyboard').click();
    }

    /**
     * Unchecks check box saying billing and shipping address are the same, opens billing address form.
     * @returns {void}
     */
    async checkDifferentBillingAddress() {
        await this.billingShippingSameChkBx.click();
    }

    /**
     * Clicks review order button and proceeds to Checkout page.
     * @returns {void}
     */
    async reviewOrder() {
        await this.reviewOrderBtn.click();
    }

    /**
     * Fills out the billing address form with valid user data on iOS.
     * @param {Object} userData - user data to be entered into Shipping/Billing Address form.
     * @returns {void}
     */
    async enterBillingInfoIos(userData) {
        await this.populateFormIos(userData);
    }
}

module.exports = new PaymentPage();
