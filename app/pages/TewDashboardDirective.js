(function(){
  "use strict";

  angular.module('app.core').directive('tewDashboard', ['$localStorage',TewDashboard]);

  function TewDashboard($localStorage) {
    return {
      scope: {
      },
      template: '<te-dashboard></te-dashboard>',
      link: function(scope, el, attrs) {

        scope.title = 'Te Product Dashboard';

        scope.gridsterOpts = {
          columns: 12,
          margins: [20,20],
          outerMargin: false,
          pushing: true,
          floating: true,
          swapping: false
        };

        scope.widgetDefinitions = [
          {
            title: 'Temperature',
            settings: {
              sizeX: 3,
              sizeY: 3,
              minSizeX: 2,
              minSizeY:2,
              template: '<cc-temperature></cc-temperature>',
              widgetSettings: {
                id: 1000,
                templateUrl: 'app/dialogs/ccSelectLocation.tpl.html',
                controller: 'SelectLocation'
              }
            }
          },
          {
            title: 'Inventory',
            settings: {
              sizeX: 5,
              sizeY: 1,
              minSizeX: 2,
              minSizeY:2,
              template: '<cc-inventory></cc-inventory>',
              widgetSettings: {
                id: 1000,
                templateUrl: 'app/dialogs/ccSelectLocation.tpl.html',
                controller: 'SelectLocation'
              }
            }
          },
          {
            title: 'Employee',
            settings: {
              sizeX: 4,
              sizeY: 1,
              minSizeX: 2,
              minSizeY:2,
              template: '<cc-employee></cc-employee>',
              widgetSettings: {
                id: 5001,
                templateUrl: 'app/dialogs/ccSelectEmployee.tpl.html',
                controller: 'SelectEmployee'
              }
            }
          }
        ];

        scope.widgets = $localStorage.widgets || [];

        scope.$watch('widgets', function(){
            $localStorage.widgets = scope.widgets;
        }, true);
      }
    }
  }
})();
