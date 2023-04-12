import { Component } from '@angular/core';
import { Place } from 'src/app/models/Place.model';
import { PlacesGetter } from 'src/app/services/placesGetter.service';

@Component({
  selector: 'app-place-card-table',
  templateUrl: './place-card-table.component.html',
  styleUrls: ['./place-card-table.component.scss']
})
export class PlaceCardTableComponent {

  currentPage: number = 1;
  desc: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  places: Place[] = this.placesGetter.getPlaces;

  constructor(private placesGetter: PlacesGetter) { };

  loadPrevious() {
    this.currentPage--;
  }

  loadNext() {
    this.currentPage++;
  }

  getItems() {
    const start = (this.currentPage - 1) * 6;
    const end = start + 6;
    return this.places.slice(start, end);
  }
}
