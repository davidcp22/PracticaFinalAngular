'use strict';
(function(){

class TipsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('helpetApp')
  .component('tips', {
    templateUrl: 'app/tips/tips.html',
    controller: TipsComponent
  });

})();
