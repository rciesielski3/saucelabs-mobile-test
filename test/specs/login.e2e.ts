import LoginScreen from "../pageobjects/LoginScreen";
import { users } from "../utils/users";
import { tError } from "../utils/i18n";

describe("Login screen displaying and validation", () => {
  const loginScreen = new LoginScreen();

  it("should display all login elements", async () => {
    await loginScreen.isDisplayed();
  });

  it("should show error when username and password are empty", async () => {
    await loginScreen.loginButton.click();
    await expect(loginScreen.errorMessage).toBeDisplayed();
    const messages = await loginScreen.getVisibleErrorMessages();
    expect(messages).toContain(tError("usernameRequired"));
  });

  it("should show error when password is empty", async () => {
    await loginScreen.usernameField.setValue(users.standard.username);
    await loginScreen.loginButton.click();
    await expect(loginScreen.errorMessage).toBeDisplayed();
    const messages = await loginScreen.getVisibleErrorMessages();
    expect(messages).toContain(tError("passwordRequired"));
  });

  it("should show error when credentials are incorrect", async () => {
    await loginScreen.login(
      users.standard.username,
      users.standard.password + "1"
    );
    await expect(loginScreen.errorMessage).toBeDisplayed();
    const messages = await loginScreen.getVisibleErrorMessages();
    expect(messages).toContain(tError("invalidCredentials"));
  });
});
