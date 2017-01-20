/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { FacebookCommentsComponent } from "./facebook-comments.component";

describe("FacebookCommentsComponent", () => {
	let component: FacebookCommentsComponent;
	let fixture: ComponentFixture<FacebookCommentsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FacebookCommentsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FacebookCommentsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
