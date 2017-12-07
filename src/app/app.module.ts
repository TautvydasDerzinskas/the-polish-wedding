import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';

import { IntroPageModule } from './pages/intro-page/intro-page.module';
import { MainPageModule } from './pages/main-page/main-page.module';

import { GoogleAnalyticsService } from './shared/services/google-analytics/google-analytics.service';

import { AppComponent } from './app.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([], { useHash: true }),
    IntroPageModule,
    MainPageModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    GoogleAnalyticsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
