'use strict';
(function(){

class DetailAnimalComponent {
  constructor($http, DetailAnimal) {
    this.message = 'Hello';
    this.$http = $http;
    //this.detailAnimalService = DetailAnimal;
    this.listaAnimales = [];
  }


  /*this.detailAnimalService.getDetailAnimales().then(response => {
    this.listaAnimales = response.data;
});

  this.getDetailAnimal = function (idAnimal,this.listaAnimales)
  {

    var animal = {
      idAnimal: "",
      nombreAnimal: "",
      estadoAnimal: "",
      ubicacionAnimal: "",
      imagenAnimal: ""
    }
    angular.forEach(listaAnimales, function (item) {
      if (item.id === id) {
        item.id = animal.idAnimal;
        item.nombre = animal.nombreAnimal;
        item.estado = animal.estadoAnimal;
        item.ubiccacion = animal.ubicacionAnimal;
      }
    });
    return animal;
  }*/

}
angular.module('helpetApp')
  .component('DetailAnimal', {
    templateUrl: 'app/DetailAnimal/DetailAnimal.html',
    controller: DetailAnimalComponent
  });

})();
