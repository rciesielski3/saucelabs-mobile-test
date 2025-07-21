import CartScreen from "../pageobjects/CartScreen";
import CheckoutCompleteScreen from "../pageobjects/checkout/CheckoutCompleteScreen";
import CheckoutInfoScreen from "../pageobjects/checkout/CheckoutInfoScreen";
import CheckoutOverviewScreen from "../pageobjects/checkout/CheckoutOverviewScreen";
import LoginScreen from "../pageobjects/LoginScreen";
import ProductsScreen from "../pageobjects/ProductsScreen";
import { testCustomer, users } from "../utils/users";

describe("Checkout flow", () => {
  let loginScreen: LoginScreen;
  let productScreen: ProductsScreen;
  let cartScreen: CartScreen;
  let checkoutInfoScreen: CheckoutInfoScreen;
  let checkoutOverviewScreen: CheckoutOverviewScreen;
  let checkoutCompleteScreen: CheckoutCompleteScreen;

  beforeEach(async () => {
    loginScreen = new LoginScreen();
    productScreen = new ProductsScreen();
    cartScreen = new CartScreen();
    checkoutInfoScreen = new CheckoutInfoScreen();
    checkoutOverviewScreen = new CheckoutOverviewScreen();
    checkoutCompleteScreen = new CheckoutCompleteScreen();

    await loginScreen.isDisplayed();
    await loginScreen.login(users.standard.username, users.standard.password);
  });

  it("should complete checkout and verify product details", async () => {
    await productScreen.isDisplayed();

    const [product] = await productScreen.getProductList();
    await productScreen.addProductToCartByTitle(product.title);
    await productScreen.goToCart();

    await cartScreen.isProductInCart(product.title);
    await cartScreen.proceedToCheckout();

    await checkoutInfoScreen.fillForm(
      testCustomer.firstName,
      testCustomer.lastName,
      testCustomer.zipCode
    );
    await checkoutInfoScreen.continueToOverview();

    const summary = await checkoutOverviewScreen.getSummaryDetails(
      product.title,
      product.price
    );

    expect(summary.title).toBe(product.title);
    expect(summary.price).toBe(product.price);

    await checkoutOverviewScreen.finishOrder();
    await checkoutCompleteScreen.isDisplayed();
  });
});
