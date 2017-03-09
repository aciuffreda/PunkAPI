angular.
module('core.beer-retriever').
factory('Beer', ['$resource',
  ($resource) => {
    return $resource('https://api.punkapi.com/v2/beers', {}, {
      query: {
        method: 'GET',
        isArray: true
      },
    });
  },
]);