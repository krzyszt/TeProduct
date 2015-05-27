(function(){
  "use strict";

  angular.module('teMenu').directive('teMenuGroup', TeMenuGroupDirective);

  function TeMenuGroupDirective() {
    return {
      require: '^teMenu',
      transclude: true,
      scope: {
        label: '@',
        icon: '@'
      },
      templateUrl: 'app/te-modules/teMenu/teMenuGroup.tpl.html',
      link: function(scope, el, attr, ctrl){
        scope.isOpen = false;

        scope.closeMenu = function(){
          scope.isOpen = false;
        }


        scope.clicked = function(){
          scope.isOpen = !scope.isOpen;

          if (el.parents('.te-submenu-section').length == 0) {
            scope.setMenuPopupPosition();
          }

          ctrl.setOpenmenuScope(scope);
        }

        scope.isVertical = function(){
          return ctrl.isVertical || el.parents('.te-submenu-section').length > 0;
        }

        scope.setMenuPopupPosition = function () {
          var pos = el.offset();
          $('.te-submenu-section').css({'left': pos.left + 20, 'top': 36});
        };


      }
    }
  }

})();
