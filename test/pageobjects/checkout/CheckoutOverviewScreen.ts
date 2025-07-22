import { $ } from "@wdio/globals";

import { byTestId, crossPlatformTextSelector } from "../../utils/selectors";

export default class CheckoutOverviewScreen {
  private readonly selectors = {
    finishBtn: byTestId("test-FINISH"),
    productTitle: byTestId("test-Item title"),
    productPrice: byTestId("test-Price"),
  };

  get finishBtn() {
    return $(this.selectors.finishBtn);
  }

  get productTitle() {
    return $(this.selectors.productTitle);
  }

  get productPrice() {
    return $(this.selectors.productPrice);
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
