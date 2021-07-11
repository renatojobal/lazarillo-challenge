import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  constructor(public placeService: PlaceService) {
    // Update the list of places from firebase
    this.place$ = placeService.getFavoritePlaceList();
  }

  ngOnInit(): void {}

  // List of places
  place$: Observable<any[]>;

  // Element to change the color of the item in the list
  // if it is selected
  selectedPlace = {} as Place;

  // Event emitter
  @Output() changedPlaceEvent = new EventEmitter<Place>();

  onItemClicked(place: Place) {
    console.log('Item clicked ' + place.name);

    this.changedPlaceEvent.emit(place); // Emit the selected place to app component

    this.selectedPlace = place; // Update selected place to change its color
  }


}
