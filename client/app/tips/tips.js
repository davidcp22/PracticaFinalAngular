'use strict';

angular.module('helpetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tips', {
        url: '/tips',
        template: '<tips></tips>'
      });
  });
