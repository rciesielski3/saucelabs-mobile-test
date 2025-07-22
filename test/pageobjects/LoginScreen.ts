import { $, expect } from "@wdio/globals";

import { byTestId, crossPlatformTextSelector } from "../utils/selectors";

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

  get errorMessage() {
    return $(byTestId("test-Error message"));
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
    const substrings = ["required", "Username and password"];
    const messages: string[] = [];

    for (const text of substrings) {
      const elements = await $$(crossPlatformTextSelector(text));
      for (const el of elements) {
        const msg = (await el.getText()).trim();
        if (msg) messages.push(msg);
      }
    }

    return messages;
  }
}
