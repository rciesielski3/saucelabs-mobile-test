import { $ } from "@wdio/globals";

export default class CheckoutInfoScreen {
  get firstNameField() {
    return $("~test-First Name");
  }

  get lastNameField() {
    return $("~test-Last Name");
  }

  get zipCodeField() {
    return $("~test-Zip/Postal Code");
  }

  get continueBtn() {
    return $("~test-CONTINUE");
  }

  async fillForm(first: string, last: string, zip: string) {
    await this.firstNameField.setValue(first);
    await this.lastNameField.setValue(last);
    await this.zipCodeField.setValue(zip);
  }

  async continueToOverview() {
    await this.continueBtn.click();
  }
}
