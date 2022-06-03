import {Component, Input} from '@angular/core';
import {Dog} from '../models/Dog';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent {
  @Input() dogs: Dog[] = []

  addDog(newDog: Dog) {
    // Emit event
  }
}
