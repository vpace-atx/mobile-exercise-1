const { $ } = require('@wdio/globals')

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
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/fullNameErrorTV"]') // Android
            : $('~Please provide your full name.'); // iOS
    }

    get errorMsgAddressLine1() {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/address1ErrorTV"]') // Android
            : $(); // iOS
    }

    get errorMsgCity() {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/cityErrorTV"]') // Android
            : $(); // iOS
    }

    get errorMsgZipCode() {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/zipErrorTV"]') // Android
            : $(); // iOS
    }

    get errorMsgCountry() {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/countryErrorTV"]') // Android
            : $(); // iOS
    }



    async populateForm(userData) {
        await this.fullNameInput.setValue(userData.name);
        await this.addressLine1Input.setValue(userData.billingAddress);
        await this.cityInput.setValue(userData.billingCity);
        await this.stateInput.setValue(userData.billingState);
        await this.zipCodeInput.setValue(userData.billingZipCode);
        await this.countryInput.setValue(userData.country);
    }

}
