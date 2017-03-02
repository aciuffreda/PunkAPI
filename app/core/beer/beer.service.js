angular.
module('core.beer').
factory('Beer', ['$resource',
  function($resource) {
    // return $resource('beers/:beerId.json', {}, {
    //   query: {
    //     method: 'GET',
    //     params: {beerId: 'beers'},
    //     isArray: true
    //   }
    // });
    return $resource('https://api.punkapi.com/v2/beers', {}, {
      query: {
        method: 'GET',
        params: {page: 3, per_page: 80},
        isArray: true
      }
    });
  }
]);