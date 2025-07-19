export const getIosCaps = (appPath: string) => ({
  platformName: "iOS",
  "appium:platformVersion": process.env.PLATFORM_VERSION || "15.5",
  "appium:deviceName": process.env.DEVICE_NAME || "iPhone 13",
  "appium:automationName": "XCUITest",
  "appium:app": appPath,
  "appium:waitForLaunch": true,
});
