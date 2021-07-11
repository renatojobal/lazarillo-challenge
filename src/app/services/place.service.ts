import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  constructor(
    private angularFirestore: AngularFirestore,
    private http: HttpClient
  ) {}

  getPlaceDoc(id: string) {
    return this.angularFirestore
      .collection('place-collection')
      .doc(id)
      .valueChanges();
  }

  getPopularPlaceList() {
    return this.angularFirestore.collection('place-collection').valueChanges();
  }

  getFavoritePlaceList() {
    return this.angularFirestore
      .collection('favorite-collection')
      .valueChanges();
  }

  addFavoritePlace(place: Place) {

    if(place.name == "" || place.name == undefined){
      console.log("Place without name"+place.name)
      place.name = `${place.latitude}, ${place.longitude}`
    }
    console.log("Final place name"+place.name)

    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('favorite-collection')
        .add(place)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  deletePlace(place: Place, id: string) {
    return this.angularFirestore.collection('place-collection').doc(id).update({
      name: place.name,
      latitude: place.latitude,
      longitude: place.longitude,
      topLeftCornerBox: place.topLeftCornerBox,
      topRightConerBox: place.topRightConerBox,
      bottomLeftCornerBox: place.bottomLeftCornerBox,
      bottomRightCornerBox: place.bottomRightCornerBox,
    });
  }



  getInfoFeature(type: string, id: number) {
    return this.http.get<any>(
      `https://api.openstreetmap.org/api/0.6/${type}/${id}.json`
    );
  }
}
