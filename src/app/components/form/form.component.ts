import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public placeForm: FormGroup

  constructor(
    public placeService: PlaceService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.placeForm = this.formBuilder.group({
      name: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit (){
    console.log("Store this place information")
    this.placeService.createPlace(this.placeForm.value);
    
  }



}
