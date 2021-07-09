import { Component } from '@angular/core';
import { icon, latLng, marker } from 'leaflet';
import { Place } from './models/place.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazarillo-challenge';


  selectedPlace = {} as Place;

  mapCenter = latLng(0, 0)


  receivePlace($event : Place){
    console.log("Getting the selected place")

    // Update the values to the map component
    this.selectedPlace = $event 
    this.mapCenter = latLng($event.latitude, $event.longitude)
  }

}
