'use strict';
(function(){

class DetailAnimalComponent {
  constructor($http, DetailAnimal, $stateParams) {

    this.$http = $http;
    this.detailAnimalService = DetailAnimal;
    this.listaAnimales = [];
    this.$stateParams = $stateParams;
    this.idanimal;
    this.obteneranimal;
  }



  $onInit() {


    this.detailAnimalService.getDetailAnimales().then(response => {
      this.listaAnimales = response.data;
      var idani = this.$stateParams.animalid;
      var animal = {
        nombre: "",
        tipo: "",
        imagen: "",
        ubicacion: "",
        rasgos: "",
        observacion: ""
      }


      angular.forEach(this.listaAnimales, function (item) {


        if (item.id == idani) {

           animal.nombre = item.Nombre;
           animal.tipo = item.Tipo;
           animal.rasgos = item.Rasgos;
           animal.imagen = item.Imagen;
           animal.observacion = item.Observacion;
           animal.ubicacion = item.Ubicacion;

            console.log(animal.nombre);
            console.log(animal.tipo);
            console.log(animal.observacion);
            console.log(animal.ubicacion);
          }
        });
      this.obteneranimal = animal;
      console.log(this.obteneranimal);
    });


  }





}
angular.module('helpetApp')
  .component('detailAnimal', {
    templateUrl: 'app/DetailAnimal/DetailAnimal.html',
    controller: DetailAnimalComponent
  });

})();
