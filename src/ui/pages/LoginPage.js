const { $ } = require('@wdio/globals');

class LoginPage {
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

    /**
     * Logs in with valid credentials by selecting an account from the login page.
     * @returns {void}
     */
    async validLogin () {
        await this.validAccount.click();
        await this.btnSubmit.click();
    }

    /**
     * Attempts to log in with a locked account by selecting it from the login page.
     * @returns {void}
     */
    async invalidLogin () {
        await this.lockedAccount.click();
        await this.btnSubmit.click();
    }

    /**
     * Attemps to log in with a valid username and no password.
     * @returns {void}
     */
    async attemptLoginWithoutPassword() {
        await this.validAccount.click();
        await this.passwordInput.setValue('');
        await driver.hideKeyboard();
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
