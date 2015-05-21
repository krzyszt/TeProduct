(function () {
  'use strict)';

  angular.module('app').directive('ccTemperature', ['dataService', CCTemperature]);

  function CCTemperature(dataService) {
    return {
      templateUrl: 'app/widgets/ccTemperature/ccTemperature.tpl.html',
      link: function (scope, el, attrs) {

          dataService.getLocation(scope.item.widgetSettings.id)
            .then(function(data){
              scope.selectedLocation = data;
            });

      }
    }

  }

})();