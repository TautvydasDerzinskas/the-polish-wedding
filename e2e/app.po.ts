import { browser, element, by } from 'protractor';

export class ThePolishWeddingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tpw-root h1')).getText();
  }
}
