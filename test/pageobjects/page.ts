import { browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    public open() {
        return browser.url(`/`);
    }

    public get closeCookiesWarningButton() {
        return $("button.onetrust-close-btn-handler:nth-child(1)");
    }

    // public openDomain (path: string) {
    //     return browser.url(`/`) //https://${path}.telnyx.com/
    // }
}
