import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404Component } from './404-page.component';

describe('404PageComponent', () => {
  let component: Page404Component;
  let fixture: ComponentFixture<Page404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
