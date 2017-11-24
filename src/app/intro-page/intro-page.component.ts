import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from '../shared/services/google-analytics/google-analytics.service';

@Component({
  selector: 'tpw-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  constructor(
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit() {
    this.googleAnalyticsService.trackPageView();
  }
}
