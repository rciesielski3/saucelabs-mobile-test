import { config as dotenvConfig } from "dotenv";
import path from "path";
import fs from "fs";

import { getAndroidCaps, getIosCaps } from "./config";
import { supportedLanguages } from "./test/utils/i18n";

dotenvConfig();

function getAppPath(): string {
  const folderPath = path.resolve(__dirname, process.env.APP_FOLDER || "");
  const files = fs.readdirSync(folderPath);
  if (!files.length) throw new Error(`No app file found in ${folderPath}`);
  return path.join(folderPath, files[0]);
}

const appPath = getAppPath();
const platform = process.env.PLATFORM?.toLowerCase();

const capabilities = [
  platform === "ios" ? getIosCaps(appPath) : getAndroidCaps(appPath),
];

export const config = {
  runner: "local",
  specs: ["./test/specs/*.ts"],
  maxInstances: 1,

  capabilities,

  logLevel: "info",

  services: [
    [
      "appium",
      {
        logPath: "./logs/appium",
      },
    ],
  ],

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 120000,
  },

  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "./tsconfig.json",
    },
  },

  beforeSession: function (_config: any, caps: any) {
    const deviceLang =
      caps["appium:language"] ||
      caps["appium:locale"] ||
      caps.language ||
      caps.locale ||
      "en";

    const shortLang = String(deviceLang).slice(0, 2).toLowerCase();
    process.env.LANG = supportedLanguages.includes(shortLang as any)
      ? shortLang
      : "en";
  },
};
