import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DogListingComponent} from './dog-listing/dog-listing.component';
import {DogSearchFormComponent} from './dog-search-form/dog-search-form.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {DogsListComponent} from './dogs-list/dogs-list.component';
import {DogsIndexComponent} from './dogs-index/dogs-index.component';

@NgModule({
  declarations: [
    AppComponent,
    DogListingComponent,
    DogSearchFormComponent,
    SearchResultsComponent,
    DogsListComponent,
    DogsIndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
