'use strict';

angular.module('helpetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('centros', {
        url: '/centros',
        template: '<centros></centros>'
      })
      .state('detail',{
        url:'/detailcentro/:idcentro',
        template:'<detail></detail>'
      });
  });
