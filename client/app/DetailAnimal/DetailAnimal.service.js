'use strict';

angular.module('helpetApp')
  .service('DetailAnimal', function ($http) {

    var self = this;

    self.getDetailAnimales = function(){
      var request = $http({
        method: 'GET',
        url: 'https://gist.githubusercontent.com/davidcp22/d1967026b327ce66af7371725cea4c8a/raw/animales.json',
        async:false
      });

      return request;
    };

  });
