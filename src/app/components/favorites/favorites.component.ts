import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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

  


}
