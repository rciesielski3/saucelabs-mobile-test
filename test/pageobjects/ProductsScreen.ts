import { $, expect } from "@wdio/globals";

export default class ProductsScreen {
  get title() {
    return $("~test-PRODUCTS");
  }

  async isDisplayed() {
    await expect(this.title).toBeDisplayed();
  }
}
