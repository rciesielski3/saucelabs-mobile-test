# 📱 Sauce Labs Mobile Test (WebdriverIO + Appium + TypeScript)

Automated mobile UI tests using **WebdriverIO**, **Appium**, and **TypeScript**.  
Supports testing mobile apps.

---

## Features

- ✅ WebdriverIO test runner with Mocha
- ✅ Appium automation for Android (APK-based)
- ✅ Page Object Model structure
- ✅ TypeScript support with auto-compilation
- ✅ `.env`-based config for platform, device, and app path

---

## Project Structure

```
saucelabs-mobile-test/
│
├── assets/                    # Contains app file
├── config/                    # Platform capability configs (Android, iOS)
│   ├── android.config.ts
│   └── ios.config.ts
├── test/
│   ├── specs/                 # E2E test specs
│   └── pageobjects/           # Page Object classes
│
├── .env                       # Device + app config
├── .env.android               # Android device/app settings
├── .env.ios                   # iOS device/app settings
├── tsconfig.json              # TypeScript config
├── wdio.conf.ts               # WebdriverIO main config
├── package.json               # Dependencies & scripts
```

---

## ⚙️ Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Add iOS or Android app

Place your `.apk` or `.app/.zip` file in the matching folder:

```
assets/android/
assets/ios/
```

Pre-built app are available at https://github.com/saucelabs/sample-app-mobile/releases/

---

## 🚀 Running Tests

### Android (emulator or real device)

```bash
npm run test:android
```

### iOS (simulator or real device)

```bash
npm run test:ios
```

Scripts will:

- Copy `.env.android` or `.env.ios` into `.env`
- Load proper capabilities automatically
- Run using `wdio.conf.ts`

---

## 🌍 Environment Variables

Each `.env` file must define:

```env
PLATFORM=Android or iOS
PLATFORM_VERSION=15.0 or 17.0
DEVICE_NAME=your_device_name
APP_FOLDER=./assets/android or ./assets/ios
```

---

## Built With

- [WebdriverIO](https://webdriver.io/)
- [Appium](https://appium.io/)
- [Mocha](https://mochajs.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

## Author

Rafał Ciesielski  
[GitHub](https://github.com/rciesielski3)
