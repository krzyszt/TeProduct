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

        scope.widgets = [
          {
            title: 'First Widget',
            sizeX: 3,
            sizeY: 3,
            row: 0,
            col:0,
            template: '<cc-temperature></cc-temperature>',
            widgetSettings: {
              id: 1000
            }
          }
        ]
      }
    }
  }
})();
