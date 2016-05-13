'use strict';

angular.module('helpetApp.tips')
  .service('tips', function () {

    var self = this;

    self.getTips = function(){
      var request = $http({
        method: 'GET',
        url: 'https://gist.githubusercontent.com/davidcp22/ed919ff55377942cf415ab6a64510f89/raw/tips.json'
      });

      return request;
    };
  });
