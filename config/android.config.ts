export const getAndroidCaps = (appPath: string) => ({
  platformName: "Android",
  "appium:platformVersion": process.env.PLATFORM_VERSION || "15",
  "appium:deviceName": process.env.DEVICE_NAME || "emulator-5554",
  "appium:automationName": "UiAutomator2",
  "appium:app": appPath,
  "appium:appPackage": "com.swaglabsmobileapp",
  "appium:appActivity": "com.swaglabsmobileapp.SplashActivity",
  "appium:appWaitActivity": "*",
  "appium:waitForLaunch": true,
});
