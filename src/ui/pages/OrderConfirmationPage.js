const { $ } = require('@wdio/globals')
const Page = require('./BasePage');

class CartPage extends Page {
    get checkoutCompleteText() {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/completeTV"]') // Android
            : $('~Checkout Complete'); // iOS
    }
}

module.exports = new CartPage();
