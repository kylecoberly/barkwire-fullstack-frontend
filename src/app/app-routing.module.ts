import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DogsIndexComponent} from './dogs-index/dogs-index.component';
import {SearchResultsComponent} from './search-results/search-results.component';

const routes: Routes = [{
  path: "",
  component: DogsIndexComponent
}, {
  path: "results",
  component: SearchResultsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
