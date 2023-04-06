'use strict';

const server = require('../src/server.js');
const app = server.app;
const request = require('supertest')(app);
const handle500 = require('../src/error-handlers/500.js');


describe('Testing the express server', () => {
  test('Should response with 404 for a bad route', async () => {
    const response = await request.get('/bad-route');
    expect(response.status).toEqual(404);
  });

  test('Should response with 404 for a bad method', async () => {
    const response = await request.put('/person');
    expect(response.status).toEqual(404);
  });

  test('should return a 500 Internal Server Error response', () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    handle500(null, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
  });

  test('Should response with 200 if the name is in the query string', async () => {
    const name = 'John';
    const response = await request.get(`/person?name=${name}`);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ name: 'John' });
  });
});
