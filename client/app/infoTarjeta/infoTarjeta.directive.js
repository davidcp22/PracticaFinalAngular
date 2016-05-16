'use strict';

angular.module('helpetApp')
  .directive('infoTarjeta', function () {
    return {
      templateUrl: 'app/infoTarjeta/infoTarjeta.html',
      restrict: 'EA',
      scope : {
        nombre : '=',
        imagen:"=",
        tipo:"="
      },
      link: function (scope, element, attrs) {
       
      }
    };
  });
