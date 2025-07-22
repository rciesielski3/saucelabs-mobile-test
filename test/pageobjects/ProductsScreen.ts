import { $, $$, expect } from "@wdio/globals";

import { waitForElements } from "../utils/waitForElements";
import { byTestId, crossPlatformTextSelector } from "../utils/selectors";

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

  get removeFromCartButtons() {
    return $$(byTestId("test-REMOVE"));
  }

  get cartIcon() {
    return $(byTestId("test-Cart"));
  }

  get filterButton() {
    return $(byTestId("test-Modal Selector Button"));
  }

  get sortOptions() {
    return $$(byTestId("Selector container"));
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

  async toggleCartButtonByTitle(targetTitle: string) {
    await waitForElements(byTestId("test-Item title"));
    await waitForElements(byTestId("test-ADD TO CART"));

    const titles = await this.productTitles;
    const titlesLength = await titles.length;
    const addButtons = await this.addToCartButtons;

    for (let i = 0; i < titlesLength; i++) {
      const title = await titles[i].getText();
      if (title === targetTitle) {
        await addButtons[i].click();

        await waitForElements(byTestId("test-REMOVE"));
        const removeButtons = await this.removeFromCartButtons;
        await removeButtons[i].click();

        await waitForElements(byTestId("test-ADD TO CART"));
        return;
      }
    }

    throw new Error(`❌ Product "${targetTitle}" not found`);
  }

  async openFilterModal() {
    await this.filterButton.click();
  }

  async selectSortOptionByText(text: string) {
    const selector = crossPlatformTextSelector(text);
    await waitForElements(selector);

    const element = await $(selector);
    if (!(await element.isDisplayed())) {
      throw new Error(`❌ Sort option "${text}" not visible`);
    }

    await element.click();
  }
}
