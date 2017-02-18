import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PolishPageModule } from './pages/polish-page/polish-page.module';
import { LithuanianPageModule } from './pages/lithuanian-page/lithuanian-page.module';
import { Page404Component } from './pages/404-page/404-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LithuanianPageModule,
    PolishPageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
