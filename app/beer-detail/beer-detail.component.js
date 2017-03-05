angular.
module('beerDetail').
component('beerDetail', {
  templateUrl: '/beer-detail/beer-detail.template.html',
  controller: ['Beer', '$routeParams', '$scope', '$location',
    function BeerDetailController(Beer, $routeParams, $scope, $location) {
      this.beerDetails = Beer.getBeerDetails({ ids:$routeParams.beerId });
      this.goBackToResults = function () {
        $location.path(`/`);
      }
  }
  ]
});