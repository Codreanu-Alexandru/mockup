import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/Place.model';
import { PlacesGetter } from 'src/app/services/placesGetter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() placeFromSearchBar: EventEmitter<Place> = new EventEmitter<Place>;
  places: Place[] = this.placesGetter.getPlaces;
  currentSearch?: string;

  searchTerm!: string;
  searchResults!: Place[];

  constructor(private placesGetter: PlacesGetter, private router: Router) { };

  search() {
    if (!this.searchTerm) {
      this.searchResults = [];
      return;
    }

    this.searchResults = this.places.filter(place =>
      place.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSearchPlace(place: Place) {
    this.placeFromSearchBar.emit(place);
    this.searchTerm = '';
    this.searchResults = [];
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
