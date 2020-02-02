const request = require('supertest');
const app = require('../server/server');
const mockAPI = require('../server/mockAPI');

/*https://stackoverflow.com/questions/12209582/the-describe-keyword-in-javascript*/
/*https://jasmine.github.io/2.0/introduction*/

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

    });

    it('[POST: /article] It should return a response for article endpoint', (done) => {
        // expect(200).toBe(200);
        request(app)
            .post('/article')
            .send({articleUrl: 'https://www.nytimes.com/2020/01/31/opinion/soros-facebook-zuckerberg.html'})
            .expect(200)
            .end((err, res) => {
                //console.log('ERR', err);
                // console.log('RES ==== ', res.body);
                expect(res.body).toHaveProperty('polarity');
                expect(res.body).toHaveProperty('polarity_confidence');
                expect(res.body).toHaveProperty('subjectivity_confidence');
                expect(res.body).toHaveProperty('subjectivity');
                expect(res.body).toHaveProperty('text');
                done();
            })

    })
})

