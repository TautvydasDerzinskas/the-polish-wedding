
import { Component, OnInit } from '@angular/core';

import { WindowService } from '../../../shared/services/window/window.service';

@Component({
  selector: 'tpw-google-map',
  templateUrl: './google-map.component.html',
})
export class GoogleMapComponent implements OnInit {
  private _coords = {
    dukla: {
      position: {
        lat: 49.559001,
        lng: 21.682184
      },
      icon: '/assets/maps/dukla-marker.png'
    },
    krosno: {
      position: {
        lat: 49.6891853,
        lng: 21.7517636
      },
      icon: '/assets/maps/krosno-marker.png'
    },
    rzesow: {
      position: {
        lat: 50.0054089,
        lng: 21.9184153
      },
      icon: '/assets/maps/rzesow-marker.png'
    }
  };

  constructor (
    private windowService: WindowService
  ) {}

  ngOnInit() {
    this._initialize();
  }

  private _initialize() {
    const map = new this.windowService.nativeWindow.google.maps.Map(
      this.windowService.nativeWindow.document.getElementById('map'),
      {
        zoom: 9,
        center: {
          lat: 49.829941,
          lng: 21.881311
        },
        mapTypeId: this.windowService.nativeWindow.google.maps.MapTypeId.ROADMAP
    });

    for (const place in this._coords) {
      if (this._coords[place]) {
        const marker = new this.windowService.nativeWindow.google.maps.Marker({
          position: this._coords[place].position,
          map: map,
          icon: this._coords[place].icon
        });
      }
    }
  }
}
