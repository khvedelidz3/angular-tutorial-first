import { NewsComponent } from "./news.component";
import { NewsService } from '../news.service';
import { dataBase } from '../dbArticle';


describe('News component tests', () => {
    let component = new NewsComponent(new NewsService());

   it('Getter articles should return articles from database', () => {
       expect(component.articles).toBe(dataBase);
   })
});