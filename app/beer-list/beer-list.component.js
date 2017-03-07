angular.
module('beerList')
  .component('beerList', {
  templateUrl: '/beer-list/beer-list.template.html',
  controller: ['Beer','$scope', '$location', '$uibModal',
    function BeerListController(Beer, $scope, $location, $uibModal) {

      $scope.maxAbv = 2;
      $scope.minAbv = 12;
      $scope.maxIbu = 0;
      $scope.minIbu = 100;

      this.allBeersRetrieved = (index, before, filterParams) => {
        let allBeers = before;
        console.log(filterParams);

        const params = Object.assign({},
          { page: index, per_page: 80 },
          filterParams);
        Beer.query(params).$promise.then(data => {
          if (data.length > 0) {
            allBeers.push(...data);
            return this.allBeersRetrieved(index+1, allBeers, filterParams);
          } else {
            return allBeers;
          }
        });
        return allBeers;
      };

      $scope.getBeers = () => {
       const filterParams = {};
       filterParams.abv_lt = $scope.minAbv;
       filterParams.abv_gt = $scope.maxAbv;
       filterParams.ibu_lt = $scope.minIbu;
       filterParams.ibu_gt = $scope.maxIbu;

       $scope.currentPageBeers = this.allBeersRetrieved(1,[], filterParams);
      };

      $scope.showDetails = (beerSelected) => {
        $uibModal.open({
          templateUrl: '/beer-list/beer-list.details-template.html',
          controller: ($uibModalInstance, $scope) => {
            $scope.ok = function () {
              $uibModalInstance.close();
            };
            $scope.beer = beerSelected;
          }
        });
      }
  }]
});