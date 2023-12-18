import { expect } from "@wdio/globals";
import HomePage from "../pageobjects/pageHome.ts";
import LoginPage from "../pageobjects/pageLogin.ts";
import { faker } from "@faker-js/faker";

const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
describe("Logging with invalid Email and Password", () => {
    it("should not login with invalid credentials", async () => {
        HomePage.open();
        await browser.maximizeWindow();
        await HomePage.closeCookiesWarningButton.click();
        await HomePage.loginLink.scrollIntoView();
        await HomePage.loginLink.click();

        // Get all window handles
        const allHandles = await browser.getWindowHandles();
        const originalWindow = await browser.getWindowHandle();

        // Find new window handle
        const newTabHandle = allHandles.find((handle) => handle !== originalWindow);
        if (newTabHandle) {
            await browser.switchToWindow(newTabHandle);
            await expect(LoginPage.loginTitle).toBeExisting();
            await expect(LoginPage.loginTitle).toHaveText("Log in");
            await LoginPage.login(randomEmail, randomPassword);
            await LoginPage.errorContainer.waitForDisplayed({ timeout: 1000 });
            await expect(LoginPage.errorContainer).toHaveText(
                "That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again."
            );
        }
    });
});
