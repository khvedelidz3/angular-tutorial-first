import { ActivatedRoute, Router } from "@angular/router";
import { NewsService } from "./../news.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  article;

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe(value => {
      const articleId = +value.get("articleId");
      this.article = this.newsService.getArticleById(articleId);

      if (!this.article) {
        router.navigate(["error"]);
      }
    });
  }

  ngOnInit() {}
}
