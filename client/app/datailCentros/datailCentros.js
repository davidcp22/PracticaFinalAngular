'use strict';

angular.module('helpetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('datailCentros', {
        url: '/datailCentros',
        template: '<datail-centros></datail-centros>'
      });
  });
