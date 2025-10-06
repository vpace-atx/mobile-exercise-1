const { $ } = require('@wdio/globals');

class CartPage {
    get checkoutCompleteText() {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/completeTV"]') // Android
            : $('~Checkout Complete'); // iOS
    }
}

module.exports = new CartPage();
