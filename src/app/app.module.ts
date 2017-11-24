import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { MainPageModule } from './main-page/main-page.module';
import { IntroPageComponent } from './intro-page/intro-page.component';

import { GoogleAnalyticsService } from './shared/services/google-analytics/google-analytics.service';

import { AppComponent } from './app/app.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    IntroPageComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MainPageModule
  ],
  providers: [
    GoogleAnalyticsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
