import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { WindowService } from '../../../../shared/services/window/window.service';
import { WindowServiceMock } from '../../../../shared/services/window/window.service.mock.spec';

import { FacebookCommentsComponent } from './facebook-comments.component';

describe('FacebookCommentsComponent', () => {
  let component: FacebookCommentsComponent;
  let fixture: ComponentFixture<FacebookCommentsComponent>;

  class MockActivatedRoute {
    public params = Observable.of({ path: 'test' });
    public snapshot = {
      params: {
        language: 'en'
      }
    };
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FacebookCommentsComponent
      ],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: WindowService, useClass: WindowServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
