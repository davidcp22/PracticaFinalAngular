'use strict';
(function(){

class CentrosComponent {
  constructor($http,centros) {
    this.$http = $http;
    this.centros = centros;
    this.listaCentros =[];
    this.idcentro;

    this.centro = {
      nombre:"",
      tipo:"",
      imagen:"",
      ubicacion:"",
      telefono:""

    }

  }
  $onInit() {
    this.centros.getCentros().then(response => {
      this.listaCentros = response.data;
    console.log("desde Ctrl", response.data);
  });
  }




}

angular.module('helpetApp')
  .component('centros', {
    templateUrl: 'app/centros/centros.html',
    controller: CentrosComponent
  });
  component('detail', {
    templateUrl: 'app/home/detail.html',
    controller: CentrosComponent
  });

})();
