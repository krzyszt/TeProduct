(function(){
    'use strict)';

    angular.module('app').controller('SelectLocation', ['$scope','dataService',SelectLocation]);

    function SelectLocation ($scope, dataService) {
      $scope.isLoaded = false;
      dataService.getLocations().then(function(data){
        $scope.isLoaded = true;
        $scope.locations = data;

        for (var i=0; i < data.length; i++) {
          if (data[i].id == $scope.item.widgetSettings.id) {
            $scope.selectedLocation = data[i];
          }
        }
      });

      $scope.saveSettings = function(){
        $scope.item.widgetSettings.id = $scope.selectedLocation.id;
        $scope.$parent.selectedLocation = $scope.selectedLocation;
        $scope.$close();
      }

    }

})();
