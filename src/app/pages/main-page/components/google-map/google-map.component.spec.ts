import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowService } from '../../../../shared/services/window/window.service';
import { WindowServiceMock } from '../../../../shared/services/window/window.service.mock.spec';

import { GoogleMapComponent } from './google-map.component';

describe('GoogleMapComponent', () => {
  let component: GoogleMapComponent;
  let fixture: ComponentFixture<GoogleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoogleMapComponent
      ],
      providers: [
        { provide: WindowService, useClass: WindowServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

