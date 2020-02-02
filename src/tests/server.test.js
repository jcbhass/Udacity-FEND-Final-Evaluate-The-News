const request = require('supertest');
const app = require('../server/server');
const mockAPI = require('../server/mockAPI');

describe('API Test', () => {
    it('[GET: /test] It should return a response for test endpoint', (done) => {
        // expect(200).toBe(200);
        request(app)
            .get('/test')
            .expect(200)
            .end((err, res) => {
                expect(res.body.title).toBe(mockAPI.title);
                expect(res.body.message).toBe(mockAPI.message);
                expect(res.body.time).toBe(mockAPI.time);
                done();
            })

    })
})