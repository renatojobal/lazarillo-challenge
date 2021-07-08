import { Component } from '@angular/core';
import { Place } from './models/place.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazarillo-challenge';


  selectedPlace = {} as Place;


  receivePlace($event : Place){
    console.log("Getting the selected place")
    this.selectedPlace = $event
  }

}
