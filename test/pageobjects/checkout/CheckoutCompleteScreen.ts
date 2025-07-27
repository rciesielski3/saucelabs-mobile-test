import { $, expect } from "@wdio/globals";

import { crossPlatformTextSelector } from "../../utils/selectors";
import { t } from "../../utils/i18n";

export default class CheckoutCompleteScreen {
  private readonly selectors = {
    thankYouMessage: crossPlatformTextSelector(t("thankYouMessage")),
    backHomeButton: "~test-BACK HOME",
  };

  get thankYouMessage() {
    return $(this.selectors.thankYouMessage);
  }

  get backHomeButton() {
    return $(this.selectors.backHomeButton);
  }

  async isDisplayed() {
    await expect(this.thankYouMessage).toBeDisplayed();
    await expect(this.backHomeButton).toBeDisplayed();
  }

  async goBackHome() {
    await this.backHomeButton.click();
  }
}
