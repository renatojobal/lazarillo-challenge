import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { circle, latLng, polygon, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  @Input() selectedPlace = {} as Place;

  locationUrl : string = "https://www.openstreetmap.org/export/embed.html?bbox=-117.98303604125978%2C33.68578204940791%2C-117.76330947875978%2C33.813812204923&amp;layer=mapnik&amp;marker=33.74982102185933%2C-117.87317276000977"

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    },
    overlays: {
      'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
      'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
    }
  }
  
  constructor() {
   
  }

  ngOnInit(): void {


  
  }

}
