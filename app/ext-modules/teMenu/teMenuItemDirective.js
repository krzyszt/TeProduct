(function () {
  "use strict";

  angular.module('teMenu')
    .directive('teMenuItem', TeMenuItem);

  function TeMenuItem() {
    return {
      require: '^teMenu',
      scope: {
        label: '@',
        icon: '@',
        route: '@'
      },
      templateUrl: 'app/ext-modules/teMenu/teMenuItem.tpl.html',
      link: function(scope, el, attr, ctrl){

      }
    }
  }
})();

