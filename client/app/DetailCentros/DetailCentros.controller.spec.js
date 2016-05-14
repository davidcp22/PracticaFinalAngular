'use strict';

describe('Component: DetailCentrosComponent', function () {

  // load the controller's module
  beforeEach(module('helpetApp'));

  var DetailCentrosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DetailCentrosComponent = $componentController('DetailCentrosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
