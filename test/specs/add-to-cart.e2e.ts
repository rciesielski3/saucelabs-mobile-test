import { users } from "../utils/users";
import LoginScreen from "../pageobjects/LoginScreen";
import ProductsScreen from "../pageobjects/ProductsScreen";
import CartScreen from "../pageobjects/CartScreen";

describe("Add product to cart", () => {
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

  it("should add first product dynamically", async () => {
    const productList = await productScreen.getProductList();
    const firstProduct = productList[0];

    await productScreen.addProductToCartByTitle(firstProduct.title);
    await productScreen.goToCart();
    await cartScreen.isProductInCart(firstProduct.title);
  });
});
