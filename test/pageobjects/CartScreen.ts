import { $$, expect } from "@wdio/globals";

export default class CartScreen {
  get cartItemTitles() {
    return $$("~test-Item title");
  }

  get checkoutBtn() {
    return $("~test-CHECKOUT");
  }

  async proceedToCheckout() {
    await expect(this.checkoutBtn).toBeDisplayed();
    await this.checkoutBtn.click();
  }

  async isProductInCart(expectedTitle: string) {
    const elements = await this.cartItemTitles;

    const titles: string[] = [];

    for (const item of elements) {
      const text = await item.getText();
      titles.push(text);
    }

    expect(titles).toContain(expectedTitle);
  }
}
