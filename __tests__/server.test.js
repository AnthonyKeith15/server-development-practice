'use strict';

const server = require('../src/server.js');
const app = server.app;
const request = require('supertest')(app);


describe('GET /unknown', () => {
  it('should return 404 status code', async () => {
    const response = await request.get('/unknown');
    expect(response.status).toEqual(404);
  });
});

describe('POST /person', () => {
  it('should return 404 status code', async () => {
    const response = await request.post('/person');
    expect(response.status).toEqual(404);
  });
});

describe('Testing the express server', () => {
  test('Should response with a 500 for a POST to /message with no message', async () => {
    const response = await request.post('/message');
    expect(response.status).toEqual(500);
    expect(response.body).toEqual({});
  });


  it('should return 200 status code and a JSON object with the provided name', async () => {
    const name = 'John';
    const response = await request.get(`/person?name=${name}`);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ name: 'John' });
  });
});
