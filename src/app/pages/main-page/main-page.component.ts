import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import { TranslateService } from '@ngx-translate/core';
import { GoogleAnalyticsService } from '../../shared/services/google-analytics/google-analytics.service';

@Component({
  selector: 'tpw-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {
  get isPolish() { return this._isPolish; }
  private _isPolish: boolean;
  get isLithuanian() { return this._isLithuanian; }
  private _isLithuanian: boolean;
  get isEnglish() { return this._isEnglish; }
  private _isEnglish: boolean;

  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit() {
    this.translateService.setDefaultLang('en');
    this.route.params.subscribe(params => { this.translateService.use(params['language']); });

    this.googleAnalyticsService.trackPageView();

    this._setGalleryImages();
  }

  private _setGalleryImages() {
    this.galleryOptions = [
      {
          width: '800px',
          height: '600px',
          thumbnailsColumns: 8,
          imageAnimation: NgxGalleryAnimation.Zoom,
          lazyLoading: true,
          arrowPrevIcon: 'tpw-icon tpw-icon--arrow-left',
          arrowNextIcon: 'tpw-icon tpw-icon--arrow-right',
          closeIcon: 'tpw-icon tpw-icon--close'
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];

    const galleryImages = [];
    for (let i = 1; i < 483; i++) {
      galleryImages.push({
        small: `/assets/photos/thumbs/photo (${i}) (Custom).jpg`,
        medium: `/assets/photos/photo (${i}).jpg`,
        big: `/assets/photos/photo (${i}).jpg`
      });
    }

    this.galleryImages = galleryImages;
  }
}
