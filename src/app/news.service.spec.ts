import { dataBase } from './dbArticle';
import { NewsService } from './news.service';
describe('News service tests', () => {
    let service: NewsService;

    beforeEach(() => {
        service = new NewsService();
    })

    it('Method getArticles should return array of article objects', () => {
        expect(service.getArticles()).toBe(dataBase);
    });

    it('Method getArticleById should return undefined if artucle doesnot exists in database', () => {
        expect(service.getArticleById(999)).toBe(undefined);
    })

    it('Method getArticleById should return article if its exists in databse', () => {
        const article = dataBase.find(article => article.id === 2);
        expect(service.getArticleById(2)).toBe(article);
    })
   
});