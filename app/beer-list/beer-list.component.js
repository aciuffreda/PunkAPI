angular.
module('beerList')
  .component('beerList', {
  templateUrl: '/beer-list/beer-list.template.html',
  controller: ['Beer','$scope', '$location', '$uibModal',
    function BeerListController(Beer, $scope, $location, $uibModal) {

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
      // var promised = Beer.query().$promise.then(function (validated) {
      //   return this.currentPageBeers = Array.from(validated);
      // });
      // console.log(this.currentPageBeers);
      // this.currentPageBeers = Array.from(this.allBeersRetrieved(1,[]));

      this.showDetails = function (beerSelected) {
        $uibModal.open({
          templateUrl: '/beer-list/beer-list.details-template.html',
          controller: ($uibModalInstance, $scope) => {
            $scope.ok = function () {
              $uibModalInstance.close();
            };
            $scope.beer = beerSelected;
          }
        });
      };
  }]
});