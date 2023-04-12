import { Injectable } from "@angular/core";
import { Article } from "../models/Article.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class ArticlesGetter {
    private desc: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    private articles: Article[] =
        [
            {
                title: 'Travel',
                subtitle: 'Article title',
                content: this.desc
            },
            {
                title: 'Travel Activities',
                subtitle: 'Article title',
                content: this.desc
            },
            {
                title: 'Our Professional Guide',
                subtitle: 'Article title',
                content: this.desc
            },
            {
                title: 'Activities',
                subtitle: 'Article title',
                content: this.desc
            },
        ];

    placesSubject = new Subject<Article[]>();
    constructor() { };

    get getArticles() {
        return this.articles;
    }

    set setArticles(newArticles: Article[]) {
        this.articles = newArticles;
        this.placesSubject.next(newArticles);
    }

    addArticle(newArticle: Article) {
        this.articles.push(newArticle);
        this.placesSubject.next(this.articles);
    }
}