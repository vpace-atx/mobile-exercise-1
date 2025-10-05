const { $ } = require('@wdio/globals')
const Page = require('./BasePage');

class MenuPage extends Page {
    get loginBtn() {
        return driver.isAndroid
            ? $('~Login Menu Item') // Android
            : $('~LogOut-menu-item'); // iOS

    }

    get logoutBtn() {
        return driver.isAndroid
            ? $('~Logout Menu Item') // Android
            : $('~LogOut-menu-item'); // iOS
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    async logout() {
        await this.logoutBtn.click();
    }
}

module.exports = new MenuPage();