import { $$, expect } from "@wdio/globals";
import { byTestId, crossPlatformTextSelector } from "../utils/selectors";

export default class CartScreen {
  get cartItems() {
    return $$(byTestId("test-Item"));
  }

  get cartItemTitles() {
    return $$(byTestId("test-Item title"));
  }

  get checkoutBtn() {
    return $(byTestId("test-CHECKOUT"));
  }

  async proceedToCheckout() {
    await expect(this.checkoutBtn).toBeDisplayed();
    await this.checkoutBtn.click();
  }

  private async getCartItemTitles(): Promise<string[]> {
    const elements = await this.cartItemTitles;
    const titles: string[] = [];

    for (const item of elements) {
      titles.push(await item.getText());
    }

    return titles;
  }

  async isProductInCart(expectedTitle: string) {
    const titles = await this.getCartItemTitles();
    expect(titles).toContain(expectedTitle);
  }

  async isProductNotInCart(unexpectedTitle: string) {
    const titles = await this.getCartItemTitles();
    expect(titles).not.toContain(unexpectedTitle);
  }

  async removeProductFromCart(targetTitle: string) {
    const cartItems = await this.cartItems;

    for (const item of cartItems) {
      const titleEl = await item.$(crossPlatformTextSelector(targetTitle));

      const isExisting = await titleEl.isExisting();
      if (isExisting) {
        const removeBtn = await item.$("~test-REMOVE");
        await removeBtn.click();
        return;
      }
    }

    throw new Error(
      `❌ Product "${targetTitle}" not found in cart for removal`
    );
  }
}
