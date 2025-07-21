import { $ } from "@wdio/globals";

import { byTestId, crossPlatformTextSelector } from "../../utils/selectors";

export default class CheckoutOverviewScreen {
  get finishBtn() {
    return $(byTestId("test-FINISH"));
  }

  get productTitle() {
    return $(byTestId("test-Item title"));
  }

  get productPrice() {
    return $(byTestId("test-Price"));
  }

  async finishOrder() {
    await this.finishBtn.scrollIntoView();
    await this.finishBtn.click();
  }

  async getSummaryDetails(
    productTitle: string,
    productPrice: string
  ): Promise<{ title: string; price: string }> {
    const titleSelector = crossPlatformTextSelector(productTitle);
    const priceSelector = crossPlatformTextSelector(productPrice);

    const titleEl = $(titleSelector);
    const priceEl = $(priceSelector);

    await titleEl.waitForDisplayed({ timeout: 5000 });
    await priceEl.waitForDisplayed({ timeout: 5000 });

    const title = await titleEl.getText();
    const price = await priceEl.getText();

    return { title, price };
  }
}
