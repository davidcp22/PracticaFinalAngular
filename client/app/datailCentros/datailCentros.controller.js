'use strict';
(function(){

  class datailCentrosComponent {
    constructor($http, datailCentros, $stateParams) {

      this.$http = $http;
      this.datailCentros = datailCentros;
      this.listaCentros = [];
      this.$stateParams = $stateParams;
      this.idcentros;
      this.obtenercentros;
    }



    $onInit() {


      this.datailCentros.getDatailCentros().then(response => {
        this.listaCentros = response.data;
        var idani = this.$stateParams.centroid;
        var centro = {
          nombre:"",
          tipo:"",
          imagen:"",
          ubicacion:"",
          telefono:""
        }


        angular.forEach(this.listaCentros, function (item) {


          if (item.id == idani) {

            centro.nombre = item.Nombre;
            centro.tipo = item.Tipo;
            centro.imagen = item.Imagen;
            centro.ubicacion = item.Ubiccacion;
            centro.telefono=item.Telefono;

            console.log(centro.nombre);
            console.log(centro.tipo);
            console.log(centro.observacion);
            console.log(centro.ubicacion);
          }
        });
        this.obtenercentro = centro;
        console.log(this.obtenercentro);
      });


    }





  }





angular.module('helpetApp')
  .component('datailCentros', {
    templateUrl: 'app/datailCentros/datailCentros.html',
    controller: datailCentrosComponent
  });

})();
