import { $, expect } from "@wdio/globals";

import { crossPlatformTextSelector } from "../../utils/selectors";

export default class CheckoutCompleteScreen {
  get thankYouMessage() {
    return $(crossPlatformTextSelector("THANK YOU FOR YOU ORDER"));
  }

  get backHomeButton() {
    return $("~test-BACK HOME");
  }

  async isDisplayed() {
    await expect(this.thankYouMessage).toBeDisplayed();
    await expect(this.backHomeButton).toBeDisplayed();
  }

  async goBackHome() {
    await this.backHomeButton.click();
  }
}
