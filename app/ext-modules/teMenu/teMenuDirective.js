(function () {
  "use strict";

  angular.module('teMenu')
    .directive('teMenu', TeMenu);

  function TeMenu() {
    return {
      transclude: true,
      scope: {
        
      },
      controller: 'TeMenu',
      controllerAs: 'vm',
      templateUrl: 'app/ext-modules/teMenu/teMenu.tpl.html',
      link: function(scope, el, attr){

      }
    }
  }
})();
