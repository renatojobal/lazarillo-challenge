import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { circle, icon, latLng, marker, polygon, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  @Input() selectedPlace = {} as Place;

  locationUrl : string = "https://www.openstreetmap.org/export/embed.html?bbox=-117.98303604125978%2C33.68578204940791%2C-117.76330947875978%2C33.813812204923&amp;layer=mapnik&amp;marker=33.74982102185933%2C-117.87317276000977"

  layerMarker = marker([ -0.7422, -90.3091], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  });

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      this.layerMarker
    ],
    zoom: 10,
    center: latLng(-0.7422, -90.3091),
  };

  
  

  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Marker': this.layerMarker
    },
    overlays: {

    }
  }
  
  constructor() {
   
  }

  ngOnInit(): void {


  
  }

}
