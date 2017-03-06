angular.
module('beerDetail').
component('beerDetail', {
  templateUrl: '/beer-detail/beer-detail.template.html',
  controller: ['Beer', '$routeParams', '$scope', '$location','$window',
    function BeerDetailController(Beer, $routeParams, $scope, $location, $window) {
      this.beerDetails = Beer.getBeerDetails({ ids:$routeParams.beerId });
      this.goBackToResults = function () {
        //$location.path(`/`);
        $window.history.back();
      }
  }
  ]
});