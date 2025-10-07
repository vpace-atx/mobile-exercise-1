const { $ } = require('@wdio/globals');

class LoginPage {
    get validAccount () {
        const selector = '**/XCUIElementTypeButton[`name == "bob@example.com"`]';
        return $(`-ios class chain:${selector}`);
    }

    get passwordRequiredErrorMessage() {
        return $('~Password is required');
    }

    get usernameInput () {
        return $('XCUIElementTypeTextField');
    }

    get passwordInput () {
        return $('XCUIElementTypeSecureTextField');
    }

    get btnSubmit () {
        return $('button[name="Login"]');
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
