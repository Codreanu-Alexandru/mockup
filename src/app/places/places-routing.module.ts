import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceCardTableComponent } from './place-card-table/place-card-table.component';

const routes: Routes =
  [
    {
      path: 'places',
      component: PlaceCardTableComponent
    },
    {
      path: 'discover',
      redirectTo: 'places'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }
