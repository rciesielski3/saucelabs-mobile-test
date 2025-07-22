import { users } from "../utils/users";
import LoginScreen from "../pageobjects/LoginScreen";
import ProductsScreen from "../pageobjects/ProductsScreen";

describe("Filter products", () => {
  let loginScreen: LoginScreen;
  let productsScreen: ProductsScreen;

  before(async () => {
    loginScreen = new LoginScreen();
    productsScreen = new ProductsScreen();

    await loginScreen.isDisplayed();
    await loginScreen.login(users.standard.username, users.standard.password);
    await productsScreen.isDisplayed();
  });

  it("should change product order after selecting 'Name (Z to A)'", async () => {
    const initialList = await productsScreen.getProductList();
    const initialFirstTitle = initialList[0].title;

    await productsScreen.openFilterModal();
    await productsScreen.selectSortOptionByText("Name (Z to A)");

    const sortedList = await productsScreen.getProductList();
    const newFirstTitle = sortedList[0].title;

    expect(newFirstTitle).not.toEqual(initialFirstTitle);
  });

  it("should sort products by 'Price (high to low)'", async () => {
    const initialList = await productsScreen.getProductList();
    const initialFirstPrice = parseFloat(initialList[0].price.replace("$", ""));

    await productsScreen.openFilterModal();
    await productsScreen.selectSortOptionByText("Price (high to low)");

    const sortedList = await productsScreen.getProductList();
    const newFirstPrice = parseFloat(sortedList[0].price.replace("$", ""));

    expect(newFirstPrice).toBeGreaterThanOrEqual(initialFirstPrice);
  });
});
