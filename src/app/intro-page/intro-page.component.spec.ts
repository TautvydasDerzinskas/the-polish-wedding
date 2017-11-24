import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAnalyticsService } from '../shared/services/google-analytics/google-analytics.service';

import { IntroPageComponent } from './intro-page.component';

describe('IntroPageComponent', () => {
  let component: IntroPageComponent;
  let fixture: ComponentFixture<IntroPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IntroPageComponent
      ],
      providers: [
        GoogleAnalyticsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
