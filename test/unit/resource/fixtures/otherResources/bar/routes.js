export const basePath = 'bar';
export const map = {
  get: {
    '/': function (request, response) {
      response.send('test');
    }
  }
};
