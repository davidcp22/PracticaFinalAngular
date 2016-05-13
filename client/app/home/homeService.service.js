'use strict';

angular.module('helpetApp')
  .service('homeService', function ($http) {

    var self = this;

    self.getAnimales = function(){
      var request = $http({
        method:'GET',
        url: 'https://gist.githubusercontent.com/davidcp22/d1967026b327ce66af7371725cea4c8a/raw/animales.json'
      });

      return request;
    };

    self.getAnimaless = function () {
      var request = $http({
        method: 'GET',
        url: 'https://gist.githubusercontent.com/davidcp22/d1967026b327ce66af7371725cea4c8a/raw/animales.json'
      });

    }

  });
