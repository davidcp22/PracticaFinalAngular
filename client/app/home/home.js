'use strict';

angular.module('helpetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        template: '<home></home>'
      })
      .state('detail',{
        url:'/detailanimal/:idanimal',
        template:'<detail></detail>'
      });
  });
