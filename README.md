
# 💻 Automated Testing Project with Playwright

This repository contains a suite of E2E and API tests using the **Playwright** framework, for the SERVEREST application.

![Playwright Tests](https://github.com/renanmsf11/playwright-api-e2e-TS-automation-serverest-tests/actions/workflows/playwright.yml/badge.svg?branch=main)

---

## 🧱 Project Structure

```
tests/
├── api/                     # API tests using request context
│   ├── createAccount.test.js
│   ├── login.test.js
│   └── products.test.js
├── e2e/                     # UI end-to-end tests
│   ├── createAccount.spec.js
│   ├── login.spec.js
│   └── purchaseStore.spec.js
├── pages/                   # Page Object Model (POM)
│   ├── loginPage.ts
│   ├── registerPage.ts
│   └── purchaseStorePage.ts
```

---

## 🎯 Key Practices and Patterns

### 📌 POM - Page Object Model
- The files in the `pages/` folder represent pages of the application.
- All selectors, actions, and interactions are encapsulated in their corresponding classes.
- **Goal:** Separate interaction logic from test logic, making maintenance and method reuse easier.

> Example: `LoginPage.ts` contains methods like `loginFromRegister()` and `verifyErrorMessageLogin()`.

---

### 📌 DDT - Simple Data-Driven Testing
- Input data like email, password, name, etc. are dynamically generated inside the POMs.
- Avoids data duplication and tight coupling with the `.spec` tests.

> Example: `RegisterPage.ts` automatically generates unique email and password values.

---

## 💡 Best Practices Applied

| Practice  | Description |
|----------|-------------|
| **DRY** (Don't Repeat Yourself) | Reusable code in POM classes, avoiding duplication. |
| **KISS** (Keep It Simple, Stupid) | Short, objective, and intuitive methods. |
| **YAGNI** (You Aren’t Gonna Need It) | Only the necessary was implemented. Nothing extra. |
| **Single Responsibility** | Each file/test has a clear and unique purpose (e.g. `login.spec.js` only tests login). |

---

## 🚀 Running the Tests

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run tests from a specific folder
npx playwright test tests/api
npx playwright test tests/e2e

# Generate HTML report
npx playwright show-report
```

---

## 🔧 Tools Used

- **Playwright**
- **TypeScript** (used in POMs and configs)
- **Jest-like assertions** (`expect`)
- **API Testing** with `request.newContext()`

---

## 📌 Notes

- API tests use `https://serverest.dev` as the base URL.
- POMs are implemented in TypeScript for better typing and IDE support.
- Reports and logs are automatically generated after test runs.

---

## 📂 Selector Organization

- All selectors are centralized within the POMs.
