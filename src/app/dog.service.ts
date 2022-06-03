import {Injectable} from '@angular/core';
import {Dog} from './models/Dog';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

type DogsResponse = {
  dogs: Dog[];
}
type DogResponse = {
  dog: Dog;
}

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

  constructor(private http: HttpClient) {}

  fetchDogs() {
    return this.http.get<DogsResponse>(`${environment.baseApiUrl}/dogs`)
  }

  addDog(dog: Dog) {
    return this.http.post<DogResponse>(`${environment.baseApiUrl}/dogs`, dog)
  }

  search(searchTerm: string) {
    return this.http.get<DogsResponse>(`${environment.baseApiUrl}/dogs/search?search=${searchTerm}`)
  }
}
