import {Component, OnInit} from '@angular/core';
import {DogService} from '../dog.service';
import {Dog} from '../models/Dog';

@Component({
  selector: 'app-dogs-index',
  templateUrl: './dogs-index.component.html',
  styleUrls: ['./dogs-index.component.scss']
})
export class DogsIndexComponent implements OnInit {
  dogs: Dog[] = []

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.dogService.fetchDogs().subscribe(response => {
      this.dogs = response.dogs
    })
  }

  addDog(newDog: Dog) {
    this.dogService.addDog(newDog).subscribe(response => {
      this.dogs = [response.dog, ...this.dogs]
    })
  }
}
