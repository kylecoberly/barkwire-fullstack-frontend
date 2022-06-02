import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {Dog} from './models/Dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  dogs: Dog[] = [{
    name: "Bixby",
    imageUrl: "https://dogtime.com/assets/uploads/gallery/chow-chow-dog-breed-pictures/3-fullbody.jpg",
    description: "Just the best bud!",
  }, {
    name: "Bixby",
    imageUrl: "https://dogtime.com/assets/uploads/gallery/chow-chow-dog-breed-pictures/3-fullbody.jpg",
    description: "Just the best bud!",
  }, {
    name: "Bixby",
    imageUrl: "https://dogtime.com/assets/uploads/gallery/chow-chow-dog-breed-pictures/3-fullbody.jpg",
    description: "Just the best bud!",
  }]

  fetchDogs() {
    return of(this.dogs)
  }
}
