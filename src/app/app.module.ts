import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { IntroPageComponent } from './intro-page/intro-page.component';

import { GoogleAnalyticsService } from './shared/services/google-analytics/google-analytics.service';

import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app/app.component';

import { GoogleMapComponent } from './main-page/components/google-map/google-map.component';
import { CountDownComponent } from './main-page/components/count-down/count-down.component';
import { FacebookCommentsComponent } from './main-page/components/facebook-comments/facebook-comments.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    CountDownComponent,
    IntroPageComponent,
    MainPageComponent,
    AppComponent,
    GoogleMapComponent,
    FacebookCommentsComponent
  ],
  exports: [
    CountDownComponent,
    FacebookCommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
        }
    })
  ],
  providers: [
    GoogleAnalyticsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
