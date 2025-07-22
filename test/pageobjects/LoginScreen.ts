import { $, expect } from "@wdio/globals";

import { byTestId } from "../utils/selectors";

export default class LoginScreen {
  get usernameField() {
    return $(byTestId("test-Username"));
  }

  get passwordField() {
    return $(byTestId("test-Password"));
  }

  get loginButton() {
    return $(byTestId("test-LOGIN"));
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
