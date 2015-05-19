(function(){
  "use strict";

  angular.module('teDashboard').directive('teDashboard',TeDashboard)

  function TeDashboard() {
    return {
      templateUrl: 'app/ext-modules/teDashboard/teDashboard.tpl.html'
    }
  }
})();
