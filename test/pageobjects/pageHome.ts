import { $ } from "@wdio/globals";
import Page from "./page.ts";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    public get loginLink() {
        return $('a[href="https://portal.telnyx.com/"]');
    }
    /**
     * overwrite specific options to adapt it to page object
     */
}

export default new HomePage();
