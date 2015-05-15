// TeFrameworkController.js

(function () {
  "use strict";

  angular.module('teFramework')
    .controller('TeFramework', ['$scope',TeFramework]);

  function TeFramework($scope) {
    var vm = this;

    $scope.$on('te-menu-item-selected-event', function(evt, data){
      vm.routeString = data.route;
    })

  }
})();