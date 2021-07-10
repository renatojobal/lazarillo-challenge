import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private angularFirestore: AngularFirestore) {}

  getPlaceDoc(id: string){
    return this.angularFirestore
    .collection('place-collection')
    .doc(id)
    .valueChanges()
  }

  getPopularPlaceList(){
    return this.angularFirestore
    .collection("place-collection")
    .valueChanges();
  }

  getPlaceList(){
    return this.angularFirestore
    .collection("place-collection")
    .valueChanges();
  }

  createPlace(place: Place){
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
      .collection("place-collection")
      .add(place)
      .then(response => { console.log(response) }, error => reject(error))
    });
  }

  deletePlace(place: Place, id: string){
    return this.angularFirestore
    .collection("place-collection")
    .doc(id)
    .update({
      name: place.name,
      latitude: place.latitude,
      longitude: place.longitude,
      topLeftCornerBox: place.topLeftCornerBox,
      topRightConerBox: place.topRightConerBox,
      bottomLeftCornerBox: place.bottomLeftCornerBox,
      bottomRightCornerBox: place.bottomRightCornerBox 
    })
  }


}
