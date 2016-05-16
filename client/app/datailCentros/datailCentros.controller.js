'use strict';
(function(){

class DatailCentrosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('helpetApp')
  .component('datailCentros', {
    templateUrl: 'app/datailCentros/datailCentros.html',
    controller: DatailCentrosComponent
  });

})();
