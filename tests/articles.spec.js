const request = require('supertest');
const app = require('./server.js'); 
const mockingoose = require('mockingoose').default;
const Article = require('../api/articles/articles.model');

describe('Articles API', () => {
    
    beforeEach(() => {
        mockingoose.resetAll();
    });

    it('should create a new article', async () => {
        const mockArticle = { title: 'Test Title', content: 'Test Content' };
        mockingoose(Article).toReturn(mockArticle, 'save');

        const res = await request(app).post('/api/articles').send(mockArticle);
        
        expect(res.status).toBe(201);
        expect(res.body.title).toBe(mockArticle.title);
        expect(res.body.content).toBe(mockArticle.content);
    });

    it('should update an article', async () => {
        const mockArticle = { title: 'Updated Title', content: 'Updated Content' };
        mockingoose(Article).toReturn(mockArticle, 'findOneAndUpdate');

        const res = await request(app).put('/api/articles/some_id').send(mockArticle);
        
        expect(res.status).toBe(200);
        expect(res.body.title).toBe(mockArticle.title);
        expect(res.body.content).toBe(mockArticle.content);
    });

    it('should delete an article', async () => {
        mockingoose(Article).toReturn({}, 'findOneAndDelete');

        const res = await request(app).delete('/api/articles/some_id');
        
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Article deleted successfully');
    });
});
