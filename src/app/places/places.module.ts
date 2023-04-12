import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlaceCardComponent } from './place-card/place-card.component';
import { PlaceCardTableComponent } from './place-card-table/place-card-table.component';


@NgModule({
  declarations: [
    PlaceCardComponent,
    PlaceCardTableComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule
  ]
})
export class PlacesModule { }
