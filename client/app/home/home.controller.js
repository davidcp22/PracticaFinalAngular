'use strict';
(function(){

class HomeComponent {
  constructor($http, homeService) {

    this.$http = $http;
    this.homeservice = homeService;
    this.listaAnimales =[];
    this.InfoDetalleAnimal=[];
    this.idanimal;

    this.animal = {
      nombre:"",
      tipo:"",
      imagen:"",
      ubicacion:"",
      rasgos:"",
      observacion:""
    }

  }


  $onInit() {

    this.homeservice.getAnimales().then(response => {
      this.listaAnimales = response.data;
    console.log("desde Ctrl", response.data);
  });

    /*this.idanimal = this.$stateParams.animalid;
    var id = this.idanimal;

    this.obteneranimal = function (id) {
      angular.forEach(this.listaAnimales, function (item) {
        if (item.id === id) {
          item.Nombre = this.animal.nombre;
          item.Tipo = this.animal.tipo;
          item.Rasgos = this.animal.rasgos;
          item.Ubiccacion = this.animal.ubicacion;
          item.Observacion = this.animal.observacion;
          item.Imagen = this.imagen;
        }
      });
    }
*/
  }
}

angular.module('helpetApp')
  .component('home', {
    templateUrl: 'app/home/home.html',
    controller: HomeComponent
  }).
  component('detail', {
  templateUrl: 'app/home/detail.html',
  controller: HomeComponent
});
})();
