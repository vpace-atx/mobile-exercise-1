const { $ } = require('@wdio/globals');
const ShippingBillingAddressForm = require('../components/forms/ShippingBillingAddressForm');

class PaymentPage extends ShippingBillingAddressForm {
    get cardNameInput() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "Maxim Winter"`]'
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/nameET"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get cardNumberInput() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "3258 1265 7568 7896"`]'
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/cardNumberET"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get expirationDateInput() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "03/25"`]'
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/expirationDateET"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get securityCodeInput() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "123"`]';
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/securityCodeET"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get billingShippingSameChkBx() {
        const iosSelector = '**/XCUIElementTypeOther[`name == "Payment-screen"`]/XCUIElementTypeOther[2]/XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeButton[1]'
        return driver.isAndroid
            ? $('~Select if User billing address and shipping address are same') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get reviewOrderBtn() {
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "Review Order"`]';
        return driver.isAndroid
            ? $('~Saves payment info and launches screen to review checkout data') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get errorMsgCardName() {
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "Value looks invalid."`]'
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/nameErrorTV"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get cardNumberErrorIcon() {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/cardNumberErrorIV"]') // Android
            : $(''); // iOS
    }

    get errorMsgExpirationDate() {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/expirationDateErrorTV"]') // Android
            : $(''); // iOS
    }

    get errorMsgSecurityCode() {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/securityCodeErrorTV"]') // Android
            : $(''); // iOS
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
        if (driver.isIOS) {
            await $('~Hide keyboard').click();
        }
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
     * Fills out the billing address form with valid user data.
     * @param {Object} userData - user data to be entered into Shipping/Billing Address form.
     * @returns {void}
     */
    async enterBillingInfo(userData) {
        await this.populateForm(userData);
    }
}

module.exports = new PaymentPage();
