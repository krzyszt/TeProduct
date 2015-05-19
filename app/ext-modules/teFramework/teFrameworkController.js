// TeFrameworkController.js

(function () {
  "use strict";

  angular.module('teFramework')
    .controller('TeFramework', ['$scope','$window','$timeout','$rootScope','$location',TeFramework]);

  function TeFramework($scope, $window, $timeout, $rootScope, $location) {
    var vm = this;

    vm.isMenuButtonVisible = false;
    vm.isMenuVisible = true;
    vm.isMenuVerticle = true;

    $scope.$on('te-menu-item-selected-event', function(evt, data){
      vm.routeString = data.route;
      $location.path(data.route);
      checkWidth();
      broadcastMenuState();
    });

    $scope.$on('te-menu-orientation-changed-event', function(evt, data){
      vm.isMenuVerticle = data.isMenuVerticle;
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
      broadcastMenuState();
    }, 0);

    vm.menuButtonClicked = function(){
      vm.isMenuVisible = !vm.isMenuVisible;
      broadcastMenuState();
    }

    var broadcastMenuState = function () {
      $rootScope.$broadcast('te-menu-show',{
        show: vm.isMenuVisible,
        isVertical: vm.isMenuVerticle,
        allowHorizontalToggle: !vm.isMenuButtonVisible
      })
    };
  }
})();