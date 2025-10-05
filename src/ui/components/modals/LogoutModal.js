const { $ } = require('@wdio/globals')

class LogoutModal {
    get modalLogoutBtn() {
        return $('[id="android:id/button1"]');
    }

    async confirmLogout() {
        await this.modalLogoutBtn.click();
    }
}

module.exports = new LogoutModal();
