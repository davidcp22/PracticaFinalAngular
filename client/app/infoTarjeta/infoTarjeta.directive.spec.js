'use strict';

describe('Directive: infoTarjeta', function () {

  // load the directive's module and view
  beforeEach(module('helpetApp'));
  beforeEach(module('app/infoTarjeta/infoTarjeta.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<info-tarjeta></info-tarjeta>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the infoTarjeta directive');
  }));
});
