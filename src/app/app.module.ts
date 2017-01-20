import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { CountDownComponent } from "./count-down/count-down.component";
import { GoogleAnalyticsComponent } from "./google-analytics/google-analytics.component";
import { FacebookCommentsComponent } from "./facebook-comments/facebook-comments.component";

@NgModule({
	declarations: [
		CountDownComponent,
		GoogleAnalyticsComponent,
		FacebookCommentsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [
		CountDownComponent,
		GoogleAnalyticsComponent,
		FacebookCommentsComponent
	]
})
export class AppModule { }
