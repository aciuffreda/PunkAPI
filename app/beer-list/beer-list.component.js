angular.
module('beerList').
component('beerList', {
  templateUrl: '/beer-list/beer-list.template.html',
  controller: ['Beer', '$scope', '$location',
    function BeerListController(Beer, $scope, $location) {
    this.beers = Beer.query();
    this.getBeerDetails = function (id) {
      console.log(id);
      $location.path(`/beer/${id}`);
    }
      //this.orderProp = 'age';
  }]
});