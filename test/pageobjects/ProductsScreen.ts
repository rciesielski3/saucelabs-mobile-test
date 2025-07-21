import { $, $$, expect, browser } from "@wdio/globals";
import { waitForElements } from "../utils/waitForElements";

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
    await waitForElements("~test-Item title");
    await waitForElements("~test-ADD TO CART");

    const titles = await this.productTitles;
    const buttons = await this.addToCartButtons;

    const firstTitle = await titles[0]?.getText();
    if (!firstTitle) throw new Error("❌ Failed to get product title");

    await buttons[0]?.click();

    return firstTitle;
  }

  async goToCart() {
    await this.cartIcon.waitForDisplayed();
    await this.cartIcon.click();
  }
}
