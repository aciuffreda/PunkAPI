angular.
module('beerList').
component('beerList', {
  templateUrl: '/beer-list/beer-list.template.html',
  controller: ['Beer', 'NgTableParams','$scope', '$location',
    function BeerListController(Beer, NgTableParams, $scope, $location) {

      // this.currentPageBeers = Beer.query({
      //   page: 1,
      //   per_page: 80,
      // }).$promise.then(function(data){ console.log(data) });

      this.allBeersRetrieved = (index, before) => {
        let allBeers = before;
        Beer.query({
          page: index,
          per_page: 80,
        }).$promise.then(data => {
          if (data.length > 0) {
            allBeers.push(...data);
            return this.allBeersRetrieved(index+1, allBeers);
          } else {
            return allBeers;
          }
        });
        return allBeers;
      };

      this.currentPageBeers = this.allBeersRetrieved(1,[]);

      self.tableParams = new NgTableParams({}, {
          dataset: this.currentPageBeers,
        });

      this.goToBeerDetailsPage = function (id) {
      $location.path(`/beer/${id}`);
    };
  }]
});