const { $ } = require('@wdio/globals')
const Page = require('./BasePage');

class ProductPage extends Page {
    get addToCartBtn() {
        return driver.isAndroid
            ? $('~Tap to add product to cart') // Android
            : $('~Add To Cart'); // iOS

    }

    get quantityPlusBtn() {
        return driver.isAndroid
            ? $('~Increase item quantity') // Android
            : $('~AddPlus Icons'); // iOS
    }

    get quantityMinusBtn() {
        return driver.isAndroid
            ? $('~Decrease item quantity') // Android
            : $('~SubtractMinus Icons'); // iOS
    }

    get getPriceText() {
        return driver.isAndroid
            ? $('[id="com.saucelabs.mydemoapp.android:id/priceTV"]') // Android
            : $('~Price'); // iOS
    }

    async addItemToCart() {
        await this.addToCartBtn.click();
    }
}

module.exports = new ProductPage();
