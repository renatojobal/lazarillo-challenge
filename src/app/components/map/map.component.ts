import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { circle, icon, LatLng, latLng, Marker, marker, polygon, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  @Input() selectedPlace = {} as Place;

  // Get as input to change the map center each time a place is sleceted
  @Input() mapCenter = {} as LatLng; 


  /**
   * General options of the map
   */
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 13
  };

  /**
   * Controls that appear on the map
   */
  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    },
    overlays: {

    }
  }
  
  constructor() {

   
  }

  ngOnInit(): void {

  
  }

}
