describe('core.beer-selection', function(){

    beforeEach(angular.mock.module('core.beer-selection'));

    it('returns the last beer set as selected', inject(function(BeerSelection){

      let firstBeerSelected = {
        "id": 192,
        "name": "Punk IPA"};

      let secondBeerSelected = {
        "id": 113,
        "name": "India IPA"};

      expect( BeerSelection.getBeerSelected() ).toEqual({});

      BeerSelection.setBeerSelected(firstBeerSelected);
      expect( BeerSelection.getBeerSelected() ).toEqual(firstBeerSelected);

      BeerSelection.setBeerSelected(secondBeerSelected);
      expect( BeerSelection.getBeerSelected() ).toEqual(secondBeerSelected);
    }))

  });