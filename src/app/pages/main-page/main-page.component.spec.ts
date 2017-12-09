import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxGalleryModule } from 'ngx-gallery';

import { GoogleAnalyticsService } from '../../shared/services/google-analytics/google-analytics.service';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  let translateService: TranslateService;

  class MockActivatedRoute {
    public params = Observable.of({ language: 'en' });
    public snapshot = {
      params: {
        language: 'en'
      }
    };
  }

  // AoT requires an exported function for factories
  function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxGalleryModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [
        MainPageComponent
      ],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        GoogleAnalyticsService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    translateService = TestBed.get(TranslateService);
    spyOn(translateService, 'use');
    spyOn(translateService, 'setDefaultLang');

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(translateService.use).toHaveBeenCalled();
    expect(translateService.setDefaultLang).toHaveBeenCalled();
  });
});
