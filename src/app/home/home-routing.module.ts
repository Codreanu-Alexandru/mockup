import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCardComponent } from './home-card/home-card.component';

const routes: Routes =
  [
    {
      path: '',
      component: HomeCardComponent
    },
    {
      path: 'home',
      redirectTo: ''
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
