'use strict';

angular.module('helpetApp')
  .service('tips', function () {

    var self = this;

    self.getTips = function(){
      var request = $http({
        method: 'GET',
        url: 'https://gist.githubusercontent.com/davidcp22/c1361c31290855cffc5a782507f4fc33/raw/centros.json'
      });

      return request;
    };
  });
