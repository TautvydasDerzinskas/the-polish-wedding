import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { CountDownComponent } from "./count-down/count-down.component";

@NgModule({
	declarations: [
		CountDownComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [CountDownComponent]
})
export class AppModule { }
