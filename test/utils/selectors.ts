export function crossPlatformTextSelector(text: string): string {
  return `//*[contains(@text, "${text}") or contains(@label, "${text}")]`;
}

export function byTestId(id: string): string {
  return `~${id}`;
}
