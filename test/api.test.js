const request = require('supertest')
const app = require('../src/app')


describe("GET /api/request/all/{identification}", ()=>{
    it('respond with json containing list all request', done=>{
        request(app)
        .get('/api/request/all/12345')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
        
    })
})









