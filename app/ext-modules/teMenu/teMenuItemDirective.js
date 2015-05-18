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
      link: function (scope, el, attr, ctrl) {

        scope.isActive = function(){
          return el === ctrl.activeElement;
        };

        scope.isVertical = function(){
          return ctrl.isVertical || el.parents('.te-submenu-section').length > 0;
        };

        el.on('click', function (evt) {
          evt.stopPropagation();
          evt.preventDefault();
          scope.$apply(function () {
              ctrl.setActiveItem(el);
              ctrl.setRoute(scope.route);
            }
          );
        })
      }
    }
  }
})();

