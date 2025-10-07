const { $ } = require('@wdio/globals');

class LoginPage {
    get validAccount () {
        return $('[id="com.saucelabs.mydemoapp.android:id/username1TV"]')
    }

    get lockedAccount () {
        return $('[id="com.saucelabs.mydemoapp.android:id/username2TV"]');
    }

    get passwordRequiredErrorMessage() {
        const selector = 'new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/passwordErrorTV")';
        return $(`android=${selector}`);

    }

    get usernameInput () {
        return $('[id="com.saucelabs.mydemoapp.android:id/nameET"]');
    }

    get passwordInput () {
        return $('[id="com.saucelabs.mydemoapp.android:id/passwordET"]');
    }

    get btnSubmit () {
        return $('[id="com.saucelabs.mydemoapp.android:id/buttonLL"]');
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
