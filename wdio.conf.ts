import { config as dotenvConfig } from "dotenv";
import path from "path";

dotenvConfig();

const appPath = path.resolve(__dirname, process.env.APP_PATH || "");

export const config = {
  runner: "local",
  specs: ["./test/specs/*.ts"],
  maxInstances: 1,

  capabilities: [
    {
      platformName: process.env.PLATFORM || "Android",
      "appium:platformVersion": process.env.PLATFORM_VERSION || "11",
      "appium:deviceName": process.env.DEVICE_NAME || "emulator-5554",
      "appium:automationName": "UiAutomator2",
      "appium:app": process.env.APP_PATH,
      "appium:appPackage": "com.swaglabsmobileapp",
      "appium:appActivity": "com.swaglabsmobileapp.SplashActivity",
    },
  ],

  logLevel: "info",

  services: ["appium"],

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "./tsconfig.json",
    },
  },
};
