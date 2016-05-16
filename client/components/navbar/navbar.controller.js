'use strict';

class NavbarController {
  //start-non-standard
  menu = [{

  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('helpetApp')
  .controller('NavbarController', NavbarController);
