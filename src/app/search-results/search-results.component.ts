import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DogService} from '../dog.service';
import {Dog} from '../models/Dog';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchTerm = ""
  results: Dog[] = []

  constructor(private route: ActivatedRoute, private dogService: DogService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params["search"]
      this.dogService.search(this.searchTerm).subscribe(response => {
        this.results = response.dogs
      })
    })
  }
}
