import { $, expect } from "@wdio/globals";

import { users } from "../utils/users";
import LoginScreen from "../pageobjects/LoginScreen";

describe("Login with valid credentials", () => {
  const loginScreen = new LoginScreen();

  it("should log in and see the products page", async () => {
    await loginScreen.isDisplayed();
    await loginScreen.login(users.standard.username, users.standard.password);

    const productsTitle = await $("~test-PRODUCTS");
    await expect(productsTitle).toBeDisplayed();
  });
});
