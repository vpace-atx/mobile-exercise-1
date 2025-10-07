const { $ } = require('@wdio/globals');

class CartPage {
    get checkoutCompleteText() {
        return $('~Checkout Complete');
    }
}

module.exports = new CartPage();
