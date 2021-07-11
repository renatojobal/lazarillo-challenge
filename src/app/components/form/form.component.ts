import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public geoPointForm: FormGroup;

  // List of popular places
  popularPlace$: Observable<any[]>;

  selectedPopularPlace = { name: 'Ninguno seleccionado' };

  constructor(
    public placeService: PlaceService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.geoPointForm = this.formBuilder.group({
      "latitude": new FormControl(''),
      "longitude": new FormControl('')
    });

    // Update the list of places from firebase
    this.popularPlace$ = placeService.getPopularPlaceList();
  }

  ngOnInit(): void {}

  // Event emitter
  @Output() changedPlaceEvent = new EventEmitter<Place>();

  onSubmit() {
    console.log('Searching by lat and long'+this.geoPointForm.value);
    console.log(""+this.geoPointForm.controls.latitude.value)

    // Create place object

    let targetPlace = {
      latitude : this.geoPointForm.controls.latitude.value,
      longitude : this.geoPointForm.controls.longitude.value
    }


    this.changedPlaceEvent.emit(this.geoPointForm.value); // Emit the selected place to app component
  }

  onPopularPlaceSelected(place: Place) {
    console.log('Searching a popular place: ' + place.name);
    this.changedPlaceEvent.emit(place); // Emit the selected place to app component
  }
}
