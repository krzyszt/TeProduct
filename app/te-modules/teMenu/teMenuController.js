(function(){
  "use strict";

  angular.module('teMenu').controller('TeMenu', ['$scope','$rootScope',TeMenu]);

  function TeMenu($scope, $rootScope){
    var vm = this;

    vm.showMenu = true;
    vm.isVertical = true;
    vm.allowHorizontalToggle = true;

    vm.setActiveItem = function(element){
      vm.activeElement = element;
    }

    vm.setRoute = function(route){
      $rootScope.$broadcast('te-menu-item-selected-event',{route: route});
    }

    $scope.$on('te-menu-show', function (evt, data) {
      vm.showMenu = data.show;
      vm.isVertical = data.isVertical;
      vm.allowHorizontalToggle = data.allowHorizontalToggle;
    });

    vm.toggleMenuOrientation = function(){

      if (vm.openMenuScope) {
        vm.openMenuScope.closeMenu();
      }
      vm.isVertical = !vm.isVertical;

      $rootScope.$broadcast('te-menu-orientation-changed-event', {
        isVertical: vm.isVertical
      });
    };

    vm.setOpenmenuScope = function(scope){
      vm.openMenuScope = scope;
    }

    angular.element(document).bind('click', function(e){
      if (vm.openMenuScope && !vm.isVertical) {
        if ($(e.target).parent().hasClass('te-menu-item')){
          return;
        }
        $scope.$apply(function(){
          vm.openMenuScope.closeMenu();
        })
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }
})();
