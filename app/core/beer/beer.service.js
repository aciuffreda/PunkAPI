angular.
module('core.beer').
factory('Beer', ['$resource',
  function($resource) {

    return $resource('https://api.punkapi.com/v2/beers', {}, {
      query: {
        method: 'GET',
        isArray: true
      },
    });
  }
]);