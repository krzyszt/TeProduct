(function(){
  "use strict";

  angular.module('app.core').directive('tewDashboard', TewDashboard);

  function TewDashboard() {
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
                id: 1000
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
                id: 1000
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
                employeeId: 5001
              }
            }
          }
        ];

        scope.widgets = []
      }
    }
  }
})();
