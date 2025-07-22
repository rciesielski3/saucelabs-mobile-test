import { $, expect } from "@wdio/globals";

import { byTestId, crossPlatformTextSelector } from "../utils/selectors";

export default class LoginScreen {
  private readonly selectors = {
    usernameField: byTestId("test-Username"),
    passwordField: byTestId("test-Password"),
    loginButton: byTestId("test-LOGIN"),
    errorMessage: byTestId("test-Error message"),
    errorSubstrings: ["required", "Username and password"],
  };

  get usernameField() {
    return $(this.selectors.usernameField);
  }

  get passwordField() {
    return $(this.selectors.passwordField);
  }

  get loginButton() {
    return $(this.selectors.loginButton);
  }

  get errorMessage() {
    return $(this.selectors.errorMessage);
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

  async getVisibleErrorMessages(): Promise<string[]> {
    const messages: string[] = [];

    for (const text of this.selectors.errorSubstrings) {
      const elements = await $$(crossPlatformTextSelector(text));
      for (const el of elements) {
        const msg = (await el.getText()).trim();
        if (msg) messages.push(msg);
      }
    }

    return messages;
  }
}
