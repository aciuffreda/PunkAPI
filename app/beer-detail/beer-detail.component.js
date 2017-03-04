angular.
module('beerDetail').
component('beerDetail', {
  templateUrl: '/beer-detail/beer-detail.template.html',
  controller: ['Beer', '$routeParams', '$scope',
    function BeerDetailController(Beer, $routeParams, $scope) {
      this.beerDetails = Beer.getBeerDetails({ ids:$routeParams.beerId });
    }
  ]
});