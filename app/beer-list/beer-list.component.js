angular.
module('beerList')
  .component('beerList', {
  templateUrl: '/beer-list/beer-list.template.html',
  controller: ['Beer','$scope', '$location', '$uibModal',
    function BeerListController(Beer, $scope, $location, $uibModal) {

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
       console.log($scope);
       console.log($scope.maxAbv);
       console.log($scope.minIbu);
       console.log($scope.maxIbu);

       if($scope.minAbv != null) filterParams.abv_lt = $scope.minAbv;
       if($scope.maxAbv != null) filterParams.abv_gt = $scope.maxAbv;
       if($scope.minIbu != null) filterParams.ibu_lt = $scope.minIbu;
       if($scope.maxIbu != null) filterParams.ibu_gt = $scope.maxIbu;
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