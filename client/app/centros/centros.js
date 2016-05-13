'use strict';

angular.module('helpetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('centros', {
        url: '/centros',
        template: '<centros></centros>'
      });
  });
