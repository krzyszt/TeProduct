(function(){
    'use strict)';

    angular.module('app').controller('SelectEmployee', ['$scope','dataService',SelectEmployee]);

    function SelectEmployee ($scope, dataService) {
      $scope.isLoaded = false;
      dataService.getEmployees().then(function(data){
        $scope.isLoaded = true;
        $scope.employees = data;

        for (var i=0; i<data.length; i++) {
          if (data[i].id = $scope.item.widgetSettings.id) {
            $scope.selectedEmployee = data[i];
          }
        }
      })

      $scope.saveSettings = function(){
        $scope.item.widgetSettings.id = $scope.selectedEmployee.id;
        $scope.$parent.selectedEmployee = $scope.selectedEmployee;
        $scope.$close();
      }
    }

})();
