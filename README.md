<h1>
  Practice test automation with <a href="https://playwright.dev/"> <img width="140" alt="Playwright Logo" src="https://raw.githubusercontent.com/github/explore/60cd2530141f67f07a947fa2d310c482e287e387/topics/playwright/playwright.png" /> </a> on <a href="https://www.saucedemo.com/">Swag Labs</a>
</h1>

> **Note**
>
> +  **<a href="https://www.demoblaze.com/">Swag Labs</a>** is basic online store with required login from Sauce Labs. Great for example web UI tests.
>
## PLaywright features
End to End testing using:

- Playwright https://playwright.dev/
- TypeScript https://www.typescriptlang.org/

This tests are purely for Playwright features practice, usage of Page Object Model.

## Getting Started

### Prerequisites
Install Playwright and browser binaries for Chromium, Firefox and WebKit.
```shell
npm i -D playwright
```
You need to have Node.js installed.

## Useful Commands

### Run All Tests

```shell
npx playwright test
```
### Run Tests for Cart Feature
```shell
npx playwright test Cart.spec.ts
```
### Run Tests for Product Feature
```shell
npx playwright test Product.spec.ts
```
### Run Tests for E2E Feature
```shell
npx playwright test E2E.spec.ts
```
