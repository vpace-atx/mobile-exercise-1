const { $ } = require('@wdio/globals');

class CartPage {
    get checkoutCompleteText() {
        return $('[id="com.saucelabs.mydemoapp.android:id/completeTV"]');
    }
}

module.exports = new CartPage();
