// TeFrameworkController.js

(function () {
  "use strict";

  angular.module('teFramework')
    .controller('TeFramework', ['$scope','$window','$timeout','$rootScope',TeFramework]);

  function TeFramework($scope, $window, $timeout, $rootScope) {
    var vm = this;

    vm.isMenuButtonVisible = false;
    vm.isMenuVisible = true;

    $scope.$on('te-menu-item-selected-event', function(evt, data){
      vm.routeString = data.route;
      checkWidth();
      broadcastMenuState();
    });

    $($window).on('resize.teFramework', function(){
      $scope.$apply(function(){
        checkWidth();
        broadcastMenuState();
      });
    });

    $scope.$on("$destroy", function () {
      $($window).off("resize.teFramework");
    });

    var checkWidth = function () {
      var width = Math.max($($window).width(), $($window).innerWidth());
      vm.isMenuVisible = (width > 768);
      vm.isMenuButtonVisible = !vm.isMenuVisible;
    };

    $timeout(function () {
      checkWidth();
    }, 0);

    var broadcastMenuState = function () {
      $rootScope.$broadcast('te-menu-show',{
        show: vm.isMenuVisible
      })
    };

    vm.menuButtonClicked = function(){
      vm.isMenuVisible = !vm.isMenuVisible;
      broadcastMenuState();
    }



  }
})();