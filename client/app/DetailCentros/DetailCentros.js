'use strict';

angular.module('helpetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('DetailCentros', {
        url: '/DetailCentros',
        template: '<detail-centros></detail-centros>'
      });
  });
