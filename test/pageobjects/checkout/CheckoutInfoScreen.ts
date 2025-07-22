import { $ } from "@wdio/globals";

import { byTestId } from "../../utils/selectors";

export default class CheckoutInfoScreen {
  get firstNameField() {
    return $(byTestId("test-First Name"));
  }

  get lastNameField() {
    return $(byTestId("test-Last Name"));
  }

  get zipCodeField() {
    return $(byTestId("test-Zip/Postal Code"));
  }

  get continueBtn() {
    return $(byTestId("test-CONTINUE"));
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
