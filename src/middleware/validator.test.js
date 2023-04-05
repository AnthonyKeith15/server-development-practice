const validator = require('./validator');

describe('validator middleware', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      query: {},
    };
    res = {};
    next = jest.fn();
  });

  it('should call next with an error if name is missing', () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith(expect.any(Error));
    expect(next.mock.calls[0][0].message).toBe('Name is missing from query string');
    expect(next.mock.calls[0][0].statusCode).toBe(400);
  });

  it('should call next if name is provided', () => {
    req.query.name = 'John';
    validator(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });
});
