import { browser, $$ } from "@wdio/globals";

/**
 * Waits until at least one element matching the selector is found.
 * @param selector - Selector string (e.g., "~test-Item title")
 * @param timeout - Optional timeout in ms (default: 5000)
 */
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
