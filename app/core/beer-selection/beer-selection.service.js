angular.
module('core.beer-selection').
service('BeerSelection', [
  function BeerSelection(){
    let beerSelected = {};
    return {
      getBeerSelected: () => beerSelected,
      setBeerSelected: (value) => beerSelected = value,
    };
  }
]);