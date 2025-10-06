const { $ } = require('@wdio/globals')

class LogoutModal {
    get modalLogoutBtn() {
        return $('[id="android:id/button1"]');
    }

    /**
     * Clicks the confirm button on the logout modal in order to successfully log user out.
     * @returns {void}
     */
    async confirmLogout() {
        await this.modalLogoutBtn.click();
    }
}

module.exports = new LogoutModal();
