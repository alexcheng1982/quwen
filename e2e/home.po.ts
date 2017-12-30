import { $, $$, browser, protractor } from "protractor";

const EC = protractor.ExpectedConditions;

export class HomePage {
  navigateTo() {
    return browser.get('http://localhost:8100');
  }

  async getItemsCount() {
    await browser.wait(EC.visibilityOf($('quwen-items-list')));
    return await $$('quwen-item').count();
  }
}
