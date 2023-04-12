import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeCardComponent } from './home-card/home-card.component';
import { SearchComponent } from './search/search.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    HomeCardComponent,
    SearchComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
