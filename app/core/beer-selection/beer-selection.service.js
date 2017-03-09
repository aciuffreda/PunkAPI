angular.
module('core.beer-selection').
service('BeerSelection', [
  function BeerSelection(){
    let beerSelected = {};
    return {
      getBeerSelected: function () {
        console.log('getBeerSelected '+beerSelected);
        return beerSelected;
      },
      setBeerSelected: function (value) {
        beerSelected = value;
        console.log('setBeerSelected '+beerSelected);
      }
    };
  }
]);