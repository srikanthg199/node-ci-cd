const supertest = require('supertest');
const app = require('./server');
const request = supertest(app);

let server;

beforeAll(() => {
    // Start the server before running tests
    server = app.listen(3000); // You can specify the port or leave it dynamic
});

afterAll(() => {
    // Close the server after all tests are done
    server.close();
});

describe('GET /', () => {
    it('should return Hello, CI/CD!', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, CI/CD!');
    });
});
