export const basePath = 'baz';
export const map = {
  get: {
    '/': function (request, response) {
      response.send('test');
    }
  }
};
