const mockAPI = require('../server/mockAPI');

/*https://stackoverflow.com/questions/12209582/the-describe-keyword-in-javascript*/
/*https://jasmine.github.io/2.0/introduction*/

describe('Mock API Test', () => {
  it('it should return true', () => {
    const title = 'test json response';
    const message = 'this is a message';
    const time = 'now';
    expect(mockAPI.message).toBe(message);
    expect(mockAPI.title).toBe(title);
    expect(mockAPI.time).toBe(time);
  });
})

