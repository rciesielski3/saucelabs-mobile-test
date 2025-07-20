import { $, $$, expect, browser } from "@wdio/globals";

export default class ProductsScreen {
  get title() {
    return $("~test-PRODUCTS");
  }

  get productTitles() {
    return $$("~test-Item title");
  }

  get addToCartButtons() {
    return $$("~test-ADD TO CART");
  }

  get cartIcon() {
    return $("~test-Cart");
  }

  async isDisplayed() {
    await expect(this.title).toBeDisplayed();
  }

  async addFirstProductToCart(): Promise<string> {
    await browser.waitUntil(async () => {
      const titles = await this.productTitles;
      const buttons = await this.addToCartButtons;

      const titlesCount = await titles.length;
      const buttonsCount = await buttons.length;

      return titlesCount > 0 && buttonsCount > 0;
    });

    const titles = await this.productTitles;
    const buttons = await this.addToCartButtons;

    const firstTitle = await titles[0]?.getText();

    await buttons[0]?.click();
    //console.log
    console.log("firstTitle" + firstTitle);
    return firstTitle;
  }

  async goToCart() {
    await this.cartIcon.waitForDisplayed();
    await this.cartIcon.click();
  }
}
