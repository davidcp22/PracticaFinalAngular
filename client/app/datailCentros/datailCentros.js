'use strict';

angular.module('helpetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('datailCentros', {
        url: '/datailCentros/:centrosid',
        template: '<datail-centros></datail-centros>'
      });
  });
