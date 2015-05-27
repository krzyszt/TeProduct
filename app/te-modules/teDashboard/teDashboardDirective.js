(function(){
  "use strict";

  angular.module('teDashboard').directive('teDashboard',TeDashboard)

  function TeDashboard() {
    return {
      templateUrl: 'app/te-modules/teDashboard/teDashboard.tpl.html',
      link: function(scope, el, attrs) {
        scope.addNewWidget = function(widget){
          var newWidget = angular.copy(widget.settings);
          scope.widgets.push(newWidget);
        }
      }
    }
  }
})();
