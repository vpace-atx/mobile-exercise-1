const { $ } = require('@wdio/globals')
const Page = require('./BasePage');
const ShippingBillingAddressForm = require('../components/forms/ShippingBillingAddressForm');

class PaymentPage extends ShippingBillingAddressForm {
    get cardNameInput() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "Maxim Winter"`]'
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/nameET"]')  // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get cardNumberInput() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "3258 1265 7568 7896"`]`]'
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/cardNumberET"]')  // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get expirationDateInput() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "03/25"`]'
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/expirationDateET"]')  // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get securityCodeInput() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "123"`]';
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/securityCodeET"]')  // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get billingShippingSameChkBx() {
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "My billing address is the same as my shipping address."`]'
        return driver.isAndroid
            ? $('~Select if User billing address and shipping address are same')  // Android
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

    async enterPaymentInfo(userData) {
        await this.cardNameInput.setValue(userData.name);
        await this.cardNumberInput.setValue(userData.cardNumber);
        await this.expirationDateInput.setValue(userData.expirationDate);
        await this.securityCodeInput.setValue(userData.securityCode);
    }

    async checkDifferentBillingAddress() {
        await this.billingShippingSameChkBx.click();
    }

    async reviewOrder() {
        await this.reviewOrderBtn.click();
    }

    async enterBillingInfo(userData) {
        await this.populateForm(userData);
        if (driver.isIOS) {
            await $('~Hide keyboard').click();
        }
    }
}

module.exports = new PaymentPage();
