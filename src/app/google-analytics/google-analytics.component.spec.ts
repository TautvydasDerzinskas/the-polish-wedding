/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { GoogleAnalyticsComponent } from "./google-analytics.component";

describe("GoogleAnalyticsComponent", () => {
	let component: GoogleAnalyticsComponent;
	let fixture: ComponentFixture<GoogleAnalyticsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ GoogleAnalyticsComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GoogleAnalyticsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
