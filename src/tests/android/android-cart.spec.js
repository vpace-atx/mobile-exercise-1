const { expect } = require('@wdio/globals');
const NavigationBar = require('../../ui/components/navigation/NavigationBarComponent');
const CartPage = require('../../ui/pages/CartPage');
const CatalogPage = require("../../ui/pages/CatalogPage");
const ProductPage = require("../../ui/pages/ProductPage");
const {calculateTotalPrice} = require("../../utilities/helpers");

const quantity = Math.floor(Math.random() * 10) + 1;

describe('Cart workflow tests on Android device', () => {
    beforeEach(async () => {
        await driver.relaunchActiveApp();
        await CatalogPage.selectBackpack();
    });

    it('user can add and remove item from cart on Android device', async () => {
        await ProductPage.addItemToCart();
        await NavigationBar.openCart();
        await CartPage.removeItem();
        await expect(await CartPage.emptyCartText).toHaveText('Oh no! Your cart is empty. Fill it up with swag to complete your purchase.');
    })

    it('user can add and subtract duplicate item from cart on Android device', async () => {
        await ProductPage.addItemToCart();
        await NavigationBar.openCart();
        await CartPage.addOneItem();
        await expect(await CartPage.itemQuantityTextAndroid).toHaveText('2');
        await expect(await CartPage.totalQuantityTextAndroid).toHaveText('2 Items');
        await CartPage.subtractOneItem();
        await expect(await CartPage.itemQuantityTextAndroid).toHaveText('1');
        await expect(await CartPage.totalQuantityTextAndroid).toHaveText('1 Items');
    })

    it('user can add and remove item from cart on Android device', async () => {
        await ProductPage.addItemToCart();
        await NavigationBar.openCart();
        await CartPage.removeItem();
        await expect(await CartPage.emptyCartText).toHaveText('Oh no! Your cart is empty. Fill it up with swag to complete your purchase.');
    })

    it('cart contents and price accurately reflect what user added on Android device', async () => {
        await ProductPage.addItemToCart();
        await NavigationBar.openCart();
        await CartPage.addQuantityOfItem(quantity);
        expect(await CartPage.totalPriceTextAndroid).toHaveText(`$${calculateTotalPrice(quantity, 29.99)}`);
    })
})