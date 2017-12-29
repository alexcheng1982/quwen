import { InAppBrowser, InAppBrowserObject } from "@ionic-native/in-app-browser";
import { Injectable } from "@angular/core";

@Injectable()
export class OpenPageService {
  private browser: InAppBrowserObject;

  constructor(private iab: InAppBrowser) {}

  open(url: string): void {
    if (this.browser) {
      this.browser.close();
    }
    this.browser = this.iab.create(url, '_blank', 'location=no,hardwareback=no');
  }
}
