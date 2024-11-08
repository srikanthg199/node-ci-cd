const supertest = require('supertest');
const app = require('./sever');
const request = supertest(app);

describe('GET /', () => {
    it('should return Hello, CI/CD!', async () => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, CI/CD!');
    });
});
