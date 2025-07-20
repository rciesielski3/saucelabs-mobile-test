import { users } from "../utils/users";
import LoginScreen from "../pageobjects/LoginScreen";
import ProductsScreen from "../pageobjects/ProductsScreen";
import CartScreen from "../pageobjects/CartScreen";

describe("🛒 Add product to cart", () => {
  let loginScreen: LoginScreen;
  let productScreen: ProductsScreen;
  let cartScreen: CartScreen;

  beforeEach(async () => {
    loginScreen = new LoginScreen();
    productScreen = new ProductsScreen();
    cartScreen = new CartScreen();

    await loginScreen.isDisplayed();
    await loginScreen.login(users.standard.username, users.standard.password);
  });

  it("should add a product and verify it in the cart", async () => {
    const addedTitle = await productScreen.addFirstProductToCart();
    await productScreen.goToCart();

    await cartScreen.isProductInCart(addedTitle);
  });
});
