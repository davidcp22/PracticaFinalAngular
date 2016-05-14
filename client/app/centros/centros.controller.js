'use strict';
(function(){

class CentrosController {
  constructor($http,centros) {
    this.$http = $http;
    this.centros = centros;
    this.listaCentros =[];

  }
  $onInit() {
    this.Centros.getCentros().then(response => {
      this.listaCentros = response.data;
    console.log("desde Ctrl", response.data);
  });
  }




}

angular.module('helpetApp')
  .component('centros', {
    templateUrl: 'app/centros/centros.html',
    controller: CentrosController
  });

})();
