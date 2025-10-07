const { $ } = require('@wdio/globals');

class MenuPage {
    get loginBtn() {
        return $('~Login Menu Item');
    }

    get logoutBtn() {
        return $('~Logout Menu Item');
    }

    /**
     * Clicks login button from Menu page to proceed to Login page.
     * @returns {void}
     */
    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    /**
     * Clicks logout button from Menu page in order to log user out
     * @returns {void}
     */
    async logout() {
        await this.logoutBtn.click();
    }
}

module.exports = new MenuPage();