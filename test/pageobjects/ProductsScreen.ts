import { $, $$, expect } from "@wdio/globals";

import { waitForElements } from "../utils/waitForElements";
import { byTestId, crossPlatformTextSelector } from "../utils/selectors";

export default class ProductsScreen {
  private readonly selectors = {
    title: byTestId("test-PRODUCTS"),
    itemTitle: byTestId("test-Item title"),
    price: byTestId("test-Price"),
    addToCart: byTestId("test-ADD TO CART"),
    removeFromCart: byTestId("test-REMOVE"),
    cart: byTestId("test-Cart"),
    filterButton: byTestId("test-Modal Selector Button"),
    sortOptions: byTestId("Selector container"),
  };

  get title() {
    return $(this.selectors.title);
  }

  get productTitles() {
    return $$(this.selectors.itemTitle);
  }

  get productPrices() {
    return $$(this.selectors.price);
  }

  get addToCartButtons() {
    return $$(this.selectors.addToCart);
  }

  get removeFromCartButtons() {
    return $$(this.selectors.removeFromCart);
  }

  get cartIcon() {
    return $(this.selectors.cart);
  }

  get filterButton() {
    return $(this.selectors.filterButton);
  }

  get sortOptions() {
    return $$(this.selectors.sortOptions);
  }

  async isDisplayed() {
    await expect(this.title).toBeDisplayed();
  }

  async getProductList(): Promise<{ title: string; price: string }[]> {
    await waitForElements(this.selectors.itemTitle);
    await waitForElements(this.selectors.price);

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
    await waitForElements(this.selectors.itemTitle);
    await waitForElements(this.selectors.addToCart);

    const titles = await this.productTitles;
    const titlesLength = await titles.length;
    const addButtons = await this.addToCartButtons;

    for (let i = 0; i < titlesLength; i++) {
      const title = await titles[i].getText();
      if (title === targetTitle) {
        await addButtons[i].click();

        await waitForElements(this.selectors.removeFromCart);
        const removeButtons = await this.removeFromCartButtons;
        await removeButtons[i].click();

        await waitForElements(this.selectors.addToCart);
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
