import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  
  tags = undefined
  elements = undefined
  constructor(private placeService: PlaceService) {



  }

  ngOnInit(): void {
    this.placeService.getInfoFeature(this.selectedPlace.type, this.selectedPlace.featureId).subscribe((res)=>{
      this.elements = res.elements
      this.tags = res.elements[0].tags
      console.log("Tags"+res.elements[0].tags);
    });   
 

  }

  ngOnChanges(): void {
    this.placeService.getInfoFeature(this.selectedPlace.type, this.selectedPlace.featureId).subscribe((res)=>{
      this.elements = res.elements
      this.tags = res.elements[0].tags
      console.log("Tags"+res.elements[0].tags);
    });   
 
  }

  @Input() selectedPlace = {} as Place;



  addToFavorites() {
    console.log('Add to favorites the current place');
    this.placeService.addFavoritePlace(this.selectedPlace)
  }
}
