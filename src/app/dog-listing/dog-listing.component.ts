import {Component, Input} from "@angular/core";

@Component({
  selector: "app-dog-listing",
  templateUrl: "./dog-listing.component.html",
  styleUrls: ["./dog-listing.component.scss"]
})
export class DogListingComponent {
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() description!: string;
}
