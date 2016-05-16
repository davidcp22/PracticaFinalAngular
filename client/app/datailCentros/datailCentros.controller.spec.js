'use strict';

describe('Component: DatailCentrosComponent', function () {

  // load the controller's module
  beforeEach(module('helpetApp'));

  var DatailCentrosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DatailCentrosComponent = $componentController('DatailCentrosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
