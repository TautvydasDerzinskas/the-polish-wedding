import { Injectable } from '@angular/core';

function noop() { return null; }

@Injectable()
export class WindowServiceMock {
  public window = {
    FB: () => {},
    document: {
      getElementById: () => {},
      getElementsByTagName: () => [{
        parentNode: {
          insertBefore: () => null
        }
      }],
      createElement: () => {
        return {
          id: '',
          src: ''
        };
      }
    },
    google: {
      maps: {
        Map: function () { this.test = '123'; },
        MapTypeId: {
          ROADMAP: 69
        },
        Marker: function () { this.test = '123'; }
      }
    }
  };

  get nativeWindow(): any {
    return this.window;
  }
}
