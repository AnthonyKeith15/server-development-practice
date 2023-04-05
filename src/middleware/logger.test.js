const logger = require('./logger');

describe('logger middleware', () => {
  it('should log the request method and path', () => {
    const req = {
      method: 'GET',
      path: '/test',
    };
    const res = {};
    const next = jest.fn();
    console.log = jest.fn();

    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith('GET /test');
    expect(next).toHaveBeenCalledTimes(1);
  });
});
