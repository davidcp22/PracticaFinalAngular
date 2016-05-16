'use strict';

describe('Service: datailCentros', function () {

  // load the service's module
  beforeEach(module('helpetApp.datailCentros'));

  // instantiate service
  var datailCentros;
  beforeEach(inject(function (_datailCentros_) {
    datailCentros = _datailCentros_;
  }));

  it('should do something', function () {
    expect(!!datailCentros).to.be.true;
  });

});
