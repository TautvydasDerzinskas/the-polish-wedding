import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LithuanianPageComponent } from './lithuanian-page.component';

describe('LithuanianPageComponent', () => {
  let component: LithuanianPageComponent;
  let fixture: ComponentFixture<LithuanianPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LithuanianPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LithuanianPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
