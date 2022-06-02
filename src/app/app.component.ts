import {Component, OnInit} from "@angular/core";
import {DogService} from "./dog.service";
import {Dog} from "./models/Dog";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  dogs: Dog[] = []

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.dogService.fetchDogs().subscribe(dogs => {
      this.dogs = dogs
    })
  }
}
