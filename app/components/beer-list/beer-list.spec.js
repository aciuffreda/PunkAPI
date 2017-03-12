describe('BeerListController', function() {

  beforeEach(module('beerList'));

  let ctrl;
  let $controller;
  let uibModal;
  let beerSelection;
  let location;
  let beer;
  let rootScope;
  let createController;

  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new();
    createController = () => {
      let locals = {
        'Beer' : beer,
        'BeerSelection': beerSelection,
        '$scope': scope,
        '$location' : location,
        '$uibModal' : uibModal,
        '$rootScope': rootScope,
      };
      ctrl = $controller('BeerListController', locals);
    };
    createController();
  }));

  it('has a defined controller', () => {
    expect(ctrl).toBeDefined();
  });

});
