const { expect } = require('@wdio/globals');
const CartPage = require('../ui/pages/CartPage');
const CatalogPage = require('../ui/pages/CatalogPage');
const CheckoutPage = require('../ui/pages/CheckoutPage');
const LoginPage = require('../ui/pages/LoginPage');
const MenuPage = require('../ui/pages/MenuPage');
const NavigationBar = require('../ui/components/navigation/NavigationBarComponent');
const OrderConfirmationPage = require('../ui/pages/OrderConfirmationPage');
const PaymentPage = require('../ui/pages/PaymentPage');
const ProductPage = require('../ui/pages/ProductPage');
const { testUser } = require("../data/users");
const LogoutModal = require("../ui/components/modals/LogoutModal");

describe('Checkout workflow tests for logged in user', () => {
    beforeEach(async () => {
        await driver.relaunchActiveApp();
        await NavigationBar.openMenu();
        await MenuPage.clickLoginBtn();
        await LoginPage.validLogin();
        await CatalogPage.selectBackpack();
        await ProductPage.addItemToCart();
        await NavigationBar.openCart();
        await CartPage.proceedToCheckout();
    });

    it('user can complete checkout with valid address and payment info', async () => {
        await CheckoutPage.enterShippingAddress(testUser);
        await PaymentPage.enterPaymentInfo(testUser);
        await PaymentPage.reviewOrder();
        await CheckoutPage.placeOrder();
        await expect(OrderConfirmationPage.checkoutCompleteText).toHaveText('Checkout Complete');
    })

    it('user can complete checkout different valid billing and shipping addresses', async () => {
        await CheckoutPage.enterShippingAddress(testUser);
        await PaymentPage.enterPaymentInfo(testUser);
        await PaymentPage.checkDifferentBillingAddress();
        await PaymentPage.enterBillingInfo(testUser);
        await PaymentPage.reviewOrder();
        await CheckoutPage.placeOrder();
        await expect(OrderConfirmationPage.checkoutCompleteText).toHaveText('Checkout Complete');
    })

    it('user cannot complete checkout without address info', async () => {
        await CheckoutPage.clickToPaymentBtn();
        await expect(CheckoutPage.errorMsgFullName).toHaveText('Please provide your full name.');
        if (driver.isAndroid) {
            await expect(CheckoutPage.errorMsgAddressLine1).toHaveText('Please provide your address.');
            await expect(CheckoutPage.errorMsgCity).toHaveText('Please provide your city.');
            await expect(CheckoutPage.errorMsgZipCode).toHaveText('Please provide your zip');
            await expect(CheckoutPage.errorMsgCountry).toHaveText('Please provide your');
        }
    })

    it('user cannot complete checkout without payment info', async () => {
        await CheckoutPage.enterShippingAddress(testUser);
        await PaymentPage.reviewOrder();
        await expect(PaymentPage.errorMsgCardName).toHaveText('Value looks invalid.');
        if (driver.isAndroid) {
            await expect(PaymentPage.cardNumberErrorIcon).toBeDisplayed();
            await expect(PaymentPage.errorMsgExpirationDate).toHaveText('Value looks invalid.');
            await expect(PaymentPage.errorMsgSecurityCode).toHaveText('Value looks invalid.');
        }
    })

    afterEach(async () => {
        // await NavigationBar.openMenu();
        // await MenuPage.logout();
        // if (driver.isAndroid) await LogoutModal.confirmLogout();
    })
})

describe('Checkout tests for user without active session', () => {
    beforeEach(async () => {
        await driver.relaunchActiveApp();
        await CatalogPage.selectBackpack();
        await ProductPage.addItemToCart();
        await NavigationBar.openCart();
        await CartPage.proceedToCheckout();
    });

    it('user cannot complete checkout without logging in first', async () => {
        await expect(LoginPage.usernameInput).toBeDisplayed();
        await expect(LoginPage.passwordInput).toBeDisplayed();
    })
})




