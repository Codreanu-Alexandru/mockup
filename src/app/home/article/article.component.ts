import { Component } from '@angular/core';
import { Article } from 'src/app/models/Article.model';
import { ArticlesGetter } from 'src/app/services/articlesGetter.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  public articles: Article[] = this.articlesGetter.getArticles;

  constructor(private articlesGetter: ArticlesGetter) { };

}
