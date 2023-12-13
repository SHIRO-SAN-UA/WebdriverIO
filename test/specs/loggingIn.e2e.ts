import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import { faker } from "@faker-js/faker";

const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
describe("Logging with invalid Email and Password", () => {
    it("should not login with invalid credentials", async () => {
        await LoginPage.openDomain("portal");
        await expect(LoginPage.loginTitle).toBeExisting();
        await expect(LoginPage.loginTitle).toHaveText(expect.stringContaining("Log in"));
        await LoginPage.login(randomEmail, randomPassword);
        await expect(LoginPage.errorContainer).toHaveText(
            expect.stringContaining(
                "That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again."
            )
        );
    });
});
