# 📱 Sauce Labs Mobile Test (WebdriverIO + Appium + TypeScript)

Automated mobile UI tests using **WebdriverIO**, **Appium**, and **TypeScript**.  
Supports testing mobile apps.

---

## Features

- WebdriverIO test runner with Mocha
- Appium automation for native apps
- Cross-platform selectors for iOS/Android
- Page Object Model structure
- TypeScript support with auto-compilation
- `.env`-based config for platform, device, and app path
- Multilingual test support via device language or `LANG` override

---

## 🧪 Test Overview

### Specs (`/test/specs`)

- `login.e2e.ts` – login validation
- `add-to-cart.e2e.ts` – add item to cart
- `remove-from-cart.e2e.ts` – add/remove toggle test
- `filter-products.e2e.ts` – product sorting (name + price)
- `checkout.e2e.ts` – end-to-end checkout flow

### Page Objects (`/test/pageobjects`)

- `LoginScreen.ts`, `CartScreen.ts`, `ProductsScreen.ts`
- `checkout/CheckoutInfoScreen.ts`, `checkout/CheckoutOverviewScreen.ts`, `checkout/CheckoutCompleteScreen.ts`

---

## Used Practices

- **Page Object Model**: keeps selectors & actions reusable
- **Selector utils**: `byTestId()` + `crossPlatformTextSelector()` for reliable, cross-platform targeting
- **Wait utilities**: `waitForElements()` ensures async DOM readiness
- **Clean assertions**: clear, readable `expect` logic
- **Error handling**: helpful error messages if actions or selectors fail
- **Test naming**: each test describes real user interaction or goal

---

## Project Structure

```
saucelabs-mobile-test/
│
├── assets/                    # Contains app file
├── config/                    # Platform capability configs (Android, iOS)
│   ├── android.config.ts
│   └── ios.config.ts
├──test/
│   ├── pageobjects/
│   │   ├── checkout/
│   │   │   ├── CheckoutInfoScreen.ts
│   │   │   ├── CheckoutOverviewScreen.ts
│   │   │   └── CheckoutCompleteScreen.ts
│   │   ├── CartScreen.ts
│   │   ├── LoginScreen.ts
│   │   └── ProductsScreen.ts
│   └── specs/
│       ├── login.e2e.ts
│       ├── login-user.e2e.ts
│       ├── add-to-cart.e2e.ts
│       ├── remove-from-cart.e2e.ts
│       ├── filter-products.e2e.ts
│       └── checkout.e2e.ts
├── utils/
│   ├── selectors.ts
│   ├── users.ts
│   └── waitForElements.ts
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

## Environment Variables

Each `.env` file must define:

```env
PLATFORM=Android or iOS
PLATFORM_VERSION=15.0 or 17.0
DEVICE_NAME=your_device_name
APP_FOLDER=./assets/android or ./assets/ios
```

---

## Language Support

Test language is automatically set from the device `language` or `locale` capability.

Supported: `en` (default), `de`, `es`, `nl`

You can override manually with:

```bash
LANG=de npm run test:android
```

The language is injected automatically in `wdio.conf.ts` via `beforeSession()`.

---

## Built With

- [WebdriverIO](https://webdriver.io/)
- [Appium](https://appium.io/)
- [Mocha](https://mochajs.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🧑‍💻 Author

Created with 💡 by [**Rafał Ciesielski**](https://github.com/rciesielski3)

- [LinkedIn](https://www.linkedin.com/in/rafa%C5%82-ciesielski-820309100/)
- [GitHub](https://github.com/rciesielski3)
- [Portfolio](https://rciesielski3.github.io/portfolio/)

---

## 📄 License

MIT License  
Please credit if you reuse it in your own work 🙌

[☕ Buy Me a Coffee](https://buycoffee.to/adateo)
