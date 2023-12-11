import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get loginTitle () {
        return $('[data-testid="login.signin.title"]');
    }

    public get inputEmailField () {
        return $('[name="email"]');
    }

    public get inputPasswordField () {
        return $('[name="password"]');
    }

    public get submitButton () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (email: string, password: string) {
        await this.inputEmailField.setValue(email);
        await this.inputPasswordField.setValue(password);
        await this.submitButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */

}

export default new LoginPage();
