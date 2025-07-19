import { $, expect } from "@wdio/globals";

export default class LoginScreen {
  get usernameField() {
    return $("~test-Username");
  }

  get passwordField() {
    return $("~test-Password");
  }

  get loginButton() {
    return $("~test-LOGIN");
  }

  async isDisplayed() {
    await expect(this.usernameField).toBeDisplayed();
    await expect(this.passwordField).toBeDisplayed();
    await expect(this.loginButton).toBeDisplayed();
  }

  async login(username: string, password: string) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginButton.click();
  }
}
