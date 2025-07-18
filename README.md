# Sauce Labs Mobile Test (WebdriverIO + Appium + TypeScript)

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
├── config/                    # Capability config (Android)
├── test/
│   ├── specs/                 # E2E test specs
│   └── pageobjects/           # Page Object classes
│
├── .env                       # Device + app config
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

### 2. Configure `.env`

For Android

```env
PLATFORM=Android
PLATFORM_VERSION=15
DEVICE_NAME=emulator-5554
APP_PATH=./assets/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk
```

### 3. Run test

Make sure an emulator or device is running and Appium server is up:

```bash
npm run test
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
