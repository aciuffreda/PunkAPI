describe('Beer Service:', function() {

  beforeEach(angular.mock.module('core.beer-retriever'));

  beforeEach(inject(function($httpBackend) {
    let beersRetrieved = [{
        "id": 192,
        "name": "Punk IPA 2007 - 2010",
      }];
    $httpBackend.whenGET('https://api.punkapi.com/v2/beers')
      .respond(beersRetrieved);
  }));

  it('is defined', inject(function(Beer) {
    expect(Beer).toBeDefined();
  }));

  it('returns a resource function', inject(function(Beer) {
    const output = Beer;
    expect(output).toEqual(jasmine.any(Function));
    expect(output.query({}.$promise)).toBeDefined();
  }));

  it('returns the available beers',
    inject(function(Beer, $httpBackend) {
      let output = Beer.query();
      output.$promise.then(function(data) {
        output = data;
      });
      $httpBackend.flush();
      expect(output.length).toEqual(1);
      expect(output[0].id).toEqual(192);
    }));

});
