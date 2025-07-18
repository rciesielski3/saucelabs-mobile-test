import LoginScreen from "../pageobjects/LoginScreen";

describe("Launch App", () => {
  const loginScreen = new LoginScreen();

  it("should display all login elements", async () => {
    await loginScreen.isDisplayed();
  });
});
