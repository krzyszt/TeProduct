(function(){
  "use strict";

  angular.module('teMenu').controller('TeMenu', ['$scope','$rootScope',TeMenu]);

  function TeMenu($scope, $rootScope){
    var vm = this;

    vm.setActiveItem = function(element){
      vm.activeElement = element;
    }

    vm.setRoute = function(route){
      $rootScope.$broadcast('te-menu-item-selected-event',{route: route});
    }
  }

})();
