'use strict';
(function(){

class DetailCentrosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('helpetApp')
  .component('DetailCentros', {
    templateUrl: 'app/DetailCentros/DetailCentros.html',
    controller: DetailCentrosComponent
  });

})();
