'use strict';

angular.module('helpetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('DetailAnimal', {
        url: '/DetailAnimal/:animalid',
        template: '<detail-animal></detail-animal>'
      });
  });
