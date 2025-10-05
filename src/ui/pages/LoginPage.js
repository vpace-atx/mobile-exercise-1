const { $ } = require('@wdio/globals')
const Page = require('./BasePage');

class LoginPage extends Page {


    get validAccount () {
        const iosSelector = '**/XCUIElementTypeButton[`name == "bob@example.com"`]'
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/username1TV"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get lockedAccount () {
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "alice@example.com"`]'
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/username2TV"]') // Android
            : $(`-ios class chain:${iosSelector}`); // iOS
    }

    get userLoggedOutErrorMessage() {
        const androidSelector = 'new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/passwordErrorTV")'
        return $(`android=${androidSelector}`); // Android

    }

    get passwordRequiredErrorMessage() {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/passwordErrorTV"]') // Android
            : $('~Password is required'); // iOS

    }

    get usernameInput () {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/nameET"]') // Android
            : $('XCUIElementTypeTextField'); // iOS
    }

    get passwordInput () {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/passwordET"]') // Android
            : $('XCUIElementTypeSecureTextField'); // iOS
    }

    get btnSubmit () {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/buttonLL"]') // Android
            : $('button[name="Login"]'); // iOS
    }

    async validLogin () {
        await this.validAccount.click();
        await this.btnSubmit.click();
    }

    async invalidLogin () {
        await this.lockedAccount.click();
        await this.btnSubmit.click();
    }

    async attemptLoginWithoutPassword() {
        await this.validAccount.click();
        await this.passwordInput.setValue('');
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
