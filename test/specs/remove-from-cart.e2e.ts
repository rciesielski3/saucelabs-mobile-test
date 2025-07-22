import { users } from "../utils/users";
import LoginScreen from "../pageobjects/LoginScreen";
import ProductsScreen from "../pageobjects/ProductsScreen";
import CartScreen from "../pageobjects/CartScreen";

describe("Remove product from cart", () => {
  let loginScreen: LoginScreen;
  let productScreen: ProductsScreen;
  let cartScreen: CartScreen;

  before(async () => {
    loginScreen = new LoginScreen();
    productScreen = new ProductsScreen();
    cartScreen = new CartScreen();

    await loginScreen.isDisplayed();
    await loginScreen.login(users.standard.username, users.standard.password);
  });

  it("should add and then remove a product from cart", async () => {
    const productList = await productScreen.getProductList();
    const firstProduct = productList[0];

    await productScreen.toggleCartButtonByTitle(firstProduct.title);
  });

  it("should remove a product from the cart", async () => {
    const productList = await productScreen.getProductList();
    const firstProduct = productList[0];

    await productScreen.addProductToCartByTitle(firstProduct.title);
    await productScreen.goToCart();

    await cartScreen.isProductInCart(firstProduct.title);
    await cartScreen.removeProductFromCart(firstProduct.title);
    await cartScreen.isProductNotInCart(firstProduct.title);
  });
});
