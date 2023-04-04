const capitalize = require('./capitalize.js');

describe('As a user, I want to be able to send a message to the server and have it capitalized', () => {

  test('When I send a message to the server, it should return the message capitalized', () => {
    let upperCaseMessage = capitalize('hello');
    expect(upperCaseMessage).toBe('HELLO');
  });
});
