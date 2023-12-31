# Web Automation Framework for https://telnyx.com/ website.


Automation framework for [https://telnyx.com/](https://telnyx.com/).

## Reports
To view report locally run `npx allure generate && allure open`.
<!-- ## 
HTML Reporting system is hosted at [Github Pages](https://shiro-san-ua.github.io/PlaywrightIntro/). -->

## Technologies Stack

-   [Node.js](https://nodejs.org/en/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [WebdriverIO Framework](https://webdriver.io/) - testing framework for modern web apps.
-   [Faker](https://fakerjs.dev/guide/) - brary that generates fake (but reasonable) data.
-   [Allure report](https://allurereport.org/) - automation Test Reporting Tool.
-   [Prettier](https://prettier.io/) - code formatter.
-   [cross-env](https://www.npmjs.com/package/cross-env) - Run scripts that set and use environment variables across platforms. Change baseUrl?: string; to array; in ./node_modules/@wdio/types/build/Options.d.ts
-   [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

## Setup

### Installation

1.  Install Node.js.
1.  Run `git clone https://github.com/SHIRO-SAN-UA/WebdriverIO` to clone repository.
1.  Run `npm i` to install dependencies.
1.  Rename `.env.example` to `.env` and fill with your actual testing data.

<!-- ### How to run tests

For reference use [Playwright Docs](https://playwright.dev/docs/running-tests)

1.  To run locally run `npx playwright test`.
1.  To generate and open Allure report in your browser run `npx allure serve allure-results`.
1.  Run `npx allure open` to view Allure report.


### Structure

-   `playwright.config.ts` file is the place where you can configure the playwright library. You can configure timeouts, parallelism, retires, and reporters, projects, etc. Playwright supports tons of customization and adjustment to meet your test suite’s requirements.
-   `tests` folder with tests
-   `pages` - forder with pages

### Standards

All test cases should be coded inside the `tests` folder.
Project build using [Page Object Model](https://playwright.dev/docs/pom). The main idea is to encapsulate logic into page classes and use the logic in the spec files to run the tests.

For instance we define the class LoginPage with locators and elements and reuse them in the code. -->
