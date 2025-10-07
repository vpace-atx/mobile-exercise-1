const { $ } = require('@wdio/globals');
const ShippingBillingAddressForm = require('../../components/forms/ShippingBillingAddressForm');

class PaymentPage extends ShippingBillingAddressForm {
    get cardNameInput() {
        return  $('[id="com.saucelabs.mydemoapp.android:id/nameET"]');
    }

    get cardNumberInput() {
        return $('[id="com.saucelabs.mydemoapp.android:id/cardNumberET"]');
    }

    get expirationDateInput() {
        return $('[id="com.saucelabs.mydemoapp.android:id/expirationDateET"]');
    }

    get securityCodeInput() {
        return $('[id="com.saucelabs.mydemoapp.android:id/securityCodeET"]');
    }

    get billingShippingSameChkBx() {
        return $('~Select if User billing address and shipping address are same');
    }

    get reviewOrderBtn() {
        return $('~Saves payment info and launches screen to review checkout data');
    }

    get errorMsgCardName() {
        return $('[id="com.saucelabs.mydemoapp.android:id/nameErrorTV"]');
    }

    get cardNumberErrorIcon() {
        return  $('[id="com.saucelabs.mydemoapp.android:id/cardNumberErrorIV"]');
    }

    get errorMsgExpirationDate() {
        return  $('[id="com.saucelabs.mydemoapp.android:id/expirationDateErrorTV"]');
    }

    get errorMsgSecurityCode() {
        return $('[id="com.saucelabs.mydemoapp.android:id/securityCodeErrorTV"]');
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
     * Fills out the billing address form with valid user data on Android.
     * @param {Object} userData - user data to be entered into Shipping/Billing Address form.
     * @returns {void}
     */
    async enterBillingInfoAndroid(userData) {
        await this.populateFormAndroid(userData);
    }
}

module.exports = new PaymentPage();
