import { users } from "../utils/users";
import LoginScreen from "../pageobjects/LoginScreen";
import ProductsScreen from "../pageobjects/ProductsScreen";

describe("Login with valid credentials", () => {
  const loginScreen = new LoginScreen();

  it("should log in and see the products page", async () => {
    await loginScreen.isDisplayed();
    await loginScreen.login(users.standard.username, users.standard.password);

    await new ProductsScreen().isDisplayed();
  });
});
