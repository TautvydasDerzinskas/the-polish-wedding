
import { Component, OnInit } from '@angular/core';

declare let google: any;

@Component({
  selector: 'tpw-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  private coords = {
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

  constructor() { }

  ngOnInit() {
    this.initialize();
  }

  private initialize() {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: {
        lat: 49.829941,
        lng: 21.881311
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    for (const place in this.coords) {
      if (this.coords[place]) {
        const marker = new google.maps.Marker({
          position: this.coords[place].position,
          map: map,
          icon: this.coords[place].icon
        });
      }
    }
  }

}
