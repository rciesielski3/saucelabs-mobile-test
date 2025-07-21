import { browser, $$ } from "@wdio/globals";

export async function waitForElements(selector: string, timeout = 5000) {
  await browser.waitUntil(
    async () => {
      const elements = await $$(selector);
      const elementsCont = await elements.length;
      return elementsCont > 0;
    },
    {
      timeout,
      timeoutMsg: `❌ No elements found for selector: ${selector}`,
    }
  );
}
