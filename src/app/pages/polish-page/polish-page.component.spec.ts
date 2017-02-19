import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishPageComponent } from './polish-page.component';
import { SharedPageComponentsModule } from '../../app.shared.module';

describe('PolishPageComponent', () => {
  let component: PolishPageComponent;
  let fixture: ComponentFixture<PolishPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolishPageComponent ],
      imports: [SharedPageComponentsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
