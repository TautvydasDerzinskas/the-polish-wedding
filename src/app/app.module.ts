import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

import { GoogleAnalyticsComponent } from './components/google-analytics/google-analytics.component';
import { FacebookCommentsComponent } from './components/facebook-comments/facebook-comments.component';

import { AppComponent } from './app.component';

import { PolishPageModule } from './pages/polish-page/polish-page.module';
import { LithuanianPageModule } from './pages/lithuanian-page/lithuanian-page.module';
import { Page404Module } from './pages/404-page/404-page.module';

@NgModule({
  declarations: [
    AppComponent,
    GoogleAnalyticsComponent,
    FacebookCommentsComponent,
  ],
  exports: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LithuanianPageModule,
    PolishPageModule,
    Page404Module,
    NgReduxModule,
    NgReduxRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
