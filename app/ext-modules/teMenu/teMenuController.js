(function(){
  "use strict";

  angular.module('teMenu').controller('TeMenu', ['$scope','$rootScope',TeMenu]);

  function TeMenu($scope, $rootScope){
    var vm = this;

    vm.showMenu = true;

    vm.setActiveItem = function(element){
      vm.activeElement = element;
    }

    vm.setRoute = function(route){
      $rootScope.$broadcast('te-menu-item-selected-event',{route: route});
    }

    $scope.$on('te-menu-show', function (evt, data) {
      vm.showMenu = data.show;
    });


  }

})();
