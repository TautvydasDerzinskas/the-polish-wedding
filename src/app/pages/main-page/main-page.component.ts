import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { GoogleAnalyticsService } from '../../shared/services/google-analytics/google-analytics.service';

@Component({
  selector: 'tpw-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {
  private _isPolish: boolean;
  private _isLithuanian: boolean;
  private _isEnglish: boolean;

  get isPolish() {
    return this._isPolish;
  }
  get isLithuanian() {
    return this._isLithuanian;
  }
  get isEnglish() {
    return this._isEnglish;
  }

  constructor(
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit() {
    this.translateService.setDefaultLang('en');
    this.route.params.subscribe(params => {
      this.translateService.use(params['language']);
    });

    this.googleAnalyticsService.trackPageView();
  }
}
