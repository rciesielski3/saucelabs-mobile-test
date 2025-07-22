import LoginScreen from "../pageobjects/LoginScreen";
import { users } from "../utils/users";

describe("Login screen displaying and validation", () => {
  const loginScreen = new LoginScreen();

  it("should display all login elements", async () => {
    await loginScreen.isDisplayed();
  });

  it("should show error when username and password are empty", async () => {
    await loginScreen.loginButton.click();
    await expect(loginScreen.errorMessage).toBeDisplayed();
    const messages = await loginScreen.getVisibleErrorMessages();
    expect(messages).toContain("Username is required");
  });

  it("should show error when password is empty", async () => {
    await loginScreen.usernameField.setValue(users.standard.username);
    await loginScreen.loginButton.click();
    await expect(loginScreen.errorMessage).toBeDisplayed();
    const messages = await loginScreen.getVisibleErrorMessages();
    expect(messages).toContain("Password is required");
  });

  it("should show error when credentials are incorrect", async () => {
    await loginScreen.login(
      users.standard.username,
      users.standard.password + "1"
    );
    await expect(loginScreen.errorMessage).toBeDisplayed();
    const messages = await loginScreen.getVisibleErrorMessages();
    expect(messages).toContain(
      "Username and password do not match any user in this service."
    );
  });
});
