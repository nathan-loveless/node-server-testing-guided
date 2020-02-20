//test.todo('not yet implemented');
const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    
    describe('GET /', () => {
        // http status code
        it('should return 200 ok', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
            // return request(server).get('/')
            // .then(res => {
            //     expect(res.status).toBe(500);
            })
        //});

        // format of the data (JSON)
        it('should return JSON', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        })

    // shape of the response
    it('should return {api: "up}', async () => {
        const res = await request(server).get('/');
        expect(res.body).toEqual({api:"up"});
    })
    })    
})