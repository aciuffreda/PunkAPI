angular.
module('punkAPI').
config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/', {
      template: '<beer-list></beer-list>'
    }).
    when('/beer/:beerId', {
      template: '<beer-detail></beer-detail>'
    }).
    otherwise('/');
  }
]);