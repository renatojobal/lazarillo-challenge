import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() selectedPlace = {} as Place;
  

}
