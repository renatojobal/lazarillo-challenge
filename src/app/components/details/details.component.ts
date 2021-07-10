import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  
  constructor(public placeService: PlaceService) {}

  ngOnInit(): void {}

  @Input() selectedPlace = {} as Place;

  addToFavorites() {
    console.log('Add to favorites the current place');
    this.placeService.addFavoritePlace(this.selectedPlace)
  }
}
