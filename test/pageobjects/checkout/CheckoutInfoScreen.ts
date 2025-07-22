import { $ } from "@wdio/globals";

import { byTestId } from "../../utils/selectors";

export default class CheckoutInfoScreen {
  private readonly selectors = {
    firstNameField: byTestId("test-First Name"),
    lastNameField: byTestId("test-Last Name"),
    zipCodeField: byTestId("test-Zip/Postal Code"),
    continueBtn: byTestId("test-CONTINUE"),
  };

  get firstNameField() {
    return $(this.selectors.firstNameField);
  }

  get lastNameField() {
    return $(this.selectors.lastNameField);
  }

  get zipCodeField() {
    return $(this.selectors.zipCodeField);
  }

  get continueBtn() {
    return $(this.selectors.continueBtn);
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
