import { NewsService } from "./../news.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  constructor(private newsService: NewsService) {}

  ngOnInit() {}

  get articles() {
    return this.newsService.getArticles();
  }
}
