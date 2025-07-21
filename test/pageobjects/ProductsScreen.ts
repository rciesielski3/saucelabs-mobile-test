// test/pageobjects/ProductsScreen.ts

import { $, $$, expect, browser } from "@wdio/globals";
import { waitForElements } from "../utils/waitForElements";
import { byTestId } from "../utils/selectors";

export default class ProductsScreen {
  get title() {
    return $(byTestId("test-PRODUCTS"));
  }

  get productTitles() {
    return $$(byTestId("test-Item title"));
  }

  get productPrices() {
    return $$(byTestId("test-Price"));
  }

  get addToCartButtons() {
    return $$(byTestId("test-ADD TO CART"));
  }

  get cartIcon() {
    return $(byTestId("test-Cart"));
  }

  async isDisplayed() {
    await expect(this.title).toBeDisplayed();
  }

  async getProductList(): Promise<{ title: string; price: string }[]> {
    await waitForElements(byTestId("test-Item title"));
    await waitForElements(byTestId("test-Price"));

    const titles = await this.productTitles;
    const titlesCount = await titles.length;
    const prices = await this.productPrices;

    const productList: { title: string; price: string }[] = [];

    for (let i = 0; i < titlesCount; i++) {
      const title = await titles[i].getText();
      const price = await prices[i]?.getText();
      if (title && price) {
        productList.push({ title, price });
      }
    }

    return productList;
  }

  async addProductToCartByTitle(targetTitle: string): Promise<void> {
    const titles = await this.productTitles;
    const titlesCount = await titles.length;
    const buttons = await this.addToCartButtons;

    for (let i = 0; i < titlesCount; i++) {
      const title = await titles[i].getText();
      if (title === targetTitle) {
        await buttons[i].click();
        return;
      }
    }

    throw new Error(`❌ Product "${targetTitle}" not found in the list`);
  }

  async goToCart() {
    await this.cartIcon.waitForDisplayed();
    await this.cartIcon.click();
  }
}
