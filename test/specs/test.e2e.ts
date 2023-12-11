import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'



describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.openDomain('portal')

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(LoginPage.loginTitle).toBeExisting()
        await expect(LoginPage.loginTitle).toHaveText(expect.stringContaining(
            'Log in'))
    })
})

