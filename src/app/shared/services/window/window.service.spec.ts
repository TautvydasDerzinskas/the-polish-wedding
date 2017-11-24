import { TestBed } from '@angular/core/testing';
import { WindowService } from './window.service';

describe('WindowService', () => {
  let windowService: WindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WindowService
      ]
    });

    windowService = TestBed.get(WindowService);
  });

  it('Should initialize correctly', () => {
    expect(windowService).toBeTruthy();
    expect(windowService.nativeWindow).toEqual(window);
  });
});
