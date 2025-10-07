const { $ } = require('@wdio/globals');

module.exports = class NavigationBarComponent {
    get fullNameInput() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "Rebecca Winter"`]';
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/fullNameET"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get addressLine1Input() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "Mandorley 112"`]';
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/address1ET"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get addressLine2Input() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "Entrance 1"`]';
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/address2ET"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get cityInput() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "Truro"`]';
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/cityET"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get stateInput() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "Cornwall"`]';
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/stateET"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get zipCodeInput() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "89750"`]';
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/zipET"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get countryInput() {
        const iosSelector = '**/XCUIElementTypeTextField[`value == "United Kingdom"`]';
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/countryET"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get errorMsgFullName() {
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "Please provide your full name."`]';
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/fullNameErrorTV"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get errorMsgAddressLine1() {
        return $('[id="com.saucelabs.mydemoapp.android:id/address1ErrorTV"]') // Android
    }

    get errorMsgCity() {
        return $('[id="com.saucelabs.mydemoapp.android:id/cityErrorTV"]'); // Android
    }

    get errorMsgZipCode() {
        return $('[id="com.saucelabs.mydemoapp.android:id/zipErrorTV"]'); // Android
    }

    get errorMsgCountry() {
        return $('[id="com.saucelabs.mydemoapp.android:id/countryErrorTV"]'); // Android
    }

    /**
     * Fills out the shipping/billing address form with valid user data on iOS.
     * @param {Object} userData - user data to be entered into Shipping/Billing Address form.
     * @returns {void}
     */
    async populateFormIos(userData) {
        await this.fullNameInput.setValue(userData.name);
        await this.addressLine1Input.scrollIntoView();
        await this.addressLine1Input.setValue(userData.billingAddress);
        await this.cityInput.setValue(userData.billingCity);
        await this.stateInput.setValue(userData.billingState);
        await this.addressLine2Input.click();
        await this.zipCodeInput.waitForDisplayed({timeout: 5000});
        await this.zipCodeInput.setValue(userData.billingZipCode);
        await this.addressLine2Input.click();
        await this.countryInput.waitForDisplayed({timeout: 5000});
        await this.countryInput.setValue(userData.country);
        await browser.hideKeyboard();
    }

    /**
     * Fills out the shipping/billing address form with valid user data on Android.
     * @param {Object} userData - user data to be entered into Shipping/Billing Address form.
     * @returns {void}
     */
    async populateFormAndroid(userData) {
        await this.fullNameInput.setValue(userData.name);
        await this.addressLine1Input.scrollIntoView();
        await this.addressLine1Input.setValue(userData.billingAddress);
        await this.cityInput.setValue(userData.billingCity);
        await this.stateInput.setValue(userData.billingState);
        await this.zipCodeInput.setValue(userData.billingZipCode);
        await this.countryInput.setValue(userData.country);
        await browser.hideKeyboard();
    }

}
