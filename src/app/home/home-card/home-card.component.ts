import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/Place.model';
import { PlacesModule } from 'src/app/places/places.module';
import { PlaceSender } from 'src/app/services/placeSender.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {
  public mainPlaceCard?: Place;

  constructor(private placeSender: PlaceSender) { };

  ngOnInit(): void {
    this.mainPlaceCard = this.placeSender.getSavedPlace;
    console.log(this.mainPlaceCard);
    if (this.mainPlaceCard == null) {
      this.mainPlaceCard = {
        image: 'assets/A.jpg',
        title: 'New Adventure',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      };
    }
  };
  
  onPlaceSelected(event: any) {
    console.log(event);
    this.mainPlaceCard = event;
  }

}
