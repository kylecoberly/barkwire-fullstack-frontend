import {Component} from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-dog-search-form',
  templateUrl: './dog-search-form.component.html',
  styleUrls: ['./dog-search-form.component.scss']
})
export class DogSearchFormComponent {
  constructor(private router: Router) {}
  searchDogs({searchTerm}: {searchTerm: string;}) {
    console.log(searchTerm)
    this.router.navigate([`/results`], {queryParams: {search: searchTerm}})
  }
}
