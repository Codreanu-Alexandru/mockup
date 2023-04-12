import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/Place.model';
import { PlaceSender } from 'src/app/services/placeSender.service';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss']
})
export class PlaceCardComponent {
  @Input() place?: Place;

  constructor(private placeSender: PlaceSender, private router: Router) { }
  placeRedirect() {
    this.placeSender.savePlace(this.place);
    this.router.navigate(['/home']);
  }

}
