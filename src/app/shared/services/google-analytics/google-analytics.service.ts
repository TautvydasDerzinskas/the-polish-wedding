declare const ga: Function;

import { Injectable } from '@angular/core';

@Injectable()
export class GoogleAnalyticsService {
  private _isInitialized = false;

  private _initialize() {
    const currdate: any = new Date();

    /* tslint:disable:no-string-literal */
    /* tslint:disable:semicolon */
    /* tslint:disable:no-unused-expression */
    // This code is from Google, so let's not modify it too much, just add gaNewElem and gaElems:

    (function (i, s, o, g, r, a: any, m: any) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * currdate;
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga', {}, {});

    /* tslint:enable:no-unused-expression */
    /* tslint:enable:semicolon */
    /* tslint:enable:no-string-literal */

    this._isInitialized = true;
  }

  public trackPageView() {
    if (!this._isInitialized) {
      this._initialize();
    }

    ga('create', 'UA-90540269-1', 'auto');
    ga('send', 'pageview');
  }
}
