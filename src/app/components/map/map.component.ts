import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  @Input() selectedPlace = {} as Place;

  locationUrl : string = "https://www.openstreetmap.org/export/embed.html?bbox=-117.98303604125978%2C33.68578204940791%2C-117.76330947875978%2C33.813812204923&amp;layer=mapnik&amp;marker=33.74982102185933%2C-117.87317276000977"

  constructor() {
   
  }

  ngOnInit(): void {
  }

}
