import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Place } from 'src/app/models/place.model';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  place$: Observable<any[]>

  constructor(
    public placeService: PlaceService,
  ) { 
    this.place$ = placeService.getPlaceList();
  }


  ngOnInit(): void {
  }

  @Output() changedPlaceEvent = new EventEmitter<Place>();

  onItemClicked(place: Place){
      console.log("Item clicked "+place.name)
      this.changedPlaceEvent.emit(place)
  }
  


}
