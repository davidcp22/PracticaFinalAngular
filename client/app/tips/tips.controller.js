'use strict';
(function(){

class TipsComponent {
  constructor() {
    this.$http = $http;
    this.tips = tips;
    this.listaTips =[];

  }
}

  $onInit() {
    this.tips.getTips().then(response => {
      this.listaAnimales = response.data;
    console.log("desde Ctrl", response.data);
  });
  }


angular.module('helpetApp')
  .component('tips', {
    templateUrl: 'app/tips/tips.html',
    controller: TipsComponent
  });

})();
